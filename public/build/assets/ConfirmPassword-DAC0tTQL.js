import{T as n,p as l,w as t,o as d,a as r,u as a,Z as p,b as e,e as u,n as f,h as c}from"./app-DeMQ8_Nt.js";import{_ as w}from"./GuestLayout-C3c_QYlN.js";import{_}from"./InputError-C-7M1rTZ.js";import{_ as b,a as x}from"./TextInput-do55MSXs.js";import{P as g}from"./PrimaryButton-i2WR6BNa.js";import"./ApplicationLogo-B8m2-p4C.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={class:"mt-4 flex justify-end"},h={__name:"ConfirmPassword",setup(P){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(V,o)=>(d(),l(w,null,{default:t(()=>[r(a(p),{title:"Confirm Password"}),o[2]||(o[2]=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1)),e("form",{onSubmit:c(i,["prevent"])},[e("div",null,[r(b,{for:"password",value:"Password"}),r(x,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":o[0]||(o[0]=m=>a(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),r(_,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",y,[r(g,{class:f(["ms-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>o[1]||(o[1]=[u(" Confirm ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{h as default};
