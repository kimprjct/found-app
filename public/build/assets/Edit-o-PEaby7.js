import{A as v}from"./ApplicationLogo-B8m2-p4C.js";import{_ as p,a as x}from"./DropdownLink-CCvvxsA1.js";import{i as b,o as l,p as y,w as a,m as c,n as d,u as h,l as g,f as w,c as u,b as e,a as o,e as i,t as m,k as $,F as k,Z as B}from"./app-DeMQ8_Nt.js";import{_ as f}from"./ResponsiveNavLink-CFtOT96K.js";import L from"./DeleteUserForm-DNfEuahR.js";import C from"./UpdatePasswordForm-CygcVYOy.js";import M from"./UpdateProfileInformationForm-Cx8JMVRr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./InputError-C-7M1rTZ.js";import"./TextInput-do55MSXs.js";import"./PrimaryButton-i2WR6BNa.js";const N={__name:"NavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(n){const r=n,t=b(()=>r.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(s,_)=>(l(),y(h(g),{href:n.href,class:d(t.value)},{default:a(()=>[c(s.$slots,"default")]),_:3},8,["href","class"]))}},V={class:"min-h-screen bg-gray-100"},j={class:"border-b border-gray-100 bg-white"},D={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},E={class:"flex h-16 justify-between"},P={class:"flex"},S={class:"flex shrink-0 items-center"},A={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},z={class:"hidden sm:ms-6 sm:flex sm:items-center"},F={class:"relative ms-3"},O={class:"inline-flex rounded-md"},q={type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"},T={class:"-me-2 flex items-center sm:hidden"},Z={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},G={class:"space-y-1 pb-3 pt-2"},H={class:"border-t border-gray-200 pb-1 pt-4"},I={class:"px-4"},J={class:"text-base font-medium text-gray-800"},K={class:"text-sm font-medium text-gray-500"},Q={class:"mt-3 space-y-1"},R={key:0,class:"bg-white shadow"},U={class:"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"},W={__name:"AuthenticatedLayout",setup(n){const r=w(!1);return(t,s)=>(l(),u("div",null,[e("div",V,[e("nav",j,[e("div",D,[e("div",E,[e("div",P,[e("div",S,[o(h(g),{href:t.route("dashboard")},{default:a(()=>[o(v,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"])]),e("div",A,[o(N,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>s[1]||(s[1]=[i(" Dashboard ")])),_:1},8,["href","active"])])]),e("div",z,[e("div",F,[o(x,{align:"right",width:"48"},{trigger:a(()=>[e("span",O,[e("button",q,[i(m(t.$page.props.auth.user.name)+" ",1),s[2]||(s[2]=e("svg",{class:"-me-0.5 ms-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1))])])]),content:a(()=>[o(p,{href:t.route("profile.edit")},{default:a(()=>s[3]||(s[3]=[i(" Profile ")])),_:1},8,["href"]),o(p,{href:t.route("logout"),method:"post",as:"button"},{default:a(()=>s[4]||(s[4]=[i(" Log Out ")])),_:1},8,["href"])]),_:1})])]),e("div",T,[e("button",{onClick:s[0]||(s[0]=_=>r.value=!r.value),class:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"},[(l(),u("svg",Z,[e("path",{class:d({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:d({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:d([{block:r.value,hidden:!r.value},"sm:hidden"])},[e("div",G,[o(f,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>s[5]||(s[5]=[i(" Dashboard ")])),_:1},8,["href","active"])]),e("div",H,[e("div",I,[e("div",J,m(t.$page.props.auth.user.name),1),e("div",K,m(t.$page.props.auth.user.email),1)]),e("div",Q,[o(f,{href:t.route("profile.edit")},{default:a(()=>s[6]||(s[6]=[i(" Profile ")])),_:1},8,["href"]),o(f,{href:t.route("logout"),method:"post",as:"button"},{default:a(()=>s[7]||(s[7]=[i(" Log Out ")])),_:1},8,["href"])])])],2)]),t.$slots.header?(l(),u("header",R,[e("div",U,[c(t.$slots,"header")])])):$("",!0),e("main",null,[c(t.$slots,"default")])])]))}},X={class:"py-12"},Y={class:"mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8"},ee={class:"bg-white p-4 shadow sm:rounded-lg sm:p-8"},te={class:"bg-white p-4 shadow sm:rounded-lg sm:p-8"},se={class:"bg-white p-4 shadow sm:rounded-lg sm:p-8"},he={__name:"Edit",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(n){return(r,t)=>(l(),u(k,null,[o(h(B),{title:"Profile"}),o(W,null,{header:a(()=>t[0]||(t[0]=[e("h2",{class:"text-xl font-semibold leading-tight text-gray-800"}," Profile ",-1)])),default:a(()=>[e("div",X,[e("div",Y,[e("div",ee,[o(M,{"must-verify-email":n.mustVerifyEmail,status:n.status,class:"max-w-xl"},null,8,["must-verify-email","status"])]),e("div",te,[o(C,{class:"max-w-xl"})]),e("div",se,[o(L,{class:"max-w-xl"})])])])]),_:1})],64))}};export{he as default};
