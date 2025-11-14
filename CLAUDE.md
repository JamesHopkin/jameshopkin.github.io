# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a GitHub Pages site (jameshopkin.github.io) hosting experimental interactive web applications. The repository contains standalone HTML/CSS/JavaScript projects, each in its own subdirectory. This is a static site with no build system at the root level - each project is self-contained.

## Repository Structure

```
├── index.html              # Landing page with links to all projects
├── music-touchpad/         # Music performance touchpad (built with Vite)
├── rtk/                    # RTK (Remembering the Kanji) visualization tool
├── sand-art/               # Physics-based sand art simulation
└── sync-scroll/            # Code editor with synced scroll (built with Vite)
```

## Projects

### 1. Music Touchpad (`music-touchpad/`)
- **Technology**: Built with Vite, bundled JavaScript
- **Purpose**: Interactive music performance touchpad with MIDI-like capabilities
- **Key Features**:
  - Multiple instrument presets (Rhodes, DX7, acoustic piano, etc.)
  - Harpejji and chromatic scale layouts
  - Touch and mouse input with pitch bend via horizontal drag
  - Web Audio API for sound generation using Soundfont.js
- **Files**:
  - `index.html` - Entry point loading compiled assets
  - `assets/index-*.js` - Bundled application code
  - `assets/index-*.css` - Compiled styles
- **Source**: Source code is NOT in this repository (likely built elsewhere and deployed here)

### 2. RTK Visualization (`rtk/`)
- **Technology**: Vanilla JavaScript with D3.js, embedded data
- **Purpose**: Interactive tree visualization of kanji character components from "Remembering the Kanji" by Heisig
- **Key Features**:
  - Hierarchical component breakdown for kanji characters
  - Interactive node selection and re-targeting
  - D3.js-based tree rendering
  - Embedded CSV data for standalone operation
  - JLPT level information
- **Files**:
  - `index.html` - Self-contained application (all logic inline)
  - `standalone-data.js` - Embedded RTK data (kanji, primitives, JLPT mappings)
  - `rtk-visualization.umd.js` - UMD library for tree operations
  - `favicon.svg`

### 3. Sand Art (`sand-art/`)
- **Technology**: Vanilla JavaScript with Matter.js physics engine
- **Purpose**: Real-time physics simulation of sand particles and floating bubbles
- **Key Features**:
  - Matter.js for 2D physics simulation
  - Responsive canvas sizing
  - JSON-based configuration system
  - Interactive controls (flip particles, reset simulation)
  - Color variations based on particle position
- **Files**:
  - `index.html` - Self-contained application (all logic inline)
  - `config.json` - Physics and rendering configuration
- **Controls**:
  - `F` key or button: Flip all particles vertically
  - `R` key or button: Reset and reload configuration

### 4. Sync Scroll (`sync-scroll/`)
- **Technology**: Built with Vite (likely Svelte based on assets)
- **Purpose**: Code editor with synchronized scrolling
- **Files**:
  - `index.html` - Entry point loading compiled assets
  - `assets/` - Large number of syntax highlighting modules and compiled code
- **Source**: Source code is NOT in this repository (likely built elsewhere)

### 5. Landing Page (`index.html`)
- Self-contained responsive landing page with gradient background
- Links to all experimental projects
- Touch-friendly with expandable descriptions on mobile
- No external dependencies

## Development Workflow

### No Root Build System
This repository has no package.json or build configuration at the root. Each project is deployed as a standalone bundle or self-contained HTML file.

### Deployment
- This is a GitHub Pages site serving static files
- Changes are deployed by pushing to the main branch
- Built projects (music-touchpad, sync-scroll) are committed as compiled assets

### Working with Built Projects (music-touchpad, sync-scroll)
These projects are compiled elsewhere and only the build artifacts are committed here:
- **Do not attempt to modify** `assets/*.js` files directly (they are minified)
- If changes are needed, you must locate and modify the source code repository
- After building, copy the dist/build output to the appropriate directory here

### Working with Standalone Projects (rtk, sand-art)
These projects are self-contained with inline JavaScript:
- All code is in `index.html`
- Can be edited directly
- Test by opening the HTML file in a browser or using a local server

### Testing Locally
```bash
# Simple HTTP server for local testing
python3 -m http.server 8000
# or
npx serve .

# Then visit http://localhost:8000
```

### Git Workflow
- Main branch: `main`
- Recent commits focus on music touchpad features (glissando, pitch bend, note selection)
- Commit messages are concise and descriptive
- All commits signed with "Generated with Claude Code" footer

## Configuration Files

### Sand Art Configuration (`sand-art/config.json`)
Tune physics simulation parameters:
- `physics`: gravity, buoyancy, drag, elasticity
- `particles`: count, size, density
- `bubbles`: count, radius, spacing
- `canvas`: dimensions, responsive settings
- `colors`: hex colors for particles, bubbles, background
- `simulation`: time scale, engine iterations

Changes to `config.json` are hot-reloaded by pressing `R` key in the simulation.

## Code Architecture Notes

### Music Touchpad Architecture
- Uses Soundfont.js for Web Audio-based instrument loading
- Grid-based button layout with configurable presets
- Event handling: Both touch and mouse events for cross-device compatibility
- Pitch bend: Tracks horizontal drag distance from initial touch point
- Glissando: Detects adjacent note transitions and preserves drag context
- Audio service singleton pattern (`audioService.js`)

### RTK Visualization Architecture
- Graph-based data structure (nodes: kanji + primitives, edges: component relationships)
- Transformer pattern for building tree views from graph data
- D3.js hierarchical layout with horizontal orientation
- Interactive re-targeting: Click any node to make it the new root

### Sand Art Architecture
- Matter.js physics engine with custom force applications
- Separate rendering and physics coordinate systems for responsive scaling
- Hexagonal bubbles (using Matter.js `fromVertices`)
- Rectangular sand particles with optional square or circle rendering
- Color gradients based on initial Y position

## Technical Constraints

1. **Browser Compatibility**: All projects target modern browsers with Web Audio API and ES6+ support
2. **No Backend**: Pure static site, all data embedded or fetched from CDNs
3. **Mobile-First**: Touch events are primary, mouse events secondary
4. **Responsive**: Projects adapt to viewport size (especially sand-art and landing page)

## Common Patterns

- **Self-contained applications**: Most projects have all code in a single HTML file
- **Embedded data**: Large datasets (RTK kanji data) are embedded as inline scripts for offline operation
- **Configuration over code**: Sand art uses JSON config for easy parameter tweaking
- **Progressive enhancement**: Touch gestures work, mouse fallbacks exist

## Notes for Future Development

- Music touchpad and sync-scroll source repos are not here - track them down if modifications needed
- Sand art simulation can be extended by modifying the inline JavaScript and config.json
- RTK visualization could benefit from external data source for easier updates
- Consider adding a simple dev server script if local testing becomes frequent
