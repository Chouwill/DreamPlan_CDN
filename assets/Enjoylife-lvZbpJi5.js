import{a as d}from"./axios-B4uVmeYG.js";import{_ as h}from"./index-BkFYHqHg.js";import{i as u,k as p,o as e,c as i,a as o,F as c,a8 as n,az as m,aA as g}from"./@vue-7Ha3uCVu.js";import"./pinia-C9NTtw3h.js";import"./element-plus-DtubumiQ.js";import"./lodash-es-CiJSjksT.js";import"./@vueuse-BHFm8KrR.js";import"./@element-plus-Ch8AbvLK.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-Bof1u0Bp.js";import"./async-validator-DKvM95Vc.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-B-WCBpf0.js";import"./vue-router-DuPkcz8v.js";import"./swiper-BFS8ErzP.js";import"./@fortawesome-CPWMIkfv.js";const s=r=>(m("data-v-dc5d0a88"),r=r(),g(),r),f={class:"container"},v={class:"div"},y=s(()=>o("h2",{class:"item_title"},"國內旅遊",-1)),U=s(()=>o("h4",null,"大英博物館",-1)),k=["src"],x=s(()=>o("a",{href:"#"},"查看活動",-1)),j=s(()=>o("h4",null,"威尼斯水上嘉年華",-1)),I=["src"],B=s(()=>o("a",{href:"#"},"查看活動",-1)),E=s(()=>o("h4",null,"澎湖潛水漫步",-1)),S=["src"],w=s(()=>o("a",{href:"#"},"查看活動",-1)),A={class:"div"},F=s(()=>o("h2",{class:"item_title"},"美食饗宴",-1)),z=s(()=>o("h4",null,"日式生魚片之旅",-1)),D=["src"],L=s(()=>o("a",{href:"#"},"查看活動",-1)),M=s(()=>o("h4",null,"法式牛排晚餐",-1)),N=["src"],P=s(()=>o("a",{href:"#"},"查看活動",-1)),V=s(()=>o("h4",null,"經典美式蘋果派",-1)),b=["src"],q=s(()=>o("a",{href:"#"},"查看活動",-1)),C={__name:"Enjoylife",setup(r){const a=u([]),_=[d.get("https://vue3-course-api.hexschool.io/api/enjoylife_api/products")];return p(async()=>{try{const l=await Promise.all(_);console.log(l[0].data),a.value=l[0].data.products}catch(l){console.log("錯誤處理",l)}console.log("執行其他動作")}),(l,G)=>(e(),i("div",f,[o("main",null,[o("div",v,[y,(e(!0),i(c,null,n(a.value,t=>(e(),i("ul",{key:t.id},[o("li",null,[U,o("img",{src:t.imageUrl,alt:""},null,8,k),x]),o("li",null,[j,o("img",{src:t.imagesUrl,alt:""},null,8,I),B]),o("li",null,[E,o("img",{src:t.imagesUrl[1],alt:""},null,8,S),w])]))),128))]),o("div",A,[F,(e(!0),i(c,null,n(a.value,t=>(e(),i("ul",{key:t.id},[o("li",null,[z,o("img",{src:t.imagesUrl[2],alt:""},null,8,D),L]),o("li",null,[M,o("img",{src:t.imagesUrl[3],alt:""},null,8,N),P]),o("li",null,[V,o("img",{src:t.imagesUrl[4],alt:""},null,8,b),q])]))),128))])])]))}},ro=h(C,[["__scopeId","data-v-dc5d0a88"]]);export{ro as default};
