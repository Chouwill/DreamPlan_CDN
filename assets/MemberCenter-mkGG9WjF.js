import{a as h}from"./axios-B4uVmeYG.js";import{u as f}from"./vue-router-DuPkcz8v.js";import{_ as b}from"./index-DD3fKa4O.js";import{i as l,k as y,o as r,c as u,a as t,U as n,F as I,az as k,aA as M}from"./@vue-7Ha3uCVu.js";import"./pinia-C9NTtw3h.js";import"./element-plus-DXQf12sX.js";import"./lodash-es-CiJSjksT.js";import"./@vueuse-BHFm8KrR.js";import"./@element-plus-Ch8AbvLK.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-Ct2Knyoi.js";import"./async-validator-DKvM95Vc.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-B-WCBpf0.js";import"./swiper-BFS8ErzP.js";import"./@fortawesome-kej9-Yz5.js";const e=s=>(k("data-v-638c5b0f"),s=s(),M(),s),w={key:0},x={key:1,class:"logining_page"},S=e(()=>t("h2",null,"你已登入",-1)),X=e(()=>t("h4",null,"目前會員等級",-1)),B={class:"member_status"},C=e(()=>t("thead",null,[t("tr",null,[t("td",null,"訂單編號"),t("td",null,"付款方式"),t("td",null,"訂單金額"),t("td",null,"商品名稱"),t("td",null,"數量"),t("td",null,"處理狀態"),t("td",null,"客戶服務")])],-1)),D=e(()=>t("td",null,"信用卡",-1)),N=e(()=>t("td",null,"$777",-1)),F=e(()=>t("td",null,"XXXX商品",-1)),R=e(()=>t("td",null,"1",-1)),$=e(()=>t("td",null,"已送達",-1)),z=e(()=>t("td",null,"聯繫客服",-1)),A={__name:"MemberCenter",setup(s){const c=l(""),d=l(""),i=l(""),_=f(),a=l([]),p=l(!0);y(async()=>{try{const o=await h.get("/api/v1/users/showMe");console.log(o),p.value=!1,c.value=o.data.user.name,d.value=o.data.user.userId,i.value=o.data.user.role}catch(o){console.log(o),_.push("/")}});const v=async()=>{try{const o=await h.delete("/api/v1/auth/logout");console.log(o),alert("你正在登出"),_.push("/")}catch(o){console.log(o)}};function g(o){const m=Math.floor(Math.random()*o);a.value=`2024${m}`}return g(1e5),console.log(a.value),(o,m)=>(r(),u(I,null,[p.value?(r(),u("div",w,"loading...")):(r(),u("div",x,[S,t("h4",null,"名字:"+n(c.value),1),t("h4",null,"使用者ID:"+n(d.value),1),t("h4",null,"身分別:"+n(i.value),1),X])),t("button",{onClick:v},"登出"),t("div",B,[t("table",null,[C,t("tbody",null,[t("tr",null,[t("td",null,n(a.value),1),D,N,F,R,$,z])])])])],64))}},ot=b(A,[["__scopeId","data-v-638c5b0f"]]);export{ot as default};
