(this["webpackJsonp07-slider"]=this["webpackJsonp07-slider"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/ArrowLeft.e1c5226f.svg"},function(e,t,n){e.exports=n.p+"static/media/ArrowRight.d86e91f6.svg"},function(e,t,n){e.exports={slideItem:"SliderItem_slideItem__3k9nB"}},function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),i=n.n(r),o=(n(13),n(2)),l=(n(14),n(1)),u=n(5),s=n.n(u),m=n(6),d=n.n(m),h=(n(15),c.a.memo((function(e){var t,n=e.infinite,r=void 0===n||n,i=e.startPosition,u=void 0===i?0:i,m=e.children,h={currentPosition:u,length:0},f=Object(a.useState)(h),b=Object(o.a)(f,2),g=b[0],p=b[1],v=Object(a.useState)(""),E=Object(o.a)(v,2),j=E[0],O=E[1],k=Object(a.useState)(0),w=Object(o.a)(k,2),y=w[0],N=w[1];Object(a.useEffect)((function(){return p((function(e){return Object(l.a)(Object(l.a)({},e),{},{length:m.length})}))}),[]);var P=function(e){return e<0},S=function(e,t){var n=t.currentPosition+(e?1:-1);return r&&(n<0&&(n=t.length-1),n>t.length-1&&(n=0)),n},T=function(){p((function(e){return Object(l.a)(Object(l.a)({},e),{},{currentPosition:S(!1,e)})}))},x=function(){p((function(e){return Object(l.a)(Object(l.a)({},e),{},{currentPosition:S(!0,e)})}))},C=!(!r&&0===g.currentPosition),I=!(!r&&g.currentPosition===g.length-1);return c.a.createElement("div",{className:"slider"},c.a.createElement("div",{className:"slide"},C&&c.a.createElement("div",{className:"additionalFirst",onClick:T},m[S(!1,g)]),c.a.createElement("div",{className:"main",onTouchStart:function(e){t=e.changedTouches[0].pageX},onTouchEnd:function(e){var n=e.changedTouches[0].pageX-t;if(0===n)return null;var a=P(n);p((function(e){return Object(l.a)(Object(l.a)({},e),{},{currentPosition:S(a,e)})}))}},m[g.currentPosition]),I&&c.a.createElement("div",{className:"additionalSecond",onClick:x},m[S(!0,g)])),c.a.createElement("div",{className:"controlPanel"},C&&c.a.createElement("img",{src:s.a,alt:"",className:"buttonLeft",onClick:T}),c.a.createElement("div",{className:"inputField"},c.a.createElement("input",{className:"input",type:"number",name:"position",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0441\u043b\u0430\u0439\u0434\u0430",onChange:function(e){return N(e.target.value)}}),c.a.createElement("input",{type:"button",className:"button",onClick:function(){return 0>y-1?O("\u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 \u0441\u043b\u0430\u0439\u0434\u0430 "):y-1>g.length?O("\u043d\u043e\u043c\u0435\u0440 \u0441\u043b\u0430\u0439\u0434\u0430 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u0430\u0439\u0434\u043e\u0432"):(O(""),p((function(e){return Object(l.a)(Object(l.a)({},e),{},{currentPosition:y-1})})))},value:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})),I&&c.a.createElement("img",{src:d.a,alt:"",className:"buttonRight",onClick:x}),c.a.createElement("span",{style:{color:"red",display:"block"}},j||c.a.createElement("br",null))))}))),f={width:100,height:100,background:"Yellow",color:"black",verticalAlign:"middle",minHeight:"10em",display:"table-cell"},b=function(e){var t=e.id;return c.a.createElement("div",{style:f},c.a.createElement("p",null,t))},g=n(7),p=n.n(g),v=function(e){var t=e.onTouchStart,n=e.onTouchEnd,a=e.children;return c.a.createElement("div",{className:p.a.slideItem,onTouchStart:t,onTouchEnd:n},a)},E=function(){var e=Object(a.useState)(!0),t=Object(o.a)(e,2),n=t[0],r=t[1],i=[1,2,3,4,5,6].map((function(e){return c.a.createElement(v,{key:e}," ",c.a.createElement(b,{id:e})," ")}));return c.a.createElement(a.Fragment,null,c.a.createElement("div",{style:{margin:"20px 0  0 20px"}},c.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return r(!n)}})," \u0411\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e"),c.a.createElement("div",{style:{marginTop:10}},c.a.createElement(h,{infinite:n},i)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.03904c80.chunk.js.map