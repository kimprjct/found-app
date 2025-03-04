import{A as u}from"./AdminLayout-CAIkRf6z.js";import{c as d,a as i,u as c,w as h,F as o,o as s,Z as p,b as t,r as b,t as n}from"./app-DeMQ8_Nt.js";import"./sweetalert2-z6gKu1nJ.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownLink-CCvvxsA1.js";const g={class:"Found-container"},x={class:"table-container"},y={class:"lost-table"},I=["src"],k=["onClick"],w={__name:"Found",props:{founds:Array},setup(r){const m=l=>{const a=window.open("","_blank","width=800,height=600");a.document.write(`
        <html>
        <head>
            <title>Print found Item</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                }
                h2 {
                    text-align: center;
                }
                .item-details {
                    margin: 20px 0;
                }
                .item-details img {
                    max-width: 300px;
                    display: block;
                    margin: 20px auto;
                }
                .details-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                }
                .details-table th, .details-table td {
                    border: 1px solid #ccc;
                    padding: 10px;
                    text-align: left;
                }
                .details-table th {
                    background-color: #f4f4f4;
                }
            </style>
        </head>
        <body>
            <h2>found Item Details</h2>
            <div class="item-details">
                <img src="/foundImage/${l.image}" alt="found Item">
                <table class="details-table">
                    <tr>
                        <th>Item ID</th>
                        <td>${l.id}</td>
                    </tr>
                    <tr>
                        <th>Item Name</th>
                        <td>${l.name}</td>
                    </tr>
                    <tr>
                        <th>Reported Date</th>
                        <td>${l.datefound}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>${l.status}</td>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <td>${l.landMark}</td>
                    </tr>
                    <tr>
                        <th>found by</th>
                        <td>${l.user_name}</td>
                    </tr>
                </table>
            </div>
            <button onclick="window.print()">Print</button>
        </body>
        </html>
    `),a.document.close()};return(l,a)=>(s(),d(o,null,[i(c(p),{title:"Admin Found"}),i(u,null,{default:h(()=>[t("div",g,[a[1]||(a[1]=t("h2",null,"Found",-1)),t("div",x,[t("table",y,[a[0]||(a[0]=t("thead",null,[t("tr",null,[t("th",null,"Item ID"),t("th",null,"Item Name"),t("th",null,"Reported Date"),t("th",null,"Status"),t("th",null,"Location"),t("th",null,"Found by"),t("th",null,"Image"),t("th",null,"Action")])],-1)),t("tbody",null,[(s(!0),d(o,null,b(r.founds,e=>(s(),d("tr",{key:e.id},[t("td",null,n(e.id),1),t("td",null,n(e.name),1),t("td",null,n(e.dateFound),1),t("td",null,n(e.status),1),t("td",null,n(e.landMark),1),t("td",null,n(e.user_name),1),t("td",null,[t("img",{src:"/foundImage/"+e.image,alt:"Lost Item",class:"lost-item-image"},null,8,I)]),t("td",null,[t("button",{class:"print-btn",onClick:f=>m(e)},"Print",8,k)])]))),128))])])])])]),_:1})],64))}},L=_(w,[["__scopeId","data-v-db065860"]]);export{L as default};
