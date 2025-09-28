const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/angular-html-Bbf3ZyxA.js","assets/html-B8pBdPMQ.js","assets/javascript-BMMyXqK5.js","assets/css-DPfMkruS.js","assets/angular-ts-C26w9mnW.js","assets/scss-OYdSNvt2.js","assets/apl-e980N3t4.js","assets/xml-sdJ4AIDG.js","assets/java-CylS5w8V.js","assets/json-Cp-IABpG.js","assets/astro-CjFzhNUq.js","assets/typescript-DlfHMoPT.js","assets/postcss-CXtECtnM.js","assets/tsx-COt5Ahok.js","assets/blade-B2ZbN0F_.js","assets/html-derivative-ZQ8onl8Z.js","assets/sql-BLtJtn59.js","assets/bsl-BO_Y6i37.js","assets/sdbl-DVxCFoDh.js","assets/cairo-KRGpt6FW.js","assets/python-B6aJPvgy.js","assets/cobol-DwXMNnPA.js","assets/coffee-JUOWOZUj.js","assets/cpp-CofmeUqb.js","assets/regexp-CDVJQ6XC.js","assets/glsl-DplSGwfg.js","assets/c-BIGW1oBm.js","assets/crystal-DVs0tusA.js","assets/shellscript-Yzrsuije.js","assets/edge-CKszZCnI.js","assets/elixir-Cc7HHYVZ.js","assets/elm-DbKCFpqz.js","assets/erb-C7QrGF_t.js","assets/ruby-W1VRIm2Q.js","assets/haml-AZXGPtNI.js","assets/graphql-Caa12_AY.js","assets/jsx-g9-lgVsj.js","assets/lua-BbnMAYS6.js","assets/yaml-Buea-lGh.js","assets/erlang-DsQrWhSR.js","assets/markdown-Cvjx9yec.js","assets/fortran-fixed-form-BZjJHVRy.js","assets/fortran-free-form-D22FLkUw.js","assets/fsharp-CufqaIoK.js","assets/gdresource-B7Tvp0Sc.js","assets/gdshader-DkwncUOv.js","assets/gdscript-DTMYz4Jt.js","assets/git-commit-F4YmCXRG.js","assets/diff-D97Zzqfu.js","assets/git-rebase-r7XF79zn.js","assets/glimmer-js-Dz9X99Cm.js","assets/glimmer-ts-aQ3p29eY.js","assets/hack-D_o3P2UH.js","assets/handlebars-YebKLiTq.js","assets/http-C38VWM-o.js","assets/hxml-Bvhsp5Yf.js","assets/haxe-CzTSHFRz.js","assets/jinja-BJmZiE_F.js","assets/jison-BCRtk9Os.js","assets/julia-353pQ8cl.js","assets/r-DiinP2Uv.js","assets/latex-CPEt12BK.js","assets/tex-B5i3u9ba.js","assets/liquid-DFk8BABL.js","assets/marko-BM38lbjI.js","assets/less-B1dDrJ26.js","assets/mdc-DvHMhoCT.js","assets/nginx-DknmC5AR.js","assets/nim-BZI_8mFl.js","assets/perl-g0D2lH3a.js","assets/php-Gk5eUrPQ.js","assets/pug-Ch9lOoSd.js","assets/qml-CHzV51_b.js","assets/razor-CNXmhs1n.js","assets/csharp-CHadp7IV.js","assets/rst-DKdxLoXm.js","assets/cmake-D1j8_8rp.js","assets/sas-cz2c8ADy.js","assets/shaderlab-Dg9Lc6iA.js","assets/hlsl-D3lLCCz7.js","assets/shellsession-BADoaaVG.js","assets/soy-B_7ge1HE.js","assets/sparql-rVzFXLq3.js","assets/turtle-BsS91CYL.js","assets/stata-BH5u7GGu.js","assets/svelte-Dt5jNKfG.js","assets/templ-0CNLO7il.js","assets/go-Dn2_MT6a.js","assets/ts-tags-B9XN6NYQ.js","assets/twig-B_ULif71.js","assets/vue-BEetzCYT.js","assets/vue-html-BsD9fJC1.js","assets/vue-vine-CCdTUzyM.js","assets/stylus-BEDo0Tqx.js","assets/xsl-CtQFsRM5.js","assets/AboutView-C22W2I9G.js","assets/AboutView-CSIvawM9.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ei(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ce={},pn=[],vt=()=>{},Da=()=>!1,ro=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),wi=e=>e.startsWith("onUpdate:"),ze=Object.assign,Ai=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Yc=Object.prototype.hasOwnProperty,se=(e,t)=>Yc.call(e,t),q=Array.isArray,mn=e=>oo(e)==="[object Map]",Na=e=>oo(e)==="[object Set]",J=e=>typeof e=="function",Ce=e=>typeof e=="string",Dt=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",Ma=e=>(me(e)||J(e))&&J(e.then)&&J(e.catch),Va=Object.prototype.toString,oo=e=>Va.call(e),Qc=e=>oo(e).slice(8,-1),$a=e=>oo(e)==="[object Object]",Li=e=>Ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Un=Ei(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),io=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Xc=/-\w/g,zt=io(e=>e.replace(Xc,t=>t.slice(1).toUpperCase())),Zc=/\B([A-Z])/g,tn=io(e=>e.replace(Zc,"-$1").toLowerCase()),ja=io(e=>e.charAt(0).toUpperCase()+e.slice(1)),bo=io(e=>e?`on${ja(e)}`:""),Bt=(e,t)=>!Object.is(e,t),xr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ua=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},qo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let rs;const so=()=>rs||(rs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gn(e){if(q(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=Ce(r)?ru(r):gn(r);if(o)for(const i in o)t[i]=o[i]}return t}else if(Ce(e)||me(e))return e}const eu=/;(?![^(]*\))/g,tu=/:([^]+)/,nu=/\/\*[^]*?\*\//g;function ru(e){const t={};return e.replace(nu,"").split(eu).forEach(n=>{if(n){const r=n.split(tu);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function _n(e){let t="";if(Ce(e))t=e;else if(q(e))for(let n=0;n<e.length;n++){const r=_n(e[n]);r&&(t+=r+" ")}else if(me(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ou="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",iu=Ei(ou);function Ba(e){return!!e||e===""}const Ha=e=>!!(e&&e.__v_isRef===!0),an=e=>Ce(e)?e:e==null?"":q(e)||me(e)&&(e.toString===Va||!J(e.toString))?Ha(e)?an(e.value):JSON.stringify(e,za,2):String(e),za=(e,t)=>Ha(t)?za(e,t.value):mn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o],i)=>(n[So(r,i)+" =>"]=o,n),{})}:Na(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>So(n))}:Dt(t)?So(t):me(t)&&!q(t)&&!$a(t)?String(t):t,So=(e,t="")=>{var n;return Dt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ye;class su{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ye,!t&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ye;try{return Ye=this,t()}finally{Ye=n}}}on(){++this._on===1&&(this.prevScope=Ye,Ye=this)}off(){this._on>0&&--this._on===0&&(Ye=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function au(){return Ye}let fe;const Eo=new WeakSet;class Fa{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ye&&Ye.active&&Ye.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Eo.has(this)&&(Eo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ga(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,os(this),qa(this);const t=fe,n=ct;fe=this,ct=!0;try{return this.fn()}finally{Ka(this),fe=t,ct=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ri(t);this.deps=this.depsTail=void 0,os(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Eo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ko(this)&&this.run()}get dirty(){return Ko(this)}}let Wa=0,Bn,Hn;function Ga(e,t=!1){if(e.flags|=8,t){e.next=Hn,Hn=e;return}e.next=Bn,Bn=e}function Pi(){Wa++}function Ti(){if(--Wa>0)return;if(Hn){let t=Hn;for(Hn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Bn;){let t=Bn;for(Bn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function qa(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ka(e){let t,n=e.depsTail,r=n;for(;r;){const o=r.prevDep;r.version===-1?(r===n&&(n=o),Ri(r),lu(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}e.deps=t,e.depsTail=n}function Ko(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ja(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ja(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Xn)||(e.globalVersion=Xn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ko(e))))return;e.flags|=2;const t=e.dep,n=fe,r=ct;fe=e,ct=!0;try{qa(e);const o=e.fn(e._value);(t.version===0||Bt(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{fe=n,ct=r,Ka(e),e.flags&=-3}}function Ri(e,t=!1){const{dep:n,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ri(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function lu(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ct=!0;const Ya=[];function Ot(){Ya.push(ct),ct=!1}function It(){const e=Ya.pop();ct=e===void 0?!0:e}function os(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=fe;fe=void 0;try{t()}finally{fe=n}}}let Xn=0;class cu{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ci{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!fe||!ct||fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==fe)n=this.activeLink=new cu(fe,this),fe.deps?(n.prevDep=fe.depsTail,fe.depsTail.nextDep=n,fe.depsTail=n):fe.deps=fe.depsTail=n,Qa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=fe.depsTail,n.nextDep=void 0,fe.depsTail.nextDep=n,fe.depsTail=n,fe.deps===n&&(fe.deps=r)}return n}trigger(t){this.version++,Xn++,this.notify(t)}notify(t){Pi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ti()}}}function Qa(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Qa(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Jo=new WeakMap,Yt=Symbol(""),Yo=Symbol(""),Zn=Symbol("");function je(e,t,n){if(ct&&fe){let r=Jo.get(e);r||Jo.set(e,r=new Map);let o=r.get(n);o||(r.set(n,o=new Ci),o.map=r,o.key=n),o.track()}}function Tt(e,t,n,r,o,i){const s=Jo.get(e);if(!s){Xn++;return}const l=a=>{a&&a.trigger()};if(Pi(),t==="clear")s.forEach(l);else{const a=q(e),c=a&&Li(n);if(a&&n==="length"){const u=Number(r);s.forEach((d,f)=>{(f==="length"||f===Zn||!Dt(f)&&f>=u)&&l(d)})}else switch((n!==void 0||s.has(void 0))&&l(s.get(n)),c&&l(s.get(Zn)),t){case"add":a?c&&l(s.get("length")):(l(s.get(Yt)),mn(e)&&l(s.get(Yo)));break;case"delete":a||(l(s.get(Yt)),mn(e)&&l(s.get(Yo)));break;case"set":mn(e)&&l(s.get(Yt));break}}Ti()}function on(e){const t=ie(e);return t===e?t:(je(t,"iterate",Zn),it(e)?t:t.map(De))}function ao(e){return je(e=ie(e),"iterate",Zn),e}const uu={__proto__:null,[Symbol.iterator](){return wo(this,Symbol.iterator,De)},concat(...e){return on(this).concat(...e.map(t=>q(t)?on(t):t))},entries(){return wo(this,"entries",e=>(e[1]=De(e[1]),e))},every(e,t){return St(this,"every",e,t,void 0,arguments)},filter(e,t){return St(this,"filter",e,t,n=>n.map(De),arguments)},find(e,t){return St(this,"find",e,t,De,arguments)},findIndex(e,t){return St(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return St(this,"findLast",e,t,De,arguments)},findLastIndex(e,t){return St(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return St(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ao(this,"includes",e)},indexOf(...e){return Ao(this,"indexOf",e)},join(e){return on(this).join(e)},lastIndexOf(...e){return Ao(this,"lastIndexOf",e)},map(e,t){return St(this,"map",e,t,void 0,arguments)},pop(){return kn(this,"pop")},push(...e){return kn(this,"push",e)},reduce(e,...t){return is(this,"reduce",e,t)},reduceRight(e,...t){return is(this,"reduceRight",e,t)},shift(){return kn(this,"shift")},some(e,t){return St(this,"some",e,t,void 0,arguments)},splice(...e){return kn(this,"splice",e)},toReversed(){return on(this).toReversed()},toSorted(e){return on(this).toSorted(e)},toSpliced(...e){return on(this).toSpliced(...e)},unshift(...e){return kn(this,"unshift",e)},values(){return wo(this,"values",De)}};function wo(e,t,n){const r=ao(e),o=r[t]();return r!==e&&!it(e)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.value&&(i.value=n(i.value)),i}),o}const du=Array.prototype;function St(e,t,n,r,o,i){const s=ao(e),l=s!==e&&!it(e),a=s[t];if(a!==du[t]){const d=a.apply(e,i);return l?De(d):d}let c=n;s!==e&&(l?c=function(d,f){return n.call(this,De(d),f,e)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,e)}));const u=a.call(s,c,r);return l&&o?o(u):u}function is(e,t,n,r){const o=ao(e);let i=n;return o!==e&&(it(e)?n.length>3&&(i=function(s,l,a){return n.call(this,s,l,a,e)}):i=function(s,l,a){return n.call(this,s,De(l),a,e)}),o[t](i,...r)}function Ao(e,t,n){const r=ie(e);je(r,"iterate",Zn);const o=r[t](...n);return(o===-1||o===!1)&&ki(n[0])?(n[0]=ie(n[0]),r[t](...n)):o}function kn(e,t,n=[]){Ot(),Pi();const r=ie(e)[t].apply(e,n);return Ti(),It(),r}const fu=Ei("__proto__,__v_isRef,__isVue"),Xa=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Dt));function hu(e){Dt(e)||(e=String(e));const t=ie(this);return je(t,"has",e),t.hasOwnProperty(e)}class Za{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(o?i?wu:rl:i?nl:tl).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const s=q(t);if(!o){let a;if(s&&(a=uu[n]))return a;if(n==="hasOwnProperty")return hu}const l=Reflect.get(t,n,He(t)?t:r);return(Dt(n)?Xa.has(n):fu(n))||(o||je(t,"get",n),i)?l:He(l)?s&&Li(n)?l:l.value:me(l)?o?Oi(l):pr(l):l}}class el extends Za{constructor(t=!1){super(!1,t)}set(t,n,r,o){let i=t[n];if(!this._isShallow){const a=Ft(i);if(!it(r)&&!Ft(r)&&(i=ie(i),r=ie(r)),!q(t)&&He(i)&&!He(r))return a||(i.value=r),!0}const s=q(t)&&Li(n)?Number(n)<t.length:se(t,n),l=Reflect.set(t,n,r,He(t)?t:o);return t===ie(o)&&(s?Bt(r,i)&&Tt(t,"set",n,r):Tt(t,"add",n,r)),l}deleteProperty(t,n){const r=se(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&r&&Tt(t,"delete",n,void 0),o}has(t,n){const r=Reflect.has(t,n);return(!Dt(n)||!Xa.has(n))&&je(t,"has",n),r}ownKeys(t){return je(t,"iterate",q(t)?"length":Yt),Reflect.ownKeys(t)}}class pu extends Za{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const mu=new el,gu=new pu,_u=new el(!0);const Qo=e=>e,vr=e=>Reflect.getPrototypeOf(e);function yu(e,t,n){return function(...r){const o=this.__v_raw,i=ie(o),s=mn(i),l=e==="entries"||e===Symbol.iterator&&s,a=e==="keys"&&s,c=o[e](...r),u=n?Qo:t?Mr:De;return!t&&je(i,"iterate",a?Yo:Yt),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:l?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function br(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function vu(e,t){const n={get(o){const i=this.__v_raw,s=ie(i),l=ie(o);e||(Bt(o,l)&&je(s,"get",o),je(s,"get",l));const{has:a}=vr(s),c=t?Qo:e?Mr:De;if(a.call(s,o))return c(i.get(o));if(a.call(s,l))return c(i.get(l));i!==s&&i.get(o)},get size(){const o=this.__v_raw;return!e&&je(ie(o),"iterate",Yt),o.size},has(o){const i=this.__v_raw,s=ie(i),l=ie(o);return e||(Bt(o,l)&&je(s,"has",o),je(s,"has",l)),o===l?i.has(o):i.has(o)||i.has(l)},forEach(o,i){const s=this,l=s.__v_raw,a=ie(l),c=t?Qo:e?Mr:De;return!e&&je(a,"iterate",Yt),l.forEach((u,d)=>o.call(i,c(u),c(d),s))}};return ze(n,e?{add:br("add"),set:br("set"),delete:br("delete"),clear:br("clear")}:{add(o){!t&&!it(o)&&!Ft(o)&&(o=ie(o));const i=ie(this);return vr(i).has.call(i,o)||(i.add(o),Tt(i,"add",o,o)),this},set(o,i){!t&&!it(i)&&!Ft(i)&&(i=ie(i));const s=ie(this),{has:l,get:a}=vr(s);let c=l.call(s,o);c||(o=ie(o),c=l.call(s,o));const u=a.call(s,o);return s.set(o,i),c?Bt(i,u)&&Tt(s,"set",o,i):Tt(s,"add",o,i),this},delete(o){const i=ie(this),{has:s,get:l}=vr(i);let a=s.call(i,o);a||(o=ie(o),a=s.call(i,o)),l&&l.call(i,o);const c=i.delete(o);return a&&Tt(i,"delete",o,void 0),c},clear(){const o=ie(this),i=o.size!==0,s=o.clear();return i&&Tt(o,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=yu(o,e,t)}),n}function xi(e,t){const n=vu(e,t);return(r,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(se(n,o)&&o in r?n:r,o,i)}const bu={get:xi(!1,!1)},Su={get:xi(!1,!0)},Eu={get:xi(!0,!1)};const tl=new WeakMap,nl=new WeakMap,rl=new WeakMap,wu=new WeakMap;function Au(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lu(e){return e.__v_skip||!Object.isExtensible(e)?0:Au(Qc(e))}function pr(e){return Ft(e)?e:Ii(e,!1,mu,bu,tl)}function ol(e){return Ii(e,!1,_u,Su,nl)}function Oi(e){return Ii(e,!0,gu,Eu,rl)}function Ii(e,t,n,r,o){if(!me(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Lu(e);if(i===0)return e;const s=o.get(e);if(s)return s;const l=new Proxy(e,i===2?r:n);return o.set(e,l),l}function yn(e){return Ft(e)?yn(e.__v_raw):!!(e&&e.__v_isReactive)}function Ft(e){return!!(e&&e.__v_isReadonly)}function it(e){return!!(e&&e.__v_isShallow)}function ki(e){return e?!!e.__v_raw:!1}function ie(e){const t=e&&e.__v_raw;return t?ie(t):e}function Pu(e){return!se(e,"__v_skip")&&Object.isExtensible(e)&&Ua(e,"__v_skip",!0),e}const De=e=>me(e)?pr(e):e,Mr=e=>me(e)?Oi(e):e;function He(e){return e?e.__v_isRef===!0:!1}function nt(e){return il(e,!1)}function Tu(e){return il(e,!0)}function il(e,t){return He(e)?e:new Ru(e,t)}class Ru{constructor(t,n){this.dep=new Ci,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ie(t),this._value=n?t:De(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||it(t)||Ft(t);t=r?t:ie(t),Bt(t,n)&&(this._rawValue=t,this._value=r?t:De(t),this.dep.trigger())}}function Qt(e){return He(e)?e.value:e}const Cu={get:(e,t,n)=>t==="__v_raw"?e:Qt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return He(o)&&!He(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function sl(e){return yn(e)?e:new Proxy(e,Cu)}class xu{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ci(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return Ga(this,!0),!0}get value(){const t=this.dep.track();return Ja(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ou(e,t,n=!1){let r,o;return J(e)?r=e:(r=e.get,o=e.set),new xu(r,o,n)}const Sr={},Vr=new WeakMap;let qt;function Iu(e,t=!1,n=qt){if(n){let r=Vr.get(n);r||Vr.set(n,r=[]),r.push(e)}}function ku(e,t,n=ce){const{immediate:r,deep:o,once:i,scheduler:s,augmentJob:l,call:a}=n,c=O=>o?O:it(O)||o===!1||o===0?Rt(O,1):Rt(O);let u,d,f,h,g=!1,S=!1;if(He(e)?(d=()=>e.value,g=it(e)):yn(e)?(d=()=>c(e),g=!0):q(e)?(S=!0,g=e.some(O=>yn(O)||it(O)),d=()=>e.map(O=>{if(He(O))return O.value;if(yn(O))return c(O);if(J(O))return a?a(O,2):O()})):J(e)?t?d=a?()=>a(e,2):e:d=()=>{if(f){Ot();try{f()}finally{It()}}const O=qt;qt=u;try{return a?a(e,3,[h]):e(h)}finally{qt=O}}:d=vt,t&&o){const O=d,H=o===!0?1/0:o;d=()=>Rt(O(),H)}const E=au(),b=()=>{u.stop(),E&&E.active&&Ai(E.effects,u)};if(i&&t){const O=t;t=(...H)=>{O(...H),b()}}let v=S?new Array(e.length).fill(Sr):Sr;const A=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(t){const H=u.run();if(o||g||(S?H.some((Q,K)=>Bt(Q,v[K])):Bt(H,v))){f&&f();const Q=qt;qt=u;try{const K=[H,v===Sr?void 0:S&&v[0]===Sr?[]:v,h];v=H,a?a(t,3,K):t(...K)}finally{qt=Q}}}else u.run()};return l&&l(A),u=new Fa(d),u.scheduler=s?()=>s(A,!1):A,h=O=>Iu(O,!1,u),f=u.onStop=()=>{const O=Vr.get(u);if(O){if(a)a(O,4);else for(const H of O)H();Vr.delete(u)}},t?r?A(!0):v=u.run():s?s(A.bind(null,!0),!0):u.run(),b.pause=u.pause.bind(u),b.resume=u.resume.bind(u),b.stop=b,b}function Rt(e,t=1/0,n){if(t<=0||!me(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,He(e))Rt(e.value,t,n);else if(q(e))for(let r=0;r<e.length;r++)Rt(e[r],t,n);else if(Na(e)||mn(e))e.forEach(r=>{Rt(r,t,n)});else if($a(e)){for(const r in e)Rt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Rt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mr(e,t,n,r){try{return r?e(...r):e()}catch(o){lo(o,t,n)}}function bt(e,t,n,r){if(J(e)){const o=mr(e,t,n,r);return o&&Ma(o)&&o.catch(i=>{lo(i,t,n)}),o}if(q(e)){const o=[];for(let i=0;i<e.length;i++)o.push(bt(e[i],t,n,r));return o}}function lo(e,t,n,r=!0){const o=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||ce;if(t){let l=t.parent;const a=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,a,c)===!1)return}l=l.parent}if(i){Ot(),mr(i,null,10,[e,a,c]),It();return}}Du(e,n,o,r,s)}function Du(e,t,n,r=!0,o=!1){if(o)throw e;console.error(e)}const We=[];let _t=-1;const vn=[];let Vt=null,ln=0;const al=Promise.resolve();let $r=null;function co(e){const t=$r||al;return e?t.then(this?e.bind(this):e):t}function Nu(e){let t=_t+1,n=We.length;for(;t<n;){const r=t+n>>>1,o=We[r],i=er(o);i<e||i===e&&o.flags&2?t=r+1:n=r}return t}function Di(e){if(!(e.flags&1)){const t=er(e),n=We[We.length-1];!n||!(e.flags&2)&&t>=er(n)?We.push(e):We.splice(Nu(t),0,e),e.flags|=1,ll()}}function ll(){$r||($r=al.then(ul))}function Mu(e){q(e)?vn.push(...e):Vt&&e.id===-1?Vt.splice(ln+1,0,e):e.flags&1||(vn.push(e),e.flags|=1),ll()}function ss(e,t,n=_t+1){for(;n<We.length;n++){const r=We[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;We.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function cl(e){if(vn.length){const t=[...new Set(vn)].sort((n,r)=>er(n)-er(r));if(vn.length=0,Vt){Vt.push(...t);return}for(Vt=t,ln=0;ln<Vt.length;ln++){const n=Vt[ln];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Vt=null,ln=0}}const er=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ul(e){try{for(_t=0;_t<We.length;_t++){const t=We[_t];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),mr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;_t<We.length;_t++){const t=We[_t];t&&(t.flags&=-2)}_t=-1,We.length=0,cl(),$r=null,(We.length||vn.length)&&ul()}}let Be=null,dl=null;function jr(e){const t=Be;return Be=e,dl=e&&e.type.__scopeId||null,t}function Me(e,t=Be,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&Hr(-1);const i=jr(t);let s;try{s=e(...o)}finally{jr(i),r._d&&Hr(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Vu(e,t){if(Be===null)return e;const n=po(Be),r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,s,l,a=ce]=t[o];i&&(J(i)&&(i={mounted:i,updated:i}),i.deep&&Rt(s),r.push({dir:i,instance:n,value:s,oldValue:void 0,arg:l,modifiers:a}))}return e}function Wt(e,t,n,r){const o=e.dirs,i=t&&t.dirs;for(let s=0;s<o.length;s++){const l=o[s];i&&(l.oldValue=i[s].value);let a=l.dir[r];a&&(Ot(),bt(a,n,8,[e.el,l,e,t]),It())}}const $u=Symbol("_vte"),ju=e=>e.__isTeleport,Uu=Symbol("_leaveCb");function Ni(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ni(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Cn(e,t){return J(e)?ze({name:e.name},t,{setup:e}):e}function fl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Ur=new WeakMap;function zn(e,t,n,r,o=!1){if(q(e)){e.forEach((g,S)=>zn(g,t&&(q(t)?t[S]:t),n,r,o));return}if(bn(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&zn(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?po(r.component):r.el,s=o?null:i,{i:l,r:a}=e,c=t&&t.r,u=l.refs===ce?l.refs={}:l.refs,d=l.setupState,f=ie(d),h=d===ce?Da:g=>se(f,g);if(c!=null&&c!==a){if(as(t),Ce(c))u[c]=null,h(c)&&(d[c]=null);else if(He(c)){c.value=null;const g=t;g.k&&(u[g.k]=null)}}if(J(a))mr(a,l,12,[s,u]);else{const g=Ce(a),S=He(a);if(g||S){const E=()=>{if(e.f){const b=g?h(a)?d[a]:u[a]:a.value;if(o)q(b)&&Ai(b,i);else if(q(b))b.includes(i)||b.push(i);else if(g)u[a]=[i],h(a)&&(d[a]=u[a]);else{const v=[i];a.value=v,e.k&&(u[e.k]=v)}}else g?(u[a]=s,h(a)&&(d[a]=s)):S&&(a.value=s,e.k&&(u[e.k]=s))};if(s){const b=()=>{E(),Ur.delete(e)};b.id=-1,Ur.set(e,b),tt(b,n)}else as(e),E()}}}function as(e){const t=Ur.get(e);t&&(t.flags|=8,Ur.delete(e))}so().requestIdleCallback;so().cancelIdleCallback;const bn=e=>!!e.type.__asyncLoader,hl=e=>e.type.__isKeepAlive;function Bu(e,t){pl(e,"a",t)}function Hu(e,t){pl(e,"da",t)}function pl(e,t,n=qe){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(uo(t,r,n),n){let o=n.parent;for(;o&&o.parent;)hl(o.parent.vnode)&&zu(r,t,n,o),o=o.parent}}function zu(e,t,n,r){const o=uo(t,e,r,!0);ml(()=>{Ai(r[t],o)},n)}function uo(e,t,n=qe,r=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{Ot();const l=gr(n),a=bt(t,n,e,s);return l(),It(),a});return r?o.unshift(i):o.push(i),i}}const Nt=e=>(t,n=qe)=>{(!rr||e==="sp")&&uo(e,(...r)=>t(...r),n)},Fu=Nt("bm"),Mi=Nt("m"),Wu=Nt("bu"),Gu=Nt("u"),qu=Nt("bum"),ml=Nt("um"),Ku=Nt("sp"),Ju=Nt("rtg"),Yu=Nt("rtc");function Qu(e,t=qe){uo("ec",e,t)}const Xu=Symbol.for("v-ndc");function ls(e,t,n,r){let o;const i=n,s=q(e);if(s||Ce(e)){const l=s&&yn(e);let a=!1,c=!1;l&&(a=!it(e),c=Ft(e),e=ao(e)),o=new Array(e.length);for(let u=0,d=e.length;u<d;u++)o[u]=t(a?c?Mr(De(e[u])):De(e[u]):e[u],u,void 0,i)}else if(typeof e=="number"){o=new Array(e);for(let l=0;l<e;l++)o[l]=t(l+1,l,void 0,i)}else if(me(e))if(e[Symbol.iterator])o=Array.from(e,(l,a)=>t(l,a,void 0,i));else{const l=Object.keys(e);o=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const u=l[a];o[a]=t(e[u],u,a,i)}}else o=[];return o}function Lo(e,t,n={},r,o){if(Be.ce||Be.parent&&bn(Be.parent)&&Be.parent.ce)return t!=="default"&&(n.name=t),Ee(),zr(Ge,null,[we("slot",n,r)],64);let i=e[t];i&&i._c&&(i._d=!1),Ee();const s=i&&gl(i(n)),l=n.key||s&&s.key,a=zr(Ge,{key:(l&&!Dt(l)?l:`_${t}`)+(!s&&r?"_fb":"")},s||[],s&&e._===1?64:-2);return i&&i._c&&(i._d=!0),a}function gl(e){return e.some(t=>nr(t)?!(t.type===kt||t.type===Ge&&!gl(t.children)):!0)?e:null}const Xo=e=>e?Ml(e)?po(e):Xo(e.parent):null,Fn=ze(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xo(e.parent),$root:e=>Xo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>yl(e),$forceUpdate:e=>e.f||(e.f=()=>{Di(e.update)}),$nextTick:e=>e.n||(e.n=co.bind(e.proxy)),$watch:e=>vd.bind(e)}),Po=(e,t)=>e!==ce&&!e.__isScriptSetup&&se(e,t),Zu={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:o,props:i,accessCache:s,type:l,appContext:a}=e;let c;if(t[0]!=="$"){const h=s[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return i[t]}else{if(Po(r,t))return s[t]=1,r[t];if(o!==ce&&se(o,t))return s[t]=2,o[t];if((c=e.propsOptions[0])&&se(c,t))return s[t]=3,i[t];if(n!==ce&&se(n,t))return s[t]=4,n[t];Zo&&(s[t]=0)}}const u=Fn[t];let d,f;if(u)return t==="$attrs"&&je(e.attrs,"get",""),u(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==ce&&se(n,t))return s[t]=4,n[t];if(f=a.config.globalProperties,se(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:i}=e;return Po(o,t)?(o[t]=n,!0):r!==ce&&se(r,t)?(r[t]=n,!0):se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:i,type:s}},l){let a,c;return!!(n[l]||e!==ce&&l[0]!=="$"&&se(e,l)||Po(t,l)||(a=i[0])&&se(a,l)||se(r,l)||se(Fn,l)||se(o.config.globalProperties,l)||(c=s.__cssModules)&&c[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function cs(e){return q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Zo=!0;function ed(e){const t=yl(e),n=e.proxy,r=e.ctx;Zo=!1,t.beforeCreate&&us(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:s,watch:l,provide:a,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:S,deactivated:E,beforeDestroy:b,beforeUnmount:v,destroyed:A,unmounted:O,render:H,renderTracked:Q,renderTriggered:K,errorCaptured:he,serverPrefetch:ge,expose:be,inheritAttrs:_e,components:Pe,directives:ye,filters:le}=t;if(c&&td(c,r,null),s)for(const X in s){const R=s[X];J(R)&&(r[X]=R.bind(n))}if(o){const X=o.call(n,n);me(X)&&(e.data=pr(X))}if(Zo=!0,i)for(const X in i){const R=i[X],$=J(R)?R.bind(n,n):J(R.get)?R.get.bind(n,n):vt,U=!J(R)&&J(R.set)?R.set.bind(n):vt,B=lt({get:$,set:U});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>B.value,set:z=>B.value=z})}if(l)for(const X in l)_l(l[X],r,n,X);if(a){const X=J(a)?a.call(n):a;Reflect.ownKeys(X).forEach(R=>{Or(R,X[R])})}u&&us(u,e,"c");function ne(X,R){q(R)?R.forEach($=>X($.bind(n))):R&&X(R.bind(n))}if(ne(Fu,d),ne(Mi,f),ne(Wu,h),ne(Gu,g),ne(Bu,S),ne(Hu,E),ne(Qu,he),ne(Yu,Q),ne(Ju,K),ne(qu,v),ne(ml,O),ne(Ku,ge),q(be))if(be.length){const X=e.exposed||(e.exposed={});be.forEach(R=>{Object.defineProperty(X,R,{get:()=>n[R],set:$=>n[R]=$,enumerable:!0})})}else e.exposed||(e.exposed={});H&&e.render===vt&&(e.render=H),_e!=null&&(e.inheritAttrs=_e),Pe&&(e.components=Pe),ye&&(e.directives=ye),ge&&fl(e)}function td(e,t,n=vt){q(e)&&(e=ei(e));for(const r in e){const o=e[r];let i;me(o)?"default"in o?i=xt(o.from||r,o.default,!0):i=xt(o.from||r):i=xt(o),He(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function us(e,t,n){bt(q(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function _l(e,t,n,r){let o=r.includes(".")?Ol(n,r):()=>n[r];if(Ce(e)){const i=t[e];J(i)&&Ct(o,i)}else if(J(e))Ct(o,e.bind(n));else if(me(e))if(q(e))e.forEach(i=>_l(i,t,n,r));else{const i=J(e.handler)?e.handler.bind(n):t[e.handler];J(i)&&Ct(o,i,e)}}function yl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,l=i.get(t);let a;return l?a=l:!o.length&&!n&&!r?a=t:(a={},o.length&&o.forEach(c=>Br(a,c,s,!0)),Br(a,t,s)),me(t)&&i.set(t,a),a}function Br(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&Br(e,i,n,!0),o&&o.forEach(s=>Br(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const l=nd[s]||n&&n[s];e[s]=l?l(e[s],t[s]):t[s]}return e}const nd={data:ds,props:fs,emits:fs,methods:$n,computed:$n,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:$n,directives:$n,watch:od,provide:ds,inject:rd};function ds(e,t){return t?e?function(){return ze(J(e)?e.call(this,this):e,J(t)?t.call(this,this):t)}:t:e}function rd(e,t){return $n(ei(e),ei(t))}function ei(e){if(q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Fe(e,t){return e?[...new Set([].concat(e,t))]:t}function $n(e,t){return e?ze(Object.create(null),e,t):t}function fs(e,t){return e?q(e)&&q(t)?[...new Set([...e,...t])]:ze(Object.create(null),cs(e),cs(t??{})):t}function od(e,t){if(!e)return t;if(!t)return e;const n=ze(Object.create(null),e);for(const r in t)n[r]=Fe(e[r],t[r]);return n}function vl(){return{app:null,config:{isNativeTag:Da,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let id=0;function sd(e,t){return function(r,o=null){J(r)||(r=ze({},r)),o!=null&&!me(o)&&(o=null);const i=vl(),s=new WeakSet,l=[];let a=!1;const c=i.app={_uid:id++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:Ud,get config(){return i.config},set config(u){},use(u,...d){return s.has(u)||(u&&J(u.install)?(s.add(u),u.install(c,...d)):J(u)&&(s.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,f){if(!a){const h=c._ceVNode||we(r,o);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),e(h,u,f),a=!0,c._container=u,u.__vue_app__=c,po(h.component)}},onUnmount(u){l.push(u)},unmount(){a&&(bt(l,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c},runWithContext(u){const d=Sn;Sn=c;try{return u()}finally{Sn=d}}};return c}}let Sn=null;function Or(e,t){if(qe){let n=qe.provides;const r=qe.parent&&qe.parent.provides;r===n&&(n=qe.provides=Object.create(r)),n[e]=t}}function xt(e,t,n=!1){const r=ni();if(r||Sn){let o=Sn?Sn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&J(t)?t.call(r&&r.proxy):t}}const bl={},Sl=()=>Object.create(bl),El=e=>Object.getPrototypeOf(e)===bl;function ad(e,t,n,r=!1){const o={},i=Sl();e.propsDefaults=Object.create(null),wl(e,t,o,i);for(const s in e.propsOptions[0])s in o||(o[s]=void 0);n?e.props=r?o:ol(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function ld(e,t,n,r){const{props:o,attrs:i,vnode:{patchFlag:s}}=e,l=ie(o),[a]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(fo(e.emitsOptions,f))continue;const h=t[f];if(a)if(se(i,f))h!==i[f]&&(i[f]=h,c=!0);else{const g=zt(f);o[g]=ti(a,l,g,h,e,!1)}else h!==i[f]&&(i[f]=h,c=!0)}}}else{wl(e,t,o,i)&&(c=!0);let u;for(const d in l)(!t||!se(t,d)&&((u=tn(d))===d||!se(t,u)))&&(a?n&&(n[d]!==void 0||n[u]!==void 0)&&(o[d]=ti(a,l,d,void 0,e,!0)):delete o[d]);if(i!==l)for(const d in i)(!t||!se(t,d))&&(delete i[d],c=!0)}c&&Tt(e.attrs,"set","")}function wl(e,t,n,r){const[o,i]=e.propsOptions;let s=!1,l;if(t)for(let a in t){if(Un(a))continue;const c=t[a];let u;o&&se(o,u=zt(a))?!i||!i.includes(u)?n[u]=c:(l||(l={}))[u]=c:fo(e.emitsOptions,a)||(!(a in r)||c!==r[a])&&(r[a]=c,s=!0)}if(i){const a=ie(n),c=l||ce;for(let u=0;u<i.length;u++){const d=i[u];n[d]=ti(o,a,d,c[d],e,!se(c,d))}}return s}function ti(e,t,n,r,o,i){const s=e[n];if(s!=null){const l=se(s,"default");if(l&&r===void 0){const a=s.default;if(s.type!==Function&&!s.skipFactory&&J(a)){const{propsDefaults:c}=o;if(n in c)r=c[n];else{const u=gr(o);r=c[n]=a.call(null,t),u()}}else r=a;o.ce&&o.ce._setProp(n,r)}s[0]&&(i&&!l?r=!1:s[1]&&(r===""||r===tn(n))&&(r=!0))}return r}const cd=new WeakMap;function Al(e,t,n=!1){const r=n?cd:t.propsCache,o=r.get(e);if(o)return o;const i=e.props,s={},l=[];let a=!1;if(!J(e)){const u=d=>{a=!0;const[f,h]=Al(d,t,!0);ze(s,f),h&&l.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!a)return me(e)&&r.set(e,pn),pn;if(q(i))for(let u=0;u<i.length;u++){const d=zt(i[u]);hs(d)&&(s[d]=ce)}else if(i)for(const u in i){const d=zt(u);if(hs(d)){const f=i[u],h=s[d]=q(f)||J(f)?{type:f}:ze({},f),g=h.type;let S=!1,E=!0;if(q(g))for(let b=0;b<g.length;++b){const v=g[b],A=J(v)&&v.name;if(A==="Boolean"){S=!0;break}else A==="String"&&(E=!1)}else S=J(g)&&g.name==="Boolean";h[0]=S,h[1]=E,(S||se(h,"default"))&&l.push(d)}}const c=[s,l];return me(e)&&r.set(e,c),c}function hs(e){return e[0]!=="$"&&!Un(e)}const Vi=e=>e==="_"||e==="_ctx"||e==="$stable",$i=e=>q(e)?e.map(yt):[yt(e)],ud=(e,t,n)=>{if(t._n)return t;const r=Me((...o)=>$i(t(...o)),n);return r._c=!1,r},Ll=(e,t,n)=>{const r=e._ctx;for(const o in e){if(Vi(o))continue;const i=e[o];if(J(i))t[o]=ud(o,i,r);else if(i!=null){const s=$i(i);t[o]=()=>s}}},Pl=(e,t)=>{const n=$i(t);e.slots.default=()=>n},Tl=(e,t,n)=>{for(const r in t)(n||!Vi(r))&&(e[r]=t[r])},dd=(e,t,n)=>{const r=e.slots=Sl();if(e.vnode.shapeFlag&32){const o=t._;o?(Tl(r,t,n),n&&Ua(r,"_",o,!0)):Ll(t,r)}else t&&Pl(e,t)},fd=(e,t,n)=>{const{vnode:r,slots:o}=e;let i=!0,s=ce;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Tl(o,t,n):(i=!t.$stable,Ll(t,o)),s=t}else t&&(Pl(e,t),s={default:1});if(i)for(const l in o)!Vi(l)&&s[l]==null&&delete o[l]},tt=Td;function hd(e){return pd(e)}function pd(e,t){const n=so();n.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:s,createText:l,createComment:a,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=vt,insertStaticContent:g}=e,S=(m,_,y,L=null,T=null,P=null,N=void 0,k=null,I=!!_.dynamicChildren)=>{if(m===_)return;m&&!Dn(m,_)&&(L=w(m),z(m,T,P,!0),m=null),_.patchFlag===-2&&(I=!1,_.dynamicChildren=null);const{type:C,ref:W,shapeFlag:V}=_;switch(C){case ho:E(m,_,y,L);break;case kt:b(m,_,y,L);break;case Ro:m==null&&v(_,y,L,N);break;case Ge:Pe(m,_,y,L,T,P,N,k,I);break;default:V&1?H(m,_,y,L,T,P,N,k,I):V&6?ye(m,_,y,L,T,P,N,k,I):(V&64||V&128)&&C.process(m,_,y,L,T,P,N,k,I,j)}W!=null&&T?zn(W,m&&m.ref,P,_||m,!_):W==null&&m&&m.ref!=null&&zn(m.ref,null,P,m,!0)},E=(m,_,y,L)=>{if(m==null)r(_.el=l(_.children),y,L);else{const T=_.el=m.el;_.children!==m.children&&c(T,_.children)}},b=(m,_,y,L)=>{m==null?r(_.el=a(_.children||""),y,L):_.el=m.el},v=(m,_,y,L)=>{[m.el,m.anchor]=g(m.children,_,y,L,m.el,m.anchor)},A=({el:m,anchor:_},y,L)=>{let T;for(;m&&m!==_;)T=f(m),r(m,y,L),m=T;r(_,y,L)},O=({el:m,anchor:_})=>{let y;for(;m&&m!==_;)y=f(m),o(m),m=y;o(_)},H=(m,_,y,L,T,P,N,k,I)=>{_.type==="svg"?N="svg":_.type==="math"&&(N="mathml"),m==null?Q(_,y,L,T,P,N,k,I):ge(m,_,T,P,N,k,I)},Q=(m,_,y,L,T,P,N,k)=>{let I,C;const{props:W,shapeFlag:V,transition:F,dirs:G}=m;if(I=m.el=s(m.type,P,W&&W.is,W),V&8?u(I,m.children):V&16&&he(m.children,I,null,L,T,To(m,P),N,k),G&&Wt(m,null,L,"created"),K(I,m,m.scopeId,N,L),W){for(const ue in W)ue!=="value"&&!Un(ue)&&i(I,ue,null,W[ue],P,L);"value"in W&&i(I,"value",null,W.value,P),(C=W.onVnodeBeforeMount)&&pt(C,L,m)}G&&Wt(m,null,L,"beforeMount");const ee=md(T,F);ee&&F.beforeEnter(I),r(I,_,y),((C=W&&W.onVnodeMounted)||ee||G)&&tt(()=>{C&&pt(C,L,m),ee&&F.enter(I),G&&Wt(m,null,L,"mounted")},T)},K=(m,_,y,L,T)=>{if(y&&h(m,y),L)for(let P=0;P<L.length;P++)h(m,L[P]);if(T){let P=T.subTree;if(_===P||kl(P.type)&&(P.ssContent===_||P.ssFallback===_)){const N=T.vnode;K(m,N,N.scopeId,N.slotScopeIds,T.parent)}}},he=(m,_,y,L,T,P,N,k,I=0)=>{for(let C=I;C<m.length;C++){const W=m[C]=k?$t(m[C]):yt(m[C]);S(null,W,_,y,L,T,P,N,k)}},ge=(m,_,y,L,T,P,N)=>{const k=_.el=m.el;let{patchFlag:I,dynamicChildren:C,dirs:W}=_;I|=m.patchFlag&16;const V=m.props||ce,F=_.props||ce;let G;if(y&&Gt(y,!1),(G=F.onVnodeBeforeUpdate)&&pt(G,y,_,m),W&&Wt(_,m,y,"beforeUpdate"),y&&Gt(y,!0),(V.innerHTML&&F.innerHTML==null||V.textContent&&F.textContent==null)&&u(k,""),C?be(m.dynamicChildren,C,k,y,L,To(_,T),P):N||R(m,_,k,null,y,L,To(_,T),P,!1),I>0){if(I&16)_e(k,V,F,y,T);else if(I&2&&V.class!==F.class&&i(k,"class",null,F.class,T),I&4&&i(k,"style",V.style,F.style,T),I&8){const ee=_.dynamicProps;for(let ue=0;ue<ee.length;ue++){const ae=ee[ue],Ke=V[ae],Je=F[ae];(Je!==Ke||ae==="value")&&i(k,ae,Ke,Je,T,y)}}I&1&&m.children!==_.children&&u(k,_.children)}else!N&&C==null&&_e(k,V,F,y,T);((G=F.onVnodeUpdated)||W)&&tt(()=>{G&&pt(G,y,_,m),W&&Wt(_,m,y,"updated")},L)},be=(m,_,y,L,T,P,N)=>{for(let k=0;k<_.length;k++){const I=m[k],C=_[k],W=I.el&&(I.type===Ge||!Dn(I,C)||I.shapeFlag&198)?d(I.el):y;S(I,C,W,null,L,T,P,N,!0)}},_e=(m,_,y,L,T)=>{if(_!==y){if(_!==ce)for(const P in _)!Un(P)&&!(P in y)&&i(m,P,_[P],null,T,L);for(const P in y){if(Un(P))continue;const N=y[P],k=_[P];N!==k&&P!=="value"&&i(m,P,k,N,T,L)}"value"in y&&i(m,"value",_.value,y.value,T)}},Pe=(m,_,y,L,T,P,N,k,I)=>{const C=_.el=m?m.el:l(""),W=_.anchor=m?m.anchor:l("");let{patchFlag:V,dynamicChildren:F,slotScopeIds:G}=_;G&&(k=k?k.concat(G):G),m==null?(r(C,y,L),r(W,y,L),he(_.children||[],y,W,T,P,N,k,I)):V>0&&V&64&&F&&m.dynamicChildren?(be(m.dynamicChildren,F,y,T,P,N,k),(_.key!=null||T&&_===T.subTree)&&Rl(m,_,!0)):R(m,_,y,W,T,P,N,k,I)},ye=(m,_,y,L,T,P,N,k,I)=>{_.slotScopeIds=k,m==null?_.shapeFlag&512?T.ctx.activate(_,y,L,N,I):le(_,y,L,T,P,N,I):ve(m,_,I)},le=(m,_,y,L,T,P,N)=>{const k=m.component=Dd(m,L,T);if(hl(m)&&(k.ctx.renderer=j),Nd(k,!1,N),k.asyncDep){if(T&&T.registerDep(k,ne,N),!m.el){const I=k.subTree=we(kt);b(null,I,_,y),m.placeholder=I.el}}else ne(k,m,_,y,T,P,N)},ve=(m,_,y)=>{const L=_.component=m.component;if(Ld(m,_,y))if(L.asyncDep&&!L.asyncResolved){X(L,_,y);return}else L.next=_,L.update();else _.el=m.el,L.vnode=_},ne=(m,_,y,L,T,P,N)=>{const k=()=>{if(m.isMounted){let{next:V,bu:F,u:G,parent:ee,vnode:ue}=m;{const ft=Cl(m);if(ft){V&&(V.el=ue.el,X(m,V,N)),ft.asyncDep.then(()=>{m.isUnmounted||k()});return}}let ae=V,Ke;Gt(m,!1),V?(V.el=ue.el,X(m,V,N)):V=ue,F&&xr(F),(Ke=V.props&&V.props.onVnodeBeforeUpdate)&&pt(Ke,ee,V,ue),Gt(m,!0);const Je=ms(m),dt=m.subTree;m.subTree=Je,S(dt,Je,d(dt.el),w(dt),m,T,P),V.el=Je.el,ae===null&&Pd(m,Je.el),G&&tt(G,T),(Ke=V.props&&V.props.onVnodeUpdated)&&tt(()=>pt(Ke,ee,V,ue),T)}else{let V;const{el:F,props:G}=_,{bm:ee,m:ue,parent:ae,root:Ke,type:Je}=m,dt=bn(_);Gt(m,!1),ee&&xr(ee),!dt&&(V=G&&G.onVnodeBeforeMount)&&pt(V,ae,_),Gt(m,!0);{Ke.ce&&Ke.ce._def.shadowRoot!==!1&&Ke.ce._injectChildStyle(Je);const ft=m.subTree=ms(m);S(null,ft,y,L,m,T,P),_.el=ft.el}if(ue&&tt(ue,T),!dt&&(V=G&&G.onVnodeMounted)){const ft=_;tt(()=>pt(V,ae,ft),T)}(_.shapeFlag&256||ae&&bn(ae.vnode)&&ae.vnode.shapeFlag&256)&&m.a&&tt(m.a,T),m.isMounted=!0,_=y=L=null}};m.scope.on();const I=m.effect=new Fa(k);m.scope.off();const C=m.update=I.run.bind(I),W=m.job=I.runIfDirty.bind(I);W.i=m,W.id=m.uid,I.scheduler=()=>Di(W),Gt(m,!0),C()},X=(m,_,y)=>{_.component=m;const L=m.vnode.props;m.vnode=_,m.next=null,ld(m,_.props,L,y),fd(m,_.children,y),Ot(),ss(m),It()},R=(m,_,y,L,T,P,N,k,I=!1)=>{const C=m&&m.children,W=m?m.shapeFlag:0,V=_.children,{patchFlag:F,shapeFlag:G}=_;if(F>0){if(F&128){U(C,V,y,L,T,P,N,k,I);return}else if(F&256){$(C,V,y,L,T,P,N,k,I);return}}G&8?(W&16&&Ae(C,T,P),V!==C&&u(y,V)):W&16?G&16?U(C,V,y,L,T,P,N,k,I):Ae(C,T,P,!0):(W&8&&u(y,""),G&16&&he(V,y,L,T,P,N,k,I))},$=(m,_,y,L,T,P,N,k,I)=>{m=m||pn,_=_||pn;const C=m.length,W=_.length,V=Math.min(C,W);let F;for(F=0;F<V;F++){const G=_[F]=I?$t(_[F]):yt(_[F]);S(m[F],G,y,null,T,P,N,k,I)}C>W?Ae(m,T,P,!0,!1,V):he(_,y,L,T,P,N,k,I,V)},U=(m,_,y,L,T,P,N,k,I)=>{let C=0;const W=_.length;let V=m.length-1,F=W-1;for(;C<=V&&C<=F;){const G=m[C],ee=_[C]=I?$t(_[C]):yt(_[C]);if(Dn(G,ee))S(G,ee,y,null,T,P,N,k,I);else break;C++}for(;C<=V&&C<=F;){const G=m[V],ee=_[F]=I?$t(_[F]):yt(_[F]);if(Dn(G,ee))S(G,ee,y,null,T,P,N,k,I);else break;V--,F--}if(C>V){if(C<=F){const G=F+1,ee=G<W?_[G].el:L;for(;C<=F;)S(null,_[C]=I?$t(_[C]):yt(_[C]),y,ee,T,P,N,k,I),C++}}else if(C>F)for(;C<=V;)z(m[C],T,P,!0),C++;else{const G=C,ee=C,ue=new Map;for(C=ee;C<=F;C++){const Ze=_[C]=I?$t(_[C]):yt(_[C]);Ze.key!=null&&ue.set(Ze.key,C)}let ae,Ke=0;const Je=F-ee+1;let dt=!1,ft=0;const In=new Array(Je);for(C=0;C<Je;C++)In[C]=0;for(C=G;C<=V;C++){const Ze=m[C];if(Ke>=Je){z(Ze,T,P,!0);continue}let ht;if(Ze.key!=null)ht=ue.get(Ze.key);else for(ae=ee;ae<=F;ae++)if(In[ae-ee]===0&&Dn(Ze,_[ae])){ht=ae;break}ht===void 0?z(Ze,T,P,!0):(In[ht-ee]=C+1,ht>=ft?ft=ht:dt=!0,S(Ze,_[ht],y,null,T,P,N,k,I),Ke++)}const es=dt?gd(In):pn;for(ae=es.length-1,C=Je-1;C>=0;C--){const Ze=ee+C,ht=_[Ze],ts=_[Ze+1],ns=Ze+1<W?ts.el||ts.placeholder:L;In[C]===0?S(null,ht,y,ns,T,P,N,k,I):dt&&(ae<0||C!==es[ae]?B(ht,y,ns,2):ae--)}}},B=(m,_,y,L,T=null)=>{const{el:P,type:N,transition:k,children:I,shapeFlag:C}=m;if(C&6){B(m.component.subTree,_,y,L);return}if(C&128){m.suspense.move(_,y,L);return}if(C&64){N.move(m,_,y,j);return}if(N===Ge){r(P,_,y);for(let V=0;V<I.length;V++)B(I[V],_,y,L);r(m.anchor,_,y);return}if(N===Ro){A(m,_,y);return}if(L!==2&&C&1&&k)if(L===0)k.beforeEnter(P),r(P,_,y),tt(()=>k.enter(P),T);else{const{leave:V,delayLeave:F,afterLeave:G}=k,ee=()=>{m.ctx.isUnmounted?o(P):r(P,_,y)},ue=()=>{P._isLeaving&&P[Uu](!0),V(P,()=>{ee(),G&&G()})};F?F(P,ee,ue):ue()}else r(P,_,y)},z=(m,_,y,L=!1,T=!1)=>{const{type:P,props:N,ref:k,children:I,dynamicChildren:C,shapeFlag:W,patchFlag:V,dirs:F,cacheIndex:G}=m;if(V===-2&&(T=!1),k!=null&&(Ot(),zn(k,null,y,m,!0),It()),G!=null&&(_.renderCache[G]=void 0),W&256){_.ctx.deactivate(m);return}const ee=W&1&&F,ue=!bn(m);let ae;if(ue&&(ae=N&&N.onVnodeBeforeUnmount)&&pt(ae,_,m),W&6)Xe(m.component,y,L);else{if(W&128){m.suspense.unmount(y,L);return}ee&&Wt(m,null,_,"beforeUnmount"),W&64?m.type.remove(m,_,y,j,L):C&&!C.hasOnce&&(P!==Ge||V>0&&V&64)?Ae(C,_,y,!1,!0):(P===Ge&&V&384||!T&&W&16)&&Ae(I,_,y),L&&Se(m)}(ue&&(ae=N&&N.onVnodeUnmounted)||ee)&&tt(()=>{ae&&pt(ae,_,m),ee&&Wt(m,null,_,"unmounted")},y)},Se=m=>{const{type:_,el:y,anchor:L,transition:T}=m;if(_===Ge){pe(y,L);return}if(_===Ro){O(m);return}const P=()=>{o(y),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(m.shapeFlag&1&&T&&!T.persisted){const{leave:N,delayLeave:k}=T,I=()=>N(y,P);k?k(m.el,P,I):I()}else P()},pe=(m,_)=>{let y;for(;m!==_;)y=f(m),o(m),m=y;o(_)},Xe=(m,_,y)=>{const{bum:L,scope:T,job:P,subTree:N,um:k,m:I,a:C}=m;ps(I),ps(C),L&&xr(L),T.stop(),P&&(P.flags|=8,z(N,m,_,y)),k&&tt(k,_),tt(()=>{m.isUnmounted=!0},_)},Ae=(m,_,y,L=!1,T=!1,P=0)=>{for(let N=P;N<m.length;N++)z(m[N],_,y,L,T)},w=m=>{if(m.shapeFlag&6)return w(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const _=f(m.anchor||m.el),y=_&&_[$u];return y?f(y):_};let M=!1;const D=(m,_,y)=>{m==null?_._vnode&&z(_._vnode,null,null,!0):S(_._vnode||null,m,_,null,null,null,y),_._vnode=m,M||(M=!0,ss(),cl(),M=!1)},j={p:S,um:z,m:B,r:Se,mt:le,mc:he,pc:R,pbc:be,n:w,o:e};return{render:D,hydrate:void 0,createApp:sd(D)}}function To({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Gt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function md(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Rl(e,t,n=!1){const r=e.children,o=t.children;if(q(r)&&q(o))for(let i=0;i<r.length;i++){const s=r[i];let l=o[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[i]=$t(o[i]),l.el=s.el),!n&&l.patchFlag!==-2&&Rl(s,l)),l.type===ho&&l.patchFlag!==-1&&(l.el=s.el),l.type===kt&&!l.el&&(l.el=s.el)}}function gd(e){const t=e.slice(),n=[0];let r,o,i,s,l;const a=e.length;for(r=0;r<a;r++){const c=e[r];if(c!==0){if(o=n[n.length-1],e[o]<c){t[r]=o,n.push(r);continue}for(i=0,s=n.length-1;i<s;)l=i+s>>1,e[n[l]]<c?i=l+1:s=l;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}function Cl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Cl(t)}function ps(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const _d=Symbol.for("v-scx"),yd=()=>xt(_d);function Ct(e,t,n){return xl(e,t,n)}function xl(e,t,n=ce){const{immediate:r,deep:o,flush:i,once:s}=n,l=ze({},n),a=t&&r||!t&&i!=="post";let c;if(rr){if(i==="sync"){const h=yd();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!a){const h=()=>{};return h.stop=vt,h.resume=vt,h.pause=vt,h}}const u=qe;l.call=(h,g,S)=>bt(h,u,g,S);let d=!1;i==="post"?l.scheduler=h=>{tt(h,u&&u.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(h,g)=>{g?h():Di(h)}),l.augmentJob=h=>{t&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=ku(e,t,l);return rr&&(c?c.push(f):a&&f()),f}function vd(e,t,n){const r=this.proxy,o=Ce(e)?e.includes(".")?Ol(r,e):()=>r[e]:e.bind(r,r);let i;J(t)?i=t:(i=t.handler,n=t);const s=gr(this),l=xl(o,i.bind(r),n);return s(),l}function Ol(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}const bd=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${zt(t)}Modifiers`]||e[`${tn(t)}Modifiers`];function Sd(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ce;let o=n;const i=t.startsWith("update:"),s=i&&bd(r,t.slice(7));s&&(s.trim&&(o=n.map(u=>Ce(u)?u.trim():u)),s.number&&(o=n.map(qo)));let l,a=r[l=bo(t)]||r[l=bo(zt(t))];!a&&i&&(a=r[l=bo(tn(t))]),a&&bt(a,e,6,o);const c=r[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,bt(c,e,6,o)}}const Ed=new WeakMap;function Il(e,t,n=!1){const r=n?Ed:t.emitsCache,o=r.get(e);if(o!==void 0)return o;const i=e.emits;let s={},l=!1;if(!J(e)){const a=c=>{const u=Il(c,t,!0);u&&(l=!0,ze(s,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!l?(me(e)&&r.set(e,null),null):(q(i)?i.forEach(a=>s[a]=null):ze(s,i),me(e)&&r.set(e,s),s)}function fo(e,t){return!e||!ro(t)?!1:(t=t.slice(2).replace(/Once$/,""),se(e,t[0].toLowerCase()+t.slice(1))||se(e,tn(t))||se(e,t))}function ms(e){const{type:t,vnode:n,proxy:r,withProxy:o,propsOptions:[i],slots:s,attrs:l,emit:a,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:S}=e,E=jr(e);let b,v;try{if(n.shapeFlag&4){const O=o||r,H=O;b=yt(c.call(H,O,u,d,h,f,g)),v=l}else{const O=t;b=yt(O.length>1?O(d,{attrs:l,slots:s,emit:a}):O(d,null)),v=t.props?l:wd(l)}}catch(O){Wn.length=0,lo(O,e,1),b=we(kt)}let A=b;if(v&&S!==!1){const O=Object.keys(v),{shapeFlag:H}=A;O.length&&H&7&&(i&&O.some(wi)&&(v=Ad(v,i)),A=An(A,v,!1,!0))}return n.dirs&&(A=An(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&Ni(A,n.transition),b=A,jr(E),b}const wd=e=>{let t;for(const n in e)(n==="class"||n==="style"||ro(n))&&((t||(t={}))[n]=e[n]);return t},Ad=(e,t)=>{const n={};for(const r in e)(!wi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ld(e,t,n){const{props:r,children:o,component:i}=e,{props:s,children:l,patchFlag:a}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?gs(r,s,c):!!s;if(a&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(s[f]!==r[f]&&!fo(c,f))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:r===s?!1:r?s?gs(r,s,c):!0:!!s;return!1}function gs(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!fo(n,i))return!0}return!1}function Pd({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const kl=e=>e.__isSuspense;function Td(e,t){t&&t.pendingBranch?q(e)?t.effects.push(...e):t.effects.push(e):Mu(e)}const Ge=Symbol.for("v-fgt"),ho=Symbol.for("v-txt"),kt=Symbol.for("v-cmt"),Ro=Symbol.for("v-stc"),Wn=[];let rt=null;function Ee(e=!1){Wn.push(rt=e?null:[])}function Rd(){Wn.pop(),rt=Wn[Wn.length-1]||null}let tr=1;function Hr(e,t=!1){tr+=e,e<0&&rt&&t&&(rt.hasOnce=!0)}function Dl(e){return e.dynamicChildren=tr>0?rt||pn:null,Rd(),tr>0&&rt&&rt.push(e),e}function ke(e,t,n,r,o,i){return Dl(Z(e,t,n,r,o,i,!0))}function zr(e,t,n,r,o){return Dl(we(e,t,n,r,o,!0))}function nr(e){return e?e.__v_isVNode===!0:!1}function Dn(e,t){return e.type===t.type&&e.key===t.key}const Nl=({key:e})=>e??null,Ir=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ce(e)||He(e)||J(e)?{i:Be,r:e,k:t,f:!!n}:e:null);function Z(e,t=null,n=null,r=0,o=null,i=e===Ge?0:1,s=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Nl(t),ref:t&&Ir(t),scopeId:dl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Be};return l?(ji(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=Ce(n)?8:16),tr>0&&!s&&rt&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&rt.push(a),a}const we=Cd;function Cd(e,t=null,n=null,r=0,o=null,i=!1){if((!e||e===Xu)&&(e=kt),nr(e)){const l=An(e,t,!0);return n&&ji(l,n),tr>0&&!i&&rt&&(l.shapeFlag&6?rt[rt.indexOf(e)]=l:rt.push(l)),l.patchFlag=-2,l}if(jd(e)&&(e=e.__vccOpts),t){t=xd(t);let{class:l,style:a}=t;l&&!Ce(l)&&(t.class=_n(l)),me(a)&&(ki(a)&&!q(a)&&(a=ze({},a)),t.style=gn(a))}const s=Ce(e)?1:kl(e)?128:ju(e)?64:me(e)?4:J(e)?2:0;return Z(e,t,n,r,o,s,i,!0)}function xd(e){return e?ki(e)||El(e)?ze({},e):e:null}function An(e,t,n=!1,r=!1){const{props:o,ref:i,patchFlag:s,children:l,transition:a}=e,c=t?Od(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Nl(c),ref:t&&t.ref?n&&i?q(i)?i.concat(Ir(t)):[i,Ir(t)]:Ir(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ge?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&An(e.ssContent),ssFallback:e.ssFallback&&An(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&Ni(u,a.clone(u)),u}function re(e=" ",t=0){return we(ho,null,e,t)}function Co(e="",t=!1){return t?(Ee(),zr(kt,null,e)):we(kt,null,e)}function yt(e){return e==null||typeof e=="boolean"?we(kt):q(e)?we(Ge,null,e.slice()):nr(e)?$t(e):we(ho,null,String(e))}function $t(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:An(e)}function ji(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(q(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),ji(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!El(t)?t._ctx=Be:o===3&&Be&&(Be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else J(t)?(t={default:t,_ctx:Be},n=32):(t=String(t),r&64?(n=16,t=[re(t)]):n=8);e.children=t,e.shapeFlag|=n}function Od(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=_n([t.class,r.class]));else if(o==="style")t.style=gn([t.style,r.style]);else if(ro(o)){const i=t[o],s=r[o];s&&i!==s&&!(q(i)&&i.includes(s))&&(t[o]=i?[].concat(i,s):s)}else o!==""&&(t[o]=r[o])}return t}function pt(e,t,n,r=null){bt(e,t,7,[n,r])}const Id=vl();let kd=0;function Dd(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||Id,i={uid:kd++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new su(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Al(r,o),emitsOptions:Il(r,o),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:r.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Sd.bind(null,i),e.ce&&e.ce(i),i}let qe=null;const ni=()=>qe||Be;let Fr,ri;{const e=so(),t=(n,r)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(r),i=>{o.length>1?o.forEach(s=>s(i)):o[0](i)}};Fr=t("__VUE_INSTANCE_SETTERS__",n=>qe=n),ri=t("__VUE_SSR_SETTERS__",n=>rr=n)}const gr=e=>{const t=qe;return Fr(e),e.scope.on(),()=>{e.scope.off(),Fr(t)}},_s=()=>{qe&&qe.scope.off(),Fr(null)};function Ml(e){return e.vnode.shapeFlag&4}let rr=!1;function Nd(e,t=!1,n=!1){t&&ri(t);const{props:r,children:o}=e.vnode,i=Ml(e);ad(e,r,i,t),dd(e,o,n||t);const s=i?Md(e,t):void 0;return t&&ri(!1),s}function Md(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Zu);const{setup:r}=n;if(r){Ot();const o=e.setupContext=r.length>1?$d(e):null,i=gr(e),s=mr(r,e,0,[e.props,o]),l=Ma(s);if(It(),i(),(l||e.sp)&&!bn(e)&&fl(e),l){if(s.then(_s,_s),t)return s.then(a=>{ys(e,a)}).catch(a=>{lo(a,e,0)});e.asyncDep=s}else ys(e,s)}else Vl(e)}function ys(e,t,n){J(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:me(t)&&(e.setupState=sl(t)),Vl(e)}function Vl(e,t,n){const r=e.type;e.render||(e.render=r.render||vt);{const o=gr(e);Ot();try{ed(e)}finally{It(),o()}}}const Vd={get(e,t){return je(e,"get",""),e[t]}};function $d(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Vd),slots:e.slots,emit:e.emit,expose:t}}function po(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(sl(Pu(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Fn)return Fn[n](e)},has(t,n){return n in t||n in Fn}})):e.proxy}function jd(e){return J(e)&&"__vccOpts"in e}const lt=(e,t)=>Ou(e,t,rr);function $l(e,t,n){const r=(i,s,l)=>{Hr(-1);try{return we(i,s,l)}finally{Hr(1)}},o=arguments.length;return o===2?me(t)&&!q(t)?nr(t)?r(e,null,[t]):r(e,t):r(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&nr(n)&&(n=[n]),r(e,t,n))}const Ud="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let oi;const vs=typeof window<"u"&&window.trustedTypes;if(vs)try{oi=vs.createPolicy("vue",{createHTML:e=>e})}catch{}const jl=oi?e=>oi.createHTML(e):e=>e,Bd="http://www.w3.org/2000/svg",Hd="http://www.w3.org/1998/Math/MathML",Lt=typeof document<"u"?document:null,bs=Lt&&Lt.createElement("template"),zd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t==="svg"?Lt.createElementNS(Bd,e):t==="mathml"?Lt.createElementNS(Hd,e):n?Lt.createElement(e,{is:n}):Lt.createElement(e);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>Lt.createTextNode(e),createComment:e=>Lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,i){const s=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{bs.innerHTML=jl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=bs.content;if(r==="svg"||r==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Fd=Symbol("_vtc");function Wd(e,t,n){const r=e[Fd];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ss=Symbol("_vod"),Gd=Symbol("_vsh"),qd=Symbol(""),Kd=/(?:^|;)\s*display\s*:/;function Jd(e,t,n){const r=e.style,o=Ce(n);let i=!1;if(n&&!o){if(t)if(Ce(t))for(const s of t.split(";")){const l=s.slice(0,s.indexOf(":")).trim();n[l]==null&&kr(r,l,"")}else for(const s in t)n[s]==null&&kr(r,s,"");for(const s in n)s==="display"&&(i=!0),kr(r,s,n[s])}else if(o){if(t!==n){const s=r[qd];s&&(n+=";"+s),r.cssText=n,i=Kd.test(n)}}else t&&e.removeAttribute("style");Ss in e&&(e[Ss]=i?r.display:"",e[Gd]&&(r.display="none"))}const Es=/\s*!important$/;function kr(e,t,n){if(q(n))n.forEach(r=>kr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Yd(e,t);Es.test(n)?e.setProperty(tn(r),n.replace(Es,""),"important"):e[r]=n}}const ws=["Webkit","Moz","ms"],xo={};function Yd(e,t){const n=xo[t];if(n)return n;let r=zt(t);if(r!=="filter"&&r in e)return xo[t]=r;r=ja(r);for(let o=0;o<ws.length;o++){const i=ws[o]+r;if(i in e)return xo[t]=i}return t}const As="http://www.w3.org/1999/xlink";function Ls(e,t,n,r,o,i=iu(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(As,t.slice(6,t.length)):e.setAttributeNS(As,t,n):n==null||i&&!Ba(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Dt(n)?String(n):n)}function Ps(e,t,n,r,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?jl(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ba(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(o||t)}function cn(e,t,n,r){e.addEventListener(t,n,r)}function Qd(e,t,n,r){e.removeEventListener(t,n,r)}const Ts=Symbol("_vei");function Xd(e,t,n,r,o=null){const i=e[Ts]||(e[Ts]={}),s=i[t];if(r&&s)s.value=r;else{const[l,a]=Zd(t);if(r){const c=i[t]=nf(r,o);cn(e,l,c,a)}else s&&(Qd(e,l,s,a),i[t]=void 0)}}const Rs=/(?:Once|Passive|Capture)$/;function Zd(e){let t;if(Rs.test(e)){t={};let r;for(;r=e.match(Rs);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):tn(e.slice(2)),t]}let Oo=0;const ef=Promise.resolve(),tf=()=>Oo||(ef.then(()=>Oo=0),Oo=Date.now());function nf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;bt(rf(r,n.value),t,5,[r])};return n.value=e,n.attached=tf(),n}function rf(e,t){if(q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const Cs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,of=(e,t,n,r,o,i)=>{const s=o==="svg";t==="class"?Wd(e,r,s):t==="style"?Jd(e,n,r):ro(t)?wi(t)||Xd(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):sf(e,t,r,s))?(Ps(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ls(e,t,r,s,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ce(r))?Ps(e,zt(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ls(e,t,r,s))};function sf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Cs(t)&&J(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Cs(t)&&Ce(n)?!1:t in e}const xs=e=>{const t=e.props["onUpdate:modelValue"]||!1;return q(t)?n=>xr(t,n):t};function af(e){e.target.composing=!0}function Os(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Io=Symbol("_assign"),lf={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e[Io]=xs(o);const i=r||o.props&&o.props.type==="number";cn(e,t?"change":"input",s=>{if(s.target.composing)return;let l=e.value;n&&(l=l.trim()),i&&(l=qo(l)),e[Io](l)}),n&&cn(e,"change",()=>{e.value=e.value.trim()}),t||(cn(e,"compositionstart",af),cn(e,"compositionend",Os),cn(e,"change",Os))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:o,number:i}},s){if(e[Io]=xs(s),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?qo(e.value):e.value,a=t??"";l!==a&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||o&&e.value.trim()===a)||(e.value=a))}},cf=ze({patchProp:of},zd);let Is;function uf(){return Is||(Is=hd(cf))}const df=((...e)=>{const t=uf().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=hf(r);if(!o)return;const i=t._component;!J(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const s=n(o,!1,ff(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t});function ff(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function hf(e){return Ce(e)?document.querySelector(e):e}const pf="modulepreload",mf=function(e){return"/"+e},ks={},p=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){let a=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=s?.nonce||s?.getAttribute("nonce");o=a(n.map(c=>{if(c=mf(c),c in ks)return;ks[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":pf,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((h,g)=>{f.addEventListener("load",h),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return o.then(s=>{for(const l of s||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})};let Re=class extends Error{constructor(t){super(t),this.name="ShikiError"}};function gf(e){return Ui(e)}function Ui(e){return Array.isArray(e)?_f(e):e instanceof RegExp?e:typeof e=="object"?yf(e):e}function _f(e){let t=[];for(let n=0,r=e.length;n<r;n++)t[n]=Ui(e[n]);return t}function yf(e){let t={};for(let n in e)t[n]=Ui(e[n]);return t}function Ul(e,...t){return t.forEach(n=>{for(let r in n)e[r]=n[r]}),e}function Bl(e){const t=~e.lastIndexOf("/")||~e.lastIndexOf("\\");return t===0?e:~t===e.length-1?Bl(e.substring(0,e.length-1)):e.substr(~t+1)}var ko=/\$(\d+)|\${(\d+):\/(downcase|upcase)}/g,Er=class{static hasCaptures(e){return e===null?!1:(ko.lastIndex=0,ko.test(e))}static replaceCaptures(e,t,n){return e.replace(ko,(r,o,i,s)=>{let l=n[parseInt(o||i,10)];if(l){let a=t.substring(l.start,l.end);for(;a[0]===".";)a=a.substring(1);switch(s){case"downcase":return a.toLowerCase();case"upcase":return a.toUpperCase();default:return a}}else return r})}};function Hl(e,t){return e<t?-1:e>t?1:0}function zl(e,t){if(e===null&&t===null)return 0;if(!e)return-1;if(!t)return 1;let n=e.length,r=t.length;if(n===r){for(let o=0;o<n;o++){let i=Hl(e[o],t[o]);if(i!==0)return i}return 0}return n-r}function Ds(e){return!!(/^#[0-9a-f]{6}$/i.test(e)||/^#[0-9a-f]{8}$/i.test(e)||/^#[0-9a-f]{3}$/i.test(e)||/^#[0-9a-f]{4}$/i.test(e))}function Fl(e){return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&")}var Wl=class{constructor(e){this.fn=e}cache=new Map;get(e){if(this.cache.has(e))return this.cache.get(e);const t=this.fn(e);return this.cache.set(e,t),t}},Wr=class{constructor(e,t,n){this._colorMap=e,this._defaults=t,this._root=n}static createFromRawTheme(e,t){return this.createFromParsedTheme(Sf(e),t)}static createFromParsedTheme(e,t){return wf(e,t)}_cachedMatchRoot=new Wl(e=>this._root.match(e));getColorMap(){return this._colorMap.getColorMap()}getDefaults(){return this._defaults}match(e){if(e===null)return this._defaults;const t=e.scopeName,r=this._cachedMatchRoot.get(t).find(o=>vf(e.parent,o.parentScopes));return r?new Gl(r.fontStyle,r.foreground,r.background):null}},Do=class Dr{constructor(t,n){this.parent=t,this.scopeName=n}static push(t,n){for(const r of n)t=new Dr(t,r);return t}static from(...t){let n=null;for(let r=0;r<t.length;r++)n=new Dr(n,t[r]);return n}push(t){return new Dr(this,t)}getSegments(){let t=this;const n=[];for(;t;)n.push(t.scopeName),t=t.parent;return n.reverse(),n}toString(){return this.getSegments().join(" ")}extends(t){return this===t?!0:this.parent===null?!1:this.parent.extends(t)}getExtensionIfDefined(t){const n=[];let r=this;for(;r&&r!==t;)n.push(r.scopeName),r=r.parent;return r===t?n.reverse():void 0}};function vf(e,t){if(t.length===0)return!0;for(let n=0;n<t.length;n++){let r=t[n],o=!1;if(r===">"){if(n===t.length-1)return!1;r=t[++n],o=!0}for(;e&&!bf(e.scopeName,r);){if(o)return!1;e=e.parent}if(!e)return!1;e=e.parent}return!0}function bf(e,t){return t===e||e.startsWith(t)&&e[t.length]==="."}var Gl=class{constructor(e,t,n){this.fontStyle=e,this.foregroundId=t,this.backgroundId=n}};function Sf(e){if(!e)return[];if(!e.settings||!Array.isArray(e.settings))return[];let t=e.settings,n=[],r=0;for(let o=0,i=t.length;o<i;o++){let s=t[o];if(!s.settings)continue;let l;if(typeof s.scope=="string"){let d=s.scope;d=d.replace(/^[,]+/,""),d=d.replace(/[,]+$/,""),l=d.split(",")}else Array.isArray(s.scope)?l=s.scope:l=[""];let a=-1;if(typeof s.settings.fontStyle=="string"){a=0;let d=s.settings.fontStyle.split(" ");for(let f=0,h=d.length;f<h;f++)switch(d[f]){case"italic":a=a|1;break;case"bold":a=a|2;break;case"underline":a=a|4;break;case"strikethrough":a=a|8;break}}let c=null;typeof s.settings.foreground=="string"&&Ds(s.settings.foreground)&&(c=s.settings.foreground);let u=null;typeof s.settings.background=="string"&&Ds(s.settings.background)&&(u=s.settings.background);for(let d=0,f=l.length;d<f;d++){let g=l[d].trim().split(" "),S=g[g.length-1],E=null;g.length>1&&(E=g.slice(0,g.length-1),E.reverse()),n[r++]=new Ef(S,E,o,a,c,u)}}return n}var Ef=class{constructor(e,t,n,r,o,i){this.scope=e,this.parentScopes=t,this.index=n,this.fontStyle=r,this.foreground=o,this.background=i}},Ue=(e=>(e[e.NotSet=-1]="NotSet",e[e.None=0]="None",e[e.Italic=1]="Italic",e[e.Bold=2]="Bold",e[e.Underline=4]="Underline",e[e.Strikethrough=8]="Strikethrough",e))(Ue||{});function wf(e,t){e.sort((a,c)=>{let u=Hl(a.scope,c.scope);return u!==0||(u=zl(a.parentScopes,c.parentScopes),u!==0)?u:a.index-c.index});let n=0,r="#000000",o="#ffffff";for(;e.length>=1&&e[0].scope==="";){let a=e.shift();a.fontStyle!==-1&&(n=a.fontStyle),a.foreground!==null&&(r=a.foreground),a.background!==null&&(o=a.background)}let i=new Af(t),s=new Gl(n,i.getId(r),i.getId(o)),l=new Pf(new ii(0,null,-1,0,0),[]);for(let a=0,c=e.length;a<c;a++){let u=e[a];l.insert(0,u.scope,u.parentScopes,u.fontStyle,i.getId(u.foreground),i.getId(u.background))}return new Wr(i,s,l)}var Af=class{_isFrozen;_lastColorId;_id2color;_color2id;constructor(e){if(this._lastColorId=0,this._id2color=[],this._color2id=Object.create(null),Array.isArray(e)){this._isFrozen=!0;for(let t=0,n=e.length;t<n;t++)this._color2id[e[t]]=t,this._id2color[t]=e[t]}else this._isFrozen=!1}getId(e){if(e===null)return 0;e=e.toUpperCase();let t=this._color2id[e];if(t)return t;if(this._isFrozen)throw new Error(`Missing color in color map - ${e}`);return t=++this._lastColorId,this._color2id[e]=t,this._id2color[t]=e,t}getColorMap(){return this._id2color.slice(0)}},Lf=Object.freeze([]),ii=class ql{scopeDepth;parentScopes;fontStyle;foreground;background;constructor(t,n,r,o,i){this.scopeDepth=t,this.parentScopes=n||Lf,this.fontStyle=r,this.foreground=o,this.background=i}clone(){return new ql(this.scopeDepth,this.parentScopes,this.fontStyle,this.foreground,this.background)}static cloneArr(t){let n=[];for(let r=0,o=t.length;r<o;r++)n[r]=t[r].clone();return n}acceptOverwrite(t,n,r,o){this.scopeDepth>t?console.log("how did this happen?"):this.scopeDepth=t,n!==-1&&(this.fontStyle=n),r!==0&&(this.foreground=r),o!==0&&(this.background=o)}},Pf=class si{constructor(t,n=[],r={}){this._mainRule=t,this._children=r,this._rulesWithParentScopes=n}_rulesWithParentScopes;static _cmpBySpecificity(t,n){if(t.scopeDepth!==n.scopeDepth)return n.scopeDepth-t.scopeDepth;let r=0,o=0;for(;t.parentScopes[r]===">"&&r++,n.parentScopes[o]===">"&&o++,!(r>=t.parentScopes.length||o>=n.parentScopes.length);){const i=n.parentScopes[o].length-t.parentScopes[r].length;if(i!==0)return i;r++,o++}return n.parentScopes.length-t.parentScopes.length}match(t){if(t!==""){let r=t.indexOf("."),o,i;if(r===-1?(o=t,i=""):(o=t.substring(0,r),i=t.substring(r+1)),this._children.hasOwnProperty(o))return this._children[o].match(i)}const n=this._rulesWithParentScopes.concat(this._mainRule);return n.sort(si._cmpBySpecificity),n}insert(t,n,r,o,i,s){if(n===""){this._doInsertHere(t,r,o,i,s);return}let l=n.indexOf("."),a,c;l===-1?(a=n,c=""):(a=n.substring(0,l),c=n.substring(l+1));let u;this._children.hasOwnProperty(a)?u=this._children[a]:(u=new si(this._mainRule.clone(),ii.cloneArr(this._rulesWithParentScopes)),this._children[a]=u),u.insert(t+1,c,r,o,i,s)}_doInsertHere(t,n,r,o,i){if(n===null){this._mainRule.acceptOverwrite(t,r,o,i);return}for(let s=0,l=this._rulesWithParentScopes.length;s<l;s++){let a=this._rulesWithParentScopes[s];if(zl(a.parentScopes,n)===0){a.acceptOverwrite(t,r,o,i);return}}r===-1&&(r=this._mainRule.fontStyle),o===0&&(o=this._mainRule.foreground),i===0&&(i=this._mainRule.background),this._rulesWithParentScopes.push(new ii(t,n,r,o,i))}},Ln=class ot{static toBinaryStr(t){return t.toString(2).padStart(32,"0")}static print(t){const n=ot.getLanguageId(t),r=ot.getTokenType(t),o=ot.getFontStyle(t),i=ot.getForeground(t),s=ot.getBackground(t);console.log({languageId:n,tokenType:r,fontStyle:o,foreground:i,background:s})}static getLanguageId(t){return(t&255)>>>0}static getTokenType(t){return(t&768)>>>8}static containsBalancedBrackets(t){return(t&1024)!==0}static getFontStyle(t){return(t&30720)>>>11}static getForeground(t){return(t&16744448)>>>15}static getBackground(t){return(t&4278190080)>>>24}static set(t,n,r,o,i,s,l){let a=ot.getLanguageId(t),c=ot.getTokenType(t),u=ot.containsBalancedBrackets(t)?1:0,d=ot.getFontStyle(t),f=ot.getForeground(t),h=ot.getBackground(t);return n!==0&&(a=n),r!==8&&(c=r),o!==null&&(u=o?1:0),i!==-1&&(d=i),s!==0&&(f=s),l!==0&&(h=l),(a<<0|c<<8|u<<10|d<<11|f<<15|h<<24)>>>0}};function Gr(e,t){const n=[],r=Tf(e);let o=r.next();for(;o!==null;){let a=0;if(o.length===2&&o.charAt(1)===":"){switch(o.charAt(0)){case"R":a=1;break;case"L":a=-1;break;default:console.log(`Unknown priority ${o} in scope selector`)}o=r.next()}let c=s();if(n.push({matcher:c,priority:a}),o!==",")break;o=r.next()}return n;function i(){if(o==="-"){o=r.next();const a=i();return c=>!!a&&!a(c)}if(o==="("){o=r.next();const a=l();return o===")"&&(o=r.next()),a}if(Ns(o)){const a=[];do a.push(o),o=r.next();while(Ns(o));return c=>t(a,c)}return null}function s(){const a=[];let c=i();for(;c;)a.push(c),c=i();return u=>a.every(d=>d(u))}function l(){const a=[];let c=s();for(;c&&(a.push(c),o==="|"||o===",");){do o=r.next();while(o==="|"||o===",");c=s()}return u=>a.some(d=>d(u))}}function Ns(e){return!!e&&!!e.match(/[\w\.:]+/)}function Tf(e){let t=/([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g,n=t.exec(e);return{next:()=>{if(!n)return null;const r=n[0];return n=t.exec(e),r}}}function Kl(e){typeof e.dispose=="function"&&e.dispose()}var or=class{constructor(e){this.scopeName=e}toKey(){return this.scopeName}},Rf=class{constructor(e,t){this.scopeName=e,this.ruleName=t}toKey(){return`${this.scopeName}#${this.ruleName}`}},Cf=class{_references=[];_seenReferenceKeys=new Set;get references(){return this._references}visitedRule=new Set;add(e){const t=e.toKey();this._seenReferenceKeys.has(t)||(this._seenReferenceKeys.add(t),this._references.push(e))}},xf=class{constructor(e,t){this.repo=e,this.initialScopeName=t,this.seenFullScopeRequests.add(this.initialScopeName),this.Q=[new or(this.initialScopeName)]}seenFullScopeRequests=new Set;seenPartialScopeRequests=new Set;Q;processQueue(){const e=this.Q;this.Q=[];const t=new Cf;for(const n of e)Of(n,this.initialScopeName,this.repo,t);for(const n of t.references)if(n instanceof or){if(this.seenFullScopeRequests.has(n.scopeName))continue;this.seenFullScopeRequests.add(n.scopeName),this.Q.push(n)}else{if(this.seenFullScopeRequests.has(n.scopeName)||this.seenPartialScopeRequests.has(n.toKey()))continue;this.seenPartialScopeRequests.add(n.toKey()),this.Q.push(n)}}};function Of(e,t,n,r){const o=n.lookup(e.scopeName);if(!o){if(e.scopeName===t)throw new Error(`No grammar provided for <${t}>`);return}const i=n.lookup(t);e instanceof or?Nr({baseGrammar:i,selfGrammar:o},r):ai(e.ruleName,{baseGrammar:i,selfGrammar:o,repository:o.repository},r);const s=n.injections(e.scopeName);if(s)for(const l of s)r.add(new or(l))}function ai(e,t,n){if(t.repository&&t.repository[e]){const r=t.repository[e];qr([r],t,n)}}function Nr(e,t){e.selfGrammar.patterns&&Array.isArray(e.selfGrammar.patterns)&&qr(e.selfGrammar.patterns,{...e,repository:e.selfGrammar.repository},t),e.selfGrammar.injections&&qr(Object.values(e.selfGrammar.injections),{...e,repository:e.selfGrammar.repository},t)}function qr(e,t,n){for(const r of e){if(n.visitedRule.has(r))continue;n.visitedRule.add(r);const o=r.repository?Ul({},t.repository,r.repository):t.repository;Array.isArray(r.patterns)&&qr(r.patterns,{...t,repository:o},n);const i=r.include;if(!i)continue;const s=Jl(i);switch(s.kind){case 0:Nr({...t,selfGrammar:t.baseGrammar},n);break;case 1:Nr(t,n);break;case 2:ai(s.ruleName,{...t,repository:o},n);break;case 3:case 4:const l=s.scopeName===t.selfGrammar.scopeName?t.selfGrammar:s.scopeName===t.baseGrammar.scopeName?t.baseGrammar:void 0;if(l){const a={baseGrammar:t.baseGrammar,selfGrammar:l,repository:o};s.kind===4?ai(s.ruleName,a,n):Nr(a,n)}else s.kind===4?n.add(new Rf(s.scopeName,s.ruleName)):n.add(new or(s.scopeName));break}}}var If=class{kind=0},kf=class{kind=1},Df=class{constructor(e){this.ruleName=e}kind=2},Nf=class{constructor(e){this.scopeName=e}kind=3},Mf=class{constructor(e,t){this.scopeName=e,this.ruleName=t}kind=4};function Jl(e){if(e==="$base")return new If;if(e==="$self")return new kf;const t=e.indexOf("#");if(t===-1)return new Nf(e);if(t===0)return new Df(e.substring(1));{const n=e.substring(0,t),r=e.substring(t+1);return new Mf(n,r)}}var Vf=/\\(\d+)/,Ms=/\\(\d+)/g,$f=-1,Yl=-2;var _r=class{$location;id;_nameIsCapturing;_name;_contentNameIsCapturing;_contentName;constructor(e,t,n,r){this.$location=e,this.id=t,this._name=n||null,this._nameIsCapturing=Er.hasCaptures(this._name),this._contentName=r||null,this._contentNameIsCapturing=Er.hasCaptures(this._contentName)}get debugName(){const e=this.$location?`${Bl(this.$location.filename)}:${this.$location.line}`:"unknown";return`${this.constructor.name}#${this.id} @ ${e}`}getName(e,t){return!this._nameIsCapturing||this._name===null||e===null||t===null?this._name:Er.replaceCaptures(this._name,e,t)}getContentName(e,t){return!this._contentNameIsCapturing||this._contentName===null?this._contentName:Er.replaceCaptures(this._contentName,e,t)}},jf=class extends _r{retokenizeCapturedWithRuleId;constructor(e,t,n,r,o){super(e,t,n,r),this.retokenizeCapturedWithRuleId=o}dispose(){}collectPatterns(e,t){throw new Error("Not supported!")}compile(e,t){throw new Error("Not supported!")}compileAG(e,t,n,r){throw new Error("Not supported!")}},Uf=class extends _r{_match;captures;_cachedCompiledPatterns;constructor(e,t,n,r,o){super(e,t,n,null),this._match=new ir(r,this.id),this.captures=o,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}get debugMatchRegExp(){return`${this._match.source}`}collectPatterns(e,t){t.push(this._match)}compile(e,t){return this._getCachedCompiledPatterns(e).compile(e)}compileAG(e,t,n,r){return this._getCachedCompiledPatterns(e).compileAG(e,n,r)}_getCachedCompiledPatterns(e){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new sr,this.collectPatterns(e,this._cachedCompiledPatterns)),this._cachedCompiledPatterns}},Vs=class extends _r{hasMissingPatterns;patterns;_cachedCompiledPatterns;constructor(e,t,n,r,o){super(e,t,n,r),this.patterns=o.patterns,this.hasMissingPatterns=o.hasMissingPatterns,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}collectPatterns(e,t){for(const n of this.patterns)e.getRule(n).collectPatterns(e,t)}compile(e,t){return this._getCachedCompiledPatterns(e).compile(e)}compileAG(e,t,n,r){return this._getCachedCompiledPatterns(e).compileAG(e,n,r)}_getCachedCompiledPatterns(e){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new sr,this.collectPatterns(e,this._cachedCompiledPatterns)),this._cachedCompiledPatterns}},li=class extends _r{_begin;beginCaptures;_end;endHasBackReferences;endCaptures;applyEndPatternLast;hasMissingPatterns;patterns;_cachedCompiledPatterns;constructor(e,t,n,r,o,i,s,l,a,c){super(e,t,n,r),this._begin=new ir(o,this.id),this.beginCaptures=i,this._end=new ir(s||"￿",-1),this.endHasBackReferences=this._end.hasBackReferences,this.endCaptures=l,this.applyEndPatternLast=a||!1,this.patterns=c.patterns,this.hasMissingPatterns=c.hasMissingPatterns,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}get debugBeginRegExp(){return`${this._begin.source}`}get debugEndRegExp(){return`${this._end.source}`}getEndWithResolvedBackReferences(e,t){return this._end.resolveBackReferences(e,t)}collectPatterns(e,t){t.push(this._begin)}compile(e,t){return this._getCachedCompiledPatterns(e,t).compile(e)}compileAG(e,t,n,r){return this._getCachedCompiledPatterns(e,t).compileAG(e,n,r)}_getCachedCompiledPatterns(e,t){if(!this._cachedCompiledPatterns){this._cachedCompiledPatterns=new sr;for(const n of this.patterns)e.getRule(n).collectPatterns(e,this._cachedCompiledPatterns);this.applyEndPatternLast?this._cachedCompiledPatterns.push(this._end.hasBackReferences?this._end.clone():this._end):this._cachedCompiledPatterns.unshift(this._end.hasBackReferences?this._end.clone():this._end)}return this._end.hasBackReferences&&(this.applyEndPatternLast?this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length()-1,t):this._cachedCompiledPatterns.setSource(0,t)),this._cachedCompiledPatterns}},Kr=class extends _r{_begin;beginCaptures;whileCaptures;_while;whileHasBackReferences;hasMissingPatterns;patterns;_cachedCompiledPatterns;_cachedCompiledWhilePatterns;constructor(e,t,n,r,o,i,s,l,a){super(e,t,n,r),this._begin=new ir(o,this.id),this.beginCaptures=i,this.whileCaptures=l,this._while=new ir(s,Yl),this.whileHasBackReferences=this._while.hasBackReferences,this.patterns=a.patterns,this.hasMissingPatterns=a.hasMissingPatterns,this._cachedCompiledPatterns=null,this._cachedCompiledWhilePatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null),this._cachedCompiledWhilePatterns&&(this._cachedCompiledWhilePatterns.dispose(),this._cachedCompiledWhilePatterns=null)}get debugBeginRegExp(){return`${this._begin.source}`}get debugWhileRegExp(){return`${this._while.source}`}getWhileWithResolvedBackReferences(e,t){return this._while.resolveBackReferences(e,t)}collectPatterns(e,t){t.push(this._begin)}compile(e,t){return this._getCachedCompiledPatterns(e).compile(e)}compileAG(e,t,n,r){return this._getCachedCompiledPatterns(e).compileAG(e,n,r)}_getCachedCompiledPatterns(e){if(!this._cachedCompiledPatterns){this._cachedCompiledPatterns=new sr;for(const t of this.patterns)e.getRule(t).collectPatterns(e,this._cachedCompiledPatterns)}return this._cachedCompiledPatterns}compileWhile(e,t){return this._getCachedCompiledWhilePatterns(e,t).compile(e)}compileWhileAG(e,t,n,r){return this._getCachedCompiledWhilePatterns(e,t).compileAG(e,n,r)}_getCachedCompiledWhilePatterns(e,t){return this._cachedCompiledWhilePatterns||(this._cachedCompiledWhilePatterns=new sr,this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences?this._while.clone():this._while)),this._while.hasBackReferences&&this._cachedCompiledWhilePatterns.setSource(0,t||"￿"),this._cachedCompiledWhilePatterns}},Ql=class Ve{static createCaptureRule(t,n,r,o,i){return t.registerRule(s=>new jf(n,s,r,o,i))}static getCompiledRuleId(t,n,r){return t.id||n.registerRule(o=>{if(t.id=o,t.match)return new Uf(t.$vscodeTextmateLocation,t.id,t.name,t.match,Ve._compileCaptures(t.captures,n,r));if(typeof t.begin>"u"){t.repository&&(r=Ul({},r,t.repository));let i=t.patterns;return typeof i>"u"&&t.include&&(i=[{include:t.include}]),new Vs(t.$vscodeTextmateLocation,t.id,t.name,t.contentName,Ve._compilePatterns(i,n,r))}return t.while?new Kr(t.$vscodeTextmateLocation,t.id,t.name,t.contentName,t.begin,Ve._compileCaptures(t.beginCaptures||t.captures,n,r),t.while,Ve._compileCaptures(t.whileCaptures||t.captures,n,r),Ve._compilePatterns(t.patterns,n,r)):new li(t.$vscodeTextmateLocation,t.id,t.name,t.contentName,t.begin,Ve._compileCaptures(t.beginCaptures||t.captures,n,r),t.end,Ve._compileCaptures(t.endCaptures||t.captures,n,r),t.applyEndPatternLast,Ve._compilePatterns(t.patterns,n,r))}),t.id}static _compileCaptures(t,n,r){let o=[];if(t){let i=0;for(const s in t){if(s==="$vscodeTextmateLocation")continue;const l=parseInt(s,10);l>i&&(i=l)}for(let s=0;s<=i;s++)o[s]=null;for(const s in t){if(s==="$vscodeTextmateLocation")continue;const l=parseInt(s,10);let a=0;t[s].patterns&&(a=Ve.getCompiledRuleId(t[s],n,r)),o[l]=Ve.createCaptureRule(n,t[s].$vscodeTextmateLocation,t[s].name,t[s].contentName,a)}}return o}static _compilePatterns(t,n,r){let o=[];if(t)for(let i=0,s=t.length;i<s;i++){const l=t[i];let a=-1;if(l.include){const c=Jl(l.include);switch(c.kind){case 0:case 1:a=Ve.getCompiledRuleId(r[l.include],n,r);break;case 2:let u=r[c.ruleName];u&&(a=Ve.getCompiledRuleId(u,n,r));break;case 3:case 4:const d=c.scopeName,f=c.kind===4?c.ruleName:null,h=n.getExternalGrammar(d,r);if(h)if(f){let g=h.repository[f];g&&(a=Ve.getCompiledRuleId(g,n,h.repository))}else a=Ve.getCompiledRuleId(h.repository.$self,n,h.repository);break}}else a=Ve.getCompiledRuleId(l,n,r);if(a!==-1){const c=n.getRule(a);let u=!1;if((c instanceof Vs||c instanceof li||c instanceof Kr)&&c.hasMissingPatterns&&c.patterns.length===0&&(u=!0),u)continue;o.push(a)}}return{patterns:o,hasMissingPatterns:(t?t.length:0)!==o.length}}},ir=class Xl{source;ruleId;hasAnchor;hasBackReferences;_anchorCache;constructor(t,n){if(t&&typeof t=="string"){const r=t.length;let o=0,i=[],s=!1;for(let l=0;l<r;l++)if(t.charAt(l)==="\\"&&l+1<r){const c=t.charAt(l+1);c==="z"?(i.push(t.substring(o,l)),i.push("$(?!\\n)(?<!\\n)"),o=l+2):(c==="A"||c==="G")&&(s=!0),l++}this.hasAnchor=s,o===0?this.source=t:(i.push(t.substring(o,r)),this.source=i.join(""))}else this.hasAnchor=!1,this.source=t;this.hasAnchor?this._anchorCache=this._buildAnchorCache():this._anchorCache=null,this.ruleId=n,typeof this.source=="string"?this.hasBackReferences=Vf.test(this.source):this.hasBackReferences=!1}clone(){return new Xl(this.source,this.ruleId)}setSource(t){this.source!==t&&(this.source=t,this.hasAnchor&&(this._anchorCache=this._buildAnchorCache()))}resolveBackReferences(t,n){if(typeof this.source!="string")throw new Error("This method should only be called if the source is a string");let r=n.map(o=>t.substring(o.start,o.end));return Ms.lastIndex=0,this.source.replace(Ms,(o,i)=>Fl(r[parseInt(i,10)]||""))}_buildAnchorCache(){if(typeof this.source!="string")throw new Error("This method should only be called if the source is a string");let t=[],n=[],r=[],o=[],i,s,l,a;for(i=0,s=this.source.length;i<s;i++)l=this.source.charAt(i),t[i]=l,n[i]=l,r[i]=l,o[i]=l,l==="\\"&&i+1<s&&(a=this.source.charAt(i+1),a==="A"?(t[i+1]="￿",n[i+1]="￿",r[i+1]="A",o[i+1]="A"):a==="G"?(t[i+1]="￿",n[i+1]="G",r[i+1]="￿",o[i+1]="G"):(t[i+1]=a,n[i+1]=a,r[i+1]=a,o[i+1]=a),i++);return{A0_G0:t.join(""),A0_G1:n.join(""),A1_G0:r.join(""),A1_G1:o.join("")}}resolveAnchors(t,n){return!this.hasAnchor||!this._anchorCache||typeof this.source!="string"?this.source:t?n?this._anchorCache.A1_G1:this._anchorCache.A1_G0:n?this._anchorCache.A0_G1:this._anchorCache.A0_G0}},sr=class{_items;_hasAnchors;_cached;_anchorCache;constructor(){this._items=[],this._hasAnchors=!1,this._cached=null,this._anchorCache={A0_G0:null,A0_G1:null,A1_G0:null,A1_G1:null}}dispose(){this._disposeCaches()}_disposeCaches(){this._cached&&(this._cached.dispose(),this._cached=null),this._anchorCache.A0_G0&&(this._anchorCache.A0_G0.dispose(),this._anchorCache.A0_G0=null),this._anchorCache.A0_G1&&(this._anchorCache.A0_G1.dispose(),this._anchorCache.A0_G1=null),this._anchorCache.A1_G0&&(this._anchorCache.A1_G0.dispose(),this._anchorCache.A1_G0=null),this._anchorCache.A1_G1&&(this._anchorCache.A1_G1.dispose(),this._anchorCache.A1_G1=null)}push(e){this._items.push(e),this._hasAnchors=this._hasAnchors||e.hasAnchor}unshift(e){this._items.unshift(e),this._hasAnchors=this._hasAnchors||e.hasAnchor}length(){return this._items.length}setSource(e,t){this._items[e].source!==t&&(this._disposeCaches(),this._items[e].setSource(t))}compile(e){if(!this._cached){let t=this._items.map(n=>n.source);this._cached=new $s(e,t,this._items.map(n=>n.ruleId))}return this._cached}compileAG(e,t,n){return this._hasAnchors?t?n?(this._anchorCache.A1_G1||(this._anchorCache.A1_G1=this._resolveAnchors(e,t,n)),this._anchorCache.A1_G1):(this._anchorCache.A1_G0||(this._anchorCache.A1_G0=this._resolveAnchors(e,t,n)),this._anchorCache.A1_G0):n?(this._anchorCache.A0_G1||(this._anchorCache.A0_G1=this._resolveAnchors(e,t,n)),this._anchorCache.A0_G1):(this._anchorCache.A0_G0||(this._anchorCache.A0_G0=this._resolveAnchors(e,t,n)),this._anchorCache.A0_G0):this.compile(e)}_resolveAnchors(e,t,n){let r=this._items.map(o=>o.resolveAnchors(t,n));return new $s(e,r,this._items.map(o=>o.ruleId))}},$s=class{constructor(e,t,n){this.regExps=t,this.rules=n,this.scanner=e.createOnigScanner(t)}scanner;dispose(){typeof this.scanner.dispose=="function"&&this.scanner.dispose()}toString(){const e=[];for(let t=0,n=this.rules.length;t<n;t++)e.push("   - "+this.rules[t]+": "+this.regExps[t]);return e.join(`
`)}findNextMatchSync(e,t,n){const r=this.scanner.findNextMatchSync(e,t,n);return r?{ruleId:this.rules[r.index],captureIndices:r.captureIndices}:null}},No=class{constructor(e,t){this.languageId=e,this.tokenType=t}},Bf=class ci{_defaultAttributes;_embeddedLanguagesMatcher;constructor(t,n){this._defaultAttributes=new No(t,8),this._embeddedLanguagesMatcher=new Hf(Object.entries(n||{}))}getDefaultAttributes(){return this._defaultAttributes}getBasicScopeAttributes(t){return t===null?ci._NULL_SCOPE_METADATA:this._getBasicScopeAttributes.get(t)}static _NULL_SCOPE_METADATA=new No(0,0);_getBasicScopeAttributes=new Wl(t=>{const n=this._scopeToLanguage(t),r=this._toStandardTokenType(t);return new No(n,r)});_scopeToLanguage(t){return this._embeddedLanguagesMatcher.match(t)||0}_toStandardTokenType(t){const n=t.match(ci.STANDARD_TOKEN_TYPE_REGEXP);if(!n)return 8;switch(n[1]){case"comment":return 1;case"string":return 2;case"regex":return 3;case"meta.embedded":return 0}throw new Error("Unexpected match for standard token type!")}static STANDARD_TOKEN_TYPE_REGEXP=/\b(comment|string|regex|meta\.embedded)\b/},Hf=class{values;scopesRegExp;constructor(e){if(e.length===0)this.values=null,this.scopesRegExp=null;else{this.values=new Map(e);const t=e.map(([n,r])=>Fl(n));t.sort(),t.reverse(),this.scopesRegExp=new RegExp(`^((${t.join(")|(")}))($|\\.)`,"")}}match(e){if(!this.scopesRegExp)return;const t=e.match(this.scopesRegExp);if(t)return this.values.get(t[1])}},js=class{constructor(e,t){this.stack=e,this.stoppedEarly=t}};function Zl(e,t,n,r,o,i,s,l){const a=t.content.length;let c=!1,u=-1;if(s){const h=zf(e,t,n,r,o,i);o=h.stack,r=h.linePos,n=h.isFirstLine,u=h.anchorPosition}const d=Date.now();for(;!c;){if(l!==0&&Date.now()-d>l)return new js(o,!0);f()}return new js(o,!1);function f(){const h=Ff(e,t,n,r,o,u);if(!h){i.produce(o,a),c=!0;return}const g=h.captureIndices,S=h.matchedRuleId,E=g&&g.length>0?g[0].end>r:!1;if(S===$f){const b=o.getRule(e);i.produce(o,g[0].start),o=o.withContentNameScopesList(o.nameScopesList),jn(e,t,n,o,i,b.endCaptures,g),i.produce(o,g[0].end);const v=o;if(o=o.parent,u=v.getAnchorPos(),!E&&v.getEnterPos()===r){o=v,i.produce(o,a),c=!0;return}}else{const b=e.getRule(S);i.produce(o,g[0].start);const v=o,A=b.getName(t.content,g),O=o.contentNameScopesList.pushAttributed(A,e);if(o=o.push(S,r,u,g[0].end===a,null,O,O),b instanceof li){const H=b;jn(e,t,n,o,i,H.beginCaptures,g),i.produce(o,g[0].end),u=g[0].end;const Q=H.getContentName(t.content,g),K=O.pushAttributed(Q,e);if(o=o.withContentNameScopesList(K),H.endHasBackReferences&&(o=o.withEndRule(H.getEndWithResolvedBackReferences(t.content,g))),!E&&v.hasSameRuleAs(o)){o=o.pop(),i.produce(o,a),c=!0;return}}else if(b instanceof Kr){const H=b;jn(e,t,n,o,i,H.beginCaptures,g),i.produce(o,g[0].end),u=g[0].end;const Q=H.getContentName(t.content,g),K=O.pushAttributed(Q,e);if(o=o.withContentNameScopesList(K),H.whileHasBackReferences&&(o=o.withEndRule(H.getWhileWithResolvedBackReferences(t.content,g))),!E&&v.hasSameRuleAs(o)){o=o.pop(),i.produce(o,a),c=!0;return}}else if(jn(e,t,n,o,i,b.captures,g),i.produce(o,g[0].end),o=o.pop(),!E){o=o.safePop(),i.produce(o,a),c=!0;return}}g[0].end>r&&(r=g[0].end,n=!1)}}function zf(e,t,n,r,o,i){let s=o.beginRuleCapturedEOL?0:-1;const l=[];for(let a=o;a;a=a.pop()){const c=a.getRule(e);c instanceof Kr&&l.push({rule:c,stack:a})}for(let a=l.pop();a;a=l.pop()){const{ruleScanner:c,findOptions:u}=qf(a.rule,e,a.stack.endRule,n,r===s),d=c.findNextMatchSync(t,r,u);if(d){if(d.ruleId!==Yl){o=a.stack.pop();break}d.captureIndices&&d.captureIndices.length&&(i.produce(a.stack,d.captureIndices[0].start),jn(e,t,n,a.stack,i,a.rule.whileCaptures,d.captureIndices),i.produce(a.stack,d.captureIndices[0].end),s=d.captureIndices[0].end,d.captureIndices[0].end>r&&(r=d.captureIndices[0].end,n=!1))}else{o=a.stack.pop();break}}return{stack:o,linePos:r,anchorPosition:s,isFirstLine:n}}function Ff(e,t,n,r,o,i){const s=Wf(e,t,n,r,o,i),l=e.getInjections();if(l.length===0)return s;const a=Gf(l,e,t,n,r,o,i);if(!a)return s;if(!s)return a;const c=s.captureIndices[0].start,u=a.captureIndices[0].start;return u<c||a.priorityMatch&&u===c?a:s}function Wf(e,t,n,r,o,i){const s=o.getRule(e),{ruleScanner:l,findOptions:a}=ec(s,e,o.endRule,n,r===i),c=l.findNextMatchSync(t,r,a);return c?{captureIndices:c.captureIndices,matchedRuleId:c.ruleId}:null}function Gf(e,t,n,r,o,i,s){let l=Number.MAX_VALUE,a=null,c,u=0;const d=i.contentNameScopesList.getScopeNames();for(let f=0,h=e.length;f<h;f++){const g=e[f];if(!g.matcher(d))continue;const S=t.getRule(g.ruleId),{ruleScanner:E,findOptions:b}=ec(S,t,null,r,o===s),v=E.findNextMatchSync(n,o,b);if(!v)continue;const A=v.captureIndices[0].start;if(!(A>=l)&&(l=A,a=v.captureIndices,c=v.ruleId,u=g.priority,l===o))break}return a?{priorityMatch:u===-1,captureIndices:a,matchedRuleId:c}:null}function ec(e,t,n,r,o){return{ruleScanner:e.compileAG(t,n,r,o),findOptions:0}}function qf(e,t,n,r,o){return{ruleScanner:e.compileWhileAG(t,n,r,o),findOptions:0}}function jn(e,t,n,r,o,i,s){if(i.length===0)return;const l=t.content,a=Math.min(i.length,s.length),c=[],u=s[0].end;for(let d=0;d<a;d++){const f=i[d];if(f===null)continue;const h=s[d];if(h.length===0)continue;if(h.start>u)break;for(;c.length>0&&c[c.length-1].endPos<=h.start;)o.produceFromScopes(c[c.length-1].scopes,c[c.length-1].endPos),c.pop();if(c.length>0?o.produceFromScopes(c[c.length-1].scopes,h.start):o.produce(r,h.start),f.retokenizeCapturedWithRuleId){const S=f.getName(l,s),E=r.contentNameScopesList.pushAttributed(S,e),b=f.getContentName(l,s),v=E.pushAttributed(b,e),A=r.push(f.retokenizeCapturedWithRuleId,h.start,-1,!1,null,E,v),O=e.createOnigString(l.substring(0,h.end));Zl(e,O,n&&h.start===0,h.start,A,o,!1,0),Kl(O);continue}const g=f.getName(l,s);if(g!==null){const E=(c.length>0?c[c.length-1].scopes:r.contentNameScopesList).pushAttributed(g,e);c.push(new Kf(E,h.end))}}for(;c.length>0;)o.produceFromScopes(c[c.length-1].scopes,c[c.length-1].endPos),c.pop()}var Kf=class{scopes;endPos;constructor(e,t){this.scopes=e,this.endPos=t}};function Jf(e,t,n,r,o,i,s,l){return new Qf(e,t,n,r,o,i,s,l)}function Us(e,t,n,r,o){const i=Gr(t,Jr),s=Ql.getCompiledRuleId(n,r,o.repository);for(const l of i)e.push({debugSelector:t,matcher:l.matcher,ruleId:s,grammar:o,priority:l.priority})}function Jr(e,t){if(t.length<e.length)return!1;let n=0;return e.every(r=>{for(let o=n;o<t.length;o++)if(Yf(t[o],r))return n=o+1,!0;return!1})}function Yf(e,t){if(!e)return!1;if(e===t)return!0;const n=t.length;return e.length>n&&e.substr(0,n)===t&&e[n]==="."}var Qf=class{constructor(e,t,n,r,o,i,s,l){if(this._rootScopeName=e,this.balancedBracketSelectors=i,this._onigLib=l,this._basicScopeAttributesProvider=new Bf(n,r),this._rootId=-1,this._lastRuleId=0,this._ruleId2desc=[null],this._includedGrammars={},this._grammarRepository=s,this._grammar=Bs(t,null),this._injections=null,this._tokenTypeMatchers=[],o)for(const a of Object.keys(o)){const c=Gr(a,Jr);for(const u of c)this._tokenTypeMatchers.push({matcher:u.matcher,type:o[a]})}}_rootId;_lastRuleId;_ruleId2desc;_includedGrammars;_grammarRepository;_grammar;_injections;_basicScopeAttributesProvider;_tokenTypeMatchers;get themeProvider(){return this._grammarRepository}dispose(){for(const e of this._ruleId2desc)e&&e.dispose()}createOnigScanner(e){return this._onigLib.createOnigScanner(e)}createOnigString(e){return this._onigLib.createOnigString(e)}getMetadataForScope(e){return this._basicScopeAttributesProvider.getBasicScopeAttributes(e)}_collectInjections(){const e={lookup:o=>o===this._rootScopeName?this._grammar:this.getExternalGrammar(o),injections:o=>this._grammarRepository.injections(o)},t=[],n=this._rootScopeName,r=e.lookup(n);if(r){const o=r.injections;if(o)for(let s in o)Us(t,s,o[s],this,r);const i=this._grammarRepository.injections(n);i&&i.forEach(s=>{const l=this.getExternalGrammar(s);if(l){const a=l.injectionSelector;a&&Us(t,a,l,this,l)}})}return t.sort((o,i)=>o.priority-i.priority),t}getInjections(){return this._injections===null&&(this._injections=this._collectInjections()),this._injections}registerRule(e){const t=++this._lastRuleId,n=e(t);return this._ruleId2desc[t]=n,n}getRule(e){return this._ruleId2desc[e]}getExternalGrammar(e,t){if(this._includedGrammars[e])return this._includedGrammars[e];if(this._grammarRepository){const n=this._grammarRepository.lookup(e);if(n)return this._includedGrammars[e]=Bs(n,t&&t.$base),this._includedGrammars[e]}}tokenizeLine(e,t,n=0){const r=this._tokenize(e,t,!1,n);return{tokens:r.lineTokens.getResult(r.ruleStack,r.lineLength),ruleStack:r.ruleStack,stoppedEarly:r.stoppedEarly}}tokenizeLine2(e,t,n=0){const r=this._tokenize(e,t,!0,n);return{tokens:r.lineTokens.getBinaryResult(r.ruleStack,r.lineLength),ruleStack:r.ruleStack,stoppedEarly:r.stoppedEarly}}_tokenize(e,t,n,r){this._rootId===-1&&(this._rootId=Ql.getCompiledRuleId(this._grammar.repository.$self,this,this._grammar.repository),this.getInjections());let o;if(!t||t===ui.NULL){o=!0;const c=this._basicScopeAttributesProvider.getDefaultAttributes(),u=this.themeProvider.getDefaults(),d=Ln.set(0,c.languageId,c.tokenType,null,u.fontStyle,u.foregroundId,u.backgroundId),f=this.getRule(this._rootId).getName(null,null);let h;f?h=Gn.createRootAndLookUpScopeName(f,d,this):h=Gn.createRoot("unknown",d),t=new ui(null,this._rootId,-1,-1,!1,null,h,h)}else o=!1,t.reset();e=e+`
`;const i=this.createOnigString(e),s=i.content.length,l=new Zf(n,e,this._tokenTypeMatchers,this.balancedBracketSelectors),a=Zl(this,i,o,0,t,l,!0,r);return Kl(i),{lineLength:s,lineTokens:l,ruleStack:a.stack,stoppedEarly:a.stoppedEarly}}};function Bs(e,t){return e=gf(e),e.repository=e.repository||{},e.repository.$self={$vscodeTextmateLocation:e.$vscodeTextmateLocation,patterns:e.patterns,name:e.scopeName},e.repository.$base=t||e.repository.$self,e}var Gn=class mt{constructor(t,n,r){this.parent=t,this.scopePath=n,this.tokenAttributes=r}static fromExtension(t,n){let r=t,o=t?.scopePath??null;for(const i of n)o=Do.push(o,i.scopeNames),r=new mt(r,o,i.encodedTokenAttributes);return r}static createRoot(t,n){return new mt(null,new Do(null,t),n)}static createRootAndLookUpScopeName(t,n,r){const o=r.getMetadataForScope(t),i=new Do(null,t),s=r.themeProvider.themeMatch(i),l=mt.mergeAttributes(n,o,s);return new mt(null,i,l)}get scopeName(){return this.scopePath.scopeName}toString(){return this.getScopeNames().join(" ")}equals(t){return mt.equals(this,t)}static equals(t,n){do{if(t===n||!t&&!n)return!0;if(!t||!n||t.scopeName!==n.scopeName||t.tokenAttributes!==n.tokenAttributes)return!1;t=t.parent,n=n.parent}while(!0)}static mergeAttributes(t,n,r){let o=-1,i=0,s=0;return r!==null&&(o=r.fontStyle,i=r.foregroundId,s=r.backgroundId),Ln.set(t,n.languageId,n.tokenType,null,o,i,s)}pushAttributed(t,n){if(t===null)return this;if(t.indexOf(" ")===-1)return mt._pushAttributed(this,t,n);const r=t.split(/ /g);let o=this;for(const i of r)o=mt._pushAttributed(o,i,n);return o}static _pushAttributed(t,n,r){const o=r.getMetadataForScope(n),i=t.scopePath.push(n),s=r.themeProvider.themeMatch(i),l=mt.mergeAttributes(t.tokenAttributes,o,s);return new mt(t,i,l)}getScopeNames(){return this.scopePath.getSegments()}getExtensionIfDefined(t){const n=[];let r=this;for(;r&&r!==t;)n.push({encodedTokenAttributes:r.tokenAttributes,scopeNames:r.scopePath.getExtensionIfDefined(r.parent?.scopePath??null)}),r=r.parent;return r===t?n.reverse():void 0}},ui=class Kt{constructor(t,n,r,o,i,s,l,a){this.parent=t,this.ruleId=n,this.beginRuleCapturedEOL=i,this.endRule=s,this.nameScopesList=l,this.contentNameScopesList=a,this.depth=this.parent?this.parent.depth+1:1,this._enterPos=r,this._anchorPos=o}_stackElementBrand=void 0;static NULL=new Kt(null,0,0,0,!1,null,null,null);_enterPos;_anchorPos;depth;equals(t){return t===null?!1:Kt._equals(this,t)}static _equals(t,n){return t===n?!0:this._structuralEquals(t,n)?Gn.equals(t.contentNameScopesList,n.contentNameScopesList):!1}static _structuralEquals(t,n){do{if(t===n||!t&&!n)return!0;if(!t||!n||t.depth!==n.depth||t.ruleId!==n.ruleId||t.endRule!==n.endRule)return!1;t=t.parent,n=n.parent}while(!0)}clone(){return this}static _reset(t){for(;t;)t._enterPos=-1,t._anchorPos=-1,t=t.parent}reset(){Kt._reset(this)}pop(){return this.parent}safePop(){return this.parent?this.parent:this}push(t,n,r,o,i,s,l){return new Kt(this,t,n,r,o,i,s,l)}getEnterPos(){return this._enterPos}getAnchorPos(){return this._anchorPos}getRule(t){return t.getRule(this.ruleId)}toString(){const t=[];return this._writeString(t,0),"["+t.join(",")+"]"}_writeString(t,n){return this.parent&&(n=this.parent._writeString(t,n)),t[n++]=`(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`,n}withContentNameScopesList(t){return this.contentNameScopesList===t?this:this.parent.push(this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,this.endRule,this.nameScopesList,t)}withEndRule(t){return this.endRule===t?this:new Kt(this.parent,this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,t,this.nameScopesList,this.contentNameScopesList)}hasSameRuleAs(t){let n=this;for(;n&&n._enterPos===t._enterPos;){if(n.ruleId===t.ruleId)return!0;n=n.parent}return!1}toStateStackFrame(){return{ruleId:this.ruleId,beginRuleCapturedEOL:this.beginRuleCapturedEOL,endRule:this.endRule,nameScopesList:this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList??null)??[],contentNameScopesList:this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList)??[]}}static pushFrame(t,n){const r=Gn.fromExtension(t?.nameScopesList??null,n.nameScopesList);return new Kt(t,n.ruleId,n.enterPos??-1,n.anchorPos??-1,n.beginRuleCapturedEOL,n.endRule,r,Gn.fromExtension(r,n.contentNameScopesList))}},Xf=class{balancedBracketScopes;unbalancedBracketScopes;allowAny=!1;constructor(e,t){this.balancedBracketScopes=e.flatMap(n=>n==="*"?(this.allowAny=!0,[]):Gr(n,Jr).map(r=>r.matcher)),this.unbalancedBracketScopes=t.flatMap(n=>Gr(n,Jr).map(r=>r.matcher))}get matchesAlways(){return this.allowAny&&this.unbalancedBracketScopes.length===0}get matchesNever(){return this.balancedBracketScopes.length===0&&!this.allowAny}match(e){for(const t of this.unbalancedBracketScopes)if(t(e))return!1;for(const t of this.balancedBracketScopes)if(t(e))return!0;return this.allowAny}},Zf=class{constructor(e,t,n,r){this.balancedBracketSelectors=r,this._emitBinaryTokens=e,this._tokenTypeOverrides=n,this._lineText=null,this._tokens=[],this._binaryTokens=[],this._lastTokenEndIndex=0}_emitBinaryTokens;_lineText;_tokens;_binaryTokens;_lastTokenEndIndex;_tokenTypeOverrides;produce(e,t){this.produceFromScopes(e.contentNameScopesList,t)}produceFromScopes(e,t){if(this._lastTokenEndIndex>=t)return;if(this._emitBinaryTokens){let r=e?.tokenAttributes??0,o=!1;if(this.balancedBracketSelectors?.matchesAlways&&(o=!0),this._tokenTypeOverrides.length>0||this.balancedBracketSelectors&&!this.balancedBracketSelectors.matchesAlways&&!this.balancedBracketSelectors.matchesNever){const i=e?.getScopeNames()??[];for(const s of this._tokenTypeOverrides)s.matcher(i)&&(r=Ln.set(r,0,s.type,null,-1,0,0));this.balancedBracketSelectors&&(o=this.balancedBracketSelectors.match(i))}if(o&&(r=Ln.set(r,0,8,o,-1,0,0)),this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-1]===r){this._lastTokenEndIndex=t;return}this._binaryTokens.push(this._lastTokenEndIndex),this._binaryTokens.push(r),this._lastTokenEndIndex=t;return}const n=e?.getScopeNames()??[];this._tokens.push({startIndex:this._lastTokenEndIndex,endIndex:t,scopes:n}),this._lastTokenEndIndex=t}getResult(e,t){return this._tokens.length>0&&this._tokens[this._tokens.length-1].startIndex===t-1&&this._tokens.pop(),this._tokens.length===0&&(this._lastTokenEndIndex=-1,this.produce(e,t),this._tokens[this._tokens.length-1].startIndex=0),this._tokens}getBinaryResult(e,t){this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-2]===t-1&&(this._binaryTokens.pop(),this._binaryTokens.pop()),this._binaryTokens.length===0&&(this._lastTokenEndIndex=-1,this.produce(e,t),this._binaryTokens[this._binaryTokens.length-2]=0);const n=new Uint32Array(this._binaryTokens.length);for(let r=0,o=this._binaryTokens.length;r<o;r++)n[r]=this._binaryTokens[r];return n}},eh=class{constructor(e,t){this._onigLib=t,this._theme=e}_grammars=new Map;_rawGrammars=new Map;_injectionGrammars=new Map;_theme;dispose(){for(const e of this._grammars.values())e.dispose()}setTheme(e){this._theme=e}getColorMap(){return this._theme.getColorMap()}addGrammar(e,t){this._rawGrammars.set(e.scopeName,e),t&&this._injectionGrammars.set(e.scopeName,t)}lookup(e){return this._rawGrammars.get(e)}injections(e){return this._injectionGrammars.get(e)}getDefaults(){return this._theme.getDefaults()}themeMatch(e){return this._theme.match(e)}grammarForScopeName(e,t,n,r,o){if(!this._grammars.has(e)){let i=this._rawGrammars.get(e);if(!i)return null;this._grammars.set(e,Jf(e,i,t,n,r,o,this,this._onigLib))}return this._grammars.get(e)}},th=class{_options;_syncRegistry;_ensureGrammarCache;constructor(t){this._options=t,this._syncRegistry=new eh(Wr.createFromRawTheme(t.theme,t.colorMap),t.onigLib),this._ensureGrammarCache=new Map}dispose(){this._syncRegistry.dispose()}setTheme(t,n){this._syncRegistry.setTheme(Wr.createFromRawTheme(t,n))}getColorMap(){return this._syncRegistry.getColorMap()}loadGrammarWithEmbeddedLanguages(t,n,r){return this.loadGrammarWithConfiguration(t,n,{embeddedLanguages:r})}loadGrammarWithConfiguration(t,n,r){return this._loadGrammar(t,n,r.embeddedLanguages,r.tokenTypes,new Xf(r.balancedBracketSelectors||[],r.unbalancedBracketSelectors||[]))}loadGrammar(t){return this._loadGrammar(t,0,null,null,null)}_loadGrammar(t,n,r,o,i){const s=new xf(this._syncRegistry,t);for(;s.Q.length>0;)s.Q.map(l=>this._loadSingleGrammar(l.scopeName)),s.processQueue();return this._grammarForScopeName(t,n,r,o,i)}_loadSingleGrammar(t){this._ensureGrammarCache.has(t)||(this._doLoadSingleGrammar(t),this._ensureGrammarCache.set(t,!0))}_doLoadSingleGrammar(t){const n=this._options.loadGrammar(t);if(n){const r=typeof this._options.getInjections=="function"?this._options.getInjections(t):void 0;this._syncRegistry.addGrammar(n,r)}}addGrammar(t,n=[],r=0,o=null){return this._syncRegistry.addGrammar(t,n),this._grammarForScopeName(t.scopeName,r,o)}_grammarForScopeName(t,n=0,r=null,o=null,i=null){return this._syncRegistry.grammarForScopeName(t,n,r,o,i)}},di=ui.NULL;const nh=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"];class yr{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}yr.prototype.normal={};yr.prototype.property={};yr.prototype.space=void 0;function tc(e,t){const n={},r={};for(const o of e)Object.assign(n,o.property),Object.assign(r,o.normal);return new yr(n,r,t)}function fi(e){return e.toLowerCase()}class Qe{constructor(t,n){this.attribute=n,this.property=t}}Qe.prototype.attribute="";Qe.prototype.booleanish=!1;Qe.prototype.boolean=!1;Qe.prototype.commaOrSpaceSeparated=!1;Qe.prototype.commaSeparated=!1;Qe.prototype.defined=!1;Qe.prototype.mustUseProperty=!1;Qe.prototype.number=!1;Qe.prototype.overloadedBoolean=!1;Qe.prototype.property="";Qe.prototype.spaceSeparated=!1;Qe.prototype.space=void 0;let rh=0;const Y=nn(),Te=nn(),hi=nn(),x=nn(),de=nn(),En=nn(),et=nn();function nn(){return 2**++rh}const pi=Object.freeze(Object.defineProperty({__proto__:null,boolean:Y,booleanish:Te,commaOrSpaceSeparated:et,commaSeparated:En,number:x,overloadedBoolean:hi,spaceSeparated:de},Symbol.toStringTag,{value:"Module"})),Mo=Object.keys(pi);class Bi extends Qe{constructor(t,n,r,o){let i=-1;if(super(t,n),Hs(this,"space",o),typeof r=="number")for(;++i<Mo.length;){const s=Mo[i];Hs(this,Mo[i],(r&pi[s])===pi[s])}}}Bi.prototype.defined=!0;function Hs(e,t,n){n&&(e[t]=n)}function xn(e){const t={},n={};for(const[r,o]of Object.entries(e.properties)){const i=new Bi(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),t[r]=i,n[fi(r)]=r,n[fi(i.attribute)]=r}return new yr(t,n,e.space)}const nc=xn({properties:{ariaActiveDescendant:null,ariaAtomic:Te,ariaAutoComplete:null,ariaBusy:Te,ariaChecked:Te,ariaColCount:x,ariaColIndex:x,ariaColSpan:x,ariaControls:de,ariaCurrent:null,ariaDescribedBy:de,ariaDetails:null,ariaDisabled:Te,ariaDropEffect:de,ariaErrorMessage:null,ariaExpanded:Te,ariaFlowTo:de,ariaGrabbed:Te,ariaHasPopup:null,ariaHidden:Te,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:de,ariaLevel:x,ariaLive:null,ariaModal:Te,ariaMultiLine:Te,ariaMultiSelectable:Te,ariaOrientation:null,ariaOwns:de,ariaPlaceholder:null,ariaPosInSet:x,ariaPressed:Te,ariaReadOnly:Te,ariaRelevant:null,ariaRequired:Te,ariaRoleDescription:de,ariaRowCount:x,ariaRowIndex:x,ariaRowSpan:x,ariaSelected:Te,ariaSetSize:x,ariaSort:null,ariaValueMax:x,ariaValueMin:x,ariaValueNow:x,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function rc(e,t){return t in e?e[t]:t}function oc(e,t){return rc(e,t.toLowerCase())}const oh=xn({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:En,acceptCharset:de,accessKey:de,action:null,allow:null,allowFullScreen:Y,allowPaymentRequest:Y,allowUserMedia:Y,alt:null,as:null,async:Y,autoCapitalize:null,autoComplete:de,autoFocus:Y,autoPlay:Y,blocking:de,capture:null,charSet:null,checked:Y,cite:null,className:de,cols:x,colSpan:null,content:null,contentEditable:Te,controls:Y,controlsList:de,coords:x|En,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Y,defer:Y,dir:null,dirName:null,disabled:Y,download:hi,draggable:Te,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Y,formTarget:null,headers:de,height:x,hidden:hi,high:x,href:null,hrefLang:null,htmlFor:de,httpEquiv:de,id:null,imageSizes:null,imageSrcSet:null,inert:Y,inputMode:null,integrity:null,is:null,isMap:Y,itemId:null,itemProp:de,itemRef:de,itemScope:Y,itemType:de,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Y,low:x,manifest:null,max:null,maxLength:x,media:null,method:null,min:null,minLength:x,multiple:Y,muted:Y,name:null,nonce:null,noModule:Y,noValidate:Y,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Y,optimum:x,pattern:null,ping:de,placeholder:null,playsInline:Y,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Y,referrerPolicy:null,rel:de,required:Y,reversed:Y,rows:x,rowSpan:x,sandbox:de,scope:null,scoped:Y,seamless:Y,selected:Y,shadowRootClonable:Y,shadowRootDelegatesFocus:Y,shadowRootMode:null,shape:null,size:x,sizes:null,slot:null,span:x,spellCheck:Te,src:null,srcDoc:null,srcLang:null,srcSet:null,start:x,step:null,style:null,tabIndex:x,target:null,title:null,translate:null,type:null,typeMustMatch:Y,useMap:null,value:Te,width:x,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:de,axis:null,background:null,bgColor:null,border:x,borderColor:null,bottomMargin:x,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Y,declare:Y,event:null,face:null,frame:null,frameBorder:null,hSpace:x,leftMargin:x,link:null,longDesc:null,lowSrc:null,marginHeight:x,marginWidth:x,noResize:Y,noHref:Y,noShade:Y,noWrap:Y,object:null,profile:null,prompt:null,rev:null,rightMargin:x,rules:null,scheme:null,scrolling:Te,standby:null,summary:null,text:null,topMargin:x,valueType:null,version:null,vAlign:null,vLink:null,vSpace:x,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Y,disableRemotePlayback:Y,prefix:null,property:null,results:x,security:null,unselectable:null},space:"html",transform:oc}),ih=xn({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:et,accentHeight:x,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:x,amplitude:x,arabicForm:null,ascent:x,attributeName:null,attributeType:null,azimuth:x,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:x,by:null,calcMode:null,capHeight:x,className:de,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:x,diffuseConstant:x,direction:null,display:null,dur:null,divisor:x,dominantBaseline:null,download:Y,dx:null,dy:null,edgeMode:null,editable:null,elevation:x,enableBackground:null,end:null,event:null,exponent:x,externalResourcesRequired:null,fill:null,fillOpacity:x,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:En,g2:En,glyphName:En,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:x,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:x,horizOriginX:x,horizOriginY:x,id:null,ideographic:x,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:x,k:x,k1:x,k2:x,k3:x,k4:x,kernelMatrix:et,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:x,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:x,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:x,overlineThickness:x,paintOrder:null,panose1:null,path:null,pathLength:x,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:de,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:x,pointsAtY:x,pointsAtZ:x,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:et,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:et,rev:et,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:et,requiredFeatures:et,requiredFonts:et,requiredFormats:et,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:x,specularExponent:x,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:x,strikethroughThickness:x,string:null,stroke:null,strokeDashArray:et,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:x,strokeOpacity:x,strokeWidth:null,style:null,surfaceScale:x,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:et,tabIndex:x,tableValues:null,target:null,targetX:x,targetY:x,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:et,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:x,underlineThickness:x,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:x,values:null,vAlphabetic:x,vMathematical:x,vectorEffect:null,vHanging:x,vIdeographic:x,version:null,vertAdvY:x,vertOriginX:x,vertOriginY:x,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:x,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:rc}),ic=xn({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),sc=xn({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:oc}),ac=xn({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),sh=/[A-Z]/g,zs=/-[a-z]/g,ah=/^data[-\w.:]+$/i;function lh(e,t){const n=fi(t);let r=t,o=Qe;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&ah.test(t)){if(t.charAt(4)==="-"){const i=t.slice(5).replace(zs,uh);r="data"+i.charAt(0).toUpperCase()+i.slice(1)}else{const i=t.slice(4);if(!zs.test(i)){let s=i.replace(sh,ch);s.charAt(0)!=="-"&&(s="-"+s),t="data"+s}}o=Bi}return new o(r,t)}function ch(e){return"-"+e.toLowerCase()}function uh(e){return e.charAt(1).toUpperCase()}const dh=tc([nc,oh,ic,sc,ac],"html"),lc=tc([nc,ih,ic,sc,ac],"svg"),Fs={}.hasOwnProperty;function fh(e,t){const n=t||{};function r(o,...i){let s=r.invalid;const l=r.handlers;if(o&&Fs.call(o,e)){const a=String(o[e]);s=Fs.call(l,a)?l[a]:r.unknown}if(s)return s.call(this,o,...i)}return r.handlers=n.handlers||{},r.invalid=n.invalid,r.unknown=n.unknown,r}const hh=/["&'<>`]/g,ph=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,mh=/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,gh=/[|\\{}()[\]^$+*?.]/g,Ws=new WeakMap;function _h(e,t){if(e=e.replace(t.subset?yh(t.subset):hh,r),t.subset||t.escapeOnly)return e;return e.replace(ph,n).replace(mh,r);function n(o,i,s){return t.format((o.charCodeAt(0)-55296)*1024+o.charCodeAt(1)-56320+65536,s.charCodeAt(i+2),t)}function r(o,i,s){return t.format(o.charCodeAt(0),s.charCodeAt(i+1),t)}}function yh(e){let t=Ws.get(e);return t||(t=vh(e),Ws.set(e,t)),t}function vh(e){const t=[];let n=-1;for(;++n<e.length;)t.push(e[n].replace(gh,"\\$&"));return new RegExp("(?:"+t.join("|")+")","g")}const bh=/[\dA-Fa-f]/;function Sh(e,t,n){const r="&#x"+e.toString(16).toUpperCase();return n&&t&&!bh.test(String.fromCharCode(t))?r:r+";"}const Eh=/\d/;function wh(e,t,n){const r="&#"+String(e);return n&&t&&!Eh.test(String.fromCharCode(t))?r:r+";"}const Ah=["AElig","AMP","Aacute","Acirc","Agrave","Aring","Atilde","Auml","COPY","Ccedil","ETH","Eacute","Ecirc","Egrave","Euml","GT","Iacute","Icirc","Igrave","Iuml","LT","Ntilde","Oacute","Ocirc","Ograve","Oslash","Otilde","Ouml","QUOT","REG","THORN","Uacute","Ucirc","Ugrave","Uuml","Yacute","aacute","acirc","acute","aelig","agrave","amp","aring","atilde","auml","brvbar","ccedil","cedil","cent","copy","curren","deg","divide","eacute","ecirc","egrave","eth","euml","frac12","frac14","frac34","gt","iacute","icirc","iexcl","igrave","iquest","iuml","laquo","lt","macr","micro","middot","nbsp","not","ntilde","oacute","ocirc","ograve","ordf","ordm","oslash","otilde","ouml","para","plusmn","pound","quot","raquo","reg","sect","shy","sup1","sup2","sup3","szlig","thorn","times","uacute","ucirc","ugrave","uml","uuml","yacute","yen","yuml"],Vo={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"},Lh=["cent","copy","divide","gt","lt","not","para","times"],cc={}.hasOwnProperty,mi={};let wr;for(wr in Vo)cc.call(Vo,wr)&&(mi[Vo[wr]]=wr);const Ph=/[^\dA-Za-z]/;function Th(e,t,n,r){const o=String.fromCharCode(e);if(cc.call(mi,o)){const i=mi[o],s="&"+i;return n&&Ah.includes(i)&&!Lh.includes(i)&&(!r||t&&t!==61&&Ph.test(String.fromCharCode(t)))?s:s+";"}return""}function Rh(e,t,n){let r=Sh(e,t,n.omitOptionalSemicolons),o;if((n.useNamedReferences||n.useShortestReferences)&&(o=Th(e,t,n.omitOptionalSemicolons,n.attribute)),(n.useShortestReferences||!o)&&n.useShortestReferences){const i=wh(e,t,n.omitOptionalSemicolons);i.length<r.length&&(r=i)}return o&&(!n.useShortestReferences||o.length<r.length)?o:r}function wn(e,t){return _h(e,Object.assign({format:Rh},t))}const Ch=/^>|^->|<!--|-->|--!>|<!-$/g,xh=[">"],Oh=["<",">"];function Ih(e,t,n,r){return r.settings.bogusComments?"<?"+wn(e.value,Object.assign({},r.settings.characterReferences,{subset:xh}))+">":"<!--"+e.value.replace(Ch,o)+"-->";function o(i){return wn(i,Object.assign({},r.settings.characterReferences,{subset:Oh}))}}function kh(e,t,n,r){return"<!"+(r.settings.upperDoctype?"DOCTYPE":"doctype")+(r.settings.tightDoctype?"":" ")+"html>"}function Gs(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,o=n.indexOf(t);for(;o!==-1;)r++,o=n.indexOf(t,o+t.length);return r}function Dh(e,t){const n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}function Nh(e){return e.join(" ").trim()}const Mh=/[ \t\n\f\r]/g;function Hi(e){return typeof e=="object"?e.type==="text"?qs(e.value):!1:qs(e)}function qs(e){return e.replace(Mh,"")===""}const Oe=dc(1),uc=dc(-1),Vh=[];function dc(e){return t;function t(n,r,o){const i=n?n.children:Vh;let s=(r||0)+e,l=i[s];if(!o)for(;l&&Hi(l);)s+=e,l=i[s];return l}}const $h={}.hasOwnProperty;function fc(e){return t;function t(n,r,o){return $h.call(e,n.tagName)&&e[n.tagName](n,r,o)}}const zi=fc({body:Uh,caption:$o,colgroup:$o,dd:Fh,dt:zh,head:$o,html:jh,li:Hh,optgroup:Wh,option:Gh,p:Bh,rp:Ks,rt:Ks,tbody:Kh,td:Js,tfoot:Jh,th:Js,thead:qh,tr:Yh});function $o(e,t,n){const r=Oe(n,t,!0);return!r||r.type!=="comment"&&!(r.type==="text"&&Hi(r.value.charAt(0)))}function jh(e,t,n){const r=Oe(n,t);return!r||r.type!=="comment"}function Uh(e,t,n){const r=Oe(n,t);return!r||r.type!=="comment"}function Bh(e,t,n){const r=Oe(n,t);return r?r.type==="element"&&(r.tagName==="address"||r.tagName==="article"||r.tagName==="aside"||r.tagName==="blockquote"||r.tagName==="details"||r.tagName==="div"||r.tagName==="dl"||r.tagName==="fieldset"||r.tagName==="figcaption"||r.tagName==="figure"||r.tagName==="footer"||r.tagName==="form"||r.tagName==="h1"||r.tagName==="h2"||r.tagName==="h3"||r.tagName==="h4"||r.tagName==="h5"||r.tagName==="h6"||r.tagName==="header"||r.tagName==="hgroup"||r.tagName==="hr"||r.tagName==="main"||r.tagName==="menu"||r.tagName==="nav"||r.tagName==="ol"||r.tagName==="p"||r.tagName==="pre"||r.tagName==="section"||r.tagName==="table"||r.tagName==="ul"):!n||!(n.type==="element"&&(n.tagName==="a"||n.tagName==="audio"||n.tagName==="del"||n.tagName==="ins"||n.tagName==="map"||n.tagName==="noscript"||n.tagName==="video"))}function Hh(e,t,n){const r=Oe(n,t);return!r||r.type==="element"&&r.tagName==="li"}function zh(e,t,n){const r=Oe(n,t);return!!(r&&r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd"))}function Fh(e,t,n){const r=Oe(n,t);return!r||r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd")}function Ks(e,t,n){const r=Oe(n,t);return!r||r.type==="element"&&(r.tagName==="rp"||r.tagName==="rt")}function Wh(e,t,n){const r=Oe(n,t);return!r||r.type==="element"&&r.tagName==="optgroup"}function Gh(e,t,n){const r=Oe(n,t);return!r||r.type==="element"&&(r.tagName==="option"||r.tagName==="optgroup")}function qh(e,t,n){const r=Oe(n,t);return!!(r&&r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot"))}function Kh(e,t,n){const r=Oe(n,t);return!r||r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot")}function Jh(e,t,n){return!Oe(n,t)}function Yh(e,t,n){const r=Oe(n,t);return!r||r.type==="element"&&r.tagName==="tr"}function Js(e,t,n){const r=Oe(n,t);return!r||r.type==="element"&&(r.tagName==="td"||r.tagName==="th")}const Qh=fc({body:ep,colgroup:tp,head:Zh,html:Xh,tbody:np});function Xh(e){const t=Oe(e,-1);return!t||t.type!=="comment"}function Zh(e){const t=new Set;for(const r of e.children)if(r.type==="element"&&(r.tagName==="base"||r.tagName==="title")){if(t.has(r.tagName))return!1;t.add(r.tagName)}const n=e.children[0];return!n||n.type==="element"}function ep(e){const t=Oe(e,-1,!0);return!t||t.type!=="comment"&&!(t.type==="text"&&Hi(t.value.charAt(0)))&&!(t.type==="element"&&(t.tagName==="meta"||t.tagName==="link"||t.tagName==="script"||t.tagName==="style"||t.tagName==="template"))}function tp(e,t,n){const r=uc(n,t),o=Oe(e,-1,!0);return n&&r&&r.type==="element"&&r.tagName==="colgroup"&&zi(r,n.children.indexOf(r),n)?!1:!!(o&&o.type==="element"&&o.tagName==="col")}function np(e,t,n){const r=uc(n,t),o=Oe(e,-1);return n&&r&&r.type==="element"&&(r.tagName==="thead"||r.tagName==="tbody")&&zi(r,n.children.indexOf(r),n)?!1:!!(o&&o.type==="element"&&o.tagName==="tr")}const Ar={name:[[`	
\f\r &/=>`.split(""),`	
\f\r "&'/=>\``.split("")],[`\0	
\f\r "&'/<=>`.split(""),`\0	
\f\r "&'/<=>\``.split("")]],unquoted:[[`	
\f\r &>`.split(""),`\0	
\f\r "&'<=>\``.split("")],[`\0	
\f\r "&'<=>\``.split(""),`\0	
\f\r "&'<=>\``.split("")]],single:[["&'".split(""),"\"&'`".split("")],["\0&'".split(""),"\0\"&'`".split("")]],double:[['"&'.split(""),"\"&'`".split("")],['\0"&'.split(""),"\0\"&'`".split("")]]};function rp(e,t,n,r){const o=r.schema,i=o.space==="svg"?!1:r.settings.omitOptionalTags;let s=o.space==="svg"?r.settings.closeEmptyElements:r.settings.voids.includes(e.tagName.toLowerCase());const l=[];let a;o.space==="html"&&e.tagName==="svg"&&(r.schema=lc);const c=op(r,e.properties),u=r.all(o.space==="html"&&e.tagName==="template"?e.content:e);return r.schema=o,u&&(s=!1),(c||!i||!Qh(e,t,n))&&(l.push("<",e.tagName,c?" "+c:""),s&&(o.space==="svg"||r.settings.closeSelfClosing)&&(a=c.charAt(c.length-1),(!r.settings.tightSelfClosing||a==="/"||a&&a!=='"'&&a!=="'")&&l.push(" "),l.push("/")),l.push(">")),l.push(u),!s&&(!i||!zi(e,t,n))&&l.push("</"+e.tagName+">"),l.join("")}function op(e,t){const n=[];let r=-1,o;if(t){for(o in t)if(t[o]!==null&&t[o]!==void 0){const i=ip(e,o,t[o]);i&&n.push(i)}}for(;++r<n.length;){const i=e.settings.tightAttributes?n[r].charAt(n[r].length-1):void 0;r!==n.length-1&&i!=='"'&&i!=="'"&&(n[r]+=" ")}return n.join("")}function ip(e,t,n){const r=lh(e.schema,t),o=e.settings.allowParseErrors&&e.schema.space==="html"?0:1,i=e.settings.allowDangerousCharacters?0:1;let s=e.quote,l;if(r.overloadedBoolean&&(n===r.attribute||n==="")?n=!0:(r.boolean||r.overloadedBoolean)&&(typeof n!="string"||n===r.attribute||n==="")&&(n=!!n),n==null||n===!1||typeof n=="number"&&Number.isNaN(n))return"";const a=wn(r.attribute,Object.assign({},e.settings.characterReferences,{subset:Ar.name[o][i]}));return n===!0||(n=Array.isArray(n)?(r.commaSeparated?Dh:Nh)(n,{padLeft:!e.settings.tightCommaSeparatedLists}):String(n),e.settings.collapseEmptyAttributes&&!n)?a:(e.settings.preferUnquoted&&(l=wn(n,Object.assign({},e.settings.characterReferences,{attribute:!0,subset:Ar.unquoted[o][i]}))),l!==n&&(e.settings.quoteSmart&&Gs(n,s)>Gs(n,e.alternative)&&(s=e.alternative),l=s+wn(n,Object.assign({},e.settings.characterReferences,{subset:(s==="'"?Ar.single:Ar.double)[o][i],attribute:!0}))+s),a+(l&&"="+l))}const sp=["<","&"];function hc(e,t,n,r){return n&&n.type==="element"&&(n.tagName==="script"||n.tagName==="style")?e.value:wn(e.value,Object.assign({},r.settings.characterReferences,{subset:sp}))}function ap(e,t,n,r){return r.settings.allowDangerousHtml?e.value:hc(e,t,n,r)}function lp(e,t,n,r){return r.all(e)}const cp=fh("type",{invalid:up,unknown:dp,handlers:{comment:Ih,doctype:kh,element:rp,raw:ap,root:lp,text:hc}});function up(e){throw new Error("Expected node, not `"+e+"`")}function dp(e){const t=e;throw new Error("Cannot compile unknown node `"+t.type+"`")}const fp={},hp={},pp=[];function mp(e,t){const n=t||fp,r=n.quote||'"',o=r==='"'?"'":'"';if(r!=='"'&&r!=="'")throw new Error("Invalid quote `"+r+"`, expected `'` or `\"`");return{one:gp,all:_p,settings:{omitOptionalTags:n.omitOptionalTags||!1,allowParseErrors:n.allowParseErrors||!1,allowDangerousCharacters:n.allowDangerousCharacters||!1,quoteSmart:n.quoteSmart||!1,preferUnquoted:n.preferUnquoted||!1,tightAttributes:n.tightAttributes||!1,upperDoctype:n.upperDoctype||!1,tightDoctype:n.tightDoctype||!1,bogusComments:n.bogusComments||!1,tightCommaSeparatedLists:n.tightCommaSeparatedLists||!1,tightSelfClosing:n.tightSelfClosing||!1,collapseEmptyAttributes:n.collapseEmptyAttributes||!1,allowDangerousHtml:n.allowDangerousHtml||!1,voids:n.voids||nh,characterReferences:n.characterReferences||hp,closeSelfClosing:n.closeSelfClosing||!1,closeEmptyElements:n.closeEmptyElements||!1},schema:n.space==="svg"?lc:dh,quote:r,alternative:o}.one(Array.isArray(e)?{type:"root",children:e}:e,void 0,void 0)}function gp(e,t,n){return cp(e,t,n,this)}function _p(e){const t=[],n=e&&e.children||pp;let r=-1;for(;++r<n.length;)t[r]=this.one(n[r],r,e);return t.join("")}function Yr(e,t){const n=typeof e=="string"?{}:{...e.colorReplacements},r=typeof e=="string"?e:e.name;for(const[o,i]of Object.entries(t?.colorReplacements||{}))typeof i=="string"?n[o]=i:o===r&&Object.assign(n,i);return n}function Ht(e,t){return e&&(t?.[e?.toLowerCase()]||e)}function yp(e){return Array.isArray(e)?e:[e]}async function pc(e){return Promise.resolve(typeof e=="function"?e():e).then(t=>t.default||t)}function Fi(e){return!e||["plaintext","txt","text","plain"].includes(e)}function mc(e){return e==="ansi"||Fi(e)}function Wi(e){return e==="none"}function gc(e){return Wi(e)}function _c(e,t){if(!t)return e;e.properties||={},e.properties.class||=[],typeof e.properties.class=="string"&&(e.properties.class=e.properties.class.split(/\s+/g)),Array.isArray(e.properties.class)||(e.properties.class=[]);const n=Array.isArray(t)?t:t.split(/\s+/g);for(const r of n)r&&!e.properties.class.includes(r)&&e.properties.class.push(r);return e}function mo(e,t=!1){const n=e.split(/(\r?\n)/g);let r=0;const o=[];for(let i=0;i<n.length;i+=2){const s=t?n[i]+(n[i+1]||""):n[i];o.push([s,r]),r+=n[i].length,r+=n[i+1]?.length||0}return o}function vp(e){const t=mo(e,!0).map(([o])=>o);function n(o){if(o===e.length)return{line:t.length-1,character:t[t.length-1].length};let i=o,s=0;for(const l of t){if(i<l.length)break;i-=l.length,s++}return{line:s,character:i}}function r(o,i){let s=0;for(let l=0;l<o;l++)s+=t[l].length;return s+=i,s}return{lines:t,indexToPos:n,posToIndex:r}}const Gi="light-dark()",bp=["color","background-color"];function Sp(e,t){let n=0;const r=[];for(const o of t)o>n&&r.push({...e,content:e.content.slice(n,o),offset:e.offset+n}),n=o;return n<e.content.length&&r.push({...e,content:e.content.slice(n),offset:e.offset+n}),r}function Ep(e,t){const n=Array.from(t instanceof Set?t:new Set(t)).sort((r,o)=>r-o);return n.length?e.map(r=>r.flatMap(o=>{const i=n.filter(s=>o.offset<s&&s<o.offset+o.content.length).map(s=>s-o.offset).sort((s,l)=>s-l);return i.length?Sp(o,i):o})):e}function wp(e,t,n,r,o="css-vars"){const i={content:e.content,explanation:e.explanation,offset:e.offset},s=t.map(u=>Qr(e.variants[u])),l=new Set(s.flatMap(u=>Object.keys(u))),a={},c=(u,d)=>{const f=d==="color"?"":d==="background-color"?"-bg":`-${d}`;return n+t[u]+(d==="color"?"":f)};return s.forEach((u,d)=>{for(const f of l){const h=u[f]||"inherit";if(d===0&&r&&bp.includes(f))if(r===Gi&&s.length>1){const g=t.findIndex(v=>v==="light"),S=t.findIndex(v=>v==="dark");if(g===-1||S===-1)throw new Re('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');const E=s[g][f]||"inherit",b=s[S][f]||"inherit";a[f]=`light-dark(${E}, ${b})`,o==="css-vars"&&(a[c(d,f)]=h)}else a[f]=h;else o==="css-vars"&&(a[c(d,f)]=h)}}),i.htmlStyle=a,i}function Qr(e){const t={};if(e.color&&(t.color=e.color),e.bgColor&&(t["background-color"]=e.bgColor),e.fontStyle){e.fontStyle&Ue.Italic&&(t["font-style"]="italic"),e.fontStyle&Ue.Bold&&(t["font-weight"]="bold");const n=[];e.fontStyle&Ue.Underline&&n.push("underline"),e.fontStyle&Ue.Strikethrough&&n.push("line-through"),n.length&&(t["text-decoration"]=n.join(" "))}return t}function gi(e){return typeof e=="string"?e:Object.entries(e).map(([t,n])=>`${t}:${n}`).join(";")}const yc=new WeakMap;function go(e,t){yc.set(e,t)}function ar(e){return yc.get(e)}class On{_stacks={};lang;get themes(){return Object.keys(this._stacks)}get theme(){return this.themes[0]}get _stack(){return this._stacks[this.theme]}static initial(t,n){return new On(Object.fromEntries(yp(n).map(r=>[r,di])),t)}constructor(...t){if(t.length===2){const[n,r]=t;this.lang=r,this._stacks=n}else{const[n,r,o]=t;this.lang=r,this._stacks={[o]:n}}}getInternalStack(t=this.theme){return this._stacks[t]}getScopes(t=this.theme){return Ap(this._stacks[t])}toJSON(){return{lang:this.lang,theme:this.theme,themes:this.themes,scopes:this.getScopes()}}}function Ap(e){const t=[],n=new Set;function r(o){if(n.has(o))return;n.add(o);const i=o?.nameScopesList?.scopeName;i&&t.push(i),o.parent&&r(o.parent)}return r(e),t}function Lp(e,t){if(!(e instanceof On))throw new Re("Invalid grammar state");return e.getInternalStack(t)}function Pp(){const e=new WeakMap;function t(n){if(!e.has(n.meta)){let r=function(s){if(typeof s=="number"){if(s<0||s>n.source.length)throw new Re(`Invalid decoration offset: ${s}. Code length: ${n.source.length}`);return{...o.indexToPos(s),offset:s}}else{const l=o.lines[s.line];if(l===void 0)throw new Re(`Invalid decoration position ${JSON.stringify(s)}. Lines length: ${o.lines.length}`);let a=s.character;if(a<0&&(a=l.length+a),a<0||a>l.length)throw new Re(`Invalid decoration position ${JSON.stringify(s)}. Line ${s.line} length: ${l.length}`);return{...s,character:a,offset:o.posToIndex(s.line,a)}}};const o=vp(n.source),i=(n.options.decorations||[]).map(s=>({...s,start:r(s.start),end:r(s.end)}));Tp(i),e.set(n.meta,{decorations:i,converter:o,source:n.source})}return e.get(n.meta)}return{name:"shiki:decorations",tokens(n){if(!this.options.decorations?.length)return;const o=t(this).decorations.flatMap(s=>[s.start.offset,s.end.offset]);return Ep(n,o)},code(n){if(!this.options.decorations?.length)return;const r=t(this),o=Array.from(n.children).filter(u=>u.type==="element"&&u.tagName==="span");if(o.length!==r.converter.lines.length)throw new Re(`Number of lines in code element (${o.length}) does not match the number of lines in the source (${r.converter.lines.length}). Failed to apply decorations.`);function i(u,d,f,h){const g=o[u];let S="",E=-1,b=-1;if(d===0&&(E=0),f===0&&(b=0),f===Number.POSITIVE_INFINITY&&(b=g.children.length),E===-1||b===-1)for(let A=0;A<g.children.length;A++)S+=vc(g.children[A]),E===-1&&S.length===d&&(E=A+1),b===-1&&S.length===f&&(b=A+1);if(E===-1)throw new Re(`Failed to find start index for decoration ${JSON.stringify(h.start)}`);if(b===-1)throw new Re(`Failed to find end index for decoration ${JSON.stringify(h.end)}`);const v=g.children.slice(E,b);if(!h.alwaysWrap&&v.length===g.children.length)l(g,h,"line");else if(!h.alwaysWrap&&v.length===1&&v[0].type==="element")l(v[0],h,"token");else{const A={type:"element",tagName:"span",properties:{},children:v};l(A,h,"wrapper"),g.children.splice(E,v.length,A)}}function s(u,d){o[u]=l(o[u],d,"line")}function l(u,d,f){const h=d.properties||{},g=d.transform||(S=>S);return u.tagName=d.tagName||"span",u.properties={...u.properties,...h,class:u.properties.class},d.properties?.class&&_c(u,d.properties.class),u=g(u,f)||u,u}const a=[],c=r.decorations.sort((u,d)=>d.start.offset-u.start.offset||u.end.offset-d.end.offset);for(const u of c){const{start:d,end:f}=u;if(d.line===f.line)i(d.line,d.character,f.character,u);else if(d.line<f.line){i(d.line,d.character,Number.POSITIVE_INFINITY,u);for(let h=d.line+1;h<f.line;h++)a.unshift(()=>s(h,u));i(f.line,0,f.character,u)}}a.forEach(u=>u())}}}function Tp(e){for(let t=0;t<e.length;t++){const n=e[t];if(n.start.offset>n.end.offset)throw new Re(`Invalid decoration range: ${JSON.stringify(n.start)} - ${JSON.stringify(n.end)}`);for(let r=t+1;r<e.length;r++){const o=e[r],i=n.start.offset<=o.start.offset&&o.start.offset<n.end.offset,s=n.start.offset<o.end.offset&&o.end.offset<=n.end.offset,l=o.start.offset<=n.start.offset&&n.start.offset<o.end.offset,a=o.start.offset<n.end.offset&&n.end.offset<=o.end.offset;if(i||s||l||a){if(i&&s||l&&a||l&&n.start.offset===n.end.offset||s&&o.start.offset===o.end.offset)continue;throw new Re(`Decorations ${JSON.stringify(n.start)} and ${JSON.stringify(o.start)} intersect.`)}}}}function vc(e){return e.type==="text"?e.value:e.type==="element"?e.children.map(vc).join(""):""}const Rp=[Pp()];function Xr(e){const t=Cp(e.transformers||[]);return[...t.pre,...t.normal,...t.post,...Rp]}function Cp(e){const t=[],n=[],r=[];for(const o of e)switch(o.enforce){case"pre":t.push(o);break;case"post":n.push(o);break;default:r.push(o)}return{pre:t,post:n,normal:r}}var Jt=["black","red","green","yellow","blue","magenta","cyan","white","brightBlack","brightRed","brightGreen","brightYellow","brightBlue","brightMagenta","brightCyan","brightWhite"],jo={1:"bold",2:"dim",3:"italic",4:"underline",7:"reverse",8:"hidden",9:"strikethrough"};function xp(e,t){const n=e.indexOf("\x1B",t);if(n!==-1&&e[n+1]==="["){const r=e.indexOf("m",n);if(r!==-1)return{sequence:e.substring(n+2,r).split(";"),startPosition:n,position:r+1}}return{position:e.length}}function Ys(e){const t=e.shift();if(t==="2"){const n=e.splice(0,3).map(r=>Number.parseInt(r));return n.length!==3||n.some(r=>Number.isNaN(r))?void 0:{type:"rgb",rgb:n}}else if(t==="5"){const n=e.shift();if(n)return{type:"table",index:Number(n)}}}function Op(e){const t=[];for(;e.length>0;){const n=e.shift();if(!n)continue;const r=Number.parseInt(n);if(!Number.isNaN(r))if(r===0)t.push({type:"resetAll"});else if(r<=9)jo[r]&&t.push({type:"setDecoration",value:jo[r]});else if(r<=29){const o=jo[r-20];o&&(t.push({type:"resetDecoration",value:o}),o==="dim"&&t.push({type:"resetDecoration",value:"bold"}))}else if(r<=37)t.push({type:"setForegroundColor",value:{type:"named",name:Jt[r-30]}});else if(r===38){const o=Ys(e);o&&t.push({type:"setForegroundColor",value:o})}else if(r===39)t.push({type:"resetForegroundColor"});else if(r<=47)t.push({type:"setBackgroundColor",value:{type:"named",name:Jt[r-40]}});else if(r===48){const o=Ys(e);o&&t.push({type:"setBackgroundColor",value:o})}else r===49?t.push({type:"resetBackgroundColor"}):r===53?t.push({type:"setDecoration",value:"overline"}):r===55?t.push({type:"resetDecoration",value:"overline"}):r>=90&&r<=97?t.push({type:"setForegroundColor",value:{type:"named",name:Jt[r-90+8]}}):r>=100&&r<=107&&t.push({type:"setBackgroundColor",value:{type:"named",name:Jt[r-100+8]}})}return t}function Ip(){let e=null,t=null,n=new Set;return{parse(r){const o=[];let i=0;do{const s=xp(r,i),l=s.sequence?r.substring(i,s.startPosition):r.substring(i);if(l.length>0&&o.push({value:l,foreground:e,background:t,decorations:new Set(n)}),s.sequence){const a=Op(s.sequence);for(const c of a)c.type==="resetAll"?(e=null,t=null,n.clear()):c.type==="resetForegroundColor"?e=null:c.type==="resetBackgroundColor"?t=null:c.type==="resetDecoration"&&n.delete(c.value);for(const c of a)c.type==="setForegroundColor"?e=c.value:c.type==="setBackgroundColor"?t=c.value:c.type==="setDecoration"&&n.add(c.value)}i=s.position}while(i<r.length);return o}}}var kp={black:"#000000",red:"#bb0000",green:"#00bb00",yellow:"#bbbb00",blue:"#0000bb",magenta:"#ff00ff",cyan:"#00bbbb",white:"#eeeeee",brightBlack:"#555555",brightRed:"#ff5555",brightGreen:"#00ff00",brightYellow:"#ffff55",brightBlue:"#5555ff",brightMagenta:"#ff55ff",brightCyan:"#55ffff",brightWhite:"#ffffff"};function Dp(e=kp){function t(l){return e[l]}function n(l){return`#${l.map(a=>Math.max(0,Math.min(a,255)).toString(16).padStart(2,"0")).join("")}`}let r;function o(){if(r)return r;r=[];for(let c=0;c<Jt.length;c++)r.push(t(Jt[c]));let l=[0,95,135,175,215,255];for(let c=0;c<6;c++)for(let u=0;u<6;u++)for(let d=0;d<6;d++)r.push(n([l[c],l[u],l[d]]));let a=8;for(let c=0;c<24;c++,a+=10)r.push(n([a,a,a]));return r}function i(l){return o()[l]}function s(l){switch(l.type){case"named":return t(l.name);case"rgb":return n(l.rgb);case"table":return i(l.index)}}return{value:s}}function Np(e,t,n){const r=Yr(e,n),o=mo(t),i=Dp(Object.fromEntries(Jt.map(l=>[l,e.colors?.[`terminal.ansi${l[0].toUpperCase()}${l.substring(1)}`]]))),s=Ip();return o.map(l=>s.parse(l[0]).map(a=>{let c,u;a.decorations.has("reverse")?(c=a.background?i.value(a.background):e.bg,u=a.foreground?i.value(a.foreground):e.fg):(c=a.foreground?i.value(a.foreground):e.fg,u=a.background?i.value(a.background):void 0),c=Ht(c,r),u=Ht(u,r),a.decorations.has("dim")&&(c=Mp(c));let d=Ue.None;return a.decorations.has("bold")&&(d|=Ue.Bold),a.decorations.has("italic")&&(d|=Ue.Italic),a.decorations.has("underline")&&(d|=Ue.Underline),a.decorations.has("strikethrough")&&(d|=Ue.Strikethrough),{content:a.value,offset:l[1],color:c,bgColor:u,fontStyle:d}}))}function Mp(e){const t=e.match(/#([0-9a-f]{3})([0-9a-f]{3})?([0-9a-f]{2})?/);if(t)if(t[3]){const r=Math.round(Number.parseInt(t[3],16)/2).toString(16).padStart(2,"0");return`#${t[1]}${t[2]}${r}`}else return t[2]?`#${t[1]}${t[2]}80`:`#${Array.from(t[1]).map(r=>`${r}${r}`).join("")}80`;const n=e.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);return n?`var(${n[1]}-dim)`:e}function qi(e,t,n={}){const{lang:r="text",theme:o=e.getLoadedThemes()[0]}=n;if(Fi(r)||Wi(o))return mo(t).map(a=>[{content:a[0],offset:a[1]}]);const{theme:i,colorMap:s}=e.setTheme(o);if(r==="ansi")return Np(i,t,n);const l=e.getLanguage(r);if(n.grammarState){if(n.grammarState.lang!==l.name)throw new Re(`Grammar state language "${n.grammarState.lang}" does not match highlight language "${l.name}"`);if(!n.grammarState.themes.includes(i.name))throw new Re(`Grammar state themes "${n.grammarState.themes}" do not contain highlight theme "${i.name}"`)}return $p(t,l,i,s,n)}function Vp(...e){if(e.length===2)return ar(e[1]);const[t,n,r={}]=e,{lang:o="text",theme:i=t.getLoadedThemes()[0]}=r;if(Fi(o)||Wi(i))throw new Re("Plain language does not have grammar state");if(o==="ansi")throw new Re("ANSI language does not have grammar state");const{theme:s,colorMap:l}=t.setTheme(i),a=t.getLanguage(o);return new On(Zr(n,a,s,l,r).stateStack,a.name,s.name)}function $p(e,t,n,r,o){const i=Zr(e,t,n,r,o),s=new On(Zr(e,t,n,r,o).stateStack,t.name,n.name);return go(i.tokens,s),i.tokens}function Zr(e,t,n,r,o){const i=Yr(n,o),{tokenizeMaxLineLength:s=0,tokenizeTimeLimit:l=500}=o,a=mo(e);let c=o.grammarState?Lp(o.grammarState,n.name)??di:o.grammarContextCode!=null?Zr(o.grammarContextCode,t,n,r,{...o,grammarState:void 0,grammarContextCode:void 0}).stateStack:di,u=[];const d=[];for(let f=0,h=a.length;f<h;f++){const[g,S]=a[f];if(g===""){u=[],d.push([]);continue}if(s>0&&g.length>=s){u=[],d.push([{content:g,offset:S,color:"",fontStyle:0}]);continue}let E,b,v;o.includeExplanation&&(E=t.tokenizeLine(g,c,l),b=E.tokens,v=0);const A=t.tokenizeLine2(g,c,l),O=A.tokens.length/2;for(let H=0;H<O;H++){const Q=A.tokens[2*H],K=H+1<O?A.tokens[2*H+2]:g.length;if(Q===K)continue;const he=A.tokens[2*H+1],ge=Ht(r[Ln.getForeground(he)],i),be=Ln.getFontStyle(he),_e={content:g.substring(Q,K),offset:S+Q,color:ge,fontStyle:be};if(o.includeExplanation){const Pe=[];if(o.includeExplanation!=="scopeName")for(const le of n.settings){let ve;switch(typeof le.scope){case"string":ve=le.scope.split(/,/).map(ne=>ne.trim());break;case"object":ve=le.scope;break;default:continue}Pe.push({settings:le,selectors:ve.map(ne=>ne.split(/ /))})}_e.explanation=[];let ye=0;for(;Q+ye<K;){const le=b[v],ve=g.substring(le.startIndex,le.endIndex);ye+=ve.length,_e.explanation.push({content:ve,scopes:o.includeExplanation==="scopeName"?jp(le.scopes):Up(Pe,le.scopes)}),v+=1}}u.push(_e)}d.push(u),u=[],c=A.ruleStack}return{tokens:d,stateStack:c}}function jp(e){return e.map(t=>({scopeName:t}))}function Up(e,t){const n=[];for(let r=0,o=t.length;r<o;r++){const i=t[r];n[r]={scopeName:i,themeMatches:Hp(e,i,t.slice(0,r))}}return n}function Qs(e,t){return e===t||t.substring(0,e.length)===e&&t[e.length]==="."}function Bp(e,t,n){if(!Qs(e[e.length-1],t))return!1;let r=e.length-2,o=n.length-1;for(;r>=0&&o>=0;)Qs(e[r],n[o])&&(r-=1),o-=1;return r===-1}function Hp(e,t,n){const r=[];for(const{selectors:o,settings:i}of e)for(const s of o)if(Bp(s,t,n)){r.push(i);break}return r}function bc(e,t,n){const r=Object.entries(n.themes).filter(a=>a[1]).map(a=>({color:a[0],theme:a[1]})),o=r.map(a=>{const c=qi(e,t,{...n,theme:a.theme}),u=ar(c),d=typeof a.theme=="string"?a.theme:a.theme.name;return{tokens:c,state:u,theme:d}}),i=zp(...o.map(a=>a.tokens)),s=i[0].map((a,c)=>a.map((u,d)=>{const f={content:u.content,variants:{},offset:u.offset};return"includeExplanation"in n&&n.includeExplanation&&(f.explanation=u.explanation),i.forEach((h,g)=>{const{content:S,explanation:E,offset:b,...v}=h[c][d];f.variants[r[g].color]=v}),f})),l=o[0].state?new On(Object.fromEntries(o.map(a=>[a.theme,a.state?.getInternalStack(a.theme)])),o[0].state.lang):void 0;return l&&go(s,l),s}function zp(...e){const t=e.map(()=>[]),n=e.length;for(let r=0;r<e[0].length;r++){const o=e.map(a=>a[r]),i=t.map(()=>[]);t.forEach((a,c)=>a.push(i[c]));const s=o.map(()=>0),l=o.map(a=>a[0]);for(;l.every(a=>a);){const a=Math.min(...l.map(c=>c.content.length));for(let c=0;c<n;c++){const u=l[c];u.content.length===a?(i[c].push(u),s[c]+=1,l[c]=o[c][s[c]]):(i[c].push({...u,content:u.content.slice(0,a)}),l[c]={...u,content:u.content.slice(a),offset:u.offset+a})}}}return t}function eo(e,t,n){let r,o,i,s,l,a;if("themes"in n){const{defaultColor:c="light",cssVariablePrefix:u="--shiki-",colorsRendering:d="css-vars"}=n,f=Object.entries(n.themes).filter(b=>b[1]).map(b=>({color:b[0],theme:b[1]})).sort((b,v)=>b.color===c?-1:v.color===c?1:0);if(f.length===0)throw new Re("`themes` option must not be empty");const h=bc(e,t,n);if(a=ar(h),c&&Gi!==c&&!f.find(b=>b.color===c))throw new Re(`\`themes\` option must contain the defaultColor key \`${c}\``);const g=f.map(b=>e.getTheme(b.theme)),S=f.map(b=>b.color);i=h.map(b=>b.map(v=>wp(v,S,u,c,d))),a&&go(i,a);const E=f.map(b=>Yr(b.theme,n));o=Xs(f,g,E,u,c,"fg",d),r=Xs(f,g,E,u,c,"bg",d),s=`shiki-themes ${g.map(b=>b.name).join(" ")}`,l=c?void 0:[o,r].join(";")}else if("theme"in n){const c=Yr(n.theme,n);i=qi(e,t,n);const u=e.getTheme(n.theme);r=Ht(u.bg,c),o=Ht(u.fg,c),s=u.name,a=ar(i)}else throw new Re("Invalid options, either `theme` or `themes` must be provided");return{tokens:i,fg:o,bg:r,themeName:s,rootStyle:l,grammarState:a}}function Xs(e,t,n,r,o,i,s){return e.map((l,a)=>{const c=Ht(t[a][i],n[a])||"inherit",u=`${r+l.color}${i==="bg"?"-bg":""}:${c}`;if(a===0&&o){if(o===Gi&&e.length>1){const d=e.findIndex(S=>S.color==="light"),f=e.findIndex(S=>S.color==="dark");if(d===-1||f===-1)throw new Re('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');const h=Ht(t[d][i],n[d])||"inherit",g=Ht(t[f][i],n[f])||"inherit";return`light-dark(${h}, ${g});${u}`}return c}return s==="css-vars"?u:null}).filter(l=>!!l).join(";")}function to(e,t,n,r={meta:{},options:n,codeToHast:(o,i)=>to(e,o,i),codeToTokens:(o,i)=>eo(e,o,i)}){let o=t;for(const g of Xr(n))o=g.preprocess?.call(r,o,n)||o;let{tokens:i,fg:s,bg:l,themeName:a,rootStyle:c,grammarState:u}=eo(e,o,n);const{mergeWhitespaces:d=!0,mergeSameStyleTokens:f=!1}=n;d===!0?i=Wp(i):d==="never"&&(i=Gp(i)),f&&(i=qp(i));const h={...r,get source(){return o}};for(const g of Xr(n))i=g.tokens?.call(h,i)||i;return Fp(i,{...n,fg:s,bg:l,themeName:a,rootStyle:c},h,u)}function Fp(e,t,n,r=ar(e)){const o=Xr(t),i=[],s={type:"root",children:[]},{structure:l="classic",tabindex:a="0"}=t;let c={type:"element",tagName:"pre",properties:{class:`shiki ${t.themeName||""}`,style:t.rootStyle||`background-color:${t.bg};color:${t.fg}`,...a!==!1&&a!=null?{tabindex:a.toString()}:{},...Object.fromEntries(Array.from(Object.entries(t.meta||{})).filter(([g])=>!g.startsWith("_")))},children:[]},u={type:"element",tagName:"code",properties:{},children:i};const d=[],f={...n,structure:l,addClassToHast:_c,get source(){return n.source},get tokens(){return e},get options(){return t},get root(){return s},get pre(){return c},get code(){return u},get lines(){return d}};if(e.forEach((g,S)=>{S&&(l==="inline"?s.children.push({type:"element",tagName:"br",properties:{},children:[]}):l==="classic"&&i.push({type:"text",value:`
`}));let E={type:"element",tagName:"span",properties:{class:"line"},children:[]},b=0;for(const v of g){let A={type:"element",tagName:"span",properties:{...v.htmlAttrs},children:[{type:"text",value:v.content}]};const O=gi(v.htmlStyle||Qr(v));O&&(A.properties.style=O);for(const H of o)A=H?.span?.call(f,A,S+1,b,E,v)||A;l==="inline"?s.children.push(A):l==="classic"&&E.children.push(A),b+=v.content.length}if(l==="classic"){for(const v of o)E=v?.line?.call(f,E,S+1)||E;d.push(E),i.push(E)}}),l==="classic"){for(const g of o)u=g?.code?.call(f,u)||u;c.children.push(u);for(const g of o)c=g?.pre?.call(f,c)||c;s.children.push(c)}let h=s;for(const g of o)h=g?.root?.call(f,h)||h;return r&&go(h,r),h}function Wp(e){return e.map(t=>{const n=[];let r="",o=0;return t.forEach((i,s)=>{const a=!(i.fontStyle&&(i.fontStyle&Ue.Underline||i.fontStyle&Ue.Strikethrough));a&&i.content.match(/^\s+$/)&&t[s+1]?(o||(o=i.offset),r+=i.content):r?(a?n.push({...i,offset:o,content:r+i.content}):n.push({content:r,offset:o},i),o=0,r=""):n.push(i)}),n})}function Gp(e){return e.map(t=>t.flatMap(n=>{if(n.content.match(/^\s+$/))return n;const r=n.content.match(/^(\s*)(.*?)(\s*)$/);if(!r)return n;const[,o,i,s]=r;if(!o&&!s)return n;const l=[{...n,offset:n.offset+o.length,content:i}];return o&&l.unshift({content:o,offset:n.offset}),s&&l.push({content:s,offset:n.offset+o.length+i.length}),l}))}function qp(e){return e.map(t=>{const n=[];for(const r of t){if(n.length===0){n.push({...r});continue}const o=n[n.length-1],i=gi(o.htmlStyle||Qr(o)),s=gi(r.htmlStyle||Qr(r)),l=o.fontStyle&&(o.fontStyle&Ue.Underline||o.fontStyle&Ue.Strikethrough),a=r.fontStyle&&(r.fontStyle&Ue.Underline||r.fontStyle&Ue.Strikethrough);!l&&!a&&i===s?o.content+=r.content:n.push({...r})}return n})}const Kp=mp;function Jp(e,t,n){const r={meta:{},options:n,codeToHast:(i,s)=>to(e,i,s),codeToTokens:(i,s)=>eo(e,i,s)};let o=Kp(to(e,t,n,r));for(const i of Xr(n))o=i.postprocess?.call(r,o,n)||o;return o}const Zs={light:"#333333",dark:"#bbbbbb"},ea={light:"#fffffe",dark:"#1e1e1e"},ta="__shiki_resolved";function Ki(e){if(e?.[ta])return e;const t={...e};t.tokenColors&&!t.settings&&(t.settings=t.tokenColors,delete t.tokenColors),t.type||="dark",t.colorReplacements={...t.colorReplacements},t.settings||=[];let{bg:n,fg:r}=t;if(!n||!r){const l=t.settings?t.settings.find(a=>!a.name&&!a.scope):void 0;l?.settings?.foreground&&(r=l.settings.foreground),l?.settings?.background&&(n=l.settings.background),!r&&t?.colors?.["editor.foreground"]&&(r=t.colors["editor.foreground"]),!n&&t?.colors?.["editor.background"]&&(n=t.colors["editor.background"]),r||(r=t.type==="light"?Zs.light:Zs.dark),n||(n=t.type==="light"?ea.light:ea.dark),t.fg=r,t.bg=n}t.settings[0]&&t.settings[0].settings&&!t.settings[0].scope||t.settings.unshift({settings:{foreground:t.fg,background:t.bg}});let o=0;const i=new Map;function s(l){if(i.has(l))return i.get(l);o+=1;const a=`#${o.toString(16).padStart(8,"0").toLowerCase()}`;return t.colorReplacements?.[`#${a}`]?s(l):(i.set(l,a),a)}t.settings=t.settings.map(l=>{const a=l.settings?.foreground&&!l.settings.foreground.startsWith("#"),c=l.settings?.background&&!l.settings.background.startsWith("#");if(!a&&!c)return l;const u={...l,settings:{...l.settings}};if(a){const d=s(l.settings.foreground);t.colorReplacements[d]=l.settings.foreground,u.settings.foreground=d}if(c){const d=s(l.settings.background);t.colorReplacements[d]=l.settings.background,u.settings.background=d}return u});for(const l of Object.keys(t.colors||{}))if((l==="editor.foreground"||l==="editor.background"||l.startsWith("terminal.ansi"))&&!t.colors[l]?.startsWith("#")){const a=s(t.colors[l]);t.colorReplacements[a]=t.colors[l],t.colors[l]=a}return Object.defineProperty(t,ta,{enumerable:!1,writable:!1,value:!0}),t}async function Sc(e){return Array.from(new Set((await Promise.all(e.filter(t=>!mc(t)).map(async t=>await pc(t).then(n=>Array.isArray(n)?n:[n])))).flat()))}async function Ec(e){return(await Promise.all(e.map(async n=>gc(n)?null:Ki(await pc(n))))).filter(n=>!!n)}let Yp=3;function Qp(e,t=3){t>Yp||console.trace(`[SHIKI DEPRECATE]: ${e}`)}let fn=class extends Error{constructor(t){super(t),this.name="ShikiError"}};class Xp extends th{constructor(t,n,r,o={}){super(t),this._resolver=t,this._themes=n,this._langs=r,this._alias=o,this._themes.map(i=>this.loadTheme(i)),this.loadLanguages(this._langs)}_resolvedThemes=new Map;_resolvedGrammars=new Map;_langMap=new Map;_langGraph=new Map;_textmateThemeCache=new WeakMap;_loadedThemesCache=null;_loadedLanguagesCache=null;getTheme(t){return typeof t=="string"?this._resolvedThemes.get(t):this.loadTheme(t)}loadTheme(t){const n=Ki(t);return n.name&&(this._resolvedThemes.set(n.name,n),this._loadedThemesCache=null),n}getLoadedThemes(){return this._loadedThemesCache||(this._loadedThemesCache=[...this._resolvedThemes.keys()]),this._loadedThemesCache}setTheme(t){let n=this._textmateThemeCache.get(t);n||(n=Wr.createFromRawTheme(t),this._textmateThemeCache.set(t,n)),this._syncRegistry.setTheme(n)}getGrammar(t){if(this._alias[t]){const n=new Set([t]);for(;this._alias[t];){if(t=this._alias[t],n.has(t))throw new fn(`Circular alias \`${Array.from(n).join(" -> ")} -> ${t}\``);n.add(t)}}return this._resolvedGrammars.get(t)}loadLanguage(t){if(this.getGrammar(t.name))return;const n=new Set([...this._langMap.values()].filter(i=>i.embeddedLangsLazy?.includes(t.name)));this._resolver.addLanguage(t);const r={balancedBracketSelectors:t.balancedBracketSelectors||["*"],unbalancedBracketSelectors:t.unbalancedBracketSelectors||[]};this._syncRegistry._rawGrammars.set(t.scopeName,t);const o=this.loadGrammarWithConfiguration(t.scopeName,1,r);if(o.name=t.name,this._resolvedGrammars.set(t.name,o),t.aliases&&t.aliases.forEach(i=>{this._alias[i]=t.name}),this._loadedLanguagesCache=null,n.size)for(const i of n)this._resolvedGrammars.delete(i.name),this._loadedLanguagesCache=null,this._syncRegistry?._injectionGrammars?.delete(i.scopeName),this._syncRegistry?._grammars?.delete(i.scopeName),this.loadLanguage(this._langMap.get(i.name))}dispose(){super.dispose(),this._resolvedThemes.clear(),this._resolvedGrammars.clear(),this._langMap.clear(),this._langGraph.clear(),this._loadedThemesCache=null}loadLanguages(t){for(const o of t)this.resolveEmbeddedLanguages(o);const n=Array.from(this._langGraph.entries()),r=n.filter(([o,i])=>!i);if(r.length){const o=n.filter(([i,s])=>s&&s.embeddedLangs?.some(l=>r.map(([a])=>a).includes(l))).filter(i=>!r.includes(i));throw new fn(`Missing languages ${r.map(([i])=>`\`${i}\``).join(", ")}, required by ${o.map(([i])=>`\`${i}\``).join(", ")}`)}for(const[o,i]of n)this._resolver.addLanguage(i);for(const[o,i]of n)this.loadLanguage(i)}getLoadedLanguages(){return this._loadedLanguagesCache||(this._loadedLanguagesCache=[...new Set([...this._resolvedGrammars.keys(),...Object.keys(this._alias)])]),this._loadedLanguagesCache}resolveEmbeddedLanguages(t){if(this._langMap.set(t.name,t),this._langGraph.set(t.name,t),t.embeddedLangs)for(const n of t.embeddedLangs)this._langGraph.set(n,this._langMap.get(n))}}class Zp{_langs=new Map;_scopeToLang=new Map;_injections=new Map;_onigLib;constructor(t,n){this._onigLib={createOnigScanner:r=>t.createScanner(r),createOnigString:r=>t.createString(r)},n.forEach(r=>this.addLanguage(r))}get onigLib(){return this._onigLib}getLangRegistration(t){return this._langs.get(t)}loadGrammar(t){return this._scopeToLang.get(t)}addLanguage(t){this._langs.set(t.name,t),t.aliases&&t.aliases.forEach(n=>{this._langs.set(n,t)}),this._scopeToLang.set(t.scopeName,t),t.injectTo&&t.injectTo.forEach(n=>{this._injections.get(n)||this._injections.set(n,[]),this._injections.get(n).push(t.scopeName)})}getInjections(t){const n=t.split(".");let r=[];for(let o=1;o<=n.length;o++){const i=n.slice(0,o).join(".");r=[...r,...this._injections.get(i)||[]]}return r}}let Nn=0;function em(e){Nn+=1,e.warnings!==!1&&Nn>=10&&Nn%10===0&&console.warn(`[Shiki] ${Nn} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);let t=!1;if(!e.engine)throw new fn("`engine` option is required for synchronous mode");const n=(e.langs||[]).flat(1),r=(e.themes||[]).flat(1).map(Ki),o=new Zp(e.engine,n),i=new Xp(o,r,n,e.langAlias);let s;function l(v){E();const A=i.getGrammar(typeof v=="string"?v:v.name);if(!A)throw new fn(`Language \`${v}\` not found, you may need to load it first`);return A}function a(v){if(v==="none")return{bg:"",fg:"",name:"none",settings:[],type:"dark"};E();const A=i.getTheme(v);if(!A)throw new fn(`Theme \`${v}\` not found, you may need to load it first`);return A}function c(v){E();const A=a(v);s!==v&&(i.setTheme(A),s=v);const O=i.getColorMap();return{theme:A,colorMap:O}}function u(){return E(),i.getLoadedThemes()}function d(){return E(),i.getLoadedLanguages()}function f(...v){E(),i.loadLanguages(v.flat(1))}async function h(...v){return f(await Sc(v))}function g(...v){E();for(const A of v.flat(1))i.loadTheme(A)}async function S(...v){return E(),g(await Ec(v))}function E(){if(t)throw new fn("Shiki instance has been disposed")}function b(){t||(t=!0,i.dispose(),Nn-=1)}return{setTheme:c,getTheme:a,getLanguage:l,getLoadedThemes:u,getLoadedLanguages:d,loadLanguage:h,loadLanguageSync:f,loadTheme:S,loadThemeSync:g,dispose:b,[Symbol.dispose]:b}}async function tm(e){e.engine||Qp("`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.");const[t,n,r]=await Promise.all([Ec(e.themes||[]),Sc(e.langs||[]),e.engine]);return em({...e,themes:t,langs:n,engine:r})}async function nm(e){const t=await tm(e);return{getLastGrammarState:(...n)=>Vp(t,...n),codeToTokensBase:(n,r)=>qi(t,n,r),codeToTokensWithThemes:(n,r)=>bc(t,n,r),codeToTokens:(n,r)=>eo(t,n,r),codeToHast:(n,r)=>to(t,n,r),codeToHtml:(n,r)=>Jp(t,n,r),getBundledLanguages:()=>({}),getBundledThemes:()=>({}),...t,getInternalContext:()=>t}}function rm(e){const t=e.langs,n=e.themes,r=e.engine;async function o(i){function s(d){if(typeof d=="string"){if(mc(d))return[];d=i.langAlias?.[d]||d;const f=t[d];if(!f)throw new Re(`Language \`${d}\` is not included in this bundle. You may want to load it from external source.`);return f}return d}function l(d){if(gc(d))return"none";if(typeof d=="string"){const f=n[d];if(!f)throw new Re(`Theme \`${d}\` is not included in this bundle. You may want to load it from external source.`);return f}return d}const a=(i.themes??[]).map(d=>l(d)),c=(i.langs??[]).map(d=>s(d)),u=await nm({engine:i.engine??r(),...i,themes:a,langs:c});return{...u,loadLanguage(...d){return u.loadLanguage(...d.map(s))},loadTheme(...d){return u.loadTheme(...d.map(l))},getBundledLanguages(){return t},getBundledThemes(){return n}}}return o}const wc=[{id:"abap",name:"ABAP",import:(()=>p(()=>import("./abap-BdImnpbu.js"),[]))},{id:"actionscript-3",name:"ActionScript",import:(()=>p(()=>import("./actionscript-3-CfeIJUat.js"),[]))},{id:"ada",name:"Ada",import:(()=>p(()=>import("./ada-bCR0ucgS.js"),[]))},{id:"angular-html",name:"Angular HTML",import:(()=>p(()=>import("./angular-html-Bbf3ZyxA.js").then(e=>e.f),__vite__mapDeps([0,1,2,3])))},{id:"angular-ts",name:"Angular TypeScript",import:(()=>p(()=>import("./angular-ts-C26w9mnW.js"),__vite__mapDeps([4,0,1,2,3,5])))},{id:"apache",name:"Apache Conf",import:(()=>p(()=>import("./apache-Pmp26Uib.js"),[]))},{id:"apex",name:"Apex",import:(()=>p(()=>import("./apex-C7Pw0Ztw.js"),[]))},{id:"apl",name:"APL",import:(()=>p(()=>import("./apl-e980N3t4.js"),__vite__mapDeps([6,1,2,3,7,8,9])))},{id:"applescript",name:"AppleScript",import:(()=>p(()=>import("./applescript-Co6uUVPk.js"),[]))},{id:"ara",name:"Ara",import:(()=>p(()=>import("./ara-BRHolxvo.js"),[]))},{id:"asciidoc",name:"AsciiDoc",aliases:["adoc"],import:(()=>p(()=>import("./asciidoc-Dv7Oe6Be.js"),[]))},{id:"asm",name:"Assembly",import:(()=>p(()=>import("./asm-D_Q5rh1f.js"),[]))},{id:"astro",name:"Astro",import:(()=>p(()=>import("./astro-CjFzhNUq.js"),__vite__mapDeps([10,9,2,11,3,12,13])))},{id:"awk",name:"AWK",import:(()=>p(()=>import("./awk-DMzUqQB5.js"),[]))},{id:"ballerina",name:"Ballerina",import:(()=>p(()=>import("./ballerina-BFfxhgS-.js"),[]))},{id:"bat",name:"Batch File",aliases:["batch"],import:(()=>p(()=>import("./bat-BkioyH1T.js"),[]))},{id:"beancount",name:"Beancount",import:(()=>p(()=>import("./beancount-BoKiGodi.js"),[]))},{id:"berry",name:"Berry",aliases:["be"],import:(()=>p(()=>import("./berry-D08WgyRC.js"),[]))},{id:"bibtex",name:"BibTeX",import:(()=>p(()=>import("./bibtex-CHM0blh-.js"),[]))},{id:"bicep",name:"Bicep",import:(()=>p(()=>import("./bicep-6nHXG8SA.js"),[]))},{id:"blade",name:"Blade",import:(()=>p(()=>import("./blade-B2ZbN0F_.js"),__vite__mapDeps([14,15,1,2,3,7,8,16,9])))},{id:"bsl",name:"1C (Enterprise)",aliases:["1c"],import:(()=>p(()=>import("./bsl-BO_Y6i37.js"),__vite__mapDeps([17,18])))},{id:"c",name:"C",import:(()=>p(()=>import("./c-BIGW1oBm.js"),[]))},{id:"cadence",name:"Cadence",aliases:["cdc"],import:(()=>p(()=>import("./cadence-D2CYqzqI.js"),[]))},{id:"cairo",name:"Cairo",import:(()=>p(()=>import("./cairo-KRGpt6FW.js"),__vite__mapDeps([19,20])))},{id:"clarity",name:"Clarity",import:(()=>p(()=>import("./clarity-CHh-QcGE.js"),[]))},{id:"clojure",name:"Clojure",aliases:["clj"],import:(()=>p(()=>import("./clojure-P80f7IUj.js"),[]))},{id:"cmake",name:"CMake",import:(()=>p(()=>import("./cmake-D1j8_8rp.js"),[]))},{id:"cobol",name:"COBOL",import:(()=>p(()=>import("./cobol-DwXMNnPA.js"),__vite__mapDeps([21,1,2,3,8])))},{id:"codeowners",name:"CODEOWNERS",import:(()=>p(()=>import("./codeowners-Bp6g37R7.js"),[]))},{id:"codeql",name:"CodeQL",aliases:["ql"],import:(()=>p(()=>import("./codeql-DsOJ9woJ.js"),[]))},{id:"coffee",name:"CoffeeScript",aliases:["coffeescript"],import:(()=>p(()=>import("./coffee-JUOWOZUj.js"),__vite__mapDeps([22,2])))},{id:"common-lisp",name:"Common Lisp",aliases:["lisp"],import:(()=>p(()=>import("./common-lisp-Cg-RD9OK.js"),[]))},{id:"coq",name:"Coq",import:(()=>p(()=>import("./coq-DkFqJrB1.js"),[]))},{id:"cpp",name:"C++",aliases:["c++"],import:(()=>p(()=>import("./cpp-CofmeUqb.js"),__vite__mapDeps([23,24,25,26,16])))},{id:"crystal",name:"Crystal",import:(()=>p(()=>import("./crystal-DVs0tusA.js"),__vite__mapDeps([27,1,2,3,16,26,28])))},{id:"csharp",name:"C#",aliases:["c#","cs"],import:(()=>p(()=>import("./csharp-CHadp7IV.js"),[]))},{id:"css",name:"CSS",import:(()=>p(()=>import("./css-DPfMkruS.js"),[]))},{id:"csv",name:"CSV",import:(()=>p(()=>import("./csv-fuZLfV_i.js"),[]))},{id:"cue",name:"CUE",import:(()=>p(()=>import("./cue-D82EKSYY.js"),[]))},{id:"cypher",name:"Cypher",aliases:["cql"],import:(()=>p(()=>import("./cypher-COkxafJQ.js"),[]))},{id:"d",name:"D",import:(()=>p(()=>import("./d-85-TOEBH.js"),[]))},{id:"dart",name:"Dart",import:(()=>p(()=>import("./dart-CF10PKvl.js"),[]))},{id:"dax",name:"DAX",import:(()=>p(()=>import("./dax-CEL-wOlO.js"),[]))},{id:"desktop",name:"Desktop",import:(()=>p(()=>import("./desktop-BmXAJ9_W.js"),[]))},{id:"diff",name:"Diff",import:(()=>p(()=>import("./diff-D97Zzqfu.js"),[]))},{id:"docker",name:"Dockerfile",aliases:["dockerfile"],import:(()=>p(()=>import("./docker-BcOcwvcX.js"),[]))},{id:"dotenv",name:"dotEnv",import:(()=>p(()=>import("./dotenv-Da5cRb03.js"),[]))},{id:"dream-maker",name:"Dream Maker",import:(()=>p(()=>import("./dream-maker-BtqSS_iP.js"),[]))},{id:"edge",name:"Edge",import:(()=>p(()=>import("./edge-CKszZCnI.js"),__vite__mapDeps([29,11,1,2,3,15])))},{id:"elixir",name:"Elixir",import:(()=>p(()=>import("./elixir-Cc7HHYVZ.js"),__vite__mapDeps([30,1,2,3])))},{id:"elm",name:"Elm",import:(()=>p(()=>import("./elm-DbKCFpqz.js"),__vite__mapDeps([31,25,26])))},{id:"emacs-lisp",name:"Emacs Lisp",aliases:["elisp"],import:(()=>p(()=>import("./emacs-lisp-C9XAeP06.js"),[]))},{id:"erb",name:"ERB",import:(()=>p(()=>import("./erb-C7QrGF_t.js"),__vite__mapDeps([32,1,2,3,33,34,7,8,16,35,11,36,13,23,24,25,26,28,37,38])))},{id:"erlang",name:"Erlang",aliases:["erl"],import:(()=>p(()=>import("./erlang-DsQrWhSR.js"),__vite__mapDeps([39,40])))},{id:"fennel",name:"Fennel",import:(()=>p(()=>import("./fennel-BYunw83y.js"),[]))},{id:"fish",name:"Fish",import:(()=>p(()=>import("./fish-Bl2oy6fF.js"),[]))},{id:"fluent",name:"Fluent",aliases:["ftl"],import:(()=>p(()=>import("./fluent-C4IJs8-o.js"),[]))},{id:"fortran-fixed-form",name:"Fortran (Fixed Form)",aliases:["f","for","f77"],import:(()=>p(()=>import("./fortran-fixed-form-BZjJHVRy.js"),__vite__mapDeps([41,42])))},{id:"fortran-free-form",name:"Fortran (Free Form)",aliases:["f90","f95","f03","f08","f18"],import:(()=>p(()=>import("./fortran-free-form-D22FLkUw.js"),[]))},{id:"fsharp",name:"F#",aliases:["f#","fs"],import:(()=>p(()=>import("./fsharp-CufqaIoK.js"),__vite__mapDeps([43,40])))},{id:"gdresource",name:"GDResource",import:(()=>p(()=>import("./gdresource-B7Tvp0Sc.js"),__vite__mapDeps([44,45,46])))},{id:"gdscript",name:"GDScript",import:(()=>p(()=>import("./gdscript-DTMYz4Jt.js"),[]))},{id:"gdshader",name:"GDShader",import:(()=>p(()=>import("./gdshader-DkwncUOv.js"),[]))},{id:"genie",name:"Genie",import:(()=>p(()=>import("./genie-D0YGMca9.js"),[]))},{id:"gherkin",name:"Gherkin",import:(()=>p(()=>import("./gherkin-DyxjwDmM.js"),[]))},{id:"git-commit",name:"Git Commit Message",import:(()=>p(()=>import("./git-commit-F4YmCXRG.js"),__vite__mapDeps([47,48])))},{id:"git-rebase",name:"Git Rebase Message",import:(()=>p(()=>import("./git-rebase-r7XF79zn.js"),__vite__mapDeps([49,28])))},{id:"gleam",name:"Gleam",import:(()=>p(()=>import("./gleam-BspZqrRM.js"),[]))},{id:"glimmer-js",name:"Glimmer JS",aliases:["gjs"],import:(()=>p(()=>import("./glimmer-js-Dz9X99Cm.js"),__vite__mapDeps([50,2,11,3,1])))},{id:"glimmer-ts",name:"Glimmer TS",aliases:["gts"],import:(()=>p(()=>import("./glimmer-ts-aQ3p29eY.js"),__vite__mapDeps([51,11,3,2,1])))},{id:"glsl",name:"GLSL",import:(()=>p(()=>import("./glsl-DplSGwfg.js"),__vite__mapDeps([25,26])))},{id:"gnuplot",name:"Gnuplot",import:(()=>p(()=>import("./gnuplot-DdkO51Og.js"),[]))},{id:"go",name:"Go",import:(()=>p(()=>import("./go-Dn2_MT6a.js"),[]))},{id:"graphql",name:"GraphQL",aliases:["gql"],import:(()=>p(()=>import("./graphql-Caa12_AY.js"),__vite__mapDeps([35,2,11,36,13])))},{id:"groovy",name:"Groovy",import:(()=>p(()=>import("./groovy-gcz8RCvz.js"),[]))},{id:"hack",name:"Hack",import:(()=>p(()=>import("./hack-D_o3P2UH.js"),__vite__mapDeps([52,1,2,3,16])))},{id:"haml",name:"Ruby Haml",import:(()=>p(()=>import("./haml-AZXGPtNI.js"),__vite__mapDeps([34,2,3])))},{id:"handlebars",name:"Handlebars",aliases:["hbs"],import:(()=>p(()=>import("./handlebars-YebKLiTq.js"),__vite__mapDeps([53,1,2,3,38])))},{id:"haskell",name:"Haskell",aliases:["hs"],import:(()=>p(()=>import("./haskell-Df6bDoY_.js"),[]))},{id:"haxe",name:"Haxe",import:(()=>p(()=>import("./haxe-CzTSHFRz.js"),[]))},{id:"hcl",name:"HashiCorp HCL",import:(()=>p(()=>import("./hcl-BWvSN4gD.js"),[]))},{id:"hjson",name:"Hjson",import:(()=>p(()=>import("./hjson-D5-asLiD.js"),[]))},{id:"hlsl",name:"HLSL",import:(()=>p(()=>import("./hlsl-D3lLCCz7.js"),[]))},{id:"html",name:"HTML",import:(()=>p(()=>import("./html-B8pBdPMQ.js"),__vite__mapDeps([1,2,3])))},{id:"html-derivative",name:"HTML (Derivative)",import:(()=>p(()=>import("./html-derivative-ZQ8onl8Z.js"),__vite__mapDeps([15,1,2,3])))},{id:"http",name:"HTTP",import:(()=>p(()=>import("./http-C38VWM-o.js"),__vite__mapDeps([54,28,9,7,8,35,2,11,36,13])))},{id:"hxml",name:"HXML",import:(()=>p(()=>import("./hxml-Bvhsp5Yf.js"),__vite__mapDeps([55,56])))},{id:"hy",name:"Hy",import:(()=>p(()=>import("./hy-DFXneXwc.js"),[]))},{id:"imba",name:"Imba",import:(()=>p(()=>import("./imba-DGztddWO.js"),[]))},{id:"ini",name:"INI",aliases:["properties"],import:(()=>p(()=>import("./ini-BEwlwnbL.js"),[]))},{id:"java",name:"Java",import:(()=>p(()=>import("./java-CylS5w8V.js"),[]))},{id:"javascript",name:"JavaScript",aliases:["js"],import:(()=>p(()=>import("./javascript-BMMyXqK5.js"),[]))},{id:"jinja",name:"Jinja",import:(()=>p(()=>import("./jinja-BJmZiE_F.js"),__vite__mapDeps([57,1,2,3])))},{id:"jison",name:"Jison",import:(()=>p(()=>import("./jison-BCRtk9Os.js"),__vite__mapDeps([58,2])))},{id:"json",name:"JSON",import:(()=>p(()=>import("./json-Cp-IABpG.js"),[]))},{id:"json5",name:"JSON5",import:(()=>p(()=>import("./json5-C9tS-k6U.js"),[]))},{id:"jsonc",name:"JSON with Comments",import:(()=>p(()=>import("./jsonc-Des-eS-w.js"),[]))},{id:"jsonl",name:"JSON Lines",import:(()=>p(()=>import("./jsonl-DcaNXYhu.js"),[]))},{id:"jsonnet",name:"Jsonnet",import:(()=>p(()=>import("./jsonnet-DFQXde-d.js"),[]))},{id:"jssm",name:"JSSM",aliases:["fsl"],import:(()=>p(()=>import("./jssm-C2t-YnRu.js"),[]))},{id:"jsx",name:"JSX",import:(()=>p(()=>import("./jsx-g9-lgVsj.js"),[]))},{id:"julia",name:"Julia",aliases:["jl"],import:(()=>p(()=>import("./julia-353pQ8cl.js"),__vite__mapDeps([59,23,24,25,26,16,20,2,60])))},{id:"kotlin",name:"Kotlin",aliases:["kt","kts"],import:(()=>p(()=>import("./kotlin-BdnUsdx6.js"),[]))},{id:"kusto",name:"Kusto",aliases:["kql"],import:(()=>p(()=>import("./kusto-BvAqAH-y.js"),[]))},{id:"latex",name:"LaTeX",import:(()=>p(()=>import("./latex-CPEt12BK.js"),__vite__mapDeps([61,62,60])))},{id:"lean",name:"Lean 4",aliases:["lean4"],import:(()=>p(()=>import("./lean-qliWkHmV.js"),[]))},{id:"less",name:"Less",import:(()=>p(()=>import("./less-B1dDrJ26.js"),[]))},{id:"liquid",name:"Liquid",import:(()=>p(()=>import("./liquid-DFk8BABL.js"),__vite__mapDeps([63,1,2,3,9])))},{id:"llvm",name:"LLVM IR",import:(()=>p(()=>import("./llvm-D32k8WzR.js"),[]))},{id:"log",name:"Log file",import:(()=>p(()=>import("./log-2UxHyX5q.js"),[]))},{id:"logo",name:"Logo",import:(()=>p(()=>import("./logo-BtOb2qkB.js"),[]))},{id:"lua",name:"Lua",import:(()=>p(()=>import("./lua-BbnMAYS6.js"),__vite__mapDeps([37,26])))},{id:"luau",name:"Luau",import:(()=>p(()=>import("./luau-CXu1NL6O.js"),[]))},{id:"make",name:"Makefile",aliases:["makefile"],import:(()=>p(()=>import("./make-CHLpvVh8.js"),[]))},{id:"markdown",name:"Markdown",aliases:["md"],import:(()=>p(()=>import("./markdown-Cvjx9yec.js"),[]))},{id:"marko",name:"Marko",import:(()=>p(()=>import("./marko-BM38lbjI.js"),__vite__mapDeps([64,3,65,5,11])))},{id:"matlab",name:"MATLAB",import:(()=>p(()=>import("./matlab-D7o27uSR.js"),[]))},{id:"mdc",name:"MDC",import:(()=>p(()=>import("./mdc-DvHMhoCT.js"),__vite__mapDeps([66,40,38,15,1,2,3])))},{id:"mdx",name:"MDX",import:(()=>p(()=>import("./mdx-Cmh6b_Ma.js"),[]))},{id:"mermaid",name:"Mermaid",aliases:["mmd"],import:(()=>p(()=>import("./mermaid-DKYwYmdq.js"),[]))},{id:"mipsasm",name:"MIPS Assembly",aliases:["mips"],import:(()=>p(()=>import("./mipsasm-CKIfxQSi.js"),[]))},{id:"mojo",name:"Mojo",import:(()=>p(()=>import("./mojo-1DNp92w6.js"),[]))},{id:"move",name:"Move",import:(()=>p(()=>import("./move-DNEoBllO.js"),[]))},{id:"narrat",name:"Narrat Language",aliases:["nar"],import:(()=>p(()=>import("./narrat-DRg8JJMk.js"),[]))},{id:"nextflow",name:"Nextflow",aliases:["nf"],import:(()=>p(()=>import("./nextflow-CUEJCptM.js"),[]))},{id:"nginx",name:"Nginx",import:(()=>p(()=>import("./nginx-DknmC5AR.js"),__vite__mapDeps([67,37,26])))},{id:"nim",name:"Nim",import:(()=>p(()=>import("./nim-BZI_8mFl.js"),__vite__mapDeps([68,26,1,2,3,7,8,25,40])))},{id:"nix",name:"Nix",import:(()=>p(()=>import("./nix-BepWV7mh.js"),[]))},{id:"nushell",name:"nushell",aliases:["nu"],import:(()=>p(()=>import("./nushell-ChH_ziBE.js"),[]))},{id:"objective-c",name:"Objective-C",aliases:["objc"],import:(()=>p(()=>import("./objective-c-DXmwc3jG.js"),[]))},{id:"objective-cpp",name:"Objective-C++",import:(()=>p(()=>import("./objective-cpp-CLxacb5B.js"),[]))},{id:"ocaml",name:"OCaml",import:(()=>p(()=>import("./ocaml-C0hk2d4L.js"),[]))},{id:"pascal",name:"Pascal",import:(()=>p(()=>import("./pascal-D93ZcfNL.js"),[]))},{id:"perl",name:"Perl",import:(()=>p(()=>import("./perl-g0D2lH3a.js"),__vite__mapDeps([69,1,2,3,7,8,16])))},{id:"php",name:"PHP",import:(()=>p(()=>import("./php-Gk5eUrPQ.js"),__vite__mapDeps([70,1,2,3,7,8,16,9])))},{id:"plsql",name:"PL/SQL",import:(()=>p(()=>import("./plsql-ChMvpjG-.js"),[]))},{id:"po",name:"Gettext PO",aliases:["pot","potx"],import:(()=>p(()=>import("./po-BTJTHyun.js"),[]))},{id:"polar",name:"Polar",import:(()=>p(()=>import("./polar-C0HS_06l.js"),[]))},{id:"postcss",name:"PostCSS",import:(()=>p(()=>import("./postcss-CXtECtnM.js"),[]))},{id:"powerquery",name:"PowerQuery",import:(()=>p(()=>import("./powerquery-CEu0bR-o.js"),[]))},{id:"powershell",name:"PowerShell",aliases:["ps","ps1"],import:(()=>p(()=>import("./powershell-Dpen1YoG.js"),[]))},{id:"prisma",name:"Prisma",import:(()=>p(()=>import("./prisma-Dd19v3D-.js"),[]))},{id:"prolog",name:"Prolog",import:(()=>p(()=>import("./prolog-CbFg5uaA.js"),[]))},{id:"proto",name:"Protocol Buffer 3",aliases:["protobuf"],import:(()=>p(()=>import("./proto-DyJlTyXw.js"),[]))},{id:"pug",name:"Pug",aliases:["jade"],import:(()=>p(()=>import("./pug-Ch9lOoSd.js"),__vite__mapDeps([71,2,3,1])))},{id:"puppet",name:"Puppet",import:(()=>p(()=>import("./puppet-BMWR74SV.js"),[]))},{id:"purescript",name:"PureScript",import:(()=>p(()=>import("./purescript-CklMAg4u.js"),[]))},{id:"python",name:"Python",aliases:["py"],import:(()=>p(()=>import("./python-B6aJPvgy.js"),[]))},{id:"qml",name:"QML",import:(()=>p(()=>import("./qml-CHzV51_b.js"),__vite__mapDeps([72,2])))},{id:"qmldir",name:"QML Directory",import:(()=>p(()=>import("./qmldir-C8lEn-DE.js"),[]))},{id:"qss",name:"Qt Style Sheets",import:(()=>p(()=>import("./qss-IeuSbFQv.js"),[]))},{id:"r",name:"R",import:(()=>p(()=>import("./r-DiinP2Uv.js"),[]))},{id:"racket",name:"Racket",import:(()=>p(()=>import("./racket-BqYA7rlc.js"),[]))},{id:"raku",name:"Raku",aliases:["perl6"],import:(()=>p(()=>import("./raku-DXvB9xmW.js"),[]))},{id:"razor",name:"ASP.NET Razor",import:(()=>p(()=>import("./razor-CNXmhs1n.js"),__vite__mapDeps([73,1,2,3,74])))},{id:"reg",name:"Windows Registry Script",import:(()=>p(()=>import("./reg-C-SQnVFl.js"),[]))},{id:"regexp",name:"RegExp",aliases:["regex"],import:(()=>p(()=>import("./regexp-CDVJQ6XC.js"),[]))},{id:"rel",name:"Rel",import:(()=>p(()=>import("./rel-C3B-1QV4.js"),[]))},{id:"riscv",name:"RISC-V",import:(()=>p(()=>import("./riscv-BM1_JUlF.js"),[]))},{id:"rst",name:"reStructuredText",import:(()=>p(()=>import("./rst-DKdxLoXm.js"),__vite__mapDeps([75,15,1,2,3,23,24,25,26,16,20,28,38,76,33,34,7,8,35,11,36,13,37])))},{id:"ruby",name:"Ruby",aliases:["rb"],import:(()=>p(()=>import("./ruby-W1VRIm2Q.js"),__vite__mapDeps([33,1,2,3,34,7,8,16,35,11,36,13,23,24,25,26,28,37,38])))},{id:"rust",name:"Rust",aliases:["rs"],import:(()=>p(()=>import("./rust-B1yitclQ.js"),[]))},{id:"sas",name:"SAS",import:(()=>p(()=>import("./sas-cz2c8ADy.js"),__vite__mapDeps([77,16])))},{id:"sass",name:"Sass",import:(()=>p(()=>import("./sass-Cj5Yp3dK.js"),[]))},{id:"scala",name:"Scala",import:(()=>p(()=>import("./scala-C151Ov-r.js"),[]))},{id:"scheme",name:"Scheme",import:(()=>p(()=>import("./scheme-C98Dy4si.js"),[]))},{id:"scss",name:"SCSS",import:(()=>p(()=>import("./scss-OYdSNvt2.js"),__vite__mapDeps([5,3])))},{id:"sdbl",name:"1C (Query)",aliases:["1c-query"],import:(()=>p(()=>import("./sdbl-DVxCFoDh.js"),[]))},{id:"shaderlab",name:"ShaderLab",aliases:["shader"],import:(()=>p(()=>import("./shaderlab-Dg9Lc6iA.js"),__vite__mapDeps([78,79])))},{id:"shellscript",name:"Shell",aliases:["bash","sh","shell","zsh"],import:(()=>p(()=>import("./shellscript-Yzrsuije.js"),[]))},{id:"shellsession",name:"Shell Session",aliases:["console"],import:(()=>p(()=>import("./shellsession-BADoaaVG.js"),__vite__mapDeps([80,28])))},{id:"smalltalk",name:"Smalltalk",import:(()=>p(()=>import("./smalltalk-BERRCDM3.js"),[]))},{id:"solidity",name:"Solidity",import:(()=>p(()=>import("./solidity-BbcW6ACK.js"),[]))},{id:"soy",name:"Closure Templates",aliases:["closure-templates"],import:(()=>p(()=>import("./soy-B_7ge1HE.js"),__vite__mapDeps([81,1,2,3])))},{id:"sparql",name:"SPARQL",import:(()=>p(()=>import("./sparql-rVzFXLq3.js"),__vite__mapDeps([82,83])))},{id:"splunk",name:"Splunk Query Language",aliases:["spl"],import:(()=>p(()=>import("./splunk-BtCnVYZw.js"),[]))},{id:"sql",name:"SQL",import:(()=>p(()=>import("./sql-BLtJtn59.js"),[]))},{id:"ssh-config",name:"SSH Config",import:(()=>p(()=>import("./ssh-config-_ykCGR6B.js"),[]))},{id:"stata",name:"Stata",import:(()=>p(()=>import("./stata-BH5u7GGu.js"),__vite__mapDeps([84,16])))},{id:"stylus",name:"Stylus",aliases:["styl"],import:(()=>p(()=>import("./stylus-BEDo0Tqx.js"),[]))},{id:"svelte",name:"Svelte",import:(()=>p(()=>import("./svelte-Dt5jNKfG.js"),__vite__mapDeps([85,2,11,3,12])))},{id:"swift",name:"Swift",import:(()=>p(()=>import("./swift-Dg5xB15N.js"),[]))},{id:"system-verilog",name:"SystemVerilog",import:(()=>p(()=>import("./system-verilog-CnnmHF94.js"),[]))},{id:"systemd",name:"Systemd Units",import:(()=>p(()=>import("./systemd-4A_iFExJ.js"),[]))},{id:"talonscript",name:"TalonScript",aliases:["talon"],import:(()=>p(()=>import("./talonscript-CkByrt1z.js"),[]))},{id:"tasl",name:"Tasl",import:(()=>p(()=>import("./tasl-QIJgUcNo.js"),[]))},{id:"tcl",name:"Tcl",import:(()=>p(()=>import("./tcl-dwOrl1Do.js"),[]))},{id:"templ",name:"Templ",import:(()=>p(()=>import("./templ-0CNLO7il.js"),__vite__mapDeps([86,87,2,3])))},{id:"terraform",name:"Terraform",aliases:["tf","tfvars"],import:(()=>p(()=>import("./terraform-BETggiCN.js"),[]))},{id:"tex",name:"TeX",import:(()=>p(()=>import("./tex-B5i3u9ba.js"),__vite__mapDeps([62,60])))},{id:"toml",name:"TOML",import:(()=>p(()=>import("./toml-vGWfd6FD.js"),[]))},{id:"ts-tags",name:"TypeScript with Tags",aliases:["lit"],import:(()=>p(()=>import("./ts-tags-B9XN6NYQ.js"),__vite__mapDeps([88,11,3,2,25,26,1,16,7,8])))},{id:"tsv",name:"TSV",import:(()=>p(()=>import("./tsv-B_m7g4N7.js"),[]))},{id:"tsx",name:"TSX",import:(()=>p(()=>import("./tsx-COt5Ahok.js"),[]))},{id:"turtle",name:"Turtle",import:(()=>p(()=>import("./turtle-BsS91CYL.js"),[]))},{id:"twig",name:"Twig",import:(()=>p(()=>import("./twig-B_ULif71.js"),__vite__mapDeps([89,3,2,5,70,1,7,8,16,9,20,33,34,35,11,36,13,23,24,25,26,28,37,38])))},{id:"typescript",name:"TypeScript",aliases:["ts"],import:(()=>p(()=>import("./typescript-DlfHMoPT.js"),[]))},{id:"typespec",name:"TypeSpec",aliases:["tsp"],import:(()=>p(()=>import("./typespec-Df68jz8_.js"),[]))},{id:"typst",name:"Typst",aliases:["typ"],import:(()=>p(()=>import("./typst-DHCkPAjA.js"),[]))},{id:"v",name:"V",import:(()=>p(()=>import("./v-DljmTZ5-.js"),[]))},{id:"vala",name:"Vala",import:(()=>p(()=>import("./vala-CsfeWuGM.js"),[]))},{id:"vb",name:"Visual Basic",aliases:["cmd"],import:(()=>p(()=>import("./vb-D17OF-Vu.js"),[]))},{id:"verilog",name:"Verilog",import:(()=>p(()=>import("./verilog-BQ8w6xss.js"),[]))},{id:"vhdl",name:"VHDL",import:(()=>p(()=>import("./vhdl-CeAyd5Ju.js"),[]))},{id:"viml",name:"Vim Script",aliases:["vim","vimscript"],import:(()=>p(()=>import("./viml-CJc9bBzg.js"),[]))},{id:"vue",name:"Vue",import:(()=>p(()=>import("./vue-BEetzCYT.js"),__vite__mapDeps([90,3,2,11,9,15,1])))},{id:"vue-html",name:"Vue HTML",import:(()=>p(()=>import("./vue-html-BsD9fJC1.js"),__vite__mapDeps([91,90,3,2,11,9,15,1])))},{id:"vue-vine",name:"Vue Vine",import:(()=>p(()=>import("./vue-vine-CCdTUzyM.js"),__vite__mapDeps([92,3,5,65,93,12,90,2,11,9,15,1])))},{id:"vyper",name:"Vyper",aliases:["vy"],import:(()=>p(()=>import("./vyper-CDx5xZoG.js"),[]))},{id:"wasm",name:"WebAssembly",import:(()=>p(()=>import("./wasm-MzD3tlZU.js"),[]))},{id:"wenyan",name:"Wenyan",aliases:["文言"],import:(()=>p(()=>import("./wenyan-BV7otONQ.js"),[]))},{id:"wgsl",name:"WGSL",import:(()=>p(()=>import("./wgsl-Dx-B1_4e.js"),[]))},{id:"wikitext",name:"Wikitext",aliases:["mediawiki","wiki"],import:(()=>p(()=>import("./wikitext-BhOHFoWU.js"),[]))},{id:"wit",name:"WebAssembly Interface Types",import:(()=>p(()=>import("./wit-5i3qLPDT.js"),[]))},{id:"wolfram",name:"Wolfram",aliases:["wl"],import:(()=>p(()=>import("./wolfram-lXgVvXCa.js"),[]))},{id:"xml",name:"XML",import:(()=>p(()=>import("./xml-sdJ4AIDG.js"),__vite__mapDeps([7,8])))},{id:"xsl",name:"XSL",import:(()=>p(()=>import("./xsl-CtQFsRM5.js"),__vite__mapDeps([94,7,8])))},{id:"yaml",name:"YAML",aliases:["yml"],import:(()=>p(()=>import("./yaml-Buea-lGh.js"),[]))},{id:"zenscript",name:"ZenScript",import:(()=>p(()=>import("./zenscript-DVFEvuxE.js"),[]))},{id:"zig",name:"Zig",import:(()=>p(()=>import("./zig-VOosw3JB.js"),[]))}],om=Object.fromEntries(wc.map(e=>[e.id,e.import])),im=Object.fromEntries(wc.flatMap(e=>e.aliases?.map(t=>[t,e.import])||[])),sm={...om,...im},am=[{id:"andromeeda",displayName:"Andromeeda",type:"dark",import:(()=>p(()=>import("./andromeeda-C-Jbm3Hp.js"),[]))},{id:"aurora-x",displayName:"Aurora X",type:"dark",import:(()=>p(()=>import("./aurora-x-D-2ljcwZ.js"),[]))},{id:"ayu-dark",displayName:"Ayu Dark",type:"dark",import:(()=>p(()=>import("./ayu-dark-Cv9koXgw.js"),[]))},{id:"catppuccin-frappe",displayName:"Catppuccin Frappé",type:"dark",import:(()=>p(()=>import("./catppuccin-frappe-BBxmzUt6.js"),[]))},{id:"catppuccin-latte",displayName:"Catppuccin Latte",type:"light",import:(()=>p(()=>import("./catppuccin-latte-Jep7L2Wt.js"),[]))},{id:"catppuccin-macchiato",displayName:"Catppuccin Macchiato",type:"dark",import:(()=>p(()=>import("./catppuccin-macchiato-CIUZ1G5V.js"),[]))},{id:"catppuccin-mocha",displayName:"Catppuccin Mocha",type:"dark",import:(()=>p(()=>import("./catppuccin-mocha-NBseiqgx.js"),[]))},{id:"dark-plus",displayName:"Dark Plus",type:"dark",import:(()=>p(()=>import("./dark-plus-C3mMm8J8.js"),[]))},{id:"dracula",displayName:"Dracula Theme",type:"dark",import:(()=>p(()=>import("./dracula-BzJJZx-M.js"),[]))},{id:"dracula-soft",displayName:"Dracula Theme Soft",type:"dark",import:(()=>p(()=>import("./dracula-soft-BXkSAIEj.js"),[]))},{id:"everforest-dark",displayName:"Everforest Dark",type:"dark",import:(()=>p(()=>import("./everforest-dark-BgDCqdQA.js"),[]))},{id:"everforest-light",displayName:"Everforest Light",type:"light",import:(()=>p(()=>import("./everforest-light-C8M2exoo.js"),[]))},{id:"github-dark",displayName:"GitHub Dark",type:"dark",import:(()=>p(()=>import("./github-dark-DHJKELXO.js"),[]))},{id:"github-dark-default",displayName:"GitHub Dark Default",type:"dark",import:(()=>p(()=>import("./github-dark-default-Cuk6v7N8.js"),[]))},{id:"github-dark-dimmed",displayName:"GitHub Dark Dimmed",type:"dark",import:(()=>p(()=>import("./github-dark-dimmed-DH5Ifo-i.js"),[]))},{id:"github-dark-high-contrast",displayName:"GitHub Dark High Contrast",type:"dark",import:(()=>p(()=>import("./github-dark-high-contrast-E3gJ1_iC.js"),[]))},{id:"github-light",displayName:"GitHub Light",type:"light",import:(()=>p(()=>import("./github-light-DAi9KRSo.js"),[]))},{id:"github-light-default",displayName:"GitHub Light Default",type:"light",import:(()=>p(()=>import("./github-light-default-D7oLnXFd.js"),[]))},{id:"github-light-high-contrast",displayName:"GitHub Light High Contrast",type:"light",import:(()=>p(()=>import("./github-light-high-contrast-BfjtVDDH.js"),[]))},{id:"gruvbox-dark-hard",displayName:"Gruvbox Dark Hard",type:"dark",import:(()=>p(()=>import("./gruvbox-dark-hard-D1uDOp7C.js"),[]))},{id:"gruvbox-dark-medium",displayName:"Gruvbox Dark Medium",type:"dark",import:(()=>p(()=>import("./gruvbox-dark-medium-DkhsQLT2.js"),[]))},{id:"gruvbox-dark-soft",displayName:"Gruvbox Dark Soft",type:"dark",import:(()=>p(()=>import("./gruvbox-dark-soft-CcyOm34o.js"),[]))},{id:"gruvbox-light-hard",displayName:"Gruvbox Light Hard",type:"light",import:(()=>p(()=>import("./gruvbox-light-hard-DKzvysjW.js"),[]))},{id:"gruvbox-light-medium",displayName:"Gruvbox Light Medium",type:"light",import:(()=>p(()=>import("./gruvbox-light-medium-DPcUKYIF.js"),[]))},{id:"gruvbox-light-soft",displayName:"Gruvbox Light Soft",type:"light",import:(()=>p(()=>import("./gruvbox-light-soft-CGqH5EJj.js"),[]))},{id:"houston",displayName:"Houston",type:"dark",import:(()=>p(()=>import("./houston-DnULxvSX.js"),[]))},{id:"kanagawa-dragon",displayName:"Kanagawa Dragon",type:"dark",import:(()=>p(()=>import("./kanagawa-dragon-CkXjmgJE.js"),[]))},{id:"kanagawa-lotus",displayName:"Kanagawa Lotus",type:"light",import:(()=>p(()=>import("./kanagawa-lotus-CfQXZHmo.js"),[]))},{id:"kanagawa-wave",displayName:"Kanagawa Wave",type:"dark",import:(()=>p(()=>import("./kanagawa-wave-DWedfzmr.js"),[]))},{id:"laserwave",displayName:"LaserWave",type:"dark",import:(()=>p(()=>import("./laserwave-DUszq2jm.js"),[]))},{id:"light-plus",displayName:"Light Plus",type:"light",import:(()=>p(()=>import("./light-plus-B7mTdjB0.js"),[]))},{id:"material-theme",displayName:"Material Theme",type:"dark",import:(()=>p(()=>import("./material-theme-D5KoaKCx.js"),[]))},{id:"material-theme-darker",displayName:"Material Theme Darker",type:"dark",import:(()=>p(()=>import("./material-theme-darker-BfHTSMKl.js"),[]))},{id:"material-theme-lighter",displayName:"Material Theme Lighter",type:"light",import:(()=>p(()=>import("./material-theme-lighter-B0m2ddpp.js"),[]))},{id:"material-theme-ocean",displayName:"Material Theme Ocean",type:"dark",import:(()=>p(()=>import("./material-theme-ocean-CyktbL80.js"),[]))},{id:"material-theme-palenight",displayName:"Material Theme Palenight",type:"dark",import:(()=>p(()=>import("./material-theme-palenight-Csfq5Kiy.js"),[]))},{id:"min-dark",displayName:"Min Dark",type:"dark",import:(()=>p(()=>import("./min-dark-CafNBF8u.js"),[]))},{id:"min-light",displayName:"Min Light",type:"light",import:(()=>p(()=>import("./min-light-CTRr51gU.js"),[]))},{id:"monokai",displayName:"Monokai",type:"dark",import:(()=>p(()=>import("./monokai-D4h5O-jR.js"),[]))},{id:"night-owl",displayName:"Night Owl",type:"dark",import:(()=>p(()=>import("./night-owl-C39BiMTA.js"),[]))},{id:"nord",displayName:"Nord",type:"dark",import:(()=>p(()=>import("./nord-Ddv68eIx.js"),[]))},{id:"one-dark-pro",displayName:"One Dark Pro",type:"dark",import:(()=>p(()=>import("./one-dark-pro-DVMEJ2y_.js"),[]))},{id:"one-light",displayName:"One Light",type:"light",import:(()=>p(()=>import("./one-light-PoHY5YXO.js"),[]))},{id:"plastic",displayName:"Plastic",type:"dark",import:(()=>p(()=>import("./plastic-3e1v2bzS.js"),[]))},{id:"poimandres",displayName:"Poimandres",type:"dark",import:(()=>p(()=>import("./poimandres-CS3Unz2-.js"),[]))},{id:"red",displayName:"Red",type:"dark",import:(()=>p(()=>import("./red-bN70gL4F.js"),[]))},{id:"rose-pine",displayName:"Rosé Pine",type:"dark",import:(()=>p(()=>import("./rose-pine-BHrmToEH.js"),[]))},{id:"rose-pine-dawn",displayName:"Rosé Pine Dawn",type:"light",import:(()=>p(()=>import("./rose-pine-dawn-CnK8MTSM.js"),[]))},{id:"rose-pine-moon",displayName:"Rosé Pine Moon",type:"dark",import:(()=>p(()=>import("./rose-pine-moon-NleAzG8P.js"),[]))},{id:"slack-dark",displayName:"Slack Dark",type:"dark",import:(()=>p(()=>import("./slack-dark-BthQWCQV.js"),[]))},{id:"slack-ochin",displayName:"Slack Ochin",type:"light",import:(()=>p(()=>import("./slack-ochin-DqwNpetd.js"),[]))},{id:"snazzy-light",displayName:"Snazzy Light",type:"light",import:(()=>p(()=>import("./snazzy-light-Bw305WKR.js"),[]))},{id:"solarized-dark",displayName:"Solarized Dark",type:"dark",import:(()=>p(()=>import("./solarized-dark-DXbdFlpD.js"),[]))},{id:"solarized-light",displayName:"Solarized Light",type:"light",import:(()=>p(()=>import("./solarized-light-L9t79GZl.js"),[]))},{id:"synthwave-84",displayName:"Synthwave '84",type:"dark",import:(()=>p(()=>import("./synthwave-84-CbfX1IO0.js"),[]))},{id:"tokyo-night",displayName:"Tokyo Night",type:"dark",import:(()=>p(()=>import("./tokyo-night-hegEt444.js"),[]))},{id:"vesper",displayName:"Vesper",type:"dark",import:(()=>p(()=>import("./vesper-DU1UobuO.js"),[]))},{id:"vitesse-black",displayName:"Vitesse Black",type:"dark",import:(()=>p(()=>import("./vitesse-black-Bkuqu6BP.js"),[]))},{id:"vitesse-dark",displayName:"Vitesse Dark",type:"dark",import:(()=>p(()=>import("./vitesse-dark-D0r3Knsf.js"),[]))},{id:"vitesse-light",displayName:"Vitesse Light",type:"light",import:(()=>p(()=>import("./vitesse-light-CVO1_9PV.js"),[]))}],lm=Object.fromEntries(am.map(e=>[e.id,e.import]));class Ji extends Error{constructor(t){super(t),this.name="ShikiError"}}function cm(){return 2147483648}function um(){return typeof performance<"u"?performance.now():Date.now()}const dm=(e,t)=>e+(t-e%t)%t;async function fm(e){let t,n;const r={};function o(h){n=h,r.HEAPU8=new Uint8Array(h),r.HEAPU32=new Uint32Array(h)}function i(h,g,S){r.HEAPU8.copyWithin(h,g,g+S)}function s(h){try{return t.grow(h-n.byteLength+65535>>>16),o(t.buffer),1}catch{}}function l(h){const g=r.HEAPU8.length;h=h>>>0;const S=cm();if(h>S)return!1;for(let E=1;E<=4;E*=2){let b=g*(1+.2/E);b=Math.min(b,h+100663296);const v=Math.min(S,dm(Math.max(h,b),65536));if(s(v))return!0}return!1}const a=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function c(h,g,S=1024){const E=g+S;let b=g;for(;h[b]&&!(b>=E);)++b;if(b-g>16&&h.buffer&&a)return a.decode(h.subarray(g,b));let v="";for(;g<b;){let A=h[g++];if(!(A&128)){v+=String.fromCharCode(A);continue}const O=h[g++]&63;if((A&224)===192){v+=String.fromCharCode((A&31)<<6|O);continue}const H=h[g++]&63;if((A&240)===224?A=(A&15)<<12|O<<6|H:A=(A&7)<<18|O<<12|H<<6|h[g++]&63,A<65536)v+=String.fromCharCode(A);else{const Q=A-65536;v+=String.fromCharCode(55296|Q>>10,56320|Q&1023)}}return v}function u(h,g){return h?c(r.HEAPU8,h,g):""}const d={emscripten_get_now:um,emscripten_memcpy_big:i,emscripten_resize_heap:l,fd_write:()=>0};async function f(){const g=await e({env:d,wasi_snapshot_preview1:d});t=g.memory,o(t.buffer),Object.assign(r,g),r.UTF8ToString=u}return await f(),r}var hm=Object.defineProperty,pm=(e,t,n)=>t in e?hm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xe=(e,t,n)=>pm(e,typeof t!="symbol"?t+"":t,n);let Ie=null;function mm(e){throw new Ji(e.UTF8ToString(e.getLastOnigError()))}class _o{constructor(t){xe(this,"utf16Length"),xe(this,"utf8Length"),xe(this,"utf16Value"),xe(this,"utf8Value"),xe(this,"utf16OffsetToUtf8"),xe(this,"utf8OffsetToUtf16");const n=t.length,r=_o._utf8ByteLength(t),o=r!==n,i=o?new Uint32Array(n+1):null;o&&(i[n]=r);const s=o?new Uint32Array(r+1):null;o&&(s[r]=n);const l=new Uint8Array(r);let a=0;for(let c=0;c<n;c++){const u=t.charCodeAt(c);let d=u,f=!1;if(u>=55296&&u<=56319&&c+1<n){const h=t.charCodeAt(c+1);h>=56320&&h<=57343&&(d=(u-55296<<10)+65536|h-56320,f=!0)}o&&(i[c]=a,f&&(i[c+1]=a),d<=127?s[a+0]=c:d<=2047?(s[a+0]=c,s[a+1]=c):d<=65535?(s[a+0]=c,s[a+1]=c,s[a+2]=c):(s[a+0]=c,s[a+1]=c,s[a+2]=c,s[a+3]=c)),d<=127?l[a++]=d:d<=2047?(l[a++]=192|(d&1984)>>>6,l[a++]=128|(d&63)>>>0):d<=65535?(l[a++]=224|(d&61440)>>>12,l[a++]=128|(d&4032)>>>6,l[a++]=128|(d&63)>>>0):(l[a++]=240|(d&1835008)>>>18,l[a++]=128|(d&258048)>>>12,l[a++]=128|(d&4032)>>>6,l[a++]=128|(d&63)>>>0),f&&c++}this.utf16Length=n,this.utf8Length=r,this.utf16Value=t,this.utf8Value=l,this.utf16OffsetToUtf8=i,this.utf8OffsetToUtf16=s}static _utf8ByteLength(t){let n=0;for(let r=0,o=t.length;r<o;r++){const i=t.charCodeAt(r);let s=i,l=!1;if(i>=55296&&i<=56319&&r+1<o){const a=t.charCodeAt(r+1);a>=56320&&a<=57343&&(s=(i-55296<<10)+65536|a-56320,l=!0)}s<=127?n+=1:s<=2047?n+=2:s<=65535?n+=3:n+=4,l&&r++}return n}createString(t){const n=t.omalloc(this.utf8Length);return t.HEAPU8.set(this.utf8Value,n),n}}const yo=class gt{constructor(t){if(xe(this,"id",++gt.LAST_ID),xe(this,"_onigBinding"),xe(this,"content"),xe(this,"utf16Length"),xe(this,"utf8Length"),xe(this,"utf16OffsetToUtf8"),xe(this,"utf8OffsetToUtf16"),xe(this,"ptr"),!Ie)throw new Ji("Must invoke loadWasm first.");this._onigBinding=Ie,this.content=t;const n=new _o(t);this.utf16Length=n.utf16Length,this.utf8Length=n.utf8Length,this.utf16OffsetToUtf8=n.utf16OffsetToUtf8,this.utf8OffsetToUtf16=n.utf8OffsetToUtf16,this.utf8Length<1e4&&!gt._sharedPtrInUse?(gt._sharedPtr||(gt._sharedPtr=Ie.omalloc(1e4)),gt._sharedPtrInUse=!0,Ie.HEAPU8.set(n.utf8Value,gt._sharedPtr),this.ptr=gt._sharedPtr):this.ptr=n.createString(Ie)}convertUtf8OffsetToUtf16(t){return this.utf8OffsetToUtf16?t<0?0:t>this.utf8Length?this.utf16Length:this.utf8OffsetToUtf16[t]:t}convertUtf16OffsetToUtf8(t){return this.utf16OffsetToUtf8?t<0?0:t>this.utf16Length?this.utf8Length:this.utf16OffsetToUtf8[t]:t}dispose(){this.ptr===gt._sharedPtr?gt._sharedPtrInUse=!1:this._onigBinding.ofree(this.ptr)}};xe(yo,"LAST_ID",0);xe(yo,"_sharedPtr",0);xe(yo,"_sharedPtrInUse",!1);let Ac=yo;class gm{constructor(t){if(xe(this,"_onigBinding"),xe(this,"_ptr"),!Ie)throw new Ji("Must invoke loadWasm first.");const n=[],r=[];for(let l=0,a=t.length;l<a;l++){const c=new _o(t[l]);n[l]=c.createString(Ie),r[l]=c.utf8Length}const o=Ie.omalloc(4*t.length);Ie.HEAPU32.set(n,o/4);const i=Ie.omalloc(4*t.length);Ie.HEAPU32.set(r,i/4);const s=Ie.createOnigScanner(o,i,t.length);for(let l=0,a=t.length;l<a;l++)Ie.ofree(n[l]);Ie.ofree(i),Ie.ofree(o),s===0&&mm(Ie),this._onigBinding=Ie,this._ptr=s}dispose(){this._onigBinding.freeOnigScanner(this._ptr)}findNextMatchSync(t,n,r){let o=0;if(typeof r=="number"&&(o=r),typeof t=="string"){t=new Ac(t);const i=this._findNextMatchSync(t,n,!1,o);return t.dispose(),i}return this._findNextMatchSync(t,n,!1,o)}_findNextMatchSync(t,n,r,o){const i=this._onigBinding,s=i.findNextOnigScannerMatch(this._ptr,t.id,t.ptr,t.utf8Length,t.convertUtf16OffsetToUtf8(n),o);if(s===0)return null;const l=i.HEAPU32;let a=s/4;const c=l[a++],u=l[a++],d=[];for(let f=0;f<u;f++){const h=t.convertUtf8OffsetToUtf16(l[a++]),g=t.convertUtf8OffsetToUtf16(l[a++]);d[f]={start:h,end:g,length:g-h}}return{index:c,captureIndices:d}}}function _m(e){return typeof e.instantiator=="function"}function ym(e){return typeof e.default=="function"}function vm(e){return typeof e.data<"u"}function bm(e){return typeof Response<"u"&&e instanceof Response}function Sm(e){return typeof ArrayBuffer<"u"&&(e instanceof ArrayBuffer||ArrayBuffer.isView(e))||typeof Buffer<"u"&&Buffer.isBuffer?.(e)||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||typeof Uint32Array<"u"&&e instanceof Uint32Array}let Lr;function Em(e){if(Lr)return Lr;async function t(){Ie=await fm(async n=>{let r=e;return r=await r,typeof r=="function"&&(r=await r(n)),typeof r=="function"&&(r=await r(n)),_m(r)?r=await r.instantiator(n):ym(r)?r=await r.default(n):(vm(r)&&(r=r.data),bm(r)?typeof WebAssembly.instantiateStreaming=="function"?r=await wm(r)(n):r=await Am(r)(n):Sm(r)?r=await Uo(r)(n):r instanceof WebAssembly.Module?r=await Uo(r)(n):"default"in r&&r.default instanceof WebAssembly.Module&&(r=await Uo(r.default)(n))),"instance"in r&&(r=r.instance),"exports"in r&&(r=r.exports),r})}return Lr=t(),Lr}function Uo(e){return t=>WebAssembly.instantiate(e,t)}function wm(e){return t=>WebAssembly.instantiateStreaming(e,t)}function Am(e){return async t=>{const n=await e.arrayBuffer();return WebAssembly.instantiate(n,t)}}async function Lm(e){return e&&await Em(e),{createScanner(t){return new gm(t.map(n=>typeof n=="string"?n:n.source))},createString(t){return new Ac(t)}}}const Pm=rm({langs:sm,themes:lm,engine:()=>Lm(p(()=>import("./wasm-CG6Dc4jp.js"),[]))});class Tm{paneRefs;textareaRefs;syncScrolling;isScrollSyncing=!1;constructor(t,n,r=!0){this.paneRefs=t,this.textareaRefs=n,this.syncScrolling=nt(r)}get isSyncEnabled(){return this.syncScrolling.value}set isSyncEnabled(t){this.syncScrolling.value=t}syncScrollToPosition(t){this.isScrollSyncing||(this.isScrollSyncing=!0,this.paneRefs.value.forEach(n=>{n&&(n.scrollTop=t)}),setTimeout(()=>{this.isScrollSyncing=!1},50))}onPaneScroll(t,n){if(!this.syncScrolling.value||this.isScrollSyncing)return;const r=n.target;this.isScrollSyncing=!0;const o=r.scrollHeight-r.clientHeight,i=o>0?r.scrollTop/o:0;this.paneRefs.value.forEach((s,l)=>{if(l!==t&&s){const a=s.scrollHeight-s.clientHeight,c=a>0?i*a:0;s.scrollTop=c}}),setTimeout(()=>{this.isScrollSyncing=!1},50)}handleKeydown(t,n){const r=this.textareaRefs.value[t],o=this.paneRefs.value[t];if(!(!r||!o)&&(n.key==="ArrowUp"||n.key==="ArrowDown")){const i=o.scrollTop;setTimeout(()=>{const s=o.scrollTop;if(Math.abs(s-i)>1){console.log("🔧 Browser jumped, fixing scroll from",s,"to smooth scroll");const l=window.getComputedStyle(r),a=parseFloat(l.lineHeight),c=n.key==="ArrowDown"?1:-1,u=i+c*a,d=this.isScrollSyncing;this.isScrollSyncing=!0,o.scrollTo({top:Math.max(0,u),behavior:"smooth"}),setTimeout(()=>{this.isScrollSyncing=d},100)}},0)}}}function Rm(e,t,n=!0){const r=new Tm(e,t,n);return{scrollState:r,syncScrollToPosition:o=>r.syncScrollToPosition(o),onPaneScroll:(o,i)=>r.onPaneScroll(o,i),handleKeydown:(o,i)=>r.handleKeydown(o,i),get isSyncEnabled(){return r.isSyncEnabled},set isSyncEnabled(o){r.isSyncEnabled=o}}}const qn=15,Cm=2,xm=2;class Om{content;totalLines;globalAnchorMap;anchorParser;constructor(t,n){this.content=t,this.anchorParser=n||this.defaultAnchorParser,this.totalLines=t.split(`
`).length,this.globalAnchorMap=this.parseAnchorsFromContent(t)}defaultAnchorParser(t,n){const r=/\$(\d+)/g;r.lastIndex=0;const o=r.exec(t);return o?parseInt(o[1],10):null}parseAnchorsFromContent(t){const n=new Map,r=t.split(`
`);for(let u=0;u<r.length;u++){const d=r[u],f=this.anchorParser(d,u);f!==null&&n.set(u,f)}const o=new Map,i=Array.from(n.entries()).sort((u,d)=>u[0]-d[0]);let s=-1/0,l=0;for(const[u,d]of i)d>s?(o.set(u,d),s=d):(l++,console.warn(`Filtered non-monotonic anchor: line ${u} (${d}) <= previous (${s})`));l>0&&console.log(`Filtered ${l} non-monotonic anchors, keeping ${o.size} monotonic anchors`);const a=Array.from(o.keys()).sort((u,d)=>u-d),c=a.map(u=>o.get(u));return{anchors:o,lineNumbers:a,anchorValues:c}}getAnchorsNear(){return this.globalAnchorMap}calculateAnchorForLine(t){const{lineNumbers:n,anchorValues:r,anchors:o}=this.globalAnchorMap;if(n.length===0)return null;if(n.length===1){const l=n[0];return r[0]+(t-l)}if(o.has(t))return o.get(t);const i=this.findLastLessOrEqual(n,t),s=this.findFirstGreater(n,t);if(i<0&&s<n.length){const l=n[0],a=n[1],c=r[0],d=(r[1]-c)/(a-l);return c+d*(t-l)}if(i>=0&&s<n.length){const l=n[i],a=n[s],c=r[i],u=r[s],d=(t-l)/(a-l);return c+d*(u-c)}if(i>=0&&s>=n.length){const l=n[n.length-1],a=n[n.length-2],c=r[r.length-1],u=r[r.length-2],d=(c-u)/(l-a);return c+d*(t-l)}return null}isLineWithinAnchorRange(t){const{lineNumbers:n,anchors:r}=this.globalAnchorMap;if(n.length===0)return!1;if(r.has(t))return!0;const o=n[0],i=n[n.length-1];return t>=o&&t<=i}findLineForAnchor(t){const{lineNumbers:n,anchorValues:r,anchors:o}=this.globalAnchorMap;if(n.length===0)return null;if(n.length===1){const l=n[0],a=r[0],c=l+(t-a);return Math.round(c)}for(const[l,a]of o)if(Math.abs(a-t)<1e-10)return l;const i=this.findLastLessOrEqual(r,t),s=this.findFirstGreater(r,t);if(i<0&&s<r.length){const l=r[0],a=r[1],c=n[0],u=n[1],d=(a-l)/(u-c),f=c+(t-l)/d;return Math.round(f)}if(i>=0&&s<r.length){const l=r[i],a=r[s],c=n[i],u=n[s],d=(t-l)/(a-l),f=c+d*(u-c);return Math.round(f)}if(i>=0&&s>=r.length){const l=r[r.length-1],a=r[r.length-2],c=n[n.length-1],u=n[n.length-2],d=(l-a)/(c-u),f=c+(t-l)/d;return Math.round(f)}return null}getAnchorStats(){const{anchors:t,anchorValues:n}=this.globalAnchorMap;return{totalLines:this.totalLines,anchorCount:t.size,anchorDensity:t.size/this.totalLines,firstAnchor:n[0],lastAnchor:n[n.length-1],anchorRange:n.length>0?n[n.length-1]-n[0]:0}}findLastLessOrEqual(t,n){let r=0,o=t.length-1,i=-1;for(;r<=o;){const s=Math.floor((r+o)/2);t[s]<=n?(i=s,r=s+1):o=s-1}return i}findFirstGreater(t,n){let r=0,o=t.length-1,i=t.length;for(;r<=o;){const s=Math.floor((r+o)/2);t[s]>n?(i=s,o=s-1):r=s+1}return i}}function Im(){const e=new Map;function t(l,a,c){const u=new Om(a,c);return e.set(l,u),u}function n(l){return e.get(l)}function r(l){return e.delete(l)}function o(l,a,c){const u=e.get(l),d=e.get(c);if(!u||!d)return null;const f=u.calculateAnchorForLine(a);if(f===null)return null;const h=d.findLineForAnchor(f);if(h===null)return null;const g=d.getAnchorStats();return i(h,g.totalLines,c)}function i(l,a,c){const u=a-1;return l<0?(console.warn(`Anchor calculation resulted in line ${l} for pane ${c}, clamping to 0`),0):l>u?(console.warn(`Anchor calculation resulted in line ${l} for pane ${c}, clamping to ${u}`),u):l}function s(l,a){const c=e.get(l);return c?c.isLineWithinAnchorRange(a):!1}return{createAtlas:t,getAtlas:n,removeAtlas:r,calculateCrossAnchor:o,isLineWithinAnchorRange:s}}class km{currentAnchor=null;panes;activePaneId=null;textareaRefs;paneRefs;isSyncing=!1;anchorMode="percentage";isScrollingSynced=!1;atlasInitialized=!1;documentAtlas=Im();pendingScrollAnchor=null;scrollThrottleTimer=null;scrollThrottleDelay=100;constructor(t,n,r){this.panes=t,this.textareaRefs=n,this.paneRefs=r}calculateAnchor(t,n){const o=this.panes.value[t].content.split(`
`).length,i=n/Math.max(1,o-1);return{paneId:t.toString(),cursorLine:n,cursorColumn:0,relativePosition:Math.max(0,Math.min(1,i)),timestamp:Date.now()}}applyAnchorToPane(t,n){const r=this.panes.value[t],o=this.paneRefs.value[t];if(!r||!o)return;let i;const s=parseInt(n.paneId),l=this.hasAnchors(s),a=this.hasAnchors(t);if(l&&a&&(this.anchorMode==="content-based"||this.anchorMode==="timestamp")){this.ensureAtlasesInitialized();const c=n.paneId,u=t.toString(),d=this.documentAtlas.calculateCrossAnchor(c,n.cursorLine,u);if(d!==null)i=d;else{const f=r.content.split(`
`).length;i=Math.round(n.relativePosition*Math.max(1,f-1))}}else{const c=r.content.split(`
`).length;i=Math.round(n.relativePosition*Math.max(1,c-1))}this.applyScrollToLine(t,i)}synchronizeAllPanes(){!this.currentAnchor||this.isSyncing||(this.isSyncing=!0,this.isScrollingSynced=!0,this.panes.value.forEach((t,n)=>{n.toString()!==this.activePaneId&&this.applyAnchorToPane(n,this.currentAnchor)}),setTimeout(()=>{this.isSyncing=!1,this.isScrollingSynced=!1},250))}synchronizeAllPanesHybrid(){!this.currentAnchor||this.isSyncing||(this.isSyncing=!0,this.isScrollingSynced=!0,this.panes.value.forEach((t,n)=>{n.toString()!==this.activePaneId&&this.applyAnchorToPane(n,this.currentAnchor)}),setTimeout(()=>{this.isSyncing=!1,this.isScrollingSynced=!1},250))}applyScrollToLine(t,n){const r=this.paneRefs.value[t],o=this.textareaRefs.value[t];if(!r||!o)return;const i=window.getComputedStyle(o),s=parseFloat(i.lineHeight);let l=0;if(this.activePaneId){const d=parseInt(this.activePaneId),f=this.paneRefs.value[d],h=this.textareaRefs.value[d];if(f&&h){const g=this.getCursorPosition(d);g&&(l=g.line*s+qn-f.scrollTop)}}let c=n*s+qn-l;const u=r.scrollHeight-r.clientHeight;c=Math.max(0,Math.min(c,u)),r.scrollTo({top:c,behavior:"auto"})}onCursorMove(t,n){this.isSyncing||(this.activePaneId=t.toString(),this.currentAnchor=this.calculateAnchor(t,n),this.synchronizeAllPanesHybrid())}onPaneFocus(t){this.activePaneId=t.toString();const n=this.textareaRefs.value[t];if(n){const r=this.getCursorLine(n);this.onCursorMove(t,r)}}onScroll(t){if(this.isScrollingSynced||this.isSyncing)return;this.activePaneId=t.toString();const n=this.textareaRefs.value[t];if(n){const r=this.getCursorLine(n);this.currentAnchor=this.calculateAnchor(t,r),this.synchronizeAllPanes()}}onActiveScroll(t,n){if(this.isScrollingSynced||this.isSyncing)return;this.activePaneId=t.toString();const r=this.textareaRefs.value[t],o=this.paneRefs.value[t];if(!r||!o)return;const i=this.applyCursorTrapping(t,n);i!==n?(this.setCursorToLine(r,i),this.currentAnchor=this.calculateAnchor(t,i),this.pendingScrollAnchor=this.currentAnchor):(this.currentAnchor=this.calculateAnchor(t,n),this.pendingScrollAnchor=this.currentAnchor),this.throttledScrollSync()}setAnchorMode(t){this.anchorMode=t,(t==="content-based"||t==="timestamp")&&this.initializeAtlases()}ensureAtlasesInitialized(){!this.atlasInitialized&&(this.anchorMode==="content-based"||this.anchorMode==="timestamp")&&this.initializeAtlases()}initializeAtlases(){this.panes.value.forEach((t,n)=>{const r=n.toString();this.documentAtlas.createAtlas(r,t.content,t.tryParseAnchorFromLine),console.log(`Created atlas for pane ${r} with ${this.documentAtlas.getAtlas(r)?.getAnchorStats().anchorCount} anchors`)}),this.atlasInitialized=!0}updatePaneContent(t,n){if(this.anchorMode==="content-based"||this.anchorMode==="timestamp"){const r=t.toString(),o=this.panes.value[t];this.documentAtlas.createAtlas(r,n,o?.tryParseAnchorFromLine),console.log(`Updated atlas for pane ${r} with ${this.documentAtlas.getAtlas(r)?.getAnchorStats().anchorCount} anchors`)}}getAnchorStats(t){return this.documentAtlas.getAtlas(t.toString())?.getAnchorStats()||null}hasAnchors(t){const r=this.documentAtlas.getAtlas(t.toString())?.getAnchorStats();return r?r.anchorCount>0:!1}hasUsableAnchorsAtPosition(t){return this.hasAnchors(t)}getCurrentAnchor(){return this.currentAnchor}getActivePaneId(){return this.activePaneId}getCursorLine(t){return t.value.substring(0,t.selectionStart).split(`
`).length-1}getCursorPosition(t){const n=this.textareaRefs.value[t];if(!n)return null;const r=n.selectionStart,i=n.value.substring(0,r).split(`
`),s=i.length-1,l=i[i.length-1].length;return{line:s,column:l}}getAnchorLine(t){if(!this.currentAnchor||t.toString()===this.activePaneId)return null;const n=this.panes.value[t];if(!n)return null;const r=parseInt(this.currentAnchor.paneId),o=this.hasAnchors(r),i=this.hasAnchors(t);let s;if(o&&i&&(this.anchorMode==="content-based"||this.anchorMode==="timestamp")){this.ensureAtlasesInitialized();const l=this.currentAnchor.paneId,a=t.toString(),c=this.documentAtlas.calculateCrossAnchor(l,this.currentAnchor.cursorLine,a);if(c!==null)s=c;else{const u=n.content.split(`
`).length;s=Math.round(this.currentAnchor.relativePosition*Math.max(1,u-1))}}else{const l=n.content.split(`
`).length;s=Math.round(this.currentAnchor.relativePosition*Math.max(1,l-1))}return s}getIsSyncing(){return this.isSyncing}getIsScrollingSynced(){return this.isScrollingSynced}setScrollThrottleDelay(t){this.scrollThrottleDelay=t}getScrollThrottleDelay(){return this.scrollThrottleDelay}throttledScrollSync(){this.scrollThrottleTimer&&clearTimeout(this.scrollThrottleTimer),this.scrollThrottleTimer=window.setTimeout(()=>{if(this.pendingScrollAnchor){const t=this.pendingScrollAnchor;this.applySyncedScrollUpdate(t),this.pendingScrollAnchor=null,this.scrollThrottleTimer=null}},this.scrollThrottleDelay)}applySyncedScrollUpdate(t){this.isSyncing||(this.isSyncing=!0,this.isScrollingSynced=!0,this.panes.value.forEach((n,r)=>{r.toString()!==this.activePaneId&&this.applyAnchorToPane(r,t)}),setTimeout(()=>{this.isSyncing=!1,this.isScrollingSynced=!1},250))}applyCursorTrapping(t,n){const r=this.paneRefs.value[t],o=this.textareaRefs.value[t];if(!r||!o)return n;const i=window.getComputedStyle(o),s=parseFloat(i.lineHeight),l=r.scrollTop,a=r.clientHeight,c=qn,u=s*Cm,d=s*xm,f=Math.floor((l+u-c)/s),h=Math.floor((l+a-d-c)/s),S=this.panes.value[t].content.split(`
`).length-1;if(n>=f&&n<=h)return n;const E=Math.max(0,f),b=Math.min(S,h);return n<E?E:n>b?b:n}setCursorToLine(t,n){const r=t.value.split(`
`);let o=0;for(let i=0;i<n&&i<r.length;i++)o+=r[i].length+1;t.setSelectionRange(o,o)}}function Dm(e,t,n){const r=new km(e,t,n);return{synchronizer:r,onCursorMove:(o,i)=>r.onCursorMove(o,i),onPaneFocus:o=>r.onPaneFocus(o),onScroll:o=>r.onScroll(o),onActiveScroll:(o,i)=>r.onActiveScroll(o,i),synchronizeAllPanesHybrid:()=>r.synchronizeAllPanesHybrid(),getCurrentAnchor:()=>r.getCurrentAnchor(),getActivePaneId:()=>r.getActivePaneId(),getCursorPosition:o=>r.getCursorPosition(o),getAnchorLine:o=>r.getAnchorLine(o),setScrollThrottleDelay:o=>r.setScrollThrottleDelay(o),getScrollThrottleDelay:()=>r.getScrollThrottleDelay(),setAnchorMode:o=>r.setAnchorMode(o),updatePaneContent:(o,i)=>r.updatePaneContent(o,i),getAnchorStats:o=>r.getAnchorStats(o),hasAnchors:o=>r.hasAnchors(o),hasUsableAnchorsAtPosition:o=>r.hasUsableAnchorsAtPosition(o),getIsSyncing:()=>r.getIsSyncing(),getIsScrollingSynced:()=>r.getIsScrollingSynced()}}const Kn={pane1:`Welcome to the first pane
This is line 2 without an anchor
Line 3 also has no anchor
Line 4 continues the pattern
First anchor appears here $100
Line 6 follows the anchor
Line 7 is also unanchored
Line 8 continues
Line 9 has some content
Second anchor on this line $200
Line 11 after second anchor
Line 12 more content
Line 13 keeps going
Line 14 has text
Line 15 no anchor here
Line 16 follows where anchor would be
Line 17 continues
Line 18 more text
Line 19 building content
Fourth anchor appears $400
Line 21 after fourth
Line 22 continues
Line 23 more lines
Line 24 keeps building
Final anchor here $500`,pane2:`Second pane starts here
Line 2 in pane 2
Different content structure
Line 4 varies from pane 1
Early anchor in pane 2 temp-no-anchor-100
Line 6 different text
Line 7 unique content
Pane 2 has different spacing
Line 9 continues differently
Line 10 builds content
Line 11 no anchor here
Line 12 after where anchor would be
Line 13 different pattern
Line 14 varies
Line 15 continues
Line 16 builds up
Line 17 more content
Third anchor positioned here $300
Line 19 after third anchor
Line 20 continues
Line 21 different structure
Line 22 unique to pane 2
Line 23 builds content
Line 24 more text
Line 25 continues
Line 26 keeps going
Line 27 no anchor here
Line 28 after where fourth would be
Line 29 continues
Line 30 builds
Final anchor positioned $500
some more`,pane3:`Third pane content begins
Line 2 different structure
Line 3 unique layout
Line 4 no anchor here
Line 5 after where first would be
Line 6 continues
Line 7 different from others
Line 8 builds content
Line 9 more text
Line 10 keeps going
Line 11 continues
Second anchor here $200
Line 13 after second
Line 14 different spacing
Line 15 varies from other panes
Line 16 continues
Line 17 builds
Line 18 more content
Line 19 different structure
Line 20 keeps going
Third anchor positioned $300
Line 22 after third
Line 23 continues
Line 24 builds content
Line 25 more text
Line 26 different from others
Line 27 continues
Line 28 builds
Line 29 more content
Fourth anchor here $400
Line 31 after fourth
Line 32 continues
Line 33 builds content
Line 34 more text
Line 35 different structure
Line 36 no anchor here`},Bo={pane1:`Left pane starts here
Line 2 building content
Line 3 more text
Line 4 continues
First anchor appears here $100
Line 6 follows the anchor
Line 7 is also unanchored
Line 8 continues
Line 9 has some content
Second anchor on this line $200
Line 11 after second anchor
Line 12 more content
Line 13 keeps going
Line 14 has text
Line 15 no anchor here
Line 16 follows
Line 17 continues
Line 18 more text
Line 19 building content
Third anchor appears $300
Line 21 after third
Line 22 continues
Line 23 more lines
Line 24 keeps building
Final anchor here $400`,pane2:`Middle pane starts here
Line 2 in middle pane
Different content structure
Line 4 varies from left pane
Early anchor in middle pane $500
Line 6 different text
Line 7 unique content
Middle pane has different spacing
Line 9 continues differently
Line 10 builds content
Line 11 no anchor here
Line 12 continues
Line 13 different pattern
Line 14 varies
Second anchor positioned here $600
Line 16 after second anchor
Line 17 builds up
Line 18 more content
Line 19 continues
Line 20 different structure
Line 21 unique to middle pane
Line 22 builds content
Third anchor here $700
Line 24 after third anchor
Final anchor positioned $800`,pane3:`Right pane content begins
Line 2 different structure
Line 3 unique layout
Line 4 no anchor here
Line 5 continues
Line 6 different from others
Line 7 builds content
Line 8 more text
First anchor here $900
Line 10 after first anchor
Line 11 continues
Line 12 different spacing
Line 13 varies from other panes
Line 14 continues
Line 15 builds
Second anchor positioned $1000
Line 17 after second
Line 18 more content
Line 19 different structure
Line 20 keeps going
Line 21 continues
Line 22 builds content
Line 23 more text
Third anchor here $1100
Line 25 after third
Line 26 different from others
Line 27 continues
Line 28 builds
Line 29 more content
Final anchor positioned $1200`},Nm={generateLargeContent(e,t=100,n=0){const r=[];let o=100,i=t,s=n;const l=()=>(s=(s*9301+49297)%233280,s/233280);for(let a=0;a<e;a++)if(a===i&&a>0){r.push(`Line ${a+1} with anchor $${o}`),o+=100;const c=(l()*.8-.3)*t,u=Math.max(20,Math.round(t+c));i=a+u}else r.push(`Line ${a+1} regular content`);return r.join(`
`)},generate3PaneSet(){return{panes:[{title:"Left Pane (2000 lines)",content:this.generateLargeContent(2e3,100,1),language:"javascript"},{title:"Middle Pane (2000 lines)",content:this.generateLargeContent(2e3,100,42),language:"typescript"},{title:"Right Pane (2000 lines)",content:this.generateLargeContent(2e3,100,99),language:"css"}]}}},Mm={name:"anchor-test-3-panes",description:"Test content with explicit $integer anchors for testing content-based synchronization",panes:[{title:"First Pane",content:Kn.pane1,language:"javascript",tryParseAnchorFromLine:e=>{const t=e.match(/\$(\d+)/);return t?parseInt(t[1],10):null}},{title:"Second Pane",content:Kn.pane2,language:"javascript",tryParseAnchorFromLine:e=>{const t=e.match(/\$(\d+)/);return t?parseInt(t[1],10):null}},{title:"Third Pane",content:Kn.pane3,language:"javascript",tryParseAnchorFromLine:e=>{const t=e.match(/\$(\d+)/);return t?parseInt(t[1],10):null}}]},Vm={name:"anchor-test",description:"Test content with explicit $integer anchors for testing content-based synchronization",panes:[{title:"First Pane",content:Kn.pane1,language:"javascript",tryParseAnchorFromLine:e=>{const t=e.match(/\$(\d+)/);return t?parseInt(t[1],10):null}},{title:"Second Pane",content:Kn.pane2,language:"javascript",tryParseAnchorFromLine:e=>{const t=e.match(/\$(\d+)/);return t?parseInt(t[1],10):null}}]},$m={name:"anchor-test-progressive",description:"Test content with progressive anchor values increasing from left to right panes",panes:[{title:"Left Pane ($100-400)",content:Bo.pane1,language:"javascript",tryParseAnchorFromLine:e=>{const t=e.match(/\$(\d+)/);return t?parseInt(t[1],10):null}},{title:"Middle Pane ($500-800)",content:Bo.pane2,language:"javascript",tryParseAnchorFromLine:e=>{const t=e.match(/\$(\d+)/);return t?parseInt(t[1],10):null}},{title:"Right Pane ($900-1200)",content:Bo.pane3,language:"javascript",tryParseAnchorFromLine:e=>{const t=e.match(/\$(\d+)/);return t?parseInt(t[1],10):null}}]},jm=Object.freeze(Object.defineProperty({__proto__:null,anchorTest2:Vm,anchorTest3:Mm,anchorTestProgressive:$m},Symbol.toStringTag,{value:"Module"})),Um={name:"api-patterns",description:"API and backend patterns",panes:[{title:"Express API",content:`import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});
app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// API routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0'
  });
});

app.get('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({
        error: 'User not found',
        code: 'USER_NOT_FOUND'
      });
    }

    res.json({ data: user });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({
      error: 'Internal server error',
      code: 'INTERNAL_ERROR'
    });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const userData = req.body;

    // Validation
    const validation = validateUserData(userData);
    if (!validation.valid) {
      return res.status(400).json({
        error: 'Validation failed',
        code: 'VALIDATION_ERROR',
        details: validation.errors
      });
    }

    const newUser = await createUser(userData);
    res.status(201).json({ data: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({
      error: 'Internal server error',
      code: 'INTERNAL_ERROR'
    });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({
    error: 'Something went wrong',
    code: 'UNHANDLED_ERROR'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    code: 'NOT_FOUND'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});

export default app;`,language:"typescript"},{title:"Database Models",content:`import { Pool } from 'pg';
import bcrypt from 'bcrypt';
import { z } from 'zod';

// Database connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
});

// Validation schemas
const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  role: z.enum(['admin', 'user']).default('user')
});

const UpdateUserSchema = UserSchema.partial().omit({ password: true });

export type User = z.infer<typeof UserSchema>;
export type UpdateUser = z.infer<typeof UpdateUserSchema>;

// User model functions
export async function createUser(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
  const validation = UserSchema.safeParse(userData);
  if (!validation.success) {
    throw new Error(\`Validation failed: \${validation.error.message}\`);
  }

  const { email, password, firstName, lastName, role } = validation.data;

  // Hash password
  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const query = \`
    INSERT INTO users (email, password_hash, first_name, last_name, role, created_at, updated_at)
    VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
    RETURNING id, email, first_name, last_name, role, created_at, updated_at
  \`;

  const result = await pool.query(query, [email, hashedPassword, firstName, lastName, role]);
  return result.rows[0];
}

export async function getUserById(id: string) {
  const query = \`
    SELECT id, email, first_name, last_name, role, created_at, updated_at
    FROM users
    WHERE id = $1 AND deleted_at IS NULL
  \`;

  const result = await pool.query(query, [id]);
  return result.rows[0] || null;
}

export async function getUserByEmail(email: string) {
  const query = \`
    SELECT id, email, password_hash, first_name, last_name, role, created_at, updated_at
    FROM users
    WHERE email = $1 AND deleted_at IS NULL
  \`;

  const result = await pool.query(query, [email]);
  return result.rows[0] || null;
}

export async function updateUser(id: string, updates: UpdateUser) {
  const validation = UpdateUserSchema.safeParse(updates);
  if (!validation.success) {
    throw new Error(\`Validation failed: \${validation.error.message}\`);
  }

  const fields = Object.keys(validation.data);
  const values = Object.values(validation.data);

  if (fields.length === 0) {
    throw new Error('No fields to update');
  }

  const setClause = fields.map((field, index) =>
    \`\${field.replace(/([A-Z])/g, '_$1').toLowerCase()} = $\${index + 2}\`
  ).join(', ');

  const query = \`
    UPDATE users
    SET \${setClause}, updated_at = NOW()
    WHERE id = $1 AND deleted_at IS NULL
    RETURNING id, email, first_name, last_name, role, created_at, updated_at
  \`;

  const result = await pool.query(query, [id, ...values]);
  return result.rows[0] || null;
}

export async function deleteUser(id: string) {
  const query = \`
    UPDATE users
    SET deleted_at = NOW()
    WHERE id = $1 AND deleted_at IS NULL
    RETURNING id
  \`;

  const result = await pool.query(query, [id]);
  return result.rows[0] || null;
}

export async function verifyPassword(plainPassword: string, hashedPassword: string) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

// Helper function for validation
export function validateUserData(data: any) {
  const result = UserSchema.safeParse(data);
  return {
    valid: result.success,
    errors: result.success ? [] : result.error.issues
  };
}`,language:"typescript"},{title:"Authentication",content:`import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { getUserByEmail, verifyPassword } from './models/user';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

// Generate JWT token
export function generateToken(payload: object): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

// Verify JWT token
export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

// Authentication middleware
export async function authenticate(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        error: 'Authentication required',
        code: 'AUTH_REQUIRED'
      });
    }

    const token = authHeader.substring(7);
    const decoded = verifyToken(token) as any;

    if (!decoded) {
      return res.status(401).json({
        error: 'Invalid or expired token',
        code: 'INVALID_TOKEN'
      });
    }

    req.user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role
    };

    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({
      error: 'Authentication failed',
      code: 'AUTH_ERROR'
    });
  }
}

// Authorization middleware
export function authorize(roles: string[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        error: 'Authentication required',
        code: 'AUTH_REQUIRED'
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        error: 'Insufficient permissions',
        code: 'INSUFFICIENT_PERMISSIONS'
      });
    }

    next();
  };
}

// Login endpoint
export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: 'Email and password are required',
        code: 'MISSING_CREDENTIALS'
      });
    }

    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(401).json({
        error: 'Invalid credentials',
        code: 'INVALID_CREDENTIALS'
      });
    }

    const isValidPassword = await verifyPassword(password, user.password_hash);
    if (!isValidPassword) {
      return res.status(401).json({
        error: 'Invalid credentials',
        code: 'INVALID_CREDENTIALS'
      });
    }

    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role
    });

    res.json({
      data: {
        token,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          role: user.role
        }
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      error: 'Login failed',
      code: 'LOGIN_ERROR'
    });
  }
}

// Logout endpoint (if using token blacklisting)
export async function logout(req: AuthenticatedRequest, res: Response) {
  // In a real app, you might want to blacklist the token
  // For now, we'll just return success since JWTs are stateless
  res.json({ message: 'Logged out successfully' });
}

// Refresh token endpoint
export async function refreshToken(req: AuthenticatedRequest, res: Response) {
  try {
    if (!req.user) {
      return res.status(401).json({
        error: 'Authentication required',
        code: 'AUTH_REQUIRED'
      });
    }

    const newToken = generateToken({
      id: req.user.id,
      email: req.user.email,
      role: req.user.role
    });

    res.json({ data: { token: newToken } });
  } catch (error) {
    console.error('Token refresh error:', error);
    res.status(500).json({
      error: 'Token refresh failed',
      code: 'REFRESH_ERROR'
    });
  }
}`,language:"typescript"}]},Bm=Object.freeze(Object.defineProperty({__proto__:null,apiPatterns:Um},Symbol.toStringTag,{value:"Module"})),Hm={name:"basic",description:"Basic JavaScript, TypeScript, and CSS examples",panes:[{title:"JavaScript",content:`function helloWorld() {
  console.log("Hello from pane 1!");
  return "Hello World";
}

const message = helloWorld();
console.log(message);

// More content to demonstrate scrolling
for (let i = 0; i < 20; i++) {
  console.log(\`Line \${i + 1}\`);
}

function helloWorld() {
  console.log("Hello from pane 1!");
  return "Hello World";
}

const message = helloWorld();
console.log(message);

// More content to demonstrate scrolling
for (let i = 0; i < 20; i++) {
  console.log(\`Line \${i + 1}\`);
}

function helloWorld() {
  console.log("Hello from pane 1!");
  return "Hello World";
}

const message = helloWorld();
console.log(message);

// More content to demonstrate scrolling
for (let i = 0; i < 20; i++) {
  console.log(\`Line \${i + 1}\`);
}

function helloWorld() {
  console.log("Hello from pane 1!");
  return "Hello World";
}

const message = helloWorld();
console.log(message);

// More content to demonstrate scrolling
for (let i = 0; i < 20; i++) {
  console.log(\`Line \${i + 1}\`);
}

function helloWorld() {
  console.log("Hello from pane 1!");
  return "Hello World";
}

const message = helloWorld();
console.log(message);

// More content to demonstrate scrolling
for (let i = 0; i < 20; i++) {
  console.log(\`Line \${i + 1}\`);
}

function helloWorld() {
  console.log("Hello from pane 1!");
  return "Hello World";
}

const message = helloWorld();
console.log(message);

// More content to demonstrate scrolling
for (let i = 0; i < 20; i++) {
  console.log(\`Line \${i + 1}\`);
}

function helloWorld() {
  console.log("Hello from pane 1!");
  return "Hello World";
}

const message = helloWorld();
console.log(message);

// More content to demonstrate scrolling
for (let i = 0; i < 20; i++) {
  console.log(\`Line \${i + 1}\`);
}

function helloWorld() {
  console.log("Hello from pane 1!");
  return "Hello World";
}

const message = helloWorld();
console.log(message);

// More content to demonstrate scrolling
for (let i = 0; i < 20; i++) {
  console.log(\`Line \${i + 1}\`);
}

function helloWorld() {
  console.log("Hello from pane 1!");
  return "Hello World";
}

const message = helloWorld();
console.log(message);

// More content to demonstrate scrolling
for (let i = 0; i < 20; i++) {
  console.log(\`Line \${i + 1}\`);
}

function helloWorld() {
  console.log("Hello from pane 1!");
  return "Hello World";
}

const message = helloWorld();
console.log(message);

// More content to demonstrate scrolling
for (let i = 0; i < 20; i++) {
  console.log(\`Line \${i + 1}\`);
}

function helloWorld() {
  console.log("Hello from pane 1!");
  return "Hello World";
}

const message = helloWorld();
console.log(message);

// More content to demonstrate scrolling
for (let i = 0; i < 20; i++) {
  console.log(\`Line \${i + 1}\`);
}`,language:"javascript"},{title:"TypeScript",content:`interface User {
  name: string;
  age: number;
}

function greetUser(user: User): string {
  return \`Hello, \${user.name}! You are \${user.age} years old.\`;
}`,language:"typescript"},{title:"CSS",content:`.multi-pane-editor {
  display: flex;
  height: 100vh;
  background: #f5f5f5;
}

.editor-pane {
  border-right: 1px solid #ddd;
  background: white;
}

.pane-header {
  padding: 10px;
  background: #f0f0f0;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

/* More CSS rules to demonstrate scrolling */
.pane-content {
  overflow: auto;
  height: calc(100vh - 50px);
  padding: 10px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
}

pre {
  margin: 0;
  white-space: pre-wrap;
}

.multi-pane-editor {
  display: flex;
  height: 100vh;
  background: #f5f5f5;
}

.editor-pane {
  border-right: 1px solid #ddd;
  background: white;
}

.pane-header {
  padding: 10px;
  background: #f0f0f0;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

/* More CSS rules to demonstrate scrolling */
.pane-content {
  overflow: auto;
  height: calc(100vh - 50px);
  padding: 10px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
}

pre {
  margin: 0;
  white-space: pre-wrap;
}

.multi-pane-editor {
  display: flex;
  height: 100vh;
  background: #f5f5f5;
}

.editor-pane {
  border-right: 1px solid #ddd;
  background: white;
}

.pane-header {
  padding: 10px;
  background: #f0f0f0;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

/* More CSS rules to demonstrate scrolling */
.pane-content {
  overflow: auto;
  height: calc(100vh - 50px);
  padding: 10px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
}

pre {
  margin: 0;
  white-space: pre-wrap;
}

.multi-pane-editor {
  display: flex;
  height: 100vh;
  background: #f5f5f5;
}

.editor-pane {
  border-right: 1px solid #ddd;
  background: white;
}

.pane-header {
  padding: 10px;
  background: #f0f0f0;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

/* More CSS rules to demonstrate scrolling */
.pane-content {
  overflow: auto;
  height: calc(100vh - 50px);
  padding: 10px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
}

pre {
  margin: 0;
  white-space: pre-wrap;
}

.multi-pane-editor {
  display: flex;
  height: 100vh;
  background: #f5f5f5;
}

.editor-pane {
  border-right: 1px solid #ddd;
  background: white;
}

.pane-header {
  padding: 10px;
  background: #f0f0f0;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

/* More CSS rules to demonstrate scrolling */
.pane-content {
  overflow: auto;
  height: calc(100vh - 50px);
  padding: 10px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
}

pre {
  margin: 0;
  white-space: pre-wrap;
}

.multi-pane-editor {
  display: flex;
  height: 100vh;
  background: #f5f5f5;
}

.editor-pane {
  border-right: 1px solid #ddd;
  background: white;
}

.pane-header {
  padding: 10px;
  background: #f0f0f0;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

/* More CSS rules to demonstrate scrolling */
.pane-content {
  overflow: auto;
  height: calc(100vh - 50px);
  padding: 10px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
}

pre {
  margin: 0;
  white-space: pre-wrap;
}

.multi-pane-editor {
  display: flex;
  height: 100vh;
  background: #f5f5f5;
}

.editor-pane {
  border-right: 1px solid #ddd;
  background: white;
}

.pane-header {
  padding: 10px;
  background: #f0f0f0;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

/* More CSS rules to demonstrate scrolling */
.pane-content {
  overflow: auto;
  height: calc(100vh - 50px);
  padding: 10px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
}

pre {
  margin: 0;
  white-space: pre-wrap;
}

.multi-pane-editor {
  display: flex;
  height: 100vh;
  background: #f5f5f5;
}

.editor-pane {
  border-right: 1px solid #ddd;
  background: white;
}

.pane-header {
  padding: 10px;
  background: #f0f0f0;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

/* More CSS rules to demonstrate scrolling */
.pane-content {
  overflow: auto;
  height: calc(100vh - 50px);
  padding: 10px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
}

pre {
  margin: 0;
  white-space: pre-wrap;
}

.multi-pane-editor {
  display: flex;
  height: 100vh;
  background: #f5f5f5;
}

.editor-pane {
  border-right: 1px solid #ddd;
  background: white;
}

.pane-header {
  padding: 10px;
  background: #f0f0f0;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

/* More CSS rules to demonstrate scrolling */
.pane-content {
  overflow: auto;
  height: calc(100vh - 50px);
  padding: 10px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
}

pre {
  margin: 0;
  white-space: pre-wrap;
}

.multi-pane-editor {
  display: flex;
  height: 100vh;
  background: #f5f5f5;
}

.editor-pane {
  border-right: 1px solid #ddd;
  background: white;
}

.pane-header {
  padding: 10px;
  background: #f0f0f0;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

/* More CSS rules to demonstrate scrolling */
.pane-content {
  overflow: auto;
  height: calc(100vh - 50px);
  padding: 10px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
}

pre {
  margin: 0;
  white-space: pre-wrap;
}`,language:"css"}]},zm=Object.freeze(Object.defineProperty({__proto__:null,basic:Hm},Symbol.toStringTag,{value:"Module"})),Et=`interface User {
  name: string;
  age: number;
}

function greetUser(user: User): string {
  return \`Hello, \${user.name}! You are \${user.age} years old.\`;
}`,Fm={name:"identical-test",description:"Identical content across all panes for testing anchor sync asymmetry",panes:[{title:"A",content:Et+Et+Et,language:"javascript"},{title:"B",content:Et+Et+Et,language:"javascript"},{title:"C",content:Et+Et+Et,language:"javascript"}]},Wm=Object.freeze(Object.defineProperty({__proto__:null,identicalTest:Fm},Symbol.toStringTag,{value:"Module"})),Gm={name:"log-and-html",description:"Format test",panes:[{title:"Log",content:`
[2025.08.14-07.42.45:712][298]LogInit: OS: Ubuntu 22.04.5 LTS (6.8.0-1021-aws), CPU: CPUPart_0xd4f rev1, GPU: UnknownVendor
[2025.08.14-07.42.45:712][298]LogInit: Compiled (64-bit): Aug 12 2025 22:22:07
[2025.08.14-07.42.45:712][298]LogInit: Architecture: arm64
[2025.08.14-07.42.45:712][298]LogInit: Compiled with Clang: 18.1.8 (A:/FNRelease/36.30/Engine/Intermediate/AutoRTFM/llvm-repo 3b5b5c1ec4a3095ab096dd780e84d7ab81f3d7ff)
[2025.08.14-07.42.45:712][298]LogInit: Build Configuration: Shipping
[2025.08.14-07.42.45:712][298]LogInit: Branch Name: ++Fortnite+Release-37.00
[2025.08.14-07.42.45:712][298]LogInit: Command Line: creative_noapollo_terrain -ServesPlaylists="Playlist_PlaygroundV2" -ini:Engine:[SystemSettings]:Preload.Playlist=Playlist_PlaygroundV2,[SystemSettings]:Preload.CreativeManagers=1,[SystemSettings]:Preload.BuildNavigationData=1 -core -CleanCrashReports -checkpak -vmapoolscale=1 -virtmemkb=32000000 -EnableServerManifest -useksm -preloadmodulesymbols -epicapp=Fortnite  -AcknowledgeLiveServer  -log=fortnite-83-62cc3f14-a0bd-4e8a-83a1-dbe048b7dc23-20250814074243.log -port=9083 -beaconport=15083 -statsport=24083 -DCID=fortnite-live-main-cmcore-oce-syd-aws-ap-southeast-2-m8g8xlarge-44799932 -hosttype=m8g.8xlarge -fleetmode=cmcore -mcpregion=OCE -mcpsubregion=SYD -SidecarPortOverride=8002 -ServerVKContentRootDir=fortnite-83-62cc3f14-a0bd-4e8a-83a1-dbe048b7dc23-20250814074243 -ServerIOInstallCacheDir=fortnite-83-62cc3f14-a0bd-4e8a-83a1-dbe048b7dc23-20250814074243/iostore -SessionCreationTokenFile=/opt/epic/offset_2/run/encrypted_sts_nonce/62cc3f14-a0bd-4e8a-83a1-dbe048b7dc23 -HostSecurityToken=/opt/epic/offset_2/run/host_security_jwt/62cc3f14-a0bd-4e8a-83a1-dbe048b7dc23 -UseLocalIPs -SessionIp=3.26.120.223 -ExecID=62cc3f14-a0bd-4e8a-83a1-dbe048b7dc23

[2025.08.14-07.42.45:712][298]LogInit: Base Directory: /opt/epic/offset_2/LinuxServer/FortniteGame/Binaries/LinuxArm64/
[2025.08.14-07.42.45:712][298]LogInit: Allocator: Binned2
[2025.08.14-07.42.45:712][298]LogInit: Installed Engine Build: 0
[2025.08.14-07.42.45:712][298]LogInit: This binary is optimized with LTO: yes, PGO: yes, instrumented for PGO data collection: no
[2025.08.14-07.42.45:712][298]LogOnlineIdentity: MCP: invalidating all 2 cached client auth tokens in post-fork child process
[2025.08.14-07.42.45:713][298]LogIoStoreOnDemand: Initializing install cache, MaxCacheSize=1024.00 MiB, MaxJournalSize=2048.00 KiB
`,language:"log"},{title:"HTML",content:`<template>
  <div class="multi-pane-editor">
    <div class="pane-container">
      <div
        v-for="(pane, index) in panes"
        :key="index"
        class="editor-pane"
      >
        <div class="pane-header">
          <span class="pane-title">{{ pane.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>`,language:"html"}]},qm=Object.freeze(Object.defineProperty({__proto__:null,logAndHtml:Gm},Symbol.toStringTag,{value:"Module"})),Km={name:"minimal",description:"Short content for basic testing",panes:[{title:"Simple JS",content:`console.log("Hello World");

function test() {
  return 42;
}

const result = test();`,language:"javascript"},{title:"Simple TS",content:`interface Point {
  x: number;
  y: number;
}

const origin: Point = { x: 0, y: 0 };`,language:"typescript"},{title:"Simple CSS",content:`.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}`,language:"css"}]},Jm=Object.freeze(Object.defineProperty({__proto__:null,minimal:Km},Symbol.toStringTag,{value:"Module"})),Ym=Nm.generate3PaneSet(),Qm={name:"performance-test",description:"Performance test with 3 panes of 2000 lines each, with varied anchor gaps",panes:Ym.panes.map(e=>({...e,tryParseAnchorFromLine:t=>{const n=t.match(/\$(\d+)/);return n?parseInt(n[1],10):null}}))},Xm=Object.freeze(Object.defineProperty({__proto__:null,performanceTest:Qm},Symbol.toStringTag,{value:"Module"})),Zm={name:"react-components",description:"React component examples",panes:[{title:"Button Component",content:`import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false
}) => {
  const baseClasses = 'px-4 py-2 rounded font-medium transition-colors';
  const variantClasses = variant === 'primary'
    ? 'bg-blue-500 text-white hover:bg-blue-600'
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={\`\${baseClasses} \${variantClasses} \${disabledClasses}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// Usage example
const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="p-4">
      <Button onClick={handleClick}>
        Primary Button
      </Button>
      <Button
        onClick={handleClick}
        variant="secondary"
      >
        Secondary Button
      </Button>
      <Button
        onClick={handleClick}
        disabled
      >
        Disabled Button
      </Button>
    </div>
  );
};`,language:"typescript"},{title:"Card Component",content:`import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  className = '',
  footer
}) => {
  return (
    <div className={\`bg-white rounded-lg shadow-md border border-gray-200 \${className}\`}>
      {title && (
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            {title}
          </h3>
        </div>
      )}

      <div className="px-6 py-4">
        {children}
      </div>

      {footer && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          {footer}
        </div>
      )}
    </div>
  );
};

// Usage example
const UserProfile = () => {
  return (
    <Card
      title="User Profile"
      footer={
        <div className="flex justify-end space-x-2">
          <Button variant="secondary">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            defaultValue="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            defaultValue="john@example.com"
          />
        </div>
      </div>
    </Card>
  );
};`,language:"typescript"},{title:"Tailwind Styles",content:`/* Custom component styles using Tailwind utilities */

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Component layer for reusable styles */
@layer components {
  .btn-base {
    @apply px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2;
  }

  .btn-primary {
    @apply btn-base bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500;
  }

  .btn-secondary {
    @apply btn-base bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500;
  }

  .btn-danger {
    @apply btn-base bg-red-500 text-white hover:bg-red-600 focus:ring-red-500;
  }

  .card {
    @apply bg-white rounded-lg shadow-md border border-gray-200;
  }

  .card-header {
    @apply px-6 py-4 border-b border-gray-200;
  }

  .card-body {
    @apply px-6 py-4;
  }

  .card-footer {
    @apply px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg;
  }

  .form-input {
    @apply mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500;
  }

  .form-label {
    @apply block text-sm font-medium text-gray-700;
  }

  .form-error {
    @apply mt-1 text-sm text-red-600;
  }

  .badge {
    @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium;
  }

  .badge-primary {
    @apply badge bg-blue-100 text-blue-800;
  }

  .badge-success {
    @apply badge bg-green-100 text-green-800;
  }

  .badge-warning {
    @apply badge bg-yellow-100 text-yellow-800;
  }

  .badge-danger {
    @apply badge bg-red-100 text-red-800;
  }
}

/* Utility layer for one-off styles */
@layer utilities {
  .text-shadow {
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .scroll-smooth {
    scroll-behavior: smooth;
  }

  .gradient-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
}

/* Base layer for element defaults */
@layer base {
  html {
    @apply scroll-smooth;
  }

  body {
    @apply bg-gray-50 text-gray-900;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-semibold;
  }

  a {
    @apply text-blue-600 hover:text-blue-800 transition-colors;
  }

  code {
    @apply bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono;
  }

  pre code {
    @apply bg-transparent p-0;
  }
}`,language:"css"}]},eg=Object.freeze(Object.defineProperty({__proto__:null,reactComponents:Zm},Symbol.toStringTag,{value:"Module"}));function na(e){const t=/\[(\d{4})\.(\d{2})\.(\d{2})-(\d{2})\.(\d{2})\.(\d{2}):(\d{3})\]/,n=e.match(t);if(n){const[,r,o,i,s,l,a,c]=n,u=new Date(parseInt(r),parseInt(o)-1,parseInt(i),parseInt(s),parseInt(l),parseInt(a),parseInt(c)),d=new Date(2025,7,20,12,51,51,0);return u.getTime()-d.getTime()}return null}const tg={name:"ue-logs",description:"Empty panes for logs to be pasted in",panes:[{title:"Log 1",content:"Paste log content here!",language:"log",tryParseAnchorFromLine:na},{title:"Log 2",content:"Paste log content here!",language:"log",tryParseAnchorFromLine:na}]},ng=Object.freeze(Object.defineProperty({__proto__:null,ueLogs:tg},Symbol.toStringTag,{value:"Module"})),rg={name:"vue-demo",description:"Vue 3 Composition API examples",panes:[{title:"Vue Component",content:`<template>
  <div class="counter-app">
    <h1>{{ title }}</h1>
    <div class="counter-display">
      <span class="count">{{ count }}</span>
    </div>
    <div class="controls">
      <button @click="decrement" :disabled="count <= 0">-</button>
      <button @click="reset">Reset</button>
      <button @click="increment">+</button>
    </div>
    <div class="status">
      <p v-if="count === 0">Counter is at zero</p>
      <p v-else-if="count < 5" class="low">Low count</p>
      <p v-else-if="count < 10" class="medium">Medium count</p>
      <p v-else class="high">High count!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

// Props
interface Props {
  initialCount?: number
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  initialCount: 0,
  title: 'Counter App'
})

// State
const count = ref(props.initialCount)

// Computed
const isEven = computed(() => count.value % 2 === 0)
const status = computed(() => {
  if (count.value === 0) return 'zero'
  if (count.value < 5) return 'low'
  if (count.value < 10) return 'medium'
  return 'high'
})

// Methods
const increment = () => {
  count.value++
}

const decrement = () => {
  if (count.value > 0) {
    count.value--
  }
}

const reset = () => {
  count.value = 0
}

// Watchers
watch(count, (newCount, oldCount) => {
  console.log(\`Count changed from \${oldCount} to \${newCount}\`)

  if (newCount === 10) {
    console.log('🎉 You reached 10!')
  }
})

// Lifecycle
onMounted(() => {
  console.log('Counter component mounted')
})

onUnmounted(() => {
  console.log('Counter component unmounted')
})

// Emits
const emit = defineEmits<{
  countChanged: [value: number]
}>()

watch(count, (newValue) => {
  emit('countChanged', newValue)
})
<\/script>`,language:"typescript"},{title:"Composable",content:`import { ref, computed, watch } from 'vue'

export interface UseCounterOptions {
  min?: number
  max?: number
  step?: number
  initial?: number
}

export function useCounter(options: UseCounterOptions = {}) {
  const {
    min = 0,
    max = Infinity,
    step = 1,
    initial = 0
  } = options

  // State
  const count = ref(Math.max(min, Math.min(max, initial)))

  // Computed
  const isAtMin = computed(() => count.value <= min)
  const isAtMax = computed(() => count.value >= max)
  const canIncrement = computed(() => !isAtMax.value)
  const canDecrement = computed(() => !isAtMin.value)

  // Methods
  const increment = (amount = step) => {
    const newValue = count.value + amount
    count.value = Math.min(max, newValue)
  }

  const decrement = (amount = step) => {
    const newValue = count.value - amount
    count.value = Math.max(min, newValue)
  }

  const set = (value: number) => {
    count.value = Math.max(min, Math.min(max, value))
  }

  const reset = () => {
    count.value = initial
  }

  // Watch for boundary violations
  watch(count, (newValue) => {
    if (newValue < min) {
      count.value = min
    } else if (newValue > max) {
      count.value = max
    }
  })

  return {
    count: readonly(count),
    increment,
    decrement,
    set,
    reset,
    isAtMin,
    isAtMax,
    canIncrement,
    canDecrement
  }
}

// Usage example:
export function useCounterExample() {
  const { count, increment, decrement, reset } = useCounter({
    min: 0,
    max: 100,
    step: 5,
    initial: 10
  })

  return { count, increment, decrement, reset }
}

// Advanced usage with reactive options
export function useReactiveCounter(
  options: MaybeRef<UseCounterOptions> = {}
) {
  const reactiveOptions = computed(() => unref(options))

  const count = ref(0)

  // Reset when options change
  watch(reactiveOptions, (newOptions) => {
    const { initial = 0, min = 0, max = Infinity } = newOptions
    count.value = Math.max(min, Math.min(max, initial))
  }, { immediate: true })

  const increment = () => {
    const { max = Infinity, step = 1 } = reactiveOptions.value
    count.value = Math.min(max, count.value + step)
  }

  const decrement = () => {
    const { min = 0, step = 1 } = reactiveOptions.value
    count.value = Math.max(min, count.value - step)
  }

  return { count, increment, decrement }
}`,language:"typescript"},{title:"Styles",content:`<style scoped>
.counter-app {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  font-family: system-ui, -apple-system, sans-serif;
}

h1 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
}

.counter-display {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.count {
  font-size: 4rem;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

button {
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 80px;
}

button:not(:disabled) {
  background: #3b82f6;
  color: white;
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
}

button:not(:disabled):hover {
  background: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(59, 130, 246, 0.4);
}

button:not(:disabled):active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
}

button:disabled {
  background: #e5e7eb;
  color: #9ca3af;
  cursor: not-allowed;
  box-shadow: none;
}

.status {
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1.125rem;
}

.status p {
  margin: 0;
}

.status .low {
  background: #fef3c7;
  color: #92400e;
}

.status .medium {
  background: #ddd6fe;
  color: #6b21a8;
}

.status .high {
  background: #fecaca;
  color: #dc2626;
}

/* Animations */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.count {
  animation: pulse 2s infinite;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.status p {
  animation: slideIn 0.3s ease-out;
}

/* Responsive design */
@media (max-width: 480px) {
  .counter-app {
    padding: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  .count {
    font-size: 3rem;
  }

  .controls {
    flex-direction: column;
    align-items: center;
  }

  button {
    width: 100%;
    max-width: 200px;
  }
}
</style>`,language:"css"}]},og=Object.freeze(Object.defineProperty({__proto__:null,vueDemo:rg},Symbol.toStringTag,{value:"Module"})),ig=Object.assign({"./samples/anchor-test.ts":jm,"./samples/api-patterns.ts":Bm,"./samples/basic.ts":zm,"./samples/identical-test.ts":Wm,"./samples/log-and-html.ts":qm,"./samples/minimal.ts":Jm,"./samples/performance-test.ts":Xm,"./samples/react-components.ts":eg,"./samples/ue-logs.ts":ng,"./samples/vue-demo.ts":og});function sg(){const e=[];return Object.values(ig).forEach(t=>{Object.values(t).forEach(n=>{if(n&&typeof n=="object"){const r=n;r.name&&r.description&&r.panes&&e.push(r)}})}),e}const Lc=sg();function ag(e){return Lc.find(t=>t.name===e)}function lg(){return Lc[0]||{name:"empty",description:"Empty content set",panes:[{title:"Empty",content:"",language:"javascript"}]}}const cg="Log file",ug="source.log",dg=["log"],fg=[{include:"#prototype"},{include:"#main"}],hg={prototype:{patterns:[{match:'"[^"]*"',name:"string.quoted.double.log"},{match:"'[^']*'",name:"string.quoted.single.log"},{match:"\\babc\\b",name:"constant.numeric.log"},{match:"\\b0x[0-9a-fA-F]+\\b",name:"constant.numeric.hex.log"},{match:"\\b[0-9a-fA-F]{32}\\b",name:"constant.numeric.hash.log"},{match:"\\b(true|false)\\b",name:"constant.language.boolean.log"},{match:"\\b[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\\b",name:"string.other.guid.log"}]},main:{patterns:[{match:"(Log\\w+|(?:Very)?Verbose|Display)(:)",captures:{1:{name:"variable.other.log-level.log"},2:{name:"punctuation.separator.log"}}},{match:"(Warning)(:)",captures:{1:{name:"markup.changed.warning.log"},2:{name:"punctuation.separator.log"}}},{match:"(Error)(:)",captures:{1:{name:"markup.deleted.error.log"},2:{name:"punctuation.separator.log"}}},{match:"\\d?\\d (?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \\d\\d:\\d\\d:\\d\\d",name:"constant.other.timestamp.syslog.log"},{match:"^(\\d+/\\d+/\\d+ )(\\d+)(:)(\\d+)(:)(\\d+)(\\.\\d+)",name:"constant.other.timestamp.log",captures:{1:{name:"constant.other.date.log"},2:{name:"constant.numeric.hour.log"},3:{name:"punctuation.separator.time.log"},4:{name:"constant.numeric.minute.log"},5:{name:"punctuation.separator.time.log"},6:{name:"constant.numeric.second.log"},7:{name:"constant.numeric.millisecond.log"}}},{match:"(?<!\\w)-?\\d[0-9.a-fA-F]*",name:"constant.numeric.log"},{match:"[():]|->",name:"punctuation.section.log"},{match:"\\b(\\w+)(::)(\\w+)\\b",captures:{1:{name:"entity.name.namespace.log"},2:{name:"punctuation.accessor.namespace.log"},3:{name:"entity.name.function.log"}}},{match:"(\\()(\\d{3})(\\))",captures:{1:{name:"punctuation.section.parens.begin.log"},2:{name:"constant.numeric.code.log"},3:{name:"punctuation.section.parens.end.log"}}},{match:"^(\\[\\d\\d\\d\\d\\.\\d\\d\\.\\d\\d-)(\\d\\d)(\\.)(\\d\\d)(\\.)(\\d\\d)(:\\d+\\]\\[[\\d\\s]+\\])",name:"constant.other.timestamp.detailed.log",captures:{1:{name:"constant.other.date.log"},2:{name:"constant.numeric.hour.log"},3:{name:"punctuation.separator.time.log"},4:{name:"constant.numeric.minute.log"},5:{name:"punctuation.separator.time.log"},6:{name:"constant.numeric.second.log"},7:{name:"constant.other.metadata.log"}}},{match:"(?<=^|[\\s=\\(\\[])((https?:/|\\.\\.))?/[-+._?=&\\w/:]+",name:"string.other.link.path.log"},{match:"(?<=^|[\\s=\\(\\[])[a-zA-Z]:/[-+._?=&\\w/]+",name:"string.other.link.windows-path.log"},{match:"[\\-\\[\\]+/*<>.^&|%!=~:,()?;]",name:"keyword.operator.log"}]}},pg={name:cg,scopeName:ug,fileTypes:dg,patterns:fg,repository:hg},mg={class:"multi-pane-editor"},gg={class:"pane-container"},_g={class:"pane-header"},yg={class:"pane-title"},vg={key:0,class:"pane-status active"},bg={key:1,class:"pane-status synced"},Sg=["onScroll"],Eg=["title"],wg={class:"anchor-label"},Ag=["onUpdate:modelValue","onInput","onKeydown","onClick","onFocus","onKeyup"],Lg=["innerHTML"],Pg=["title"],Tg={key:1,class:"floating-sync-indicator",title:`Completely independent mode: No synchronization at all

Use URL parameter: ?syncMode=MODE to change modes`},Rg=Cn({__name:"MultiPaneEditor",setup(e){const n=(()=>{const $=new URLSearchParams(window.location.search).get("content");if($){const U=ag($);if(U)return U}return lg()})(),r=nt(n),o=nt(n.panes.map(R=>({...R,highlightedContent:""}))),i=nt([]),s=nt([]);let l=null;const a=Rm(i,s,!1),{handleKeydown:c}=a,u=Dm(o,s,i),d=nt(null),f=nt(null),g=nt((()=>{const R=new URLSearchParams(window.location.search),$=R.get("syncMode")||"independent-with-cursor-snap",U=R.get("lineWrap")==="true",B=R.get("showAnchorPills")==="true";return{mode:["independent-with-cursor-snap","traditional-scroll-sync","completely-independent"].includes($)?$:"independent-with-cursor-snap",lineWrap:U,showAnchorPills:B}})()),S=()=>{const $=g.value.mode==="independent-with-cursor-snap"?"traditional-scroll-sync":"independent-with-cursor-snap";g.value.mode=$,a.isSyncEnabled=$==="traditional-scroll-sync",E()},E=()=>{const R=new URLSearchParams(window.location.search);R.set("syncMode",g.value.mode);const $=`${window.location.pathname}?${R.toString()}`;window.history.replaceState({},"",$)},b=()=>{const R=g.value.mode;switch(R){case"independent-with-cursor-snap":return"CURSOR SNAP";case"traditional-scroll-sync":return"FULL SCROLL";case"completely-independent":return"INDEPENDENT";default:return R.replace(/-/g," ").toUpperCase()}},v=()=>`Click to toggle between sync modes:
• Independent with cursor snap: Trackpad scrolling works independently, cursor movement triggers content-based anchor sync
• Traditional scroll sync: Trackpad scrolling synchronizes all panes via percentage-based positioning, cursor movement triggers content-based anchor sync

Current mode: ${g.value.mode.replace(/-/g," ")}`,A=()=>{d.value=u.getActivePaneId(),f.value=u.getCurrentAnchor()},O=(R,$)=>{i.value[$]=R},H=(R,$)=>{R&&(s.value[$]=R)},Q=R=>{g.value.mode!=="completely-independent"&&setTimeout(()=>{const $=s.value[R];if($){const U=ge($);u.onCursorMove(R,U),A()}},0)},K=R=>{g.value.mode!=="completely-independent"&&setTimeout(()=>{u.onPaneFocus(R),A()},0)},he=(R,$)=>{g.value.mode!=="completely-independent"&&["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End","PageUp","PageDown"].includes($.key)&&setTimeout(()=>{const U=s.value[R];if(U){const B=ge(U);u.onCursorMove(R,B),A()}},0)},ge=R=>R.value.substring(0,R.selectionStart).split(`
`).length-1,be=(R,$)=>{if(!g.value.lineWrap)return $;const U=R.value.split(`
`);if($>=U.length&&($=U.length-1),$<0)return 0;const B=window.getComputedStyle(R),z=parseFloat(B.fontSize),Se=B.fontFamily,pe=parseFloat(B.paddingLeft)||0,Xe=parseFloat(B.paddingRight)||0,Ae=R.clientWidth-pe-Xe,M=document.createElement("canvas").getContext("2d");M.font=`${z}px ${Se}`;let D=0;for(let j=0;j<=$;j++){const te=U[j]||"";if(te.length===0){D+=1;continue}let m=0,_=1;for(let y=0;y<te.length;y++){const L=te[y],T=M.measureText(L).width;m+T>Ae&&m>0?(_++,m=T):m+=T}D+=_}return Math.max(0,D-1)},_e=R=>{switch(g.value.mode){case"independent-with-cursor-snap":break;case"traditional-scroll-sync":if(!u.getIsSyncing()&&!u.getIsScrollingSynced()){const U=s.value[R];if(U){const B=ge(U);u.onActiveScroll(R,B),A()}}break}},Pe=R=>{if(!f.value||d.value===R.toString())return{display:"none"};if(!o.value[R])return{display:"none"};const U=u.getAnchorLine(R);if(U===null)return{display:"none"};const B=s.value[R];if(!B)return{display:"none"};const z=window.getComputedStyle(B),Se=parseFloat(z.lineHeight),pe=be(B,U);return{top:`${qn+pe*Se}px`,display:"block"}},ye=R=>d.value===R.toString(),le=R=>f.value!==null&&d.value!==R.toString(),ve=R=>{if(!u.getAnchorStats(R))return[];const U=o.value[R],B=r.value.panes[R],z=U.content.split(`
`),Se=[];let pe=null;return z.forEach((Xe,Ae)=>{let w=null;if(B.tryParseAnchorFromLine&&(w=B.tryParseAnchorFromLine(Xe,Ae)),w!==null){if(pe!==null&&w<pe)throw new Error(`Anchor value ${w} at line ${Ae} is less than previous anchor value ${pe}. Anchor values must be non-decreasing.`);if(pe!==null&&w===pe)return;pe=w,Se.push({lineNumber:Ae,value:w,lineText:Xe.trim()})}}),Se},ne=R=>{const $=s.value[0];let U=21;if($){const z=window.getComputedStyle($);U=parseFloat(z.lineHeight)}return{top:`${qn+R.lineNumber*U+U/2-10}px`,display:"block"}},X=async R=>{if(!l)return;const $=o.value[R];try{const U="solarized-light",B=await l.codeToHtml($.content,{lang:$.language,theme:U}),z=B.match(/<code[^>]*>([\s\S]*?)<\/code>/),Se=z?z[1]:B;$.highlightedContent=Se,console.log(`✅ Successfully highlighted ${$.language} with ${U} theme`)}catch(U){console.log(`❌ Failed to highlight ${$.language}:`,U.message),$.highlightedContent=$.content.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}u.updatePaneContent(R,$.content),co(()=>{const U=s.value[R];if(U){U.style.height="auto",U.style.height=U.scrollHeight+"px";const B=i.value[R];if(B){const z=B.querySelector(".syntax-overlay");z&&(z.style.height=U.style.height)}}})};return Mi(async()=>{l=await Pm({themes:["github-light","solarized-light"],langs:["javascript","typescript","css","python","html","text"]});try{await l.loadLanguage(pg)}catch(R){console.warn("Failed to load log grammar:",R)}o.value.forEach((R,$)=>{X($)}),a.isSyncEnabled=g.value.mode==="traditional-scroll-sync",u.setAnchorMode("content-based"),o.value.forEach((R,$)=>{u.updatePaneContent($,R.content)})}),(R,$)=>(Ee(),ke("div",mg,[Z("div",gg,[(Ee(!0),ke(Ge,null,ls(o.value,(U,B)=>(Ee(),ke("div",{key:B,class:"editor-pane",style:gn({width:`${100/o.value.length}%`})},[Z("div",_g,[Z("span",yg,an(U.title),1),ye(B)?(Ee(),ke("span",vg,"ACTIVE")):le(B)?(Ee(),ke("span",bg,"SYNCED")):Co("",!0)]),Z("div",{class:"pane-content",ref_for:!0,ref:z=>O(z,B),onScroll:z=>_e(B)},[Z("div",{class:_n(["content-height-placeholder",{"wrap-enabled":g.value.lineWrap}])},an(U.content),3),le(B)?(Ee(),ke("div",{key:0,class:"anchor-line-highlight",style:gn(Pe(B))},null,4)):Co("",!0),g.value.showAnchorPills?(Ee(!0),ke(Ge,{key:1},ls(ve(B),(z,Se)=>(Ee(),ke("div",{key:`anchor-${Se}`,class:"explicit-anchor-marker",style:gn(ne(z)),title:`Anchor: $${z.value}`},[Z("span",wg,"$"+an(z.value),1)],12,Eg))),128)):Co("",!0),Vu(Z("textarea",{"onUpdate:modelValue":z=>U.content=z,onInput:z=>X(B),onKeydown:z=>Qt(c)(B,z),onClick:z=>Q(B),onFocus:z=>K(B),onKeyup:z=>he(B,z),ref_for:!0,ref:z=>H(z,B),class:_n(["editor-textarea",{"wrap-enabled":g.value.lineWrap}]),spellcheck:"false"},null,42,Ag),[[lf,U.content]]),Z("div",{class:_n(["syntax-overlay",{"wrap-enabled":g.value.lineWrap}]),innerHTML:U.highlightedContent},null,10,Lg)],40,Sg)],4))),128))]),g.value.mode!=="completely-independent"?(Ee(),ke("button",{key:0,onClick:S,class:"floating-sync-indicator clickable",title:v()}," Sync: "+an(b()),9,Pg)):(Ee(),ke("div",Tg," Sync: "+an(g.value.mode.replace(/-/g," ").toUpperCase()),1))]))}}),rn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},Cg=rn(Rg,[["__scopeId","data-v-d05ee381"]]),xg=Cn({__name:"App",setup(e){return(t,n)=>(Ee(),zr(Cg))}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const un=typeof document<"u";function Pc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Og(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Pc(e.default)}const oe=Object.assign;function Ho(e,t){const n={};for(const r in t){const o=t[r];n[r]=ut(o)?o.map(e):e(o)}return n}const Jn=()=>{},ut=Array.isArray,Tc=/#/g,Ig=/&/g,kg=/\//g,Dg=/=/g,Ng=/\?/g,Rc=/\+/g,Mg=/%5B/g,Vg=/%5D/g,Cc=/%5E/g,$g=/%60/g,xc=/%7B/g,jg=/%7C/g,Oc=/%7D/g,Ug=/%20/g;function Yi(e){return encodeURI(""+e).replace(jg,"|").replace(Mg,"[").replace(Vg,"]")}function Bg(e){return Yi(e).replace(xc,"{").replace(Oc,"}").replace(Cc,"^")}function _i(e){return Yi(e).replace(Rc,"%2B").replace(Ug,"+").replace(Tc,"%23").replace(Ig,"%26").replace($g,"`").replace(xc,"{").replace(Oc,"}").replace(Cc,"^")}function Hg(e){return _i(e).replace(Dg,"%3D")}function zg(e){return Yi(e).replace(Tc,"%23").replace(Ng,"%3F")}function Fg(e){return e==null?"":zg(e).replace(kg,"%2F")}function lr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Wg=/\/$/,Gg=e=>e.replace(Wg,"");function zo(e,t,n="/"){let r,o={},i="",s="";const l=t.indexOf("#");let a=t.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(r=t.slice(0,a),i=t.slice(a+1,l>-1?l:t.length),o=e(i)),l>-1&&(r=r||t.slice(0,l),s=t.slice(l,t.length)),r=Yg(r??t,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:lr(s)}}function qg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ra(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Kg(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Pn(t.matched[r],n.matched[o])&&Ic(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Pn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ic(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Jg(e[n],t[n]))return!1;return!0}function Jg(e,t){return ut(e)?oa(e,t):ut(t)?oa(t,e):e===t}function oa(e,t){return ut(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Yg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let i=n.length-1,s,l;for(s=0;s<r.length;s++)if(l=r[s],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s).join("/")}const Mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var cr;(function(e){e.pop="pop",e.push="push"})(cr||(cr={}));var Yn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Yn||(Yn={}));function Qg(e){if(!e)if(un){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Gg(e)}const Xg=/^[^#]+#/;function Zg(e,t){return e.replace(Xg,"#")+t}function e_(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const vo=()=>({left:window.scrollX,top:window.scrollY});function t_(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=e_(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ia(e,t){return(history.state?history.state.position-t:-1)+e}const yi=new Map;function n_(e,t){yi.set(e,t)}function r_(e){const t=yi.get(e);return yi.delete(e),t}let o_=()=>location.protocol+"//"+location.host;function kc(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let l=o.includes(e.slice(i))?e.slice(i).length:1,a=o.slice(l);return a[0]!=="/"&&(a="/"+a),ra(a,"")}return ra(n,e)+r+o}function i_(e,t,n,r){let o=[],i=[],s=null;const l=({state:f})=>{const h=kc(e,location),g=n.value,S=t.value;let E=0;if(f){if(n.value=h,t.value=f,s&&s===g){s=null;return}E=S?f.position-S.position:0}else r(h);o.forEach(b=>{b(n.value,g,{delta:E,type:cr.pop,direction:E?E>0?Yn.forward:Yn.back:Yn.unknown})})};function a(){s=n.value}function c(f){o.push(f);const h=()=>{const g=o.indexOf(f);g>-1&&o.splice(g,1)};return i.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(oe({},f.state,{scroll:vo()}),"")}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:d}}function sa(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?vo():null}}function s_(e){const{history:t,location:n}=window,r={value:kc(e,n)},o={value:t.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,c,u){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+a:o_()+e+a;try{t[u?"replaceState":"pushState"](c,"",f),o.value=c}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function s(a,c){const u=oe({},t.state,sa(o.value.back,a,o.value.forward,!0),c,{position:o.value.position});i(a,u,!0),r.value=a}function l(a,c){const u=oe({},o.value,t.state,{forward:a,scroll:vo()});i(u.current,u,!0);const d=oe({},sa(r.value,a,null),{position:u.position+1},c);i(a,d,!1),r.value=a}return{location:r,state:o,push:l,replace:s}}function a_(e){e=Qg(e);const t=s_(e),n=i_(e,t.state,t.location,t.replace);function r(i,s=!0){s||n.pauseListeners(),history.go(i)}const o=oe({location:"",base:e,go:r,createHref:Zg.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function l_(e){return typeof e=="string"||e&&typeof e=="object"}function Dc(e){return typeof e=="string"||typeof e=="symbol"}const Nc=Symbol("");var aa;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(aa||(aa={}));function Tn(e,t){return oe(new Error,{type:e,[Nc]:!0},t)}function wt(e,t){return e instanceof Error&&Nc in e&&(t==null||!!(e.type&t))}const la="[^/]+?",c_={sensitive:!1,strict:!1,start:!0,end:!0},u_=/[.+*?^${}()[\]/\\]/g;function d_(e,t){const n=oe({},c_,t),r=[];let o=n.start?"^":"";const i=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(o+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(o+="/"),o+=f.value.replace(u_,"\\$&"),h+=40;else if(f.type===1){const{value:g,repeatable:S,optional:E,regexp:b}=f;i.push({name:g,repeatable:S,optional:E});const v=b||la;if(v!==la){h+=10;try{new RegExp(`(${v})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${g}" (${v}): `+O.message)}}let A=S?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;d||(A=E&&c.length<2?`(?:/${A})`:"/"+A),E&&(A+="?"),o+=A,h+=20,E&&(h+=-8),S&&(h+=-20),v===".*"&&(h+=-50)}u.push(h)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function l(c){const u=c.match(s),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",g=i[f-1];d[g.name]=h&&g.repeatable?h.split("/"):h}return d}function a(c){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:S,optional:E}=h,b=g in c?c[g]:"";if(ut(b)&&!S)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const v=ut(b)?b.join("/"):b;if(!v)if(E)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=v}}return u||"/"}return{re:s,score:r,keys:i,parse:l,stringify:a}}function f_(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Mc(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const i=f_(r[n],o[n]);if(i)return i;n++}if(Math.abs(o.length-r.length)===1){if(ca(r))return 1;if(ca(o))return-1}return o.length-r.length}function ca(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const h_={type:0,value:""},p_=/[a-zA-Z0-9_]/;function m_(e){if(!e)return[[]];if(e==="/")return[[h_]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let l=0,a,c="",u="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(c&&d(),s()):a===":"?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:a==="("?n=2:p_.test(a)?f():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),s(),o}function g_(e,t,n){const r=d_(m_(e.path),n),o=oe(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function __(e,t){const n=[],r=new Map;t=ha({strict:!1,end:!0,sensitive:!1},t);function o(d){return r.get(d)}function i(d,f,h){const g=!h,S=da(d);S.aliasOf=h&&h.record;const E=ha(t,d),b=[S];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const H of O)b.push(da(oe({},S,{components:h?h.record.components:S.components,path:H,aliasOf:h?h.record:S})))}let v,A;for(const O of b){const{path:H}=O;if(f&&H[0]!=="/"){const Q=f.record.path,K=Q[Q.length-1]==="/"?"":"/";O.path=f.record.path+(H&&K+H)}if(v=g_(O,f,E),h?h.alias.push(v):(A=A||v,A!==v&&A.alias.push(v),g&&d.name&&!fa(v)&&s(d.name)),Vc(v)&&a(v),S.children){const Q=S.children;for(let K=0;K<Q.length;K++)i(Q[K],v,h&&h.children[K])}h=h||v}return A?()=>{s(A)}:Jn}function s(d){if(Dc(d)){const f=r.get(d);f&&(r.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function l(){return n}function a(d){const f=b_(d,n);n.splice(f,0,d),d.record.name&&!fa(d)&&r.set(d.record.name,d)}function c(d,f){let h,g={},S,E;if("name"in d&&d.name){if(h=r.get(d.name),!h)throw Tn(1,{location:d});E=h.record.name,g=oe(ua(f.params,h.keys.filter(A=>!A.optional).concat(h.parent?h.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),d.params&&ua(d.params,h.keys.map(A=>A.name))),S=h.stringify(g)}else if(d.path!=null)S=d.path,h=n.find(A=>A.re.test(S)),h&&(g=h.parse(S),E=h.record.name);else{if(h=f.name?r.get(f.name):n.find(A=>A.re.test(f.path)),!h)throw Tn(1,{location:d,currentLocation:f});E=h.record.name,g=oe({},f.params,d.params),S=h.stringify(g)}const b=[];let v=h;for(;v;)b.unshift(v.record),v=v.parent;return{name:E,path:S,params:g,matched:b,meta:v_(b)}}e.forEach(d=>i(d));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:c,removeRoute:s,clearRoutes:u,getRoutes:l,getRecordMatcher:o}}function ua(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function da(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:y_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function y_(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function fa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function v_(e){return e.reduce((t,n)=>oe(t,n.meta),{})}function ha(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function b_(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Mc(e,t[i])<0?r=i:n=i+1}const o=S_(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function S_(e){let t=e;for(;t=t.parent;)if(Vc(t)&&Mc(e,t)===0)return t}function Vc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function E_(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const i=r[o].replace(Rc," "),s=i.indexOf("="),l=lr(s<0?i:i.slice(0,s)),a=s<0?null:lr(i.slice(s+1));if(l in t){let c=t[l];ut(c)||(c=t[l]=[c]),c.push(a)}else t[l]=a}return t}function pa(e){let t="";for(let n in e){const r=e[n];if(n=Hg(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ut(r)?r.map(i=>i&&_i(i)):[r&&_i(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function w_(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ut(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const A_=Symbol(""),ma=Symbol(""),Qi=Symbol(""),$c=Symbol(""),vi=Symbol("");function Mn(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function jt(e,t,n,r,o,i=s=>s()){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((l,a)=>{const c=f=>{f===!1?a(Tn(4,{from:n,to:t})):f instanceof Error?a(f):l_(f)?a(Tn(2,{from:t,to:f})):(s&&r.enterCallbacks[o]===s&&typeof f=="function"&&s.push(f),l())},u=i(()=>e.call(r&&r.instances[o],t,n,c));let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(f=>a(f))})}function Fo(e,t,n,r,o=i=>i()){const i=[];for(const s of e)for(const l in s.components){let a=s.components[l];if(!(t!=="beforeRouteEnter"&&!s.instances[l]))if(Pc(a)){const u=(a.__vccOpts||a)[t];u&&i.push(jt(u,n,r,s,l,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${s.path}"`);const d=Og(u)?u.default:u;s.mods[l]=u,s.components[l]=d;const h=(d.__vccOpts||d)[t];return h&&jt(h,n,r,s,l,o)()}))}}return i}function ga(e){const t=xt(Qi),n=xt($c),r=lt(()=>{const a=Qt(e.to);return t.resolve(a)}),o=lt(()=>{const{matched:a}=r.value,{length:c}=a,u=a[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Pn.bind(null,u));if(f>-1)return f;const h=_a(a[c-2]);return c>1&&_a(u)===h&&d[d.length-1].path!==h?d.findIndex(Pn.bind(null,a[c-2])):f}),i=lt(()=>o.value>-1&&C_(n.params,r.value.params)),s=lt(()=>o.value>-1&&o.value===n.matched.length-1&&Ic(n.params,r.value.params));function l(a={}){if(R_(a)){const c=t[Qt(e.replace)?"replace":"push"](Qt(e.to)).catch(Jn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:lt(()=>r.value.href),isActive:i,isExactActive:s,navigate:l}}function L_(e){return e.length===1?e[0]:e}const P_=Cn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ga,setup(e,{slots:t}){const n=pr(ga(e)),{options:r}=xt(Qi),o=lt(()=>({[ya(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ya(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&L_(t.default(n));return e.custom?i:$l("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),T_=P_;function R_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function C_(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!ut(o)||o.length!==r.length||r.some((i,s)=>i!==o[s]))return!1}return!0}function _a(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ya=(e,t,n)=>e??t??n,x_=Cn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=xt(vi),o=lt(()=>e.route||r.value),i=xt(ma,0),s=lt(()=>{let c=Qt(i);const{matched:u}=o.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),l=lt(()=>o.value.matched[s.value]);Or(ma,lt(()=>s.value+1)),Or(A_,l),Or(vi,o);const a=nt();return Ct(()=>[a.value,l.value,e.name],([c,u,d],[f,h,g])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Pn(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=o.value,u=e.name,d=l.value,f=d&&d.components[u];if(!f)return va(n.default,{Component:f,route:c});const h=d.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,E=$l(f,oe({},g,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[u]=null)},ref:a}));return va(n.default,{Component:E,route:c})||E}}});function va(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const O_=x_;function I_(e){const t=__(e.routes,e),n=e.parseQuery||E_,r=e.stringifyQuery||pa,o=e.history,i=Mn(),s=Mn(),l=Mn(),a=Tu(Mt);let c=Mt;un&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ho.bind(null,w=>""+w),d=Ho.bind(null,Fg),f=Ho.bind(null,lr);function h(w,M){let D,j;return Dc(w)?(D=t.getRecordMatcher(w),j=M):j=w,t.addRoute(j,D)}function g(w){const M=t.getRecordMatcher(w);M&&t.removeRoute(M)}function S(){return t.getRoutes().map(w=>w.record)}function E(w){return!!t.getRecordMatcher(w)}function b(w,M){if(M=oe({},M||a.value),typeof w=="string"){const y=zo(n,w,M.path),L=t.resolve({path:y.path},M),T=o.createHref(y.fullPath);return oe(y,L,{params:f(L.params),hash:lr(y.hash),redirectedFrom:void 0,href:T})}let D;if(w.path!=null)D=oe({},w,{path:zo(n,w.path,M.path).path});else{const y=oe({},w.params);for(const L in y)y[L]==null&&delete y[L];D=oe({},w,{params:d(y)}),M.params=d(M.params)}const j=t.resolve(D,M),te=w.hash||"";j.params=u(f(j.params));const m=qg(r,oe({},w,{hash:Bg(te),path:j.path})),_=o.createHref(m);return oe({fullPath:m,hash:te,query:r===pa?w_(w.query):w.query||{}},j,{redirectedFrom:void 0,href:_})}function v(w){return typeof w=="string"?zo(n,w,a.value.path):oe({},w)}function A(w,M){if(c!==w)return Tn(8,{from:M,to:w})}function O(w){return K(w)}function H(w){return O(oe(v(w),{replace:!0}))}function Q(w){const M=w.matched[w.matched.length-1];if(M&&M.redirect){const{redirect:D}=M;let j=typeof D=="function"?D(w):D;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=v(j):{path:j},j.params={}),oe({query:w.query,hash:w.hash,params:j.path!=null?{}:w.params},j)}}function K(w,M){const D=c=b(w),j=a.value,te=w.state,m=w.force,_=w.replace===!0,y=Q(D);if(y)return K(oe(v(y),{state:typeof y=="object"?oe({},te,y.state):te,force:m,replace:_}),M||D);const L=D;L.redirectedFrom=M;let T;return!m&&Kg(r,j,D)&&(T=Tn(16,{to:L,from:j}),B(j,j,!0,!1)),(T?Promise.resolve(T):be(L,j)).catch(P=>wt(P)?wt(P,2)?P:U(P):R(P,L,j)).then(P=>{if(P){if(wt(P,2))return K(oe({replace:_},v(P.to),{state:typeof P.to=="object"?oe({},te,P.to.state):te,force:m}),M||L)}else P=Pe(L,j,!0,_,te);return _e(L,j,P),P})}function he(w,M){const D=A(w,M);return D?Promise.reject(D):Promise.resolve()}function ge(w){const M=pe.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(w):w()}function be(w,M){let D;const[j,te,m]=k_(w,M);D=Fo(j.reverse(),"beforeRouteLeave",w,M);for(const y of j)y.leaveGuards.forEach(L=>{D.push(jt(L,w,M))});const _=he.bind(null,w,M);return D.push(_),Ae(D).then(()=>{D=[];for(const y of i.list())D.push(jt(y,w,M));return D.push(_),Ae(D)}).then(()=>{D=Fo(te,"beforeRouteUpdate",w,M);for(const y of te)y.updateGuards.forEach(L=>{D.push(jt(L,w,M))});return D.push(_),Ae(D)}).then(()=>{D=[];for(const y of m)if(y.beforeEnter)if(ut(y.beforeEnter))for(const L of y.beforeEnter)D.push(jt(L,w,M));else D.push(jt(y.beforeEnter,w,M));return D.push(_),Ae(D)}).then(()=>(w.matched.forEach(y=>y.enterCallbacks={}),D=Fo(m,"beforeRouteEnter",w,M,ge),D.push(_),Ae(D))).then(()=>{D=[];for(const y of s.list())D.push(jt(y,w,M));return D.push(_),Ae(D)}).catch(y=>wt(y,8)?y:Promise.reject(y))}function _e(w,M,D){l.list().forEach(j=>ge(()=>j(w,M,D)))}function Pe(w,M,D,j,te){const m=A(w,M);if(m)return m;const _=M===Mt,y=un?history.state:{};D&&(j||_?o.replace(w.fullPath,oe({scroll:_&&y&&y.scroll},te)):o.push(w.fullPath,te)),a.value=w,B(w,M,D,_),U()}let ye;function le(){ye||(ye=o.listen((w,M,D)=>{if(!Xe.listening)return;const j=b(w),te=Q(j);if(te){K(oe(te,{replace:!0,force:!0}),j).catch(Jn);return}c=j;const m=a.value;un&&n_(ia(m.fullPath,D.delta),vo()),be(j,m).catch(_=>wt(_,12)?_:wt(_,2)?(K(oe(v(_.to),{force:!0}),j).then(y=>{wt(y,20)&&!D.delta&&D.type===cr.pop&&o.go(-1,!1)}).catch(Jn),Promise.reject()):(D.delta&&o.go(-D.delta,!1),R(_,j,m))).then(_=>{_=_||Pe(j,m,!1),_&&(D.delta&&!wt(_,8)?o.go(-D.delta,!1):D.type===cr.pop&&wt(_,20)&&o.go(-1,!1)),_e(j,m,_)}).catch(Jn)}))}let ve=Mn(),ne=Mn(),X;function R(w,M,D){U(w);const j=ne.list();return j.length?j.forEach(te=>te(w,M,D)):console.error(w),Promise.reject(w)}function $(){return X&&a.value!==Mt?Promise.resolve():new Promise((w,M)=>{ve.add([w,M])})}function U(w){return X||(X=!w,le(),ve.list().forEach(([M,D])=>w?D(w):M()),ve.reset()),w}function B(w,M,D,j){const{scrollBehavior:te}=e;if(!un||!te)return Promise.resolve();const m=!D&&r_(ia(w.fullPath,0))||(j||!D)&&history.state&&history.state.scroll||null;return co().then(()=>te(w,M,m)).then(_=>_&&t_(_)).catch(_=>R(_,w,M))}const z=w=>o.go(w);let Se;const pe=new Set,Xe={currentRoute:a,listening:!0,addRoute:h,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:E,getRoutes:S,resolve:b,options:e,push:O,replace:H,go:z,back:()=>z(-1),forward:()=>z(1),beforeEach:i.add,beforeResolve:s.add,afterEach:l.add,onError:ne.add,isReady:$,install(w){const M=this;w.component("RouterLink",T_),w.component("RouterView",O_),w.config.globalProperties.$router=M,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Qt(a)}),un&&!Se&&a.value===Mt&&(Se=!0,O(o.location).catch(te=>{}));const D={};for(const te in Mt)Object.defineProperty(D,te,{get:()=>a.value[te],enumerable:!0});w.provide(Qi,M),w.provide($c,ol(D)),w.provide(vi,a);const j=w.unmount;pe.add(w),w.unmount=function(){pe.delete(w),pe.size<1&&(c=Mt,ye&&ye(),ye=null,a.value=Mt,Se=!1,X=!1),j()}}};function Ae(w){return w.reduce((M,D)=>M.then(()=>ge(D)),Promise.resolve())}return Xe}function k_(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const l=t.matched[s];l&&(e.matched.find(c=>Pn(c,l))?r.push(l):n.push(l));const a=e.matched[s];a&&(t.matched.find(c=>Pn(c,a))||o.push(a))}return[n,r,o]}const D_={},N_={class:"item"},M_={class:"details"};function V_(e,t){return Ee(),ke("div",N_,[Z("i",null,[Lo(e.$slots,"icon",{},void 0)]),Z("div",M_,[Z("h3",null,[Lo(e.$slots,"heading",{},void 0)]),Lo(e.$slots,"default",{},void 0)])])}const Vn=rn(D_,[["render",V_],["__scopeId","data-v-fd0742eb"]]),$_={},j_={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"};function U_(e,t){return Ee(),ke("svg",j_,[...t[0]||(t[0]=[Z("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1)])])}const B_=rn($_,[["render",U_]]),H_={},z_={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"};function F_(e,t){return Ee(),ke("svg",z_,[...t[0]||(t[0]=[Z("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1)])])}const W_=rn(H_,[["render",F_]]),G_={},q_={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"};function K_(e,t){return Ee(),ke("svg",q_,[...t[0]||(t[0]=[Z("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1)])])}const J_=rn(G_,[["render",K_]]),Y_={},Q_={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"};function X_(e,t){return Ee(),ke("svg",Q_,[...t[0]||(t[0]=[Z("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1)])])}const Z_=rn(Y_,[["render",X_]]),e0={},t0={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"};function n0(e,t){return Ee(),ke("svg",t0,[...t[0]||(t[0]=[Z("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1)])])}const r0=rn(e0,[["render",n0]]),o0=Cn({__name:"TheWelcome",setup(e){const t=()=>fetch("/__open-in-editor?file=README.md");return(n,r)=>(Ee(),ke(Ge,null,[we(Vn,null,{icon:Me(()=>[we(B_)]),heading:Me(()=>[...r[0]||(r[0]=[re("Documentation",-1)])]),default:Me(()=>[r[1]||(r[1]=re(" Vue’s ",-1)),r[2]||(r[2]=Z("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1)),r[3]||(r[3]=re(" provides you with all information you need to get started. ",-1))]),_:1}),we(Vn,null,{icon:Me(()=>[we(W_)]),heading:Me(()=>[...r[4]||(r[4]=[re("Tooling",-1)])]),default:Me(()=>[r[6]||(r[6]=re(" This project is served and bundled with ",-1)),r[7]||(r[7]=Z("a",{href:"https://vite.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1)),r[8]||(r[8]=re(". The recommended IDE setup is ",-1)),r[9]||(r[9]=Z("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1)),r[10]||(r[10]=re(" + ",-1)),r[11]||(r[11]=Z("a",{href:"https://github.com/vuejs/language-tools",target:"_blank",rel:"noopener"},"Vue - Official",-1)),r[12]||(r[12]=re(". If you need to test your components and web pages, check out ",-1)),r[13]||(r[13]=Z("a",{href:"https://vitest.dev/",target:"_blank",rel:"noopener"},"Vitest",-1)),r[14]||(r[14]=re(" and ",-1)),r[15]||(r[15]=Z("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1)),r[16]||(r[16]=re(" / ",-1)),r[17]||(r[17]=Z("a",{href:"https://playwright.dev/",target:"_blank",rel:"noopener"},"Playwright",-1)),r[18]||(r[18]=re(". ",-1)),r[19]||(r[19]=Z("br",null,null,-1)),r[20]||(r[20]=re(" More instructions are available in ",-1)),Z("a",{href:"javascript:void(0)",onClick:t},[...r[5]||(r[5]=[Z("code",null,"README.md",-1)])]),r[21]||(r[21]=re(". ",-1))]),_:1}),we(Vn,null,{icon:Me(()=>[we(J_)]),heading:Me(()=>[...r[22]||(r[22]=[re("Ecosystem",-1)])]),default:Me(()=>[r[23]||(r[23]=re(" Get official tools and libraries for your project: ",-1)),r[24]||(r[24]=Z("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1)),r[25]||(r[25]=re(", ",-1)),r[26]||(r[26]=Z("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1)),r[27]||(r[27]=re(", ",-1)),r[28]||(r[28]=Z("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1)),r[29]||(r[29]=re(", and ",-1)),r[30]||(r[30]=Z("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1)),r[31]||(r[31]=re(". If you need more resources, we suggest paying ",-1)),r[32]||(r[32]=Z("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1)),r[33]||(r[33]=re(" a visit. ",-1))]),_:1}),we(Vn,null,{icon:Me(()=>[we(Z_)]),heading:Me(()=>[...r[34]||(r[34]=[re("Community",-1)])]),default:Me(()=>[r[35]||(r[35]=re(" Got stuck? Ask your question on ",-1)),r[36]||(r[36]=Z("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1)),r[37]||(r[37]=re(" (our official Discord server), or ",-1)),r[38]||(r[38]=Z("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1)),r[39]||(r[39]=re(". You should also follow the official ",-1)),r[40]||(r[40]=Z("a",{href:"https://bsky.app/profile/vuejs.org",target:"_blank",rel:"noopener"},"@vuejs.org",-1)),r[41]||(r[41]=re(" Bluesky account or the ",-1)),r[42]||(r[42]=Z("a",{href:"https://x.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1)),r[43]||(r[43]=re(" X account for latest news in the Vue world. ",-1))]),_:1}),we(Vn,null,{icon:Me(()=>[we(r0)]),heading:Me(()=>[...r[44]||(r[44]=[re("Support Vue",-1)])]),default:Me(()=>[r[45]||(r[45]=re(" As an independent project, Vue relies on community backing for its sustainability. You can help us by ",-1)),r[46]||(r[46]=Z("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1)),r[47]||(r[47]=re(". ",-1))]),_:1})],64))}}),i0=Cn({__name:"HomeView",setup(e){return(t,n)=>(Ee(),ke("main",null,[we(o0)]))}}),s0=I_({history:a_("/"),routes:[{path:"/",name:"home",component:i0},{path:"/about",name:"about",component:()=>p(()=>import("./AboutView-C22W2I9G.js"),__vite__mapDeps([95,96]))}]});var a0=Object.defineProperty,ba=Object.getOwnPropertySymbols,l0=Object.prototype.hasOwnProperty,c0=Object.prototype.propertyIsEnumerable,Sa=(e,t,n)=>t in e?a0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u0=(e,t)=>{for(var n in t||(t={}))l0.call(t,n)&&Sa(e,n,t[n]);if(ba)for(var n of ba(t))c0.call(t,n)&&Sa(e,n,t[n]);return e};function Xi(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function d0(e){return typeof e=="function"&&"call"in e&&"apply"in e}function Le(e){return!Xi(e)}function Xt(e,t=!0){return e instanceof Object&&e.constructor===Object&&(t||Object.keys(e).length!==0)}function jc(e={},t={}){let n=u0({},e);return Object.keys(t).forEach(r=>{let o=r;Xt(t[o])&&o in e&&Xt(e[o])?n[o]=jc(e[o],t[o]):n[o]=t[o]}),n}function f0(...e){return e.reduce((t,n,r)=>r===0?n:jc(t,n),{})}function Ut(e,...t){return d0(e)?e(...t):e}function Rn(e,t=!0){return typeof e=="string"&&(t||e!=="")}function h0(e){return Le(e)&&!isNaN(e)}function Zt(e,t){if(t){let n=t.test(e);return t.lastIndex=0,n}return!1}function p0(...e){return f0(...e)}function Qn(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function Uc(e){return Rn(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(t,n)=>n===0?t:"-"+t.toLowerCase()).toLowerCase():e}function Bc(){let e=new Map;return{on(t,n){let r=e.get(t);return r?r.push(n):r=[n],e.set(t,r),this},off(t,n){let r=e.get(t);return r&&r.splice(r.indexOf(n)>>>0,1),this},emit(t,n){let r=e.get(t);r&&r.forEach(o=>{o(n)})},clear(){e.clear()}}}function m0(e){if(e){let t=e.parentNode;return t&&t instanceof ShadowRoot&&t.host&&(t=t.host),t}return null}function g0(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&m0(e))}function Hc(e){return typeof Element<"u"?e instanceof Element:e!==null&&typeof e=="object"&&e.nodeType===1&&typeof e.nodeName=="string"}function bi(e,t={}){if(Hc(e)){let n=(r,o)=>{var i,s;let l=(i=e?.$attrs)!=null&&i[r]?[(s=e?.$attrs)==null?void 0:s[r]]:[];return[o].flat().reduce((a,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")a.push(c);else if(u==="object"){let d=Array.isArray(c)?n(r,c):Object.entries(c).map(([f,h])=>r==="style"&&(h||h===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?f:void 0);a=d.length?a.concat(d.filter(f=>!!f)):a}}return a},l)};Object.entries(t).forEach(([r,o])=>{if(o!=null){let i=r.match(/^on(.+)/);i?e.addEventListener(i[1].toLowerCase(),o):r==="p-bind"||r==="pBind"?bi(e,o):(o=r==="class"?[...new Set(n("class",o))].join(" ").trim():r==="style"?n("style",o).join(";").trim():o,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=o),e.setAttribute(r,o))}})}}function _0(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function y0(e,t="",n){Hc(e)&&n!==null&&n!==void 0&&e.setAttribute(t,n)}var v0=Object.defineProperty,b0=Object.defineProperties,S0=Object.getOwnPropertyDescriptors,no=Object.getOwnPropertySymbols,zc=Object.prototype.hasOwnProperty,Fc=Object.prototype.propertyIsEnumerable,Ea=(e,t,n)=>t in e?v0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,at=(e,t)=>{for(var n in t||(t={}))zc.call(t,n)&&Ea(e,n,t[n]);if(no)for(var n of no(t))Fc.call(t,n)&&Ea(e,n,t[n]);return e},Wo=(e,t)=>b0(e,S0(t)),At=(e,t)=>{var n={};for(var r in e)zc.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&no)for(var r of no(e))t.indexOf(r)<0&&Fc.call(e,r)&&(n[r]=e[r]);return n},E0=Bc(),Pt=E0,ur=/{([^}]*)}/g,Wc=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Gc=/var\([^)]+\)/g;function wa(e){return Rn(e)?e.replace(/[A-Z]/g,(t,n)=>n===0?t:"."+t.toLowerCase()).toLowerCase():e}function w0(e){return Xt(e)&&e.hasOwnProperty("$value")&&e.hasOwnProperty("$type")?e.$value:e}function A0(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Si(e="",t=""){return A0(`${Rn(e,!1)&&Rn(t,!1)?`${e}-`:e}${t}`)}function qc(e="",t=""){return`--${Si(e,t)}`}function L0(e=""){let t=(e.match(/{/g)||[]).length,n=(e.match(/}/g)||[]).length;return(t+n)%2!==0}function Kc(e,t="",n="",r=[],o){if(Rn(e)){let i=e.trim();if(L0(i))return;if(Zt(i,ur)){let s=i.replaceAll(ur,l=>{let a=l.replace(/{|}/g,"").split(".").filter(c=>!r.some(u=>Zt(c,u)));return`var(${qc(n,Uc(a.join("-")))}${Le(o)?`, ${o}`:""})`});return Zt(s.replace(Gc,"0"),Wc)?`calc(${s})`:s}return i}else if(h0(e))return e}function P0(e,t,n){Rn(t,!1)&&e.push(`${t}:${n};`)}function dn(e,t){return e?`${e}{${t}}`:""}function Jc(e,t){if(e.indexOf("dt(")===-1)return e;function n(s,l){let a=[],c=0,u="",d=null,f=0;for(;c<=s.length;){let h=s[c];if((h==='"'||h==="'"||h==="`")&&s[c-1]!=="\\"&&(d=d===h?null:h),!d&&(h==="("&&f++,h===")"&&f--,(h===","||c===s.length)&&f===0)){let g=u.trim();g.startsWith("dt(")?a.push(Jc(g,l)):a.push(r(g)),u="",c++;continue}h!==void 0&&(u+=h),c++}return a}function r(s){let l=s[0];if((l==='"'||l==="'"||l==="`")&&s[s.length-1]===l)return s.slice(1,-1);let a=Number(s);return isNaN(a)?s:a}let o=[],i=[];for(let s=0;s<e.length;s++)if(e[s]==="d"&&e.slice(s,s+3)==="dt(")i.push(s),s+=2;else if(e[s]===")"&&i.length>0){let l=i.pop();i.length===0&&o.push([l,s])}if(!o.length)return e;for(let s=o.length-1;s>=0;s--){let[l,a]=o[s],c=e.slice(l+3,a),u=n(c,t),d=t(...u);e=e.slice(0,l)+d+e.slice(a+1)}return e}var en=(...e)=>T0($e.getTheme(),...e),T0=(e={},t,n,r)=>{if(t){let{variable:o,options:i}=$e.defaults||{},{prefix:s,transform:l}=e?.options||i||{},a=Zt(t,ur)?t:`{${t}}`;return r==="value"||Xi(r)&&l==="strict"?$e.getTokenValue(t):Kc(a,void 0,s,[o.excludedKeyRegex],n)}return""};function Pr(e,...t){if(e instanceof Array){let n=e.reduce((r,o,i)=>{var s;return r+o+((s=Ut(t[i],{dt:en}))!=null?s:"")},"");return Jc(n,en)}return Ut(e,{dt:en})}function R0(e,t={}){let n=$e.defaults.variable,{prefix:r=n.prefix,selector:o=n.selector,excludedKeyRegex:i=n.excludedKeyRegex}=t,s=[],l=[],a=[{node:e,path:r}];for(;a.length;){let{node:u,path:d}=a.pop();for(let f in u){let h=u[f],g=w0(h),S=Zt(f,i)?Si(d):Si(d,Uc(f));if(Xt(g))a.push({node:g,path:S});else{let E=qc(S),b=Kc(g,S,r,[i]);P0(l,E,b);let v=S;r&&v.startsWith(r+"-")&&(v=v.slice(r.length+1)),s.push(v.replace(/-/g,"."))}}}let c=l.join("");return{value:l,tokens:s,declarations:c,css:dn(o,c)}}var st={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:e,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let t=Object.keys(this.rules).filter(n=>n!=="custom").map(n=>this.rules[n]);return[e].flat().map(n=>{var r;return(r=t.map(o=>o.resolve(n)).find(o=>o.matched))!=null?r:this.rules.custom.resolve(n)})}},_toVariables(e,t){return R0(e,{prefix:t?.prefix})},getCommon({name:e="",theme:t={},params:n,set:r,defaults:o}){var i,s,l,a,c,u,d;let{preset:f,options:h}=t,g,S,E,b,v,A,O;if(Le(f)&&h.transform!=="strict"){let{primitive:H,semantic:Q,extend:K}=f,he=Q||{},{colorScheme:ge}=he,be=At(he,["colorScheme"]),_e=K||{},{colorScheme:Pe}=_e,ye=At(_e,["colorScheme"]),le=ge||{},{dark:ve}=le,ne=At(le,["dark"]),X=Pe||{},{dark:R}=X,$=At(X,["dark"]),U=Le(H)?this._toVariables({primitive:H},h):{},B=Le(be)?this._toVariables({semantic:be},h):{},z=Le(ne)?this._toVariables({light:ne},h):{},Se=Le(ve)?this._toVariables({dark:ve},h):{},pe=Le(ye)?this._toVariables({semantic:ye},h):{},Xe=Le($)?this._toVariables({light:$},h):{},Ae=Le(R)?this._toVariables({dark:R},h):{},[w,M]=[(i=U.declarations)!=null?i:"",U.tokens],[D,j]=[(s=B.declarations)!=null?s:"",B.tokens||[]],[te,m]=[(l=z.declarations)!=null?l:"",z.tokens||[]],[_,y]=[(a=Se.declarations)!=null?a:"",Se.tokens||[]],[L,T]=[(c=pe.declarations)!=null?c:"",pe.tokens||[]],[P,N]=[(u=Xe.declarations)!=null?u:"",Xe.tokens||[]],[k,I]=[(d=Ae.declarations)!=null?d:"",Ae.tokens||[]];g=this.transformCSS(e,w,"light","variable",h,r,o),S=M;let C=this.transformCSS(e,`${D}${te}`,"light","variable",h,r,o),W=this.transformCSS(e,`${_}`,"dark","variable",h,r,o);E=`${C}${W}`,b=[...new Set([...j,...m,...y])];let V=this.transformCSS(e,`${L}${P}color-scheme:light`,"light","variable",h,r,o),F=this.transformCSS(e,`${k}color-scheme:dark`,"dark","variable",h,r,o);v=`${V}${F}`,A=[...new Set([...T,...N,...I])],O=Ut(f.css,{dt:en})}return{primitive:{css:g,tokens:S},semantic:{css:E,tokens:b},global:{css:v,tokens:A},style:O}},getPreset({name:e="",preset:t={},options:n,params:r,set:o,defaults:i,selector:s}){var l,a,c;let u,d,f;if(Le(t)&&n.transform!=="strict"){let h=e.replace("-directive",""),g=t,{colorScheme:S,extend:E,css:b}=g,v=At(g,["colorScheme","extend","css"]),A=E||{},{colorScheme:O}=A,H=At(A,["colorScheme"]),Q=S||{},{dark:K}=Q,he=At(Q,["dark"]),ge=O||{},{dark:be}=ge,_e=At(ge,["dark"]),Pe=Le(v)?this._toVariables({[h]:at(at({},v),H)},n):{},ye=Le(he)?this._toVariables({[h]:at(at({},he),_e)},n):{},le=Le(K)?this._toVariables({[h]:at(at({},K),be)},n):{},[ve,ne]=[(l=Pe.declarations)!=null?l:"",Pe.tokens||[]],[X,R]=[(a=ye.declarations)!=null?a:"",ye.tokens||[]],[$,U]=[(c=le.declarations)!=null?c:"",le.tokens||[]],B=this.transformCSS(h,`${ve}${X}`,"light","variable",n,o,i,s),z=this.transformCSS(h,$,"dark","variable",n,o,i,s);u=`${B}${z}`,d=[...new Set([...ne,...R,...U])],f=Ut(b,{dt:en})}return{css:u,tokens:d,style:f}},getPresetC({name:e="",theme:t={},params:n,set:r,defaults:o}){var i;let{preset:s,options:l}=t,a=(i=s?.components)==null?void 0:i[e];return this.getPreset({name:e,preset:a,options:l,params:n,set:r,defaults:o})},getPresetD({name:e="",theme:t={},params:n,set:r,defaults:o}){var i,s;let l=e.replace("-directive",""),{preset:a,options:c}=t,u=((i=a?.components)==null?void 0:i[l])||((s=a?.directives)==null?void 0:s[l]);return this.getPreset({name:l,preset:u,options:c,params:n,set:r,defaults:o})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,t){var n;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?t.options.darkModeSelector:(n=e.darkModeSelector)!=null?n:t.options.darkModeSelector):[]},getLayerOrder(e,t={},n,r){let{cssLayer:o}=t;return o?`@layer ${Ut(o.order||o.name||"primeui",n)}`:""},getCommonStyleSheet({name:e="",theme:t={},params:n,props:r={},set:o,defaults:i}){let s=this.getCommon({name:e,theme:t,params:n,set:o,defaults:i}),l=Object.entries(r).reduce((a,[c,u])=>a.push(`${c}="${u}"`)&&a,[]).join(" ");return Object.entries(s||{}).reduce((a,[c,u])=>{if(Xt(u)&&Object.hasOwn(u,"css")){let d=Qn(u.css),f=`${c}-variables`;a.push(`<style type="text/css" data-primevue-style-id="${f}" ${l}>${d}</style>`)}return a},[]).join("")},getStyleSheet({name:e="",theme:t={},params:n,props:r={},set:o,defaults:i}){var s;let l={name:e,theme:t,params:n,set:o,defaults:i},a=(s=e.includes("-directive")?this.getPresetD(l):this.getPresetC(l))==null?void 0:s.css,c=Object.entries(r).reduce((u,[d,f])=>u.push(`${d}="${f}"`)&&u,[]).join(" ");return a?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${Qn(a)}</style>`:""},createTokens(e={},t,n="",r="",o={}){let i=function(l,a={},c=[]){if(c.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:l,path:this.path,paths:a,value:void 0};c.push(this.path),a.name=this.path,a.binding||(a.binding={});let u=this.value;if(typeof this.value=="string"&&ur.test(this.value)){let d=this.value.trim().replace(ur,f=>{var h;let g=f.slice(1,-1),S=this.tokens[g];if(!S)return console.warn(`Token not found for path: ${g}`),"__UNRESOLVED__";let E=S.computed(l,a,c);return Array.isArray(E)&&E.length===2?`light-dark(${E[0].value},${E[1].value})`:(h=E?.value)!=null?h:"__UNRESOLVED__"});u=Wc.test(d.replace(Gc,"0"))?`calc(${d})`:d}return Xi(a.binding)&&delete a.binding,c.pop(),{colorScheme:l,path:this.path,paths:a,value:u.includes("__UNRESOLVED__")?void 0:u}},s=(l,a,c)=>{Object.entries(l).forEach(([u,d])=>{let f=Zt(u,t.variable.excludedKeyRegex)?a:a?`${a}.${wa(u)}`:wa(u),h=c?`${c}.${u}`:u;Xt(d)?s(d,f,h):(o[f]||(o[f]={paths:[],computed:(g,S={},E=[])=>{if(o[f].paths.length===1)return o[f].paths[0].computed(o[f].paths[0].scheme,S.binding,E);if(g&&g!=="none")for(let b=0;b<o[f].paths.length;b++){let v=o[f].paths[b];if(v.scheme===g)return v.computed(g,S.binding,E)}return o[f].paths.map(b=>b.computed(b.scheme,S[b.scheme],E))}}),o[f].paths.push({path:h,value:d,scheme:h.includes("colorScheme.light")?"light":h.includes("colorScheme.dark")?"dark":"none",computed:i,tokens:o}))})};return s(e,n,r),o},getTokenValue(e,t,n){var r;let o=(l=>l.split(".").filter(a=>!Zt(a.toLowerCase(),n.variable.excludedKeyRegex)).join("."))(t),i=t.includes("colorScheme.light")?"light":t.includes("colorScheme.dark")?"dark":void 0,s=[(r=e[o])==null?void 0:r.computed(i)].flat().filter(l=>l);return s.length===1?s[0].value:s.reduce((l={},a)=>{let c=a,{colorScheme:u}=c,d=At(c,["colorScheme"]);return l[u]=d,l},void 0)},getSelectorRule(e,t,n,r){return n==="class"||n==="attr"?dn(Le(t)?`${e}${t},${e} ${t}`:e,r):dn(e,dn(t??":root",r))},transformCSS(e,t,n,r,o={},i,s,l){if(Le(t)){let{cssLayer:a}=o;if(r!=="style"){let c=this.getColorSchemeOption(o,s);t=n==="dark"?c.reduce((u,{type:d,selector:f})=>(Le(f)&&(u+=f.includes("[CSS]")?f.replace("[CSS]",t):this.getSelectorRule(f,l,d,t)),u),""):dn(l??":root",t)}if(a){let c={name:"primeui"};Xt(a)&&(c.name=Ut(a.name,{name:e,type:r})),Le(c.name)&&(t=dn(`@layer ${c.name}`,t),i?.layerNames(c.name))}return t}return""}},$e={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:t}=e;t&&(this._theme=Wo(at({},t),{options:at(at({},this.defaults.options),t.options)}),this._tokens=st.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),Pt.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=Wo(at({},this.theme),{preset:e}),this._tokens=st.createTokens(e,this.defaults),this.clearLoadedStyleNames(),Pt.emit("preset:change",e),Pt.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=Wo(at({},this.theme),{options:e}),this.clearLoadedStyleNames(),Pt.emit("options:change",e),Pt.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return st.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",t){return st.getCommon({name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",t){let n={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return st.getPresetC(n)},getDirective(e="",t){let n={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return st.getPresetD(n)},getCustomPreset(e="",t,n,r){let o={name:e,preset:t,options:this.options,selector:n,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return st.getPreset(o)},getLayerOrderCSS(e=""){return st.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",t,n="style",r){return st.transformCSS(e,t,r,n,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",t,n={}){return st.getCommonStyleSheet({name:e,theme:this.theme,params:t,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,t,n={}){return st.getStyleSheet({name:e,theme:this.theme,params:t,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:t}){this._loadingStyles.size&&(this._loadingStyles.delete(t),Pt.emit(`theme:${t}:load`,e),!this._loadingStyles.size&&Pt.emit("theme:load"))}},Ne={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},C0=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`;function dr(e){"@babel/helpers - typeof";return dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dr(e)}function Aa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function La(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Aa(Object(n),!0).forEach(function(r){x0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Aa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function x0(e,t,n){return(t=O0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O0(e){var t=I0(e,"string");return dr(t)=="symbol"?t:t+""}function I0(e,t){if(dr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(dr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function k0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;ni()&&ni().components?Mi(e):t?e():co(e)}var D0=0;function N0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=nt(!1),r=nt(e),o=nt(null),i=_0()?window.document:void 0,s=t.document,l=s===void 0?i:s,a=t.immediate,c=a===void 0?!0:a,u=t.manual,d=u===void 0?!1:u,f=t.name,h=f===void 0?"style_".concat(++D0):f,g=t.id,S=g===void 0?void 0:g,E=t.media,b=E===void 0?void 0:E,v=t.nonce,A=v===void 0?void 0:v,O=t.first,H=O===void 0?!1:O,Q=t.onMounted,K=Q===void 0?void 0:Q,he=t.onUpdated,ge=he===void 0?void 0:he,be=t.onLoad,_e=be===void 0?void 0:be,Pe=t.props,ye=Pe===void 0?{}:Pe,le=function(){},ve=function(R){var $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(l){var U=La(La({},ye),$),B=U.name||h,z=U.id||S,Se=U.nonce||A;o.value=l.querySelector('style[data-primevue-style-id="'.concat(B,'"]'))||l.getElementById(z)||l.createElement("style"),o.value.isConnected||(r.value=R||e,bi(o.value,{type:"text/css",id:z,media:b,nonce:Se}),H?l.head.prepend(o.value):l.head.appendChild(o.value),y0(o.value,"data-primevue-style-id",B),bi(o.value,U),o.value.onload=function(pe){return _e?.(pe,{name:B})},K?.(B)),!n.value&&(le=Ct(r,function(pe){o.value.textContent=pe,ge?.(B)},{immediate:!0}),n.value=!0)}},ne=function(){!l||!n.value||(le(),g0(o.value)&&l.head.removeChild(o.value),n.value=!1,o.value=null)};return c&&!d&&k0(ve),{id:S,name:h,el:o,css:r,unload:ne,load:ve,isLoaded:Oi(n)}}function fr(e){"@babel/helpers - typeof";return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fr(e)}var Pa,Ta,Ra,Ca;function xa(e,t){return j0(e)||$0(e,t)||V0(e,t)||M0()}function M0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V0(e,t){if(e){if(typeof e=="string")return Oa(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Oa(e,t):void 0}}function Oa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function $0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,s,l=[],a=!0,c=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(a=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{if(!a&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw o}}return l}}function j0(e){if(Array.isArray(e))return e}function Ia(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Go(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ia(Object(n),!0).forEach(function(r){U0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ia(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function U0(e,t,n){return(t=B0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B0(e){var t=H0(e,"string");return fr(t)=="symbol"?t:t+""}function H0(e,t){if(fr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(fr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Tr(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var z0=function(t){var n=t.dt;return`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(n("scrollbar.width"),`;
}
`)},F0={},W0={},sn={name:"base",css:z0,style:C0,classes:F0,inlineStyles:W0,load:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(i){return i},o=r(Pr(Pa||(Pa=Tr(["",""])),t));return Le(o)?N0(Qn(o),Go({name:this.name},n)):{}},loadCSS:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,t)},loadStyle:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.load(this.style,n,function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return $e.transformCSS(n.name||t.name,"".concat(o).concat(Pr(Ta||(Ta=Tr(["",""])),r)))})},getCommonTheme:function(t){return $e.getCommon(this.name,t)},getComponentTheme:function(t){return $e.getComponent(this.name,t)},getDirectiveTheme:function(t){return $e.getDirective(this.name,t)},getPresetTheme:function(t,n,r){return $e.getCustomPreset(this.name,t,n,r)},getLayerOrderThemeCSS:function(){return $e.getLayerOrderCSS(this.name)},getStyleSheet:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=Ut(this.css,{dt:en})||"",o=Qn(Pr(Ra||(Ra=Tr(["","",""])),r,t)),i=Object.entries(n).reduce(function(s,l){var a=xa(l,2),c=a[0],u=a[1];return s.push("".concat(c,'="').concat(u,'"'))&&s},[]).join(" ");return Le(o)?'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(i,">").concat(o,"</style>"):""}return""},getCommonThemeStyleSheet:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return $e.getCommonStyleSheet(this.name,t,n)},getThemeStyleSheet:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[$e.getStyleSheet(this.name,t,n)];if(this.style){var o=this.name==="base"?"global-style":"".concat(this.name,"-style"),i=Pr(Ca||(Ca=Tr(["",""])),Ut(this.style,{dt:en})),s=Qn($e.transformCSS(o,i)),l=Object.entries(n).reduce(function(a,c){var u=xa(c,2),d=u[0],f=u[1];return a.push("".concat(d,'="').concat(f,'"'))&&a},[]).join(" ");Le(s)&&r.push('<style type="text/css" data-primevue-style-id="'.concat(o,'" ').concat(l,">").concat(s,"</style>"))}return r.join("")},extend:function(t){return Go(Go({},this),{},{css:void 0,style:void 0},t)}},Rr=Bc();function hr(e){"@babel/helpers - typeof";return hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hr(e)}function ka(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Cr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ka(Object(n),!0).forEach(function(r){G0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ka(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function G0(e,t,n){return(t=q0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q0(e){var t=K0(e,"string");return hr(t)=="symbol"?t:t+""}function K0(e,t){if(hr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(hr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var J0={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[Ne.STARTS_WITH,Ne.CONTAINS,Ne.NOT_CONTAINS,Ne.ENDS_WITH,Ne.EQUALS,Ne.NOT_EQUALS],numeric:[Ne.EQUALS,Ne.NOT_EQUALS,Ne.LESS_THAN,Ne.LESS_THAN_OR_EQUAL_TO,Ne.GREATER_THAN,Ne.GREATER_THAN_OR_EQUAL_TO],date:[Ne.DATE_IS,Ne.DATE_IS_NOT,Ne.DATE_BEFORE,Ne.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},Y0=Symbol();function Q0(e,t){var n={config:pr(t)};return e.config.globalProperties.$primevue=n,e.provide(Y0,n),X0(),Z0(e,n),n}var hn=[];function X0(){Pt.clear(),hn.forEach(function(e){return e?.()}),hn=[]}function Z0(e,t){var n=nt(!1),r=function(){var c;if(((c=t.config)===null||c===void 0?void 0:c.theme)!=="none"&&!$e.isStyleNameLoaded("common")){var u,d,f=((u=sn.getCommonTheme)===null||u===void 0?void 0:u.call(sn))||{},h=f.primitive,g=f.semantic,S=f.global,E=f.style,b={nonce:(d=t.config)===null||d===void 0||(d=d.csp)===null||d===void 0?void 0:d.nonce};sn.load(h?.css,Cr({name:"primitive-variables"},b)),sn.load(g?.css,Cr({name:"semantic-variables"},b)),sn.load(S?.css,Cr({name:"global-variables"},b)),sn.loadStyle(Cr({name:"global-style"},b),E),$e.setLoadedStyleName("common")}};Pt.on("theme:change",function(a){n.value||(e.config.globalProperties.$primevue.config.theme=a,n.value=!0)});var o=Ct(t.config,function(a,c){Rr.emit("config:change",{newValue:a,oldValue:c})},{immediate:!0,deep:!0}),i=Ct(function(){return t.config.ripple},function(a,c){Rr.emit("config:ripple:change",{newValue:a,oldValue:c})},{immediate:!0,deep:!0}),s=Ct(function(){return t.config.theme},function(a,c){n.value||$e.setTheme(a),t.config.unstyled||r(),n.value=!1,Rr.emit("config:theme:change",{newValue:a,oldValue:c})},{immediate:!0,deep:!1}),l=Ct(function(){return t.config.unstyled},function(a,c){!a&&t.config.theme&&r(),Rr.emit("config:unstyled:change",{newValue:a,oldValue:c})},{immediate:!0,deep:!0});hn.push(o),hn.push(i),hn.push(s),hn.push(l)}var ey={install:function(t,n){var r=p0(J0,n);Q0(t,r)}};const Zi=df(xg);Zi.use(s0);Zi.use(ey);Zi.mount("#app");export{rn as _,Z as a,ke as c,Ee as o};
