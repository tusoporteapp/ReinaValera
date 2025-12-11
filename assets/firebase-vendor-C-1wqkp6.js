const vy=()=>{};var yh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(n,e){if(!n)throw ws(e)},ws=function(n){return new Error("Firebase Database ("+Uf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ty=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],c=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},kc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,c=o?n[i+1]:0,l=i+2<n.length,u=l?n[i+2]:0,f=r>>2,p=(r&3)<<4|c>>4;let m=(c&15)<<2|u>>6,w=u&63;l||(w=64,o||(m=64)),s.push(t[f],t[p],t[m],t[w])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Bf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ty(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||c==null||u==null||p==null)throw new wy;const m=r<<2|c>>4;if(s.push(m),u!==64){const w=c<<4&240|u>>2;if(s.push(w),p!==64){const R=u<<6&192|p;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qf=function(n){const e=Bf(n);return kc.encodeByteArray(e,!0)},Dr=function(n){return qf(n).replace(/\./g,"")},Or=function(n){try{return kc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(n){return jf(void 0,n)}function jf(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Cy(t)||(n[t]=jf(n[t],e[t]));return n}function Cy(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=()=>Sy().__FIREBASE_DEFAULTS__,by=()=>{if(typeof process>"u"||typeof yh>"u")return;const n=yh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Py=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Or(n[1]);return e&&JSON.parse(e)},go=()=>{try{return vy()||Ry()||by()||Py()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$f=n=>{var e,t;return(t=(e=go())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Wf=n=>{const e=$f(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},zf=()=>{var n;return(n=go())==null?void 0:n.config},Gf=n=>{var e;return(e=go())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dc(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Dr(JSON.stringify(t)),Dr(JSON.stringify(o)),""].join(".")}const ri={};function Ny(){const n={prod:[],emulator:[]};for(const e of Object.keys(ri))ri[e]?n.emulator.push(e):n.prod.push(e);return n}function ky(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Eh=!1;function Oc(n,e){if(typeof window>"u"||typeof document>"u"||!hn(window.location.host)||ri[n]===e||ri[n]||Eh)return;ri[n]=e;function t(m){return`__firebase__banner__${m}`}const s="__firebase__banner",r=Ny().prod.length>0;function o(){const m=document.getElementById(s);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Eh=!0,o()},m}function f(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=ky(s),w=t("text"),R=document.getElementById(w)||document.createElement("span"),k=t("learnmore"),N=document.getElementById(k)||document.createElement("a"),j=t("preprendIcon"),$=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const J=m.element;c(J),f(N,k);const me=u();l($,j),J.append($,R,N,me),document.body.appendChild(J)}r?(R.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function Dy(){var e;const n=(e=go())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Oy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Qf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vy(){const n=Me();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function My(){return Uf.NODE_ADMIN===!0}function xy(){return!Dy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yf(){try{return typeof indexedDB=="object"}catch{return!1}}function Xf(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}function Ly(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="FirebaseError";class ct extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Fy,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bn.prototype.create)}}class Bn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Uy(r,s):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new ct(i,c,s)}}function Uy(n,e){return n.replace(By,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const By=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(n){return JSON.parse(n)}function Se(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=gi(Or(r[0])||""),t=gi(Or(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},qy=function(n){const e=Jf(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},jy=function(n){const e=Jf(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function hs(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Vr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Mr(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function bt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Ih(r)&&Ih(o)){if(!bt(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Ih(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)s[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const m=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],c=this.chain_[3],l=this.chain_[4],u,f;for(let p=0;p<80;p++){p<40?p<20?(u=c^r&(o^c),f=1518500249):(u=r^o^c,f=1859775393):p<60?(u=r&o|c&(r|o),f=2400959708):(u=r^o^c,f=3395469782);const m=(i<<5|i>>>27)+u+l+f+s[p]&4294967295;l=c,c=o,o=(r<<30|r>>>2)&4294967295,r=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Wy(n,e){const t=new zy(n,e);return t.subscribe.bind(t)}class zy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Gy(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Ta),i.error===void 0&&(i.error=Ta),i.complete===void 0&&(i.complete=Ta);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ta(){}function ds(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,D(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},_o=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=1e3,Qy=2,Yy=14400*1e3,Xy=.5;function vh(n,e=Ky,t=Qy){const s=e*Math.pow(t,n),i=Math.round(Xy*s*(Math.random()-.5)*2);return Math.min(Yy,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n){return n&&n._delegate?n._delegate:n}class tt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Tt;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eE(e))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tn){return this.instances.has(e)}getOptions(e=Tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);s===c&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Zy(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Tn){return this.component?this.component.multipleInstances?e:Tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zy(n){return n===Tn?void 0:n}function eE(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Jy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const nE={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},sE=K.INFO,iE={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},rE=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=iE[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mi{constructor(e){this.name=e,this._logLevel=sE,this._logHandler=rE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const oE=(n,e)=>e.some(t=>n instanceof t);let Th,wh;function aE(){return Th||(Th=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cE(){return wh||(wh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zf=new WeakMap,Wa=new WeakMap,ep=new WeakMap,wa=new WeakMap,Mc=new WeakMap;function lE(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Qt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Zf.set(t,n)}).catch(()=>{}),Mc.set(e,n),e}function uE(n){if(Wa.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Wa.set(n,e)}let za={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Wa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ep.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Qt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function hE(n){za=n(za)}function dE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Aa(this),e,...t);return ep.set(s,e.sort?e.sort():[e]),Qt(s)}:cE().includes(n)?function(...e){return n.apply(Aa(this),e),Qt(Zf.get(this))}:function(...e){return Qt(n.apply(Aa(this),e))}}function fE(n){return typeof n=="function"?dE(n):(n instanceof IDBTransaction&&uE(n),oE(n,aE())?new Proxy(n,za):n)}function Qt(n){if(n instanceof IDBRequest)return lE(n);if(wa.has(n))return wa.get(n);const e=fE(n);return e!==n&&(wa.set(n,e),Mc.set(e,n)),e}const Aa=n=>Mc.get(n);function tp(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),c=Qt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Qt(o.result),l.oldVersion,l.newVersion,Qt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const pE=["get","getKey","getAll","getAllKeys","count"],mE=["put","add","delete","clear"],Ca=new Map;function Ah(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ca.get(e))return Ca.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=mE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||pE.includes(t)))return;const r=async function(o,...c){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),i&&l.done]))[0]};return Ca.set(e,r),r}hE(n=>({...n,get:(e,t,s)=>Ah(e,t)||n.get(e,t,s),has:(e,t)=>!!Ah(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_E(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function _E(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ga="@firebase/app",Ch="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new Mi("@firebase/app"),yE="@firebase/app-compat",EE="@firebase/analytics-compat",IE="@firebase/analytics",vE="@firebase/app-check-compat",TE="@firebase/app-check",wE="@firebase/auth",AE="@firebase/auth-compat",CE="@firebase/database",SE="@firebase/data-connect",RE="@firebase/database-compat",bE="@firebase/functions",PE="@firebase/functions-compat",NE="@firebase/installations",kE="@firebase/installations-compat",DE="@firebase/messaging",OE="@firebase/messaging-compat",VE="@firebase/performance",ME="@firebase/performance-compat",xE="@firebase/remote-config",LE="@firebase/remote-config-compat",FE="@firebase/storage",UE="@firebase/storage-compat",BE="@firebase/firestore",qE="@firebase/ai",jE="@firebase/firestore-compat",$E="firebase",WE="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="[DEFAULT]",zE={[Ga]:"fire-core",[yE]:"fire-core-compat",[IE]:"fire-analytics",[EE]:"fire-analytics-compat",[TE]:"fire-app-check",[vE]:"fire-app-check-compat",[wE]:"fire-auth",[AE]:"fire-auth-compat",[CE]:"fire-rtdb",[SE]:"fire-data-connect",[RE]:"fire-rtdb-compat",[bE]:"fire-fn",[PE]:"fire-fn-compat",[NE]:"fire-iid",[kE]:"fire-iid-compat",[DE]:"fire-fcm",[OE]:"fire-fcm-compat",[VE]:"fire-perf",[ME]:"fire-perf-compat",[xE]:"fire-rc",[LE]:"fire-rc-compat",[FE]:"fire-gcs",[UE]:"fire-gcs-compat",[BE]:"fire-fst",[jE]:"fire-fst-compat",[qE]:"fire-vertex","fire-js":"fire-js",[$E]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new Map,GE=new Map,Ka=new Map;function Sh(n,e){try{n.container.addComponent(e)}catch(t){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ot(n){const e=n.name;if(Ka.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;Ka.set(e,n);for(const t of xr.values())Sh(t,n);for(const t of GE.values())Sh(t,n);return!0}function dn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Xe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new Bn("app","Firebase",HE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=WE;function QE(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Ha,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Yt.create("bad-app-name",{appName:String(i)});if(t||(t=zf()),!t)throw Yt.create("no-options");const r=xr.get(i);if(r){if(bt(t,r.options)&&bt(s,r.config))return r;throw Yt.create("duplicate-app",{appName:i})}const o=new tE(i);for(const l of Ka.values())o.addComponent(l);const c=new KE(t,s,o);return xr.set(i,c),c}function yo(n=Ha){const e=xr.get(n);if(!e&&n===Ha&&zf())return QE();if(!e)throw Yt.create("no-app",{appName:n});return e}function We(n,e,t){let s=zE[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(o.join(" "));return}ot(new tt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="firebase-heartbeat-database",XE=1,_i="firebase-heartbeat-store";let Sa=null;function np(){return Sa||(Sa=tp(YE,XE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(_i)}catch(t){console.warn(t)}}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),Sa}async function JE(n){try{const t=(await np()).transaction(_i),s=await t.objectStore(_i).get(sp(n));return await t.done,s}catch(e){if(e instanceof ct)Pt.warn(e.message);else{const t=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pt.warn(t.message)}}}async function Rh(n,e){try{const s=(await np()).transaction(_i,"readwrite");await s.objectStore(_i).put(e,sp(n)),await s.done}catch(t){if(t instanceof ct)Pt.warn(t.message);else{const s=Yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pt.warn(s.message)}}}function sp(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=1024,eI=30;class tI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>eI){const o=iI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Pt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=bh(),{heartbeatsToSend:s,unsentEntries:i}=nI(this._heartbeatsCache.heartbeats),r=Dr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Pt.warn(t),""}}}function bh(){return new Date().toISOString().substring(0,10)}function nI(n,e=ZE){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ph(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ph(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class sI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yf()?Xf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await JE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Rh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Rh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ph(n){return Dr(JSON.stringify({version:2,heartbeats:n})).length}function iI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(n){ot(new tt("platform-logger",e=>new gE(e),"PRIVATE")),ot(new tt("heartbeat",e=>new tI(e),"PRIVATE")),We(Ga,Ch,n),We(Ga,Ch,"esm2020"),We("fire-js","")}rI("");var Nh={};const kh="@firebase/database",Dh="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ip="";function oI(n){ip=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Se(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:gi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new aI(e)}}catch{}return new cI},An=rp("localStorage"),lI=rp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new Mi("@firebase/database"),uI=(function(){let n=1;return function(){return n++}})(),op=function(n){const e=Hy(n),t=new $y;t.update(e);const s=t.digest();return kc.encodeByteArray(s)},xi=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=xi.apply(null,s):typeof s=="object"?e+=Se(s):e+=s,e+=" "}return e};let oi=null,Oh=!0;const hI=function(n,e){D(!0,"Can't turn on custom loggers persistently."),ss.logLevel=K.VERBOSE,oi=ss.log.bind(ss)},be=function(...n){if(Oh===!0&&(Oh=!1,oi===null&&lI.get("logging_enabled")===!0&&hI()),oi){const e=xi.apply(null,n);oi(e)}},Li=function(n){return function(...e){be(n,...e)}},Qa=function(...n){const e="FIREBASE INTERNAL ERROR: "+xi(...n);ss.error(e)},Nt=function(...n){const e=`FIREBASE FATAL ERROR: ${xi(...n)}`;throw ss.error(e),new Error(e)},ze=function(...n){const e="FIREBASE WARNING: "+xi(...n);ss.warn(e)},dI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Eo=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},fI=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},fs="[MIN_NAME]",Nn="[MAX_NAME]",jn=function(n,e){if(n===e)return 0;if(n===fs||e===Nn)return-1;if(e===fs||n===Nn)return 1;{const t=Vh(n),s=Vh(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},pI=function(n,e){return n===e?0:n<e?-1:1},Ys=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Se(e))},xc=function(n){if(typeof n!="object"||n===null)return Se(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Se(e[s]),t+=":",t+=xc(n[e[s]]);return t+="}",t},ap=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function xe(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const cp=function(n){D(!Eo(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,c,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(c=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=c+s,o=Math.round(n*Math.pow(2,t-c)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const f=u.join("");let p="";for(l=0;l<64;l+=8){let m=parseInt(f.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),p=p+m}return p.toLowerCase()},mI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function _I(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const yI=new RegExp("^-?(0*)\\d{1,10}$"),EI=-2147483648,II=2147483647,Vh=function(n){if(yI.test(n)){const e=Number(n);if(e>=EI&&e<=II)return e}return null},Cs=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ze("Exception was thrown by user callback.",t),e},Math.floor(0))}},vI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ai=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Xe(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class Ir{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ir.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="5",lp="v",up="s",hp="r",dp="f",fp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pp="ls",mp="p",Ya="ac",gp="websocket",_p="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,t,s,i,r=!1,o="",c=!1,l=!1,u=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=An.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&An.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function AI(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ep(n,e,t){D(typeof e=="string","typeof type must == string"),D(typeof t=="object","typeof params must == object");let s;if(e===gp)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===_p)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);AI(n)&&(t.ns=n.namespace);const i=[];return xe(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(){this.counters_={}}incrementCounter(e,t=1){vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ay(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra={},ba={};function Fc(n){const e=n.toString();return Ra[e]||(Ra[e]=new CI),Ra[e]}function SI(n,e){const t=n.toString();return ba[t]||(ba[t]=e()),ba[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Cs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="start",bI="close",PI="pLPCommand",NI="pRTLPCB",Ip="id",vp="pw",Tp="ser",kI="cb",DI="seg",OI="ts",VI="d",MI="dframe",wp=1870,Ap=30,xI=wp-Ap,LI=25e3,FI=3e4;class es{constructor(e,t,s,i,r,o,c){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Li(e),this.stats_=Fc(t),this.urlFn=l=>(this.appCheckToken&&(l[Ya]=this.appCheckToken),Ep(t,_p,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new RI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(FI)),fI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Uc((...r)=>{const[o,c,l,u,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Mh)this.id=c,this.password=l;else if(o===bI)c?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(c,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,c]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,c)},()=>{this.onClosed_()},this.urlFn);const s={};s[Mh]="t",s[Tp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[kI]=this.scriptTagHolder.uniqueCallbackIdentifier),s[lp]=Lc,this.transportSessionId&&(s[up]=this.transportSessionId),this.lastSessionId&&(s[pp]=this.lastSessionId),this.applicationId&&(s[mp]=this.applicationId),this.appCheckToken&&(s[Ya]=this.appCheckToken),typeof location<"u"&&location.hostname&&fp.test(location.hostname)&&(s[hp]=dp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){es.forceAllow_=!0}static forceDisallow(){es.forceDisallow_=!0}static isAvailable(){return es.forceAllow_?!0:!es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!mI()&&!gI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Se(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=qf(t),i=ap(s,xI);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[MI]="t",s[Ip]=e,s[vp]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Se(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Uc{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=uI(),window[PI+this.uniqueCallbackIdentifier]=e,window[NI+this.uniqueCallbackIdentifier]=t,this.myIFrame=Uc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(c){be("frame writing exception"),c.stack&&be(c.stack),be(c)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ip]=this.myID,e[vp]=this.myPW,e[Tp]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ap+s.length<=wp;){const o=this.pendingSegs.shift();s=s+"&"+DI+i+"="+o.seg+"&"+OI+i+"="+o.ts+"&"+VI+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(LI)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=16384,BI=45e3;let Lr=null;typeof MozWebSocket<"u"?Lr=MozWebSocket:typeof WebSocket<"u"&&(Lr=WebSocket);class nt{constructor(e,t,s,i,r,o,c){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Li(this.connId),this.stats_=Fc(t),this.connURL=nt.connectionURL_(t,o,c,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[lp]=Lc,typeof location<"u"&&location.hostname&&fp.test(location.hostname)&&(o[hp]=dp),t&&(o[up]=t),s&&(o[pp]=s),i&&(o[Ya]=i),r&&(o[mp]=r),Ep(e,gp,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,An.set("previous_websocket_failure",!0);try{let s;My(),this.mySock=new Lr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){nt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Lr!==null&&!nt.forceDisallow_}static previouslyFailed(){return An.isInMemoryStorage||An.get("previous_websocket_failure")===!0}markConnectionHealthy(){An.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=gi(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Se(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ap(t,UI);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BI))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nt.responsesRequiredToBeHealthy=2;nt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{static get ALL_TRANSPORTS(){return[es,nt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=nt&&nt.isAvailable();let s=t&&!nt.previouslyFailed();if(e.webSocketOnly&&(t||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[nt];else{const i=this.transports_=[];for(const r of yi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);yi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=6e4,jI=5e3,$I=10*1024,WI=100*1024,Pa="t",xh="d",zI="s",Lh="r",GI="e",Fh="o",Uh="a",Bh="n",qh="p",HI="h";class KI{constructor(e,t,s,i,r,o,c,l,u,f){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=c,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Li("c:"+this.id+":"),this.transportManager_=new yi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ai(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>WI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$I?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pa in e){const t=e[Pa];t===Uh?this.upgradeIfSecondaryHealthy_():t===Lh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Fh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ys("t",e),s=Ys("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ys("t",e),s=Ys("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ys(Pa,e);if(xh in e){const s=e[xh];if(t===HI){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Bh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===zI?this.onConnectionShutdown_(s):t===Lh?this.onReset_(s):t===GI?Qa("Server Error: "+s):t===Fh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qa("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Lc!==s&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),ai(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ai(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(jI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(An.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){D(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Sp{static getInstance(){return new Fr}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=32,$h=768;class te{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Z(){return new te("")}function z(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function tn(n){return n.pieces_.length-n.pieceNum_}function se(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new te(n.pieces_,e)}function Bc(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function QI(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ei(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Rp(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new te(e,0)}function pe(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new te(t,0)}function G(n){return n.pieceNum_>=n.pieces_.length}function $e(n,e){const t=z(n),s=z(e);if(t===null)return e;if(t===s)return $e(se(n),se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function YI(n,e){const t=Ei(n,0),s=Ei(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=jn(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function qc(n,e){if(tn(n)!==tn(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Ze(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(tn(n)>tn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class XI{constructor(e,t){this.errorPrefix_=t,this.parts_=Ei(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=_o(this.parts_[s]);bp(this)}}function JI(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=_o(e),bp(n)}function ZI(n){const e=n.parts_.pop();n.byteLength_-=_o(e),n.parts_.length>0&&(n.byteLength_-=1)}function bp(n){if(n.byteLength_>$h)throw new Error(n.errorPrefix_+"has a key path longer than "+$h+" bytes ("+n.byteLength_+").");if(n.parts_.length>jh)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jh+") or object contains a cycle "+wn(n))}function wn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends Sp{static getInstance(){return new jc}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=1e3,ev=300*1e3,Wh=30*1e3,tv=1.3,nv=3e4,sv="server_kill",zh=3;class St extends Cp{constructor(e,t,s,i,r,o,c,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=c,this.authOverride_=l,this.id=St.nextPersistentConnectionId_++,this.log_=Li("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xs,this.maxReconnectDelay_=ev,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Se(r)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Tt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const c=o.d;o.s==="ok"?t.resolve(c):t.reject(c)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const c={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,c=>{const l=c.d,u=c.s;St.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",c),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&vt(e,"w")){const s=hs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jy(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Wh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=qy(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const c=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(c):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Se(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Qa("Unrecognized action received from server: "+Se(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nv&&(this.reconnectDelay_=Xs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tv)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+St.nextConnectionId_++,r=this.lastSessionId;let o=!1,c=null;const l=function(){c?c.close():(o=!0,s())},u=function(p){D(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(p)};this.realtime_={close:l,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,m]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=m&&m.token,c=new KI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,w=>{ze(w+" ("+this.repoInfo_.toString()+")"),this.interrupt(sv)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&ze(p),l())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Vr(this.interruptReasons_)&&(this.reconnectDelay_=Xs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>xc(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new te(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){be("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zh&&(this.reconnectDelay_=Wh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){be("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ip.replace(/\./g,"-")]=1,Vc()?e["framework.cordova"]=1:Qf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fr.getInstance().currentlyOnline();return Vr(this.interruptReasons_)&&e}}St.nextPersistentConnectionId_=0;St.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new H(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new H(fs,e),i=new H(fs,t);return this.compare(s,i)!==0}minPost(){return H.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr;class Pp extends Io{static get __EMPTY_NODE(){return dr}static set __EMPTY_NODE(e){dr=e}compare(e,t){return jn(e.name,t.name)}isDefinedOn(e){throw ws("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return H.MIN}maxPost(){return new H(Nn,dr)}makePost(e,t){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,dr)}toString(){return".key"}}const is=new Pp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr=class{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Ke=class ei{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ei.RED,this.left=i??dt.EMPTY_NODE,this.right=r??dt.EMPTY_NODE}copy(e,t,s,i,r){return new ei(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return dt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ei.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ei.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Ke.RED=!0;Ke.BLACK=!1;class iv{copy(e,t,s,i,r){return this}insert(e,t,s){return new Ke(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let dt=class vr{constructor(e,t=vr.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new vr(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ke.BLACK,null,null))}remove(e){return new vr(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ke.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new fr(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new fr(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new fr(this.root_,null,this.comparator_,!0,e)}};dt.EMPTY_NODE=new iv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(n,e){return jn(n.name,e.name)}function $c(n,e){return jn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xa;function ov(n){Xa=n}const Np=function(n){return typeof n=="number"?"number:"+cp(n):"string:"+n},kp=function(n){if(n.isLeafNode()){const e=n.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vt(e,".sv"),"Priority must be a string or number.")}else D(n===Xa||n.isEmpty(),"priority of unexpected type.");D(n===Xa||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gh;class Ae{static set __childrenNodeConstructor(e){Gh=e}static get __childrenNodeConstructor(){return Gh}constructor(e,t=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),kp(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:z(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=z(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||tn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(se(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Np(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=cp(this.value_):e+=this.value_,this.lazyHash_=op(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=Ae.VALUE_TYPE_ORDER.indexOf(t),r=Ae.VALUE_TYPE_ORDER.indexOf(s);return D(i>=0,"Unknown leaf type: "+t),D(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dp,Op;function av(n){Dp=n}function cv(n){Op=n}class lv extends Io{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?jn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return H.MIN}maxPost(){return new H(Nn,new Ae("[PRIORITY-POST]",Op))}makePost(e,t){const s=Dp(e);return new H(t,new Ae("[PRIORITY-POST]",s))}toString(){return".priority"}}const le=new lv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=Math.log(2);class hv{constructor(e){const t=r=>parseInt(Math.log(r)/uv,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ur=function(n,e,t,s){n.sort(e);const i=function(l,u){const f=u-l;let p,m;if(f===0)return null;if(f===1)return p=n[l],m=t?t(p):p,new Ke(m,p.node,Ke.BLACK,null,null);{const w=parseInt(f/2,10)+l,R=i(l,w),k=i(w+1,u);return p=n[w],m=t?t(p):p,new Ke(m,p.node,Ke.BLACK,R,k)}},r=function(l){let u=null,f=null,p=n.length;const m=function(R,k){const N=p-R,j=p;p-=R;const $=i(N+1,j),J=n[N],me=t?t(J):J;w(new Ke(me,J.node,k,null,$))},w=function(R){u?(u.left=R,u=R):(f=R,u=R)};for(let R=0;R<l.count;++R){const k=l.nextBitIsOne(),N=Math.pow(2,l.count-(R+1));k?m(N,Ke.BLACK):(m(N,Ke.BLACK),m(N,Ke.RED))}return f},o=new hv(n.length),c=r(o);return new dt(s||e,c)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na;const Qn={};class wt{static get Default(){return D(Qn&&le,"ChildrenNode.ts has not been loaded"),Na=Na||new wt({".priority":Qn},{".priority":le}),Na}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=hs(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof dt?t:null}hasIndex(e){return vt(this.indexSet_,e.toString())}addIndex(e,t){D(e!==is,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(H.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let c;i?c=Ur(s,e.getCompare()):c=Qn;const l=e.toString(),u={...this.indexSet_};u[l]=e;const f={...this.indexes_};return f[l]=c,new wt(f,u)}addToIndexes(e,t){const s=Mr(this.indexes_,(i,r)=>{const o=hs(this.indexSet_,r);if(D(o,"Missing index implementation for "+r),i===Qn)if(o.isDefinedOn(e.node)){const c=[],l=t.getIterator(H.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&c.push(u),u=l.getNext();return c.push(e),Ur(c,o.getCompare())}else return Qn;else{const c=t.get(e.name);let l=i;return c&&(l=l.remove(new H(e.name,c))),l.insert(e,e.node)}});return new wt(s,this.indexSet_)}removeFromIndexes(e,t){const s=Mr(this.indexes_,i=>{if(i===Qn)return i;{const r=t.get(e.name);return r?i.remove(new H(e.name,r)):i}});return new wt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Js;class F{static get EMPTY_NODE(){return Js||(Js=new F(new dt($c),null,wt.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&kp(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Js}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Js:t}}getChild(e){const t=z(e);return t===null?this:this.getImmediateChild(t).getChild(se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(D(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new H(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Js:this.priorityNode_;return new F(i,o,r)}}updateChild(e,t){const s=z(e);if(s===null)return t;{D(z(e)!==".priority"||tn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(se(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(le,(o,c)=>{t[o]=c.val(e),s++,r&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const c in t)o[c]=t[c];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Np(this.getPriority().val())+":"),this.forEachChild(le,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":op(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new H(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new H(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new H(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fi?-1:0}withIndex(e){if(e===is||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===is||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(le),i=t.getIterator(le);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===is?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class dv extends F{constructor(){super(new dt($c),F.EMPTY_NODE,wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const Fi=new dv;Object.defineProperties(H,{MIN:{value:new H(fs,F.EMPTY_NODE)},MAX:{value:new H(Nn,Fi)}});Pp.__EMPTY_NODE=F.EMPTY_NODE;Ae.__childrenNodeConstructor=F;ov(Fi);cv(Fi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=!0;function _e(n,e=null){if(n===null)return F.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ae(t,_e(e))}if(!(n instanceof Array)&&fv){const t=[];let s=!1;if(xe(n,(o,c)=>{if(o.substring(0,1)!=="."){const l=_e(c);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new H(o,l)))}}),t.length===0)return F.EMPTY_NODE;const r=Ur(t,rv,o=>o.name,$c);if(s){const o=Ur(t,le.getCompare());return new F(r,_e(e),new wt({".priority":o},{".priority":le}))}else return new F(r,_e(e),wt.Default)}else{let t=F.EMPTY_NODE;return xe(n,(s,i)=>{if(vt(n,s)&&s.substring(0,1)!=="."){const r=_e(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(_e(e))}}av(_e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv extends Io{constructor(e){super(),this.indexPath_=e,D(!G(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?jn(e.name,t.name):r}makePost(e,t){const s=_e(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,s);return new H(t,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,Fi);return new H(Nn,e)}toString(){return Ei(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv extends Io{compare(e,t){const s=e.node.compareTo(t.node);return s===0?jn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,t){const s=_e(e);return new H(t,s)}toString(){return".value"}}const gv=new mv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(n){return{type:"value",snapshotNode:n}}function ps(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Ii(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function vi(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function _v(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const c=e.getImmediateChild(t);return c.getChild(i).equals(s.getChild(i))&&c.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Ii(t,c)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):c.isEmpty()?o.trackChildChange(ps(t,s)):o.trackChildChange(vi(t,s,c))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(le,(i,r)=>{t.hasChild(i)||s.trackChildChange(Ii(i,r))}),t.isLeafNode()||t.forEachChild(le,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(vi(i,r,o))}else s.trackChildChange(ps(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.indexedFilter_=new Wc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ti.getStartPost_(e),this.endPost_=Ti.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new H(t,s))||(s=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=F.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const r=this;return t.forEachChild(le,(o,c)=>{r.matches(new H(o,c))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ti(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new H(t,s))||(s=F.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const c=r.getNext();if(this.withinDirectionalStart(c))if(this.withinDirectionalEnd(c))i=i.updateImmediateChild(c.name,c.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const c=r.getNext();o<this.limit_&&this.withinDirectionalStart(c)&&this.withinDirectionalEnd(c)?o++:i=i.updateImmediateChild(c.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const p=this.index_.getCompare();o=(m,w)=>p(w,m)}else o=this.index_.getCompare();const c=e;D(c.numChildren()===this.limit_,"");const l=new H(t,s),u=this.reverse_?c.getFirstChild(this.index_):c.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(c.hasChild(t)){const p=c.getImmediateChild(t);let m=i.getChildAfterChild(this.index_,u,this.reverse_);for(;m!=null&&(m.name===t||c.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const w=m==null?1:o(m,l);if(f&&!s.isEmpty()&&w>=0)return r!=null&&r.trackChildChange(vi(t,s,p)),c.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Ii(t,p));const k=c.updateImmediateChild(t,F.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(r!=null&&r.trackChildChange(ps(m.name,m.node)),k.updateImmediateChild(m.name,m.node)):k}}else return s.isEmpty()?e:f&&o(u,l)>=0?(r!=null&&(r.trackChildChange(Ii(u.name,u.node)),r.trackChildChange(ps(t,s))),c.updateImmediateChild(t,s).updateImmediateChild(u.name,F.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fs}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new zc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ev(n){return n.loadsAllData()?new Wc(n.getIndex()):n.hasLimit()?new yv(n):new Ti(n)}function Hh(n){const e={};if(n.isDefault())return e;let t;if(n.index_===le?t="$priority":n.index_===gv?t="$value":n.index_===is?t="$key":(D(n.index_ instanceof pv,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Se(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Se(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Se(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Se(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Se(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Kh(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==le&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends Cp{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Li("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Br.getListenId_(e,s),c={};this.listens_[o]=c;const l=Hh(e._queryParams);this.restRequest_(r+".json",l,(u,f)=>{let p=f;if(u===404&&(p=null,u=null),u===null&&this.onDataUpdate_(r,p,!1,s),hs(this.listens_,o)===c){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",i(m,null)}})}unlisten(e,t){const s=Br.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Hh(e._queryParams),s=e._path.toString(),i=new Tt;return this.restRequest_(s+".json",t,(r,o)=>{let c=o;r===404&&(c=null,r=null),r===null?(this.onDataUpdate_(s,c,!1,null),i.resolve(c)):i.reject(new Error(c))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+As(t);this.log_("Sending REST request for "+o);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(s&&c.readyState===4){this.log_("REST Response for "+o+" received. status:",c.status,"response:",c.responseText);let l=null;if(c.status>=200&&c.status<300){try{l=gi(c.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+c.responseText)}s(null,l)}else c.status!==401&&c.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+c.status),s(c.status);s=null}},c.open("GET",o,!0),c.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(){return{value:null,children:new Map}}function Ss(n,e,t){if(G(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=z(e);n.children.has(s)||n.children.set(s,qr());const i=n.children.get(s);e=se(e),Ss(i,e,t)}}function Ja(n,e){if(G(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(le,(s,i)=>{Ss(n,new te(s),i)}),Ja(n,e)}}else if(n.children.size>0){const t=z(e);return e=se(e),n.children.has(t)&&Ja(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Za(n,e,t){n.value!==null?t(e,n.value):vv(n,(s,i)=>{const r=new te(e.toString()+"/"+s);Za(i,r,t)})}function vv(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&xe(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=10*1e3,wv=30*1e3,Av=300*1e3;class Cv{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Tv(e);const s=Qh+(wv-Qh)*Math.random();ai(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;xe(e,(i,r)=>{r>0&&vt(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),ai(this.reportStats_.bind(this),Math.floor(Math.random()*2*Av))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(st||(st={}));function Mp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hc(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=st.ACK_USER_WRITE,this.source=Mp()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new te(e));return new jr(Z(),t,this.revert)}}else return D(z(this.path)===e,"operationForChild called for unrelated child."),new jr(se(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t){this.source=e,this.path=t,this.type=st.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new wi(this.source,Z()):new wi(this.source,se(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=st.OVERWRITE}operationForChild(e){return G(this.path)?new kn(this.source,Z(),this.snap.getImmediateChild(e)):new kn(this.source,se(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=st.MERGE}operationForChild(e){if(G(this.path)){const t=this.children.subtree(new te(e));return t.isEmpty()?null:t.value?new kn(this.source,Z(),t.value):new Ai(this.source,Z(),t)}else return D(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ai(this.source,se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const t=z(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Rv(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(_v(o.childName,o.snapshotNode))}),Zs(n,i,"child_removed",e,s,t),Zs(n,i,"child_added",e,s,t),Zs(n,i,"child_moved",r,s,t),Zs(n,i,"child_changed",e,s,t),Zs(n,i,"value",e,s,t),i}function Zs(n,e,t,s,i,r){const o=s.filter(c=>c.type===t);o.sort((c,l)=>Pv(n,c,l)),o.forEach(c=>{const l=bv(n,c,r);i.forEach(u=>{u.respondsTo(c.type)&&e.push(u.createEvent(l,n.query_))})})}function bv(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Pv(n,e,t){if(e.childName==null||t.childName==null)throw ws("Should only compare child_ events.");const s=new H(e.childName,e.snapshotNode),i=new H(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(n,e){return{eventCache:n,serverCache:e}}function ci(n,e,t,s){return vo(new Dn(e,t,s),n.serverCache)}function xp(n,e,t,s){return vo(n.eventCache,new Dn(e,t,s))}function ec(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function On(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka;const Nv=()=>(ka||(ka=new dt(pI)),ka);class oe{static fromObject(e){let t=new oe(null);return xe(e,(s,i)=>{t=t.set(new te(s),i)}),t}constructor(e,t=Nv()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Z(),value:this.value};if(G(e))return null;{const s=z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(se(e),t);return r!=null?{path:pe(new te(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const t=z(e),s=this.children.get(t);return s!==null?s.subtree(se(e)):new oe(null)}}set(e,t){if(G(e))return new oe(t,this.children);{const s=z(e),r=(this.children.get(s)||new oe(null)).set(se(e),t),o=this.children.insert(s,r);return new oe(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const t=z(e),s=this.children.get(t);if(s){const i=s.remove(se(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new oe(null):new oe(this.value,r)}else return this}}get(e){if(G(e))return this.value;{const t=z(e),s=this.children.get(t);return s?s.get(se(e)):null}}setTree(e,t){if(G(e))return t;{const s=z(e),r=(this.children.get(s)||new oe(null)).setTree(se(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new oe(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(pe(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Z(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(G(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(se(e),pe(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Z(),t)}foreachOnPath_(e,t,s){if(G(e))return this;{this.value&&s(t,this.value);const i=z(e),r=this.children.get(i);return r?r.foreachOnPath_(se(e),pe(t,i),s):new oe(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(pe(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.writeTree_=e}static empty(){return new rt(new oe(null))}}function li(n,e,t){if(G(e))return new rt(new oe(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=$e(i,e);return r=r.updateChild(o,t),new rt(n.writeTree_.set(i,r))}else{const i=new oe(t),r=n.writeTree_.setTree(e,i);return new rt(r)}}}function Yh(n,e,t){let s=n;return xe(t,(i,r)=>{s=li(s,pe(e,i),r)}),s}function Xh(n,e){if(G(e))return rt.empty();{const t=n.writeTree_.setTree(e,new oe(null));return new rt(t)}}function tc(n,e){return $n(n,e)!=null}function $n(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild($e(t.path,e)):null}function Jh(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(le,(s,i)=>{e.push(new H(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new H(s,i.value))}),e}function Xt(n,e){if(G(e))return n;{const t=$n(n,e);return t!=null?new rt(new oe(t)):new rt(n.writeTree_.subtree(e))}}function nc(n){return n.writeTree_.isEmpty()}function ms(n,e){return Lp(Z(),n.writeTree_,e)}function Lp(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(D(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Lp(pe(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(pe(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(n,e){return qp(e,n)}function kv(n,e,t,s,i){D(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=li(n.visibleWrites,e,t)),n.lastWriteId=s}function Dv(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Ov(n,e){const t=n.allWrites.findIndex(c=>c.writeId===e);D(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const c=n.allWrites[o];c.visible&&(o>=t&&Vv(c,s.path)?i=!1:Ze(s.path,c.path)&&(r=!0)),o--}if(i){if(r)return Mv(n),!0;if(s.snap)n.visibleWrites=Xh(n.visibleWrites,s.path);else{const c=s.children;xe(c,l=>{n.visibleWrites=Xh(n.visibleWrites,pe(s.path,l))})}return!0}else return!1}function Vv(n,e){if(n.snap)return Ze(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Ze(pe(n.path,t),e))return!0;return!1}function Mv(n){n.visibleWrites=Fp(n.allWrites,xv,Z()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function xv(n){return n.visible}function Fp(n,e,t){let s=rt.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let c;if(r.snap)Ze(t,o)?(c=$e(t,o),s=li(s,c,r.snap)):Ze(o,t)&&(c=$e(o,t),s=li(s,Z(),r.snap.getChild(c)));else if(r.children){if(Ze(t,o))c=$e(t,o),s=Yh(s,c,r.children);else if(Ze(o,t))if(c=$e(o,t),G(c))s=Yh(s,Z(),r.children);else{const l=hs(r.children,z(c));if(l){const u=l.getChild(se(c));s=li(s,Z(),u)}}}else throw ws("WriteRecord should have .snap or .children")}}return s}function Up(n,e,t,s,i){if(!s&&!i){const r=$n(n.visibleWrites,e);if(r!=null)return r;{const o=Xt(n.visibleWrites,e);if(nc(o))return t;if(t==null&&!tc(o,Z()))return null;{const c=t||F.EMPTY_NODE;return ms(o,c)}}}else{const r=Xt(n.visibleWrites,e);if(!i&&nc(r))return t;if(!i&&t==null&&!tc(r,Z()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(Ze(u.path,e)||Ze(e,u.path))},c=Fp(n.allWrites,o,e),l=t||F.EMPTY_NODE;return ms(c,l)}}}function Lv(n,e,t){let s=F.EMPTY_NODE;const i=$n(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(le,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Xt(n.visibleWrites,e);return t.forEachChild(le,(o,c)=>{const l=ms(Xt(r,new te(o)),c);s=s.updateImmediateChild(o,l)}),Jh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Xt(n.visibleWrites,e);return Jh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Fv(n,e,t,s,i){D(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=pe(e,t);if(tc(n.visibleWrites,r))return null;{const o=Xt(n.visibleWrites,r);return nc(o)?i.getChild(t):ms(o,i.getChild(t))}}function Uv(n,e,t,s){const i=pe(e,t),r=$n(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Xt(n.visibleWrites,i);return ms(o,s.getNode().getImmediateChild(t))}else return null}function Bv(n,e){return $n(n.visibleWrites,e)}function qv(n,e,t,s,i,r,o){let c;const l=Xt(n.visibleWrites,e),u=$n(l,Z());if(u!=null)c=u;else if(t!=null)c=ms(l,t);else return[];if(c=c.withIndex(o),!c.isEmpty()&&!c.isLeafNode()){const f=[],p=o.getCompare(),m=r?c.getReverseIteratorFrom(s,o):c.getIteratorFrom(s,o);let w=m.getNext();for(;w&&f.length<i;)p(w,s)!==0&&f.push(w),w=m.getNext();return f}else return[]}function jv(){return{visibleWrites:rt.empty(),allWrites:[],lastWriteId:-1}}function $r(n,e,t,s){return Up(n.writeTree,n.treePath,e,t,s)}function Qc(n,e){return Lv(n.writeTree,n.treePath,e)}function Zh(n,e,t,s){return Fv(n.writeTree,n.treePath,e,t,s)}function Wr(n,e){return Bv(n.writeTree,pe(n.treePath,e))}function $v(n,e,t,s,i,r){return qv(n.writeTree,n.treePath,e,t,s,i,r)}function Yc(n,e,t){return Uv(n.writeTree,n.treePath,e,t)}function Bp(n,e){return qp(pe(n.treePath,e),n.writeTree)}function qp(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;D(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,vi(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ii(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,ps(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,vi(s,e.snapshotNode,i.oldSnap));else throw ws("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const jp=new zv;class Xc{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Dn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yc(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:On(this.viewCache_),r=$v(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(n){return{filter:n}}function Hv(n,e){D(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Kv(n,e,t,s,i){const r=new Wv;let o,c;if(t.type===st.OVERWRITE){const u=t;u.source.fromUser?o=sc(n,e,u.path,u.snap,s,i,r):(D(u.source.fromServer,"Unknown source."),c=u.source.tagged||e.serverCache.isFiltered()&&!G(u.path),o=zr(n,e,u.path,u.snap,s,i,c,r))}else if(t.type===st.MERGE){const u=t;u.source.fromUser?o=Yv(n,e,u.path,u.children,s,i,r):(D(u.source.fromServer,"Unknown source."),c=u.source.tagged||e.serverCache.isFiltered(),o=ic(n,e,u.path,u.children,s,i,c,r))}else if(t.type===st.ACK_USER_WRITE){const u=t;u.revert?o=Zv(n,e,u.path,s,i,r):o=Xv(n,e,u.path,u.affectedTree,s,i,r)}else if(t.type===st.LISTEN_COMPLETE)o=Jv(n,e,t.path,s,r);else throw ws("Unknown operation type: "+t.type);const l=r.getChanges();return Qv(e,o,l),{viewCache:o,changes:l}}function Qv(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ec(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Vp(ec(e)))}}function $p(n,e,t,s,i,r){const o=e.eventCache;if(Wr(s,t)!=null)return e;{let c,l;if(G(t))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=On(e),f=u instanceof F?u:F.EMPTY_NODE,p=Qc(s,f);c=n.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const u=$r(s,On(e));c=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=z(t);if(u===".priority"){D(tn(t)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const p=Zh(s,t,f,l);p!=null?c=n.filter.updatePriority(f,p):c=o.getNode()}else{const f=se(t);let p;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const m=Zh(s,t,o.getNode(),l);m!=null?p=o.getNode().getImmediateChild(u).updateChild(f,m):p=o.getNode().getImmediateChild(u)}else p=Yc(s,u,e.serverCache);p!=null?c=n.filter.updateChild(o.getNode(),u,p,f,i,r):c=o.getNode()}}return ci(e,c,o.isFullyInitialized()||G(t),n.filter.filtersNodes())}}function zr(n,e,t,s,i,r,o,c){const l=e.serverCache;let u;const f=o?n.filter:n.filter.getIndexedFilter();if(G(t))u=f.updateFullNode(l.getNode(),s,null);else if(f.filtersNodes()&&!l.isFiltered()){const w=l.getNode().updateChild(t,s);u=f.updateFullNode(l.getNode(),w,null)}else{const w=z(t);if(!l.isCompleteForPath(t)&&tn(t)>1)return e;const R=se(t),N=l.getNode().getImmediateChild(w).updateChild(R,s);w===".priority"?u=f.updatePriority(l.getNode(),N):u=f.updateChild(l.getNode(),w,N,R,jp,null)}const p=xp(e,u,l.isFullyInitialized()||G(t),f.filtersNodes()),m=new Xc(i,p,r);return $p(n,p,t,i,m,c)}function sc(n,e,t,s,i,r,o){const c=e.eventCache;let l,u;const f=new Xc(i,e,r);if(G(t))u=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ci(e,u,!0,n.filter.filtersNodes());else{const p=z(t);if(p===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),s),l=ci(e,u,c.isFullyInitialized(),c.isFiltered());else{const m=se(t),w=c.getNode().getImmediateChild(p);let R;if(G(m))R=s;else{const k=f.getCompleteChild(p);k!=null?Bc(m)===".priority"&&k.getChild(Rp(m)).isEmpty()?R=k:R=k.updateChild(m,s):R=F.EMPTY_NODE}if(w.equals(R))l=e;else{const k=n.filter.updateChild(c.getNode(),p,R,m,f,o);l=ci(e,k,c.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function ed(n,e){return n.eventCache.isCompleteForChild(e)}function Yv(n,e,t,s,i,r,o){let c=e;return s.foreach((l,u)=>{const f=pe(t,l);ed(e,z(f))&&(c=sc(n,c,f,u,i,r,o))}),s.foreach((l,u)=>{const f=pe(t,l);ed(e,z(f))||(c=sc(n,c,f,u,i,r,o))}),c}function td(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ic(n,e,t,s,i,r,o,c){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;G(t)?u=s:u=new oe(null).setTree(t,s);const f=e.serverCache.getNode();return u.children.inorderTraversal((p,m)=>{if(f.hasChild(p)){const w=e.serverCache.getNode().getImmediateChild(p),R=td(n,w,m);l=zr(n,l,new te(p),R,i,r,o,c)}}),u.children.inorderTraversal((p,m)=>{const w=!e.serverCache.isCompleteForChild(p)&&m.value===null;if(!f.hasChild(p)&&!w){const R=e.serverCache.getNode().getImmediateChild(p),k=td(n,R,m);l=zr(n,l,new te(p),k,i,r,o,c)}}),l}function Xv(n,e,t,s,i,r,o){if(Wr(i,t)!=null)return e;const c=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(G(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return zr(n,e,t,l.getNode().getChild(t),i,r,c,o);if(G(t)){let u=new oe(null);return l.getNode().forEachChild(is,(f,p)=>{u=u.set(new te(f),p)}),ic(n,e,t,u,i,r,c,o)}else return e}else{let u=new oe(null);return s.foreach((f,p)=>{const m=pe(t,f);l.isCompleteForPath(m)&&(u=u.set(f,l.getNode().getChild(m)))}),ic(n,e,t,u,i,r,c,o)}}function Jv(n,e,t,s,i){const r=e.serverCache,o=xp(e,r.getNode(),r.isFullyInitialized()||G(t),r.isFiltered());return $p(n,o,t,s,jp,i)}function Zv(n,e,t,s,i,r){let o;if(Wr(s,t)!=null)return e;{const c=new Xc(s,e,i),l=e.eventCache.getNode();let u;if(G(t)||z(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=$r(s,On(e));else{const p=e.serverCache.getNode();D(p instanceof F,"serverChildren would be complete if leaf node"),f=Qc(s,p)}f=f,u=n.filter.updateFullNode(l,f,r)}else{const f=z(t);let p=Yc(s,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=l.getImmediateChild(f)),p!=null?u=n.filter.updateChild(l,f,p,se(t),c,r):e.eventCache.getNode().hasChild(f)?u=n.filter.updateChild(l,f,F.EMPTY_NODE,se(t),c,r):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$r(s,On(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Wr(s,Z())!=null,ci(e,u,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Wc(s.getIndex()),r=Ev(s);this.processor_=Gv(r);const o=t.serverCache,c=t.eventCache,l=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(F.EMPTY_NODE,c.getNode(),null),f=new Dn(l,o.isFullyInitialized(),i.filtersNodes()),p=new Dn(u,c.isFullyInitialized(),r.filtersNodes());this.viewCache_=vo(p,f),this.eventGenerator_=new Sv(this.query_)}get query(){return this.query_}}function tT(n){return n.viewCache_.serverCache.getNode()}function nT(n,e){const t=On(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!G(e)&&!t.getImmediateChild(z(e)).isEmpty())?t.getChild(e):null}function nd(n){return n.eventRegistrations_.length===0}function sT(n,e){n.eventRegistrations_.push(e)}function sd(n,e,t){const s=[];if(t){D(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function id(n,e,t,s){e.type===st.MERGE&&e.source.queryId!==null&&(D(On(n.viewCache_),"We should always have a full cache before handling merges"),D(ec(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Kv(n.processor_,i,e,t,s);return Hv(n.processor_,r.viewCache),D(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Wp(n,r.changes,r.viewCache.eventCache.getNode(),null)}function iT(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(le,(r,o)=>{s.push(ps(r,o))}),t.isFullyInitialized()&&s.push(Vp(t.getNode())),Wp(n,s,t.getNode(),e)}function Wp(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Rv(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr;class rT{constructor(){this.views=new Map}}function oT(n){D(!Gr,"__referenceConstructor has already been defined"),Gr=n}function aT(){return D(Gr,"Reference.ts has not been loaded"),Gr}function cT(n){return n.views.size===0}function Jc(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return D(r!=null,"SyncTree gave us an op for an invalid query."),id(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(id(o,e,t,s));return r}}function lT(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let c=$r(t,i?s:null),l=!1;c?l=!0:s instanceof F?(c=Qc(t,s),l=!1):(c=F.EMPTY_NODE,l=!1);const u=vo(new Dn(c,l,!1),new Dn(s,i,!1));return new eT(e,u)}return o}function uT(n,e,t,s,i,r){const o=lT(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),sT(o,t),iT(o,t)}function hT(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const c=nn(n);if(i==="default")for(const[l,u]of n.views.entries())o=o.concat(sd(u,t,s)),nd(u)&&(n.views.delete(l),u.query._queryParams.loadsAllData()||r.push(u.query));else{const l=n.views.get(i);l&&(o=o.concat(sd(l,t,s)),nd(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return c&&!nn(n)&&r.push(new(aT())(e._repo,e._path)),{removed:r,events:o}}function zp(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function rs(n,e){let t=null;for(const s of n.views.values())t=t||nT(s,e);return t}function Gp(n,e){if(e._queryParams.loadsAllData())return To(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Hp(n,e){return Gp(n,e)!=null}function nn(n){return To(n)!=null}function To(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr;function dT(n){D(!Hr,"__referenceConstructor has already been defined"),Hr=n}function fT(){return D(Hr,"Reference.ts has not been loaded"),Hr}let pT=1;class rd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=jv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Kp(n,e,t,s,i){return kv(n.pendingWriteTree_,e,t,s,i),i?Ui(n,new kn(Mp(),e,t)):[]}function Cn(n,e,t=!1){const s=Dv(n.pendingWriteTree_,e);if(Ov(n.pendingWriteTree_,e)){let r=new oe(null);return s.snap!=null?r=r.set(Z(),!0):xe(s.children,o=>{r=r.set(new te(o),!0)}),Ui(n,new jr(s.path,r,t))}else return[]}function wo(n,e,t){return Ui(n,new kn(Gc(),e,t))}function mT(n,e,t){const s=oe.fromObject(t);return Ui(n,new Ai(Gc(),e,s))}function gT(n,e){return Ui(n,new wi(Gc(),e))}function _T(n,e,t){const s=el(n,t);if(s){const i=tl(s),r=i.path,o=i.queryId,c=$e(r,e),l=new wi(Hc(o),c);return nl(n,r,l)}else return[]}function rc(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let c=[];if(o&&(e._queryIdentifier==="default"||Hp(o,e))){const l=hT(o,e,t,s);cT(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const u=l.removed;if(c=l.events,!i){const f=u.findIndex(m=>m._queryParams.loadsAllData())!==-1,p=n.syncPointTree_.findOnPath(r,(m,w)=>nn(w));if(f&&!p){const m=n.syncPointTree_.subtree(r);if(!m.isEmpty()){const w=IT(m);for(let R=0;R<w.length;++R){const k=w[R],N=k.query,j=Xp(n,k);n.listenProvider_.startListening(ui(N),Kr(n,N),j.hashFn,j.onComplete)}}}!p&&u.length>0&&!s&&(f?n.listenProvider_.stopListening(ui(e),null):u.forEach(m=>{const w=n.queryToTagMap.get(Ao(m));n.listenProvider_.stopListening(ui(m),w)}))}vT(n,u)}return c}function yT(n,e,t,s){const i=el(n,s);if(i!=null){const r=tl(i),o=r.path,c=r.queryId,l=$e(o,e),u=new kn(Hc(c),l,t);return nl(n,o,u)}else return[]}function ET(n,e,t,s){const i=el(n,s);if(i){const r=tl(i),o=r.path,c=r.queryId,l=$e(o,e),u=oe.fromObject(t),f=new Ai(Hc(c),l,u);return nl(n,o,f)}else return[]}function od(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(m,w)=>{const R=$e(m,i);r=r||rs(w,R),o=o||nn(w)});let c=n.syncPointTree_.get(i);c?(o=o||nn(c),r=r||rs(c,Z())):(c=new rT,n.syncPointTree_=n.syncPointTree_.set(i,c));let l;r!=null?l=!0:(l=!1,r=F.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((w,R)=>{const k=rs(R,Z());k&&(r=r.updateImmediateChild(w,k))}));const u=Hp(c,e);if(!u&&!e._queryParams.loadsAllData()){const m=Ao(e);D(!n.queryToTagMap.has(m),"View does not exist, but we have a tag");const w=TT();n.queryToTagMap.set(m,w),n.tagToQueryMap.set(w,m)}const f=Kc(n.pendingWriteTree_,i);let p=uT(c,e,t,f,r,l);if(!u&&!o&&!s){const m=Gp(c,e);p=p.concat(wT(n,e,m))}return p}function Zc(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,c)=>{const l=$e(o,e),u=rs(c,l);if(u)return u});return Up(i,e,r,t,!0)}function Ui(n,e){return Qp(e,n.syncPointTree_,null,Kc(n.pendingWriteTree_,Z()))}function Qp(n,e,t,s){if(G(n.path))return Yp(n,e,t,s);{const i=e.get(Z());t==null&&i!=null&&(t=rs(i,Z()));let r=[];const o=z(n.path),c=n.operationForChild(o),l=e.children.get(o);if(l&&c){const u=t?t.getImmediateChild(o):null,f=Bp(s,o);r=r.concat(Qp(c,l,u,f))}return i&&(r=r.concat(Jc(i,n,s,t))),r}}function Yp(n,e,t,s){const i=e.get(Z());t==null&&i!=null&&(t=rs(i,Z()));let r=[];return e.children.inorderTraversal((o,c)=>{const l=t?t.getImmediateChild(o):null,u=Bp(s,o),f=n.operationForChild(o);f&&(r=r.concat(Yp(f,c,l,u)))}),i&&(r=r.concat(Jc(i,n,s,t))),r}function Xp(n,e){const t=e.query,s=Kr(n,t);return{hashFn:()=>(tT(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?_T(n,t._path,s):gT(n,t._path);{const r=_I(i,t);return rc(n,t,null,r)}}}}function Kr(n,e){const t=Ao(e);return n.queryToTagMap.get(t)}function Ao(n){return n._path.toString()+"$"+n._queryIdentifier}function el(n,e){return n.tagToQueryMap.get(e)}function tl(n){const e=n.indexOf("$");return D(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new te(n.substr(0,e))}}function nl(n,e,t){const s=n.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const i=Kc(n.pendingWriteTree_,e);return Jc(s,t,i,null)}function IT(n){return n.fold((e,t,s)=>{if(t&&nn(t))return[To(t)];{let i=[];return t&&(i=zp(t)),xe(s,(r,o)=>{i=i.concat(o)}),i}})}function ui(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(fT())(n._repo,n._path):n}function vT(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Ao(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function TT(){return pT++}function wT(n,e,t){const s=e._path,i=Kr(n,e),r=Xp(n,t),o=n.listenProvider_.startListening(ui(e),i,r.hashFn,r.onComplete),c=n.syncPointTree_.subtree(s);if(i)D(!nn(c.value),"If we're adding a query, it shouldn't be shadowed");else{const l=c.fold((u,f,p)=>{if(!G(u)&&f&&nn(f))return[To(f).query];{let m=[];return f&&(m=m.concat(zp(f).map(w=>w.query))),xe(p,(w,R)=>{m=m.concat(R)}),m}});for(let u=0;u<l.length;++u){const f=l[u];n.listenProvider_.stopListening(ui(f),Kr(n,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new sl(t)}node(){return this.node_}}class il{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=pe(this.path_,e);return new il(this.syncTree_,t)}node(){return Zc(this.syncTree_,this.path_)}}const AT=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ad=function(n,e,t){if(!n||typeof n!="object")return n;if(D(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return CT(n[".sv"],e,t);if(typeof n[".sv"]=="object")return ST(n[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},CT=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:D(!1,"Unexpected server value: "+n)}},ST=function(n,e,t){n.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const i=e.node();if(D(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},RT=function(n,e,t,s){return rl(e,new il(t,n),s)},Jp=function(n,e,t){return rl(n,new sl(e),t)};function rl(n,e,t){const s=n.getPriority().val(),i=ad(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,c=ad(o.getValue(),e,t);return c!==o.getValue()||i!==o.getPriority().val()?new Ae(c,_e(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ae(i))),o.forEachChild(le,(c,l)=>{const u=rl(l,e.getImmediateChild(c),t);u!==l&&(r=r.updateImmediateChild(c,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function al(n,e){let t=e instanceof te?e:new te(e),s=n,i=z(t);for(;i!==null;){const r=hs(s.node.children,i)||{children:{},childCount:0};s=new ol(i,s,r),t=se(t),i=z(t)}return s}function Rs(n){return n.node.value}function Zp(n,e){n.node.value=e,oc(n)}function em(n){return n.node.childCount>0}function bT(n){return Rs(n)===void 0&&!em(n)}function Co(n,e){xe(n.node.children,(t,s)=>{e(new ol(t,n,s))})}function tm(n,e,t,s){t&&e(n),Co(n,i=>{tm(i,e,!0)})}function PT(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Bi(n){return new te(n.parent===null?n.name:Bi(n.parent)+"/"+n.name)}function oc(n){n.parent!==null&&NT(n.parent,n.name,n)}function NT(n,e,t){const s=bT(t),i=vt(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,oc(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,oc(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=/[\[\].#$\/\u0000-\u001F\u007F]/,DT=/[\[\].#$\u0000-\u001F\u007F]/,Da=10*1024*1024,cl=function(n){return typeof n=="string"&&n.length!==0&&!kT.test(n)},nm=function(n){return typeof n=="string"&&n.length!==0&&!DT.test(n)},OT=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),nm(n)},sm=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Eo(n)||n&&typeof n=="object"&&vt(n,".sv")},ac=function(n,e,t,s){So(ds(n,"value"),e,t)},So=function(n,e,t){const s=t instanceof te?new XI(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+wn(s));if(typeof e=="function")throw new Error(n+"contains a function "+wn(s)+" with contents = "+e.toString());if(Eo(e))throw new Error(n+"contains "+e.toString()+" "+wn(s));if(typeof e=="string"&&e.length>Da/3&&_o(e)>Da)throw new Error(n+"contains a string greater than "+Da+" utf8 bytes "+wn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(xe(e,(o,c)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!cl(o)))throw new Error(n+" contains an invalid key ("+o+") "+wn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);JI(s,o),So(n,c,s),ZI(s)}),i&&r)throw new Error(n+' contains ".value" child '+wn(s)+" in addition to actual children.")}},VT=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Ei(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!cl(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(YI);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&Ze(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},MT=function(n,e,t,s){const i=ds(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];xe(e,(o,c)=>{const l=new te(o);if(So(i,c,pe(t,l)),Bc(l)===".priority"&&!sm(c))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),VT(i,r)},xT=function(n,e,t){if(Eo(e))throw new Error(ds(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!sm(e))throw new Error(ds(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},im=function(n,e,t,s){if(!nm(t))throw new Error(ds(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},LT=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),im(n,e,t)},ts=function(n,e){if(z(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},FT=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!cl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!OT(t))throw new Error(ds(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ll(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!qc(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function rm(n,e,t){ll(n,t),om(n,s=>qc(s,e))}function kt(n,e,t){ll(n,t),om(n,s=>Ze(s,e)||Ze(e,s))}function om(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(BT(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function BT(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();oi&&be("event: "+t.toString()),Cs(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT="repo_interrupt",jT=25;class $T{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new UT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qr(),this.transactionQueueTree_=new ol,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function WT(n,e,t){if(n.stats_=Fc(n.repoInfo_),n.forceRestClient_||vI())n.server_=new Br(n.repoInfo_,(s,i,r,o)=>{cd(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ld(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Se(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new St(n.repoInfo_,e,(s,i,r,o)=>{cd(n,s,i,r,o)},s=>{ld(n,s)},s=>{GT(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=SI(n.repoInfo_,()=>new Cv(n.stats_,n.server_)),n.infoData_=new Iv,n.infoSyncTree_=new rd({startListening:(s,i,r,o)=>{let c=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(c=wo(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),c},stopListening:()=>{}}),hl(n,"connected",!1),n.serverSyncTree_=new rd({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(c,l)=>{const u=o(c,l);kt(n.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function zT(n){const t=n.infoData_.getNode(new te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ul(n){return AT({timestamp:zT(n)})}function cd(n,e,t,s,i){n.dataUpdateCount++;const r=new te(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=Mr(t,u=>_e(u));o=ET(n.serverSyncTree_,r,l,i)}else{const l=_e(t);o=yT(n.serverSyncTree_,r,l,i)}else if(s){const l=Mr(t,u=>_e(u));o=mT(n.serverSyncTree_,r,l)}else{const l=_e(t);o=wo(n.serverSyncTree_,r,l)}let c=r;o.length>0&&(c=Ro(n,r)),kt(n.eventQueue_,c,o)}function ld(n,e){hl(n,"connected",e),e===!1&&KT(n)}function GT(n,e){xe(e,(t,s)=>{hl(n,t,s)})}function hl(n,e,t){const s=new te("/.info/"+e),i=_e(t);n.infoData_.updateSnapshot(s,i);const r=wo(n.infoSyncTree_,s,i);kt(n.eventQueue_,s,r)}function am(n){return n.nextWriteId_++}function HT(n,e,t,s,i){dl(n,"set",{path:e.toString(),value:t,priority:s});const r=ul(n),o=_e(t,s),c=Zc(n.serverSyncTree_,e),l=Jp(o,c,r),u=am(n),f=Kp(n.serverSyncTree_,e,l,u,!0);ll(n.eventQueue_,f),n.server_.put(e.toString(),o.val(!0),(m,w)=>{const R=m==="ok";R||ze("set at "+e+" failed: "+m);const k=Cn(n.serverSyncTree_,u,!R);kt(n.eventQueue_,e,k),gs(n,i,m,w)});const p=dm(n,e);Ro(n,p),kt(n.eventQueue_,p,[])}function KT(n){dl(n,"onDisconnectEvents");const e=ul(n),t=qr();Za(n.onDisconnect_,Z(),(i,r)=>{const o=RT(i,r,n.serverSyncTree_,e);Ss(t,i,o)});let s=[];Za(t,Z(),(i,r)=>{s=s.concat(wo(n.serverSyncTree_,i,r));const o=dm(n,i);Ro(n,o)}),n.onDisconnect_=qr(),kt(n.eventQueue_,Z(),s)}function QT(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&Ja(n.onDisconnect_,e),gs(n,t,s,i)})}function ud(n,e,t,s){const i=_e(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&Ss(n.onDisconnect_,e,i),gs(n,s,r,o)})}function YT(n,e,t,s,i){const r=_e(t,s);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,c)=>{o==="ok"&&Ss(n.onDisconnect_,e,r),gs(n,i,o,c)})}function XT(n,e,t,s){if(Vr(t)){be("onDisconnect().update() called with empty data.  Don't do anything."),gs(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,r)=>{i==="ok"&&xe(t,(o,c)=>{const l=_e(c);Ss(n.onDisconnect_,pe(e,o),l)}),gs(n,s,i,r)})}function JT(n,e,t){let s;z(e._path)===".info"?s=od(n.infoSyncTree_,e,t):s=od(n.serverSyncTree_,e,t),rm(n.eventQueue_,e._path,s)}function hd(n,e,t){let s;z(e._path)===".info"?s=rc(n.infoSyncTree_,e,t):s=rc(n.serverSyncTree_,e,t),rm(n.eventQueue_,e._path,s)}function ZT(n){n.persistentConnection_&&n.persistentConnection_.interrupt(qT)}function dl(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),be(t,...e)}function gs(n,e,t,s){e&&Cs(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function cm(n,e,t){return Zc(n.serverSyncTree_,e,t)||F.EMPTY_NODE}function fl(n,e=n.transactionQueueTree_){if(e||bo(n,e),Rs(e)){const t=um(n,e);D(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&ew(n,Bi(e),t)}else em(e)&&Co(e,t=>{fl(n,t)})}function ew(n,e,t){const s=t.map(u=>u.currentWriteId),i=cm(n,e,s);let r=i;const o=i.hash();for(let u=0;u<t.length;u++){const f=t[u];D(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=$e(e,f.path);r=r.updateChild(p,f.currentOutputSnapshotRaw)}const c=r.val(!0),l=e;n.server_.put(l.toString(),c,u=>{dl(n,"transaction put response",{path:l.toString(),status:u});let f=[];if(u==="ok"){const p=[];for(let m=0;m<t.length;m++)t[m].status=2,f=f.concat(Cn(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&p.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();bo(n,al(n.transactionQueueTree_,e)),fl(n,n.transactionQueueTree_),kt(n.eventQueue_,e,f);for(let m=0;m<p.length;m++)Cs(p[m])}else{if(u==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{ze("transaction at "+l.toString()+" failed: "+u);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=u}Ro(n,e)}},o)}function Ro(n,e){const t=lm(n,e),s=Bi(t),i=um(n,t);return tw(n,i,s),s}function tw(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(c=>c.status===0).map(c=>c.currentWriteId);for(let c=0;c<e.length;c++){const l=e[c],u=$e(t,l.path);let f=!1,p;if(D(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,p=l.abortReason,i=i.concat(Cn(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=jT)f=!0,p="maxretry",i=i.concat(Cn(n.serverSyncTree_,l.currentWriteId,!0));else{const m=cm(n,l.path,o);l.currentInputSnapshot=m;const w=e[c].update(m.val());if(w!==void 0){So("transaction failed: Data returned ",w,l.path);let R=_e(w);typeof w=="object"&&w!=null&&vt(w,".priority")||(R=R.updatePriority(m.getPriority()));const N=l.currentWriteId,j=ul(n),$=Jp(R,m,j);l.currentOutputSnapshotRaw=R,l.currentOutputSnapshotResolved=$,l.currentWriteId=am(n),o.splice(o.indexOf(N),1),i=i.concat(Kp(n.serverSyncTree_,l.path,$,l.currentWriteId,l.applyLocally)),i=i.concat(Cn(n.serverSyncTree_,N,!0))}else f=!0,p="nodata",i=i.concat(Cn(n.serverSyncTree_,l.currentWriteId,!0))}kt(n.eventQueue_,t,i),i=[],f&&(e[c].status=2,(function(m){setTimeout(m,Math.floor(0))})(e[c].unwatcher),e[c].onComplete&&(p==="nodata"?s.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):s.push(()=>e[c].onComplete(new Error(p),!1,null))))}bo(n,n.transactionQueueTree_);for(let c=0;c<s.length;c++)Cs(s[c]);fl(n,n.transactionQueueTree_)}function lm(n,e){let t,s=n.transactionQueueTree_;for(t=z(e);t!==null&&Rs(s)===void 0;)s=al(s,t),e=se(e),t=z(e);return s}function um(n,e){const t=[];return hm(n,e,t),t.sort((s,i)=>s.order-i.order),t}function hm(n,e,t){const s=Rs(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Co(e,i=>{hm(n,i,t)})}function bo(n,e){const t=Rs(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Zp(e,t.length>0?t:void 0)}Co(e,s=>{bo(n,s)})}function dm(n,e){const t=Bi(lm(n,e)),s=al(n.transactionQueueTree_,e);return PT(s,i=>{Oa(n,i)}),Oa(n,s),tm(s,i=>{Oa(n,i)}),t}function Oa(n,e){const t=Rs(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(D(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(D(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Cn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Zp(e,void 0):t.length=r+1,kt(n.eventQueue_,Bi(e),i);for(let o=0;o<s.length;o++)Cs(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function sw(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ze(`Invalid query segment '${t}' in query '${n}'`)}return e}const dd=function(n,e){const t=iw(n),s=t.namespace;t.domain==="firebase.com"&&Nt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Nt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||dI();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new yp(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new te(t.pathString)}},iw=function(n){let e="",t="",s="",i="",r="",o=!0,c="https",l=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(c=n.substring(0,u-1),n=n.substring(u+2));let f=n.indexOf("/");f===-1&&(f=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(f,p)),f<p&&(i=nw(n.substring(f,p)));const m=sw(n.substring(Math.min(n.length,p)));u=e.indexOf(":"),u>=0?(o=c==="https"||c==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const w=e.slice(0,u);if(w.toLowerCase()==="localhost")t="localhost";else if(w.split(".").length<=2)t=w;else{const R=e.indexOf(".");s=e.substring(0,R).toLowerCase(),t=e.substring(R+1),r=s}"ns"in m&&(r=m.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:c,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Se(this.snapshot.exportVal())}}class ow{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Tt;return QT(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){ts("OnDisconnect.remove",this._path);const e=new Tt;return ud(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){ts("OnDisconnect.set",this._path),ac("OnDisconnect.set",e,this._path);const t=new Tt;return ud(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){ts("OnDisconnect.setWithPriority",this._path),ac("OnDisconnect.setWithPriority",e,this._path),xT("OnDisconnect.setWithPriority",t);const s=new Tt;return YT(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){ts("OnDisconnect.update",this._path),MT("OnDisconnect.update",e,this._path);const t=new Tt;return XT(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return G(this._path)?null:Bc(this._path)}get ref(){return new fn(this._repo,this._path)}get _queryIdentifier(){const e=Kh(this._queryParams),t=xc(e);return t==="{}"?"default":t}get _queryObject(){return Kh(this._queryParams)}isEqual(e){if(e=ce(e),!(e instanceof pl))return!1;const t=this._repo===e._repo,s=qc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+QI(this._path)}}class fn extends pl{constructor(e,t){super(e,t,new zc,!1)}get parent(){const e=Rp(this._path);return e===null?null:new fn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Qr{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new te(e),s=cc(this.ref,e);return new Qr(this._node.getChild(t),s,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Qr(i,cc(this.ref,s),le)))}hasChild(e){const t=new te(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function QP(n,e){return n=ce(n),n._checkNotDeleted("ref"),e!==void 0?cc(n._root,e):n._root}function cc(n,e){return n=ce(n),z(n._path)===null?LT("child","path",e):im("child","path",e),new fn(n._repo,pe(n._path,e))}function YP(n){return n=ce(n),new cw(n._repo,n._path)}function XP(n){return ts("remove",n._path),lw(n,null)}function lw(n,e){n=ce(n),ts("set",n._path),ac("set",e,n._path);const t=new Tt;return HT(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class ml{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new rw("value",this,new Qr(e.snapshotNode,new fn(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ow(this,e,t):null}matches(e){return e instanceof ml?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function uw(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,u=(f,p)=>{hd(n._repo,n,c),l(f,p)};u.userCallback=t.userCallback,u.context=t.context,t=u}const o=new aw(t,r||void 0),c=new ml(o);return JT(n._repo,n,c),()=>hd(n._repo,n,c)}function JP(n,e,t,s){return uw(n,"value",e,t,s)}oT(fn);dT(fn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="FIREBASE_DATABASE_EMULATOR_HOST",lc={};let dw=!1;function fw(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=hn(r);n.repoInfo_=new yp(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function pw(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Nt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=dd(r,i),c=o.repoInfo,l;typeof process<"u"&&Nh&&(l=Nh[hw]),l?(r=`http://${l}?ns=${c.namespace}`,o=dd(r,i),c=o.repoInfo):o.repoInfo.secure;const u=new wI(n.name,n.options,e);FT("Invalid Firebase Database URL",o),G(o.path)||Nt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=gw(c,n,u,new TI(n,t));return new _w(f,n)}function mw(n,e){const t=lc[e];(!t||t[n.key]!==n)&&Nt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),ZT(n),delete t[n.key]}function gw(n,e,t,s){let i=lc[e.name];i||(i={},lc[e.name]=i);let r=i[n.toURLString()];return r&&Nt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new $T(n,dw,t,s),i[n.toURLString()]=r,r}class _w{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(WT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fn(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Nt("Cannot call "+e+" on a deleted database.")}}function ZP(n=yo(),e){const t=dn(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Wf("database");s&&yw(t,...s)}return t}function yw(n,e,t,s={}){n=ce(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&bt(s,r.repoInfo_.emulatorOptions))return;Nt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Nt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ir(Ir.OWNER);else if(s.mockUserToken){const c=typeof s.mockUserToken=="string"?s.mockUserToken:Hf(s.mockUserToken,n.app.options.projectId);o=new Ir(c)}hn(e)&&(Dc(e),Oc("Database",!0)),fw(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(n){oI(qn),ot(new tt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return pw(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),We(kh,Dh,n),We(kh,Dh,"esm2020")}St.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};St.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Ew();var Iw="firebase",vw="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We(Iw,vw,"app");var fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jt,fm;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function E(){}E.prototype=_.prototype,v.F=_.prototype,v.prototype=new E,v.prototype.constructor=v,v.D=function(T,I,C){for(var y=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)y[Be-2]=arguments[Be];return _.prototype[I].apply(T,y)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,_,E){E||(E=0);const T=Array(16);if(typeof _=="string")for(var I=0;I<16;++I)T[I]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(I=0;I<16;++I)T[I]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=v.g[0],E=v.g[1],I=v.g[2];let C=v.g[3],y;y=_+(C^E&(I^C))+T[0]+3614090360&4294967295,_=E+(y<<7&4294967295|y>>>25),y=C+(I^_&(E^I))+T[1]+3905402710&4294967295,C=_+(y<<12&4294967295|y>>>20),y=I+(E^C&(_^E))+T[2]+606105819&4294967295,I=C+(y<<17&4294967295|y>>>15),y=E+(_^I&(C^_))+T[3]+3250441966&4294967295,E=I+(y<<22&4294967295|y>>>10),y=_+(C^E&(I^C))+T[4]+4118548399&4294967295,_=E+(y<<7&4294967295|y>>>25),y=C+(I^_&(E^I))+T[5]+1200080426&4294967295,C=_+(y<<12&4294967295|y>>>20),y=I+(E^C&(_^E))+T[6]+2821735955&4294967295,I=C+(y<<17&4294967295|y>>>15),y=E+(_^I&(C^_))+T[7]+4249261313&4294967295,E=I+(y<<22&4294967295|y>>>10),y=_+(C^E&(I^C))+T[8]+1770035416&4294967295,_=E+(y<<7&4294967295|y>>>25),y=C+(I^_&(E^I))+T[9]+2336552879&4294967295,C=_+(y<<12&4294967295|y>>>20),y=I+(E^C&(_^E))+T[10]+4294925233&4294967295,I=C+(y<<17&4294967295|y>>>15),y=E+(_^I&(C^_))+T[11]+2304563134&4294967295,E=I+(y<<22&4294967295|y>>>10),y=_+(C^E&(I^C))+T[12]+1804603682&4294967295,_=E+(y<<7&4294967295|y>>>25),y=C+(I^_&(E^I))+T[13]+4254626195&4294967295,C=_+(y<<12&4294967295|y>>>20),y=I+(E^C&(_^E))+T[14]+2792965006&4294967295,I=C+(y<<17&4294967295|y>>>15),y=E+(_^I&(C^_))+T[15]+1236535329&4294967295,E=I+(y<<22&4294967295|y>>>10),y=_+(I^C&(E^I))+T[1]+4129170786&4294967295,_=E+(y<<5&4294967295|y>>>27),y=C+(E^I&(_^E))+T[6]+3225465664&4294967295,C=_+(y<<9&4294967295|y>>>23),y=I+(_^E&(C^_))+T[11]+643717713&4294967295,I=C+(y<<14&4294967295|y>>>18),y=E+(C^_&(I^C))+T[0]+3921069994&4294967295,E=I+(y<<20&4294967295|y>>>12),y=_+(I^C&(E^I))+T[5]+3593408605&4294967295,_=E+(y<<5&4294967295|y>>>27),y=C+(E^I&(_^E))+T[10]+38016083&4294967295,C=_+(y<<9&4294967295|y>>>23),y=I+(_^E&(C^_))+T[15]+3634488961&4294967295,I=C+(y<<14&4294967295|y>>>18),y=E+(C^_&(I^C))+T[4]+3889429448&4294967295,E=I+(y<<20&4294967295|y>>>12),y=_+(I^C&(E^I))+T[9]+568446438&4294967295,_=E+(y<<5&4294967295|y>>>27),y=C+(E^I&(_^E))+T[14]+3275163606&4294967295,C=_+(y<<9&4294967295|y>>>23),y=I+(_^E&(C^_))+T[3]+4107603335&4294967295,I=C+(y<<14&4294967295|y>>>18),y=E+(C^_&(I^C))+T[8]+1163531501&4294967295,E=I+(y<<20&4294967295|y>>>12),y=_+(I^C&(E^I))+T[13]+2850285829&4294967295,_=E+(y<<5&4294967295|y>>>27),y=C+(E^I&(_^E))+T[2]+4243563512&4294967295,C=_+(y<<9&4294967295|y>>>23),y=I+(_^E&(C^_))+T[7]+1735328473&4294967295,I=C+(y<<14&4294967295|y>>>18),y=E+(C^_&(I^C))+T[12]+2368359562&4294967295,E=I+(y<<20&4294967295|y>>>12),y=_+(E^I^C)+T[5]+4294588738&4294967295,_=E+(y<<4&4294967295|y>>>28),y=C+(_^E^I)+T[8]+2272392833&4294967295,C=_+(y<<11&4294967295|y>>>21),y=I+(C^_^E)+T[11]+1839030562&4294967295,I=C+(y<<16&4294967295|y>>>16),y=E+(I^C^_)+T[14]+4259657740&4294967295,E=I+(y<<23&4294967295|y>>>9),y=_+(E^I^C)+T[1]+2763975236&4294967295,_=E+(y<<4&4294967295|y>>>28),y=C+(_^E^I)+T[4]+1272893353&4294967295,C=_+(y<<11&4294967295|y>>>21),y=I+(C^_^E)+T[7]+4139469664&4294967295,I=C+(y<<16&4294967295|y>>>16),y=E+(I^C^_)+T[10]+3200236656&4294967295,E=I+(y<<23&4294967295|y>>>9),y=_+(E^I^C)+T[13]+681279174&4294967295,_=E+(y<<4&4294967295|y>>>28),y=C+(_^E^I)+T[0]+3936430074&4294967295,C=_+(y<<11&4294967295|y>>>21),y=I+(C^_^E)+T[3]+3572445317&4294967295,I=C+(y<<16&4294967295|y>>>16),y=E+(I^C^_)+T[6]+76029189&4294967295,E=I+(y<<23&4294967295|y>>>9),y=_+(E^I^C)+T[9]+3654602809&4294967295,_=E+(y<<4&4294967295|y>>>28),y=C+(_^E^I)+T[12]+3873151461&4294967295,C=_+(y<<11&4294967295|y>>>21),y=I+(C^_^E)+T[15]+530742520&4294967295,I=C+(y<<16&4294967295|y>>>16),y=E+(I^C^_)+T[2]+3299628645&4294967295,E=I+(y<<23&4294967295|y>>>9),y=_+(I^(E|~C))+T[0]+4096336452&4294967295,_=E+(y<<6&4294967295|y>>>26),y=C+(E^(_|~I))+T[7]+1126891415&4294967295,C=_+(y<<10&4294967295|y>>>22),y=I+(_^(C|~E))+T[14]+2878612391&4294967295,I=C+(y<<15&4294967295|y>>>17),y=E+(C^(I|~_))+T[5]+4237533241&4294967295,E=I+(y<<21&4294967295|y>>>11),y=_+(I^(E|~C))+T[12]+1700485571&4294967295,_=E+(y<<6&4294967295|y>>>26),y=C+(E^(_|~I))+T[3]+2399980690&4294967295,C=_+(y<<10&4294967295|y>>>22),y=I+(_^(C|~E))+T[10]+4293915773&4294967295,I=C+(y<<15&4294967295|y>>>17),y=E+(C^(I|~_))+T[1]+2240044497&4294967295,E=I+(y<<21&4294967295|y>>>11),y=_+(I^(E|~C))+T[8]+1873313359&4294967295,_=E+(y<<6&4294967295|y>>>26),y=C+(E^(_|~I))+T[15]+4264355552&4294967295,C=_+(y<<10&4294967295|y>>>22),y=I+(_^(C|~E))+T[6]+2734768916&4294967295,I=C+(y<<15&4294967295|y>>>17),y=E+(C^(I|~_))+T[13]+1309151649&4294967295,E=I+(y<<21&4294967295|y>>>11),y=_+(I^(E|~C))+T[4]+4149444226&4294967295,_=E+(y<<6&4294967295|y>>>26),y=C+(E^(_|~I))+T[11]+3174756917&4294967295,C=_+(y<<10&4294967295|y>>>22),y=I+(_^(C|~E))+T[2]+718787259&4294967295,I=C+(y<<15&4294967295|y>>>17),y=E+(C^(I|~_))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,v.g[2]=v.g[2]+I&4294967295,v.g[3]=v.g[3]+C&4294967295}s.prototype.v=function(v,_){_===void 0&&(_=v.length);const E=_-this.blockSize,T=this.C;let I=this.h,C=0;for(;C<_;){if(I==0)for(;C<=E;)i(this,v,C),C+=this.blockSize;if(typeof v=="string"){for(;C<_;)if(T[I++]=v.charCodeAt(C++),I==this.blockSize){i(this,T),I=0;break}}else for(;C<_;)if(T[I++]=v[C++],I==this.blockSize){i(this,T),I=0;break}}this.h=I,this.o+=_},s.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;_=this.o*8;for(var E=v.length-8;E<v.length;++E)v[E]=_&255,_/=256;for(this.v(v),v=Array(16),_=0,E=0;E<4;++E)for(let T=0;T<32;T+=8)v[_++]=this.g[E]>>>T&255;return v};function r(v,_){var E=c;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=_(v)}function o(v,_){this.h=_;const E=[];let T=!0;for(let I=v.length-1;I>=0;I--){const C=v[I]|0;T&&C==_||(E[I]=C,T=!1)}this.g=E}var c={};function l(v){return-128<=v&&v<128?r(v,function(_){return new o([_|0],_<0?-1:0)}):new o([v|0],v<0?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return N(u(-v));const _=[];let E=1;for(let T=0;v>=E;T++)_[T]=v/E|0,E*=4294967296;return new o(_,0)}function f(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return N(f(v.substring(1),_));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=u(Math.pow(_,8));let T=p;for(let C=0;C<v.length;C+=8){var I=Math.min(8,v.length-C);const y=parseInt(v.substring(C,C+I),_);I<8?(I=u(Math.pow(_,I)),T=T.j(I).add(u(y))):(T=T.j(E),T=T.add(u(y)))}return T}var p=l(0),m=l(1),w=l(16777216);n=o.prototype,n.m=function(){if(k(this))return-N(this).m();let v=0,_=1;for(let E=0;E<this.g.length;E++){const T=this.i(E);v+=(T>=0?T:4294967296+T)*_,_*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(R(this))return"0";if(k(this))return"-"+N(this).toString(v);const _=u(Math.pow(v,6));var E=this;let T="";for(;;){const I=me(E,_).g;E=j(E,I.j(_));let C=((E.g.length>0?E.g[0]:E.h)>>>0).toString(v);if(E=I,R(E))return C+T;for(;C.length<6;)C="0"+C;T=C+T}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function R(v){if(v.h!=0)return!1;for(let _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function k(v){return v.h==-1}n.l=function(v){return v=j(this,v),k(v)?-1:R(v)?0:1};function N(v){const _=v.g.length,E=[];for(let T=0;T<_;T++)E[T]=~v.g[T];return new o(E,~v.h).add(m)}n.abs=function(){return k(this)?N(this):this},n.add=function(v){const _=Math.max(this.g.length,v.g.length),E=[];let T=0;for(let I=0;I<=_;I++){let C=T+(this.i(I)&65535)+(v.i(I)&65535),y=(C>>>16)+(this.i(I)>>>16)+(v.i(I)>>>16);T=y>>>16,C&=65535,y&=65535,E[I]=y<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function j(v,_){return v.add(N(_))}n.j=function(v){if(R(this)||R(v))return p;if(k(this))return k(v)?N(this).j(N(v)):N(N(this).j(v));if(k(v))return N(this.j(N(v)));if(this.l(w)<0&&v.l(w)<0)return u(this.m()*v.m());const _=this.g.length+v.g.length,E=[];for(var T=0;T<2*_;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(let I=0;I<v.g.length;I++){const C=this.i(T)>>>16,y=this.i(T)&65535,Be=v.i(I)>>>16,gn=v.i(I)&65535;E[2*T+2*I]+=y*gn,$(E,2*T+2*I),E[2*T+2*I+1]+=C*gn,$(E,2*T+2*I+1),E[2*T+2*I+1]+=y*Be,$(E,2*T+2*I+1),E[2*T+2*I+2]+=C*Be,$(E,2*T+2*I+2)}for(v=0;v<_;v++)E[v]=E[2*v+1]<<16|E[2*v];for(v=_;v<2*_;v++)E[v]=0;return new o(E,0)};function $(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function J(v,_){this.g=v,this.h=_}function me(v,_){if(R(_))throw Error("division by zero");if(R(v))return new J(p,p);if(k(v))return _=me(N(v),_),new J(N(_.g),N(_.h));if(k(_))return _=me(v,N(_)),new J(N(_.g),_.h);if(v.g.length>30){if(k(v)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var E=m,T=_;T.l(v)<=0;)E=Ge(E),T=Ge(T);var I=Ie(E,1),C=Ie(T,1);for(T=Ie(T,2),E=Ie(E,2);!R(T);){var y=C.add(T);y.l(v)<=0&&(I=I.add(E),C=y),T=Ie(T,1),E=Ie(E,1)}return _=j(v,I.j(_)),new J(I,_)}for(I=p;v.l(_)>=0;){for(E=Math.max(1,Math.floor(v.m()/_.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),C=u(E),y=C.j(_);k(y)||y.l(v)>0;)E-=T,C=u(E),y=C.j(_);R(C)&&(C=m),I=I.add(C),v=j(v,y)}return new J(I,v)}n.B=function(v){return me(this,v).h},n.and=function(v){const _=Math.max(this.g.length,v.g.length),E=[];for(let T=0;T<_;T++)E[T]=this.i(T)&v.i(T);return new o(E,this.h&v.h)},n.or=function(v){const _=Math.max(this.g.length,v.g.length),E=[];for(let T=0;T<_;T++)E[T]=this.i(T)|v.i(T);return new o(E,this.h|v.h)},n.xor=function(v){const _=Math.max(this.g.length,v.g.length),E=[];for(let T=0;T<_;T++)E[T]=this.i(T)^v.i(T);return new o(E,this.h^v.h)};function Ge(v){const _=v.g.length+1,E=[];for(let T=0;T<_;T++)E[T]=v.i(T)<<1|v.i(T-1)>>>31;return new o(E,v.h)}function Ie(v,_){const E=_>>5;_%=32;const T=v.g.length-E,I=[];for(let C=0;C<T;C++)I[C]=_>0?v.i(C+E)>>>_|v.i(C+E+1)<<32-_:v.i(C+E);return new o(I,v.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,fm=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Jt=o}).apply(typeof fd<"u"?fd:typeof self<"u"?self:typeof window<"u"?window:{});var pr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pm,ti,mm,Tr,uc,gm,_m,ym;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof pr=="object"&&pr];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function i(a,h){if(h)e:{var d=s;a=a.split(".");for(var g=0;g<a.length-1;g++){var A=a[g];if(!(A in d))break e;d=d[A]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,A,S){for(var O=Array(arguments.length-2),W=2;W<arguments.length;W++)O[W-2]=arguments[W];return h.prototype[A].apply(g,O)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function R(a,h){for(let g=1;g<arguments.length;g++){const A=arguments[g];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=a.length||0;const S=A.length||0;a.length=d+S;for(let O=0;O<S;O++)a[d+O]=A[O]}else a.push(A)}}class k{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(a){o.setTimeout(()=>{throw a},0)}function j(){var a=v;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ${constructor(){this.h=this.g=null}add(h,d){const g=J.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var J=new k(()=>new me,a=>a.reset());class me{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ge,Ie=!1,v=new $,_=()=>{const a=Promise.resolve(void 0);Ge=()=>{a.then(E)}};function E(){for(var a;a=j();){try{a.h.call(a.g)}catch(d){N(d)}var h=J;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}Ie=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var C=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function y(a){return/^[\s\xa0]*$/.test(a)}function Be(a,h){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Be,I),Be.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Be.Z.h.call(this)},Be.prototype.h=function(){Be.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var gn="closure_listenable_"+(Math.random()*1e6|0),$_=0;function W_(a,h,d,g,A){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=A,this.key=++$_,this.da=this.fa=!1}function Xi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ji(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function z_(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function _u(a){const h={};for(const d in a)h[d]=a[d];return h}const yu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Eu(a,h){let d,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(d in g)a[d]=g[d];for(let S=0;S<yu.length;S++)d=yu[S],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Zi(a){this.src=a,this.g={},this.h=0}Zi.prototype.add=function(a,h,d,g,A){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const O=Zo(a,h,g,A);return O>-1?(h=a[O],d||(h.fa=!1)):(h=new W_(h,this.src,S,!!g,A),h.fa=d,a.push(h)),h};function Jo(a,h){const d=h.type;if(d in a.g){var g=a.g[d],A=Array.prototype.indexOf.call(g,h,void 0),S;(S=A>=0)&&Array.prototype.splice.call(g,A,1),S&&(Xi(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Zo(a,h,d,g){for(let A=0;A<a.length;++A){const S=a[A];if(!S.da&&S.listener==h&&S.capture==!!d&&S.ha==g)return A}return-1}var ea="closure_lm_"+(Math.random()*1e6|0),ta={};function Iu(a,h,d,g,A){if(Array.isArray(h)){for(let S=0;S<h.length;S++)Iu(a,h[S],d,g,A);return null}return d=wu(d),a&&a[gn]?a.J(h,d,c(g)?!!g.capture:!1,A):G_(a,h,d,!1,g,A)}function G_(a,h,d,g,A,S){if(!h)throw Error("Invalid event type");const O=c(A)?!!A.capture:!!A;let W=sa(a);if(W||(a[ea]=W=new Zi(a)),d=W.add(h,d,g,O,S),d.proxy)return d;if(g=H_(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)C||(A=O),A===void 0&&(A=!1),a.addEventListener(h.toString(),g,A);else if(a.attachEvent)a.attachEvent(Tu(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function H_(){function a(d){return h.call(a.src,a.listener,d)}const h=K_;return a}function vu(a,h,d,g,A){if(Array.isArray(h))for(var S=0;S<h.length;S++)vu(a,h[S],d,g,A);else g=c(g)?!!g.capture:!!g,d=wu(d),a&&a[gn]?(a=a.i,S=String(h).toString(),S in a.g&&(h=a.g[S],d=Zo(h,d,g,A),d>-1&&(Xi(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[S],a.h--)))):a&&(a=sa(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Zo(h,d,g,A)),(d=a>-1?h[a]:null)&&na(d))}function na(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[gn])Jo(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(Tu(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=sa(h))?(Jo(d,a),d.h==0&&(d.src=null,h[ea]=null)):Xi(a)}}}function Tu(a){return a in ta?ta[a]:ta[a]="on"+a}function K_(a,h){if(a.da)a=!0;else{h=new Be(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&na(a),a=d.call(g,h)}return a}function sa(a){return a=a[ea],a instanceof Zi?a:null}var ia="__closure_events_fn_"+(Math.random()*1e9>>>0);function wu(a){return typeof a=="function"?a:(a[ia]||(a[ia]=function(h){return a.handleEvent(h)}),a[ia])}function ke(){T.call(this),this.i=new Zi(this),this.M=this,this.G=null}p(ke,T),ke.prototype[gn]=!0,ke.prototype.removeEventListener=function(a,h,d,g){vu(this,a,h,d,g)};function Le(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new I(h,a);else if(h instanceof I)h.target=h.target||a;else{var A=h;h=new I(g,a),Eu(h,A)}A=!0;let S,O;if(d)for(O=d.length-1;O>=0;O--)S=h.g=d[O],A=er(S,g,!0,h)&&A;if(S=h.g=a,A=er(S,g,!0,h)&&A,A=er(S,g,!1,h)&&A,d)for(O=0;O<d.length;O++)S=h.g=d[O],A=er(S,g,!1,h)&&A}ke.prototype.N=function(){if(ke.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)Xi(d[g]);delete a.g[h],a.h--}}this.G=null},ke.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},ke.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function er(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let A=!0;for(let S=0;S<h.length;++S){const O=h[S];if(O&&!O.da&&O.capture==d){const W=O.listener,ve=O.ha||O.src;O.fa&&Jo(a.i,O),A=W.call(ve,g)!==!1&&A}}return A&&!g.defaultPrevented}function Q_(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Au(a){a.g=Q_(()=>{a.g=null,a.i&&(a.i=!1,Au(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Y_ extends T{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Au(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vs(a){T.call(this),this.h=a,this.g={}}p(Vs,T);var Cu=[];function Su(a){Ji(a.g,function(h,d){this.g.hasOwnProperty(d)&&na(h)},a),a.g={}}Vs.prototype.N=function(){Vs.Z.N.call(this),Su(this)},Vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ra=o.JSON.stringify,X_=o.JSON.parse,J_=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ru(){}function bu(){}var Ms={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function oa(){I.call(this,"d")}p(oa,I);function aa(){I.call(this,"c")}p(aa,I);var _n={},Pu=null;function tr(){return Pu=Pu||new ke}_n.Ia="serverreachability";function Nu(a){I.call(this,_n.Ia,a)}p(Nu,I);function xs(a){const h=tr();Le(h,new Nu(h))}_n.STAT_EVENT="statevent";function ku(a,h){I.call(this,_n.STAT_EVENT,a),this.stat=h}p(ku,I);function Fe(a){const h=tr();Le(h,new ku(h,a))}_n.Ja="timingevent";function Du(a,h){I.call(this,_n.Ja,a),this.size=h}p(Du,I);function Ls(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Fs(){this.g=!0}Fs.prototype.ua=function(){this.g=!1};function Z_(a,h,d,g,A,S){a.info(function(){if(a.g)if(S){var O="",W=S.split("&");for(let ne=0;ne<W.length;ne++){var ve=W[ne].split("=");if(ve.length>1){const we=ve[0];ve=ve[1];const ut=we.split("_");O=ut.length>=2&&ut[1]=="type"?O+(we+"="+ve+"&"):O+(we+"=redacted&")}}}else O=null;else O=S;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+h+`
`+d+`
`+O})}function ey(a,h,d,g,A,S,O){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+h+`
`+d+`
`+S+" "+O})}function Gn(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ny(a,d)+(g?" "+g:"")})}function ty(a,h){a.info(function(){return"TIMEOUT: "+h})}Fs.prototype.info=function(){};function ny(a,h){if(!a.g)return h;if(!h)return null;try{const S=JSON.parse(h);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var d=S[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var A=g[0];if(A!="noop"&&A!="stop"&&A!="close")for(let O=1;O<g.length;O++)g[O]=""}}}}return ra(S)}catch{return h}}var nr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ou={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Vu;function ca(){}p(ca,Ru),ca.prototype.g=function(){return new XMLHttpRequest},Vu=new ca;function Us(a){return encodeURIComponent(String(a))}function sy(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Lt(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new Vs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Mu}function Mu(){this.i=null,this.g="",this.h=!1}var xu={},la={};function ua(a,h,d){a.M=1,a.A=ir(lt(h)),a.u=d,a.R=!0,Lu(a,null)}function Lu(a,h){a.F=Date.now(),sr(a),a.B=lt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Yu(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Mu,a.g=ph(a.j,d?h:null,!a.u),a.P>0&&(a.O=new Y_(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var A="readystatechange";Array.isArray(A)||(A&&(Cu[0]=A.toString()),A=Cu);for(let S=0;S<A.length;S++){const O=Iu(d,A[S],g||h.handleEvent,!1,h.h||h);if(!O)break;h.g[O.key]=O}h=a.J?_u(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),xs(),Z_(a.i,a.v,a.B,a.l,a.S,a.u)}Lt.prototype.ba=function(a){a=a.target;const h=this.O;h&&Bt(a)==3?h.j():this.Y(a)},Lt.prototype.Y=function(a){try{if(a==this.g)e:{const W=Bt(this.g),ve=this.g.ya(),ne=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||sh(this.g)))){this.K||W!=4||ve==7||(ve==8||ne<=0?xs(3):xs(2)),ha(this);var h=this.g.ca();this.X=h;var d=iy(this);if(this.o=h==200,ey(this.i,this.v,this.B,this.l,this.S,W,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,A=this.g;if((g=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(g)){var S=g;break t}}S=null}if(a=S)Gn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,da(this,a);else{this.o=!1,this.m=3,Fe(12),yn(this),Bs(this);break e}}if(this.R){a=!0;let we;for(;!this.K&&this.C<d.length;)if(we=ry(this,d),we==la){W==4&&(this.m=4,Fe(14),a=!1),Gn(this.i,this.l,null,"[Incomplete Response]");break}else if(we==xu){this.m=4,Fe(15),Gn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Gn(this.i,this.l,we,null),da(this,we);if(Fu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||d.length!=0||this.h.h||(this.m=1,Fe(16),a=!1),this.o=this.o&&a,!a)Gn(this.i,this.l,d,"[Invalid Chunked Response]"),yn(this),Bs(this);else if(d.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Ia(O),O.P=!0,Fe(11))}}else Gn(this.i,this.l,d,null),da(this,d);W==4&&yn(this),this.o&&!this.K&&(W==4?uh(this.j,this):(this.o=!1,sr(this)))}else Ey(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,Fe(12)):(this.m=0,Fe(13)),yn(this),Bs(this)}}}catch{}finally{}};function iy(a){if(!Fu(a))return a.g.la();const h=sh(a.g);if(h==="")return"";let d="";const g=h.length,A=Bt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return yn(a),Bs(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<g;S++)a.h.h=!0,d+=a.h.i.decode(h[S],{stream:!(A&&S==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Fu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ry(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?la:(d=Number(h.substring(d,g)),isNaN(d)?xu:(g+=1,g+d>h.length?la:(h=h.slice(g,g+d),a.C=g+d,h)))}Lt.prototype.cancel=function(){this.K=!0,yn(this)};function sr(a){a.T=Date.now()+a.H,Uu(a,a.H)}function Uu(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ls(u(a.aa,a),h)}function ha(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Lt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(ty(this.i,this.B),this.M!=2&&(xs(),Fe(17)),yn(this),this.m=2,Bs(this)):Uu(this,this.T-a)};function Bs(a){a.j.I==0||a.K||uh(a.j,a)}function yn(a){ha(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Su(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function da(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||fa(d.h,a))){if(!a.L&&fa(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)lr(d),ar(d);else break e;Ea(d),Fe(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ls(u(d.Va,d),6e3));ju(d.h)<=1&&d.ta&&(d.ta=void 0)}else In(d,11)}else if((a.L||d.g==a)&&lr(d),!y(h))for(A=d.Ba.g.parse(h),h=0;h<A.length;h++){let ne=A[h];const we=ne[0];if(!(we<=d.K))if(d.K=we,ne=ne[1],d.I==2)if(ne[0]=="c"){d.M=ne[1],d.ba=ne[2];const ut=ne[3];ut!=null&&(d.ka=ut,d.j.info("VER="+d.ka));const vn=ne[4];vn!=null&&(d.za=vn,d.j.info("SVER="+d.za));const qt=ne[5];qt!=null&&typeof qt=="number"&&qt>0&&(g=1.5*qt,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const jt=a.g;if(jt){const hr=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hr){var S=g.h;S.g||hr.indexOf("spdy")==-1&&hr.indexOf("quic")==-1&&hr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(pa(S,S.h),S.h=null))}if(g.G){const va=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;va&&(g.wa=va,re(g.J,g.G,va))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var O=a;if(g.na=fh(g,g.L?g.ba:null,g.W),O.L){$u(g.h,O);var W=O,ve=g.O;ve&&(W.H=ve),W.D&&(ha(W),sr(W)),g.g=O}else ch(g);d.i.length>0&&cr(d)}else ne[0]!="stop"&&ne[0]!="close"||In(d,7);else d.I==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?In(d,7):ya(d):ne[0]!="noop"&&d.l&&d.l.qa(ne),d.A=0)}}xs(4)}catch{}}var oy=class{constructor(a,h){this.g=a,this.map=h}};function Bu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function qu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ju(a){return a.h?1:a.g?a.g.size:0}function fa(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function pa(a,h){a.g?a.g.add(h):a.h=h}function $u(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Bu.prototype.cancel=function(){if(this.i=Wu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Wu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return w(a.i)}var zu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ay(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let A,S=null;g>=0?(A=a[d].substring(0,g),S=a[d].substring(g+1)):A=a[d],h(A,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Ft(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Ft?(this.l=a.l,qs(this,a.j),this.o=a.o,this.g=a.g,js(this,a.u),this.h=a.h,ma(this,Xu(a.i)),this.m=a.m):a&&(h=String(a).match(zu))?(this.l=!1,qs(this,h[1]||"",!0),this.o=$s(h[2]||""),this.g=$s(h[3]||"",!0),js(this,h[4]),this.h=$s(h[5]||"",!0),ma(this,h[6]||"",!0),this.m=$s(h[7]||"")):(this.l=!1,this.i=new zs(null,this.l))}Ft.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ws(h,Gu,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ws(h,Gu,!0),"@"),a.push(Us(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ws(d,d.charAt(0)=="/"?uy:ly,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ws(d,dy)),a.join("")},Ft.prototype.resolve=function(a){const h=lt(this);let d=!!a.j;d?qs(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)js(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var A=h.h.lastIndexOf("/");A!=-1&&(g=h.h.slice(0,A+1)+g)}if(A=g,A==".."||A==".")g="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){g=A.lastIndexOf("/",0)==0,A=A.split("/");const S=[];for(let O=0;O<A.length;){const W=A[O++];W=="."?g&&O==A.length&&S.push(""):W==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),g&&O==A.length&&S.push("")):(S.push(W),g=!0)}g=S.join("/")}else g=A}return d?h.h=g:d=a.i.toString()!=="",d?ma(h,Xu(a.i)):d=!!a.m,d&&(h.m=a.m),h};function lt(a){return new Ft(a)}function qs(a,h,d){a.j=d?$s(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function js(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function ma(a,h,d){h instanceof zs?(a.i=h,fy(a.i,a.l)):(d||(h=Ws(h,hy)),a.i=new zs(h,a.l))}function re(a,h,d){a.i.set(h,d)}function ir(a){return re(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function $s(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ws(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,cy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function cy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Gu=/[#\/\?@]/g,ly=/[#\?:]/g,uy=/[#\?]/g,hy=/[#\?@]/g,dy=/#/g;function zs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function En(a){a.g||(a.g=new Map,a.h=0,a.i&&ay(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}n=zs.prototype,n.add=function(a,h){En(this),this.i=null,a=Hn(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Hu(a,h){En(a),h=Hn(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ku(a,h){return En(a),h=Hn(a,h),a.g.has(h)}n.forEach=function(a,h){En(this),this.g.forEach(function(d,g){d.forEach(function(A){a.call(h,A,g,this)},this)},this)};function Qu(a,h){En(a);let d=[];if(typeof h=="string")Ku(a,h)&&(d=d.concat(a.g.get(Hn(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}n.set=function(a,h){return En(this),this.i=null,a=Hn(this,a),Ku(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=Qu(this,a),a.length>0?String(a[0]):h):h};function Yu(a,h,d){Hu(a,h),d.length>0&&(a.i=null,a.g.set(Hn(a,h),w(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const A=Us(d);d=Qu(this,d);for(let S=0;S<d.length;S++){let O=A;d[S]!==""&&(O+="="+Us(d[S])),a.push(O)}}return this.i=a.join("&")};function Xu(a){const h=new zs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Hn(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function fy(a,h){h&&!a.j&&(En(a),a.i=null,a.g.forEach(function(d,g){const A=g.toLowerCase();g!=A&&(Hu(this,g),Yu(this,A,d))},a)),a.j=h}function py(a,h){const d=new Fs;if(o.Image){const g=new Image;g.onload=f(Ut,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(Ut,d,"TestLoadImage: error",!1,h,g),g.onabort=f(Ut,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(Ut,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function my(a,h){const d=new Fs,g=new AbortController,A=setTimeout(()=>{g.abort(),Ut(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(S=>{clearTimeout(A),S.ok?Ut(d,"TestPingServer: ok",!0,h):Ut(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(A),Ut(d,"TestPingServer: error",!1,h)})}function Ut(a,h,d,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(d)}catch{}}function gy(){this.g=new J_}function ga(a){this.i=a.Sb||null,this.h=a.ab||!1}p(ga,Ru),ga.prototype.g=function(){return new rr(this.i,this.h)};function rr(a,h){ke.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(rr,ke),n=rr.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Hs(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Gs(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ju(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ju(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Gs(this):Hs(this),this.readyState==3&&Ju(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Gs(this))},n.Na=function(a){this.g&&(this.response=a,Gs(this))},n.ga=function(){this.g&&Gs(this)};function Gs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Hs(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Hs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(rr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Zu(a){let h="";return Ji(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function _a(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Zu(d),typeof a=="string"?d!=null&&Us(d):re(a,h,d))}function he(a){ke.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(he,ke);var _y=/^https?$/i,yy=["POST","PUT"];n=he.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Vu.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(S){eh(this,S);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)d.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const S of g.keys())d.set(S,g.get(S));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),A=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(yy,h,void 0)>=0)||g||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,O]of d)this.g.setRequestHeader(S,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){eh(this,S)}};function eh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,th(a),or(a)}function th(a){a.A||(a.A=!0,Le(a,"complete"),Le(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Le(this,"complete"),Le(this,"abort"),or(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),or(this,!0)),he.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?nh(this):this.Xa())},n.Xa=function(){nh(this)};function nh(a){if(a.h&&typeof r<"u"){if(a.v&&Bt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Le(a,"readystatechange"),Bt(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=S===0){let O=String(a.D).match(zu)[1]||null;!O&&o.self&&o.self.location&&(O=o.self.location.protocol.slice(0,-1)),g=!_y.test(O?O.toLowerCase():"")}d=g}if(d)Le(a,"complete"),Le(a,"success");else{a.o=6;try{var A=Bt(a)>2?a.g.statusText:""}catch{A=""}a.l=A+" ["+a.ca()+"]",th(a)}}finally{or(a)}}}}function or(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||Le(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Bt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Bt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),X_(h)}};function sh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ey(a){const h={};a=(a.g&&Bt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var d=sy(a[g]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=h[A]||[];h[A]=S,S.push(d)}z_(h,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ks(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function ih(a){this.za=0,this.i=[],this.j=new Fs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ks("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ks("baseRetryDelayMs",5e3,a),this.Za=Ks("retryDelaySeedMs",1e4,a),this.Ta=Ks("forwardChannelMaxRetries",2,a),this.va=Ks("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Bu(a&&a.concurrentRequestLimit),this.Ba=new gy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ih.prototype,n.ka=8,n.I=1,n.connect=function(a,h,d,g){Fe(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=fh(this,null,this.W),cr(this)};function ya(a){if(rh(a),a.I==3){var h=a.V++,d=lt(a.J);if(re(d,"SID",a.M),re(d,"RID",h),re(d,"TYPE","terminate"),Qs(a,d),h=new Lt(a,a.j,h),h.M=2,h.A=ir(lt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=ph(h.j,null),h.g.ea(h.A)),h.F=Date.now(),sr(h)}dh(a)}function ar(a){a.g&&(Ia(a),a.g.cancel(),a.g=null)}function rh(a){ar(a),a.v&&(o.clearTimeout(a.v),a.v=null),lr(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function cr(a){if(!qu(a.h)&&!a.m){a.m=!0;var h=a.Ea;Ge||_(),Ie||(Ge(),Ie=!0),v.add(h,a),a.D=0}}function Iy(a,h){return ju(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ls(u(a.Ea,a,h),hh(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const A=new Lt(this,this.j,a);let S=this.o;if(this.U&&(S?(S=_u(S),Eu(S,this.U)):S=this.U),this.u!==null||this.R||(A.J=S,S=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=ah(this,A,h),d=lt(this.J),re(d,"RID",a),re(d,"CVER",22),this.G&&re(d,"X-HTTP-Session-Id",this.G),Qs(this,d),S&&(this.R?h="headers="+Us(Zu(S))+"&"+h:this.u&&_a(d,this.u,S)),pa(this.h,A),this.Ra&&re(d,"TYPE","init"),this.S?(re(d,"$req",h),re(d,"SID","null"),A.U=!0,ua(A,d,null)):ua(A,d,h),this.I=2}}else this.I==3&&(a?oh(this,a):this.i.length==0||qu(this.h)||oh(this))};function oh(a,h){var d;h?d=h.l:d=a.V++;const g=lt(a.J);re(g,"SID",a.M),re(g,"RID",d),re(g,"AID",a.K),Qs(a,g),a.u&&a.o&&_a(g,a.u,a.o),d=new Lt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=ah(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),pa(a.h,d),ua(d,g,h)}function Qs(a,h){a.H&&Ji(a.H,function(d,g){re(h,g,d)}),a.l&&Ji({},function(d,g){re(h,g,d)})}function ah(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var A=a.i;let W=-1;for(;;){const ve=["count="+d];W==-1?d>0?(W=A[0].g,ve.push("ofs="+W)):W=0:ve.push("ofs="+W);let ne=!0;for(let we=0;we<d;we++){var S=A[we].g;const ut=A[we].map;if(S-=W,S<0)W=Math.max(0,A[we].g-100),ne=!1;else try{S="req"+S+"_"||"";try{var O=ut instanceof Map?ut:Object.entries(ut);for(const[vn,qt]of O){let jt=qt;c(qt)&&(jt=ra(qt)),ve.push(S+vn+"="+encodeURIComponent(jt))}}catch(vn){throw ve.push(S+"type="+encodeURIComponent("_badmap")),vn}}catch{g&&g(ut)}}if(ne){O=ve.join("&");break e}}O=void 0}return a=a.i.splice(0,d),h.G=a,O}function ch(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;Ge||_(),Ie||(Ge(),Ie=!0),v.add(h,a),a.A=0}}function Ea(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ls(u(a.Da,a),hh(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,lh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ls(u(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Fe(10),ar(this),lh(this))};function Ia(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function lh(a){a.g=new Lt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=lt(a.na);re(h,"RID","rpc"),re(h,"SID",a.M),re(h,"AID",a.K),re(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&re(h,"TO",a.ia),re(h,"TYPE","xmlhttp"),Qs(a,h),a.u&&a.o&&_a(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=ir(lt(h)),d.u=null,d.R=!0,Lu(d,a)}n.Va=function(){this.C!=null&&(this.C=null,ar(this),Ea(this),Fe(19))};function lr(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function uh(a,h){var d=null;if(a.g==h){lr(a),Ia(a),a.g=null;var g=2}else if(fa(a.h,h))d=h.G,$u(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var A=a.D;g=tr(),Le(g,new Du(g,d)),cr(a)}else ch(a);else if(A=h.m,A==3||A==0&&h.X>0||!(g==1&&Iy(a,h)||g==2&&Ea(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),A){case 1:In(a,5);break;case 4:In(a,10);break;case 3:In(a,6);break;default:In(a,2)}}}function hh(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function In(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const A=!g;g=new Ft(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||qs(g,"https"),ir(g),A?py(g.toString(),d):my(g.toString(),d)}else Fe(2);a.I=0,a.l&&a.l.pa(h),dh(a),rh(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function dh(a){if(a.I=0,a.ja=[],a.l){const h=Wu(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ja,h),R(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function fh(a,h,d){var g=d instanceof Ft?lt(d):new Ft(d);if(g.g!="")h&&(g.g=h+"."+g.g),js(g,g.u);else{var A=o.location;g=A.protocol,h=h?h+"."+A.hostname:A.hostname,A=+A.port;const S=new Ft(null);g&&qs(S,g),h&&(S.g=h),A&&js(S,A),d&&(S.h=d),g=S}return d=a.G,h=a.wa,d&&h&&re(g,d,h),re(g,"VER",a.ka),Qs(a,g),g}function ph(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new he(new ga({ab:d})):new he(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function mh(){}n=mh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ur(){}ur.prototype.g=function(a,h){return new He(a,h)};function He(a,h){ke.call(this),this.g=new ih(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!y(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Kn(this)}p(He,ke),He.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},He.prototype.close=function(){ya(this.g)},He.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=ra(a),a=d);h.i.push(new oy(h.Ya++,a)),h.I==3&&cr(h)},He.prototype.N=function(){this.g.l=null,delete this.j,ya(this.g),delete this.g,He.Z.N.call(this)};function gh(a){oa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(gh,oa);function _h(){aa.call(this),this.status=1}p(_h,aa);function Kn(a){this.g=a}p(Kn,mh),Kn.prototype.ra=function(){Le(this.g,"a")},Kn.prototype.qa=function(a){Le(this.g,new gh(a))},Kn.prototype.pa=function(a){Le(this.g,new _h)},Kn.prototype.oa=function(){Le(this.g,"b")},ur.prototype.createWebChannel=ur.prototype.g,He.prototype.send=He.prototype.o,He.prototype.open=He.prototype.m,He.prototype.close=He.prototype.close,ym=function(){return new ur},_m=function(){return tr()},gm=_n,uc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},nr.NO_ERROR=0,nr.TIMEOUT=8,nr.HTTP_ERROR=6,Tr=nr,Ou.COMPLETE="complete",mm=Ou,bu.EventType=Ms,Ms.OPEN="a",Ms.CLOSE="b",Ms.ERROR="c",Ms.MESSAGE="d",ke.prototype.listen=ke.prototype.J,ti=bu,he.prototype.listenOnce=he.prototype.K,he.prototype.getLastError=he.prototype.Ha,he.prototype.getLastErrorCode=he.prototype.ya,he.prototype.getStatus=he.prototype.ca,he.prototype.getResponseJson=he.prototype.La,he.prototype.getResponseText=he.prototype.la,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Fa,pm=he}).apply(typeof pr<"u"?pr:typeof self<"u"?self:typeof window<"u"?window:{});const pd="@firebase/firestore",md="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bs="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Mi("@firebase/firestore");function Yn(){return Vn.logLevel}function M(n,...e){if(Vn.logLevel<=K.DEBUG){const t=e.map(gl);Vn.debug(`Firestore (${bs}): ${n}`,...t)}}function Dt(n,...e){if(Vn.logLevel<=K.ERROR){const t=e.map(gl);Vn.error(`Firestore (${bs}): ${n}`,...t)}}function _s(n,...e){if(Vn.logLevel<=K.WARN){const t=e.map(gl);Vn.warn(`Firestore (${bs}): ${n}`,...t)}}function gl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Em(n,s,t)}function Em(n,e,t){let s=`FIRESTORE (${bs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Dt(s),new Error(s)}function ee(n,e,t,s){let i="Unexpected state";typeof t=="string"?i=t:s=t,n||Em(e,i,s)}function q(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends ct{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Tw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Oe.UNAUTHENTICATED)))}shutdown(){}}class ww{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Aw{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ee(this.o===void 0,42304);let s=this.i;const i=l=>this.i!==s?(s=this.i,t(l)):Promise.resolve();let r=new Rt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Rt,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const l=r;e.enqueueRetryable((async()=>{await l.promise,await i(this.currentUser)}))},c=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Rt)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ee(typeof s.accessToken=="string",31837,{l:s}),new Im(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string",2055,{h:e}),new Oe(e)}}class Cw{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Sw{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Cw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Oe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Rw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ee(this.o===void 0,3512);const s=r=>{r.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>s(r)))};const i=r=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new gd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ee(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new gd(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=bw(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%62))}return s}}function Q(n,e){return n<e?-1:n>e?1:0}function hc(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const i=n.charAt(s),r=e.charAt(s);if(i!==r)return Va(i)===Va(r)?Q(i,r):Va(i)?1:-1}return Q(n.length,e.length)}const Pw=55296,Nw=57343;function Va(n){const e=n.charCodeAt(0);return e>=Pw&&e<=Nw}function ys(n,e,t){return n.length===e.length&&n.every(((s,i)=>t(s,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="__name__";class ht{constructor(e,t,s){t===void 0?t=0:t>e.length&&L(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&L(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ht.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ht?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=ht.compareSegments(e.get(i),t.get(i));if(r!==0)return r}return Q(e.length,t.length)}static compareSegments(e,t){const s=ht.isNumericId(e),i=ht.isNumericId(t);return s&&!i?-1:!s&&i?1:s&&i?ht.extractNumericId(e).compare(ht.extractNumericId(t)):hc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jt.fromString(e.substring(4,e.length-2))}}class ie extends ht{construct(e,t,s){return new ie(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new V(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((i=>i.length>0)))}return new ie(t)}static emptyPath(){return new ie([])}}const kw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends ht{construct(e,t,s){return new Pe(e,t,s)}static isValidIdentifier(e){return kw.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_d}static keyField(){return new Pe([_d])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new V(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new V(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(s+=c,i++):(r(),i++)}if(r(),o)throw new V(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(t)}static emptyPath(){return new Pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(ie.fromString(e))}static fromName(e){return new x(ie.fromString(e).popFirst(5))}static empty(){return new x(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new ie(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(n,e,t){if(!t)throw new V(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Dw(n,e,t,s){if(e===!0&&s===!0)throw new V(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function yd(n){if(!x.isDocumentKey(n))throw new V(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ed(n){if(x.isDocumentKey(n))throw new V(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Tm(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Po(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function et(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Po(n);throw new V(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Ow(n,e){if(e<=0)throw new V(b.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n,e){const t={typeString:n};return e&&(t.value=e),t}function qi(n,e){if(!Tm(n))throw new V(b.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const i=e[s].typeString,r="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const o=n[s];if(i&&typeof o!==i){t=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${s}' field to equal '${r.value}'`;break}}if(t)throw new V(b.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=-62135596800,vd=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*vd);return new ae(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Id)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vd}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(qi(e,ae._jsonSchema))return new ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Id;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:Ee("string",ae._jsonSchemaVersion),seconds:Ee("number"),nanoseconds:Ee("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new ae(0,0))}static max(){return new B(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=-1;function Vw(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(s===1e9?new ae(t+1,0):new ae(t,s));return new sn(i,x.empty(),e)}function Mw(n){return new sn(n.readTime,n.key,Ci)}class sn{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new sn(B.min(),x.empty(),Ci)}static max(){return new sn(B.max(),x.empty(),Ci)}}function xw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==Lw)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,s)=>{t(e)}))}static reject(e){return new P(((t,s)=>{s(e)}))}static waitFor(e){return new P(((t,s)=>{let i=0,r=0,o=!1;e.forEach((c=>{++i,c.next((()=>{++r,o&&r===i&&t()}),(l=>s(l)))})),o=!0,r===i&&t()}))}static or(e){let t=P.resolve(!1);for(const s of e)t=t.next((i=>i?P.resolve(i):s()));return t}static forEach(e,t){const s=[];return e.forEach(((i,r)=>{s.push(t.call(this,i,r))})),this.waitFor(s)}static mapArray(e,t){return new P(((s,i)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const u=l;t(e[u]).next((f=>{o[u]=f,++c,c===r&&s(o)}),(f=>i(f)))}}))}static doWhile(e,t){return new P(((s,i)=>{const r=()=>{e()===!0?t().next((()=>{r()}),i):s()};r()}))}}function Uw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ns(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}No.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=-1;function ko(n){return n==null}function Yr(n){return n===0&&1/n==-1/0}function Bw(n){return typeof n=="number"&&Number.isInteger(n)&&!Yr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="";function qw(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Td(e)),e=jw(n.get(t),e);return Td(e)}function jw(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case wm:t+="";break;default:t+=r}}return t}function Td(n){return n+wm+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function pn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Am(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t){this.comparator=e,this.root=t||Re.EMPTY}insert(e,t){return new ue(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Re.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mr(this.root,e,this.comparator,!1)}getReverseIterator(){return new mr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mr(this.root,e,this.comparator,!0)}}class mr{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Re{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Re.RED,this.left=i??Re.EMPTY,this.right=r??Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new Re(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Re.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw L(27949);return e+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(e,t,s,i,r){return this}insert(e,t,s){return new Re(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ad(this.data.getIterator())}getIteratorFrom(e){return new Ad(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Te)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Te(this.comparator);return t.data=e,t}}class Ad{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new Qe([])}unionWith(e){let t=new Te(Pe.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ys(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Cm("Invalid base64 string: "+r):r}})(e);return new Ne(t)}static fromUint8Array(e){const t=(function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r})(e);return new Ne(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const $w=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rn(n){if(ee(!!n,39018),typeof n=="string"){let e=0;const t=$w.exec(n);if(ee(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:fe(n.seconds),nanos:fe(n.nanos)}}function fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function on(n){return typeof n=="string"?Ne.fromBase64String(n):Ne.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="server_timestamp",Rm="__type__",bm="__previous_value__",Pm="__local_write_time__";function El(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Rm])==null?void 0:s.stringValue)===Sm}function Do(n){const e=n.mapValue.fields[bm];return El(e)?Do(e):e}function Si(n){const e=rn(n.mapValue.fields[Pm].timestampValue);return new ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,t,s,i,r,o,c,l,u,f){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const Xr="(default)";class Ri{constructor(e,t){this.projectId=e,this.database=t||Xr}static empty(){return new Ri("","")}get isDefaultDatabase(){return this.database===Xr}isEqual(e){return e instanceof Ri&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="__type__",zw="__max__",gr={mapValue:{}},km="__vector__",Jr="value";function an(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?El(n)?4:Hw(n)?9007199254740991:Gw(n)?10:11:L(28295,{value:n})}function It(n,e){if(n===e)return!0;const t=an(n);if(t!==an(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Si(n).isEqual(Si(e));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=rn(i.timestampValue),c=rn(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,r){return on(i.bytesValue).isEqual(on(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,r){return fe(i.geoPointValue.latitude)===fe(r.geoPointValue.latitude)&&fe(i.geoPointValue.longitude)===fe(r.geoPointValue.longitude)})(n,e);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return fe(i.integerValue)===fe(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=fe(i.doubleValue),c=fe(r.doubleValue);return o===c?Yr(o)===Yr(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return ys(n.arrayValue.values||[],e.arrayValue.values||[],It);case 10:case 11:return(function(i,r){const o=i.mapValue.fields||{},c=r.mapValue.fields||{};if(wd(o)!==wd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!It(o[l],c[l])))return!1;return!0})(n,e);default:return L(52216,{left:n})}}function bi(n,e){return(n.values||[]).find((t=>It(t,e)))!==void 0}function Es(n,e){if(n===e)return 0;const t=an(n),s=an(e);if(t!==s)return Q(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=fe(r.integerValue||r.doubleValue),l=fe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return Cd(n.timestampValue,e.timestampValue);case 4:return Cd(Si(n),Si(e));case 5:return hc(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=on(r),l=on(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=Q(c[u],l[u]);if(f!==0)return f}return Q(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=Q(fe(r.latitude),fe(o.latitude));return c!==0?c:Q(fe(r.longitude),fe(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Sd(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var m,w,R,k;const c=r.fields||{},l=o.fields||{},u=(m=c[Jr])==null?void 0:m.arrayValue,f=(w=l[Jr])==null?void 0:w.arrayValue,p=Q(((R=u==null?void 0:u.values)==null?void 0:R.length)||0,((k=f==null?void 0:f.values)==null?void 0:k.length)||0);return p!==0?p:Sd(u,f)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===gr.mapValue&&o===gr.mapValue)return 0;if(r===gr.mapValue)return 1;if(o===gr.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=hc(l[p],f[p]);if(m!==0)return m;const w=Es(c[l[p]],u[f[p]]);if(w!==0)return w}return Q(l.length,f.length)})(n.mapValue,e.mapValue);default:throw L(23264,{he:t})}}function Cd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=rn(n),s=rn(e),i=Q(t.seconds,s.seconds);return i!==0?i:Q(t.nanos,s.nanos)}function Sd(n,e){const t=n.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){const r=Es(t[i],s[i]);if(r)return r}return Q(t.length,s.length)}function Is(n){return dc(n)}function dc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=rn(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return on(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return x.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=dc(r);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${dc(t.fields[o])}`;return i+"}"})(n.mapValue):L(61005,{value:n})}function wr(n){switch(an(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Do(n);return e?16+wr(e):16;case 5:return 2*n.stringValue.length;case 6:return on(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((i,r)=>i+wr(r)),0)})(n.arrayValue);case 10:case 11:return(function(s){let i=0;return pn(s.fields,((r,o)=>{i+=r.length+wr(o)})),i})(n.mapValue);default:throw L(13486,{value:n})}}function Rd(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function fc(n){return!!n&&"integerValue"in n}function Il(n){return!!n&&"arrayValue"in n}function bd(n){return!!n&&"nullValue"in n}function Pd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ar(n){return!!n&&"mapValue"in n}function Gw(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Nm])==null?void 0:s.stringValue)===km}function hi(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return pn(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=hi(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=hi(n.arrayValue.values[t]);return e}return{...n}}function Hw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===zw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.value=e}static empty(){return new je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ar(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=hi(t)}setAll(e){let t=Pe.emptyPath(),s={},i=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,s,i),s={},i=[],t=c.popLast()}o?s[c.lastSegment()]=hi(o):i.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());Ar(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return It(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];Ar(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){pn(t,((i,r)=>e[i]=r));for(const i of s)delete e[i]}clone(){return new je(hi(this.value))}}function Dm(n){const e=[];return pn(n.fields,((t,s)=>{const i=new Pe([t]);if(Ar(s)){const r=Dm(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)})),new Qe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t,s,i,r,o,c){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ve(e,0,B.min(),B.min(),B.min(),je.empty(),0)}static newFoundDocument(e,t,s,i){return new Ve(e,1,t,B.min(),s,i,0)}static newNoDocument(e,t){return new Ve(e,2,t,B.min(),B.min(),je.empty(),0)}static newUnknownDocument(e,t){return new Ve(e,3,t,B.min(),B.min(),je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t){this.position=e,this.inclusive=t}}function Nd(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=x.comparator(x.fromName(o.referenceValue),t.key):s=Es(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function kd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!It(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Kw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{}class ye extends Om{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Yw(e,t,s):t==="array-contains"?new Zw(e,s):t==="in"?new eA(e,s):t==="not-in"?new tA(e,s):t==="array-contains-any"?new nA(e,s):new ye(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Xw(e,s):new Jw(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Es(t,this.value)):t!==null&&an(this.value)===an(t)&&this.matchesComparison(Es(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class at extends Om{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new at(e,t)}matches(e){return Vm(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Vm(n){return n.op==="and"}function Mm(n){return Qw(n)&&Vm(n)}function Qw(n){for(const e of n.filters)if(e instanceof at)return!1;return!0}function pc(n){if(n instanceof ye)return n.field.canonicalString()+n.op.toString()+Is(n.value);if(Mm(n))return n.filters.map((e=>pc(e))).join(",");{const e=n.filters.map((t=>pc(t))).join(",");return`${n.op}(${e})`}}function xm(n,e){return n instanceof ye?(function(s,i){return i instanceof ye&&s.op===i.op&&s.field.isEqual(i.field)&&It(s.value,i.value)})(n,e):n instanceof at?(function(s,i){return i instanceof at&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce(((r,o,c)=>r&&xm(o,i.filters[c])),!0):!1})(n,e):void L(19439)}function Lm(n){return n instanceof ye?(function(t){return`${t.field.canonicalString()} ${t.op} ${Is(t.value)}`})(n):n instanceof at?(function(t){return t.op.toString()+" {"+t.getFilters().map(Lm).join(" ,")+"}"})(n):"Filter"}class Yw extends ye{constructor(e,t,s){super(e,t,s),this.key=x.fromName(s.referenceValue)}matches(e){const t=x.comparator(e.key,this.key);return this.matchesComparison(t)}}class Xw extends ye{constructor(e,t){super(e,"in",t),this.keys=Fm("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Jw extends ye{constructor(e,t){super(e,"not-in",t),this.keys=Fm("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Fm(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>x.fromName(s.referenceValue)))}class Zw extends ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Il(t)&&bi(t.arrayValue,this.value)}}class eA extends ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&bi(this.value.arrayValue,t)}}class tA extends ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!bi(this.value.arrayValue,t)}}class nA extends ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Il(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>bi(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,t=null,s=[],i=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function Dd(n,e=null,t=[],s=[],i=null,r=null,o=null){return new sA(n,e,t,s,i,r,o)}function vl(n){const e=q(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>pc(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(r){return r.field.canonicalString()+r.dir})(s))).join(","),ko(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Is(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Is(s))).join(",")),e.Te=t}return e.Te}function Tl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Kw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!xm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!kd(n.startAt,e.startAt)&&kd(n.endAt,e.endAt)}function mc(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t=null,s=[],i=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function iA(n,e,t,s,i,r,o,c){return new ks(n,e,t,s,i,r,o,c)}function Oo(n){return new ks(n)}function Od(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Um(n){return n.collectionGroup!==null}function di(n){const e=q(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Te(Pe.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Pi(r,s))})),t.has(Pe.keyField().canonicalString())||e.Ie.push(new Pi(Pe.keyField(),s))}return e.Ie}function ft(n){const e=q(n);return e.Ee||(e.Ee=rA(e,di(n))),e.Ee}function rA(n,e){if(n.limitType==="F")return Dd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new Pi(i.field,r)}));const t=n.endAt?new Zr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Zr(n.startAt.position,n.startAt.inclusive):null;return Dd(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function gc(n,e){const t=n.filters.concat([e]);return new ks(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function eo(n,e,t){return new ks(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Vo(n,e){return Tl(ft(n),ft(e))&&n.limitType===e.limitType}function Bm(n){return`${vl(ft(n))}|lt:${n.limitType}`}function Xn(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((i=>Lm(i))).join(", ")}]`),ko(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((i=>Is(i))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((i=>Is(i))).join(",")),`Target(${s})`})(ft(n))}; limitType=${n.limitType})`}function Mo(n,e){return e.isFoundDocument()&&(function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):x.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)})(n,e)&&(function(s,i){for(const r of di(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0})(n,e)&&(function(s,i){return!(s.startAt&&!(function(o,c,l){const u=Nd(o,c,l);return o.inclusive?u<=0:u<0})(s.startAt,di(s),i)||s.endAt&&!(function(o,c,l){const u=Nd(o,c,l);return o.inclusive?u>=0:u>0})(s.endAt,di(s),i))})(n,e)}function oA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function qm(n){return(e,t)=>{let s=!1;for(const i of di(n)){const r=aA(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function aA(n,e,t){const s=n.field.isKeyField()?x.comparator(e.key,t.key):(function(r,o,c){const l=o.data.field(r),u=c.data.field(r);return l!==null&&u!==null?Es(l,u):L(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return L(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){pn(this.inner,((t,s)=>{for(const[i,r]of s)e(i,r)}))}isEmpty(){return Am(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=new ue(x.comparator);function Ot(){return cA}const jm=new ue(x.comparator);function ni(...n){let e=jm;for(const t of n)e=e.insert(t.key,t);return e}function $m(n){let e=jm;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Sn(){return fi()}function Wm(){return fi()}function fi(){return new Wn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const lA=new ue(x.comparator),uA=new Te(x.comparator);function Y(...n){let e=uA;for(const t of n)e=e.add(t);return e}const hA=new Te(Q);function dA(){return hA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yr(e)?"-0":e}}function zm(n){return{integerValue:""+n}}function Gm(n,e){return Bw(e)?zm(e):wl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this._=void 0}}function fA(n,e,t){return n instanceof Ni?(function(i,r){const o={fields:{[Rm]:{stringValue:Sm},[Pm]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&El(r)&&(r=Do(r)),r&&(o.fields[bm]=r),{mapValue:o}})(t,e):n instanceof ki?Km(n,e):n instanceof Di?Qm(n,e):(function(i,r){const o=Hm(i,r),c=Vd(o)+Vd(i.Ae);return fc(o)&&fc(i.Ae)?zm(c):wl(i.serializer,c)})(n,e)}function pA(n,e,t){return n instanceof ki?Km(n,e):n instanceof Di?Qm(n,e):t}function Hm(n,e){return n instanceof Oi?(function(s){return fc(s)||(function(r){return!!r&&"doubleValue"in r})(s)})(e)?e:{integerValue:0}:null}class Ni extends xo{}class ki extends xo{constructor(e){super(),this.elements=e}}function Km(n,e){const t=Ym(e);for(const s of n.elements)t.some((i=>It(i,s)))||t.push(s);return{arrayValue:{values:t}}}class Di extends xo{constructor(e){super(),this.elements=e}}function Qm(n,e){let t=Ym(e);for(const s of n.elements)t=t.filter((i=>!It(i,s)));return{arrayValue:{values:t}}}class Oi extends xo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Vd(n){return fe(n.integerValue||n.doubleValue)}function Ym(n){return Il(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,t){this.field=e,this.transform=t}}function mA(n,e){return n.field.isEqual(e.field)&&(function(s,i){return s instanceof ki&&i instanceof ki||s instanceof Di&&i instanceof Di?ys(s.elements,i.elements,It):s instanceof Oi&&i instanceof Oi?It(s.Ae,i.Ae):s instanceof Ni&&i instanceof Ni})(n.transform,e.transform)}class gA{constructor(e,t){this.version=e,this.transformResults=t}}class pt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pt}static exists(e){return new pt(void 0,e)}static updateTime(e){return new pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Lo{}function Jm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new eg(n.key,pt.none()):new ji(n.key,n.data,pt.none());{const t=n.data,s=je.empty();let i=new Te(Pe.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new mn(n.key,s,new Qe(i.toArray()),pt.none())}}function _A(n,e,t){n instanceof ji?(function(i,r,o){const c=i.value.clone(),l=xd(i.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof mn?(function(i,r,o){if(!Cr(i.precondition,r))return void r.convertToUnknownDocument(o.version);const c=xd(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(Zm(i)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function pi(n,e,t,s){return n instanceof ji?(function(r,o,c,l){if(!Cr(r.precondition,o))return c;const u=r.value.clone(),f=Ld(r.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,e,t,s):n instanceof mn?(function(r,o,c,l){if(!Cr(r.precondition,o))return c;const u=Ld(r.fieldTransforms,l,o),f=o.data;return f.setAll(Zm(r)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((p=>p.field)))})(n,e,t,s):(function(r,o,c){return Cr(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function yA(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=Hm(s.transform,i||null);r!=null&&(t===null&&(t=je.empty()),t.set(s.field,r))}return t||null}function Md(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&ys(s,i,((r,o)=>mA(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ji extends Lo{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mn extends Lo{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Zm(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function xd(n,e,t){const s=new Map;ee(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,c=e.data.field(r.field);s.set(r.field,pA(o,c,t[i]))}return s}function Ld(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,fA(r,o,e))}return s}class eg extends Lo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class EA extends Lo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&_A(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=pi(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=pi(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Wm();return this.mutations.forEach((i=>{const r=e.get(i.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(i.key)?null:c;const l=Jm(o,c);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Y())}isEqual(e){return this.batchId===e.batchId&&ys(this.mutations,e.mutations,((t,s)=>Md(t,s)))&&ys(this.baseMutations,e.baseMutations,((t,s)=>Md(t,s)))}}class Al{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){ee(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let i=(function(){return lA})();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Al(e,t,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,X;function wA(n){switch(n){case b.OK:return L(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function tg(n){if(n===void 0)return Dt("GRPC error has no .code"),b.UNKNOWN;switch(n){case ge.OK:return b.OK;case ge.CANCELLED:return b.CANCELLED;case ge.UNKNOWN:return b.UNKNOWN;case ge.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ge.INTERNAL:return b.INTERNAL;case ge.UNAVAILABLE:return b.UNAVAILABLE;case ge.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ge.NOT_FOUND:return b.NOT_FOUND;case ge.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ge.ABORTED:return b.ABORTED;case ge.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ge.DATA_LOSS:return b.DATA_LOSS;default:return L(39323,{code:n})}}(X=ge||(ge={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=new Jt([4294967295,4294967295],0);function Fd(n){const e=AA().encode(n),t=new fm;return t.update(e),new Uint8Array(t.digest())}function Ud(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Jt([t,s],0),new Jt([i,r],0)]}class Cl{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new si(`Invalid padding: ${t}`);if(s<0)throw new si(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new si(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new si(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Jt.fromNumber(this.ge)}ye(e,t,s){let i=e.add(t.multiply(Jt.fromNumber(s)));return i.compare(CA)===1&&(i=new Jt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Fd(e),[s,i]=Ud(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);if(!this.we(o))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Cl(r,i,t);return s.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Fd(e),[s,i]=Ud(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);this.Se(o)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,$i.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Fo(B.min(),i,new ue(Q),Ot(),Y())}}class $i{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new $i(s,t,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t,s,i){this.be=e,this.removedTargetIds=t,this.key=s,this.De=i}}class ng{constructor(e,t){this.targetId=e,this.Ce=t}}class sg{constructor(e,t,s=Ne.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class Bd{constructor(){this.ve=0,this.Fe=qd(),this.Me=Ne.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Y(),t=Y(),s=Y();return this.Fe.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:L(38017,{changeType:r})}})),new $i(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=qd()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ee(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class SA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ot(),this.Je=_r(),this.He=_r(),this.Ye=new ue(Q)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:L(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,s=e.Ce.count,i=this.ot(t);if(i){const r=i.target;if(mc(r))if(s===0){const o=new x(r.path);this.et(t,o,Ve.newNoDocument(o,B.min()))}else ee(s===1,20013,{expectedCount:s});else{const o=this._t(t);if(o!==s){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let o,c;try{o=on(s).toUint8Array()}catch(l){if(l instanceof Cm)return _s("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Cl(o,i,r)}catch(l){return _s(l instanceof si?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let i=0;return s.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&mc(c.target)){const l=new x(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Ve.newNoDocument(l,e))}r.Be&&(t.set(o,r.ke()),r.qe())}}));let s=Y();this.He.forEach(((r,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const i=new Fo(e,t,this.Ye,this.je,s);return this.je=Ot(),this.Je=_r(),this.He=_r(),this.Ye=new ue(Q),i}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Bd,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Te(Q),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Te(Q),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Bd),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function _r(){return new ue(x.comparator)}function qd(){return new ue(x.comparator)}const RA={asc:"ASCENDING",desc:"DESCENDING"},bA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PA={and:"AND",or:"OR"};class NA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _c(n,e){return n.useProto3Json||ko(e)?e:{value:e}}function to(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ig(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function kA(n,e){return to(n,e.toTimestamp())}function mt(n){return ee(!!n,49232),B.fromTimestamp((function(t){const s=rn(t);return new ae(s.seconds,s.nanos)})(n))}function Sl(n,e){return yc(n,e).canonicalString()}function yc(n,e){const t=(function(i){return new ie(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function rg(n){const e=ie.fromString(n);return ee(ug(e),10190,{key:e.toString()}),e}function Ec(n,e){return Sl(n.databaseId,e.path)}function Ma(n,e){const t=rg(e);if(t.get(1)!==n.databaseId.projectId)throw new V(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new x(ag(t))}function og(n,e){return Sl(n.databaseId,e)}function DA(n){const e=rg(n);return e.length===4?ie.emptyPath():ag(e)}function Ic(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ag(n){return ee(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function jd(n,e,t){return{name:Ec(n,e),fields:t.value.mapValue.fields}}function OA(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:L(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=(function(u,f){return u.useProto3Json?(ee(f===void 0||typeof f=="string",58123),Ne.fromBase64String(f||"")):(ee(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ne.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?b.UNKNOWN:tg(u.code);return new V(f,u.message||"")})(o);t=new sg(s,i,r,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ma(n,s.document.name),r=mt(s.document.updateTime),o=s.document.createTime?mt(s.document.createTime):B.min(),c=new je({mapValue:{fields:s.document.fields}}),l=Ve.newFoundDocument(i,r,o,c),u=s.targetIds||[],f=s.removedTargetIds||[];t=new Sr(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ma(n,s.document),r=s.readTime?mt(s.readTime):B.min(),o=Ve.newNoDocument(i,r),c=s.removedTargetIds||[];t=new Sr([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ma(n,s.document),r=s.removedTargetIds||[];t=new Sr([],r,i,null)}else{if(!("filter"in e))return L(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new TA(i,r),c=s.targetId;t=new ng(c,o)}}return t}function VA(n,e){let t;if(e instanceof ji)t={update:jd(n,e.key,e.value)};else if(e instanceof eg)t={delete:Ec(n,e.key)};else if(e instanceof mn)t={update:jd(n,e.key,e.data),updateMask:$A(e.fieldMask)};else{if(!(e instanceof EA))return L(16599,{Vt:e.type});t={verify:Ec(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(r,o){const c=o.transform;if(c instanceof Ni)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ki)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Di)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Oi)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw L(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(i,r){return r.updateTime!==void 0?{updateTime:kA(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:L(27497)})(n,e.precondition)),t}function MA(n,e){return n&&n.length>0?(ee(e!==void 0,14353),n.map((t=>(function(i,r){let o=i.updateTime?mt(i.updateTime):mt(r);return o.isEqual(B.min())&&(o=mt(r)),new gA(o,i.transformResults||[])})(t,e)))):[]}function xA(n,e){return{documents:[og(n,e.path)]}}function LA(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=og(n,i);const r=(function(u){if(u.length!==0)return lg(at.create(u,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Jn(m.field),direction:BA(m.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=_c(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:t,parent:i}}function FA(n){let e=DA(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){ee(s===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let r=[];t.where&&(r=(function(p){const m=cg(p);return m instanceof at&&Mm(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((m=>(function(R){return new Pi(Zn(R.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(m)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,ko(m)?null:m})(t.limit));let l=null;t.startAt&&(l=(function(p){const m=!!p.before,w=p.values||[];return new Zr(w,m)})(t.startAt));let u=null;return t.endAt&&(u=(function(p){const m=!p.before,w=p.values||[];return new Zr(w,m)})(t.endAt)),iA(e,i,o,r,c,"F",l,u)}function UA(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function cg(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Zn(t.unaryFilter.field);return ye.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Zn(t.unaryFilter.field);return ye.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Zn(t.unaryFilter.field);return ye.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zn(t.unaryFilter.field);return ye.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ye.create(Zn(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return at.create(t.compositeFilter.filters.map((s=>cg(s))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(t.compositeFilter.op))})(n):L(30097,{filter:n})}function BA(n){return RA[n]}function qA(n){return bA[n]}function jA(n){return PA[n]}function Jn(n){return{fieldPath:n.canonicalString()}}function Zn(n){return Pe.fromServerFormat(n.fieldPath)}function lg(n){return n instanceof ye?(function(t){if(t.op==="=="){if(Pd(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NAN"}};if(bd(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Pd(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NOT_NAN"}};if(bd(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jn(t.field),op:qA(t.op),value:t.value}}})(n):n instanceof at?(function(t){const s=t.getFilters().map((i=>lg(i)));return s.length===1?s[0]:{compositeFilter:{op:jA(t.op),filters:s}}})(n):L(54877,{filter:n})}function $A(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ug(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t,s,i,r=B.min(),o=B.min(),c=Ne.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Kt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.yt=e}}function zA(n){const e=FA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?eo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(){this.Cn=new HA}addToCollectionParentIndex(e,t){return this.Cn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(sn.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(sn.min())}updateCollectionGroup(e,t,s){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class HA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new Te(ie.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Te(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hg=41943040;class qe{static withCacheSize(e){return new qe(e,qe.DEFAULT_COLLECTION_PERCENTILE,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe.DEFAULT_COLLECTION_PERCENTILE=10,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qe.DEFAULT=new qe(hg,qe.DEFAULT_COLLECTION_PERCENTILE,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qe.DISABLED=new qe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new vs(0)}static cr(){return new vs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="LruGarbageCollector",KA=1048576;function zd([n,e],[t,s]){const i=Q(n,t);return i===0?Q(e,s):i}class QA{constructor(e){this.Ir=e,this.buffer=new Te(zd),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();zd(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class YA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){M(Wd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ns(t)?M(Wd,"Ignoring IndexedDB error during garbage collection: ",t):await Ps(t)}await this.Vr(3e5)}))}}class XA{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(No.ce);const s=new QA(t);return this.mr.forEachTarget(e,(i=>s.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>s.Ar(i))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve($d)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$d):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,i,r,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i)))).next((p=>(s=p,c=Date.now(),this.removeTargets(e,s,t)))).next((p=>(r=p,l=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(u=Date.now(),Yn()<=K.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:p}))))}}function JA(n,e){return new XA(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(){this.changes=new Wn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?P.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(s=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(s!==null&&pi(s.mutation,i,Qe.empty(),ae.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Y()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Y()){const i=Sn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,s).next((r=>{let o=ni();return r.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const s=Sn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Y())))}populateOverlays(e,t,s){const i=[];return s.forEach((r=>{t.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(e,i).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,s,i){let r=Ot();const o=fi(),c=(function(){return fi()})();return t.forEach(((l,u)=>{const f=s.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof mn)?r=r.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),pi(f.mutation,u,f.mutation.getFieldMask(),ae.now())):o.set(u.key,Qe.empty())})),this.recalculateAndSaveOverlays(e,r).next((l=>(l.forEach(((u,f)=>o.set(u,f))),t.forEach(((u,f)=>c.set(u,new eC(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=fi();let i=new ue(((o,c)=>o-c)),r=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let f=s.get(l)||Qe.empty();f=c.applyToLocalView(u,f),s.set(l,f);const p=(i.get(c.batchId)||Y()).add(l);i=i.insert(c.batchId,p)}))})).next((()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=Wm();f.forEach((m=>{if(!r.has(m)){const w=Jm(t.get(m),s.get(m));w!==null&&p.set(m,w),r=r.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return P.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,i){return(function(o){return x.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Um(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next((r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):P.resolve(Sn());let c=Ci,l=r;return o.next((u=>P.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),r.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,r))).next((()=>this.computeViews(e,l,u,Y()))).next((f=>({batchId:c,changes:$m(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next((s=>{let i=ni();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let o=ni();return this.indexManager.getCollectionParents(e,r).next((c=>P.forEach(c,(l=>{const u=(function(p,m){return new ks(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i)))).next((o=>{r.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Ve.newInvalidDocument(f)))}));let c=ni();return o.forEach(((l,u)=>{const f=r.get(l);f!==void 0&&pi(f.mutation,u,Qe.empty(),ae.now()),Mo(t,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return P.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:mt(i.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:zA(i.bundledQuery),readTime:mt(i.readTime)}})(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(){this.overlays=new ue(x.comparator),this.qr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Sn();return P.forEach(t,(i=>this.getOverlay(e,i).next((r=>{r!==null&&s.set(i,r)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((i,r)=>{this.St(e,t,r)})),P.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.qr.get(s);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.qr.delete(s)),P.resolve()}getOverlaysForCollection(e,t,s){const i=Sn(),r=t.length+1,o=new x(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new ue(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let f=r.get(u.largestBatchId);f===null&&(f=Sn(),r=r.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Sn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=i)););return P.resolve(c)}St(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(s.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new vA(t,s));let r=this.qr.get(t);r===void 0&&(r=Y(),this.qr.set(t,r)),this.qr.set(t,r.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.sessionToken=Ne.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.Qr=new Te(Ce.$r),this.Ur=new Te(Ce.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Ce(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Ce(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new x(new ie([])),s=new Ce(t,e),i=new Ce(t,e+1),r=[];return this.Ur.forEachInRange([s,i],(o=>{this.Gr(o),r.push(o.key)})),r}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new x(new ie([])),s=new Ce(t,e),i=new Ce(t,e+1);let r=Y();return this.Ur.forEachInRange([s,i],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new Ce(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ce{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return x.comparator(e.key,t.key)||Q(e.Yr,t.Yr)}static Kr(e,t){return Q(e.Yr,t.Yr)||x.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Te(Ce.$r)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new IA(r,t,s,i);this.mutationQueue.push(o);for(const c of i)this.Zr=this.Zr.add(new Ce(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.ei(s),r=i<0?0:i;return P.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?yl:this.tr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ce(t,0),i=new Ce(t,Number.POSITIVE_INFINITY),r=[];return this.Zr.forEachInRange([s,i],(o=>{const c=this.Xr(o.Yr);r.push(c)})),P.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Te(Q);return t.forEach((i=>{const r=new Ce(i,0),o=new Ce(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([r,o],(c=>{s=s.add(c.Yr)}))})),P.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;x.isDocumentKey(r)||(r=r.child(""));const o=new Ce(new x(r),0);let c=new Te(Q);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(c=c.add(l.Yr)),!0)}),o),P.resolve(this.ti(c))}ti(e){const t=[];return e.forEach((s=>{const i=this.Xr(s);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){ee(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return P.forEach(t.mutations,(i=>{const r=new Ce(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Ce(t,0),i=this.Zr.firstAfterOrEqual(s);return P.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.ri=e,this.docs=(function(){return new ue(x.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return P.resolve(s?s.document.mutableCopy():Ve.newInvalidDocument(t))}getEntries(e,t){let s=Ot();return t.forEach((i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Ve.newInvalidDocument(i))})),P.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=Ot();const o=t.path,c=new x(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||xw(Mw(f),s)<=0||(i.has(f.key)||Mo(t,f))&&(r=r.insert(f.key,f.mutableCopy()))}return P.resolve(r)}getAllFromCollectionGroup(e,t,s,i){L(9500)}ii(e,t){return P.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new aC(this)}getSize(e){return P.resolve(this.size)}}class aC extends ZA{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(s)})),P.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.persistence=e,this.si=new Wn((t=>vl(t)),Tl),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.oi=0,this._i=new Rl,this.targetCount=0,this.ai=vs.ur()}forEachTarget(e,t){return this.si.forEach(((s,i)=>t(i))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),P.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new vs(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Pr(t),P.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.si.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)})),P.waitFor(r).next((()=>i))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return P.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),P.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((o=>{r.push(i.markPotentiallyOrphaned(e,o))})),P.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return P.resolve(s)}containsKey(e,t){return P.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,t){this.ui={},this.overlays={},this.ci=new No(0),this.li=!1,this.li=!0,this.hi=new iC,this.referenceDelegate=e(this),this.Pi=new cC(this),this.indexManager=new GA,this.remoteDocumentCache=(function(i){return new oC(i)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new WA(t),this.Ii=new nC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new rC(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){M("MemoryPersistence","Starting transaction:",e);const i=new lC(this.ci.next());return this.referenceDelegate.Ei(),s(i).next((r=>this.referenceDelegate.di(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ai(e,t){return P.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class lC extends Fw{constructor(e){super(),this.currentSequenceNumber=e}}class bl{constructor(e){this.persistence=e,this.Ri=new Rl,this.Vi=null}static mi(e){return new bl(e)}get fi(){if(this.Vi)return this.Vi;throw L(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),P.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((r=>this.fi.add(r.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.fi,(s=>{const i=x.fromPath(s);return this.gi(e,i).next((r=>{r||t.removeEntry(i,B.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class no{constructor(e,t){this.persistence=e,this.pi=new Wn((s=>qw(s.path)),((s,i)=>s.isEqual(i))),this.garbageCollector=JA(this,t)}static mi(e,t){return new no(e,t)}Ei(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((i=>s+i))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return P.forEach(this.pi,((s,i)=>this.br(e,s,i).next((r=>r?P.resolve():t(i)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ii(e,(o=>this.br(e,o,t).next((c=>{c||(s++,r.removeEntry(o,B.min()))})))).next((()=>r.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),P.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=wr(e.data.value)),t}br(e,t,s){return P.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return P.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=i}static As(e,t){let s=Y(),i=Y();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Pl(e,t.fromCache,s,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return xy()?8:Uw(Me())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.ys(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ws(e,t,i,s).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new uC;return this.Ss(e,t,o).next((c=>{if(r.result=c,this.Vs)return this.bs(e,t,o,c.size)}))})).next((()=>r.result))}bs(e,t,s,i){return s.documentReadCount<this.fs?(Yn()<=K.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Xn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),P.resolve()):(Yn()<=K.DEBUG&&M("QueryEngine","Query:",Xn(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.gs*i?(Yn()<=K.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Xn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ft(t))):P.resolve())}ys(e,t){if(Od(t))return P.resolve(null);let s=ft(t);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=eo(t,null,"F"),s=ft(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((r=>{const o=Y(...r);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,s).next((l=>{const u=this.Ds(t,c);return this.Cs(t,u,o,l.readTime)?this.ys(e,eo(t,null,"F")):this.vs(e,u,t,l)}))))})))))}ws(e,t,s,i){return Od(t)||i.isEqual(B.min())?P.resolve(null):this.ps.getDocuments(e,s).next((r=>{const o=this.Ds(t,r);return this.Cs(t,o,s,i)?P.resolve(null):(Yn()<=K.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xn(t)),this.vs(e,o,t,Vw(i,Ci)).next((c=>c)))}))}Ds(e,t){let s=new Te(qm(e));return t.forEach(((i,r)=>{Mo(e,r)&&(s=s.add(r))})),s}Cs(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ss(e,t,s){return Yn()<=K.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Xn(t)),this.ps.getDocumentsMatchingQuery(e,t,sn.min(),s)}vs(e,t,s,i){return this.ps.getDocumentsMatchingQuery(e,s,i).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="LocalStore",dC=3e8;class fC{constructor(e,t,s,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new ue(Q),this.xs=new Wn((r=>vl(r)),Tl),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function pC(n,e,t,s){return new fC(n,e,t,s)}async function fg(n,e){const t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next((r=>(i=r,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((r=>{const o=[],c=[];let l=Y();for(const u of i){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of r){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(s,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function mC(n,e){const t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const i=e.batch.keys(),r=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let w=P.resolve();return m.forEach((R=>{w=w.next((()=>f.getEntry(l,R))).next((k=>{const N=u.docVersions.get(R);ee(N!==null,48541),k.version.compareTo(N)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))}))})),w.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,s,e,r).next((()=>r.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(c){let l=Y();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(s,i)))}))}function pg(n){const e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function gC(n,e){const t=q(n),s=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=i.get(p);if(!m)return;c.push(t.Pi.removeMatchingKeys(r,f.removedDocuments,p).next((()=>t.Pi.addMatchingKeys(r,f.addedDocuments,p))));let w=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Ne.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,s)),i=i.insert(p,w),(function(k,N,j){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=dC?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0})(m,w,f)&&c.push(t.Pi.updateTargetData(r,w))}));let l=Ot(),u=Y();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,f))})),c.push(_C(r,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!s.isEqual(B.min())){const f=t.Pi.getLastRemoteSnapshotVersion(r).next((p=>t.Pi.setTargetsMetadata(r,r.currentSequenceNumber,s)));c.push(f)}return P.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,l,u))).next((()=>l))})).then((r=>(t.Ms=i,r)))}function _C(n,e,t){let s=Y(),i=Y();return t.forEach((r=>s=s.add(r))),e.getEntries(n,s).next((r=>{let o=Ot();return t.forEach(((c,l)=>{const u=r.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):M(Nl,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:i}}))}function yC(n,e){const t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=yl),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function EC(n,e){const t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let i;return t.Pi.getTargetData(s,e).next((r=>r?(i=r,P.resolve(i)):t.Pi.allocateTargetId(s).next((o=>(i=new Kt(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,i).next((()=>i)))))))})).then((s=>{const i=t.Ms.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function vc(n,e,t){const s=q(n),i=s.Ms.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,(o=>s.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!Ns(o))throw o;M(Nl,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.xs.delete(i.target)}function Gd(n,e,t){const s=q(n);let i=B.min(),r=Y();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=q(l),m=p.xs.get(f);return m!==void 0?P.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(s,o,ft(e)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{r=l}))})).next((()=>s.Fs.getDocumentsMatchingQuery(o,e,t?i:B.min(),t?r:Y()))).next((c=>(IC(s,oA(e),c),{documents:c,Qs:r})))))}function IC(n,e,t){let s=n.Os.get(e)||B.min();t.forEach(((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)})),n.Os.set(e,s)}class Hd{constructor(){this.activeTargetIds=dA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vC{constructor(){this.Mo=new Hd,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Hd,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="ConnectivityMonitor";class Qd{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){M(Kd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){M(Kd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yr=null;function Tc(){return yr===null?yr=(function(){return 268435456+Math.round(2147483648*Math.random())})():yr++,"0x"+yr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="RestConnection",wC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class AC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${i}`,this.Wo=this.databaseId.database===Xr?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Go(e,t,s,i,r){const o=Tc(),c=this.zo(e,t.toUriEncodedString());M(xa,`Sending RPC '${e}' ${o}:`,c,s);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,i,r);const{host:u}=new URL(c),f=hn(u);return this.Jo(e,c,l,s,f).then((p=>(M(xa,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw _s(xa,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",s),p}))}Ho(e,t,s,i,r,o){return this.Go(e,t,s,i,r)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+bs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,r)=>e[r]=i)),s&&s.headers.forEach(((i,r)=>e[r]=i))}zo(e,t){const s=wC[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="WebChannelConnection";class SC extends AC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,i,r){const o=Tc();return new Promise(((c,l)=>{const u=new pm;u.setWithCredentials(!0),u.listenOnce(mm.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Tr.NO_ERROR:const p=u.getResponseJson();M(De,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Tr.TIMEOUT:M(De,`RPC '${e}' ${o} timed out`),l(new V(b.DEADLINE_EXCEEDED,"Request time out"));break;case Tr.HTTP_ERROR:const m=u.getStatus();if(M(De,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const R=w==null?void 0:w.error;if(R&&R.status&&R.message){const k=(function(j){const $=j.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf($)>=0?$:b.UNKNOWN})(R.status);l(new V(k,R.message))}else l(new V(b.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new V(b.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{M(De,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(i);M(De,`RPC '${e}' ${o} sending request:`,i),u.send(t,"POST",f,s,15)}))}T_(e,t,s){const i=Tc(),r=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ym(),c=_m(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;const f=r.join("");M(De,`Creating RPC '${e}' stream ${i}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,w=!1;const R=new CC({Yo:N=>{w?M(De,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(M(De,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),M(De,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},Zo:()=>p.close()}),k=(N,j,$)=>{N.listen(j,(J=>{try{$(J)}catch(me){setTimeout((()=>{throw me}),0)}}))};return k(p,ti.EventType.OPEN,(()=>{w||(M(De,`RPC '${e}' stream ${i} transport opened.`),R.o_())})),k(p,ti.EventType.CLOSE,(()=>{w||(w=!0,M(De,`RPC '${e}' stream ${i} transport closed`),R.a_(),this.E_(p))})),k(p,ti.EventType.ERROR,(N=>{w||(w=!0,_s(De,`RPC '${e}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),R.a_(new V(b.UNAVAILABLE,"The operation could not be completed")))})),k(p,ti.EventType.MESSAGE,(N=>{var j;if(!w){const $=N.data[0];ee(!!$,16349);const J=$,me=(J==null?void 0:J.error)||((j=J[0])==null?void 0:j.error);if(me){M(De,`RPC '${e}' stream ${i} received error:`,me);const Ge=me.status;let Ie=(function(E){const T=ge[E];if(T!==void 0)return tg(T)})(Ge),v=me.message;Ie===void 0&&(Ie=b.INTERNAL,v="Unknown error status: "+Ge+" with message "+me.message),w=!0,R.a_(new V(Ie,v)),p.close()}else M(De,`RPC '${e}' stream ${i} received:`,$),R.u_($)}})),k(c,gm.STAT_EVENT,(N=>{N.stat===uc.PROXY?M(De,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===uc.NOPROXY&&M(De,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{R.__()}),0),R}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function La(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(n){return new NA(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=i,this.R_=r,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-s);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="PersistentStream";class gg{constructor(e,t,s,i,r,o,c,l){this.Mi=e,this.S_=s,this.b_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new mg(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(Dt(t.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,i])=>{this.D_===t&&this.G_(s,i)}),(s=>{e((()=>{const i=new V(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{s((()=>this.z_(i)))})),this.stream.onMessage((i=>{s((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return M(Yd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(M(Yd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class RC extends gg{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=OA(this.serializer,e),s=(function(r){if(!("targetChange"in r))return B.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?B.min():o.readTime?mt(o.readTime):B.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Ic(this.serializer),t.addTarget=(function(r,o){let c;const l=o.target;if(c=mc(l)?{documents:xA(r,l)}:{query:LA(r,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=ig(r,o.resumeToken);const u=_c(r,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(B.min())>0){c.readTime=to(r,o.snapshotVersion.toTimestamp());const u=_c(r,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const s=UA(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Ic(this.serializer),t.removeTarget=e,this.q_(t)}}class bC extends gg{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ee(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ee(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ee(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=MA(e.writeResults,e.commitTime),s=mt(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Ic(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>VA(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{}class NC extends PC{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Go(e,yc(t,s),i,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new V(b.UNKNOWN,r.toString())}))}Ho(e,t,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,yc(t,s),i,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(b.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class kC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Dt(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="RemoteStore";class DC{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=r,this.Aa.Oo((o=>{s.enqueueAndForget((async()=>{zn(this)&&(M(Mn,"Restarting streams for network reachability change."),await(async function(l){const u=q(l);u.Ea.add(4),await Wi(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Bo(u)})(this))}))})),this.Ra=new kC(s,i)}}async function Bo(n){if(zn(n))for(const e of n.da)await e(!0)}async function Wi(n){for(const e of n.da)await e(!1)}function _g(n,e){const t=q(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Vl(t)?Ol(t):Ds(t).O_()&&Dl(t,e))}function kl(n,e){const t=q(n),s=Ds(t);t.Ia.delete(e),s.O_()&&yg(t,e),t.Ia.size===0&&(s.O_()?s.L_():zn(t)&&t.Ra.set("Unknown"))}function Dl(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ds(n).Y_(e)}function yg(n,e){n.Va.Ue(e),Ds(n).Z_(e)}function Ol(n){n.Va=new SA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ds(n).start(),n.Ra.ua()}function Vl(n){return zn(n)&&!Ds(n).x_()&&n.Ia.size>0}function zn(n){return q(n).Ea.size===0}function Eg(n){n.Va=void 0}async function OC(n){n.Ra.set("Online")}async function VC(n){n.Ia.forEach(((e,t)=>{Dl(n,e)}))}async function MC(n,e){Eg(n),Vl(n)?(n.Ra.ha(e),Ol(n)):n.Ra.set("Unknown")}async function xC(n,e,t){if(n.Ra.set("Online"),e instanceof sg&&e.state===2&&e.cause)try{await(async function(i,r){const o=r.cause;for(const c of r.targetIds)i.Ia.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.Ia.delete(c),i.Va.removeTarget(c))})(n,e)}catch(s){M(Mn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await so(n,s)}else if(e instanceof Sr?n.Va.Ze(e):e instanceof ng?n.Va.st(e):n.Va.tt(e),!t.isEqual(B.min()))try{const s=await pg(n.localStore);t.compareTo(s)>=0&&await(function(r,o){const c=r.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=r.Ia.get(u);f&&r.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=r.Ia.get(l);if(!f)return;r.Ia.set(l,f.withResumeToken(Ne.EMPTY_BYTE_STRING,f.snapshotVersion)),yg(r,l);const p=new Kt(f.target,l,u,f.sequenceNumber);Dl(r,p)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){M(Mn,"Failed to raise snapshot:",s),await so(n,s)}}async function so(n,e,t){if(!Ns(e))throw e;n.Ea.add(1),await Wi(n),n.Ra.set("Offline"),t||(t=()=>pg(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(Mn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Bo(n)}))}function Ig(n,e){return e().catch((t=>so(n,t,e)))}async function qo(n){const e=q(n),t=cn(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:yl;for(;LC(e);)try{const i=await yC(e.localStore,s);if(i===null){e.Ta.length===0&&t.L_();break}s=i.batchId,FC(e,i)}catch(i){await so(e,i)}vg(e)&&Tg(e)}function LC(n){return zn(n)&&n.Ta.length<10}function FC(n,e){n.Ta.push(e);const t=cn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function vg(n){return zn(n)&&!cn(n).x_()&&n.Ta.length>0}function Tg(n){cn(n).start()}async function UC(n){cn(n).ra()}async function BC(n){const e=cn(n);for(const t of n.Ta)e.ea(t.mutations)}async function qC(n,e,t){const s=n.Ta.shift(),i=Al.from(s,e,t);await Ig(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await qo(n)}async function jC(n,e){e&&cn(n).X_&&await(async function(s,i){if((function(o){return wA(o)&&o!==b.ABORTED})(i.code)){const r=s.Ta.shift();cn(s).B_(),await Ig(s,(()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i))),await qo(s)}})(n,e),vg(n)&&Tg(n)}async function Xd(n,e){const t=q(n);t.asyncQueue.verifyOperationInProgress(),M(Mn,"RemoteStore received new credentials");const s=zn(t);t.Ea.add(3),await Wi(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Bo(t)}async function $C(n,e){const t=q(n);e?(t.Ea.delete(2),await Bo(t)):e||(t.Ea.add(2),await Wi(t),t.Ra.set("Unknown"))}function Ds(n){return n.ma||(n.ma=(function(t,s,i){const r=q(t);return r.sa(),new RC(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Xo:OC.bind(null,n),t_:VC.bind(null,n),r_:MC.bind(null,n),H_:xC.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Vl(n)?Ol(n):n.Ra.set("Unknown")):(await n.ma.stop(),Eg(n))}))),n.ma}function cn(n){return n.fa||(n.fa=(function(t,s,i){const r=q(t);return r.sa(),new bC(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:UC.bind(null,n),r_:jC.bind(null,n),ta:BC.bind(null,n),na:qC.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await qo(n)):(await n.fa.stop(),n.Ta.length>0&&(M(Mn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,c=new Ml(e,t,o,i,r);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xl(n,e){if(Dt("AsyncQueue",`${e}: ${n}`),Ns(n))return new V(b.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{static emptySet(e){return new os(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||x.comparator(t.key,s.key):(t,s)=>x.comparator(t.key,s.key),this.keyedMap=ni(),this.sortedSet=new ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof os)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new os;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.ga=new ue(x.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):L(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Ts{constructor(e,t,s,i,r,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Ts(e,t,os.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class zC{constructor(){this.queries=Zd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const i=q(t),r=i.queries;i.queries=Zd(),r.forEach(((o,c)=>{for(const l of c.Sa)l.onError(s)}))})(this,new V(b.ABORTED,"Firestore shutting down"))}}function Zd(){return new Wn((n=>Bm(n)),Vo)}async function Ll(n,e){const t=q(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.ba()&&e.Da()&&(s=2):(r=new WC,s=e.Da()?0:1);try{switch(s){case 0:r.wa=await t.onListen(i,!0);break;case 1:r.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=xl(o,`Initialization of query '${Xn(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,r),r.Sa.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&Ul(t)}async function Fl(n,e){const t=q(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const o=r.Sa.indexOf(e);o>=0&&(r.Sa.splice(o,1),r.Sa.length===0?i=e.Da()?0:1:!r.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function GC(n,e){const t=q(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const c of o.Sa)c.Fa(i)&&(s=!0);o.wa=i}}s&&Ul(t)}function HC(n,e,t){const s=q(n),i=s.queries.get(e);if(i)for(const r of i.Sa)r.onError(t);s.queries.delete(e)}function Ul(n){n.Ca.forEach((e=>{e.next()}))}var wc,ef;(ef=wc||(wc={})).Ma="default",ef.Cache="cache";class Bl{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Ts(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==wc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){this.key=e}}class Ag{constructor(e){this.key=e}}class KC{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Y(),this.mutatedKeys=Y(),this.eu=qm(e),this.tu=new os(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Jd,i=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((f,p)=>{const m=i.get(f),w=Mo(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let N=!1;m&&w?m.data.isEqual(w.data)?R!==k&&(s.track({type:3,doc:w}),N=!0):this.su(m,w)||(s.track({type:2,doc:w}),N=!0,(l&&this.eu(w,l)>0||u&&this.eu(w,u)<0)&&(c=!0)):!m&&w?(s.track({type:0,doc:w}),N=!0):m&&!w&&(s.track({type:1,doc:m}),N=!0,(l||u)&&(c=!0)),N&&(w?(o=o.add(w),r=k?r.add(f):r.delete(f)):(o=o.delete(f),r=r.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),r=r.delete(f.key),s.track({type:1,doc:f})}return{tu:o,iu:s,Cs:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(w,R){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Rt:N})}};return k(w)-k(R)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(s),i=i??!1;const c=t&&!i?this._u():[],l=this.Xa.size===0&&this.current&&!i?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Ts(this.query,e.tu,r,o,e.mutatedKeys,l===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Jd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Y(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new Ag(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new wg(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Y();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ts.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ql="SyncEngine";class QC{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class YC{constructor(e){this.key=e,this.hu=!1}}class XC{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Wn((c=>Bm(c)),Vo),this.Iu=new Map,this.Eu=new Set,this.du=new ue(x.comparator),this.Au=new Map,this.Ru=new Rl,this.Vu={},this.mu=new Map,this.fu=vs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function JC(n,e,t=!0){const s=Ng(n);let i;const r=s.Tu.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await Cg(s,e,t,!0),i}async function ZC(n,e){const t=Ng(n);await Cg(t,e,!0,!1)}async function Cg(n,e,t,s){const i=await EC(n.localStore,ft(e)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return s&&(c=await eS(n,e,r,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&_g(n.remoteStore,i),c}async function eS(n,e,t,s,i){n.pu=(p,m,w)=>(async function(k,N,j,$){let J=N.view.ru(j);J.Cs&&(J=await Gd(k.localStore,N.query,!1).then((({documents:v})=>N.view.ru(v,J))));const me=$&&$.targetChanges.get(N.targetId),Ge=$&&$.targetMismatches.get(N.targetId)!=null,Ie=N.view.applyChanges(J,k.isPrimaryClient,me,Ge);return nf(k,N.targetId,Ie.au),Ie.snapshot})(n,p,m,w);const r=await Gd(n.localStore,e,!0),o=new KC(e,r.Qs),c=o.ru(r.documents),l=$i.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),u=o.applyChanges(c,n.isPrimaryClient,l);nf(n,t,u.au);const f=new QC(e,t,o);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),u.snapshot}async function tS(n,e,t){const s=q(n),i=s.Tu.get(e),r=s.Iu.get(i.targetId);if(r.length>1)return s.Iu.set(i.targetId,r.filter((o=>!Vo(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await vc(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),t&&kl(s.remoteStore,i.targetId),Ac(s,i.targetId)})).catch(Ps)):(Ac(s,i.targetId),await vc(s.localStore,i.targetId,!0))}async function nS(n,e){const t=q(n),s=t.Tu.get(e),i=t.Iu.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),kl(t.remoteStore,s.targetId))}async function sS(n,e,t){const s=uS(n);try{const i=await(function(o,c){const l=q(o),u=ae.now(),f=c.reduce(((w,R)=>w.add(R.key)),Y());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(w=>{let R=Ot(),k=Y();return l.Ns.getEntries(w,f).next((N=>{R=N,R.forEach(((j,$)=>{$.isValidDocument()||(k=k.add(j))}))})).next((()=>l.localDocuments.getOverlayedDocuments(w,R))).next((N=>{p=N;const j=[];for(const $ of c){const J=yA($,p.get($.key).overlayedDocument);J!=null&&j.push(new mn($.key,J,Dm(J.value.mapValue),pt.exists(!0)))}return l.mutationQueue.addMutationBatch(w,u,j,c)})).next((N=>{m=N;const j=N.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(w,N.batchId,j)}))})).then((()=>({batchId:m.batchId,changes:$m(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new ue(Q)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(s,i.batchId,t),await zi(s,i.changes),await qo(s.remoteStore)}catch(i){const r=xl(i,"Failed to persist write");t.reject(r)}}async function Sg(n,e){const t=q(n);try{const s=await gC(t.localStore,e);e.targetChanges.forEach(((i,r)=>{const o=t.Au.get(r);o&&(ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ee(o.hu,14607):i.removedDocuments.size>0&&(ee(o.hu,42227),o.hu=!1))})),await zi(t,s,e)}catch(s){await Ps(s)}}function tf(n,e,t){const s=q(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)})),(function(o,c){const l=q(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)})),u&&Ul(l)})(s.eventManager,e),i.length&&s.Pu.H_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function iS(n,e,t){const s=q(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Au.get(e),r=i&&i.key;if(r){let o=new ue(x.comparator);o=o.insert(r,Ve.newNoDocument(r,B.min()));const c=Y().add(r),l=new Fo(B.min(),new Map,new ue(Q),o,c);await Sg(s,l),s.du=s.du.remove(r),s.Au.delete(e),jl(s)}else await vc(s.localStore,e,!1).then((()=>Ac(s,e,t))).catch(Ps)}async function rS(n,e){const t=q(n),s=e.batch.batchId;try{const i=await mC(t.localStore,e);bg(t,s,null),Rg(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await zi(t,i)}catch(i){await Ps(i)}}async function oS(n,e,t){const s=q(n);try{const i=await(function(o,c){const l=q(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(ee(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(s.localStore,e);bg(s,e,t),Rg(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await zi(s,i)}catch(i){await Ps(i)}}function Rg(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function bg(n,e,t){const s=q(n);let i=s.Vu[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.Vu[s.currentUser.toKey()]=i}}function Ac(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||Pg(n,s)}))}function Pg(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(kl(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),jl(n))}function nf(n,e,t){for(const s of t)s instanceof wg?(n.Ru.addReference(s.key,e),aS(n,s)):s instanceof Ag?(M(ql,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||Pg(n,s.key)):L(19791,{wu:s})}function aS(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(M(ql,"New document in limbo: "+t),n.Eu.add(s),jl(n))}function jl(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new x(ie.fromString(e)),s=n.fu.next();n.Au.set(s,new YC(t)),n.du=n.du.insert(t,s),_g(n.remoteStore,new Kt(ft(Oo(t.path)),s,"TargetPurposeLimboResolution",No.ce))}}async function zi(n,e,t){const s=q(n),i=[],r=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,l)=>{o.push(s.pu(l,e,t).then((u=>{var f;if((u||t)&&s.isPrimaryClient){const p=u?!u.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:f.current;s.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){i.push(u);const p=Pl.As(l.targetId,u);r.push(p)}})))})),await Promise.all(o),s.Pu.H_(i),await(async function(l,u){const f=q(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>P.forEach(u,(m=>P.forEach(m.Es,(w=>f.persistence.referenceDelegate.addReference(p,m.targetId,w))).next((()=>P.forEach(m.ds,(w=>f.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))))))}catch(p){if(!Ns(p))throw p;M(Nl,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const w=f.Ms.get(m),R=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(R);f.Ms=f.Ms.insert(m,k)}}})(s.localStore,r))}async function cS(n,e){const t=q(n);if(!t.currentUser.isEqual(e)){M(ql,"User change. New user:",e.toKey());const s=await fg(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((l=>{l.reject(new V(b.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await zi(t,s.Ls)}}function lS(n,e){const t=q(n),s=t.Au.get(e);if(s&&s.hu)return Y().add(s.key);{let i=Y();const r=t.Iu.get(e);if(!r)return i;for(const o of r){const c=t.Tu.get(o);i=i.unionWith(c.view.nu)}return i}}function Ng(n){const e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iS.bind(null,e),e.Pu.H_=GC.bind(null,e.eventManager),e.Pu.yu=HC.bind(null,e.eventManager),e}function uS(n){const e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oS.bind(null,e),e}class io{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uo(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return pC(this.persistence,new hC,e.initialUser,this.serializer)}Cu(e){return new dg(bl.mi,this.serializer)}Du(e){return new vC}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}io.provider={build:()=>new io};class hS extends io{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ee(this.persistence.referenceDelegate instanceof no,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new YA(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?qe.withCacheSize(this.cacheSizeBytes):qe.DEFAULT;return new dg((s=>no.mi(s,t)),this.serializer)}}class Cc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>tf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=cS.bind(null,this.syncEngine),await $C(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new zC})()}createDatastore(e){const t=Uo(e.databaseInfo.databaseId),s=(function(r){return new SC(r)})(e.databaseInfo);return(function(r,o,c,l){return new NC(r,o,c,l)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,i,r,o,c){return new DC(s,i,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>tf(this.syncEngine,t,0)),(function(){return Qd.v()?new Qd:new TC})())}createSyncEngine(e,t){return(function(i,r,o,c,l,u,f){const p=new XC(i,r,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const r=q(i);M(Mn,"RemoteStore shutting down."),r.Ea.add(5),await Wi(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Cc.provider={build:()=>new Cc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Dt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln="FirestoreClient";class dS{constructor(e,t,s,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=Oe.UNAUTHENTICATED,this.clientId=_l.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,(async o=>{M(ln,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(M(ln,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=xl(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Fa(n,e){n.asyncQueue.verifyOperationInProgress(),M(ln,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async i=>{s.isEqual(i)||(await fg(e.localStore,i),s=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function sf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await fS(n);M(ln,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Xd(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,i)=>Xd(e.remoteStore,i))),n._onlineComponents=e}async function fS(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(ln,"Using user provided OfflineComponentProvider");try{await Fa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;_s("Error using user provided cache. Falling back to memory cache: "+t),await Fa(n,new io)}}else M(ln,"Using default OfflineComponentProvider"),await Fa(n,new hS(void 0));return n._offlineComponents}async function kg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(ln,"Using user provided OnlineComponentProvider"),await sf(n,n._uninitializedComponentsProvider._online)):(M(ln,"Using default OnlineComponentProvider"),await sf(n,new Cc))),n._onlineComponents}function pS(n){return kg(n).then((e=>e.syncEngine))}async function ro(n){const e=await kg(n),t=e.eventManager;return t.onListen=JC.bind(null,e.syncEngine),t.onUnlisten=tS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ZC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nS.bind(null,e.syncEngine),t}function mS(n,e,t={}){const s=new Rt;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,c,l,u){const f=new $l({next:m=>{f.Nu(),o.enqueueAndForget((()=>Fl(r,p)));const w=m.docs.has(c);!w&&m.fromCache?u.reject(new V(b.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&l&&l.source==="server"?u.reject(new V(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Bl(Oo(c.path),f,{includeMetadataChanges:!0,qa:!0});return Ll(r,p)})(await ro(n),n.asyncQueue,e,t,s))),s.promise}function gS(n,e,t={}){const s=new Rt;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,c,l,u){const f=new $l({next:m=>{f.Nu(),o.enqueueAndForget((()=>Fl(r,p))),m.fromCache&&l.source==="server"?u.reject(new V(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Bl(c,f,{includeMetadataChanges:!0,qa:!0});return Ll(r,p)})(await ro(n),n.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="firestore.googleapis.com",of=!0;class af{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Og,this.ssl=of}else this.host=e.host,this.ssl=e.ssl??of;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<KA)throw new V(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Dw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dg(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jo{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new af({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new af(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Tw;switch(s.type){case"firstParty":return new Sw(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new V(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=rf.get(t);s&&(M("ComponentProvider","Removing Datastore"),rf.delete(t),s.terminate())})(this),Promise.resolve()}}function _S(n,e,t,s={}){var u;n=et(n,jo);const i=hn(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;i&&(Dc(`https://${c}`),Oc("Firestore",!0)),r.host!==Og&&r.host!==c&&_s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:c,ssl:i,emulatorOptions:s};if(!bt(l,o)&&(n._setSettings(l),s.mockUserToken)){let f,p;if(typeof s.mockUserToken=="string")f=s.mockUserToken,p=Oe.MOCK_USER;else{f=Hf(s.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const m=s.mockUserToken.sub||s.mockUserToken.user_id;if(!m)throw new V(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Oe(m)}n._authCredentials=new ww(new Im(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new xt(this.firestore,e,this._query)}}class de{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new de(this.firestore,e,this._key)}toJSON(){return{type:de._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(qi(t,de._jsonSchema))return new de(e,s||null,new x(ie.fromString(t.referencePath)))}}de._jsonSchemaVersion="firestore/documentReference/1.0",de._jsonSchema={type:Ee("string",de._jsonSchemaVersion),referencePath:Ee("string")};class Zt extends xt{constructor(e,t,s){super(e,t,Oo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new de(this.firestore,null,new x(e))}withConverter(e){return new Zt(this.firestore,e,this._path)}}function t0(n,e,...t){if(n=ce(n),vm("collection","path",e),n instanceof jo){const s=ie.fromString(e,...t);return Ed(s),new Zt(n,null,s)}{if(!(n instanceof de||n instanceof Zt))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ie.fromString(e,...t));return Ed(s),new Zt(n.firestore,null,s)}}function n0(n,e,...t){if(n=ce(n),arguments.length===1&&(e=_l.newId()),vm("doc","path",e),n instanceof jo){const s=ie.fromString(e,...t);return yd(s),new de(n,null,new x(s))}{if(!(n instanceof de||n instanceof Zt))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ie.fromString(e,...t));return yd(s),new de(n.firestore,n instanceof Zt?n.converter:null,new x(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="AsyncQueue";class lf{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new mg(this,"async_queue_retry"),this._c=()=>{const s=La();s&&M(cf,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=La();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=La();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Rt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ns(e))throw e;M(cf,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Dt("INTERNAL UNHANDLED ERROR: ",uf(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Ml.createAndSchedule(this,e,t,s,(r=>this.hc(r)));return this.tc.push(i),i}uc(){this.nc&&L(47125,{Pc:uf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function uf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const i=t;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1})(n,["next","error","complete"])}class xn extends jo{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new lf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new lf(e),this._firestoreClient=void 0,await e}}}function s0(n,e){const t=typeof n=="object"?n:yo(),s=typeof n=="string"?n:Xr,i=dn(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Wf("firestore");r&&_S(i,...r)}return i}function $o(n){if(n._terminated)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||yS(n),n._firestoreClient}function yS(n){var s,i,r;const e=n._freezeSettings(),t=(function(c,l,u,f){return new Ww(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Dg(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((r=e.localCache)!=null&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new dS(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Je(Ne.fromBase64String(e))}catch(t){throw new V(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Je(Ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Je._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(qi(e,Je._jsonSchema))return Je.fromBase64String(e.bytes)}}Je._jsonSchemaVersion="firestore/bytes/1.0",Je._jsonSchema={type:Ee("string",Je._jsonSchemaVersion),bytes:Ee("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gt._jsonSchemaVersion}}static fromJSON(e){if(qi(e,gt._jsonSchema))return new gt(e.latitude,e.longitude)}}gt._jsonSchemaVersion="firestore/geoPoint/1.0",gt._jsonSchema={type:Ee("string",gt._jsonSchemaVersion),latitude:Ee("number"),longitude:Ee("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:_t._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(qi(e,_t._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new _t(e.vectorValues);throw new V(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_t._jsonSchemaVersion="firestore/vectorValue/1.0",_t._jsonSchema={type:Ee("string",_t._jsonSchemaVersion),vectorValues:Ee("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=/^__.*__$/;class IS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new mn(e,this.data,this.fieldMask,t,this.fieldTransforms):new ji(e,this.data,t,this.fieldTransforms)}}class Vg{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new mn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Mg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{Ac:n})}}class Wl{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Rc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Wl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return oo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Mg(this.Ac)&&ES.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class vS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Uo(e)}Cc(e,t,s,i=!1){return new Wl({Ac:e,methodName:t,Dc:s,path:Pe.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zl(n){const e=n._freezeSettings(),t=Uo(n._databaseId);return new vS(n._databaseId,!!e.ignoreUndefinedProperties,t)}function TS(n,e,t,s,i,r={}){const o=n.Cc(r.merge||r.mergeFields?2:0,e,t,i);Kl("Data must be an object, but it was:",o,s);const c=xg(s,o);let l,u;if(r.merge)l=new Qe(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const f=[];for(const p of r.mergeFields){const m=Sc(e,p,t);if(!o.contains(m))throw new V(b.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Fg(f,m)||f.push(m)}l=new Qe(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new IS(new je(c),l,u)}class zo extends Gi{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zo}}class Gl extends Gi{_toFieldTransform(e){return new Xm(e.path,new Ni)}isEqual(e){return e instanceof Gl}}class Hl extends Gi{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new Oi(e.serializer,Gm(e.serializer,this.Fc));return new Xm(e.path,t)}isEqual(e){return e instanceof Hl&&this.Fc===e.Fc}}function wS(n,e,t,s){const i=n.Cc(1,e,t);Kl("Data must be an object, but it was:",i,s);const r=[],o=je.empty();pn(s,((l,u)=>{const f=Ql(e,l,t);u=ce(u);const p=i.yc(f);if(u instanceof zo)r.push(f);else{const m=Hi(u,p);m!=null&&(r.push(f),o.set(f,m))}}));const c=new Qe(r);return new Vg(o,c,i.fieldTransforms)}function AS(n,e,t,s,i,r){const o=n.Cc(1,e,t),c=[Sc(e,s,t)],l=[i];if(r.length%2!=0)throw new V(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<r.length;m+=2)c.push(Sc(e,r[m])),l.push(r[m+1]);const u=[],f=je.empty();for(let m=c.length-1;m>=0;--m)if(!Fg(u,c[m])){const w=c[m];let R=l[m];R=ce(R);const k=o.yc(w);if(R instanceof zo)u.push(w);else{const N=Hi(R,k);N!=null&&(u.push(w),f.set(w,N))}}const p=new Qe(u);return new Vg(f,p,o.fieldTransforms)}function CS(n,e,t,s=!1){return Hi(t,n.Cc(s?4:3,e))}function Hi(n,e){if(Lg(n=ce(n)))return Kl("Unsupported field value:",e,n),xg(n,e);if(n instanceof Gi)return(function(s,i){if(!Mg(i.Ac))throw i.Sc(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,i){const r=[];let o=0;for(const c of s){let l=Hi(c,i.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}})(n,e)}return(function(s,i){if((s=ce(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Gm(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=ae.fromDate(s);return{timestampValue:to(i.serializer,r)}}if(s instanceof ae){const r=new ae(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:to(i.serializer,r)}}if(s instanceof gt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Je)return{bytesValue:ig(i.serializer,s._byteString)};if(s instanceof de){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Sl(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof _t)return(function(o,c){return{mapValue:{fields:{[Nm]:{stringValue:km},[Jr]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return wl(c.serializer,u)}))}}}}}})(s,i);throw i.Sc(`Unsupported field value: ${Po(s)}`)})(n,e)}function xg(n,e){const t={};return Am(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pn(n,((s,i)=>{const r=Hi(i,e.mc(s));r!=null&&(t[s]=r)})),{mapValue:{fields:t}}}function Lg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof gt||n instanceof Je||n instanceof de||n instanceof Gi||n instanceof _t)}function Kl(n,e,t){if(!Lg(t)||!Tm(t)){const s=Po(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function Sc(n,e,t){if((e=ce(e))instanceof Wo)return e._internalPath;if(typeof e=="string")return Ql(n,e);throw oo("Field path arguments must be of type string or ",n,!1,void 0,t)}const SS=new RegExp("[~\\*/\\[\\]]");function Ql(n,e,t){if(e.search(SS)>=0)throw oo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Wo(...e.split("."))._internalPath}catch{throw oo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function oo(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new V(b.INVALID_ARGUMENT,c+n+l)}function Fg(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new de(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class RS extends Ug{data(){return super.data()}}function Yl(n,e){return typeof e=="string"?Ql(n,e):e instanceof Wo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xl{}class Jl extends Xl{}function i0(n,e,...t){let s=[];e instanceof Xl&&s.push(e),s=s.concat(t),(function(r){const o=r.filter((l=>l instanceof eu)).length,c=r.filter((l=>l instanceof Zl)).length;if(o>1||o>0&&c>0)throw new V(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const i of s)n=i._apply(n);return n}class Zl extends Jl{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Zl(e,t,s)}_apply(e){const t=this._parse(e);return qg(e._query,t),new xt(e.firestore,e.converter,gc(e._query,t))}_parse(e){const t=zl(e.firestore);return(function(r,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ff(p,f);const R=[];for(const k of p)R.push(df(l,r,k));m={arrayValue:{values:R}}}else m=df(l,r,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ff(p,f),m=CS(c,o,p,f==="in"||f==="not-in");return ye.create(u,f,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class eu extends Xl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new eu(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:at.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,r){let o=i;const c=r.getFlattenedFilters();for(const l of c)qg(o,l),o=gc(o,l)})(e._query,t),new xt(e.firestore,e.converter,gc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class tu extends Jl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new tu(e,t)}_apply(e){const t=(function(i,r,o){if(i.startAt!==null)throw new V(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new V(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Pi(r,o)})(e._query,this._field,this._direction);return new xt(e.firestore,e.converter,(function(i,r){const o=i.explicitOrderBy.concat([r]);return new ks(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(e._query,t))}}function r0(n,e="asc"){const t=e,s=Yl("orderBy",n);return tu._create(s,t)}class nu extends Jl{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new nu(e,t,s)}_apply(e){return new xt(e.firestore,e.converter,eo(e._query,this._limit,this._limitType))}}function o0(n){return Ow("limit",n),nu._create("limit",n,"F")}function df(n,e,t){if(typeof(t=ce(t))=="string"){if(t==="")throw new V(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Um(e)&&t.indexOf("/")!==-1)throw new V(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(ie.fromString(t));if(!x.isDocumentKey(s))throw new V(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Rd(n,new x(s))}if(t instanceof de)return Rd(n,t._key);throw new V(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Po(t)}.`)}function ff(n,e){if(!Array.isArray(n)||n.length===0)throw new V(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qg(n,e){const t=(function(i,r){for(const o of i)for(const c of o.getFlattenedFilters())if(r.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new V(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class bS{convertValue(e,t="none"){switch(an(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(on(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw L(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return pn(e,((i,r)=>{s[i]=this.convertValue(r,t)})),s}convertVectorValue(e){var s,i,r;const t=(r=(i=(s=e.fields)==null?void 0:s[Jr].arrayValue)==null?void 0:i.values)==null?void 0:r.map((o=>fe(o.doubleValue)));return new _t(t)}convertGeoPoint(e){return new gt(fe(e.latitude),fe(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Do(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Si(e));default:return null}}convertTimestamp(e){const t=rn(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ie.fromString(e);ee(ug(s),9688,{name:e});const i=new Ri(s.get(1),s.get(3)),r=new x(s.popFirst(5));return i.isEqual(t)||Dt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class ii{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bn extends Ug{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Rr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Yl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=bn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}bn._jsonSchemaVersion="firestore/documentSnapshot/1.0",bn._jsonSchema={type:Ee("string",bn._jsonSchemaVersion),bundleSource:Ee("string","DocumentSnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class Rr extends bn{data(e={}){return super.data(e)}}class Pn{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ii(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Rr(this._firestore,this._userDataWriter,s.key,s,new ii(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((c=>{const l=new Rr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ii(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const l=new Rr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ii(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:NS(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Pn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_l.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function NS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(n){n=et(n,de);const e=et(n.firestore,xn);return mS($o(e),n._key).then((t=>$g(e,n,t)))}Pn._jsonSchemaVersion="firestore/querySnapshot/1.0",Pn._jsonSchema={type:Ee("string",Pn._jsonSchemaVersion),bundleSource:Ee("string","QuerySnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class su extends bS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Je(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new de(this.firestore,null,t)}}function c0(n){n=et(n,xt);const e=et(n.firestore,xn),t=$o(e),s=new su(e);return Bg(n._query),gS(t,n._query).then((i=>new Pn(e,s,n,i)))}function l0(n,e,t){n=et(n,de);const s=et(n.firestore,xn),i=PS(n.converter,e,t);return jg(s,[TS(zl(s),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,pt.none())])}function u0(n,e,t,...s){n=et(n,de);const i=et(n.firestore,xn),r=zl(i);let o;return o=typeof(e=ce(e))=="string"||e instanceof Wo?AS(r,"updateDoc",n._key,e,t,s):wS(r,"updateDoc",n._key,e),jg(i,[o.toMutation(n._key,pt.exists(!0))])}function h0(n,...e){var l,u,f;n=ce(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||hf(e[s])||(t=e[s++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(hf(e[s])){const p=e[s];e[s]=(l=p.next)==null?void 0:l.bind(p),e[s+1]=(u=p.error)==null?void 0:u.bind(p),e[s+2]=(f=p.complete)==null?void 0:f.bind(p)}let r,o,c;if(n instanceof de)o=et(n.firestore,xn),c=Oo(n._key.path),r={next:p=>{e[s]&&e[s]($g(o,n,p))},error:e[s+1],complete:e[s+2]};else{const p=et(n,xt);o=et(p.firestore,xn),c=p._query;const m=new su(o);r={next:w=>{e[s]&&e[s](new Pn(o,m,p,w))},error:e[s+1],complete:e[s+2]},Bg(n._query)}return(function(m,w,R,k){const N=new $l(k),j=new Bl(w,N,R);return m.asyncQueue.enqueueAndForget((async()=>Ll(await ro(m),j))),()=>{N.Nu(),m.asyncQueue.enqueueAndForget((async()=>Fl(await ro(m),j)))}})($o(o),c,i,r)}function jg(n,e){return(function(s,i){const r=new Rt;return s.asyncQueue.enqueueAndForget((async()=>sS(await pS(s),i,r))),r.promise})($o(n),e)}function $g(n,e,t){const s=t.docs.get(e._key),i=new su(n);return new bn(n,i,e._key,s,new ii(t.hasPendingWrites,t.fromCache),e.converter)}function d0(){return new Gl("serverTimestamp")}function f0(n){return new Hl("increment",n)}(function(e,t=!0){(function(i){bs=i})(qn),ot(new tt("firestore",((s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),c=new xn(new Aw(s.getProvider("auth-internal")),new Rw(o,s.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new V(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ri(u.options.projectId,f)})(o,i),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),We(pd,md,e),We(pd,md,"esm2020")})();function Wg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kS=Wg,zg=new Bn("auth","Firebase",Wg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=new Mi("@firebase/auth");function DS(n,...e){ao.logLevel<=K.WARN&&ao.warn(`Auth (${qn}): ${n}`,...e)}function br(n,...e){ao.logLevel<=K.ERROR&&ao.error(`Auth (${qn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n,...e){throw iu(n,...e)}function yt(n,...e){return iu(n,...e)}function Gg(n,e,t){const s={...kS(),[e]:t};return new Bn("auth","Firebase",s).create(e,{appName:n.name})}function en(n){return Gg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iu(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return zg.create(n,...e)}function U(n,e,...t){if(!n)throw iu(e,...t)}function At(n){const e="INTERNAL ASSERTION FAILED: "+n;throw br(e),new Error(e)}function Mt(n,e){n||At(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function OS(){return pf()==="http:"||pf()==="https:"}function pf(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OS()||Kf()||"connection"in navigator)?navigator.onLine:!0}function MS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mt(t>e,"Short delay should be less than long delay!"),this.isMobile=Vc()||Qf()}get(){return VS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(n,e){Mt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],FS=new Ki(3e4,6e4);function Go(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Os(n,e,t,s,i={}){return Kg(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const c=As({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...r};return Oy()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&hn(n.emulatorConfig.host)&&(u.credentials="include"),Hg.fetch()(await Yg(n,n.config.apiHost,t,c),u)})}async function Kg(n,e,t){n._canInitEmulator=!1;const s={...xS,...e};try{const i=new US(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Er(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Er(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Er(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Er(n,"user-disabled",o);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Gg(n,f,u);Vt(n,f)}}catch(i){if(i instanceof ct)throw i;Vt(n,"network-request-failed",{message:String(i)})}}async function Qg(n,e,t,s,i={}){const r=await Os(n,e,t,s,i);return"mfaPendingCredential"in r&&Vt(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Yg(n,e,t,s){const i=`${e}${t}?${s}`,r=n,o=r.config.emulator?ru(n.config,i):`${n.config.apiScheme}://${i}`;return LS.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class US{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(yt(this.auth,"network-request-failed")),FS.get())})}}function Er(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=yt(n,e,s);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(n,e){return Os(n,"POST","/v1/accounts:delete",e)}async function co(n,e){return Os(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qS(n,e=!1){const t=ce(n),s=await t.getIdToken(e),i=ou(s);U(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:mi(Ua(i.auth_time)),issuedAtTime:mi(Ua(i.iat)),expirationTime:mi(Ua(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ua(n){return Number(n)*1e3}function ou(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return br("JWT malformed, contained fewer than 3 sections"),null;try{const i=Or(t);return i?JSON.parse(i):(br("Failed to decode base64 JWT payload"),null)}catch(i){return br("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function mf(n){const e=ou(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ct&&jS(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function jS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mi(this.lastLoginAt),this.creationTime=mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(n){var p;const e=n.auth,t=await n.getIdToken(),s=await Vi(n,co(e,{idToken:t}));U(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=(p=i.providerUserInfo)!=null&&p.length?Xg(i.providerUserInfo):[],o=zS(n.providerData,r),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new bc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,f)}async function WS(n){const e=ce(n);await lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zS(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Xg(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GS(n,e){const t=await Kg(n,{},async()=>{const s=As({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=await Yg(n,i,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:s};return n.emulatorConfig&&hn(n.emulatorConfig.host)&&(l.credentials="include"),Hg.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function HS(n,e){return Os(n,"POST","/v2/accounts:revokeToken",Go(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=mf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await GS(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new as;return s&&(U(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(U(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new as,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class it{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new $S(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Vi(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qS(this,e)}reload(){return WS(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new it({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await lo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(en(this.auth));const e=await this.getIdToken();return await Vi(this,BS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:w,providerData:R,stsTokenManager:k}=t;U(p&&k,e,"internal-error");const N=as.fromJSON(this.name,k);U(typeof p=="string",e,"internal-error"),$t(s,e.name),$t(i,e.name),U(typeof m=="boolean",e,"internal-error"),U(typeof w=="boolean",e,"internal-error"),$t(r,e.name),$t(o,e.name),$t(c,e.name),$t(l,e.name),$t(u,e.name),$t(f,e.name);const j=new it({uid:p,auth:e,email:i,emailVerified:m,displayName:s,isAnonymous:w,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:N,createdAt:u,lastLoginAt:f});return R&&Array.isArray(R)&&(j.providerData=R.map($=>({...$}))),l&&(j._redirectEventId=l),j}static async _fromIdTokenResponse(e,t,s=!1){const i=new as;i.updateFromServerResponse(t);const r=new it({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await lo(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];U(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Xg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),c=new as;c.updateFromIdToken(s);const l=new it({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new bc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Map;function Ct(n){Mt(n instanceof Function,"Expected a class definition");let e=gf.get(n);return e?(Mt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,gf.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Jg.type="NONE";const _f=Jg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(n,e,t){return`firebase:${n}:${e}:${t}`}class cs{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Pr(this.userKey,i.apiKey,r),this.fullPersistenceKey=Pr("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await co(this.auth,{idToken:e}).catch(()=>{});return t?it._fromGetAccountInfoResponse(this.auth,t,e):null}return it._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new cs(Ct(_f),e,s);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Ct(_f);const o=Pr(s,e.config.apiKey,e.name);let c=null;for(const u of t)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await co(e,{idToken:f}).catch(()=>{});if(!m)break;p=await it._fromGetAccountInfoResponse(e,m,f)}else p=it._fromJSON(e,f);u!==r&&(c=p),r=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new cs(r,e,s):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new cs(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(n_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(i_(e))return"Blackberry";if(r_(e))return"Webos";if(e_(e))return"Safari";if((e.includes("chrome/")||t_(e))&&!e.includes("edge/"))return"Chrome";if(s_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Zg(n=Me()){return/firefox\//i.test(n)}function e_(n=Me()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function t_(n=Me()){return/crios\//i.test(n)}function n_(n=Me()){return/iemobile/i.test(n)}function s_(n=Me()){return/android/i.test(n)}function i_(n=Me()){return/blackberry/i.test(n)}function r_(n=Me()){return/webos/i.test(n)}function au(n=Me()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function KS(n=Me()){var e;return au(n)&&!!((e=window.navigator)!=null&&e.standalone)}function QS(){return Vy()&&document.documentMode===10}function o_(n=Me()){return au(n)||s_(n)||r_(n)||i_(n)||/windows phone/i.test(n)||n_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(n,e=[]){let t;switch(n){case"Browser":t=yf(Me());break;case"Worker":t=`${yf(Me())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(n,e={}){return Os(n,"GET","/v2/passwordPolicy",Go(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=6;class ZS{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??JS,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ef(this),this.idTokenSubscription=new Ef(this),this.beforeStateQueue=new YS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ct(t)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await co(this,{idToken:e}),s=await it._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await lo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(en(this));const t=e?ce(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(en(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(en(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XS(this),t=new ZS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Bn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await HS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ct(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[Ct(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=a_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&DS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ho(n){return ce(n)}class Ef{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wy(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tR(n){cu=n}function nR(n){return cu.loadJS(n)}function sR(){return cu.gapiScript}function iR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(n,e){const t=dn(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(bt(r,e??{}))return i;Vt(i,"already-initialized")}return t.initialize({options:e})}function oR(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ct);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function aR(n,e,t){const s=Ho(n);U(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=c_(e),{host:o,port:c}=cR(e),l=c===null?"":`:${c}`,u={url:`${r}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){U(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),U(bt(u,s.config.emulator)&&bt(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,hn(o)?(Dc(`${r}//${o}${l}`),Oc("Auth",!0)):lR()}function c_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function cR(n){const e=c_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:If(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:If(o)}}}function If(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function lR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return At("not implemented")}_getIdTokenResponse(e){return At("not implemented")}_linkToIdToken(e,t){return At("not implemented")}_getReauthenticationResolver(e){return At("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(n,e){return Qg(n,"POST","/v1/accounts:signInWithIdp",Go(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR="http://localhost";class Ln extends l_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Vt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=t;if(!s||!i)return null;const o=new Ln(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ls(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ls(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ls(e,t)}buildRequest(){const e={requestUri:uR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=As(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends u_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Qi{constructor(){super("facebook.com")}static credential(e){return Ln._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ln._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return zt.credential(t,s)}catch{return null}}}zt.GOOGLE_SIGN_IN_METHOD="google.com";zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Qi{constructor(){super("github.com")}static credential(e){return Ln._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com";Gt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Qi{constructor(){super("twitter.com")}static credential(e,t){return Ln._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ht.credential(t,s)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(n,e){return Qg(n,"POST","/v1/accounts:signUp",Go(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await it._fromIdTokenResponse(e,s,i),o=vf(s);return new un({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=vf(s);return new un({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function vf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(n){var i;if(Xe(n.app))return Promise.reject(en(n));const e=Ho(n);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new un({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await hR(e,{returnSecureToken:!0}),s=await un._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends ct{constructor(e,t,s,i){super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,uo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new uo(e,t,s,i)}}function h_(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?uo._fromErrorAndOperation(n,r,e,s):r})}async function dR(n,e,t=!1){const s=await Vi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return un._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(n,e,t=!1){const{auth:s}=n;if(Xe(s.app))return Promise.reject(en(s));const i="reauthenticate";try{const r=await Vi(n,h_(s,i,e,n),t);U(r.idToken,s,"internal-error");const o=ou(r.idToken);U(o,s,"internal-error");const{sub:c}=o;return U(n.uid===c,s,"user-mismatch"),un._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Vt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pR(n,e,t=!1){if(Xe(n.app))return Promise.reject(en(n));const s="signIn",i=await h_(n,s,e),r=await un._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}function mR(n,e,t,s){return ce(n).onIdTokenChanged(e,t,s)}function gR(n,e,t){return ce(n).beforeAuthStateChanged(e,t)}const ho="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ho,"1"),this.storage.removeItem(ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=1e3,yR=10;class f_ extends d_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=o_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);QS()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yR):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},_R)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}f_.type="LOCAL";const ER=f_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_ extends d_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}p_.type="SESSION";const m_=p_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Ko(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(o).map(async u=>u(t.origin,r)),l=await IR(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ko.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const u=lu("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(m.data.response);break;default:clearTimeout(f),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return window}function TR(n){Et().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(){return typeof Et().WorkerGlobalScope<"u"&&typeof Et().importScripts=="function"}async function wR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function CR(){return g_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="firebaseLocalStorageDb",SR=1,fo="firebaseLocalStorage",y_="fbase_key";class Yi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qo(n,e){return n.transaction([fo],e?"readwrite":"readonly").objectStore(fo)}function RR(){const n=indexedDB.deleteDatabase(__);return new Yi(n).toPromise()}function Pc(){const n=indexedDB.open(__,SR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(fo,{keyPath:y_})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(fo)?e(s):(s.close(),await RR(),e(await Pc()))})})}async function Tf(n,e,t){const s=Qo(n,!0).put({[y_]:e,value:t});return new Yi(s).toPromise()}async function bR(n,e){const t=Qo(n,!1).get(e),s=await new Yi(t).toPromise();return s===void 0?null:s.value}function wf(n,e){const t=Qo(n,!0).delete(e);return new Yi(t).toPromise()}const PR=800,NR=3;class E_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>NR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return g_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ko._getInstance(CR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await wR(),!this.activeServiceWorker)return;this.sender=new vR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pc();return await Tf(e,ho,"1"),await wf(e,ho),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Tf(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>bR(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Qo(i,!1).getAll();return new Yi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}E_.type="LOCAL";const kR=E_;new Ki(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(n,e){return e?Ct(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu extends l_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ls(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function OR(n){return pR(n.auth,new uu(n),n.bypassAuthState)}function VR(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),fR(t,new uu(n),n.bypassAuthState)}async function MR(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),dR(t,new uu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OR;case"linkViaPopup":case"linkViaRedirect":return MR;case"reauthViaPopup":case"reauthViaRedirect":return VR;default:Vt(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=new Ki(2e3,1e4);class ns extends I_{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=lu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xR.get())};e()}}ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="pendingRedirect",Nr=new Map;class FR extends I_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Nr.get(this.auth._key());if(!e){try{const s=await UR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Nr.set(this.auth._key(),e)}return this.bypassAuthState||Nr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UR(n,e){const t=jR(e),s=qR(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function BR(n,e){Nr.set(n._key(),e)}function qR(n){return Ct(n._redirectPersistence)}function jR(n){return Pr(LR,n.config.apiKey,n.name)}async function $R(n,e,t=!1){if(Xe(n.app))return Promise.reject(en(n));const s=Ho(n),i=DR(s,e),o=await new FR(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=600*1e3;class zR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!v_(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(yt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Af(e))}saveEventToCache(e){this.cachedEventUids.add(Af(e)),this.lastProcessedEventTime=Date.now()}}function Af(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function v_({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return v_(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(n,e={}){return Os(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QR=/^https?/;async function YR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await HR(n);for(const t of e)try{if(XR(t))return}catch{}Vt(n,"unauthorized-domain")}function XR(n){const e=Rc(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!QR.test(t))return!1;if(KR.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=new Ki(3e4,6e4);function Cf(){const n=Et().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ZR(n){return new Promise((e,t)=>{var i,r,o;function s(){Cf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cf(),t(yt(n,"network-request-failed"))},timeout:JR.get()})}if((r=(i=Et().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=Et().gapi)!=null&&o.load)s();else{const c=iR("iframefcb");return Et()[c]=()=>{gapi.load?s():t(yt(n,"network-request-failed"))},nR(`${sR()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw kr=null,e})}let kr=null;function eb(n){return kr=kr||ZR(n),kr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=new Ki(5e3,15e3),nb="__/auth/iframe",sb="emulator/auth/iframe",ib={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ob(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ru(e,sb):`https://${n.config.authDomain}/${nb}`,s={apiKey:e.apiKey,appName:n.name,v:qn},i=rb.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${As(s).slice(1)}`}async function ab(n){const e=await eb(n),t=Et().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:ob(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ib,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=yt(n,"network-request-failed"),c=Et().setTimeout(()=>{r(o)},tb.get());function l(){Et().clearTimeout(c),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lb=500,ub=600,hb="_blank",db="http://localhost";class Sf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fb(n,e,t,s=lb,i=ub){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l={...cb,width:s.toString(),height:i.toString(),top:r,left:o},u=Me().toLowerCase();t&&(c=t_(u)?hb:t),Zg(u)&&(e=e||db,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[w,R])=>`${m}${w}=${R},`,"");if(KS(u)&&c!=="_self")return pb(e||"",c),new Sf(null);const p=window.open(e||"",c,f);U(p,n,"popup-blocked");try{p.focus()}catch{}return new Sf(p)}function pb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb="__/auth/handler",gb="emulator/auth/handler",_b=encodeURIComponent("fac");async function Rf(n,e,t,s,i,r){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:qn,eventId:i};if(e instanceof u_){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Vr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Qi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),u=l?`#${_b}=${encodeURIComponent(l)}`:"";return`${yb(n)}?${As(c).slice(1)}${u}`}function yb({config:n}){return n.emulator?ru(n,gb):`https://${n.authDomain}/${mb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="webStorageSupport";class Eb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=m_,this._completeRedirectFn=$R,this._overrideRedirectResult=BR}async _openPopup(e,t,s,i){var o;Mt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Rf(e,t,s,Rc(),i);return fb(e,r,lu())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Rf(e,t,s,Rc(),i);return TR(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Mt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await ab(e),s=new zR(e);return t.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ba,{type:Ba},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[Ba];r!==void 0&&t(!!r),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=YR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return o_()||e_()||au()}}const Ib=Eb;var bf="@firebase/auth",Pf="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wb(n){ot(new tt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:a_(n)},u=new eR(s,i,r,l);return oR(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ot(new tt("auth-internal",e=>{const t=Ho(e.getProvider("auth").getImmediate());return(s=>new vb(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(bf,Pf,Tb(n)),We(bf,Pf,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=300,Cb=Gf("authIdTokenMaxAge")||Ab;let Nf=null;const Sb=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Cb)return;const i=t==null?void 0:t.token;Nf!==i&&(Nf=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function m0(n=yo()){const e=dn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=rR(n,{popupRedirectResolver:Ib,persistence:[kR,ER,m_]}),s=Gf("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Sb(r.toString());gR(t,o,()=>o(t.currentUser)),mR(t,c=>o(c))}}const i=$f("auth");return i&&aR(t,`http://${i}`),t}function Rb(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}tR({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=yt("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",Rb().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wb("Browser");const T_="@firebase/installations",hu="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=1e4,A_=`w:${hu}`,C_="FIS_v2",bb="https://firebaseinstallations.googleapis.com/v1",Pb=3600*1e3,Nb="installations",kb="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Fn=new Bn(Nb,kb,Db);function S_(n){return n instanceof ct&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_({projectId:n}){return`${bb}/projects/${n}/installations`}function b_(n){return{token:n.token,requestStatus:2,expiresIn:Vb(n.expiresIn),creationTime:Date.now()}}async function P_(n,e){const s=(await e.json()).error;return Fn.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function N_({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Ob(n,{refreshToken:e}){const t=N_(n);return t.append("Authorization",Mb(e)),t}async function k_(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Vb(n){return Number(n.replace("s","000"))}function Mb(n){return`${C_} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xb({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=R_(n),i=N_(n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:t,authVersion:C_,appId:n.appId,sdkVersion:A_},c={method:"POST",headers:i,body:JSON.stringify(o)},l=await k_(()=>fetch(s,c));if(l.ok){const u=await l.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:b_(u.authToken)}}else throw await P_("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=/^[cdef][\w-]{21}$/,Nc="";function Ub(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Bb(n);return Fb.test(t)?t:Nc}catch{return Nc}}function Bb(n){return Lb(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=new Map;function V_(n,e){const t=Yo(n);M_(t,e),qb(t,e)}function M_(n,e){const t=O_.get(n);if(t)for(const s of t)s(e)}function qb(n,e){const t=jb();t&&t.postMessage({key:n,fid:e}),$b()}let Rn=null;function jb(){return!Rn&&"BroadcastChannel"in self&&(Rn=new BroadcastChannel("[Firebase] FID Change"),Rn.onmessage=n=>{M_(n.data.key,n.data.fid)}),Rn}function $b(){O_.size===0&&Rn&&(Rn.close(),Rn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="firebase-installations-database",zb=1,Un="firebase-installations-store";let qa=null;function du(){return qa||(qa=tp(Wb,zb,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Un)}}})),qa}async function po(n,e){const t=Yo(n),i=(await du()).transaction(Un,"readwrite"),r=i.objectStore(Un),o=await r.get(t);return await r.put(e,t),await i.done,(!o||o.fid!==e.fid)&&V_(n,e.fid),e}async function x_(n){const e=Yo(n),s=(await du()).transaction(Un,"readwrite");await s.objectStore(Un).delete(e),await s.done}async function Xo(n,e){const t=Yo(n),i=(await du()).transaction(Un,"readwrite"),r=i.objectStore(Un),o=await r.get(t),c=e(o);return c===void 0?await r.delete(t):await r.put(c,t),await i.done,c&&(!o||o.fid!==c.fid)&&V_(n,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fu(n){let e;const t=await Xo(n.appConfig,s=>{const i=Gb(s),r=Hb(n,i);return e=r.registrationPromise,r.installationEntry});return t.fid===Nc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Gb(n){const e=n||{fid:Ub(),registrationStatus:0};return L_(e)}function Hb(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Fn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Kb(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Qb(n)}:{installationEntry:e}}async function Kb(n,e){try{const t=await xb(n,e);return po(n.appConfig,t)}catch(t){throw S_(t)&&t.customData.serverCode===409?await x_(n.appConfig):await po(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Qb(n){let e=await kf(n.appConfig);for(;e.registrationStatus===1;)await D_(100),e=await kf(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await fu(n);return s||t}return e}function kf(n){return Xo(n,e=>{if(!e)throw Fn.create("installation-not-found");return L_(e)})}function L_(n){return Yb(n)?{fid:n.fid,registrationStatus:0}:n}function Yb(n){return n.registrationStatus===1&&n.registrationTime+w_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xb({appConfig:n,heartbeatServiceProvider:e},t){const s=Jb(n,t),i=Ob(n,t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:A_,appId:n.appId}},c={method:"POST",headers:i,body:JSON.stringify(o)},l=await k_(()=>fetch(s,c));if(l.ok){const u=await l.json();return b_(u)}else throw await P_("Generate Auth Token",l)}function Jb(n,{fid:e}){return`${R_(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pu(n,e=!1){let t;const s=await Xo(n.appConfig,r=>{if(!F_(r))throw Fn.create("not-registered");const o=r.authToken;if(!e&&tP(o))return r;if(o.requestStatus===1)return t=Zb(n,e),r;{if(!navigator.onLine)throw Fn.create("app-offline");const c=sP(r);return t=eP(n,c),c}});return t?await t:s.authToken}async function Zb(n,e){let t=await Df(n.appConfig);for(;t.authToken.requestStatus===1;)await D_(100),t=await Df(n.appConfig);const s=t.authToken;return s.requestStatus===0?pu(n,e):s}function Df(n){return Xo(n,e=>{if(!F_(e))throw Fn.create("not-registered");const t=e.authToken;return iP(t)?{...e,authToken:{requestStatus:0}}:e})}async function eP(n,e){try{const t=await Xb(n,e),s={...e,authToken:t};return await po(n.appConfig,s),t}catch(t){if(S_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await x_(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await po(n.appConfig,s)}throw t}}function F_(n){return n!==void 0&&n.registrationStatus===2}function tP(n){return n.requestStatus===2&&!nP(n)}function nP(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Pb}function sP(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function iP(n){return n.requestStatus===1&&n.requestTime+w_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rP(n){const e=n,{installationEntry:t,registrationPromise:s}=await fu(e);return s?s.catch(console.error):pu(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oP(n,e=!1){const t=n;return await aP(t),(await pu(t,e)).token}async function aP(n){const{registrationPromise:e}=await fu(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(n){if(!n||!n.options)throw ja("App Configuration");if(!n.name)throw ja("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ja(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ja(n){return Fn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="installations",lP="installations-internal",uP=n=>{const e=n.getProvider("app").getImmediate(),t=cP(e),s=dn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},hP=n=>{const e=n.getProvider("app").getImmediate(),t=dn(e,U_).getImmediate();return{getId:()=>rP(t),getToken:i=>oP(t,i)}};function dP(){ot(new tt(U_,uP,"PUBLIC")),ot(new tt(lP,hP,"PRIVATE"))}dP();We(T_,hu);We(T_,hu,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="analytics",fP="firebase_id",pP="origin",mP=60*1e3,gP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",mu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=new Mi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ye=new Bn("analytics","Analytics",_P);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(n){if(!n.startsWith(mu)){const e=Ye.create("invalid-gtag-resource",{gtagURL:n});return Ue.warn(e.message),""}return n}function B_(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function EP(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function IP(n,e){const t=EP("firebase-js-sdk-policy",{createScriptURL:yP}),s=document.createElement("script"),i=`${mu}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function vP(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function TP(n,e,t,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await B_(t)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(c){Ue.error(c)}n("config",i,r)}async function wP(n,e,t,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const c=await B_(t);for(const l of o){const u=c.find(p=>p.measurementId===l),f=u&&e[u.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",s,i||{})}catch(r){Ue.error(r)}}function AP(n,e,t,s){async function i(r,...o){try{if(r==="event"){const[c,l]=o;await wP(n,e,t,c,l)}else if(r==="config"){const[c,l]=o;await TP(n,e,t,s,c,l)}else if(r==="consent"){const[c,l]=o;n("consent",c,l)}else if(r==="get"){const[c,l,u]=o;n("get",c,l,u)}else if(r==="set"){const[c]=o;n("set",c)}else n(r,...o)}catch(c){Ue.error(c)}}return i}function CP(n,e,t,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=AP(r,n,e,t),{gtagCore:r,wrappedGtag:window[i]}}function SP(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(mu)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=30,bP=1e3;class PP{constructor(e={},t=bP){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const q_=new PP;function NP(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function kP(n){var o;const{appId:e,apiKey:t}=n,s={method:"GET",headers:NP(t)},i=gP.replace("{app-id}",e),r=await fetch(i,s);if(r.status!==200&&r.status!==304){let c="";try{const l=await r.json();(o=l.error)!=null&&o.message&&(c=l.error.message)}catch{}throw Ye.create("config-fetch-failed",{httpStatus:r.status,responseMessage:c})}return r.json()}async function DP(n,e=q_,t){const{appId:s,apiKey:i,measurementId:r}=n.options;if(!s)throw Ye.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Ye.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new MP;return setTimeout(async()=>{c.abort()},mP),j_({appId:s,apiKey:i,measurementId:r},o,c,e)}async function j_(n,{throttleEndTimeMillis:e,backoffCount:t},s,i=q_){var c;const{appId:r,measurementId:o}=n;try{await OP(s,e)}catch(l){if(o)return Ue.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:r,measurementId:o};throw l}try{const l=await kP(n);return i.deleteThrottleMetadata(r),l}catch(l){const u=l;if(!VP(u)){if(i.deleteThrottleMetadata(r),o)return Ue.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:r,measurementId:o};throw l}const f=Number((c=u==null?void 0:u.customData)==null?void 0:c.httpStatus)===503?vh(t,i.intervalMillis,RP):vh(t,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return i.setThrottleMetadata(r,p),Ue.debug(`Calling attemptFetch again in ${f} millis`),j_(n,p,s,i)}}function OP(n,e){return new Promise((t,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(r),s(Ye.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function VP(n){if(!(n instanceof ct)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class MP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function xP(n,e,t,s,i){if(i&&i.global){n("event",t,s);return}else{const r=await e,o={...s,send_to:r};n("event",t,o)}}async function LP(n,e,t,s){if(s&&s.global){const i={};for(const r of Object.keys(t))i[`user_properties.${r}`]=t[r];return n("set",i),Promise.resolve()}else{const i=await e;n("config",i,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FP(){if(Yf())try{await Xf()}catch(n){return Ue.warn(Ye.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ue.warn(Ye.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function UP(n,e,t,s,i,r,o){const c=DP(n);c.then(m=>{t[m.measurementId]=m.appId,n.options.measurementId&&m.measurementId!==n.options.measurementId&&Ue.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ue.error(m)),e.push(c);const l=FP().then(m=>{if(m)return s.getId()}),[u,f]=await Promise.all([c,l]);SP(r)||IP(r,u.measurementId),i("js",new Date);const p=(o==null?void 0:o.config)??{};return p[pP]="firebase",p.update=!0,f!=null&&(p[fP]=f),i("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e){this.app=e}_delete(){return delete us[this.app.options.appId],Promise.resolve()}}let us={},Of=[];const Vf={};let $a="dataLayer",qP="gtag",Mf,gu,xf=!1;function jP(){const n=[];if(Kf()&&n.push("This is a browser extension environment."),Ly()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,i)=>`(${i+1}) ${s}`).join(" "),t=Ye.create("invalid-analytics-context",{errorInfo:e});Ue.warn(t.message)}}function $P(n,e,t){jP();const s=n.options.appId;if(!s)throw Ye.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ue.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ye.create("no-api-key");if(us[s]!=null)throw Ye.create("already-exists",{id:s});if(!xf){vP($a);const{wrappedGtag:r,gtagCore:o}=CP(us,Of,Vf,$a,qP);gu=r,Mf=o,xf=!0}return us[s]=UP(n,Of,Vf,e,Mf,$a,t),new BP(n)}function g0(n=yo()){n=ce(n);const e=dn(n,mo);return e.isInitialized()?e.getImmediate():WP(n)}function WP(n,e={}){const t=dn(n,mo);if(t.isInitialized()){const i=t.getImmediate();if(bt(e,t.getOptions()))return i;throw Ye.create("already-initialized")}return t.initialize({options:e})}function zP(n,e,t){n=ce(n),LP(gu,us[n.app.options.appId],e,t).catch(s=>Ue.error(s))}function GP(n,e,t,s){n=ce(n),xP(gu,us[n.app.options.appId],e,t,s).catch(i=>Ue.error(i))}const Lf="@firebase/analytics",Ff="0.10.19";function HP(){ot(new tt(mo,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return $P(s,i,t)},"PUBLIC")),ot(new tt("analytics-internal",n,"PRIVATE")),We(Lf,Ff),We(Lf,Ff,"esm2020");function n(e){try{const t=e.getProvider(mo).getImmediate();return{logEvent:(s,i,r)=>GP(t,s,i,r),setUserProperties:(s,i)=>zP(t,s,i)}}catch(t){throw Ye.create("interop-component-reg-failed",{reason:t})}}}HP();export{m0 as a,g0 as b,ZP as c,XP as d,YP as e,t0 as f,s0 as g,r0 as h,QE as i,c0 as j,h0 as k,o0 as l,n0 as m,a0 as n,JP as o,l0 as p,i0 as q,QP as r,lw as s,d0 as t,f0 as u,u0 as v,p0 as w};
