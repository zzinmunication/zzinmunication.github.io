(this["webpackJsonpzzinmunication-web"]=this["webpackJsonpzzinmunication-web"]||[]).push([[3,6,7],{103:function(e,t,n){"use strict";n.r(t);var r=n(165);t.default=r.default},164:function(e,t,n){"use strict";n.r(t),n.d(t,"ListHover",(function(){return o}));var r,c=n(257),i=n(258),a=n(118),o=i.a.div(r||(r=Object(c.a)(["\n  .ant-list-header {\n    border-bottom: 1px solid black;\n  }\n  ul.ant-list-items {\n    & > li.ant-list-item:hover {\n      background-color: rgba(0, 0, 0, 0.1);\n\n      &:last-child {\n        border-radius: 0px 0px 10px 10px;\n      }\n    }\n  } \n  \n\n  ","\n"])),(function(e){return Object(a.a)(e.style||{})}))},165:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n(117),i=n(0),a=n(292),o=n(291),u=n(267),s=n(164),l=n(39),b=n(119),d=n(6),j=n(9);t.default=function(e){var t=Object(i.useState)(""),n=Object(r.a)(t,2),f=n[0],O=n[1],h=Object(u.a)(f,500),p=Object(r.a)(h,1)[0],v=Object(l.d)(b.a),x=Object(d.f)(),m=Object(i.useMemo)((function(){return Object.keys(v)}),[v]);return Object(j.jsxs)(c.a,{children:[Object(j.jsx)(a.a,{placeholder:"input search text",size:"large",onChange:function(e){var t;return O(null==e||null===(t=e.target)||void 0===t?void 0:t.value)}}),Object(j.jsx)(s.ListHover,{children:Object(j.jsx)(o.b,{style:{background:"white",marginTop:10},header:Object(j.jsxs)("div",{children:["검색내용: ",p]}),bordered:!0,dataSource:m.filter((function(e){return e.toLowerCase().includes(p.toLowerCase())})),renderItem:function(e){return Object(j.jsx)(o.b.Item,{onClick:function(){x("/detail/".concat(e))},children:e})}})})]})}}}]);
//# sourceMappingURL=3.16cb23ef.chunk.js.map