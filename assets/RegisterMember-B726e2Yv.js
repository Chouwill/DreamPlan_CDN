import{a as w}from"./axios-B4uVmeYG.js";import{_ as V}from"./index-BdRXa36P.js";import{i as d,ah as c,o as b,c as x,a as e,V as t,P as _,T as v,az as y,aA as k}from"./@vue-7Ha3uCVu.js";import"./pinia-C9NTtw3h.js";import"./element-plus-DXQf12sX.js";import"./lodash-es-CiJSjksT.js";import"./@vueuse-BHFm8KrR.js";import"./@element-plus-Ch8AbvLK.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-Ct2Knyoi.js";import"./async-validator-DKvM95Vc.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-B-WCBpf0.js";import"./vue-router-DuPkcz8v.js";import"./swiper-Dv-ZRrAi.js";import"./@fortawesome-kej9-Yz5.js";const s=i=>(y("data-v-dd424f79"),i=i(),k(),i),U={class:"login_box"},z={class:"login_header"},I={class:"main_login"},A=s(()=>e("label",{for:""},"使用者名稱",-1)),N=s(()=>e("br",null,null,-1)),S=s(()=>e("label",{for:""},"使用者帳號",-1)),B=s(()=>e("br",null,null,-1)),C=s(()=>e("label",{for:""},"密碼 ",-1)),P=s(()=>e("label",{for:""},"確認密碼 ",-1)),R=s(()=>e("p",{style:{color:"#000","font-size":"16px"}},"註冊",-1)),Z={__name:"RegisterMember",setup(i){const m=d(""),r=d(""),n=d(""),p=d(""),h=async f=>{let o=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;if(console.log(r.value),console.log(n.value),console.log(p.value),o.test(r.value)&&n.value===p.value){console.log("註冊成功");try{const a=await w.post("/api/v1/auth/register",{name:m.value,email:r.value,password:n.value});console.log(a)}catch(a){console.log("註冊失敗",a)}return!0}else return console.log("檢核失敗"),!1};return(f,o)=>{const a=c("router-link"),u=c("el-input"),g=c("el-button");return b(),x("div",U,[e("div",z,[t(a,{to:"/login"},{default:_(()=>[v("會員登入")]),_:1}),t(a,{to:"/registermember"},{default:_(()=>[v("會員註冊")]),_:1})]),e("ul",I,[e("li",null,[A,N,t(u,{modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=l=>m.value=l),style:{width:"240px"},type:"text",placeholder:"請輸入帳號"},null,8,["modelValue"])]),e("li",null,[S,B,t(u,{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=l=>r.value=l),style:{width:"240px"},type:"e-mail",placeholder:"請輸入帳號"},null,8,["modelValue"])]),e("li",null,[C,t(u,{modelValue:n.value,"onUpdate:modelValue":o[2]||(o[2]=l=>n.value=l),style:{width:"240px"},type:"password",placeholder:"請輸入密碼","show-password":""},null,8,["modelValue"])]),e("li",null,[P,t(u,{modelValue:p.value,"onUpdate:modelValue":o[3]||(o[3]=l=>p.value=l),style:{width:"240px"},type:"password",placeholder:"確認輸入密碼","show-password":""},null,8,["modelValue"])]),e("li",null,[t(g,{onClick:h,style:{width:"240px","background-color":"#eebe77"},type:"success"},{default:_(()=>[R]),_:1})])])])}}},ee=V(Z,[["__scopeId","data-v-dd424f79"]]);export{ee as default};
