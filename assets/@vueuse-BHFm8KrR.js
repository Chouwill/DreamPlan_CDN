import{s as G,e as q,r as z,g as K,f as k,i as m,w as y,u as X,j as B,k as Y,n as Z,l as ee,b as H}from"./@vue-7Ha3uCVu.js";var te=Object.defineProperty,ne=Object.defineProperties,re=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,se=(e,t)=>{for(var n in t||(t={}))oe.call(t,n)&&R(e,n,t[n]);if(C)for(var n of C(t))ie.call(t,n)&&R(e,n,t[n]);return e},ue=(e,t)=>ne(e,re(t));function Ce(e,t){var n;const r=G();return q(()=>{r.value=e()},ue(se({},t),{flush:(n=void 0)!=null?n:"sync"})),z(r)}var W;const S=typeof window<"u",ae=e=>typeof e<"u",j=e=>typeof e=="function",le=e=>typeof e=="string",E=()=>{},ce=S&&((W=window==null?void 0:window.navigator)==null?void 0:W.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function h(e){return typeof e=="function"?e():X(e)}function J(e,t){function n(...r){return new Promise((o,s)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(o).catch(s)})}return n}function fe(e,t={}){let n,r,o=E;const s=a=>{clearTimeout(a),o(),o=E};return a=>{const l=h(e),c=h(t.maxWait);return n&&s(n),l<=0||c!==void 0&&c<=0?(r&&(s(r),r=null),Promise.resolve(a())):new Promise((f,p)=>{o=t.rejectOnCancel?p:f,c&&!r&&(r=setTimeout(()=>{n&&s(n),r=null,f(a())},c)),n=setTimeout(()=>{r&&s(r),r=null,f(a())},l)})}}function de(e,t=!0,n=!0,r=!1){let o=0,s,i=!0,a=E,l;const c=()=>{s&&(clearTimeout(s),s=void 0,a(),a=E)};return p=>{const u=h(e),d=Date.now()-o,v=()=>l=p();return c(),u<=0?(o=Date.now(),v()):(d>u&&(n||!i)?(o=Date.now(),v()):t&&(l=new Promise((b,O)=>{a=r?O:b,s=setTimeout(()=>{o=Date.now(),i=!0,b(v()),c()},Math.max(0,u-d))})),!n&&!s&&(s=setTimeout(()=>i=!0,u)),i=!1,l)}}function ve(e){return e}function pe(e,t){let n,r,o;const s=m(!0),i=()=>{s.value=!0,o()};y(e,i,{flush:"sync"});const a=j(t)?t:t.get,l=j(t)?void 0:t.set,c=ee((f,p)=>(r=f,o=p,{get(){return s.value&&(n=a(),s.value=!1),r(),n},set(u){l==null||l(u)}}));return Object.isExtensible(c)&&(c.trigger=i),c}function T(e){return K()?(k(e),!0):!1}function me(e,t=200,n={}){return J(fe(t,n),e)}function Re(e,t=200,n={}){const r=m(e.value),o=me(()=>{r.value=e.value},t,n);return y(e,()=>o()),r}function We(e,t=200,n=!1,r=!0,o=!1){return J(de(t,n,r,o),e)}function x(e,t=!0){B()?Y(e):t?e():Z(e)}function Ae(e,t,n={}){const{immediate:r=!0}=n,o=m(!1);let s=null;function i(){s&&(clearTimeout(s),s=null)}function a(){o.value=!1,i()}function l(...c){i(),o.value=!0,s=setTimeout(()=>{o.value=!1,s=null,e(...c)},h(t))}return r&&(o.value=!0,S&&l()),T(a),{isPending:z(o),start:l,stop:a}}function g(e){var t;const n=h(e);return(t=n==null?void 0:n.$el)!=null?t:n}const w=S?window:void 0,Oe=S?window.document:void 0;function _(...e){let t,n,r,o;if(le(e[0])||Array.isArray(e[0])?([n,r,o]=e,t=w):[t,n,r,o]=e,!t)return E;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],i=()=>{s.forEach(f=>f()),s.length=0},a=(f,p,u,d)=>(f.addEventListener(p,u,d),()=>f.removeEventListener(p,u,d)),l=y(()=>[g(t),h(o)],([f,p])=>{i(),f&&s.push(...n.flatMap(u=>r.map(d=>a(f,u,d,p))))},{immediate:!0,flush:"post"}),c=()=>{l(),i()};return T(c),c}let A=!1;function Fe(e,t,n={}){const{window:r=w,ignore:o=[],capture:s=!0,detectIframe:i=!1}=n;if(!r)return;ce&&!A&&(A=!0,Array.from(r.document.body.children).forEach(u=>u.addEventListener("click",E)));let a=!0;const l=u=>o.some(d=>{if(typeof d=="string")return Array.from(r.document.querySelectorAll(d)).some(v=>v===u.target||u.composedPath().includes(v));{const v=g(d);return v&&(u.target===v||u.composedPath().includes(v))}}),f=[_(r,"click",u=>{const d=g(e);if(!(!d||d===u.target||u.composedPath().includes(d))){if(u.detail===0&&(a=!l(u)),!a){a=!0;return}t(u)}},{passive:!0,capture:s}),_(r,"pointerdown",u=>{const d=g(e);d&&(a=!u.composedPath().includes(d)&&!l(u))},{passive:!0}),i&&_(r,"blur",u=>{var d;const v=g(e);((d=r.document.activeElement)==null?void 0:d.tagName)==="IFRAME"&&!(v!=null&&v.contains(r.document.activeElement))&&t(u)})].filter(Boolean);return()=>f.forEach(u=>u())}function De(e={}){var t;const{window:n=w}=e,r=(t=e.document)!=null?t:n==null?void 0:n.document,o=pe(()=>null,()=>r==null?void 0:r.activeElement);return n&&(_(n,"blur",s=>{s.relatedTarget===null&&o.trigger()},!0),_(n,"focus",o.trigger,!0)),o}function U(e,t=!1){const n=m(),r=()=>n.value=!!e();return r(),x(r,t),n}function _e(e){return JSON.parse(JSON.stringify(e))}const F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D="__vueuse_ssr_handlers__";F[D]=F[D]||{};function Ne(e,t,{window:n=w,initialValue:r=""}={}){const o=m(r),s=H(()=>{var i;return g(t)||((i=n==null?void 0:n.document)==null?void 0:i.documentElement)});return y([s,()=>h(e)],([i,a])=>{var l;if(i&&n){const c=(l=n.getComputedStyle(i).getPropertyValue(a))==null?void 0:l.trim();o.value=c||r}},{immediate:!0}),y(o,i=>{var a;(a=s.value)!=null&&a.style&&s.value.style.setProperty(h(e),i)}),o}function Ve({document:e=Oe}={}){if(!e)return m("visible");const t=m(e.visibilityState);return _(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var N=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,ye=(e,t)=>{var n={};for(var r in e)be.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&N)for(var r of N(e))t.indexOf(r)<0&&ge.call(e,r)&&(n[r]=e[r]);return n};function he(e,t,n={}){const r=n,{window:o=w}=r,s=ye(r,["window"]);let i;const a=U(()=>o&&"ResizeObserver"in o),l=()=>{i&&(i.disconnect(),i=void 0)},c=y(()=>g(e),p=>{l(),a.value&&o&&p&&(i=new ResizeObserver(t),i.observe(p,s))},{immediate:!0,flush:"post"}),f=()=>{l(),c()};return T(f),{isSupported:a,stop:f}}function Me(e,t={}){const{reset:n=!0,windowResize:r=!0,windowScroll:o=!0,immediate:s=!0}=t,i=m(0),a=m(0),l=m(0),c=m(0),f=m(0),p=m(0),u=m(0),d=m(0);function v(){const b=g(e);if(!b){n&&(i.value=0,a.value=0,l.value=0,c.value=0,f.value=0,p.value=0,u.value=0,d.value=0);return}const O=b.getBoundingClientRect();i.value=O.height,a.value=O.bottom,l.value=O.left,c.value=O.right,f.value=O.top,p.value=O.width,u.value=O.x,d.value=O.y}return he(e,v),y(()=>g(e),b=>!b&&v()),o&&_("scroll",v,{capture:!0,passive:!0}),r&&_("resize",v,{passive:!0}),x(()=>{s&&v()}),{height:i,bottom:a,left:l,right:c,top:f,width:p,x:u,y:d,update:v}}var V=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,Ee=(e,t)=>{var n={};for(var r in e)we.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&V)for(var r of V(e))t.indexOf(r)<0&&Pe.call(e,r)&&(n[r]=e[r]);return n};function Qe(e,t,n={}){const r=n,{window:o=w}=r,s=Ee(r,["window"]);let i;const a=U(()=>o&&"MutationObserver"in o),l=()=>{i&&(i.disconnect(),i=void 0)},c=y(()=>g(e),p=>{l(),a.value&&o&&p&&(i=new MutationObserver(t),i.observe(p,s))},{immediate:!0}),f=()=>{l(),c()};return T(f),{isSupported:a,stop:f}}var M;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(M||(M={}));var Ie=Object.defineProperty,Q=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,L=(e,t,n)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$e=(e,t)=>{for(var n in t||(t={}))Se.call(t,n)&&L(e,n,t[n]);if(Q)for(var n of Q(t))Te.call(t,n)&&L(e,n,t[n]);return e};const je={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};$e({linear:ve},je);function Le(e,t,n,r={}){var o,s,i;const{clone:a=!1,passive:l=!1,eventName:c,deep:f=!1,defaultValue:p}=r,u=B(),d=n||(u==null?void 0:u.emit)||((o=u==null?void 0:u.$emit)==null?void 0:o.bind(u))||((i=(s=u==null?void 0:u.proxy)==null?void 0:s.$emit)==null?void 0:i.bind(u==null?void 0:u.proxy));let v=c;t||(t="modelValue"),v=c||v||`update:${t.toString()}`;const b=P=>a?j(a)?a(P):_e(P):P,O=()=>ae(e[t])?b(e[t]):p;if(l){const P=O(),$=m(P);return y(()=>e[t],I=>$.value=b(I)),y($,I=>{(I!==e[t]||f)&&d(v,I)},{deep:f}),$}else return H({get(){return O()},set(P){d(v,P)}})}function ze({window:e=w}={}){if(!e)return m(!1);const t=m(e.document.hasFocus());return _(e,"blur",()=>{t.value=!1}),_(e,"focus",()=>{t.value=!0}),t}function Be(e={}){const{window:t=w,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:o=!0,includeScrollbar:s=!0}=e,i=m(n),a=m(r),l=()=>{t&&(s?(i.value=t.innerWidth,a.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,a.value=t.document.documentElement.clientHeight))};return l(),x(l),_("resize",l,{passive:!0}),o&&_("orientationchange",l,{passive:!0}),{width:i,height:a}}export{_ as a,Be as b,Me as c,he as d,We as e,Ne as f,Ae as g,ce as h,S as i,Qe as j,Ve as k,ze as l,Ce as m,Le as n,Fe as o,De as p,Re as r,T as t,g as u};
