(this["webpackJsonpproducts-search"]=this["webpackJsonpproducts-search"]||[]).push([[0],{135:function(e,t,a){e.exports=a(279)},140:function(e,t,a){},141:function(e,t,a){},143:function(e,t,a){},260:function(e,t,a){},261:function(e,t,a){},262:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),o=a.n(r),u=(a(140),a(141),a(36)),l=a.n(u),s=a(15),i=(a(143),a(283)),m=function(e){var t=e.filter,a=Object(n.useState)(""),r=Object(s.a)(a,2),o=r[0],u=r[1],l=Object(n.useState)(!1),m=Object(s.a)(l,2),d=m[0],f=m[1];return Object(n.useEffect)((function(){t({name:o,stocked:d})}),[d,o,t]),c.a.createElement("div",{className:"search-bar"},c.a.createElement(i.b,{type:"search",className:"search-input",leftIcon:"search-text",placeholder:"Search...",value:o,onChange:function(e){return u(e.target.value)}}),c.a.createElement(i.a,{checked:d,onChange:function(){return f(!d)}},"Only show products in stock"))},d=a(77),f=a.n(d),p=(a(260),a(261),function(e){return c.a.createElement("tr",null,c.a.createElement("th",{className:"category",colSpan:"100%"},e.name))}),h=(a(262),function(e){var t=e.product,a=t.name,n=t.price,r=t.stocked;return c.a.createElement("tr",null,c.a.createElement("td",{className:r?"":"red-color"},a),c.a.createElement("td",null,n))}),E=function(e){var t=e.products;return t=f()(t,(function(e){return e.category})),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"text-align-start"},"Name"),c.a.createElement("th",{className:"text-align-start"},"Price"))),Object.keys(t).map((function(e){return c.a.createElement("tbody",{key:e},c.a.createElement(p,{name:e,key:e}),t[e].map((function(e){return c.a.createElement(h,{product:e,key:e._id})})))})))},b="https://products-search-api.herokuapp.com/api",v=a(78),k=a.n(v),w=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),u=Object(s.a)(o,2),i=u[0],d=u[1];Object(n.useEffect)((function(){!function(){var e;l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(k.a.get("".concat(b,"/product")));case 2:e=t.sent,d(e.data),r(e.data);case 5:case"end":return t.stop()}}))}()}),[]);var f=Object(n.useCallback)((function(e){r(i.filter((function(t){return t.name.toLowerCase().includes(e.name.toLowerCase())&&(!e.stocked||t.stocked)})))}),[i]);return c.a.createElement("div",null,c.a.createElement(m,{filter:f}),c.a.createElement(E,{products:a}))};var O=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[135,1,2]]]);
//# sourceMappingURL=main.ca63eff4.chunk.js.map