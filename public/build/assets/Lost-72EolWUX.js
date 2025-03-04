import{A as u}from"./AdminLayout-CAIkRf6z.js";import{c as s,a as i,u as c,w as h,F as o,o as d,Z as p,b as t,r as b,t as n}from"./app-DeMQ8_Nt.js";import"./sweetalert2-z6gKu1nJ.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownLink-CCvvxsA1.js";const g={class:"Lost-content"},f={class:"table-container"},L={class:"lost-table"},x=["src"],y=["onClick"],I={__name:"Lost",props:{losts:Array},setup(r){const m=l=>{const a=window.open("","_blank","width=800,height=600");a.document.write(`
        <html>
        <head>
            <title>Print Lost Item</title>
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
            <h2>Lost Item Details</h2>
            <div class="item-details">
                <img src="/lostImage/${l.image}" alt="Lost Item">
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
                        <td>${l.dateLost}</td>
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
                        <th>Lost by</th>
                        <td>${l.user_name}</td>
                    </tr>
                </table>
            </div>
            <button onclick="window.print()">Print</button>
        </body>
        </html>
    `),a.document.close()};return(l,a)=>(d(),s(o,null,[i(c(p),{title:"Admin Lost"}),i(u,null,{default:h(()=>[t("div",g,[a[1]||(a[1]=t("h2",null,"Lost",-1)),t("div",f,[t("table",L,[a[0]||(a[0]=t("thead",null,[t("tr",null,[t("th",null,"Item ID"),t("th",null,"Item Name"),t("th",null,"Reported Date"),t("th",null,"Status"),t("th",null,"Location"),t("th",null,"Lost by"),t("th",null,"Image"),t("th",null,"Action")])],-1)),t("tbody",null,[(d(!0),s(o,null,b(r.losts,e=>(d(),s("tr",{key:e.id},[t("td",null,n(e.id),1),t("td",null,n(e.name),1),t("td",null,n(e.dateLost),1),t("td",null,n(e.status),1),t("td",null,n(e.landMark),1),t("td",null,n(e.user_name),1),t("td",null,[t("img",{src:"/lostImage/"+e.image,alt:"Lost Item",class:"lost-item-image"},null,8,x)]),t("td",null,[t("button",{class:"print-btn",onClick:k=>m(e)},"Print",8,y)])]))),128))])])])])]),_:1})],64))}},N=_(I,[["__scopeId","data-v-05bbf01f"]]);export{N as default};
