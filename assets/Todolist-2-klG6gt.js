import{i as a,ah as u,o as x,c as I,a as p,V as t,P as n,u as H,T as h,U as M,Q as T,W as N,az as U,aA as C}from"./@vue-7Ha3uCVu.js";import"./swiper-BFS8ErzP.js";import{J}from"./qalendar-DFK764HX.js";import{_ as O}from"./index-06vtKuY3.js";import"./pinia-C9NTtw3h.js";import"./element-plus-DXQf12sX.js";import"./lodash-es-CiJSjksT.js";import"./@vueuse-BHFm8KrR.js";import"./@element-plus-Ch8AbvLK.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-Ct2Knyoi.js";import"./async-validator-DKvM95Vc.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-B-WCBpf0.js";import"./vue-router-DuPkcz8v.js";import"./@fortawesome-CPWMIkfv.js";const g=_=>(U("data-v-0ed78d27"),_=_(),C(),_),B={class:"wrap"},j=g(()=>p("h2",null,"設計計畫",-1)),z=g(()=>p("h2",null,"開始制定計畫",-1)),A={class:"todolist_event"},P={class:"calendar"},Q=g(()=>p("h2",null,"付費會員獨享特殊挑戰和專屬訓練計畫，讓閱讀更具挑戰性。",-1)),W={__name:"Todolist",setup(_){a(null),a(!1),a(""),a(""),a(""),a([]),a(["https://picsum.photos/300/200/?random=1","https://picsum.photos/300/200/?random=2","https://picsum.photos/300/200/?random=3","https://picsum.photos/300/200/?random=4","https://picsum.photos/300/200/?random=5","https://picsum.photos/300/200/?random=6","https://picsum.photos/300/200/?random=7"]);const w={id:"",title:"",date:[new Date,new Date],description:""},o=a(w),i=a("create"),s=a(JSON.parse(localStorage.getItem("calendarEvents")||"[]")||[]),b=a({}),E=()=>{localStorage.setItem("calendarEvents",JSON.stringify(s.value))},S=()=>{const{id:d,title:e,date:l,description:r}=o.value,[c="",f=""]=l,v={title:e,time:{start:c,end:f},color:"blue",isEditable:!0,id:d||Date.now().toString(),description:r};if(console.log(v),i.value==="create")s.value.push(v);else{const D=s.value.findIndex(V=>V.id===d);s.value.splice(D,1,v)}E(),o.value=w,i.value="create"},Y=d=>{i.value="edit";const e=s.value.find(c=>c.id===d);console.log("event: ",e);const{time:l,...r}=e;o.value={...r,date:l?[l.start,l.end]:[]}},y=()=>{i.value==="edit"&&(i.value="create"),o.value=w},k=d=>{console.log(s.value.find(e=>e.id===d)),s.value=s.value.filter(e=>e.id!==d),E()};return(d,e)=>{const l=u("el-form-item"),r=u("el-input"),c=u("el-date-picker"),f=u("el-button"),v=u("el-form"),D=u("font-awesome-icon"),V=u("router-link");return x(),I("div",B,[j,p("main",null,[z,p("div",A,[t(v,{model:o.value,"label-width":120},{default:n(()=>[t(l,null,{default:n(()=>[h(M(i.value==="create"?"創建事件":"編輯事件"),1)]),_:1}),T(t(l,{label:"ID"},{default:n(()=>[t(r,{modelValue:o.value.id,"onUpdate:modelValue":e[0]||(e[0]=m=>o.value.id=m),disabled:""},null,8,["modelValue"])]),_:1},512),[[N,i.value==="edit"]]),t(l,{label:"Event Title"},{default:n(()=>[t(r,{modelValue:o.value.title,"onUpdate:modelValue":e[1]||(e[1]=m=>o.value.title=m)},null,8,["modelValue"])]),_:1}),t(l,{label:"Date"},{default:n(()=>[t(c,{modelValue:o.value.date,"onUpdate:modelValue":e[2]||(e[2]=m=>o.value.date=m),type:"datetimerange","start-placeholder":"Start date","end-placeholder":"End date",format:"YYYY-MM-DD HH:mm","date-format":"YYYY/MM/DD ddd","time-format":"HH:mm","value-format":"YYYY-MM-DD HH:mm"},null,8,["modelValue"])]),_:1}),t(l,{label:"Description"},{default:n(()=>[t(r,{modelValue:o.value.description,"onUpdate:modelValue":e[3]||(e[3]=m=>o.value.description=m),rows:2,type:"textarea",resize:"none"},null,8,["modelValue"])]),_:1}),t(l,{class:"form-item"},{default:n(()=>[t(f,{type:"primary",onClick:y},{default:n(()=>[h("取消")]),_:1}),t(f,{type:"primary",onClick:S},{default:n(()=>[h("送出")]),_:1})]),_:1})]),_:1},8,["model"]),p("div",P,[t(H(J),{"selected-date":new Date,events:s.value,config:b.value,onEditEvent:Y,onDeleteEvent:k},null,8,["selected-date","events","config"])])]),Q,t(V,null,{default:n(()=>[h(" 了解更多 "),t(D,{icon:"fa-solid fa-arrow-right"})]),_:1})])])}}},re=O(W,[["__scopeId","data-v-0ed78d27"]]);export{re as default};
