(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{113:function(e,n,t){"use strict";t.r(n);var i,r,a,c,o,s,u,l,d,j,b,f,x,O,v,p=t(0),h=t.n(p),g=t(27),m=t.n(g),y=t(35),S=t(8),z=t(13),C=t(115),k=t(10),w=t(11),F=w.a.div(i||(i=Object(k.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),I=t(2),N=function(e){var n=e.size,t=void 0===n?"14px":n,i=e.children,r=e.bold;return Object(I.jsx)(C.a,{children:Object(I.jsx)(F,{size:t,bold:r,children:i})})},L=t(23),P=t(142),U=function(e){var n=e.size,t=e.color,i=e.thickness,r=e.variant;return Object(I.jsx)(P.a,{size:n,color:t,thickness:i,variant:r})},J=t(149),D=t(143),E=w.a.div(r||(r=Object(k.a)([""]))),B=(w.a.div(a||(a=Object(k.a)(["\n    display: flex;\n    justify-content: center;\n    & > * {\n        margin-inline-end: 8px;\n    }\n"]))),function(e){var n=e.isChecked,t=e.onChange,i=e.label,r=e.value;return Object(I.jsx)(E,{children:Object(I.jsx)(D.a,{control:Object(I.jsx)(J.a,{checked:n,onChange:function(){t&&t(r)},color:"primary"}),label:i})})}),M=w.a.div(c||(c=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),A=w.a.div(o||(o=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),H=w.a.div(s||(s=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),R=w.a.div(u||(u=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),V=w.a.img(l||(l=Object(k.a)(["\n  border-radius: 45%;\n"]))),q=w.a.div(d||(d=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n"]))),G=w.a.div(j||(j=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),T=w.a.div(b||(b=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),K=[{id:"BR",name:"Brazil"},{id:"AU",name:"Australia"},{id:"CA",name:"Canada"},{id:"DE",name:"Germany"},{id:"CH",name:"Switzerland"}],Q=function(e){var n=e.filterByCountry,t=Object(p.useState)([]),i=Object(z.a)(t,2),r=i[0],a=i[1];return Object(I.jsx)(T,{children:K.map((function(e,t){return Object(I.jsx)(B,{value:e.id,label:e.name,onChange:function(){return function(e){var t=r.indexOf(e),i=Object(L.a)(r);-1===t?i.push(e):i.splice(t,1),a(i),n(i)}(e.name)},isChecked:-1!==r.indexOf(e.name)},t)}))})},W=t(144),X=t(72),Y=t.n(X),Z=function(e){var n=e.index,t=e.user,i=e.isLast,r=e.isLoading,a=e.isFavorite,c=e.toggleFavorite,o=e.setPageNumber,s=Object(p.useState)(),u=Object(z.a)(s,2),l=u[0],d=u[1],j=Object(p.useRef)(),b=Object(p.useCallback)((function(e){r||(j.current&&j.current.disconnect(),j.current=new IntersectionObserver((function(e){e[0].isIntersecting&&o((function(e){return e+1}))})),e&&j.current.observe(e))}),[r]);return Object(I.jsxs)(H,{ref:i?b:null,onMouseEnter:function(){return function(e){d(e)}(n)},onMouseLeave:function(){d()},children:[Object(I.jsx)(V,{src:null===t||void 0===t?void 0:t.picture.large,alt:""}),Object(I.jsxs)(R,{children:[Object(I.jsxs)(N,{size:"22px",bold:!0,children:[null===t||void 0===t?void 0:t.name.title," ",null===t||void 0===t?void 0:t.name.first," ",null===t||void 0===t?void 0:t.name.last]}),Object(I.jsx)(N,{size:"14px",children:null===t||void 0===t?void 0:t.email}),Object(I.jsxs)(N,{size:"14px",children:[null===t||void 0===t?void 0:t.location.street.number," ",null===t||void 0===t?void 0:t.location.street.name]}),Object(I.jsxs)(N,{size:"14px",children:[null===t||void 0===t?void 0:t.location.city," ",null===t||void 0===t?void 0:t.location.country]})]}),Object(I.jsx)(G,{isVisible:n===l||a,onClick:function(){c(t)},children:Object(I.jsx)(W.a,{children:Object(I.jsx)(Y.a,{color:"error"})})})]},n)},$=function(e){var n=e.users,t=e.isLoading,i=e.favorites,r=e.isFavoritePage,a=void 0!==r&&r,c=e.toggleFavorite,o=e.setPageNumber,s=Object(p.useState)([]),u=Object(z.a)(s,2),l=u[0],d=u[1],j=Object(p.useState)(!1),b=Object(z.a)(j,2),f=b[0],x=b[1],O=function(e){var n=l.findIndex((function(n){return n.login.uuid===e.login.uuid}));if(-1!==n){var t=Object(L.a)(l);t.splice(n,1),d(t)}c(e)},v=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(I.jsx)(Z,{index:e,user:n,isLast:r,isLoading:t,isFavorite:-1!==i.findIndex((function(e){return n.login.uuid===e.login.uuid})),toggleFavorite:a?O:c,setPageNumber:o},e)};return Object(I.jsxs)(M,{children:[Object(I.jsx)(Q,{filterByCountry:function(e){0===e.length?(d([]),x(!1)):(d(n.filter((function(n){return e.includes(n.location.country)}))),x(!0))}}),Object(I.jsxs)(A,{children:[f?l.map((function(e,n){return v(n,e)})):n.map((function(e,t){return t+1===n.length?v(t,e,!0):v(t,e)})),t&&Object(I.jsx)(q,{children:Object(I.jsx)(U,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})]})},_=function(e){var n=JSON.parse(localStorage.getItem("favoritesUsersData"));if(!n)return[];var t=n.findIndex((function(n){return n.login.uuid===e.login.uuid}));return-1===t||(n.splice(t,1),localStorage.setItem("favoritesUsersData",JSON.stringify(n))),n},ee=function(){var e=JSON.parse(localStorage.getItem("favoritesUsersData"));return e||[]},ne=t(49),te=t.n(ne),ie=t(73),re=t(74),ae=t.n(re),ce=w.a.div(f||(f=Object(k.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),oe=w.a.div(x||(x=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),se=w.a.div(O||(O=Object(k.a)(["\n  display: flex;\n"]))),ue=(w.a.div(v||(v=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=Object(p.useState)([]),n=Object(z.a)(e,2),t=n[0],i=n[1],r=Object(p.useState)(1),a=Object(z.a)(r,2),c=a[0],o=a[1],s=function(){var e=Object(p.useState)([]),n=Object(z.a)(e,2),t=n[0],i=n[1],r=Object(p.useState)(!1),a=Object(z.a)(r,2),c=a[0],o=a[1];function s(){return(s=Object(ie.a)(te.a.mark((function e(n){var t;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,ae.a.get("https://randomuser.me/api/?results=25&page=".concat(n));case 3:t=e.sent,o(!1),i((function(e){return[].concat(Object(L.a)(e),Object(L.a)(t.data.results))}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{users:t,isLoading:c,fetchUsers:function(e){return s.apply(this,arguments)}}}(),u=s.users,l=s.isLoading,d=s.fetchUsers;Object(p.useEffect)((function(){!function(){var e=ee();i(e)}()}),[]),Object(p.useEffect)((function(){d(c)}),[c]);return Object(I.jsx)(ce,{children:Object(I.jsxs)(oe,{children:[Object(I.jsx)(se,{children:Object(I.jsx)(N,{size:"64px",bold:!0,children:"PplFinder"})}),Object(I.jsx)($,{users:u,isLoading:l,favorites:t,toggleFavorite:function(e){var n;n=-1===t.findIndex((function(n){return n.login.uuid===e.login.uuid}))?function(e){var n=JSON.parse(localStorage.getItem("favoritesUsersData")),t=n?Object(L.a)(n):[];return t.push(e),localStorage.setItem("favoritesUsersData",JSON.stringify(t)),t}(e):_(e),i(n)},setPageNumber:o})]})})}),le=function(){var e=Object(p.useState)([]),n=Object(z.a)(e,2),t=n[0],i=n[1];Object(p.useEffect)((function(){!function(){var e=ee();i(e)}()}),[]);return Object(I.jsx)(ce,{children:Object(I.jsxs)(oe,{children:[Object(I.jsx)(se,{children:Object(I.jsx)(N,{size:"64px",bold:!0,children:"PplFinder - Favorites"})}),Object(I.jsx)($,{users:t,isLoading:!1,favorites:t,isFavoritePage:!0,toggleFavorite:function(e){var n=_(e);i(n)},setPageNumber:function(){return null}})]})})},de=t(75),je=t(145),be=t(146),fe=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},i=h.a.useMemo((function(){return Object(de.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(I.jsxs)(je.a,{theme:i,children:[Object(I.jsx)(be.a,{}),n]})},xe=t(150),Oe=t(148),ve=t(147),pe=function(){var e=Object(p.useState)(0),n=Object(z.a)(e,2),t=n[0],i=n[1];return Object(I.jsx)(xe.a,{position:"static",color:"transparent",style:{position:"fixed",top:0},children:Object(I.jsxs)(Oe.a,{value:t,onChange:function(e,n){i(n)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",children:[Object(I.jsx)(ve.a,{label:"Home",index:0,to:"/",component:y.b}),Object(I.jsx)(ve.a,{label:"Favorites",index:1,to:"/favorites",component:y.b})]})})},he=function(){return Object(I.jsx)(fe,{children:Object(I.jsxs)(y.a,{children:[Object(I.jsx)(pe,{}),Object(I.jsxs)(S.c,{children:[Object(I.jsx)(S.a,{exact:!0,path:"/",component:ue}),Object(I.jsx)(S.a,{exact:!0,path:"/favorites",component:le})]})]})})};m.a.render(Object(I.jsx)(he,{}),document.querySelector("#root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.dfcb506e.chunk.js.map