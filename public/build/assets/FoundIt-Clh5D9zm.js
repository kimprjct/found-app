import{T as f,c,a as r,u as s,w as b,F as g,o as F,Z as v,b as o,h as y,g as l,v as a,q as x}from"./app-DeMQ8_Nt.js";import{U as I}from"./UserLayout-Gn0WHAG4.js";import{_ as d}from"./InputError-C-7M1rTZ.js";import{S as U}from"./sweetalert2-z6gKu1nJ.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ResponsiveNavLink-CFtOT96K.js";const D={class:"report-section"},V={class:"form-group"},w={class:"form-group"},S={class:"form-group"},B={class:"form-group"},C={class:"checkbox-group"},L={class:"form-actions"},M={__name:"FoundIt",props:{lost:Object},setup(u){const m=u,e=f({image:null,dateFound:"",location:"",itemDescription:"",certify:!1}),p=n=>{e.post(route("foundit.store",n.id),{onSuccess:()=>{U.fire({title:"THANK YOU!",text:"Form has been successfully submitted!",icon:"success"})}})};return(n,t)=>(F(),c(g,null,[r(s(v),{title:"Student Found It"}),r(I,null,{default:b(()=>[o("section",D,[t[13]||(t[13]=o("h2",null,"Found Item Verification Form ",-1)),o("form",{class:"report-form",onSubmit:t[6]||(t[6]=y(i=>p(m.lost),["prevent"]))},[o("div",V,[t[7]||(t[7]=o("label",{for:"date-found"},"Date Found:",-1)),l(o("input",{type:"date",id:"date-found","onUpdate:modelValue":t[0]||(t[0]=i=>s(e).dateFound=i)},null,512),[[a,s(e).dateFound]]),r(d,{class:"mt-1",message:s(e).errors.dateFound},null,8,["message"])]),o("div",w,[t[8]||(t[8]=o("label",{for:"location"},"Location or Landmark:",-1)),l(o("input",{type:"text",id:"location","onUpdate:modelValue":t[1]||(t[1]=i=>s(e).location=i)},null,512),[[a,s(e).location]])]),o("div",S,[t[9]||(t[9]=o("label",{for:"item-description"},"Description of the Found Item:",-1)),l(o("textarea",{id:"item-description","onUpdate:modelValue":t[2]||(t[2]=i=>s(e).itemDescription=i),rows:"4",placeholder:"Write a detailed description of the item..."},null,512),[[a,s(e).itemDescription]]),r(d,{class:"mt-1",message:s(e).errors.itemDescription},null,8,["message"])]),o("div",B,[t[10]||(t[10]=o("label",{for:"upload-photo"},"Upload Photo:",-1)),o("input",{type:"file",id:"image",name:"image",onInput:t[3]||(t[3]=i=>s(e).image=i.target.files[0])},null,32),r(d,{class:"mt-1",message:s(e).errors.image},null,8,["message"])]),o("div",C,[l(o("input",{type:"checkbox",id:"certify","onUpdate:modelValue":t[4]||(t[4]=i=>s(e).certify=i)},null,512),[[x,s(e).certify]]),t[11]||(t[11]=o("label",{for:"certify"},"I certify that I found this item and the information provided is accurate and truthful.",-1))]),o("div",L,[t[12]||(t[12]=o("button",{type:"submit",class:"submit-btn"},"Submit",-1)),o("button",{type:"reset",onClick:t[5]||(t[5]=(...i)=>n.resetForm&&n.resetForm(...i)),class:"reset-btn"}," Reset ")])],32)])]),_:1})],64))}},A=k(M,[["__scopeId","data-v-7249f012"]]);export{A as default};
