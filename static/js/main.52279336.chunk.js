(this["webpackJsonpproducts-search"]=this["webpackJsonpproducts-search"]||[]).push([[0],{136:function(e,t,a){e.exports=a(281)},141:function(e,t,a){},142:function(e,t,a){},144:function(e,t,a){},261:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){},264:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),l=a.n(r),o=(a(141),a(142),a(27)),s=a.n(o),u=a(14),i=(a(144),a(284)),m=function(e){var t=e.filter,a=Object(n.useState)(""),r=Object(u.a)(a,2),l=r[0],o=r[1],s=Object(n.useState)(!1),m=Object(u.a)(s,2),d=m[0],f=m[1];return Object(n.useEffect)((function(){t({name:l,stocked:d})}),[d,l,t]),c.a.createElement("div",{className:"search-bar"},c.a.createElement(i.e,{type:"search",className:"search-input",leftIcon:"search",placeholder:"Search...",value:l,onChange:function(e){return o(e.target.value)}}),c.a.createElement(i.b,{checked:d,onChange:function(){return f(!d)}},"Only show products in stock"))},d=a(90),f=a.n(d),p=(a(261),a(262),function(e){return c.a.createElement("tr",null,c.a.createElement("th",{className:"category",colSpan:"100%"},e.name))}),b=(a(263),function(e){var t=e.product,a=t.name,n=t.price,r=t.stocked;return c.a.createElement("tr",null,c.a.createElement("td",{className:r?"":"red-color"},a),c.a.createElement("td",null,n))}),h=(a(264),a(1)),E=function(e){var t=e.isOpen,a=e.hideDialog,r=e.confirmDialog,l=Object(n.useState)(""),o=Object(u.a)(l,2),s=o[0],m=o[1],d=Object(n.useState)(""),f=Object(u.a)(d,2),p=f[0],b=f[1],E=Object(n.useState)("1"),O=Object(u.a)(E,2),v=O[0],g=O[1],k=Object(n.useState)(!0),j=Object(u.a)(k,2),C=j[0],w=j[1],N=function(){m(""),b(""),g("1"),w(!0),a()};return c.a.createElement(i.c,{icon:"plus",title:"New Product",canOutsideClickClose:!1,isOpen:t,onClose:N},c.a.createElement("div",{className:h.a.DIALOG_BODY},c.a.createElement(i.d,{label:"Description",labelInfo:"(required)",labelFor:"text-input"},c.a.createElement(i.e,{className:"mb-10 w-220",placeholder:"Name",value:s,onChange:function(e){return m(e.target.value)}}),c.a.createElement(i.e,{className:"mb-10 w-220",placeholder:"Category",value:p,onChange:function(e){return b(e.target.value)}})),c.a.createElement(i.d,{label:"Price",labelInfo:"(required)",labelFor:"numeric-input"},c.a.createElement(i.f,{min:1,leftIcon:"dollar",value:v,onValueChange:function(e,t){return g(t)}})),c.a.createElement(i.g,{className:"w-220",large:!0,checked:C,label:"In stock",onChange:function(e){return w(e.target.checked)}})),c.a.createElement("div",{className:h.a.DIALOG_FOOTER},c.a.createElement("div",{className:h.a.DIALOG_FOOTER_ACTIONS},c.a.createElement(i.a,{onClick:N},"Close"),c.a.createElement(i.a,{intent:"success",onClick:function(){r({name:s,category:p,price:"$"+v,stocked:C}),N()},disabled:!(s&&p&&v)},"Confirm"))))},O=function(e){var t=e.products,a=e.addProduct,r=Object(n.useState)(!1),l=Object(u.a)(r,2),o=l[0],s=l[1];t=f()(t,(function(e){return e.category}));var m=Object(n.useCallback)((function(){s(!1)}),[]),d=Object(n.useCallback)((function(e){a(e)}),[a]);return c.a.createElement("div",null,c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"text-align-start"},"Name"),c.a.createElement("th",{className:"text-align-start"},"Price"))),Object.keys(t).map((function(e){return c.a.createElement("tbody",{key:e},c.a.createElement(p,{name:e,key:e}),t[e].map((function(e){return c.a.createElement(b,{product:e,key:e._id})})))}))),c.a.createElement(i.a,{className:"mt-8",icon:"add",text:"New",intent:"primary",onClick:function(){s(!0)}}),c.a.createElement(E,{isOpen:o,hideDialog:m,confirmDialog:d}))},v=a(11),g=i.h.create({position:v.a.TOP}),k={apiUrl:"https://products-search-api.herokuapp.com/api"},j=a(49),C=a.n(j),w=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),o=Object(u.a)(l,2),i=o[0],d=o[1];Object(n.useEffect)((function(){!function(){var e;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(C.a.get("".concat(k.apiUrl,"/product")));case 2:e=t.sent,d(e.data),r(e.data);case 5:case"end":return t.stop()}}))}()}),[]);var f=Object(n.useCallback)((function(e){r(i.filter((function(t){return t.name.toLowerCase().includes(e.name.toLowerCase())&&(!e.stocked||t.stocked)})))}),[i]),p=Object(n.useCallback)((function(e){!function(){var t;s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(C.a.post("".concat(k.apiUrl,"/product"),e));case 2:t=a.sent,d(i.concat([t.data])),g.show({message:"Successfully added ".concat(e.name),intent:"success",icon:"saved"});case 5:case"end":return a.stop()}}))}()}),[i]);return c.a.createElement("div",null,c.a.createElement(m,{filter:f}),c.a.createElement(O,{products:a,addProduct:p}))};var N=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[136,1,2]]]);
//# sourceMappingURL=main.52279336.chunk.js.map