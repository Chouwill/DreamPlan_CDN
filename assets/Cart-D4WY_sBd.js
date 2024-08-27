import{u as v}from"./cart-BKb8QBQO.js";import{_ as g}from"./index-06vtKuY3.js";import{i as m,ah as b,o as c,c as u,a as t,U as r,V as p,u as s,P as x,T as y,F as $,a8 as k,S,O as q,az as I,aA as N}from"./@vue-7Ha3uCVu.js";import"./pinia-C9NTtw3h.js";import"./element-plus-DXQf12sX.js";import"./lodash-es-CiJSjksT.js";import"./@vueuse-BHFm8KrR.js";import"./@element-plus-Ch8AbvLK.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-Ct2Knyoi.js";import"./async-validator-DKvM95Vc.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-B-WCBpf0.js";import"./vue-router-DuPkcz8v.js";import"./swiper-BFS8ErzP.js";import"./@fortawesome-CPWMIkfv.js";const w={class:"product-info"},V={class:"flex-box"},B=["src"],T={class:"product-price"},U={class:"quantity-control"},A={class:"flex-box"},K={class:"delebox"},F={class:"addbox"},O={class:"product-price-total"},z={style:{"text-align":"center"}},D={class:"product-delete"},E={__name:"CartItem",props:{product:{id:String,imageUrl:String,title:String,description:String,origin_price:Number,price:Number,quantity:Number}},setup(o){const e=m(1),i=v(),_=o,d=()=>{e.value===0?n.value=0:n.value=e.value*_.product.price},n=m();return d(),(W,l)=>{const h=b("font-awesome-icon"),C=b("el-button");return c(),u("tr",null,[t("td",w,[t("div",V,[t("img",{src:o.product.imageUrl,alt:"",width:"50"},null,8,B),t("h4",null,r(o.product.title),1)])]),t("td",T,r(o.product.price),1),t("td",U,[t("div",A,[t("div",K,[p(h,{icon:"fa-solid fa-minus",onClick:l[0]||(l[0]=f=>s(i).minus(o.product.id))})]),t("h3",null,r(o.product.quantity),1),t("div",F,[p(h,{icon:"fa-solid fa-plus",onClick:l[1]||(l[1]=f=>s(i).add(o.product.id))})])])]),t("td",O,[t("h4",z,r(o.product.price*o.product.quantity),1)]),t("td",D,[p(C,{type:"danger",onClick:l[2]||(l[2]=f=>s(i).remove(o.product.id))},{default:x(()=>[y("刪除")]),_:1})])])}}},G=g(E,[["__scopeId","data-v-47d14d25"]]),a=o=>(I("data-v-efe8b769"),o=o(),N(),o),L={class:"cartopen_box"},M=a(()=>t("h2",null,"我是購物車",-1)),P=a(()=>t("thead",null,[t("tr",null,[t("td",{class:"product-name"},"商品名稱"),t("td",{class:"product-price"},"價格"),t("td",{class:"quantity"},"數量"),t("td",{class:"quantity"},"小計"),t("td",{class:"othMethod"})])],-1)),Q=a(()=>t("td",{colspan:"4"},null,-1)),j={class:"checkout"},H=a(()=>t("tr",null,[t("td",null,"運費"),t("td",null,"$60")],-1)),J=a(()=>t("td",null,"總計",-1)),R={__name:"Cart",setup(o){const e=v(),i=()=>{alert("謝謝您完成訂購")};return m([{id:"-O182suwbu2sCGcyoK7-",imageUrl:"https://thumbsnap.com/i/qh5QKKgx.png",title:"不再數錢度日",description:"測試的描述",origin_price:350,price:350,quantity:1}]),(_,d)=>(c(),u("div",L,[t("main",null,[M,t("table",null,[P,t("tbody",null,[(c(!0),u($,null,k(s(e).shoppingCart,n=>(c(),q(G,{key:n.id,product:n},null,8,["product"]))),128))]),t("tfoot",null,[t("tr",null,[Q,t("td",null,[s(e).shoppingCart.length>0?(c(),u("button",{key:0,onClick:d[0]||(d[0]=(...n)=>s(e).removeAll&&s(e).removeAll(...n))},"一鍵刪除")):S("",!0)])])])]),t("table",j,[t("tbody",null,[H,t("tr",null,[J,t("td",null,"$"+r(s(e).total),1)])])]),t("div",{class:"send_box"},[t("button",{onClick:i},"結帳送出")])])]))}},ht=g(R,[["__scopeId","data-v-efe8b769"]]);export{ht as default};
