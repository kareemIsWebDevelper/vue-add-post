import{_ as a,o as l,c as m,d as e,w as o,v as i}from"./index-5b71c51a.js";const u={data(){return{firstname:"",lastname:""}},methods:{onSubmit(){(this.firstname===""||this.lastname==="")&&alert("Fields cannot be blank!")}}},c={class:"custom-form"},f={class:"form-group"},d=e("button",{class:"btn btn-outline-info",type:"submit"},"Submit",-1);function p(b,t,_,v,n,r){return l(),m("div",{method:"POST",onSubmit:t[2]||(t[2]=s=>r.onSubmit()),action:"/",class:"container justify-cotnent-center"},[e("form",c,[e("div",f,[o(e("input",{class:"form-control",type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>n.firstname=s)},null,512),[[i,n.firstname]]),o(e("input",{class:"form-control",type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>n.lastname=s)},null,512),[[i,n.lastname]])]),d])],32)}const S=a(u,[["render",p]]);export{S as default};