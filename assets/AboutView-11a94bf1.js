import{_ as h,o as v,c as f,a as e,b as c,w as d,d as s,r as b,u as g,e as r,f as w,g as i,v as p,F as y,p as k,h as V}from"./index-00bd0b02.js";const P={},C={class:"p-3 d-flex justify-content-around bg-white",id:"footer"},S={style:{display:"flex",gap:"20px"}},$={class:"router-link"},I=e("p",null,[s(" (c) Copyrights 2023 - "),e("br"),s(" kareem khaled ")],-1);function N(o,_){const t=b("RouterLink");return v(),f("footer",null,[e("div",C,[e("div",S,[e("div",$,[c(t,{to:"/"},{default:d(()=>[s("Home")]),_:1}),s("/ "),c(t,{to:"/about"},{default:d(()=>[s("New Post ?")]),_:1})])]),I])])}const A=h(P,[["render",N]]);const u=o=>(k("data-v-5259872a"),o=o(),V(),o),B={class:"card"},F={class:"card-body"},R=u(()=>e("legend",null,[e("h1",{class:"text-center bg-light"},"Create Post")],-1)),T=u(()=>e("label",null,"Title:",-1)),L=u(()=>e("label",null,"Content:",-1)),U={__name:"AboutView",setup(o){const _=g(),t=r(""),a=r(""),m=w(),x=()=>{_.myPosts.push({title:t.value,content:a.value}),m.push("/home")};return(j,n)=>(v(),f(y,null,[e("div",B,[e("div",F,[R,T,i(e("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=l=>t.value=l)},null,512),[[p,t.value]]),L,i(e("textarea",{"onUpdate:modelValue":n[1]||(n[1]=l=>a.value=l)},null,512),[[p,a.value]])]),e("button",{onClick:x},"Publish")]),e("div",null,[c(A)])],64))}},E=h(U,[["__scopeId","data-v-5259872a"]]);export{E as default};