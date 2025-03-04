import{T as k,o as i,c as u,a,u as t,Z as v,b as s,g as c,v as g,p as N,w as n,e as h,l as m,k as w,n as C,h as S,F as _,d as V,t as y}from"./app-DeMQ8_Nt.js";import{_ as f}from"./InputError-C-7M1rTZ.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";const E=["disabled"],F={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(p){const o=k({email:"",password:"",remember:!1}),e=()=>{o.post(route("login"),{onFinish:()=>o.reset("password")})};return(r,l)=>(i(),u(_,null,[a(t(v),{title:"Log in"}),s("form",{onSubmit:S(e,["prevent"]),class:"form"},[s("div",null,[c(s("input",{placeholder:"Email Address",id:"email",type:"email",class:"input-field","onUpdate:modelValue":l[0]||(l[0]=d=>t(o).email=d),autofocus:"",autocomplete:"username"},null,512),[[g,t(o).email]]),a(f,{class:"error-message",message:t(o).errors.email},null,8,["message"])]),s("div",null,[c(s("input",{placeholder:"Password",id:"password",type:"password","onUpdate:modelValue":l[1]||(l[1]=d=>t(o).password=d),class:"input-field",autocomplete:"current-password"},null,512),[[g,t(o).password]]),a(f,{class:"error-message",message:t(o).errors.password},null,8,["message"])]),s("div",null,[p.canResetPassword?(i(),N(t(m),{key:0,href:r.route("password.request")},{default:n(()=>l[2]||(l[2]=[h(" Forgot your password? ")])),_:1},8,["href"])):w("",!0),s("button",{class:C(["submit-btn",{"opacity-25":t(o).processing}]),disabled:t(o).processing}," Log in ",10,E)])],32)],64))}},L=b(F,[["__scopeId","data-v-b196796f"]]),T={class:"login-container"},U={class:"logo-container"},B={class:"button-container"},D={key:0,class:"notification"},I={class:"action-success"},M={class:"signin-container"},A={__name:"Welcome",setup(p){return(o,e)=>{const r=V("router-link");return i(),u(_,null,[a(t(v),{title:"Welcome"}),s("div",T,[e[6]||(e[6]=s("div",{class:"login-background"},null,-1)),s("div",U,[a(r,{to:"/home"},{default:n(()=>e[0]||(e[0]=[s("div",{class:"logo"},null,-1)])),_:1}),e[1]||(e[1]=s("div",{class:"logo-text"},[s("h1",{class:"logo-title"},"FoundU"),s("p",{class:"tagline"},"DISCOVER. CONNECT. RECLAIM.")],-1))]),e[7]||(e[7]=s("h2",{class:"main-title"},"SNSU LOST AND FOUND SYSTEM",-1)),s("div",B,[e[4]||(e[4]=s("div",{class:"button slider"},null,-1)),a(t(m),{href:o.route("welcome"),class:"button login"},{default:n(()=>e[2]||(e[2]=[s("span",null,"Admin",-1)])),_:1},8,["href"]),a(t(m),{href:o.route("register"),class:"button register"},{default:n(()=>e[3]||(e[3]=[s("span",null,"Users",-1)])),_:1},8,["href"])]),o.isNotificationVisible?(i(),u("div",D,[e[5]||(e[5]=s("div",{class:"check-mark"},[s("img",{src:"/assets/checkicon.webp",alt:"Check Icon",width:"38",height:"36"})],-1)),s("span",I,y(o.notificationMessage),1)])):w("",!0),s("div",M,[a(L)])])],64)}}},P=b(A,[["__scopeId","data-v-e17e6018"]]);export{P as default};
