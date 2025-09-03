(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.RTKVisualization = {}));
})(this, (function (exports) { 'use strict';

    /**
     * TypeScript interfaces for RTK data structures and graph representations
     */
    /**
     * Subtle, washed-out Fortnite-inspired color scheme for JLPT levels
     */
    const JLPT_COLORS = {
        N5: "#E8E8E8", // Very light gray (Common)
        N4: "#E8F5E8", // Very light green (Uncommon)
        N3: "#E8F4FF", // Very light blue (Rare)
        N2: "#F3E8FF", // Very light purple (Epic)
        N1: "#FFF8DC", // Very light gold/cream (Legendary)
    };
    /**
     * Error types for data processing
     */
    class RTKDataError extends Error {
        constructor(message, context) {
            super(message);
            this.context = context;
            this.name = "RTKDataError";
        }
    }
    class RTKNetworkError extends Error {
        constructor(message, url) {
            super(message);
            this.url = url;
            this.name = "RTKNetworkError";
        }
    }
    class RTKParseError extends Error {
        constructor(message, lineNumber) {
            super(message);
            this.lineNumber = lineNumber;
            this.name = "RTKParseError";
        }
    }

    /**
     * Data fetching module for RTK CSV files from GitHub or local files
     */
    // GitHub raw URLs for RTK data
    const KANJI_CSV_URL = 'https://raw.githubusercontent.com/cyphar/heisig-rtk-index/master/kanji/KANJI_INDEX.csv';
    const PRIMITIVES_CSV_URL = 'https://raw.githubusercontent.com/cyphar/heisig-rtk-index/master/primitives/INPUT.csv';
    // Check if we're in Node.js environment
    const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;
    // Local file paths (Node.js only)
    let DATA_DIR = '';
    let LOCAL_KANJI_PATH = '';
    let LOCAL_PRIMITIVES_PATH = '';
    let LOCAL_JLPT_PATH = '';
    // Initialize Node.js paths if available
    if (isNode) {
        try {
            const path = require('path');
            DATA_DIR = path.join(process.cwd(), 'data');
            LOCAL_KANJI_PATH = path.join(DATA_DIR, 'kanji.csv');
            LOCAL_PRIMITIVES_PATH = path.join(DATA_DIR, 'primitives.csv');
            LOCAL_JLPT_PATH = path.join(DATA_DIR, 'jlpt-kanji-mapping.json');
        }
        catch (e) {
            // Fallback to remote-only mode if path module unavailable
        }
    }
    let config = {
        useLocalFiles: Boolean(isNode), // Only use local files in Node.js environment
        refreshFromRemote: false
    };
    /**
     * Configure the fetcher behavior
     * @param newConfig Configuration options
     */
    function configureFetcher(newConfig) {
        config = { ...config, ...newConfig };
    }
    // Cache configuration
    const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const CACHE_PREFIX = 'rtk-cache-';
    /**
     * Simple in-memory cache for development
     */
    class DataCache {
        constructor() {
            this.cache = new Map();
        }
        set(key, data) {
            this.cache.set(key, {
                data,
                timestamp: Date.now()
            });
        }
        get(key) {
            const entry = this.cache.get(key);
            if (!entry)
                return null;
            const isExpired = Date.now() - entry.timestamp > CACHE_DURATION;
            if (isExpired) {
                this.cache.delete(key);
                return null;
            }
            return entry.data;
        }
        clear() {
            this.cache.clear();
        }
    }
    const cache = new DataCache();
    /**
     * Reads data from local file (Node.js only)
     */
    function readLocalFile(filePath) {
        if (!isNode) {
            throw new RTKNetworkError('Local file access not available in browser environment', filePath);
        }
        try {
            const fs = require('fs');
            return fs.readFileSync(filePath, 'utf8');
        }
        catch (error) {
            throw new RTKNetworkError(`Failed to read local file: ${error instanceof Error ? error.message : 'Unknown error'}`, filePath);
        }
    }
    /**
     * Fetches data from a URL with caching and error handling
     */
    async function fetchWithCache(url, cacheKey) {
        // Check cache first
        const cachedData = cache.get(cacheKey);
        if (cachedData) {
            return cachedData;
        }
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new RTKNetworkError(`Failed to fetch data: ${response.status} ${response.statusText}`, url);
            }
            const data = await response.text();
            // Cache the successful response
            cache.set(cacheKey, data);
            return data;
        }
        catch (error) {
            if (error instanceof RTKNetworkError) {
                throw error;
            }
            // Handle network errors (no internet, DNS issues, etc.)
            throw new RTKNetworkError(`Network error while fetching data: ${error instanceof Error ? error.message : 'Unknown error'}`, url);
        }
    }
    /**
     * Writes data to local file (used when refreshing from remote, Node.js only)
     */
    async function writeLocalFile(filePath, data) {
        if (!isNode) {
            throw new RTKNetworkError('Local file access not available in browser environment', filePath);
        }
        try {
            const fs = require('fs');
            fs.writeFileSync(filePath, data, 'utf8');
        }
        catch (error) {
            throw new RTKNetworkError(`Failed to write local file: ${error instanceof Error ? error.message : 'Unknown error'}`, filePath);
        }
    }
    /**
     * Fetches kanji data from local file or GitHub repository
     * @returns Promise resolving to CSV text content
     * @throws RTKNetworkError on network or HTTP errors
     */
    async function fetchKanjiData() {
        if (config.useLocalFiles && !config.refreshFromRemote && isNode) {
            return readLocalFile(LOCAL_KANJI_PATH);
        }
        const data = await fetchWithCache(KANJI_CSV_URL, `${CACHE_PREFIX}kanji`);
        if (config.refreshFromRemote && isNode) {
            await writeLocalFile(LOCAL_KANJI_PATH, data);
        }
        return data;
    }
    /**
     * Fetches primitives data from local file or GitHub repository
     * @returns Promise resolving to CSV text content
     * @throws RTKNetworkError on network or HTTP errors
     */
    async function fetchPrimitivesData() {
        if (config.useLocalFiles && !config.refreshFromRemote && isNode) {
            return readLocalFile(LOCAL_PRIMITIVES_PATH);
        }
        const data = await fetchWithCache(PRIMITIVES_CSV_URL, `${CACHE_PREFIX}primitives`);
        if (config.refreshFromRemote && isNode) {
            await writeLocalFile(LOCAL_PRIMITIVES_PATH, data);
        }
        return data;
    }
    /**
     * Fetches both kanji and primitives data concurrently
     * @returns Promise resolving to object with both datasets
     * @throws RTKNetworkError on network or HTTP errors
     */
    async function fetchAllData() {
        try {
            const [kanji, primitives] = await Promise.all([
                fetchKanjiData(),
                fetchPrimitivesData()
            ]);
            return { kanji, primitives };
        }
        catch (error) {
            // Re-throw RTKNetworkError as-is, wrap other errors
            if (error instanceof RTKNetworkError) {
                throw error;
            }
            throw new RTKNetworkError(`Failed to fetch RTK data: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
    /**
     * Clears the data cache (useful for testing or forcing refresh)
     */
    function clearCache() {
        cache.clear();
    }
    /**
     * Loads JLPT kanji level mapping from local JSON file or web resource
     * @returns Promise resolving to mapping of kanji to JLPT levels
     * @throws RTKNetworkError if file cannot be loaded
     */
    async function fetchJLPTMapping() {
        if (isNode) {
            // Node.js environment - read from local file
            try {
                const data = readLocalFile(LOCAL_JLPT_PATH);
                return JSON.parse(data);
            }
            catch (error) {
                throw new RTKNetworkError(`Failed to load JLPT mapping: ${error instanceof Error ? error.message : 'Unknown error'}`, LOCAL_JLPT_PATH);
            }
        }
        else {
            // Browser environment - fetch from web server
            try {
                const response = await fetch('./data/jlpt-kanji-mapping.json');
                if (!response.ok) {
                    throw new RTKNetworkError(`Failed to fetch JLPT mapping: ${response.status} ${response.statusText}`, './data/jlpt-kanji-mapping.json');
                }
                const data = await response.json();
                return data;
            }
            catch (error) {
                throw new RTKNetworkError(`Failed to load JLPT mapping in browser: ${error instanceof Error ? error.message : 'Unknown error'}`, './jlpt-kanji-mapping.json');
            }
        }
    }

    var fetcher = /*#__PURE__*/Object.freeze({
        __proto__: null,
        clearCache: clearCache,
        configureFetcher: configureFetcher,
        fetchAllData: fetchAllData,
        fetchJLPTMapping: fetchJLPTMapping,
        fetchKanjiData: fetchKanjiData,
        fetchPrimitivesData: fetchPrimitivesData
    });

    /**
     * CSV parsing module for RTK data
     */
    /**
     * Parses a CSV line, handling quoted fields and escaped characters
     */
    function parseCSVLine(line) {
        const result = [];
        let current = '';
        let inQuotes = false;
        let i = 0;
        while (i < line.length) {
            const char = line[i];
            const nextChar = line[i + 1];
            if (char === '"') {
                if (inQuotes && nextChar === '"') {
                    // Escaped quote
                    current += '"';
                    i += 2;
                }
                else {
                    // Toggle quote state
                    inQuotes = !inQuotes;
                    i++;
                }
            }
            else if (char === ',' && !inQuotes) {
                // Field separator
                result.push(current.trim());
                current = '';
                i++;
            }
            else {
                current += char;
                i++;
            }
        }
        // Add the last field
        result.push(current.trim());
        return result;
    }
    /**
     * Converts string to number, returning undefined for empty/invalid values
     */
    function parseOptionalNumber(value) {
        const trimmed = value.trim();
        if (!trimmed || trimmed === 'NULL' || trimmed === 'null') {
            return undefined;
        }
        const parsed = parseInt(trimmed, 10);
        return isNaN(parsed) ? undefined : parsed;
    }
    /**
     * Converts string to boolean, handling common boolean representations
     */
    function parseBoolean(value) {
        const trimmed = value.trim().toLowerCase();
        return trimmed === 'true' || trimmed === '1' || trimmed === 'yes';
    }
    /**
     * Validates that required fields are present for kanji data
     */
    function validateKanjiData(data, lineNumber) {
        if (!data.kanji?.trim()) {
            throw new RTKParseError(`Missing kanji character at line ${lineNumber}`, lineNumber);
        }
        if (!data.keyword5th?.trim() && !data.keyword6th?.trim()) {
            throw new RTKParseError(`Missing keywords at line ${lineNumber}`, lineNumber);
        }
    }
    /**
     * Validates that required fields are present for primitive data
     */
    function validatePrimitiveData(data, lineNumber) {
        if (!data.oldPath?.trim()) {
            throw new RTKParseError(`Missing oldPath at line ${lineNumber}`, lineNumber);
        }
    }
    /**
     * Parses kanji CSV data
     * Expected format: kanji,id_5th_ed,id_6th_ed,keyword_5th_ed,keyword_6th_ed,components,on_reading,kun_reading
     *
     * @param csvText Raw CSV text content
     * @returns Array of parsed kanji data
     * @throws RTKParseError on parsing errors
     */
    function parseKanjiCSV(csvText) {
        const lines = csvText.split('\n').map(line => line.trim()).filter(line => line.length > 0);
        if (lines.length === 0) {
            throw new RTKParseError('CSV file is empty');
        }
        // Skip header line if it exists
        const startIndex = lines[0].toLowerCase().includes('kanji') ? 1 : 0;
        const result = [];
        for (let i = startIndex; i < lines.length; i++) {
            const line = lines[i];
            const lineNumber = i + 1;
            try {
                const fields = parseCSVLine(line);
                // For graceful handling of malformed CSV, pad missing fields with empty strings
                // But still ensure we have at least the basic required fields (kanji character)
                while (fields.length < 8) {
                    fields.push('');
                }
                const kanjiData = {
                    kanji: fields[0].trim(),
                    id5th: parseOptionalNumber(fields[1]),
                    id6th: parseOptionalNumber(fields[2]),
                    keyword5th: fields[3].trim(),
                    keyword6th: fields[4].trim(),
                    components: fields[5].trim(),
                    onReading: fields[6].trim(),
                    kunReading: fields[7].trim()
                };
                validateKanjiData(kanjiData, lineNumber);
                result.push(kanjiData);
            }
            catch (error) {
                if (error instanceof RTKParseError) {
                    throw error;
                }
                throw new RTKParseError(`Error parsing line ${lineNumber}: ${error instanceof Error ? error.message : 'Unknown error'}`, lineNumber);
            }
        }
        return result;
    }
    /**
     * Parses primitives CSV data
     * Expected format: old_path,parent_frame,unicode,next_frame,real_heisig
     *
     * @param csvText Raw CSV text content
     * @returns Array of parsed primitive data
     * @throws RTKParseError on parsing errors
     */
    function parsePrimitivesCSV(csvText) {
        const lines = csvText.split('\n').map(line => line.trim()).filter(line => line.length > 0);
        if (lines.length === 0) {
            throw new RTKParseError('CSV file is empty');
        }
        // Skip header line if it exists
        const startIndex = lines[0].toLowerCase().includes('old_path') ? 1 : 0;
        const result = [];
        for (let i = startIndex; i < lines.length; i++) {
            const line = lines[i];
            const lineNumber = i + 1;
            try {
                const fields = parseCSVLine(line);
                if (fields.length < 1) {
                    throw new RTKParseError(`Insufficient fields at line ${lineNumber}`, lineNumber);
                }
                const primitiveData = {
                    oldPath: fields[0].trim(),
                    parentFrame: fields.length > 1 ? parseOptionalNumber(fields[1]) : undefined,
                    unicode: fields.length > 2 && fields[2].trim() ? fields[2].trim() : undefined,
                    nextFrame: fields.length > 3 ? parseOptionalNumber(fields[3]) : undefined,
                    realHeisig: fields.length > 4 && fields[4].trim() ? parseBoolean(fields[4]) : undefined
                };
                validatePrimitiveData(primitiveData, lineNumber);
                result.push(primitiveData);
            }
            catch (error) {
                if (error instanceof RTKParseError) {
                    throw error;
                }
                throw new RTKParseError(`Error parsing line ${lineNumber}: ${error instanceof Error ? error.message : 'Unknown error'}`, lineNumber);
            }
        }
        return result;
    }
    /**
     * Parses both kanji and primitives CSV data
     *
     * @param kanjiCSV Raw kanji CSV text
     * @param primitivesCSV Raw primitives CSV text
     * @returns Object containing both parsed datasets
     * @throws RTKParseError on parsing errors
     */
    function parseAllCSV(kanjiCSV, primitivesCSV) {
        try {
            const kanji = parseKanjiCSV(kanjiCSV);
            const primitives = parsePrimitivesCSV(primitivesCSV);
            return { kanji, primitives };
        }
        catch (error) {
            if (error instanceof RTKParseError) {
                throw error;
            }
            throw new RTKParseError(`Failed to parse CSV data: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }

    var parser = /*#__PURE__*/Object.freeze({
        __proto__: null,
        parseAllCSV: parseAllCSV,
        parseKanjiCSV: parseKanjiCSV,
        parsePrimitivesCSV: parsePrimitivesCSV
    });

    /**
     * Component mapping configurations for RTK mnemonic resolution
     *
     * This module handles the disambiguation between:
     * 1. Complex kanji that happen to share keywords with primitive components
     * 2. Keywords that should map to specific primitive characters rather than kanji
     */
    /**
     * Kanji that should NOT be used as components when their keyword is referenced.
     * These are complex kanji where the primitive/component form is preferred.
     *
     * Key: kanji character
     * Value: reason for exclusion (for documentation)
     */
    const COMPLEX_KANJI_EXCLUSIONS = {
        // Only exclude kanji where there's a clear primitive alternative that should be preferred
        '肘': 'Complex kanji - prefer primitive 厶 when "elbow" is referenced as component',
        // Add others only when there's a clear conflict between primitive and full kanji form
    };
    /**
     * Keywords that should prefer kanji over primitives when both exist.
     * These are typically fundamental kanji that are themselves the canonical component form.
     */
    const PREFER_KANJI_KEYWORDS = new Set([
        'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'hundred', 'thousand', 'man', 'large', 'small', 'up', 'down', 'left', 'right'
    ]);
    /**
     * Manual mappings for keywords that should resolve to specific characters
     * rather than their full kanji equivalents.
     *
     * Key: keyword used in components field
     * Value: preferred character to use (could be primitive, simplified form, or placeholder)
     */
    const KEYWORD_TO_CHARACTER_MAPPINGS = {
        // Primitives that don't have direct kanji equivalents
        'elbow': '厶', // Primitive form, not the full kanji 肘
        'top hat': '⺊', // Primitive radical
        'animal legs': 'ハ', // Primitive form  
        'human legs': '儿', // Primitive form
        'drop': '丶', // Primitive dot
        'needle': '十', // Simple form for "ten" when used as component
        'ice': '冫', // Primitive ice radical
        'cliff': '厂', // Primitive cliff radical
        'tent': '⺊', // Primitive tent form
        'crown': '冖', // Primitive crown radical
        'cave': '穴', // Use hole/cave radical form
        'house': '宀', // Primitive house roof
        'walking stick': '丨', // Primitive vertical line
        'bound up': '勹', // Primitive bound up radical
        'embrace': '勹', // Alternative name for bound up
        'horns': '丷', // Primitive horns
        'wind': '几', // Primitive wind form
        'claw': '爪', // Primitive claw form
        'vulture': '爪', // Same as claw in RTK context
        // Common components that should use primitive forms
        'mouth': '口', // Keep as primitive when used in components
        'eye': '目', // Keep as primitive when used in components  
        'day': '日', // Keep as primitive when used in components
        'sun': '日', // Same as day
        'month': '月', // Keep as primitive when used in components
        'moon': '月', // Same as month
        'flesh': '月', // Meat radical, same as month
        'part of the body': '月', // Alternative name for flesh radical
        'person': '人', // Keep as primitive when used in components
        'water': '水', // Keep as primitive when used in components
        'water droplets': '氵', // Water radical form
        'water pistol': '氵', // Alternative name for water radical
        'fire': '火', // Keep as primitive when used in components
        'oven-fire': '灬', // Bottom fire form
        'barbecue': '灬', // Alternative name for bottom fire
        'soil': '土', // Keep as primitive when used in components
        'dirt': '土', // Same as soil
        'ground': '土', // Same as soil
        'tree': '木', // Keep as primitive when used in components
        'wood': '木', // Same as tree
        'hand': '手', // Keep as primitive when used in components
        'finger': '手', // Same as hand when used as component
        'fingers': '手', // Same as hand when used as component
        'heart': '心', // Keep as primitive when used in components
        'state of mind': '心', // Alternative name for heart
        'thread': '糸', // Keep as primitive when used in components
        'spiderman': '糸', // RTK nickname for thread
        'say': '言', // Keep as primitive when used in components
        'words': '言', // Same as say
        'keitai': '言', // RTK nickname for words radical
        'car': '車', // Keep as primitive when used in components
        'metal': '金', // Keep as primitive when used in components
        'gold': '金', // Same as metal
        'horse': '馬', // Keep as primitive when used in components
        'fish': '魚', // Keep as primitive when used in components
        'bird': '鳥', // Keep as primitive when used in components
    };
    /**
     * Resolves a component keyword to its preferred character representation.
     *
     * @param keyword The keyword from the components field
     * @returns The preferred character to use, or undefined if no specific mapping exists
     */
    function resolveComponentKeyword(keyword) {
        return KEYWORD_TO_CHARACTER_MAPPINGS[keyword];
    }
    /**
     * Checks if a kanji should be excluded from component matching.
     *
     * @param kanji The kanji character to check
     * @returns True if this kanji should not be used when its keyword is referenced as a component
     */
    function isComplexKanjiExcluded(kanji) {
        return kanji in COMPLEX_KANJI_EXCLUSIONS;
    }
    /**
     * Checks if a keyword should prefer kanji over primitives.
     *
     * @param keyword The keyword to check
     * @returns True if kanji should be preferred over primitives for this keyword
     */
    function shouldPreferKanji(keyword) {
        return PREFER_KANJI_KEYWORDS.has(keyword);
    }

    /**
     * Graph building module for RTK data structures
     */
    /**
     * Generates a unique ID for graph nodes
     */
    function generateNodeId(type, identifier) {
        // Use a simple but collision-resistant approach
        const sanitized = identifier.replace(/[^a-zA-Z0-9\u4e00-\u9faf]/g, '_');
        return `${type}_${sanitized}`;
    }
    /**
     * Extracts RTK keywords from the components field
     * Note: This field contains mnemonic references (RTK keywords), not structural components
     * Handles semicolon-separated values and cleans whitespace
     */
    function parseComponents(componentsField) {
        if (!componentsField.trim()) {
            return [];
        }
        return componentsField
            .split(';')
            .map(component => component.trim())
            .filter(component => component.length > 0);
    }
    /**
     * Creates a kanji node from kanji data
     */
    function createKanjiNode(kanji, jlptMapping) {
        const id = generateNodeId('kanji', kanji.kanji);
        return {
            id,
            type: 'kanji',
            character: kanji.kanji,
            keyword: kanji.keyword6th || kanji.keyword5th, // Prefer 6th edition
            rtkId: kanji.id6th || kanji.id5th, // Prefer 6th edition
            onReading: kanji.onReading || undefined,
            kunReading: kanji.kunReading || undefined,
            jlptLevel: jlptMapping?.[kanji.kanji] || undefined
        };
    }
    /**
     * Creates a primitive node from primitive data
     */
    function createPrimitiveNode(primitive) {
        // Extract name from path (remove directory structure and extension)
        const pathParts = primitive.oldPath.split('/');
        const filename = pathParts[pathParts.length - 1];
        const name = filename.replace(/\.(svg|png|jpg|jpeg)$/i, '');
        // Extract the clean keyword from filename (remove prefix like "p229.2-")
        const cleanKeyword = name.replace(/^p\d+(\.\d+)?-/, '');
        const id = generateNodeId('primitive', name);
        return {
            id,
            type: 'primitive',
            character: primitive.unicode || cleanKeyword,
            keyword: cleanKeyword, // Use clean keyword from filename
            rtkId: primitive.parentFrame || primitive.nextFrame,
            unicode: primitive.unicode,
            svgPath: primitive.oldPath
        };
    }
    /**
     * Creates edges between kanji and their mnemonic references
     * Note: The components field contains RTK keywords used in mnemonic stories, not structural components
     * Uses component mappings to resolve ambiguous keywords correctly
     */
    function createMnemonicEdges(kanjiNodes, primitiveNodes, kanjiData) {
        const edges = [];
        const missingMnemonics = new Set();
        for (const kanji of kanjiData) {
            const kanjiId = generateNodeId('kanji', kanji.kanji);
            const kanjiNode = kanjiNodes.get(kanjiId);
            if (!kanjiNode) {
                continue; // Skip if kanji node wasn't created for some reason
            }
            const mnemonicKeywords = parseComponents(kanji.components);
            // Track edges already created for this kanji to avoid duplicates
            const createdTargets = new Set();
            for (const keyword of mnemonicKeywords) {
                let referencedNode;
                // First, check for manual mapping override
                const mappedCharacter = resolveComponentKeyword(keyword);
                if (mappedCharacter) {
                    // Try to find node by the mapped character
                    const mappedKanjiId = generateNodeId('kanji', mappedCharacter);
                    referencedNode = kanjiNodes.get(mappedKanjiId);
                    if (!referencedNode) {
                        const mappedPrimitiveId = generateNodeId('primitive', mappedCharacter);
                        referencedNode = primitiveNodes.get(mappedPrimitiveId);
                    }
                }
                // If no manual mapping or mapped character not found, use improved search logic
                if (!referencedNode) {
                    // Choose search order based on keyword type
                    if (shouldPreferKanji(keyword)) {
                        // For fundamental kanji (numbers, etc), search kanji first
                        for (const [, kanjiNode] of kanjiNodes) {
                            if (kanjiNode.keyword === keyword && !isComplexKanjiExcluded(kanjiNode.character || '')) {
                                referencedNode = kanjiNode;
                                break;
                            }
                        }
                        // If not found in kanji, try primitives
                        if (!referencedNode) {
                            for (const [, primitive] of primitiveNodes) {
                                if (primitive.keyword === keyword) {
                                    referencedNode = primitive;
                                    break;
                                }
                            }
                        }
                    }
                    else {
                        // For other keywords, search primitives FIRST (prefer primitive forms over complex kanji)
                        for (const [, primitive] of primitiveNodes) {
                            if (primitive.keyword === keyword) {
                                referencedNode = primitive;
                                break;
                            }
                        }
                        // If not found in primitives, search kanji by keyword (but exclude complex kanji)
                        if (!referencedNode) {
                            for (const [, kanjiNode] of kanjiNodes) {
                                if (kanjiNode.keyword === keyword && !isComplexKanjiExcluded(kanjiNode.character || '')) {
                                    referencedNode = kanjiNode;
                                    break;
                                }
                            }
                        }
                    }
                    // As final fallback, try exact character match (excluding complex kanji)
                    if (!referencedNode) {
                        const kanjiComponentId = generateNodeId('kanji', keyword);
                        const potentialKanji = kanjiNodes.get(kanjiComponentId);
                        if (potentialKanji && !isComplexKanjiExcluded(keyword)) {
                            referencedNode = potentialKanji;
                        }
                        else {
                            const primitiveId = generateNodeId('primitive', keyword);
                            referencedNode = primitiveNodes.get(primitiveId);
                        }
                    }
                }
                if (referencedNode) {
                    // Skip if we've already created an edge to this target (avoids duplicates)
                    if (!createdTargets.has(referencedNode.id)) {
                        createdTargets.add(referencedNode.id);
                        // Create edge from kanji to mnemonic reference
                        edges.push({
                            source: kanjiId,
                            target: referencedNode.id,
                            type: 'mnemonic_uses'
                        });
                        // Create reverse edge for easier navigation
                        edges.push({
                            source: referencedNode.id,
                            target: kanjiId,
                            type: 'used_in_mnemonic'
                        });
                    }
                }
                else {
                    missingMnemonics.add(keyword);
                }
            }
        }
        return { edges, missingMnemonics };
    }
    /**
     * Builds a complete RTK graph from parsed data
     *
     * @param kanjiData Array of parsed kanji data
     * @param primitivesData Array of parsed primitive data
     * @param jlptMapping Optional mapping of kanji characters to JLPT levels
     * @returns Complete RTK graph structure
     * @throws RTKDataError on data processing errors
     */
    function buildGraph(kanjiData, primitivesData, jlptMapping) {
        try {
            // Validate input data
            if (!kanjiData || !primitivesData) {
                throw new Error('Input data cannot be null or undefined');
            }
            // Create all nodes
            const kanjiNodes = new Map();
            const primitiveNodes = new Map();
            // Process kanji nodes
            for (const kanji of kanjiData) {
                const node = createKanjiNode(kanji, jlptMapping);
                kanjiNodes.set(node.id, node);
            }
            // Process primitive nodes
            for (const primitive of primitivesData) {
                const node = createPrimitiveNode(primitive);
                primitiveNodes.set(node.id, node);
            }
            // Create edges between kanji and their mnemonic references
            const { edges, missingMnemonics } = createMnemonicEdges(kanjiNodes, primitiveNodes, kanjiData);
            // Log missing mnemonic references for debugging (could be made configurable)
            if (missingMnemonics.size > 0) {
                console.warn(`Missing mnemonic references found: ${Array.from(missingMnemonics).join(', ')}`);
            }
            // Combine all nodes
            const allNodes = [
                ...Array.from(kanjiNodes.values()),
                ...Array.from(primitiveNodes.values())
            ];
            return {
                nodes: allNodes,
                edges,
                metadata: {
                    totalKanji: kanjiNodes.size,
                    totalPrimitives: primitiveNodes.size,
                    totalEdges: edges.length,
                    buildTimestamp: new Date()
                }
            };
        }
        catch (error) {
            throw new RTKDataError(`Failed to build graph: ${error instanceof Error ? error.message : 'Unknown error'}`, {
                kanjiCount: kanjiData ? kanjiData.length : 0,
                primitivesCount: primitivesData ? primitivesData.length : 0
            });
        }
    }
    /**
     * Builds a graph with additional validation and reporting
     *
     * @param kanjiData Array of parsed kanji data
     * @param primitivesData Array of parsed primitive data
     * @param jlptMapping Optional mapping of kanji characters to JLPT levels
     * @returns Graph with additional validation metadata
     */
    function buildValidatedGraph(kanjiData, primitivesData, jlptMapping) {
        const graph = buildGraph(kanjiData, primitivesData, jlptMapping);
        // Additional validation
        const nodeIds = new Set();
        const duplicateNodes = [];
        for (const node of graph.nodes) {
            if (nodeIds.has(node.id)) {
                duplicateNodes.push(node.id);
            }
            else {
                nodeIds.add(node.id);
            }
        }
        // Find missing components by re-parsing
        const allComponentNames = new Set();
        const availableNodes = new Set(graph.nodes.map(n => n.character || n.keyword || ''));
        for (const kanji of kanjiData) {
            const components = parseComponents(kanji.components);
            components.forEach(comp => allComponentNames.add(comp));
        }
        const missingComponents = Array.from(allComponentNames).filter(comp => !availableNodes.has(comp));
        return {
            ...graph,
            validation: {
                missingComponents,
                duplicateNodes
            }
        };
    }

    var graphBuilder = /*#__PURE__*/Object.freeze({
        __proto__: null,
        buildGraph: buildGraph,
        buildValidatedGraph: buildValidatedGraph
    });

    function extent(values, valueof) {
      let min;
      let max;
      if (valueof === undefined) {
        for (const value of values) {
          if (value != null) {
            if (min === undefined) {
              if (value >= value) min = max = value;
            } else {
              if (min > value) min = value;
              if (max < value) max = value;
            }
          }
        }
      } else {
        let index = -1;
        for (let value of values) {
          if ((value = valueof(value, ++index, values)) != null) {
            if (min === undefined) {
              if (value >= value) min = max = value;
            } else {
              if (min > value) min = value;
              if (max < value) max = value;
            }
          }
        }
      }
      return [min, max];
    }

    var noop = {value: () => {}};

    function dispatch() {
      for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
        if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
      }
      return new Dispatch(_);
    }

    function Dispatch(_) {
      this._ = _;
    }

    function parseTypenames$1(typenames, types) {
      return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {type: t, name: name};
      });
    }

    Dispatch.prototype = dispatch.prototype = {
      constructor: Dispatch,
      on: function(typename, callback) {
        var _ = this._,
            T = parseTypenames$1(typename + "", _),
            t,
            i = -1,
            n = T.length;

        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
          while (++i < n) if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
          return;
        }

        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while (++i < n) {
          if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);
          else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
        }

        return this;
      },
      copy: function() {
        var copy = {}, _ = this._;
        for (var t in _) copy[t] = _[t].slice();
        return new Dispatch(copy);
      },
      call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
      },
      apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
      }
    };

    function get$1(type, name) {
      for (var i = 0, n = type.length, c; i < n; ++i) {
        if ((c = type[i]).name === name) {
          return c.value;
        }
      }
    }

    function set$1(type, name, callback) {
      for (var i = 0, n = type.length; i < n; ++i) {
        if (type[i].name === name) {
          type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
          break;
        }
      }
      if (callback != null) type.push({name: name, value: callback});
      return type;
    }

    var xhtml = "http://www.w3.org/1999/xhtml";

    var namespaces = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: xhtml,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    };

    function namespace(name) {
      var prefix = name += "", i = prefix.indexOf(":");
      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
      return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
    }

    function creatorInherit(name) {
      return function() {
        var document = this.ownerDocument,
            uri = this.namespaceURI;
        return uri === xhtml && document.documentElement.namespaceURI === xhtml
            ? document.createElement(name)
            : document.createElementNS(uri, name);
      };
    }

    function creatorFixed(fullname) {
      return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
      };
    }

    function creator(name) {
      var fullname = namespace(name);
      return (fullname.local
          ? creatorFixed
          : creatorInherit)(fullname);
    }

    function none() {}

    function selector(selector) {
      return selector == null ? none : function() {
        return this.querySelector(selector);
      };
    }

    function selection_select(select) {
      if (typeof select !== "function") select = selector(select);

      for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
          if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
          }
        }
      }

      return new Selection$1(subgroups, this._parents);
    }

    // Given something array like (or null), returns something that is strictly an
    // array. This is used to ensure that array-like objects passed to d3.selectAll
    // or selection.selectAll are converted into proper arrays when creating a
    // selection; we don’t ever want to create a selection backed by a live
    // HTMLCollection or NodeList. However, note that selection.selectAll will use a
    // static NodeList as a group, since it safely derived from querySelectorAll.
    function array(x) {
      return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
    }

    function empty() {
      return [];
    }

    function selectorAll(selector) {
      return selector == null ? empty : function() {
        return this.querySelectorAll(selector);
      };
    }

    function arrayAll(select) {
      return function() {
        return array(select.apply(this, arguments));
      };
    }

    function selection_selectAll(select) {
      if (typeof select === "function") select = arrayAll(select);
      else select = selectorAll(select);

      for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
          if (node = group[i]) {
            subgroups.push(select.call(node, node.__data__, i, group));
            parents.push(node);
          }
        }
      }

      return new Selection$1(subgroups, parents);
    }

    function matcher(selector) {
      return function() {
        return this.matches(selector);
      };
    }

    function childMatcher(selector) {
      return function(node) {
        return node.matches(selector);
      };
    }

    var find = Array.prototype.find;

    function childFind(match) {
      return function() {
        return find.call(this.children, match);
      };
    }

    function childFirst() {
      return this.firstElementChild;
    }

    function selection_selectChild(match) {
      return this.select(match == null ? childFirst
          : childFind(typeof match === "function" ? match : childMatcher(match)));
    }

    var filter = Array.prototype.filter;

    function children() {
      return Array.from(this.children);
    }

    function childrenFilter(match) {
      return function() {
        return filter.call(this.children, match);
      };
    }

    function selection_selectChildren(match) {
      return this.selectAll(match == null ? children
          : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
    }

    function selection_filter(match) {
      if (typeof match !== "function") match = matcher(match);

      for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
          if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
            subgroup.push(node);
          }
        }
      }

      return new Selection$1(subgroups, this._parents);
    }

    function sparse(update) {
      return new Array(update.length);
    }

    function selection_enter() {
      return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
    }

    function EnterNode(parent, datum) {
      this.ownerDocument = parent.ownerDocument;
      this.namespaceURI = parent.namespaceURI;
      this._next = null;
      this._parent = parent;
      this.__data__ = datum;
    }

    EnterNode.prototype = {
      constructor: EnterNode,
      appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
      insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
      querySelector: function(selector) { return this._parent.querySelector(selector); },
      querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
    };

    function constant$3(x) {
      return function() {
        return x;
      };
    }

    function bindIndex(parent, group, enter, update, exit, data) {
      var i = 0,
          node,
          groupLength = group.length,
          dataLength = data.length;

      // Put any non-null nodes that fit into update.
      // Put any null nodes into enter.
      // Put any remaining data into enter.
      for (; i < dataLength; ++i) {
        if (node = group[i]) {
          node.__data__ = data[i];
          update[i] = node;
        } else {
          enter[i] = new EnterNode(parent, data[i]);
        }
      }

      // Put any non-null nodes that don’t fit into exit.
      for (; i < groupLength; ++i) {
        if (node = group[i]) {
          exit[i] = node;
        }
      }
    }

    function bindKey(parent, group, enter, update, exit, data, key) {
      var i,
          node,
          nodeByKeyValue = new Map,
          groupLength = group.length,
          dataLength = data.length,
          keyValues = new Array(groupLength),
          keyValue;

      // Compute the key for each node.
      // If multiple nodes have the same key, the duplicates are added to exit.
      for (i = 0; i < groupLength; ++i) {
        if (node = group[i]) {
          keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
          if (nodeByKeyValue.has(keyValue)) {
            exit[i] = node;
          } else {
            nodeByKeyValue.set(keyValue, node);
          }
        }
      }

      // Compute the key for each datum.
      // If there a node associated with this key, join and add it to update.
      // If there is not (or the key is a duplicate), add it to enter.
      for (i = 0; i < dataLength; ++i) {
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node = nodeByKeyValue.get(keyValue)) {
          update[i] = node;
          node.__data__ = data[i];
          nodeByKeyValue.delete(keyValue);
        } else {
          enter[i] = new EnterNode(parent, data[i]);
        }
      }

      // Add any remaining nodes that were not bound to data to exit.
      for (i = 0; i < groupLength; ++i) {
        if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
          exit[i] = node;
        }
      }
    }

    function datum(node) {
      return node.__data__;
    }

    function selection_data(value, key) {
      if (!arguments.length) return Array.from(this, datum);

      var bind = key ? bindKey : bindIndex,
          parents = this._parents,
          groups = this._groups;

      if (typeof value !== "function") value = constant$3(value);

      for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
        var parent = parents[j],
            group = groups[j],
            groupLength = group.length,
            data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
            dataLength = data.length,
            enterGroup = enter[j] = new Array(dataLength),
            updateGroup = update[j] = new Array(dataLength),
            exitGroup = exit[j] = new Array(groupLength);

        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

        // Now connect the enter nodes to their following update node, such that
        // appendChild can insert the materialized enter node before this node,
        // rather than at the end of the parent node.
        for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
          if (previous = enterGroup[i0]) {
            if (i0 >= i1) i1 = i0 + 1;
            while (!(next = updateGroup[i1]) && ++i1 < dataLength);
            previous._next = next || null;
          }
        }
      }

      update = new Selection$1(update, parents);
      update._enter = enter;
      update._exit = exit;
      return update;
    }

    // Given some data, this returns an array-like view of it: an object that
    // exposes a length property and allows numeric indexing. Note that unlike
    // selectAll, this isn’t worried about “live” collections because the resulting
    // array will only be used briefly while data is being bound. (It is possible to
    // cause the data to change while iterating by using a key function, but please
    // don’t; we’d rather avoid a gratuitous copy.)
    function arraylike(data) {
      return typeof data === "object" && "length" in data
        ? data // Array, TypedArray, NodeList, array-like
        : Array.from(data); // Map, Set, iterable, string, or anything else
    }

    function selection_exit() {
      return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
    }

    function selection_join(onenter, onupdate, onexit) {
      var enter = this.enter(), update = this, exit = this.exit();
      if (typeof onenter === "function") {
        enter = onenter(enter);
        if (enter) enter = enter.selection();
      } else {
        enter = enter.append(onenter + "");
      }
      if (onupdate != null) {
        update = onupdate(update);
        if (update) update = update.selection();
      }
      if (onexit == null) exit.remove(); else onexit(exit);
      return enter && update ? enter.merge(update).order() : update;
    }

    function selection_merge(context) {
      var selection = context.selection ? context.selection() : context;

      for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
        for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
          if (node = group0[i] || group1[i]) {
            merge[i] = node;
          }
        }
      }

      for (; j < m0; ++j) {
        merges[j] = groups0[j];
      }

      return new Selection$1(merges, this._parents);
    }

    function selection_order() {

      for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
        for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
          if (node = group[i]) {
            if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
            next = node;
          }
        }
      }

      return this;
    }

    function selection_sort(compare) {
      if (!compare) compare = ascending;

      function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
      }

      for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
          if (node = group[i]) {
            sortgroup[i] = node;
          }
        }
        sortgroup.sort(compareNode);
      }

      return new Selection$1(sortgroups, this._parents).order();
    }

    function ascending(a, b) {
      return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }

    function selection_call() {
      var callback = arguments[0];
      arguments[0] = this;
      callback.apply(null, arguments);
      return this;
    }

    function selection_nodes() {
      return Array.from(this);
    }

    function selection_node() {

      for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
        for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
          var node = group[i];
          if (node) return node;
        }
      }

      return null;
    }

    function selection_size() {
      let size = 0;
      for (const node of this) ++size; // eslint-disable-line no-unused-vars
      return size;
    }

    function selection_empty() {
      return !this.node();
    }

    function selection_each(callback) {

      for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
        for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
          if (node = group[i]) callback.call(node, node.__data__, i, group);
        }
      }

      return this;
    }

    function attrRemove$1(name) {
      return function() {
        this.removeAttribute(name);
      };
    }

    function attrRemoveNS$1(fullname) {
      return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
      };
    }

    function attrConstant$1(name, value) {
      return function() {
        this.setAttribute(name, value);
      };
    }

    function attrConstantNS$1(fullname, value) {
      return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
      };
    }

    function attrFunction$1(name, value) {
      return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
      };
    }

    function attrFunctionNS$1(fullname, value) {
      return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
      };
    }

    function selection_attr(name, value) {
      var fullname = namespace(name);

      if (arguments.length < 2) {
        var node = this.node();
        return fullname.local
            ? node.getAttributeNS(fullname.space, fullname.local)
            : node.getAttribute(fullname);
      }

      return this.each((value == null
          ? (fullname.local ? attrRemoveNS$1 : attrRemove$1) : (typeof value === "function"
          ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)
          : (fullname.local ? attrConstantNS$1 : attrConstant$1)))(fullname, value));
    }

    function defaultView(node) {
      return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
          || (node.document && node) // node is a Window
          || node.defaultView; // node is a Document
    }

    function styleRemove$1(name) {
      return function() {
        this.style.removeProperty(name);
      };
    }

    function styleConstant$1(name, value, priority) {
      return function() {
        this.style.setProperty(name, value, priority);
      };
    }

    function styleFunction$1(name, value, priority) {
      return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
      };
    }

    function selection_style(name, value, priority) {
      return arguments.length > 1
          ? this.each((value == null
                ? styleRemove$1 : typeof value === "function"
                ? styleFunction$1
                : styleConstant$1)(name, value, priority == null ? "" : priority))
          : styleValue(this.node(), name);
    }

    function styleValue(node, name) {
      return node.style.getPropertyValue(name)
          || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
    }

    function propertyRemove(name) {
      return function() {
        delete this[name];
      };
    }

    function propertyConstant(name, value) {
      return function() {
        this[name] = value;
      };
    }

    function propertyFunction(name, value) {
      return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
      };
    }

    function selection_property(name, value) {
      return arguments.length > 1
          ? this.each((value == null
              ? propertyRemove : typeof value === "function"
              ? propertyFunction
              : propertyConstant)(name, value))
          : this.node()[name];
    }

    function classArray(string) {
      return string.trim().split(/^|\s+/);
    }

    function classList(node) {
      return node.classList || new ClassList(node);
    }

    function ClassList(node) {
      this._node = node;
      this._names = classArray(node.getAttribute("class") || "");
    }

    ClassList.prototype = {
      add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
          this._names.push(name);
          this._node.setAttribute("class", this._names.join(" "));
        }
      },
      remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
          this._names.splice(i, 1);
          this._node.setAttribute("class", this._names.join(" "));
        }
      },
      contains: function(name) {
        return this._names.indexOf(name) >= 0;
      }
    };

    function classedAdd(node, names) {
      var list = classList(node), i = -1, n = names.length;
      while (++i < n) list.add(names[i]);
    }

    function classedRemove(node, names) {
      var list = classList(node), i = -1, n = names.length;
      while (++i < n) list.remove(names[i]);
    }

    function classedTrue(names) {
      return function() {
        classedAdd(this, names);
      };
    }

    function classedFalse(names) {
      return function() {
        classedRemove(this, names);
      };
    }

    function classedFunction(names, value) {
      return function() {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
      };
    }

    function selection_classed(name, value) {
      var names = classArray(name + "");

      if (arguments.length < 2) {
        var list = classList(this.node()), i = -1, n = names.length;
        while (++i < n) if (!list.contains(names[i])) return false;
        return true;
      }

      return this.each((typeof value === "function"
          ? classedFunction : value
          ? classedTrue
          : classedFalse)(names, value));
    }

    function textRemove() {
      this.textContent = "";
    }

    function textConstant$1(value) {
      return function() {
        this.textContent = value;
      };
    }

    function textFunction$1(value) {
      return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
      };
    }

    function selection_text(value) {
      return arguments.length
          ? this.each(value == null
              ? textRemove : (typeof value === "function"
              ? textFunction$1
              : textConstant$1)(value))
          : this.node().textContent;
    }

    function htmlRemove() {
      this.innerHTML = "";
    }

    function htmlConstant(value) {
      return function() {
        this.innerHTML = value;
      };
    }

    function htmlFunction(value) {
      return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
      };
    }

    function selection_html(value) {
      return arguments.length
          ? this.each(value == null
              ? htmlRemove : (typeof value === "function"
              ? htmlFunction
              : htmlConstant)(value))
          : this.node().innerHTML;
    }

    function raise() {
      if (this.nextSibling) this.parentNode.appendChild(this);
    }

    function selection_raise() {
      return this.each(raise);
    }

    function lower() {
      if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }

    function selection_lower() {
      return this.each(lower);
    }

    function selection_append(name) {
      var create = typeof name === "function" ? name : creator(name);
      return this.select(function() {
        return this.appendChild(create.apply(this, arguments));
      });
    }

    function constantNull() {
      return null;
    }

    function selection_insert(name, before) {
      var create = typeof name === "function" ? name : creator(name),
          select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
      return this.select(function() {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
      });
    }

    function remove() {
      var parent = this.parentNode;
      if (parent) parent.removeChild(this);
    }

    function selection_remove() {
      return this.each(remove);
    }

    function selection_cloneShallow() {
      var clone = this.cloneNode(false), parent = this.parentNode;
      return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
    }

    function selection_cloneDeep() {
      var clone = this.cloneNode(true), parent = this.parentNode;
      return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
    }

    function selection_clone(deep) {
      return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
    }

    function selection_datum(value) {
      return arguments.length
          ? this.property("__data__", value)
          : this.node().__data__;
    }

    function contextListener(listener) {
      return function(event) {
        listener.call(this, event, this.__data__);
      };
    }

    function parseTypenames(typenames) {
      return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {type: t, name: name};
      });
    }

    function onRemove(typename) {
      return function() {
        var on = this.__on;
        if (!on) return;
        for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
          if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
            this.removeEventListener(o.type, o.listener, o.options);
          } else {
            on[++i] = o;
          }
        }
        if (++i) on.length = i;
        else delete this.__on;
      };
    }

    function onAdd(typename, value, options) {
      return function() {
        var on = this.__on, o, listener = contextListener(value);
        if (on) for (var j = 0, m = on.length; j < m; ++j) {
          if ((o = on[j]).type === typename.type && o.name === typename.name) {
            this.removeEventListener(o.type, o.listener, o.options);
            this.addEventListener(o.type, o.listener = listener, o.options = options);
            o.value = value;
            return;
          }
        }
        this.addEventListener(typename.type, listener, options);
        o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
        if (!on) this.__on = [o];
        else on.push(o);
      };
    }

    function selection_on(typename, value, options) {
      var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

      if (arguments.length < 2) {
        var on = this.node().__on;
        if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
          for (i = 0, o = on[j]; i < n; ++i) {
            if ((t = typenames[i]).type === o.type && t.name === o.name) {
              return o.value;
            }
          }
        }
        return;
      }

      on = value ? onAdd : onRemove;
      for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
      return this;
    }

    function dispatchEvent(node, type, params) {
      var window = defaultView(node),
          event = window.CustomEvent;

      if (typeof event === "function") {
        event = new event(type, params);
      } else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
      }

      node.dispatchEvent(event);
    }

    function dispatchConstant(type, params) {
      return function() {
        return dispatchEvent(this, type, params);
      };
    }

    function dispatchFunction(type, params) {
      return function() {
        return dispatchEvent(this, type, params.apply(this, arguments));
      };
    }

    function selection_dispatch(type, params) {
      return this.each((typeof params === "function"
          ? dispatchFunction
          : dispatchConstant)(type, params));
    }

    function* selection_iterator() {
      for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
        for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
          if (node = group[i]) yield node;
        }
      }
    }

    var root = [null];

    function Selection$1(groups, parents) {
      this._groups = groups;
      this._parents = parents;
    }

    function selection() {
      return new Selection$1([[document.documentElement]], root);
    }

    function selection_selection() {
      return this;
    }

    Selection$1.prototype = selection.prototype = {
      constructor: Selection$1,
      select: selection_select,
      selectAll: selection_selectAll,
      selectChild: selection_selectChild,
      selectChildren: selection_selectChildren,
      filter: selection_filter,
      data: selection_data,
      enter: selection_enter,
      exit: selection_exit,
      join: selection_join,
      merge: selection_merge,
      selection: selection_selection,
      order: selection_order,
      sort: selection_sort,
      call: selection_call,
      nodes: selection_nodes,
      node: selection_node,
      size: selection_size,
      empty: selection_empty,
      each: selection_each,
      attr: selection_attr,
      style: selection_style,
      property: selection_property,
      classed: selection_classed,
      text: selection_text,
      html: selection_html,
      raise: selection_raise,
      lower: selection_lower,
      append: selection_append,
      insert: selection_insert,
      remove: selection_remove,
      clone: selection_clone,
      datum: selection_datum,
      on: selection_on,
      dispatch: selection_dispatch,
      [Symbol.iterator]: selection_iterator
    };

    function select(selector) {
      return typeof selector === "string"
          ? new Selection$1([[document.querySelector(selector)]], [document.documentElement])
          : new Selection$1([[selector]], root);
    }

    function sourceEvent(event) {
      let sourceEvent;
      while (sourceEvent = event.sourceEvent) event = sourceEvent;
      return event;
    }

    function pointer(event, node) {
      event = sourceEvent(event);
      if (node === undefined) node = event.currentTarget;
      if (node) {
        var svg = node.ownerSVGElement || node;
        if (svg.createSVGPoint) {
          var point = svg.createSVGPoint();
          point.x = event.clientX, point.y = event.clientY;
          point = point.matrixTransform(node.getScreenCTM().inverse());
          return [point.x, point.y];
        }
        if (node.getBoundingClientRect) {
          var rect = node.getBoundingClientRect();
          return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
        }
      }
      return [event.pageX, event.pageY];
    }

    // These are typically used in conjunction with noevent to ensure that we can
    // preventDefault on the event.
    const nonpassivecapture = {capture: true, passive: false};

    function noevent$1(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }

    function dragDisable(view) {
      var root = view.document.documentElement,
          selection = select(view).on("dragstart.drag", noevent$1, nonpassivecapture);
      if ("onselectstart" in root) {
        selection.on("selectstart.drag", noevent$1, nonpassivecapture);
      } else {
        root.__noselect = root.style.MozUserSelect;
        root.style.MozUserSelect = "none";
      }
    }

    function yesdrag(view, noclick) {
      var root = view.document.documentElement,
          selection = select(view).on("dragstart.drag", null);
      if (noclick) {
        selection.on("click.drag", noevent$1, nonpassivecapture);
        setTimeout(function() { selection.on("click.drag", null); }, 0);
      }
      if ("onselectstart" in root) {
        selection.on("selectstart.drag", null);
      } else {
        root.style.MozUserSelect = root.__noselect;
        delete root.__noselect;
      }
    }

    function define(constructor, factory, prototype) {
      constructor.prototype = factory.prototype = prototype;
      prototype.constructor = constructor;
    }

    function extend(parent, definition) {
      var prototype = Object.create(parent.prototype);
      for (var key in definition) prototype[key] = definition[key];
      return prototype;
    }

    function Color() {}

    var darker = 0.7;
    var brighter = 1 / darker;

    var reI = "\\s*([+-]?\\d+)\\s*",
        reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        reHex = /^#([0-9a-f]{3,8})$/,
        reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
        reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
        reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
        reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
        reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
        reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

    var named = {
      aliceblue: 0xf0f8ff,
      antiquewhite: 0xfaebd7,
      aqua: 0x00ffff,
      aquamarine: 0x7fffd4,
      azure: 0xf0ffff,
      beige: 0xf5f5dc,
      bisque: 0xffe4c4,
      black: 0x000000,
      blanchedalmond: 0xffebcd,
      blue: 0x0000ff,
      blueviolet: 0x8a2be2,
      brown: 0xa52a2a,
      burlywood: 0xdeb887,
      cadetblue: 0x5f9ea0,
      chartreuse: 0x7fff00,
      chocolate: 0xd2691e,
      coral: 0xff7f50,
      cornflowerblue: 0x6495ed,
      cornsilk: 0xfff8dc,
      crimson: 0xdc143c,
      cyan: 0x00ffff,
      darkblue: 0x00008b,
      darkcyan: 0x008b8b,
      darkgoldenrod: 0xb8860b,
      darkgray: 0xa9a9a9,
      darkgreen: 0x006400,
      darkgrey: 0xa9a9a9,
      darkkhaki: 0xbdb76b,
      darkmagenta: 0x8b008b,
      darkolivegreen: 0x556b2f,
      darkorange: 0xff8c00,
      darkorchid: 0x9932cc,
      darkred: 0x8b0000,
      darksalmon: 0xe9967a,
      darkseagreen: 0x8fbc8f,
      darkslateblue: 0x483d8b,
      darkslategray: 0x2f4f4f,
      darkslategrey: 0x2f4f4f,
      darkturquoise: 0x00ced1,
      darkviolet: 0x9400d3,
      deeppink: 0xff1493,
      deepskyblue: 0x00bfff,
      dimgray: 0x696969,
      dimgrey: 0x696969,
      dodgerblue: 0x1e90ff,
      firebrick: 0xb22222,
      floralwhite: 0xfffaf0,
      forestgreen: 0x228b22,
      fuchsia: 0xff00ff,
      gainsboro: 0xdcdcdc,
      ghostwhite: 0xf8f8ff,
      gold: 0xffd700,
      goldenrod: 0xdaa520,
      gray: 0x808080,
      green: 0x008000,
      greenyellow: 0xadff2f,
      grey: 0x808080,
      honeydew: 0xf0fff0,
      hotpink: 0xff69b4,
      indianred: 0xcd5c5c,
      indigo: 0x4b0082,
      ivory: 0xfffff0,
      khaki: 0xf0e68c,
      lavender: 0xe6e6fa,
      lavenderblush: 0xfff0f5,
      lawngreen: 0x7cfc00,
      lemonchiffon: 0xfffacd,
      lightblue: 0xadd8e6,
      lightcoral: 0xf08080,
      lightcyan: 0xe0ffff,
      lightgoldenrodyellow: 0xfafad2,
      lightgray: 0xd3d3d3,
      lightgreen: 0x90ee90,
      lightgrey: 0xd3d3d3,
      lightpink: 0xffb6c1,
      lightsalmon: 0xffa07a,
      lightseagreen: 0x20b2aa,
      lightskyblue: 0x87cefa,
      lightslategray: 0x778899,
      lightslategrey: 0x778899,
      lightsteelblue: 0xb0c4de,
      lightyellow: 0xffffe0,
      lime: 0x00ff00,
      limegreen: 0x32cd32,
      linen: 0xfaf0e6,
      magenta: 0xff00ff,
      maroon: 0x800000,
      mediumaquamarine: 0x66cdaa,
      mediumblue: 0x0000cd,
      mediumorchid: 0xba55d3,
      mediumpurple: 0x9370db,
      mediumseagreen: 0x3cb371,
      mediumslateblue: 0x7b68ee,
      mediumspringgreen: 0x00fa9a,
      mediumturquoise: 0x48d1cc,
      mediumvioletred: 0xc71585,
      midnightblue: 0x191970,
      mintcream: 0xf5fffa,
      mistyrose: 0xffe4e1,
      moccasin: 0xffe4b5,
      navajowhite: 0xffdead,
      navy: 0x000080,
      oldlace: 0xfdf5e6,
      olive: 0x808000,
      olivedrab: 0x6b8e23,
      orange: 0xffa500,
      orangered: 0xff4500,
      orchid: 0xda70d6,
      palegoldenrod: 0xeee8aa,
      palegreen: 0x98fb98,
      paleturquoise: 0xafeeee,
      palevioletred: 0xdb7093,
      papayawhip: 0xffefd5,
      peachpuff: 0xffdab9,
      peru: 0xcd853f,
      pink: 0xffc0cb,
      plum: 0xdda0dd,
      powderblue: 0xb0e0e6,
      purple: 0x800080,
      rebeccapurple: 0x663399,
      red: 0xff0000,
      rosybrown: 0xbc8f8f,
      royalblue: 0x4169e1,
      saddlebrown: 0x8b4513,
      salmon: 0xfa8072,
      sandybrown: 0xf4a460,
      seagreen: 0x2e8b57,
      seashell: 0xfff5ee,
      sienna: 0xa0522d,
      silver: 0xc0c0c0,
      skyblue: 0x87ceeb,
      slateblue: 0x6a5acd,
      slategray: 0x708090,
      slategrey: 0x708090,
      snow: 0xfffafa,
      springgreen: 0x00ff7f,
      steelblue: 0x4682b4,
      tan: 0xd2b48c,
      teal: 0x008080,
      thistle: 0xd8bfd8,
      tomato: 0xff6347,
      turquoise: 0x40e0d0,
      violet: 0xee82ee,
      wheat: 0xf5deb3,
      white: 0xffffff,
      whitesmoke: 0xf5f5f5,
      yellow: 0xffff00,
      yellowgreen: 0x9acd32
    };

    define(Color, color, {
      copy(channels) {
        return Object.assign(new this.constructor, this, channels);
      },
      displayable() {
        return this.rgb().displayable();
      },
      hex: color_formatHex, // Deprecated! Use color.formatHex.
      formatHex: color_formatHex,
      formatHex8: color_formatHex8,
      formatHsl: color_formatHsl,
      formatRgb: color_formatRgb,
      toString: color_formatRgb
    });

    function color_formatHex() {
      return this.rgb().formatHex();
    }

    function color_formatHex8() {
      return this.rgb().formatHex8();
    }

    function color_formatHsl() {
      return hslConvert(this).formatHsl();
    }

    function color_formatRgb() {
      return this.rgb().formatRgb();
    }

    function color(format) {
      var m, l;
      format = (format + "").trim().toLowerCase();
      return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
          : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
          : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
          : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
          : null) // invalid hex
          : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
          : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
          : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
          : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
          : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
          : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
          : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
          : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
          : null;
    }

    function rgbn(n) {
      return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
    }

    function rgba(r, g, b, a) {
      if (a <= 0) r = g = b = NaN;
      return new Rgb(r, g, b, a);
    }

    function rgbConvert(o) {
      if (!(o instanceof Color)) o = color(o);
      if (!o) return new Rgb;
      o = o.rgb();
      return new Rgb(o.r, o.g, o.b, o.opacity);
    }

    function rgb(r, g, b, opacity) {
      return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
    }

    function Rgb(r, g, b, opacity) {
      this.r = +r;
      this.g = +g;
      this.b = +b;
      this.opacity = +opacity;
    }

    define(Rgb, rgb, extend(Color, {
      brighter(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
      },
      darker(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
      },
      rgb() {
        return this;
      },
      clamp() {
        return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
      },
      displayable() {
        return (-0.5 <= this.r && this.r < 255.5)
            && (-0.5 <= this.g && this.g < 255.5)
            && (-0.5 <= this.b && this.b < 255.5)
            && (0 <= this.opacity && this.opacity <= 1);
      },
      hex: rgb_formatHex, // Deprecated! Use color.formatHex.
      formatHex: rgb_formatHex,
      formatHex8: rgb_formatHex8,
      formatRgb: rgb_formatRgb,
      toString: rgb_formatRgb
    }));

    function rgb_formatHex() {
      return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
    }

    function rgb_formatHex8() {
      return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
    }

    function rgb_formatRgb() {
      const a = clampa(this.opacity);
      return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
    }

    function clampa(opacity) {
      return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
    }

    function clampi(value) {
      return Math.max(0, Math.min(255, Math.round(value) || 0));
    }

    function hex(value) {
      value = clampi(value);
      return (value < 16 ? "0" : "") + value.toString(16);
    }

    function hsla(h, s, l, a) {
      if (a <= 0) h = s = l = NaN;
      else if (l <= 0 || l >= 1) h = s = NaN;
      else if (s <= 0) h = NaN;
      return new Hsl(h, s, l, a);
    }

    function hslConvert(o) {
      if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
      if (!(o instanceof Color)) o = color(o);
      if (!o) return new Hsl;
      if (o instanceof Hsl) return o;
      o = o.rgb();
      var r = o.r / 255,
          g = o.g / 255,
          b = o.b / 255,
          min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          h = NaN,
          s = max - min,
          l = (max + min) / 2;
      if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
      } else {
        s = l > 0 && l < 1 ? 0 : h;
      }
      return new Hsl(h, s, l, o.opacity);
    }

    function hsl(h, s, l, opacity) {
      return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
    }

    function Hsl(h, s, l, opacity) {
      this.h = +h;
      this.s = +s;
      this.l = +l;
      this.opacity = +opacity;
    }

    define(Hsl, hsl, extend(Color, {
      brighter(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
      },
      darker(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
      },
      rgb() {
        var h = this.h % 360 + (this.h < 0) * 360,
            s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
            l = this.l,
            m2 = l + (l < 0.5 ? l : 1 - l) * s,
            m1 = 2 * l - m2;
        return new Rgb(
          hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
          hsl2rgb(h, m1, m2),
          hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
          this.opacity
        );
      },
      clamp() {
        return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s))
            && (0 <= this.l && this.l <= 1)
            && (0 <= this.opacity && this.opacity <= 1);
      },
      formatHsl() {
        const a = clampa(this.opacity);
        return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
      }
    }));

    function clamph(value) {
      value = (value || 0) % 360;
      return value < 0 ? value + 360 : value;
    }

    function clampt(value) {
      return Math.max(0, Math.min(1, value || 0));
    }

    /* From FvD 13.37, CSS Color Module Level 3 */
    function hsl2rgb(h, m1, m2) {
      return (h < 60 ? m1 + (m2 - m1) * h / 60
          : h < 180 ? m2
          : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
          : m1) * 255;
    }

    var constant$2 = x => () => x;

    function linear(a, d) {
      return function(t) {
        return a + t * d;
      };
    }

    function exponential(a, b, y) {
      return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
      };
    }

    function gamma(y) {
      return (y = +y) === 1 ? nogamma : function(a, b) {
        return b - a ? exponential(a, b, y) : constant$2(isNaN(a) ? b : a);
      };
    }

    function nogamma(a, b) {
      var d = b - a;
      return d ? linear(a, d) : constant$2(isNaN(a) ? b : a);
    }

    var interpolateRgb = (function rgbGamma(y) {
      var color = gamma(y);

      function rgb$1(start, end) {
        var r = color((start = rgb(start)).r, (end = rgb(end)).r),
            g = color(start.g, end.g),
            b = color(start.b, end.b),
            opacity = nogamma(start.opacity, end.opacity);
        return function(t) {
          start.r = r(t);
          start.g = g(t);
          start.b = b(t);
          start.opacity = opacity(t);
          return start + "";
        };
      }

      rgb$1.gamma = rgbGamma;

      return rgb$1;
    })(1);

    function interpolateNumber(a, b) {
      return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
      };
    }

    var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        reB = new RegExp(reA.source, "g");

    function zero(b) {
      return function() {
        return b;
      };
    }

    function one(b) {
      return function(t) {
        return b(t) + "";
      };
    }

    function interpolateString(a, b) {
      var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
          am, // current match in a
          bm, // current match in b
          bs, // string preceding current number in b, if any
          i = -1, // index in s
          s = [], // string constants and placeholders
          q = []; // number interpolators

      // Coerce inputs to strings.
      a = a + "", b = b + "";

      // Interpolate pairs of numbers in a & b.
      while ((am = reA.exec(a))
          && (bm = reB.exec(b))) {
        if ((bs = bm.index) > bi) { // a string precedes the next number in b
          bs = b.slice(bi, bs);
          if (s[i]) s[i] += bs; // coalesce with previous string
          else s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
          if (s[i]) s[i] += bm; // coalesce with previous string
          else s[++i] = bm;
        } else { // interpolate non-matching numbers
          s[++i] = null;
          q.push({i: i, x: interpolateNumber(am, bm)});
        }
        bi = reB.lastIndex;
      }

      // Add remains of b.
      if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }

      // Special optimization for only a single match.
      // Otherwise, interpolate each of the numbers and rejoin the string.
      return s.length < 2 ? (q[0]
          ? one(q[0].x)
          : zero(b))
          : (b = q.length, function(t) {
              for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
              return s.join("");
            });
    }

    var degrees = 180 / Math.PI;

    var identity$1 = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1
    };

    function decompose(a, b, c, d, e, f) {
      var scaleX, scaleY, skewX;
      if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
      if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
      if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
      if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
      return {
        translateX: e,
        translateY: f,
        rotate: Math.atan2(b, a) * degrees,
        skewX: Math.atan(skewX) * degrees,
        scaleX: scaleX,
        scaleY: scaleY
      };
    }

    var svgNode;

    /* eslint-disable no-undef */
    function parseCss(value) {
      const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
      return m.isIdentity ? identity$1 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
    }

    function parseSvg(value) {
      if (value == null) return identity$1;
      if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
      svgNode.setAttribute("transform", value);
      if (!(value = svgNode.transform.baseVal.consolidate())) return identity$1;
      value = value.matrix;
      return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
    }

    function interpolateTransform(parse, pxComma, pxParen, degParen) {

      function pop(s) {
        return s.length ? s.pop() + " " : "";
      }

      function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
          var i = s.push("translate(", null, pxComma, null, pxParen);
          q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
        } else if (xb || yb) {
          s.push("translate(" + xb + pxComma + yb + pxParen);
        }
      }

      function rotate(a, b, s, q) {
        if (a !== b) {
          if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
          q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b)});
        } else if (b) {
          s.push(pop(s) + "rotate(" + b + degParen);
        }
      }

      function skewX(a, b, s, q) {
        if (a !== b) {
          q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b)});
        } else if (b) {
          s.push(pop(s) + "skewX(" + b + degParen);
        }
      }

      function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
          var i = s.push(pop(s) + "scale(", null, ",", null, ")");
          q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
        } else if (xb !== 1 || yb !== 1) {
          s.push(pop(s) + "scale(" + xb + "," + yb + ")");
        }
      }

      return function(a, b) {
        var s = [], // string constants and placeholders
            q = []; // number interpolators
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null; // gc
        return function(t) {
          var i = -1, n = q.length, o;
          while (++i < n) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        };
      };
    }

    var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
    var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

    var epsilon2 = 1e-12;

    function cosh(x) {
      return ((x = Math.exp(x)) + 1 / x) / 2;
    }

    function sinh(x) {
      return ((x = Math.exp(x)) - 1 / x) / 2;
    }

    function tanh(x) {
      return ((x = Math.exp(2 * x)) - 1) / (x + 1);
    }

    var interpolateZoom = (function zoomRho(rho, rho2, rho4) {

      // p0 = [ux0, uy0, w0]
      // p1 = [ux1, uy1, w1]
      function zoom(p0, p1) {
        var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
            ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
            dx = ux1 - ux0,
            dy = uy1 - uy0,
            d2 = dx * dx + dy * dy,
            i,
            S;

        // Special case for u0 ≅ u1.
        if (d2 < epsilon2) {
          S = Math.log(w1 / w0) / rho;
          i = function(t) {
            return [
              ux0 + t * dx,
              uy0 + t * dy,
              w0 * Math.exp(rho * t * S)
            ];
          };
        }

        // General case.
        else {
          var d1 = Math.sqrt(d2),
              b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
              b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
              r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
              r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
          S = (r1 - r0) / rho;
          i = function(t) {
            var s = t * S,
                coshr0 = cosh(r0),
                u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
            return [
              ux0 + u * dx,
              uy0 + u * dy,
              w0 * coshr0 / cosh(rho * s + r0)
            ];
          };
        }

        i.duration = S * 1000 * rho / Math.SQRT2;

        return i;
      }

      zoom.rho = function(_) {
        var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
        return zoomRho(_1, _2, _4);
      };

      return zoom;
    })(Math.SQRT2, 2, 4);

    var frame = 0, // is an animation frame pending?
        timeout$1 = 0, // is a timeout pending?
        interval = 0, // are any timers active?
        pokeDelay = 1000, // how frequently we check for clock skew
        taskHead,
        taskTail,
        clockLast = 0,
        clockNow = 0,
        clockSkew = 0,
        clock = typeof performance === "object" && performance.now ? performance : Date,
        setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

    function now() {
      return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
    }

    function clearNow() {
      clockNow = 0;
    }

    function Timer() {
      this._call =
      this._time =
      this._next = null;
    }

    Timer.prototype = timer.prototype = {
      constructor: Timer,
      restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
          if (taskTail) taskTail._next = this;
          else taskHead = this;
          taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
      },
      stop: function() {
        if (this._call) {
          this._call = null;
          this._time = Infinity;
          sleep();
        }
      }
    };

    function timer(callback, delay, time) {
      var t = new Timer;
      t.restart(callback, delay, time);
      return t;
    }

    function timerFlush() {
      now(); // Get the current time, if not already set.
      ++frame; // Pretend we’ve set an alarm, if we haven’t already.
      var t = taskHead, e;
      while (t) {
        if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
        t = t._next;
      }
      --frame;
    }

    function wake() {
      clockNow = (clockLast = clock.now()) + clockSkew;
      frame = timeout$1 = 0;
      try {
        timerFlush();
      } finally {
        frame = 0;
        nap();
        clockNow = 0;
      }
    }

    function poke() {
      var now = clock.now(), delay = now - clockLast;
      if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
    }

    function nap() {
      var t0, t1 = taskHead, t2, time = Infinity;
      while (t1) {
        if (t1._call) {
          if (time > t1._time) time = t1._time;
          t0 = t1, t1 = t1._next;
        } else {
          t2 = t1._next, t1._next = null;
          t1 = t0 ? t0._next = t2 : taskHead = t2;
        }
      }
      taskTail = t0;
      sleep(time);
    }

    function sleep(time) {
      if (frame) return; // Soonest alarm already set, or will be.
      if (timeout$1) timeout$1 = clearTimeout(timeout$1);
      var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
      if (delay > 24) {
        if (time < Infinity) timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
        if (interval) interval = clearInterval(interval);
      } else {
        if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
      }
    }

    function timeout(callback, delay, time) {
      var t = new Timer;
      delay = delay == null ? 0 : +delay;
      t.restart(elapsed => {
        t.stop();
        callback(elapsed + delay);
      }, delay, time);
      return t;
    }

    var emptyOn = dispatch("start", "end", "cancel", "interrupt");
    var emptyTween = [];

    var CREATED = 0;
    var SCHEDULED = 1;
    var STARTING = 2;
    var STARTED = 3;
    var RUNNING = 4;
    var ENDING = 5;
    var ENDED = 6;

    function schedule(node, name, id, index, group, timing) {
      var schedules = node.__transition;
      if (!schedules) node.__transition = {};
      else if (id in schedules) return;
      create(node, id, {
        name: name,
        index: index, // For context during callback.
        group: group, // For context during callback.
        on: emptyOn,
        tween: emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: CREATED
      });
    }

    function init(node, id) {
      var schedule = get(node, id);
      if (schedule.state > CREATED) throw new Error("too late; already scheduled");
      return schedule;
    }

    function set(node, id) {
      var schedule = get(node, id);
      if (schedule.state > STARTED) throw new Error("too late; already running");
      return schedule;
    }

    function get(node, id) {
      var schedule = node.__transition;
      if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
      return schedule;
    }

    function create(node, id, self) {
      var schedules = node.__transition,
          tween;

      // Initialize the self timer when the transition is created.
      // Note the actual delay is not known until the first callback!
      schedules[id] = self;
      self.timer = timer(schedule, 0, self.time);

      function schedule(elapsed) {
        self.state = SCHEDULED;
        self.timer.restart(start, self.delay, self.time);

        // If the elapsed delay is less than our first sleep, start immediately.
        if (self.delay <= elapsed) start(elapsed - self.delay);
      }

      function start(elapsed) {
        var i, j, n, o;

        // If the state is not SCHEDULED, then we previously errored on start.
        if (self.state !== SCHEDULED) return stop();

        for (i in schedules) {
          o = schedules[i];
          if (o.name !== self.name) continue;

          // While this element already has a starting transition during this frame,
          // defer starting an interrupting transition until that transition has a
          // chance to tick (and possibly end); see d3/d3-transition#54!
          if (o.state === STARTED) return timeout(start);

          // Interrupt the active transition, if any.
          if (o.state === RUNNING) {
            o.state = ENDED;
            o.timer.stop();
            o.on.call("interrupt", node, node.__data__, o.index, o.group);
            delete schedules[i];
          }

          // Cancel any pre-empted transitions.
          else if (+i < id) {
            o.state = ENDED;
            o.timer.stop();
            o.on.call("cancel", node, node.__data__, o.index, o.group);
            delete schedules[i];
          }
        }

        // Defer the first tick to end of the current frame; see d3/d3#1576.
        // Note the transition may be canceled after start and before the first tick!
        // Note this must be scheduled before the start event; see d3/d3-transition#16!
        // Assuming this is successful, subsequent callbacks go straight to tick.
        timeout(function() {
          if (self.state === STARTED) {
            self.state = RUNNING;
            self.timer.restart(tick, self.delay, self.time);
            tick(elapsed);
          }
        });

        // Dispatch the start event.
        // Note this must be done before the tween are initialized.
        self.state = STARTING;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== STARTING) return; // interrupted
        self.state = STARTED;

        // Initialize the tween, deleting null tween.
        tween = new Array(n = self.tween.length);
        for (i = 0, j = -1; i < n; ++i) {
          if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
            tween[++j] = o;
          }
        }
        tween.length = j + 1;
      }

      function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
            i = -1,
            n = tween.length;

        while (++i < n) {
          tween[i].call(node, t);
        }

        // Dispatch the end event.
        if (self.state === ENDING) {
          self.on.call("end", node, node.__data__, self.index, self.group);
          stop();
        }
      }

      function stop() {
        self.state = ENDED;
        self.timer.stop();
        delete schedules[id];
        for (var i in schedules) return; // eslint-disable-line no-unused-vars
        delete node.__transition;
      }
    }

    function interrupt(node, name) {
      var schedules = node.__transition,
          schedule,
          active,
          empty = true,
          i;

      if (!schedules) return;

      name = name == null ? null : name + "";

      for (i in schedules) {
        if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
        active = schedule.state > STARTING && schedule.state < ENDING;
        schedule.state = ENDED;
        schedule.timer.stop();
        schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
      }

      if (empty) delete node.__transition;
    }

    function selection_interrupt(name) {
      return this.each(function() {
        interrupt(this, name);
      });
    }

    function tweenRemove(id, name) {
      var tween0, tween1;
      return function() {
        var schedule = set(this, id),
            tween = schedule.tween;

        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
          tween1 = tween0 = tween;
          for (var i = 0, n = tween1.length; i < n; ++i) {
            if (tween1[i].name === name) {
              tween1 = tween1.slice();
              tween1.splice(i, 1);
              break;
            }
          }
        }

        schedule.tween = tween1;
      };
    }

    function tweenFunction(id, name, value) {
      var tween0, tween1;
      if (typeof value !== "function") throw new Error;
      return function() {
        var schedule = set(this, id),
            tween = schedule.tween;

        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
          tween1 = (tween0 = tween).slice();
          for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
            if (tween1[i].name === name) {
              tween1[i] = t;
              break;
            }
          }
          if (i === n) tween1.push(t);
        }

        schedule.tween = tween1;
      };
    }

    function transition_tween(name, value) {
      var id = this._id;

      name += "";

      if (arguments.length < 2) {
        var tween = get(this.node(), id).tween;
        for (var i = 0, n = tween.length, t; i < n; ++i) {
          if ((t = tween[i]).name === name) {
            return t.value;
          }
        }
        return null;
      }

      return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
    }

    function tweenValue(transition, name, value) {
      var id = transition._id;

      transition.each(function() {
        var schedule = set(this, id);
        (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
      });

      return function(node) {
        return get(node, id).value[name];
      };
    }

    function interpolate(a, b) {
      var c;
      return (typeof b === "number" ? interpolateNumber
          : b instanceof color ? interpolateRgb
          : (c = color(b)) ? (b = c, interpolateRgb)
          : interpolateString)(a, b);
    }

    function attrRemove(name) {
      return function() {
        this.removeAttribute(name);
      };
    }

    function attrRemoveNS(fullname) {
      return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
      };
    }

    function attrConstant(name, interpolate, value1) {
      var string00,
          string1 = value1 + "",
          interpolate0;
      return function() {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null
            : string0 === string00 ? interpolate0
            : interpolate0 = interpolate(string00 = string0, value1);
      };
    }

    function attrConstantNS(fullname, interpolate, value1) {
      var string00,
          string1 = value1 + "",
          interpolate0;
      return function() {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null
            : string0 === string00 ? interpolate0
            : interpolate0 = interpolate(string00 = string0, value1);
      };
    }

    function attrFunction(name, interpolate, value) {
      var string00,
          string10,
          interpolate0;
      return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null
            : string0 === string00 && string1 === string10 ? interpolate0
            : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
      };
    }

    function attrFunctionNS(fullname, interpolate, value) {
      var string00,
          string10,
          interpolate0;
      return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null
            : string0 === string00 && string1 === string10 ? interpolate0
            : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
      };
    }

    function transition_attr(name, value) {
      var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
      return this.attrTween(name, typeof value === "function"
          ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value))
          : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
          : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
    }

    function attrInterpolate(name, i) {
      return function(t) {
        this.setAttribute(name, i.call(this, t));
      };
    }

    function attrInterpolateNS(fullname, i) {
      return function(t) {
        this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
      };
    }

    function attrTweenNS(fullname, value) {
      var t0, i0;
      function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
        return t0;
      }
      tween._value = value;
      return tween;
    }

    function attrTween(name, value) {
      var t0, i0;
      function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
        return t0;
      }
      tween._value = value;
      return tween;
    }

    function transition_attrTween(name, value) {
      var key = "attr." + name;
      if (arguments.length < 2) return (key = this.tween(key)) && key._value;
      if (value == null) return this.tween(key, null);
      if (typeof value !== "function") throw new Error;
      var fullname = namespace(name);
      return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
    }

    function delayFunction(id, value) {
      return function() {
        init(this, id).delay = +value.apply(this, arguments);
      };
    }

    function delayConstant(id, value) {
      return value = +value, function() {
        init(this, id).delay = value;
      };
    }

    function transition_delay(value) {
      var id = this._id;

      return arguments.length
          ? this.each((typeof value === "function"
              ? delayFunction
              : delayConstant)(id, value))
          : get(this.node(), id).delay;
    }

    function durationFunction(id, value) {
      return function() {
        set(this, id).duration = +value.apply(this, arguments);
      };
    }

    function durationConstant(id, value) {
      return value = +value, function() {
        set(this, id).duration = value;
      };
    }

    function transition_duration(value) {
      var id = this._id;

      return arguments.length
          ? this.each((typeof value === "function"
              ? durationFunction
              : durationConstant)(id, value))
          : get(this.node(), id).duration;
    }

    function easeConstant(id, value) {
      if (typeof value !== "function") throw new Error;
      return function() {
        set(this, id).ease = value;
      };
    }

    function transition_ease(value) {
      var id = this._id;

      return arguments.length
          ? this.each(easeConstant(id, value))
          : get(this.node(), id).ease;
    }

    function easeVarying(id, value) {
      return function() {
        var v = value.apply(this, arguments);
        if (typeof v !== "function") throw new Error;
        set(this, id).ease = v;
      };
    }

    function transition_easeVarying(value) {
      if (typeof value !== "function") throw new Error;
      return this.each(easeVarying(this._id, value));
    }

    function transition_filter(match) {
      if (typeof match !== "function") match = matcher(match);

      for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
          if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
            subgroup.push(node);
          }
        }
      }

      return new Transition(subgroups, this._parents, this._name, this._id);
    }

    function transition_merge(transition) {
      if (transition._id !== this._id) throw new Error;

      for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
        for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
          if (node = group0[i] || group1[i]) {
            merge[i] = node;
          }
        }
      }

      for (; j < m0; ++j) {
        merges[j] = groups0[j];
      }

      return new Transition(merges, this._parents, this._name, this._id);
    }

    function start(name) {
      return (name + "").trim().split(/^|\s+/).every(function(t) {
        var i = t.indexOf(".");
        if (i >= 0) t = t.slice(0, i);
        return !t || t === "start";
      });
    }

    function onFunction(id, name, listener) {
      var on0, on1, sit = start(name) ? init : set;
      return function() {
        var schedule = sit(this, id),
            on = schedule.on;

        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

        schedule.on = on1;
      };
    }

    function transition_on(name, listener) {
      var id = this._id;

      return arguments.length < 2
          ? get(this.node(), id).on.on(name)
          : this.each(onFunction(id, name, listener));
    }

    function removeFunction(id) {
      return function() {
        var parent = this.parentNode;
        for (var i in this.__transition) if (+i !== id) return;
        if (parent) parent.removeChild(this);
      };
    }

    function transition_remove() {
      return this.on("end.remove", removeFunction(this._id));
    }

    function transition_select(select) {
      var name = this._name,
          id = this._id;

      if (typeof select !== "function") select = selector(select);

      for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
          if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
            schedule(subgroup[i], name, id, i, subgroup, get(node, id));
          }
        }
      }

      return new Transition(subgroups, this._parents, name, id);
    }

    function transition_selectAll(select) {
      var name = this._name,
          id = this._id;

      if (typeof select !== "function") select = selectorAll(select);

      for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
          if (node = group[i]) {
            for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
              if (child = children[k]) {
                schedule(child, name, id, k, children, inherit);
              }
            }
            subgroups.push(children);
            parents.push(node);
          }
        }
      }

      return new Transition(subgroups, parents, name, id);
    }

    var Selection = selection.prototype.constructor;

    function transition_selection() {
      return new Selection(this._groups, this._parents);
    }

    function styleNull(name, interpolate) {
      var string00,
          string10,
          interpolate0;
      return function() {
        var string0 = styleValue(this, name),
            string1 = (this.style.removeProperty(name), styleValue(this, name));
        return string0 === string1 ? null
            : string0 === string00 && string1 === string10 ? interpolate0
            : interpolate0 = interpolate(string00 = string0, string10 = string1);
      };
    }

    function styleRemove(name) {
      return function() {
        this.style.removeProperty(name);
      };
    }

    function styleConstant(name, interpolate, value1) {
      var string00,
          string1 = value1 + "",
          interpolate0;
      return function() {
        var string0 = styleValue(this, name);
        return string0 === string1 ? null
            : string0 === string00 ? interpolate0
            : interpolate0 = interpolate(string00 = string0, value1);
      };
    }

    function styleFunction(name, interpolate, value) {
      var string00,
          string10,
          interpolate0;
      return function() {
        var string0 = styleValue(this, name),
            value1 = value(this),
            string1 = value1 + "";
        if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
        return string0 === string1 ? null
            : string0 === string00 && string1 === string10 ? interpolate0
            : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
      };
    }

    function styleMaybeRemove(id, name) {
      var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
      return function() {
        var schedule = set(this, id),
            on = schedule.on,
            listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

        schedule.on = on1;
      };
    }

    function transition_style(name, value, priority) {
      var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
      return value == null ? this
          .styleTween(name, styleNull(name, i))
          .on("end.style." + name, styleRemove(name))
        : typeof value === "function" ? this
          .styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value)))
          .each(styleMaybeRemove(this._id, name))
        : this
          .styleTween(name, styleConstant(name, i, value), priority)
          .on("end.style." + name, null);
    }

    function styleInterpolate(name, i, priority) {
      return function(t) {
        this.style.setProperty(name, i.call(this, t), priority);
      };
    }

    function styleTween(name, value, priority) {
      var t, i0;
      function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
        return t;
      }
      tween._value = value;
      return tween;
    }

    function transition_styleTween(name, value, priority) {
      var key = "style." + (name += "");
      if (arguments.length < 2) return (key = this.tween(key)) && key._value;
      if (value == null) return this.tween(key, null);
      if (typeof value !== "function") throw new Error;
      return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
    }

    function textConstant(value) {
      return function() {
        this.textContent = value;
      };
    }

    function textFunction(value) {
      return function() {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
      };
    }

    function transition_text(value) {
      return this.tween("text", typeof value === "function"
          ? textFunction(tweenValue(this, "text", value))
          : textConstant(value == null ? "" : value + ""));
    }

    function textInterpolate(i) {
      return function(t) {
        this.textContent = i.call(this, t);
      };
    }

    function textTween(value) {
      var t0, i0;
      function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
        return t0;
      }
      tween._value = value;
      return tween;
    }

    function transition_textTween(value) {
      var key = "text";
      if (arguments.length < 1) return (key = this.tween(key)) && key._value;
      if (value == null) return this.tween(key, null);
      if (typeof value !== "function") throw new Error;
      return this.tween(key, textTween(value));
    }

    function transition_transition() {
      var name = this._name,
          id0 = this._id,
          id1 = newId();

      for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
          if (node = group[i]) {
            var inherit = get(node, id0);
            schedule(node, name, id1, i, group, {
              time: inherit.time + inherit.delay + inherit.duration,
              delay: 0,
              duration: inherit.duration,
              ease: inherit.ease
            });
          }
        }
      }

      return new Transition(groups, this._parents, name, id1);
    }

    function transition_end() {
      var on0, on1, that = this, id = that._id, size = that.size();
      return new Promise(function(resolve, reject) {
        var cancel = {value: reject},
            end = {value: function() { if (--size === 0) resolve(); }};

        that.each(function() {
          var schedule = set(this, id),
              on = schedule.on;

          // If this node shared a dispatch with the previous node,
          // just assign the updated shared dispatch and we’re done!
          // Otherwise, copy-on-write.
          if (on !== on0) {
            on1 = (on0 = on).copy();
            on1._.cancel.push(cancel);
            on1._.interrupt.push(cancel);
            on1._.end.push(end);
          }

          schedule.on = on1;
        });

        // The selection was empty, resolve end immediately
        if (size === 0) resolve();
      });
    }

    var id = 0;

    function Transition(groups, parents, name, id) {
      this._groups = groups;
      this._parents = parents;
      this._name = name;
      this._id = id;
    }

    function newId() {
      return ++id;
    }

    var selection_prototype = selection.prototype;

    Transition.prototype = {
      constructor: Transition,
      select: transition_select,
      selectAll: transition_selectAll,
      selectChild: selection_prototype.selectChild,
      selectChildren: selection_prototype.selectChildren,
      filter: transition_filter,
      merge: transition_merge,
      selection: transition_selection,
      transition: transition_transition,
      call: selection_prototype.call,
      nodes: selection_prototype.nodes,
      node: selection_prototype.node,
      size: selection_prototype.size,
      empty: selection_prototype.empty,
      each: selection_prototype.each,
      on: transition_on,
      attr: transition_attr,
      attrTween: transition_attrTween,
      style: transition_style,
      styleTween: transition_styleTween,
      text: transition_text,
      textTween: transition_textTween,
      remove: transition_remove,
      tween: transition_tween,
      delay: transition_delay,
      duration: transition_duration,
      ease: transition_ease,
      easeVarying: transition_easeVarying,
      end: transition_end,
      [Symbol.iterator]: selection_prototype[Symbol.iterator]
    };

    function cubicInOut(t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
    }

    var defaultTiming = {
      time: null, // Set on use.
      delay: 0,
      duration: 250,
      ease: cubicInOut
    };

    function inherit(node, id) {
      var timing;
      while (!(timing = node.__transition) || !(timing = timing[id])) {
        if (!(node = node.parentNode)) {
          throw new Error(`transition ${id} not found`);
        }
      }
      return timing;
    }

    function selection_transition(name) {
      var id,
          timing;

      if (name instanceof Transition) {
        id = name._id, name = name._name;
      } else {
        id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
      }

      for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
          if (node = group[i]) {
            schedule(node, name, id, i, group, timing || inherit(node, id));
          }
        }
      }

      return new Transition(groups, this._parents, name, id);
    }

    selection.prototype.interrupt = selection_interrupt;
    selection.prototype.transition = selection_transition;

    const pi = Math.PI,
        tau = 2 * pi,
        epsilon = 1e-6,
        tauEpsilon = tau - epsilon;

    function append(strings) {
      this._ += strings[0];
      for (let i = 1, n = strings.length; i < n; ++i) {
        this._ += arguments[i] + strings[i];
      }
    }

    function appendRound(digits) {
      let d = Math.floor(digits);
      if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
      if (d > 15) return append;
      const k = 10 ** d;
      return function(strings) {
        this._ += strings[0];
        for (let i = 1, n = strings.length; i < n; ++i) {
          this._ += Math.round(arguments[i] * k) / k + strings[i];
        }
      };
    }

    class Path {
      constructor(digits) {
        this._x0 = this._y0 = // start of current subpath
        this._x1 = this._y1 = null; // end of current subpath
        this._ = "";
        this._append = digits == null ? append : appendRound(digits);
      }
      moveTo(x, y) {
        this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
      }
      closePath() {
        if (this._x1 !== null) {
          this._x1 = this._x0, this._y1 = this._y0;
          this._append`Z`;
        }
      }
      lineTo(x, y) {
        this._append`L${this._x1 = +x},${this._y1 = +y}`;
      }
      quadraticCurveTo(x1, y1, x, y) {
        this._append`Q${+x1},${+y1},${this._x1 = +x},${this._y1 = +y}`;
      }
      bezierCurveTo(x1, y1, x2, y2, x, y) {
        this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x},${this._y1 = +y}`;
      }
      arcTo(x1, y1, x2, y2, r) {
        x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;

        // Is the radius negative? Error.
        if (r < 0) throw new Error(`negative radius: ${r}`);

        let x0 = this._x1,
            y0 = this._y1,
            x21 = x2 - x1,
            y21 = y2 - y1,
            x01 = x0 - x1,
            y01 = y0 - y1,
            l01_2 = x01 * x01 + y01 * y01;

        // Is this path empty? Move to (x1,y1).
        if (this._x1 === null) {
          this._append`M${this._x1 = x1},${this._y1 = y1}`;
        }

        // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
        else if (!(l01_2 > epsilon));

        // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
        // Equivalently, is (x1,y1) coincident with (x2,y2)?
        // Or, is the radius zero? Line to (x1,y1).
        else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
          this._append`L${this._x1 = x1},${this._y1 = y1}`;
        }

        // Otherwise, draw an arc!
        else {
          let x20 = x2 - x0,
              y20 = y2 - y0,
              l21_2 = x21 * x21 + y21 * y21,
              l20_2 = x20 * x20 + y20 * y20,
              l21 = Math.sqrt(l21_2),
              l01 = Math.sqrt(l01_2),
              l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
              t01 = l / l01,
              t21 = l / l21;

          // If the start tangent is not coincident with (x0,y0), line to.
          if (Math.abs(t01 - 1) > epsilon) {
            this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
          }

          this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
        }
      }
      arc(x, y, r, a0, a1, ccw) {
        x = +x, y = +y, r = +r, ccw = !!ccw;

        // Is the radius negative? Error.
        if (r < 0) throw new Error(`negative radius: ${r}`);

        let dx = r * Math.cos(a0),
            dy = r * Math.sin(a0),
            x0 = x + dx,
            y0 = y + dy,
            cw = 1 ^ ccw,
            da = ccw ? a0 - a1 : a1 - a0;

        // Is this path empty? Move to (x0,y0).
        if (this._x1 === null) {
          this._append`M${x0},${y0}`;
        }

        // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
        else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
          this._append`L${x0},${y0}`;
        }

        // Is this arc empty? We’re done.
        if (!r) return;

        // Does the angle go the wrong way? Flip the direction.
        if (da < 0) da = da % tau + tau;

        // Is this a complete circle? Draw two arcs to complete the circle.
        if (da > tauEpsilon) {
          this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
        }

        // Is this arc non-empty? Draw an arc!
        else if (da > epsilon) {
          this._append`A${r},${r},0,${+(da >= pi)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
        }
      }
      rect(x, y, w, h) {
        this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w = +w}v${+h}h${-w}Z`;
      }
      toString() {
        return this._;
      }
    }

    function count(node) {
      var sum = 0,
          children = node.children,
          i = children && children.length;
      if (!i) sum = 1;
      else while (--i >= 0) sum += children[i].value;
      node.value = sum;
    }

    function node_count() {
      return this.eachAfter(count);
    }

    function node_each(callback, that) {
      let index = -1;
      for (const node of this) {
        callback.call(that, node, ++index, this);
      }
      return this;
    }

    function node_eachBefore(callback, that) {
      var node = this, nodes = [node], children, i, index = -1;
      while (node = nodes.pop()) {
        callback.call(that, node, ++index, this);
        if (children = node.children) {
          for (i = children.length - 1; i >= 0; --i) {
            nodes.push(children[i]);
          }
        }
      }
      return this;
    }

    function node_eachAfter(callback, that) {
      var node = this, nodes = [node], next = [], children, i, n, index = -1;
      while (node = nodes.pop()) {
        next.push(node);
        if (children = node.children) {
          for (i = 0, n = children.length; i < n; ++i) {
            nodes.push(children[i]);
          }
        }
      }
      while (node = next.pop()) {
        callback.call(that, node, ++index, this);
      }
      return this;
    }

    function node_find(callback, that) {
      let index = -1;
      for (const node of this) {
        if (callback.call(that, node, ++index, this)) {
          return node;
        }
      }
    }

    function node_sum(value) {
      return this.eachAfter(function(node) {
        var sum = +value(node.data) || 0,
            children = node.children,
            i = children && children.length;
        while (--i >= 0) sum += children[i].value;
        node.value = sum;
      });
    }

    function node_sort(compare) {
      return this.eachBefore(function(node) {
        if (node.children) {
          node.children.sort(compare);
        }
      });
    }

    function node_path(end) {
      var start = this,
          ancestor = leastCommonAncestor(start, end),
          nodes = [start];
      while (start !== ancestor) {
        start = start.parent;
        nodes.push(start);
      }
      var k = nodes.length;
      while (end !== ancestor) {
        nodes.splice(k, 0, end);
        end = end.parent;
      }
      return nodes;
    }

    function leastCommonAncestor(a, b) {
      if (a === b) return a;
      var aNodes = a.ancestors(),
          bNodes = b.ancestors(),
          c = null;
      a = aNodes.pop();
      b = bNodes.pop();
      while (a === b) {
        c = a;
        a = aNodes.pop();
        b = bNodes.pop();
      }
      return c;
    }

    function node_ancestors() {
      var node = this, nodes = [node];
      while (node = node.parent) {
        nodes.push(node);
      }
      return nodes;
    }

    function node_descendants() {
      return Array.from(this);
    }

    function node_leaves() {
      var leaves = [];
      this.eachBefore(function(node) {
        if (!node.children) {
          leaves.push(node);
        }
      });
      return leaves;
    }

    function node_links() {
      var root = this, links = [];
      root.each(function(node) {
        if (node !== root) { // Don’t include the root’s parent, if any.
          links.push({source: node.parent, target: node});
        }
      });
      return links;
    }

    function* node_iterator() {
      var node = this, current, next = [node], children, i, n;
      do {
        current = next.reverse(), next = [];
        while (node = current.pop()) {
          yield node;
          if (children = node.children) {
            for (i = 0, n = children.length; i < n; ++i) {
              next.push(children[i]);
            }
          }
        }
      } while (next.length);
    }

    function hierarchy(data, children) {
      if (data instanceof Map) {
        data = [undefined, data];
        if (children === undefined) children = mapChildren;
      } else if (children === undefined) {
        children = objectChildren;
      }

      var root = new Node(data),
          node,
          nodes = [root],
          child,
          childs,
          i,
          n;

      while (node = nodes.pop()) {
        if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
          node.children = childs;
          for (i = n - 1; i >= 0; --i) {
            nodes.push(child = childs[i] = new Node(childs[i]));
            child.parent = node;
            child.depth = node.depth + 1;
          }
        }
      }

      return root.eachBefore(computeHeight);
    }

    function node_copy() {
      return hierarchy(this).eachBefore(copyData);
    }

    function objectChildren(d) {
      return d.children;
    }

    function mapChildren(d) {
      return Array.isArray(d) ? d[1] : null;
    }

    function copyData(node) {
      if (node.data.value !== undefined) node.value = node.data.value;
      node.data = node.data.data;
    }

    function computeHeight(node) {
      var height = 0;
      do node.height = height;
      while ((node = node.parent) && (node.height < ++height));
    }

    function Node(data) {
      this.data = data;
      this.depth =
      this.height = 0;
      this.parent = null;
    }

    Node.prototype = hierarchy.prototype = {
      constructor: Node,
      count: node_count,
      each: node_each,
      eachAfter: node_eachAfter,
      eachBefore: node_eachBefore,
      find: node_find,
      sum: node_sum,
      sort: node_sort,
      path: node_path,
      ancestors: node_ancestors,
      descendants: node_descendants,
      leaves: node_leaves,
      links: node_links,
      copy: node_copy,
      [Symbol.iterator]: node_iterator
    };

    function defaultSeparation(a, b) {
      return a.parent === b.parent ? 1 : 2;
    }

    // function radialSeparation(a, b) {
    //   return (a.parent === b.parent ? 1 : 2) / a.depth;
    // }

    // This function is used to traverse the left contour of a subtree (or
    // subforest). It returns the successor of v on this contour. This successor is
    // either given by the leftmost child of v or by the thread of v. The function
    // returns null if and only if v is on the highest level of its subtree.
    function nextLeft(v) {
      var children = v.children;
      return children ? children[0] : v.t;
    }

    // This function works analogously to nextLeft.
    function nextRight(v) {
      var children = v.children;
      return children ? children[children.length - 1] : v.t;
    }

    // Shifts the current subtree rooted at w+. This is done by increasing
    // prelim(w+) and mod(w+) by shift.
    function moveSubtree(wm, wp, shift) {
      var change = shift / (wp.i - wm.i);
      wp.c -= change;
      wp.s += shift;
      wm.c += change;
      wp.z += shift;
      wp.m += shift;
    }

    // All other shifts, applied to the smaller subtrees between w- and w+, are
    // performed by this function. To prepare the shifts, we have to adjust
    // change(w+), shift(w+), and change(w-).
    function executeShifts(v) {
      var shift = 0,
          change = 0,
          children = v.children,
          i = children.length,
          w;
      while (--i >= 0) {
        w = children[i];
        w.z += shift;
        w.m += shift;
        shift += w.s + (change += w.c);
      }
    }

    // If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
    // returns the specified (default) ancestor.
    function nextAncestor(vim, v, ancestor) {
      return vim.a.parent === v.parent ? vim.a : ancestor;
    }

    function TreeNode(node, i) {
      this._ = node;
      this.parent = null;
      this.children = null;
      this.A = null; // default ancestor
      this.a = this; // ancestor
      this.z = 0; // prelim
      this.m = 0; // mod
      this.c = 0; // change
      this.s = 0; // shift
      this.t = null; // thread
      this.i = i; // number
    }

    TreeNode.prototype = Object.create(Node.prototype);

    function treeRoot(root) {
      var tree = new TreeNode(root, 0),
          node,
          nodes = [tree],
          child,
          children,
          i,
          n;

      while (node = nodes.pop()) {
        if (children = node._.children) {
          node.children = new Array(n = children.length);
          for (i = n - 1; i >= 0; --i) {
            nodes.push(child = node.children[i] = new TreeNode(children[i], i));
            child.parent = node;
          }
        }
      }

      (tree.parent = new TreeNode(null, 0)).children = [tree];
      return tree;
    }

    // Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
    function tree() {
      var separation = defaultSeparation,
          dx = 1,
          dy = 1,
          nodeSize = null;

      function tree(root) {
        var t = treeRoot(root);

        // Compute the layout using Buchheim et al.’s algorithm.
        t.eachAfter(firstWalk), t.parent.m = -t.z;
        t.eachBefore(secondWalk);

        // If a fixed node size is specified, scale x and y.
        if (nodeSize) root.eachBefore(sizeNode);

        // If a fixed tree size is specified, scale x and y based on the extent.
        // Compute the left-most, right-most, and depth-most nodes for extents.
        else {
          var left = root,
              right = root,
              bottom = root;
          root.eachBefore(function(node) {
            if (node.x < left.x) left = node;
            if (node.x > right.x) right = node;
            if (node.depth > bottom.depth) bottom = node;
          });
          var s = left === right ? 1 : separation(left, right) / 2,
              tx = s - left.x,
              kx = dx / (right.x + s + tx),
              ky = dy / (bottom.depth || 1);
          root.eachBefore(function(node) {
            node.x = (node.x + tx) * kx;
            node.y = node.depth * ky;
          });
        }

        return root;
      }

      // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
      // applied recursively to the children of v, as well as the function
      // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
      // node v is placed to the midpoint of its outermost children.
      function firstWalk(v) {
        var children = v.children,
            siblings = v.parent.children,
            w = v.i ? siblings[v.i - 1] : null;
        if (children) {
          executeShifts(v);
          var midpoint = (children[0].z + children[children.length - 1].z) / 2;
          if (w) {
            v.z = w.z + separation(v._, w._);
            v.m = v.z - midpoint;
          } else {
            v.z = midpoint;
          }
        } else if (w) {
          v.z = w.z + separation(v._, w._);
        }
        v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
      }

      // Computes all real x-coordinates by summing up the modifiers recursively.
      function secondWalk(v) {
        v._.x = v.z + v.parent.m;
        v.m += v.parent.m;
      }

      // The core of the algorithm. Here, a new subtree is combined with the
      // previous subtrees. Threads are used to traverse the inside and outside
      // contours of the left and right subtree up to the highest common level. The
      // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
      // superscript o means outside and i means inside, the subscript - means left
      // subtree and + means right subtree. For summing up the modifiers along the
      // contour, we use respective variables si+, si-, so-, and so+. Whenever two
      // nodes of the inside contours conflict, we compute the left one of the
      // greatest uncommon ancestors using the function ANCESTOR and call MOVE
      // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
      // Finally, we add a new thread (if necessary).
      function apportion(v, w, ancestor) {
        if (w) {
          var vip = v,
              vop = v,
              vim = w,
              vom = vip.parent.children[0],
              sip = vip.m,
              sop = vop.m,
              sim = vim.m,
              som = vom.m,
              shift;
          while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
            vom = nextLeft(vom);
            vop = nextRight(vop);
            vop.a = v;
            shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
            if (shift > 0) {
              moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
              sip += shift;
              sop += shift;
            }
            sim += vim.m;
            sip += vip.m;
            som += vom.m;
            sop += vop.m;
          }
          if (vim && !nextRight(vop)) {
            vop.t = vim;
            vop.m += sim - sop;
          }
          if (vip && !nextLeft(vom)) {
            vom.t = vip;
            vom.m += sip - som;
            ancestor = v;
          }
        }
        return ancestor;
      }

      function sizeNode(node) {
        node.x *= dx;
        node.y = node.depth * dy;
      }

      tree.separation = function(x) {
        return arguments.length ? (separation = x, tree) : separation;
      };

      tree.size = function(x) {
        return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);
      };

      tree.nodeSize = function(x) {
        return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);
      };

      return tree;
    }

    function constant$1(x) {
      return function constant() {
        return x;
      };
    }

    function withPath(shape) {
      let digits = 3;

      shape.digits = function(_) {
        if (!arguments.length) return digits;
        if (_ == null) {
          digits = null;
        } else {
          const d = Math.floor(_);
          if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
          digits = d;
        }
        return shape;
      };

      return () => new Path(digits);
    }

    var slice = Array.prototype.slice;

    function x(p) {
      return p[0];
    }

    function y(p) {
      return p[1];
    }

    class Bump {
      constructor(context, x) {
        this._context = context;
        this._x = x;
      }
      areaStart() {
        this._line = 0;
      }
      areaEnd() {
        this._line = NaN;
      }
      lineStart() {
        this._point = 0;
      }
      lineEnd() {
        if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
        this._line = 1 - this._line;
      }
      point(x, y) {
        x = +x, y = +y;
        switch (this._point) {
          case 0: {
            this._point = 1;
            if (this._line) this._context.lineTo(x, y);
            else this._context.moveTo(x, y);
            break;
          }
          case 1: this._point = 2; // falls through
          default: {
            if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);
            else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
            break;
          }
        }
        this._x0 = x, this._y0 = y;
      }
    }

    function bumpX(context) {
      return new Bump(context, true);
    }

    function linkSource(d) {
      return d.source;
    }

    function linkTarget(d) {
      return d.target;
    }

    function link(curve) {
      let source = linkSource,
          target = linkTarget,
          x$1 = x,
          y$1 = y,
          context = null,
          output = null,
          path = withPath(link);

      function link() {
        let buffer;
        const argv = slice.call(arguments);
        const s = source.apply(this, argv);
        const t = target.apply(this, argv);
        if (context == null) output = curve(buffer = path());
        output.lineStart();
        argv[0] = s, output.point(+x$1.apply(this, argv), +y$1.apply(this, argv));
        argv[0] = t, output.point(+x$1.apply(this, argv), +y$1.apply(this, argv));
        output.lineEnd();
        if (buffer) return output = null, buffer + "" || null;
      }

      link.source = function(_) {
        return arguments.length ? (source = _, link) : source;
      };

      link.target = function(_) {
        return arguments.length ? (target = _, link) : target;
      };

      link.x = function(_) {
        return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant$1(+_), link) : x$1;
      };

      link.y = function(_) {
        return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant$1(+_), link) : y$1;
      };

      link.context = function(_) {
        return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), link) : context;
      };

      return link;
    }

    function linkHorizontal() {
      return link(bumpX);
    }

    var constant = x => () => x;

    function ZoomEvent(type, {
      sourceEvent,
      target,
      transform,
      dispatch
    }) {
      Object.defineProperties(this, {
        type: {value: type, enumerable: true, configurable: true},
        sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
        target: {value: target, enumerable: true, configurable: true},
        transform: {value: transform, enumerable: true, configurable: true},
        _: {value: dispatch}
      });
    }

    function Transform(k, x, y) {
      this.k = k;
      this.x = x;
      this.y = y;
    }

    Transform.prototype = {
      constructor: Transform,
      scale: function(k) {
        return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
      },
      translate: function(x, y) {
        return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
      },
      apply: function(point) {
        return [point[0] * this.k + this.x, point[1] * this.k + this.y];
      },
      applyX: function(x) {
        return x * this.k + this.x;
      },
      applyY: function(y) {
        return y * this.k + this.y;
      },
      invert: function(location) {
        return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
      },
      invertX: function(x) {
        return (x - this.x) / this.k;
      },
      invertY: function(y) {
        return (y - this.y) / this.k;
      },
      rescaleX: function(x) {
        return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
      },
      rescaleY: function(y) {
        return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
      },
      toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
      }
    };

    var identity = new Transform(1, 0, 0);

    Transform.prototype;

    function nopropagation(event) {
      event.stopImmediatePropagation();
    }

    function noevent(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }

    // Ignore right-click, since that should open the context menu.
    // except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
    function defaultFilter(event) {
      return (!event.ctrlKey || event.type === 'wheel') && !event.button;
    }

    function defaultExtent() {
      var e = this;
      if (e instanceof SVGElement) {
        e = e.ownerSVGElement || e;
        if (e.hasAttribute("viewBox")) {
          e = e.viewBox.baseVal;
          return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
        }
        return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
      }
      return [[0, 0], [e.clientWidth, e.clientHeight]];
    }

    function defaultTransform() {
      return this.__zoom || identity;
    }

    function defaultWheelDelta(event) {
      return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
    }

    function defaultTouchable() {
      return navigator.maxTouchPoints || ("ontouchstart" in this);
    }

    function defaultConstrain(transform, extent, translateExtent) {
      var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
          dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
          dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
          dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
      return transform.translate(
        dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
        dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
      );
    }

    function zoom() {
      var filter = defaultFilter,
          extent = defaultExtent,
          constrain = defaultConstrain,
          wheelDelta = defaultWheelDelta,
          touchable = defaultTouchable,
          scaleExtent = [0, Infinity],
          translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
          duration = 250,
          interpolate = interpolateZoom,
          listeners = dispatch("start", "zoom", "end"),
          touchstarting,
          touchfirst,
          touchending,
          touchDelay = 500,
          wheelDelay = 150,
          clickDistance2 = 0,
          tapDistance = 10;

      function zoom(selection) {
        selection
            .property("__zoom", defaultTransform)
            .on("wheel.zoom", wheeled, {passive: false})
            .on("mousedown.zoom", mousedowned)
            .on("dblclick.zoom", dblclicked)
          .filter(touchable)
            .on("touchstart.zoom", touchstarted)
            .on("touchmove.zoom", touchmoved)
            .on("touchend.zoom touchcancel.zoom", touchended)
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
      }

      zoom.transform = function(collection, transform, point, event) {
        var selection = collection.selection ? collection.selection() : collection;
        selection.property("__zoom", defaultTransform);
        if (collection !== selection) {
          schedule(collection, transform, point, event);
        } else {
          selection.interrupt().each(function() {
            gesture(this, arguments)
              .event(event)
              .start()
              .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
              .end();
          });
        }
      };

      zoom.scaleBy = function(selection, k, p, event) {
        zoom.scaleTo(selection, function() {
          var k0 = this.__zoom.k,
              k1 = typeof k === "function" ? k.apply(this, arguments) : k;
          return k0 * k1;
        }, p, event);
      };

      zoom.scaleTo = function(selection, k, p, event) {
        zoom.transform(selection, function() {
          var e = extent.apply(this, arguments),
              t0 = this.__zoom,
              p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
              p1 = t0.invert(p0),
              k1 = typeof k === "function" ? k.apply(this, arguments) : k;
          return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
        }, p, event);
      };

      zoom.translateBy = function(selection, x, y, event) {
        zoom.transform(selection, function() {
          return constrain(this.__zoom.translate(
            typeof x === "function" ? x.apply(this, arguments) : x,
            typeof y === "function" ? y.apply(this, arguments) : y
          ), extent.apply(this, arguments), translateExtent);
        }, null, event);
      };

      zoom.translateTo = function(selection, x, y, p, event) {
        zoom.transform(selection, function() {
          var e = extent.apply(this, arguments),
              t = this.__zoom,
              p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
          return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(
            typeof x === "function" ? -x.apply(this, arguments) : -x,
            typeof y === "function" ? -y.apply(this, arguments) : -y
          ), e, translateExtent);
        }, p, event);
      };

      function scale(transform, k) {
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
        return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
      }

      function translate(transform, p0, p1) {
        var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
        return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
      }

      function centroid(extent) {
        return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
      }

      function schedule(transition, transform, point, event) {
        transition
            .on("start.zoom", function() { gesture(this, arguments).event(event).start(); })
            .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).event(event).end(); })
            .tween("zoom", function() {
              var that = this,
                  args = arguments,
                  g = gesture(that, args).event(event),
                  e = extent.apply(that, args),
                  p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
                  w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
                  a = that.__zoom,
                  b = typeof transform === "function" ? transform.apply(that, args) : transform,
                  i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
              return function(t) {
                if (t === 1) t = b; // Avoid rounding error on end.
                else { var l = i(t), k = w / l[2]; t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
                g.zoom(null, t);
              };
            });
      }

      function gesture(that, args, clean) {
        return (!clean && that.__zooming) || new Gesture(that, args);
      }

      function Gesture(that, args) {
        this.that = that;
        this.args = args;
        this.active = 0;
        this.sourceEvent = null;
        this.extent = extent.apply(that, args);
        this.taps = 0;
      }

      Gesture.prototype = {
        event: function(event) {
          if (event) this.sourceEvent = event;
          return this;
        },
        start: function() {
          if (++this.active === 1) {
            this.that.__zooming = this;
            this.emit("start");
          }
          return this;
        },
        zoom: function(key, transform) {
          if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
          if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
          if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
          this.that.__zoom = transform;
          this.emit("zoom");
          return this;
        },
        end: function() {
          if (--this.active === 0) {
            delete this.that.__zooming;
            this.emit("end");
          }
          return this;
        },
        emit: function(type) {
          var d = select(this.that).datum();
          listeners.call(
            type,
            this.that,
            new ZoomEvent(type, {
              sourceEvent: this.sourceEvent,
              target: zoom,
              transform: this.that.__zoom,
              dispatch: listeners
            }),
            d
          );
        }
      };

      function wheeled(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var g = gesture(this, args).event(event),
            t = this.__zoom,
            k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
            p = pointer(event);

        // If the mouse is in the same location as before, reuse it.
        // If there were recent wheel events, reset the wheel idle timeout.
        if (g.wheel) {
          if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
            g.mouse[1] = t.invert(g.mouse[0] = p);
          }
          clearTimeout(g.wheel);
        }

        // If this wheel event won’t trigger a transform change, ignore it.
        else if (t.k === k) return;

        // Otherwise, capture the mouse point and location at the start.
        else {
          g.mouse = [p, t.invert(p)];
          interrupt(this);
          g.start();
        }

        noevent(event);
        g.wheel = setTimeout(wheelidled, wheelDelay);
        g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

        function wheelidled() {
          g.wheel = null;
          g.end();
        }
      }

      function mousedowned(event, ...args) {
        if (touchending || !filter.apply(this, arguments)) return;
        var currentTarget = event.currentTarget,
            g = gesture(this, args, true).event(event),
            v = select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
            p = pointer(event, currentTarget),
            x0 = event.clientX,
            y0 = event.clientY;

        dragDisable(event.view);
        nopropagation(event);
        g.mouse = [p, this.__zoom.invert(p)];
        interrupt(this);
        g.start();

        function mousemoved(event) {
          noevent(event);
          if (!g.moved) {
            var dx = event.clientX - x0, dy = event.clientY - y0;
            g.moved = dx * dx + dy * dy > clickDistance2;
          }
          g.event(event)
           .zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
        }

        function mouseupped(event) {
          v.on("mousemove.zoom mouseup.zoom", null);
          yesdrag(event.view, g.moved);
          noevent(event);
          g.event(event).end();
        }
      }

      function dblclicked(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var t0 = this.__zoom,
            p0 = pointer(event.changedTouches ? event.changedTouches[0] : event, this),
            p1 = t0.invert(p0),
            k1 = t0.k * (event.shiftKey ? 0.5 : 2),
            t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);

        noevent(event);
        if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0, event);
        else select(this).call(zoom.transform, t1, p0, event);
      }

      function touchstarted(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var touches = event.touches,
            n = touches.length,
            g = gesture(this, args, event.changedTouches.length === n).event(event),
            started, i, t, p;

        nopropagation(event);
        for (i = 0; i < n; ++i) {
          t = touches[i], p = pointer(t, this);
          p = [p, this.__zoom.invert(p), t.identifier];
          if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
          else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
        }

        if (touchstarting) touchstarting = clearTimeout(touchstarting);

        if (started) {
          if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
          interrupt(this);
          g.start();
        }
      }

      function touchmoved(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event),
            touches = event.changedTouches,
            n = touches.length, i, t, p, l;

        noevent(event);
        for (i = 0; i < n; ++i) {
          t = touches[i], p = pointer(t, this);
          if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
          else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
        }
        t = g.that.__zoom;
        if (g.touch1) {
          var p0 = g.touch0[0], l0 = g.touch0[1],
              p1 = g.touch1[0], l1 = g.touch1[1],
              dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
              dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
          t = scale(t, Math.sqrt(dp / dl));
          p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
          l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
        }
        else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
        else return;

        g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
      }

      function touchended(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event),
            touches = event.changedTouches,
            n = touches.length, i, t;

        nopropagation(event);
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() { touchending = null; }, touchDelay);
        for (i = 0; i < n; ++i) {
          t = touches[i];
          if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
          else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
        }
        if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
        if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
        else {
          g.end();
          // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
          if (g.taps === 2) {
            t = pointer(t, this);
            if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
              var p = select(this).on("dblclick.zoom");
              if (p) p.apply(this, arguments);
            }
          }
        }
      }

      zoom.wheelDelta = function(_) {
        return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant(+_), zoom) : wheelDelta;
      };

      zoom.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), zoom) : filter;
      };

      zoom.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), zoom) : touchable;
      };

      zoom.extent = function(_) {
        return arguments.length ? (extent = typeof _ === "function" ? _ : constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
      };

      zoom.scaleExtent = function(_) {
        return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
      };

      zoom.translateExtent = function(_) {
        return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
      };

      zoom.constrain = function(_) {
        return arguments.length ? (constrain = _, zoom) : constrain;
      };

      zoom.duration = function(_) {
        return arguments.length ? (duration = +_, zoom) : duration;
      };

      zoom.interpolate = function(_) {
        return arguments.length ? (interpolate = _, zoom) : interpolate;
      };

      zoom.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? zoom : value;
      };

      zoom.clickDistance = function(_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
      };

      zoom.tapDistance = function(_) {
        return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
      };

      return zoom;
    }

    /**
     * Tree data transformation utilities
     *
     * Transforms flat RTK graph data into hierarchical tree structures
     * suitable for D3.js tree visualization.
     */
    /**
     * JLPT level ordering from easiest to hardest
     */
    const JLPT_ORDER = {
        N5: 1, // Easiest
        N4: 2,
        N3: 3,
        N2: 4,
        N1: 5, // Hardest
    };
    /**
     * Sort tree nodes by JLPT level (easiest to hardest), with non-JLPT nodes last
     */
    function sortNodesByJLPTLevel(nodes) {
        // Separate "+n more" nodes from regular nodes
        const moreNodes = nodes.filter((node) => node.id.includes("_more_referers"));
        const regularNodes = nodes.filter((node) => !node.id.includes("_more_referers"));
        // Sort regular nodes by JLPT level
        const sortedRegular = regularNodes.sort((a, b) => {
            const aLevel = a.data.jlptLevel;
            const bLevel = b.data.jlptLevel;
            // If both have JLPT levels, sort by difficulty (easiest first)
            if (aLevel && bLevel) {
                return JLPT_ORDER[aLevel] - JLPT_ORDER[bLevel];
            }
            // If only one has JLPT level, prioritize it
            if (aLevel && !bLevel)
                return -1;
            if (!aLevel && bLevel)
                return 1;
            // If neither has JLPT level, maintain original order (or sort by character/keyword)
            const aChar = a.data.character || a.data.keyword || "";
            const bChar = b.data.character || b.data.keyword || "";
            return aChar.localeCompare(bChar);
        });
        // Return regular nodes first, then "+n more" nodes at the end
        return [...sortedRegular, ...moreNodes];
    }
    class TreeDataTransformer {
        constructor(graph) {
            this.graph = graph;
            this.nodeMap = new Map(graph.nodes.map((node) => [node.id, node]));
            // Build edge map for efficient lookups
            this.edgeMap = new Map();
            for (const edge of graph.edges) {
                const edges = this.edgeMap.get(edge.source) || [];
                edges.push(edge);
                this.edgeMap.set(edge.source, edges);
            }
        }
        /**
         * Build a hierarchical tree starting from a kanji node
         *
         * @param kanjiId The ID of the kanji to use as root
         * @param maxDepth Maximum depth to traverse (default: 5)
         * @returns Tree transformation result
         */
        buildKanjiComponentTree(kanjiId, maxDepth = 5) {
            const rootNode = this.nodeMap.get(kanjiId);
            if (!rootNode) {
                throw new Error(`Kanji node not found: ${kanjiId}`);
            }
            if (rootNode.type !== "kanji") {
                throw new Error(`Node ${kanjiId} is not a kanji node`);
            }
            const visitedNodes = new Set();
            const circularReferences = [];
            const allTreeNodes = [];
            const buildTreeNode = (nodeId, depth, parent) => {
                // Prevent infinite recursion
                if (depth > maxDepth) {
                    return null;
                }
                // Detect circular references
                if (visitedNodes.has(nodeId)) {
                    circularReferences.push(nodeId);
                    return null;
                }
                const graphNode = this.nodeMap.get(nodeId);
                if (!graphNode) {
                    return null;
                }
                visitedNodes.add(nodeId);
                const treeNode = {
                    id: nodeId,
                    data: graphNode,
                    depth,
                    expanded: depth < 2, // Auto-expand first 2 levels
                    referersExpanded: false, // Referers start collapsed
                    parent,
                    children: [],
                };
                allTreeNodes.push(treeNode);
                // Get mnemonic relationships (mnemonic_uses edges)
                const componentEdges = this.edgeMap.get(nodeId) || [];
                const children = [];
                for (const edge of componentEdges) {
                    if (edge.type === "mnemonic_uses") {
                        const childNode = buildTreeNode(edge.target, depth + 1, treeNode);
                        if (childNode) {
                            children.push(childNode);
                        }
                    }
                }
                // Sort children by JLPT level (easiest to hardest)
                treeNode.children = sortNodesByJLPTLevel(children);
                visitedNodes.delete(nodeId); // Allow node to be revisited in other branches
                return treeNode;
            };
            const root = buildTreeNode(kanjiId, 0);
            if (!root) {
                throw new Error(`Failed to build tree for kanji: ${kanjiId}`);
            }
            const maxTreeDepth = Math.max(...allTreeNodes.map((node) => node.depth));
            return {
                root,
                allNodes: allTreeNodes,
                sourceGraph: {
                    nodes: this.graph.nodes,
                    edges: this.graph.edges,
                },
                metadata: {
                    totalNodes: allTreeNodes.length,
                    maxDepth: maxTreeDepth,
                    circularReferences,
                },
            };
        }
        /**
         * Find all kanji that contain a specific primitive
         *
         * @param primitiveId The primitive node ID
         * @returns Array of kanji nodes that contain this primitive
         */
        findKanjiUsingPrimitive(primitiveId) {
            const kanjiNodes = [];
            for (const edge of this.graph.edges) {
                if (edge.type === "mnemonic_uses" && edge.target === primitiveId) {
                    const kanjiNode = this.nodeMap.get(edge.source);
                    if (kanjiNode && kanjiNode.type === "kanji") {
                        kanjiNodes.push(kanjiNode);
                    }
                }
            }
            return kanjiNodes;
        }
        /**
         * Find all nodes that reference/use the specified node (reverse lookup)
         * Uses the 'mnemonic_uses' edges to find what kanji/primitives use this node in their mnemonic
         *
         * @param nodeId The node ID to find referers for
         * @returns Array of nodes that reference this node
         */
        findNodeReferers(nodeId) {
            const refererNodes = [];
            for (const edge of this.graph.edges) {
                if (edge.type === "mnemonic_uses" && edge.target === nodeId) {
                    const refererNode = this.nodeMap.get(edge.source);
                    if (refererNode) {
                        refererNodes.push(refererNode);
                    }
                }
            }
            return refererNodes;
        }
        /**
         * Get all primitive components of a kanji (direct children only)
         *
         * @param kanjiId The kanji node ID
         * @returns Array of primitive nodes
         */
        getKanjiComponents(kanjiId) {
            const components = [];
            const edges = this.edgeMap.get(kanjiId) || [];
            for (const edge of edges) {
                if (edge.type === "mnemonic_uses") {
                    const component = this.nodeMap.get(edge.target);
                    if (component) {
                        components.push(component);
                    }
                }
            }
            return components;
        }
        /**
         * Build referers tree nodes for a given node (upward relationships)
         * Shows only immediate referers with a reasonable limit for better UX
         *
         * @param nodeId The node ID to find referers for
         * @param maxReferers Maximum number of referers to show (default: 10)
         * @param startIndex Starting index for pagination (default: 0)
         * @returns Array of TreeNode objects representing immediate referers
         */
        buildReferersTree(nodeId, maxReferers = 10, startIndex = 0) {
            const refererGraphNodes = this.findNodeReferers(nodeId);
            const refererTreeNodes = [];
            // Limit the number of referers to prevent UI overwhelm
            const endIndex = startIndex + maxReferers;
            const limitedReferers = refererGraphNodes.slice(startIndex, endIndex);
            for (const refererGraphNode of limitedReferers) {
                const refererTreeNode = {
                    id: refererGraphNode.id,
                    data: refererGraphNode,
                    depth: -1, // Negative depth for referers (upward direction)
                    expanded: false,
                    referersExpanded: false,
                    children: [], // Referers show as leaf nodes initially
                    referers: [], // No nested referers for now - keep it simple
                };
                refererTreeNodes.push(refererTreeNode);
            }
            // If there are more referers than what we're showing, add a summary node
            if (refererGraphNodes.length > endIndex) {
                const remainingCount = refererGraphNodes.length - endIndex;
                // Use a consistent ID format for the placeholder node
                const placeholderId = startIndex === 0
                    ? `${nodeId}_more_referers` // First placeholder, no index suffix
                    : `${nodeId}_more_referers_${endIndex}`; // Subsequent placeholders with index
                const summaryNode = {
                    id: placeholderId,
                    data: {
                        id: placeholderId,
                        type: "primitive",
                        character: "…",
                        keyword: `+${remainingCount} more`,
                    },
                    depth: -1,
                    expanded: false,
                    referersExpanded: false,
                    children: [],
                    referers: [],
                    // Store metadata for expansion directly on the TreeNode
                    moreNodeMeta: {
                        parentNodeId: nodeId,
                        totalReferers: refererGraphNodes.length,
                        currentIndex: endIndex,
                    },
                };
                refererTreeNodes.push(summaryNode);
            }
            // Sort referers by JLPT level (easiest to hardest)
            return sortNodesByJLPTLevel(refererTreeNodes);
        }
        /**
         * Get statistics about the component tree
         *
         * @param treeResult Tree transformation result
         * @returns Tree statistics
         */
        getTreeStatistics(treeResult) {
            const nodesByType = {
                kanji: treeResult.allNodes.filter((n) => n.data.type === "kanji").length,
                primitive: treeResult.allNodes.filter((n) => n.data.type === "primitive")
                    .length,
            };
            const nodesByDepth = new Map();
            for (const node of treeResult.allNodes) {
                const count = nodesByDepth.get(node.depth) || 0;
                nodesByDepth.set(node.depth, count + 1);
            }
            return {
                totalNodes: treeResult.allNodes.length,
                nodesByType,
                nodesByDepth: Object.fromEntries(nodesByDepth),
                maxDepth: treeResult.metadata.maxDepth,
                circularReferences: treeResult.metadata.circularReferences.length,
            };
        }
    }

    /**
     * Utility functions for tree operations
     */
    /**
     * Build a kanji component tree from graph data
     *
     * @param graph RTK graph data
     * @param kanjiCharacter Kanji character to build tree for
     * @param maxDepth Maximum tree depth
     * @returns Tree transformation result
     */
    function buildKanjiTree(graph, kanjiCharacter, maxDepth = 5) {
        const transformer = new TreeDataTransformer(graph);
        // Find the kanji node by character
        const kanjiNode = graph.nodes.find((node) => node.type === "kanji" && node.character === kanjiCharacter);
        if (!kanjiNode) {
            throw new Error(`Kanji character not found: ${kanjiCharacter}`);
        }
        return transformer.buildKanjiComponentTree(kanjiNode.id, maxDepth);
    }
    /**
     * Find the path from root to a specific node in the tree
     *
     * @param root Root tree node
     * @param targetId Target node ID to find
     * @returns Array of tree nodes representing the path, or null if not found
     */
    function findKanjiPath(root, targetId) {
        function searchPath(node, path) {
            const currentPath = [...path, node];
            if (node.id === targetId) {
                return currentPath;
            }
            if (node.children) {
                for (const child of node.children) {
                    const result = searchPath(child, currentPath);
                    if (result) {
                        return result;
                    }
                }
            }
            return null;
        }
        return searchPath(root, []);
    }
    /**
     * Toggle expansion state of a node and all its descendants
     *
     * @param node Tree node to toggle
     * @param expanded New expansion state
     * @param recursive Whether to apply to all descendants
     */
    function toggleNodeExpansion(node, expanded, recursive = false) {
        node.expanded = expanded;
        if (recursive && node.children) {
            for (const child of node.children) {
                toggleNodeExpansion(child, expanded, recursive);
            }
        }
    }

    /**
     * KanjiTree D3.js visualization component
     *
     * Renders hierarchical kanji component trees using D3.js tree layout
     */
    /**
     * Get node color based on JLPT level with fallback to default styles
     */
    function getNodeColor(node, isReferer = false, isHover = false) {
        // Special handling for "+n more" nodes - no color
        if (node.id.includes("_more_referers")) {
            return "white";
        }
        // For primitives or nodes without JLPT level, use default colors
        if (node.data.type !== "kanji" || !node.data.jlptLevel) {
            if (isReferer) {
                const style = DEFAULT_STYLE.nodes.referer;
                return isHover ? style.hoverFill || style.fill : style.fill;
            }
            else {
                const style = DEFAULT_STYLE.nodes.default;
                return isHover ? style.hoverFill || style.fill : style.fill;
            }
        }
        // Use subtle JLPT color for kanji with level data
        const baseColor = JLPT_COLORS[node.data.jlptLevel];
        // Convert hex to rgba with very subtle opacity
        const r = parseInt(baseColor.slice(1, 3), 16);
        const g = parseInt(baseColor.slice(3, 5), 16);
        const b = parseInt(baseColor.slice(5, 7), 16);
        if (isHover) {
            // Slightly more opaque for hover effect
            return `rgba(${r}, ${g}, ${b}, 0.7)`;
        }
        // Very subtle opacity for normal state
        return `rgba(${r}, ${g}, ${b}, 0.5)`;
    }
    /**
     * Get border color based on JLPT level (slightly darker than fill)
     */
    function getNodeBorderColor(node, isReferer = false) {
        // For primitives or nodes without JLPT level, use default border colors
        if (node.data.type !== "kanji" || !node.data.jlptLevel) {
            if (isReferer) {
                return DEFAULT_STYLE.nodes.referer.stroke;
            }
            else {
                return DEFAULT_STYLE.nodes.default.stroke;
            }
        }
        // Create a slightly darker border color from the JLPT color
        const baseColor = JLPT_COLORS[node.data.jlptLevel];
        const r = Math.max(0, parseInt(baseColor.slice(1, 3), 16) - 30);
        const g = Math.max(0, parseInt(baseColor.slice(3, 5), 16) - 30);
        const b = Math.max(0, parseInt(baseColor.slice(5, 7), 16) - 30);
        return `rgba(${r}, ${g}, ${b}, 0.8)`;
    }
    // Default styling configuration
    const DEFAULT_STYLE = {
        nodes: {
            default: {
                fill: "rgba(240, 253, 244, 0.8)", // Very pale green at 80% opacity
                stroke: "#4ade80", // Soft green border
                strokeWidth: 2,
                radius: 28, // Unified radius
                hoverFill: "rgba(220, 252, 231, 0.8)", // Slightly darker pale green on hover at 80% opacity
                selectedFill: "rgba(187, 247, 208, 0.8)", // Darker green when selected at 80% opacity
            },
            referer: {
                fill: "rgba(233, 213, 255, 0.8)", // Light purple for referer nodes at 80% opacity
                stroke: "#9333ea", // Purple border
                strokeWidth: 2,
                radius: 28, // Same radius as default
                hoverFill: "rgba(221, 214, 254, 0.8)", // Slightly darker light purple on hover at 80% opacity
                selectedFill: "rgba(196, 181, 253, 0.8)", // Darker purple when selected at 80% opacity
            },
        },
        edges: {
            stroke: "#6b7280", // Neutral gray for edges
            strokeWidth: 2,
            strokeDasharray: undefined,
            referers: {
                stroke: "#9333ea", // Purple for referer edges
                strokeWidth: 2,
                strokeDasharray: "5,5", // Dashed line for referers
            },
        },
        text: {
            fontSize: 18, // Increased from 12
            fontFamily: "Arial, sans-serif",
            fill: "#1f2937", // Dark gray for text contrast
        },
    };
    class KanjiTreeRenderer {
        constructor(config) {
            this.width = 800;
            this.height = 600;
            this.margin = { top: 20, right: 120, bottom: 20, left: 120 };
            this.currentRoot = null;
            this.selectedNodeId = null;
            this.config = config;
            this.style = { ...DEFAULT_STYLE, ...config.style };
            this.callbacks = config.interactions || {};
            this.transformer = config.transformer;
            // Initialize container
            const containerElement = typeof config.render.container === "string"
                ? document.querySelector(config.render.container)
                : config.render.container;
            if (!containerElement) {
                throw new Error("Container element not found");
            }
            this.container = select(containerElement);
            this.setupSVG();
            this.setupZoom();
            this.setupTreeLayout();
            this.setupTooltip();
        }
        setupSVG() {
            // Get container dimensions
            const containerRect = this.container.node().getBoundingClientRect();
            this.width = containerRect.width || 800;
            this.height = containerRect.height || 600;
            // Create SVG
            this.svg = this.container
                .append("svg")
                .attr("width", this.width)
                .attr("height", this.height)
                .style("border", "1px solid #ccc");
            // Create main group for zoom/pan
            this.g = this.svg
                .append("g")
                .attr("transform", `translate(${this.margin.left},${this.margin.top})`);
            // Create separate groups for layering (links behind nodes)
            this.linksGroup = this.g.append("g").attr("class", "links-layer");
            this.nodesGroup = this.g.append("g").attr("class", "nodes-layer");
        }
        setupZoom() {
            this.zoom = zoom()
                .scaleExtent([0.1, 4])
                .on("zoom", (event) => {
                this.g.attr("transform", event.transform);
            });
            this.svg.call(this.zoom);
        }
        setupTreeLayout() {
            const treeWidth = this.width - this.margin.left - this.margin.right;
            const treeHeight = this.height - this.margin.top - this.margin.bottom;
            this.treeLayout = tree()
                .size([treeHeight, treeWidth])
                .nodeSize([80, 120]); // [height, width] between nodes - increased spacing
        }
        /**
         * Render a tree starting from the specified root node
         */
        render(root) {
            this.currentRoot = root;
            // Get visible nodes (respecting expanded state)
            // const visibleNodes = getVisibleNodes(root);
            // Create D3 hierarchy including both children and referers
            const hierarchy$1 = hierarchy(root, (d) => {
                const visibleNodes = [];
                // Add children if expanded
                if (d.expanded && d.children) {
                    visibleNodes.push(...d.children);
                }
                // Add referers if expanded (they appear as children in the layout but styled differently)
                if (d.referersExpanded && d.referers) {
                    visibleNodes.push(...d.referers);
                }
                return visibleNodes.length > 0 ? visibleNodes : undefined;
            });
            // Apply tree layout
            const treeData = this.treeLayout(hierarchy$1);
            // Get nodes and links
            const nodes = treeData.descendants();
            const links = treeData.links();
            this.renderLinks(links);
            this.renderNodes(nodes);
            // Center and zoom the tree after initial render
            if (nodes.length > 0) {
                this.centerAndZoomToFit(nodes);
            }
        }
        renderNodes(nodes) {
            const nodeGroups = this.nodesGroup
                .selectAll(".node")
                .data(nodes, (d) => d.data.id);
            // Enter selection
            const nodeEnter = nodeGroups
                .enter()
                .append("g")
                .attr("class", "node")
                .attr("transform", (d) => `translate(${d.y},${d.x})`)
                .style("opacity", 0);
            // Add circles for nodes
            nodeEnter
                .append("circle")
                .attr("r", (d) => {
                // Check if this is a referer node (negative depth)
                const isRefererNode = d.data.depth < 0;
                const style = isRefererNode
                    ? this.style.nodes.referer
                    : this.style.nodes.default;
                return style.radius;
            })
                .style("fill", (d) => {
                // Check if this is a referer node (negative depth)
                const isRefererNode = d.data.depth < 0;
                return getNodeColor(d.data, isRefererNode, false);
            })
                .style("stroke", (d) => {
                // Check if this is a referer node (negative depth)
                const isRefererNode = d.data.depth < 0;
                return getNodeBorderColor(d.data, isRefererNode);
            })
                .style("stroke-width", (d) => {
                // Check if this is a referer node (negative depth)
                const isRefererNode = d.data.depth < 0;
                const style = isRefererNode
                    ? this.style.nodes.referer
                    : this.style.nodes.default;
                return style.strokeWidth;
            })
                .style("cursor", (d) => {
                // Make "+n more" nodes appear clickable
                return d.data.id.includes("_more_referers") ? "pointer" : "default";
            });
            // Add text labels
            nodeEnter
                .append("text")
                .attr("dy", "0.35em")
                .attr("text-anchor", "middle")
                .style("font-size", `${this.style.text.fontSize}px`)
                .style("font-family", this.style.text.fontFamily)
                .style("fill", this.style.text.fill)
                .style("pointer-events", "none")
                .text((d) => d.data.data.character || d.data.data.keyword || "?");
            // Add expand/collapse indicator for nodes with children
            nodeEnter
                .append("circle")
                .attr("class", "expand-indicator")
                .attr("r", 8)
                .attr("cy", -25)
                .style("fill", "#ffffff")
                .style("stroke", "#495057")
                .style("stroke-width", 1)
                .style("cursor", "pointer")
                .style("opacity", (d) => d.data.children && d.data.children.length > 0 ? 1 : 0);
            nodeEnter
                .append("text")
                .attr("class", "expand-text")
                .attr("text-anchor", "middle")
                .attr("dy", "-20")
                .style("font-size", "10px")
                .style("fill", "#495057")
                .style("pointer-events", "none")
                .text((d) => {
                if (!d.data.children || d.data.children.length === 0)
                    return "";
                return d.data.expanded ? "↓" : "→";
            });
            // Add referers indicator button (bottom of node)
            nodeEnter
                .append("circle")
                .attr("class", "referers-indicator")
                .attr("r", 8)
                .attr("cy", 25)
                .style("fill", "#ffffff")
                .style("stroke", "#9333ea")
                .style("stroke-width", 1)
                .style("cursor", "pointer")
                .style("opacity", 0); // Will be set based on data availability
            nodeEnter
                .append("text")
                .attr("class", "referers-text")
                .attr("text-anchor", "middle")
                .attr("dy", "30")
                .style("font-size", "10px")
                .style("fill", "#9333ea")
                .style("pointer-events", "none")
                .text("↑");
            // Update selection
            const nodeUpdate = nodeEnter.merge(nodeGroups);
            nodeUpdate
                .transition()
                .duration(this.config.render.animationDuration || 750)
                .attr("transform", (d) => `translate(${d.y},${d.x})`)
                .style("opacity", 1);
            // Update referers button visibility and text
            nodeUpdate.select(".referers-indicator").style("opacity", (d) => {
                // Check if transformer is available to load referers
                if (!this.transformer)
                    return 0;
                // Check if node actually has referers (lazily check upfront to avoid showing unnecessary buttons)
                const hasReferers = this.transformer.findNodeReferers(d.data.id).length > 0;
                return hasReferers ? 1 : 0;
            });
            nodeUpdate.select(".referers-text").text((d) => {
                // Only show text if transformer is available and node has referers
                if (!this.transformer)
                    return "";
                const hasReferers = this.transformer.findNodeReferers(d.data.id).length > 0;
                if (!hasReferers)
                    return "";
                if (!d.data.referers || d.data.referers.length === 0)
                    return "↑";
                return d.data.referersExpanded ? "↓" : "↑";
            });
            // Update expand button text
            nodeUpdate.select(".expand-text").text((d) => {
                if (!d.data.children || d.data.children.length === 0)
                    return "";
                return d.data.expanded ? "↓" : "→";
            });
            // Exit selection
            nodeGroups
                .exit()
                .transition()
                .duration(this.config.render.animationDuration || 750)
                .style("opacity", 0)
                .remove();
            // Add event listeners
            this.addNodeEventListeners(nodeUpdate);
        }
        renderLinks(links) {
            const linkGroups = this.linksGroup
                .selectAll(".link")
                .data(links, (d) => d.target.data.id);
            // Enter selection
            const linkEnter = linkGroups
                .enter()
                .append("path")
                .attr("class", (d) => {
                // Check if this is a referer link (negative depth indicates referer)
                const isRefererLink = d.target.data.depth < 0;
                return isRefererLink ? "link referer-link" : "link child-link";
            })
                .style("fill", "none")
                .style("stroke", (d) => {
                const isRefererLink = d.target.data.depth < 0;
                if (isRefererLink && this.style.edges.referers) {
                    return this.style.edges.referers.stroke;
                }
                return this.style.edges.stroke;
            })
                .style("stroke-width", (d) => {
                const isRefererLink = d.target.data.depth < 0;
                if (isRefererLink && this.style.edges.referers) {
                    return this.style.edges.referers.strokeWidth;
                }
                return this.style.edges.strokeWidth;
            })
                .style("stroke-dasharray", (d) => {
                const isRefererLink = d.target.data.depth < 0;
                if (isRefererLink && this.style.edges.referers) {
                    return this.style.edges.referers.strokeDasharray;
                }
                return this.style.edges.strokeDasharray || null;
            })
                .style("opacity", 0);
            // Update selection
            const linkUpdate = linkEnter.merge(linkGroups);
            linkUpdate
                .transition()
                .duration(this.config.render.animationDuration || 750)
                .attr("d", (d) => {
                return linkHorizontal()
                    .x((d) => d.y)
                    .y((d) => d.x)(d);
            })
                .style("opacity", 1);
            // Exit selection
            linkGroups
                .exit()
                .transition()
                .duration(this.config.render.animationDuration || 750)
                .style("opacity", 0)
                .remove();
        }
        addNodeEventListeners(selection) {
            // Click events
            selection.on("click", (event, d) => {
                event.stopPropagation();
                // Check if this is a "+n more" placeholder node
                if (d.data.id.includes("_more_referers")) {
                    this.handleMoreNodeClick(d.data);
                    return;
                }
                // Update selection
                this.selectedNodeId = d.data.id;
                this.updateNodeSelection();
                if (this.callbacks.onNodeClick) {
                    this.callbacks.onNodeClick(d.data, event);
                }
            });
            // Expand/collapse click events
            selection
                .select(".expand-indicator")
                .on("click", (event, d) => {
                event.stopPropagation();
                if (d.data.children && d.data.children.length > 0) {
                    const newExpanded = !d.data.expanded;
                    toggleNodeExpansion(d.data, newExpanded);
                    if (this.callbacks.onNodeToggle) {
                        this.callbacks.onNodeToggle(d.data, newExpanded);
                    }
                    // Re-render tree
                    if (this.currentRoot) {
                        this.render(this.currentRoot);
                    }
                }
            });
            // Referers expand/collapse click events
            selection
                .select(".referers-indicator")
                .on("click", async (event, d) => {
                event.stopPropagation();
                const newReferersExpanded = !d.data.referersExpanded;
                d.data.referersExpanded = newReferersExpanded;
                // Lazy load referers if not already loaded
                if (newReferersExpanded &&
                    (!d.data.referers || d.data.referers.length === 0)) {
                    await this.loadReferers(d.data);
                }
                if (this.callbacks.onNodeToggle) {
                    this.callbacks.onNodeToggle(d.data, newReferersExpanded);
                }
                // Re-render tree
                if (this.currentRoot) {
                    this.render(this.currentRoot);
                }
            });
            // Hover events
            selection
                .on("mouseenter", (event, d) => {
                // Add hover styling
                select(event.currentTarget)
                    .select("circle")
                    .transition()
                    .duration(150)
                    .style("fill", () => {
                    // Check if this is a referer node (negative depth)
                    const isRefererNode = d.data.depth < 0;
                    return getNodeColor(d.data, isRefererNode, true);
                });
                // Show tooltip
                this.showTooltip(event, d.data);
                if (this.callbacks.onNodeHover) {
                    this.callbacks.onNodeHover(d.data, event);
                }
            })
                .on("mouseleave", (event, d) => {
                // Remove hover styling
                select(event.currentTarget)
                    .select("circle")
                    .transition()
                    .duration(150)
                    .style("fill", () => {
                    // Check if this is a referer node (negative depth)
                    const isRefererNode = d.data.depth < 0;
                    return getNodeColor(d.data, isRefererNode, false);
                });
                // Hide tooltip
                this.hideTooltip();
                if (this.callbacks.onNodeHover) {
                    this.callbacks.onNodeHover(null, event);
                }
            });
        }
        /**
         * Update visual selection state of nodes
         */
        updateNodeSelection() {
            this.nodesGroup
                .selectAll(".node")
                .classed("selected", (d) => d.data.id === this.selectedNodeId);
        }
        /**
         * Center and zoom the tree to fit nicely in the viewport
         */
        centerAndZoomToFit(nodes) {
            if (nodes.length === 0)
                return;
            // Calculate bounding box of all nodes
            const xExtent = extent(nodes, (d) => d.y);
            const yExtent = extent(nodes, (d) => d.x);
            const width = xExtent[1] - xExtent[0];
            const height = yExtent[1] - yExtent[0];
            // Calculate scale to fit with some padding
            const padding = 60;
            const scaleX = (this.width - this.margin.left - this.margin.right - padding) / width;
            const scaleY = (this.height - this.margin.top - this.margin.bottom - padding) / height;
            const scale = Math.min(scaleX, scaleY, 1.5); // Max scale of 1.5x
            // Calculate center point
            const centerX = (xExtent[0] + xExtent[1]) / 2;
            const centerY = (yExtent[0] + yExtent[1]) / 2;
            // Calculate translation to center
            const translateX = this.width / 2 - centerX * scale;
            const translateY = this.height / 2 - centerY * scale;
            // Apply transform
            const transform = identity
                .translate(translateX, translateY)
                .scale(scale);
            this.svg.transition().duration(750).call(this.zoom.transform, transform);
        }
        /**
         * Update the tree layout orientation
         */
        setOrientation(orientation) {
            this.config.render.orientation = orientation;
            if (orientation === "vertical") {
                this.treeLayout.size([
                    this.width - this.margin.left - this.margin.right,
                    this.height - this.margin.top - this.margin.bottom,
                ]);
            }
            else {
                this.treeLayout.size([
                    this.height - this.margin.top - this.margin.bottom,
                    this.width - this.margin.left - this.margin.right,
                ]);
            }
            if (this.currentRoot) {
                this.render(this.currentRoot);
            }
        }
        /**
         * Resize the visualization
         */
        resize(width, height) {
            this.width = width;
            this.height = height;
            this.svg.attr("width", width).attr("height", height);
            this.setupTreeLayout();
            if (this.currentRoot) {
                this.render(this.currentRoot);
            }
        }
        /**
         * Center the tree in the viewport
         */
        centerTree() {
            const bounds = this.g.node()?.getBBox();
            if (bounds) {
                const fullWidth = this.width;
                const fullHeight = this.height;
                const width = bounds.width;
                const height = bounds.height;
                const midX = bounds.x + width / 2;
                const midY = bounds.y + height / 2;
                const scale = 0.8 / Math.max(width / fullWidth, height / fullHeight);
                const translate = [
                    fullWidth / 2 - scale * midX,
                    fullHeight / 2 - scale * midY,
                ];
                this.svg
                    .transition()
                    .duration(750)
                    .call(this.zoom.transform, identity.translate(translate[0], translate[1]).scale(scale));
            }
        }
        /**
         * Clear the visualization
         */
        clear() {
            this.linksGroup.selectAll("*").remove();
            this.nodesGroup.selectAll("*").remove();
            this.currentRoot = null;
        }
        /**
         * Setup tooltip element
         */
        setupTooltip() {
            // Remove any existing tooltip
            select("body").select(".kanji-tooltip").remove();
            // Create tooltip div
            this.tooltip = select("body")
                .append("div")
                .attr("class", "kanji-tooltip")
                .style("position", "absolute")
                .style("background", "rgba(0, 0, 0, 0.8)")
                .style("color", "white")
                .style("padding", "8px 12px")
                .style("border-radius", "4px")
                .style("font-size", "14px")
                .style("font-family", "Arial, sans-serif")
                .style("pointer-events", "none")
                .style("opacity", 0)
                .style("z-index", 1000)
                .style("transition", "opacity 0.3s ease");
        }
        /**
         * Show tooltip with node information
         */
        showTooltip(event, node) {
            const keyword = node.data.keyword || "No keyword";
            const character = node.data.character || "";
            const type = node.data.type;
            const jlptLevel = node.data.jlptLevel;
            let tooltipText = "";
            if (character && keyword) {
                tooltipText = `${character} - ${keyword}`;
            }
            else {
                tooltipText = keyword;
            }
            // Add JLPT level information for kanji
            if (type === "kanji" && jlptLevel) {
                tooltipText += ` (${jlptLevel})`;
            }
            this.tooltip
                .style("opacity", 1)
                .style("left", event.pageX + 10 + "px")
                .style("top", event.pageY - 10 + "px")
                .text(tooltipText);
        }
        /**
         * Hide tooltip
         */
        hideTooltip() {
            this.tooltip.style("opacity", 0);
        }
        /**
         * Lazy load referers for a tree node
         */
        async loadReferers(treeNode) {
            if (!this.transformer) {
                console.warn("No transformer available for loading referers");
                return;
            }
            try {
                // Build referers tree using the transformer (limit to 8 for better UX)
                const referers = this.transformer.buildReferersTree(treeNode.id, 8);
                treeNode.referers = referers;
            }
            catch (error) {
                console.error("Error loading referers:", error);
                treeNode.referers = [];
            }
        }
        /**
         * Handle click on "+n more" placeholder nodes to expand 5 more items
         */
        handleMoreNodeClick(moreNode) {
            if (!this.transformer || !this.currentRoot) {
                console.warn("Cannot expand more nodes: transformer or root not available");
                return;
            }
            // Get metadata from the placeholder node - it's now stored directly on the TreeNode
            const meta = moreNode.moreNodeMeta;
            if (!meta) {
                console.warn("No metadata found for more node");
                return;
            }
            const { parentNodeId, currentIndex } = meta;
            // Find the parent node in the tree
            const findNode = (node, targetId) => {
                if (node.id === targetId)
                    return node;
                // Check children
                if (node.children) {
                    for (const child of node.children) {
                        const found = findNode(child, targetId);
                        if (found)
                            return found;
                    }
                }
                // Check referers
                if (node.referers) {
                    for (const referer of node.referers) {
                        const found = findNode(referer, targetId);
                        if (found)
                            return found;
                    }
                }
                return null;
            };
            const parentNode = findNode(this.currentRoot, parentNodeId);
            if (!parentNode || !parentNode.referers) {
                console.warn("Parent node not found or has no referers");
                return;
            }
            // Remove the current "+n more" node
            const moreIndex = parentNode.referers.findIndex(r => r.id === moreNode.id);
            if (moreIndex === -1) {
                console.warn("More node not found in parent's referers");
                return;
            }
            // Load 5 more referers starting from the current index
            const additionalReferers = this.transformer.buildReferersTree(parentNodeId, 5, // Load 5 more items
            currentIndex);
            // Replace the "+n more" node with the new referers
            parentNode.referers.splice(moreIndex, 1, ...additionalReferers);
            // Re-render the tree
            this.render(this.currentRoot);
        }
    }

    /**
     * SVG Primitive Renderer
     *
     * Handles rendering of RTK primitive SVGs within tree nodes
     */
    /**
     * SVG cache for storing fetched SVG content
     */
    const svgCache = new Map();
    class SVGPrimitiveRenderer {
        constructor(config = {}) {
            this.config = {
                size: 24,
                enableCache: true,
                baseUrl: "https://raw.githubusercontent.com/cyphar/heisig-rtk-index/master/",
                ...config,
            };
        }
        /**
         * Render SVG primitive within a D3 selection
         *
         * @param selection D3 selection of the node group
         * @param node Graph node data
         * @returns Promise that resolves when rendering is complete
         */
        async renderPrimitive(selection, node) {
            // Remove any existing primitive content
            selection.select(".primitive-svg").remove();
            selection.select(".primitive-fallback").remove();
            if (node.type !== "primitive" || !node.svgPath) {
                this.renderFallback(selection, node);
                return;
            }
            try {
                const svgContent = await this.fetchSVG(node.svgPath);
                this.renderSVGContent(selection, svgContent);
            }
            catch (error) {
                console.warn(`Failed to load SVG for primitive ${node.id}:`, error);
                this.renderFallback(selection, node);
            }
        }
        /**
         * Render fallback content when SVG is not available
         */
        renderFallback(selection, node) {
            const fallbackText = this.config.fallbackText || node.character || node.keyword || "?";
            selection
                .append("text")
                .attr("class", "primitive-fallback")
                .attr("text-anchor", "middle")
                .attr("dy", "0.35em")
                .style("font-size", `${this.config.size * 0.6}px`)
                .style("fill", "#666")
                .text(fallbackText);
        }
        /**
         * Render actual SVG content
         */
        renderSVGContent(selection, svgContent) {
            // Parse SVG content
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");
            const svgElement = svgDoc.documentElement;
            if (svgElement.tagName !== "svg") {
                throw new Error("Invalid SVG content");
            }
            // Create a group for the SVG content
            const svgGroup = selection.append("g").attr("class", "primitive-svg");
            // Get original viewBox or size
            const viewBox = svgElement.getAttribute("viewBox");
            let width = this.config.size;
            let height = this.config.size;
            if (viewBox) {
                const [, , vbWidth, vbHeight] = viewBox.split(" ").map(Number);
                const aspectRatio = vbWidth / vbHeight;
                if (aspectRatio > 1) {
                    height = width / aspectRatio;
                }
                else {
                    width = height * aspectRatio;
                }
            }
            // Center the SVG
            svgGroup.attr("transform", `translate(${-width / 2}, ${-height / 2})`);
            // Copy SVG children to the group
            const children = Array.from(svgElement.children);
            for (const child of children) {
                const clonedChild = child.cloneNode(true);
                svgGroup.node()?.appendChild(clonedChild);
            }
            // Apply size transformation
            if (viewBox) {
                const [, , vbWidth, vbHeight] = viewBox.split(" ").map(Number);
                const scaleX = width / vbWidth;
                const scaleY = height / vbHeight;
                svgGroup.attr("transform", `translate(${-width / 2}, ${-height / 2}) scale(${scaleX}, ${scaleY})`);
            }
            // Apply default styling to paths if they don't have fill/stroke
            svgGroup
                .selectAll("path")
                .style("fill", function () {
                return this.style.fill || this.getAttribute("fill") || "#333";
            })
                .style("stroke", function () {
                return this.style.stroke || this.getAttribute("stroke") || "none";
            });
        }
        /**
         * Fetch SVG content from URL
         */
        async fetchSVG(svgPath) {
            // Check cache first
            if (this.config.enableCache && svgCache.has(svgPath)) {
                return svgCache.get(svgPath);
            }
            const url = svgPath.startsWith("http")
                ? svgPath
                : this.config.baseUrl + svgPath;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            const svgContent = await response.text();
            // Cache the result
            if (this.config.enableCache) {
                svgCache.set(svgPath, svgContent);
            }
            return svgContent;
        }
        /**
         * Preload SVGs for better performance
         *
         * @param svgPaths Array of SVG paths to preload
         * @returns Promise that resolves when all SVGs are loaded
         */
        async preloadSVGs(svgPaths) {
            const loadPromises = svgPaths.map((path) => this.fetchSVG(path).catch((error) => {
                console.warn(`Failed to preload SVG ${path}:`, error);
                return null;
            }));
            await Promise.all(loadPromises);
        }
        /**
         * Clear the SVG cache
         */
        clearCache() {
            svgCache.clear();
        }
        /**
         * Get cache statistics
         */
        getCacheStats() {
            return {
                size: svgCache.size,
                keys: Array.from(svgCache.keys()),
            };
        }
    }
    /**
     * Enhanced tree node renderer that includes SVG primitives
     */
    class EnhancedNodeRenderer {
        constructor(svgConfig) {
            this.svgRenderer = new SVGPrimitiveRenderer(svgConfig);
        }
        /**
         * Render a tree node with appropriate content (text or SVG)
         */
        async renderNode(selection, node, options = { showText: true, textSize: 12, nodeRadius: 20 }) {
            // Clear existing content
            selection.selectAll(".node-content").remove();
            const contentGroup = selection.append("g").attr("class", "node-content");
            if (node.type === "primitive" && node.svgPath) {
                // Render SVG for primitives
                await this.svgRenderer.renderPrimitive(contentGroup, node);
                // Optionally add text label below
                if (options.showText && (node.keyword || node.character)) {
                    contentGroup
                        .append("text")
                        .attr("class", "node-label")
                        .attr("text-anchor", "middle")
                        .attr("dy", options.nodeRadius + 15)
                        .style("font-size", `${options.textSize * 0.8}px`)
                        .style("fill", "#666")
                        .text(node.keyword || node.character || "");
                }
            }
            else {
                // Render text for kanji or primitives without SVG
                const displayText = node.character || node.keyword || "?";
                contentGroup
                    .append("text")
                    .attr("class", "node-text")
                    .attr("text-anchor", "middle")
                    .attr("dy", "0.35em")
                    .style("font-size", `${options.textSize}px`)
                    .style("fill", "#333")
                    .text(displayText);
            }
        }
        /**
         * Preload SVGs for all primitive nodes in a tree
         */
        async preloadTreeSVGs(nodes) {
            const svgPaths = nodes
                .filter((node) => node.type === "primitive" && node.svgPath)
                .map((node) => node.svgPath)
                .filter((path, index, array) => array.indexOf(path) === index); // Remove duplicates
            await this.svgRenderer.preloadSVGs(svgPaths);
        }
        getSVGRenderer() {
            return this.svgRenderer;
        }
    }

    /**
     * Main entry point for RTK Graph data processing
     *
     * This module provides a high-level API for fetching, parsing, and building
     * RTK graph structures from Heisig data.
     */
    // Export all data processing modules
    /**
     * High-level function to build complete RTK graph from remote data
     *
     * This function handles the entire pipeline:
     * 1. Fetches CSV data from GitHub
     * 2. Parses the CSV data
     * 3. Builds the graph structure
     * 4. Optionally includes JLPT level data
     *
     * @param includeJLPT Whether to include JLPT level information (Node.js only)
     * @returns Promise resolving to complete RTK graph
     * @throws RTKNetworkError on network failures
     * @throws RTKParseError on CSV parsing errors
     * @throws RTKDataError on graph building errors
     */
    async function buildRTKGraphFromRemote(includeJLPT = false) {
        const { fetchAllData, fetchJLPTMapping } = await Promise.resolve().then(function () { return fetcher; });
        const { parseAllCSV } = await Promise.resolve().then(function () { return parser; });
        const { buildGraph } = await Promise.resolve().then(function () { return graphBuilder; });
        const rawData = await fetchAllData();
        const parsedData = parseAllCSV(rawData.kanji, rawData.primitives);
        let jlptMapping;
        if (includeJLPT) {
            try {
                jlptMapping = await fetchJLPTMapping();
            }
            catch (error) {
                console.warn("Failed to load JLPT mapping, continuing without level data:", error);
            }
        }
        const graph = buildGraph(parsedData.kanji, parsedData.primitives, jlptMapping);
        return graph;
    }
    /**
     * High-level function with validation to build RTK graph from remote data
     *
     * Same as buildRTKGraphFromRemote but includes validation metadata
     *
     * @param includeJLPT Whether to include JLPT level information (Node.js only)
     * @returns Promise resolving to RTK graph with validation information
     */
    async function buildValidatedRTKGraphFromRemote(includeJLPT = false) {
        const { fetchAllData, fetchJLPTMapping } = await Promise.resolve().then(function () { return fetcher; });
        const { parseAllCSV } = await Promise.resolve().then(function () { return parser; });
        const { buildValidatedGraph } = await Promise.resolve().then(function () { return graphBuilder; });
        const rawData = await fetchAllData();
        const parsedData = parseAllCSV(rawData.kanji, rawData.primitives);
        let jlptMapping;
        if (includeJLPT) {
            try {
                jlptMapping = await fetchJLPTMapping();
            }
            catch (error) {
                console.warn("Failed to load JLPT mapping, continuing without level data:", error);
            }
        }
        const graph = buildValidatedGraph(parsedData.kanji, parsedData.primitives, jlptMapping);
        return graph;
    }
    /**
     * Utility function to build graph from local CSV data
     *
     * Useful for testing or when CSV data is already available locally
     *
     * @param kanjiCSV Raw kanji CSV text
     * @param primitivesCSV Raw primitives CSV text
     * @returns Complete RTK graph
     */
    async function buildRTKGraphFromCSV(kanjiCSV, primitivesCSV) {
        const { parseAllCSV } = await Promise.resolve().then(function () { return parser; });
        const { buildGraph } = await Promise.resolve().then(function () { return graphBuilder; });
        const parsedData = parseAllCSV(kanjiCSV, primitivesCSV);
        const graph = buildGraph(parsedData.kanji, parsedData.primitives);
        return graph;
    }
    /**
     * Get version information and data source URLs
     */
    const RTK_DATA_SOURCES = {
        kanji: "https://raw.githubusercontent.com/cyphar/heisig-rtk-index/master/kanji/KANJI_INDEX.csv",
        primitives: "https://raw.githubusercontent.com/cyphar/heisig-rtk-index/master/primitives/INPUT.csv",
        repository: "https://github.com/cyphar/heisig-rtk-index",
    };

    exports.EnhancedNodeRenderer = EnhancedNodeRenderer;
    exports.KanjiTreeRenderer = KanjiTreeRenderer;
    exports.RTK_DATA_SOURCES = RTK_DATA_SOURCES;
    exports.SVGPrimitiveRenderer = SVGPrimitiveRenderer;
    exports.TreeDataTransformer = TreeDataTransformer;
    exports.buildGraph = buildGraph;
    exports.buildKanjiTree = buildKanjiTree;
    exports.buildRTKGraphFromCSV = buildRTKGraphFromCSV;
    exports.buildRTKGraphFromRemote = buildRTKGraphFromRemote;
    exports.buildValidatedGraph = buildValidatedGraph;
    exports.buildValidatedRTKGraphFromRemote = buildValidatedRTKGraphFromRemote;
    exports.clearCache = clearCache;
    exports.configureFetcher = configureFetcher;
    exports.fetchAllData = fetchAllData;
    exports.fetchKanjiData = fetchKanjiData;
    exports.fetchPrimitivesData = fetchPrimitivesData;
    exports.findKanjiPath = findKanjiPath;
    exports.parseAllCSV = parseAllCSV;
    exports.parseKanjiCSV = parseKanjiCSV;
    exports.parsePrimitivesCSV = parsePrimitivesCSV;

}));
//# sourceMappingURL=rtk-visualization.umd.js.map
