import{an as D,i as H,am as M,aw as $,D as G,w as T,_ as tt,E as x,ax as B,ae as et,g as st,f as nt,n as ot,$ as ct,b as rt}from"./@vue-7Ha3uCVu.js";var ut=!1;/*!
 * pinia v2.2.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let J;const E=t=>J=t,K=Symbol();function k(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var p;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(p||(p={}));function St(){const t=D(!0),c=t.run(()=>H({}));let s=[],e=[];const r=M({install(u){E(r),r._a=u,u.provide(K,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!ut?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:c});return r}const q=()=>{};function V(t,c,s,e=q){t.push(c);const r=()=>{const u=t.indexOf(c);u>-1&&(t.splice(u,1),e())};return!s&&st()&&nt(r),r}function P(t,...c){t.slice().forEach(s=>{s(...c)})}const at=t=>t(),A=Symbol(),I=Symbol();function L(t,c){t instanceof Map&&c instanceof Map?c.forEach((s,e)=>t.set(e,s)):t instanceof Set&&c instanceof Set&&c.forEach(t.add,t);for(const s in c){if(!c.hasOwnProperty(s))continue;const e=c[s],r=t[s];k(r)&&k(e)&&t.hasOwnProperty(s)&&!x(e)&&!B(e)?t[s]=L(r,e):t[s]=e}return t}const ft=Symbol();function it(t){return!k(t)||!t.hasOwnProperty(ft)}const{assign:y}=Object;function lt(t){return!!(x(t)&&t.effect)}function ht(t,c,s,e){const{state:r,actions:u,getters:f}=c,a=s.state.value[t];let w;function b(){a||(s.state.value[t]=r?r():{});const S=ct(s.state.value[t]);return y(S,u,Object.keys(f||{}).reduce((v,_)=>(v[_]=M(rt(()=>{E(s);const d=s._s.get(t);return f[_].call(d,d)})),v),{}))}return w=z(t,b,c,s,e,!0),w}function z(t,c,s={},e,r,u){let f;const a=y({actions:{}},s),w={deep:!0};let b,S,v=[],_=[],d;const m=e.state.value[t];!u&&!m&&(e.state.value[t]={}),H({});let W;function N(o){let n;b=S=!1,typeof o=="function"?(o(e.state.value[t]),n={type:p.patchFunction,storeId:t,events:d}):(L(e.state.value[t],o),n={type:p.patchObject,payload:o,storeId:t,events:d});const i=W=Symbol();ot().then(()=>{W===i&&(b=!0)}),S=!0,P(v,n,e.state.value[t])}const Q=u?function(){const{state:n}=s,i=n?n():{};this.$patch(j=>{y(j,i)})}:q;function U(){f.stop(),v=[],_=[],e._s.delete(t)}const F=(o,n="")=>{if(A in o)return o[I]=n,o;const i=function(){E(e);const j=Array.from(arguments),O=[],R=[];function Y(l){O.push(l)}function Z(l){R.push(l)}P(_,{args:j,name:i[I],store:h,after:Y,onError:Z});let g;try{g=o.apply(this&&this.$id===t?this:h,j)}catch(l){throw P(R,l),l}return g instanceof Promise?g.then(l=>(P(O,l),l)).catch(l=>(P(R,l),Promise.reject(l))):(P(O,g),g)};return i[A]=!0,i[I]=n,i},X={_p:e,$id:t,$onAction:V.bind(null,_),$patch:N,$reset:Q,$subscribe(o,n={}){const i=V(v,o,n.detached,()=>j()),j=f.run(()=>T(()=>e.state.value[t],O=>{(n.flush==="sync"?S:b)&&o({storeId:t,type:p.direct,events:d},O)},y({},w,n)));return i},$dispose:U},h=tt(X);e._s.set(t,h);const C=(e._a&&e._a.runWithContext||at)(()=>e._e.run(()=>(f=D()).run(()=>c({action:F}))));for(const o in C){const n=C[o];if(x(n)&&!lt(n)||B(n))u||(m&&it(n)&&(x(n)?n.value=m[o]:L(n,m[o])),e.state.value[t][o]=n);else if(typeof n=="function"){const i=F(n,o);C[o]=i,a.actions[o]=n}}return y(h,C),y(et(h),C),Object.defineProperty(h,"$state",{get:()=>e.state.value[t],set:o=>{N(n=>{y(n,o)})}}),e._p.forEach(o=>{y(h,f.run(()=>o({store:h,app:e._a,pinia:e,options:a})))}),m&&u&&s.hydrate&&s.hydrate(h.$state,m),b=!0,S=!0,h}function vt(t,c,s){let e,r;const u=typeof c=="function";e=t,r=u?s:c;function f(a,w){const b=$();return a=a||(b?G(K,null):null),a&&E(a),a=J,a._s.has(e)||(u?z(e,c,r,a):ht(e,r,a)),a._s.get(e)}return f.$id=e,f}export{St as c,vt as d};
