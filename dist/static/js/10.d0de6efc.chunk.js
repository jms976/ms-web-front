(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[10],{135:function(n,e,t){"use strict";t.r(e);t(0);var i=t(21),o=t(13),r=t(77),c=t(81),a=t(80),d=t(3);e.default=function(){var n=Object(i.b)(o.d).leftMenuSize;return Object(d.jsxs)(r.a,{width:n,children:[Object(d.jsx)(c.a,{}),Object(d.jsx)(a.a,{}),Object(d.jsx)("div",{children:"\uba54\uc778 \ud398\uc774\uc9c0"})]})}},77:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"c",(function(){return B})),t.d(e,"b",(function(){return z})),t.d(e,"d",(function(){return H})),t.d(e,"e",(function(){return P}));var i,o,r,c,a,d,l,s=t(74),b=t(75),u=b.a.div(i||(i=Object(s.a)(["\n  display: flex;\n  position: absolute;\n  top: 55px;\n  left: ",";\n  width: ",";\n  min-width: 900px;\n"])),(function(n){return n.width?n.width+"px":"150px"}),(function(n){return n.width?"calc(100% - "+n.width+"px);":"calc(100% - 150px)"})),f=t(15),p=t(0),A=t.n(p),g=t(82),x=t(99),h=t(86),j=t(3),O=b.a.div(o||(o=Object(s.a)([""]))),m={control:function(n,e){return Object(f.a)(Object(f.a)({},n),{},{boxShadow:"none",borderRadius:e.menuIsOpen?"4px 4px 0 0":"4px",minHeight:e.selectProps.minHeight?e.selectProps.minHeight:25,height:"100%",borderColor:"rgb(229,230,235)",cursor:"pointer"})},valueContainer:function(n,e){return Object(f.a)(Object(f.a)({},n),{},{fontSize:13,color:"#767676",height:"100%"})},indicatorSeparator:function(n,e){return Object(f.a)(Object(f.a)({},n),{},{display:"none"})},dropdownIndicator:function(n,e){return Object(f.a)(Object(f.a)({},n),{},{padding:"0 5px",fontSize:21})},clearIndicator:function(n,e){return Object(f.a)(Object(f.a)({},n),{},{svg:{width:15,height:15}})},menu:function(n,e){return Object(f.a)(Object(f.a)({},n),{},{margin:"0 1px 1px",borderRadius:"0 0 4px 4px",boxShadow:"0 0 0 1px rgb(55, 125, 255)",width:"calc(100% - 2px)",padding:0})},option:function(n,e){return Object(f.a)(Object(f.a)({},n),{},{color:e.isDisabled?"#989898":"#767676",backgroundColor:e.isDisabled?"#f2f2f2":"#fff",cursor:e.isDisabled?"not-allowed":"pointer",padding:"0 0 0 15px",fontSize:13,height:30,lineHeight:"30px",":hover":{backgroundColor:"rgb(233, 241, 254)"},overflow:e.data.isOverflow?"none":"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"})},noOptionsMessage:function(n,e){return Object(f.a)(Object(f.a)({},n),{},{padding:0,fontSize:13})}},C=function(n){return Object(j.jsx)(x.l.DropdownIndicator,Object(f.a)(Object(f.a)({},n),{},{children:Object(j.jsx)(g.a,{})}))},I=function(n){return Object(j.jsx)(O,{onClick:function(n){n.stopPropagation(),n.preventDefault()},children:Object(j.jsx)(h.a,Object(f.a)(Object(f.a)({},n),{},{isSearchable:n.isSearchable||!1,styles:m,components:{DropdownIndicator:C},onChange:n.onChange,isDisabled:n.disabled,menuPortalTarget:document.querySelector("body")}))})},B=A.a.memo(I),E=t(76),v=t(27),w=t(83),Q=["onChange","isCount","maxLength","isValid","isError","width","isDisabled","isSeachIcon"],k=b.a.div(r||(r=Object(s.a)(["\n  position: relative;\n  width: ",";\n"])),(function(n){return n.width})),S=b.a.input(c||(c=Object(s.a)(["\n  position: relative;\n  height: 32px;\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 13px;\n  background-color: rgb(255, 255, 255);\n  color: var(--black);\n  outline: none;\n  padding: ",";\n  border-radius: 4px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: ",";\n  border-image: initial;\n\n  &:focus {\n    border-width: 1px;\n    border-style: solid;\n    border-color: ",";\n    border-image: initial;\n\n    ","\n  }\n\n  &[disabled] {\n    background-color: hsl(0, 0%, 95%);\n    border-color: hsl(0, 0%, 90%);\n    color: hsl(0, 0%, 60%);\n  }\n  ","\n\n  ","\n"])),(function(n){return n.isCount?"0px calc(54px) 0px 10px":"0px 10px"}),(function(n){return n.isValid?"rgb(229, 230, 235)":"rgb(255, 0, 0)"}),(function(n){return n.isValid?"rgb(55, 125, 255)":"rgb(255, 0, 0)"}),(function(n){return n.isError&&"\n            border-color: #d45027;\n        "}),(function(n){return n.disabled&&"\n            background-color: red\n        "}),(function(n){return n.isError&&"\n        border-color: #d45027;\n    "})),Y=b.a.span(a||(a=Object(s.a)(["\n  display: flex;\n  -webkit-box-pack: end;\n  justify-content: flex-end;\n  -webkit-box-align: center;\n  align-items: center;\n  font-size: 11px;\n  color: rgb(148, 148, 148);\n  position: absolute;\n  height: 20px;\n  width: 44px;\n  left: calc((100% - 44px) - 10px);\n  top: 50%;\n  transform: translateY(-50%);\n"]))),J=b.a.span(d||(d=Object(s.a)(["\n  display: flex;\n  -webkit-box-pack: end;\n  justify-content: flex-end;\n  -webkit-box-align: center;\n  align-items: center;\n  color: rgb(148, 148, 148);\n  position: absolute;\n  height: 29px;\n  width: 30px;\n  left: calc(100% - 44px);\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 1;\n"]))),z=function(n){var e=n.onChange,t=n.isCount,i=n.maxLength,o=n.isValid,r=void 0===o||o,c=n.isError,a=void 0!==c&&c,d=n.width,l=n.isDisabled,s=n.isSeachIcon,b=Object(v.a)(n,Q),u=Object(p.useState)(""),A=Object(E.a)(u,2),g=A[0],x=A[1],h=Object(p.useState)(0),O=Object(E.a)(h,2),m=O[0],C=O[1],I=Object(p.useState)(!0),B=Object(E.a)(I,2),z=B[0],U=B[1];return Object(p.useEffect)((function(){b.value&&(x(b.value),C(b.value.length))}),[b.value]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(k,{width:d,children:[s&&z&&Object(j.jsx)(J,{children:Object(j.jsx)(w.a,{})}),Object(j.jsx)(S,Object(f.a)(Object(f.a)({isCount:t,isValid:r,isError:a,value:g,onChange:function(n){t&&i&&n.target.value.length>i||(U(!1),0===n.target.value.length&&U(!0),x(n.target.value),C(n.target.value.length),e(n))},autoComplete:"off"},b),{},{disabled:l})),t&&Object(j.jsxs)(Y,{children:[m," / ",i]})]})})},U=t(84),q=t.n(U),y=t(78),V=t.n(y),K=b.a.span(l||(l=Object(s.a)(["\n  display: inline-block;\n"]))),G=function(n){var e=n.checked,t=n.onChange,i=n.large,o=void 0!==i&&i,r=n.isLoading,c=void 0!==r&&r;return Object(j.jsx)(K,{children:Object(j.jsx)(q.a,{onChange:function(n,e){t(n,e)},checked:e,onColor:o?"#d2e3ff":"#E9F1FE",onHandleColor:"#377dff",offColor:"#eaeaea",offHandleColor:"#c0bfc0",handleDiameter:o?26:16,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"none",activeBoxShadow:"none",height:20,width:o?50:36,className:V()({"react-switch":!0,large:o,active:e}),disabled:c})})},H=A.a.memo(G),R=t(85),T=function(n){var e,t=n.children,i=n.content,o=n.placement,r=n.width,c=n.color,a=n.bgColor,d=n.borderColor,l=Object(R.b)(),s=Object(E.a)(l,2),b=s[0],u=s[1],A=Object(R.c)({isOpen:b,placement:o||"top-center",triggerOffset:10}),g=A.triggerProps,x=A.layerProps,h=A.arrowProps,O=A.renderLayer;return e=function(n){return["string","number"].includes(typeof n)}(t)?Object(j.jsx)("span",Object(f.a)(Object(f.a)(Object(f.a)({className:"tooltip-text-wrapper"},g),u),{},{children:t})):p.cloneElement(t,Object(f.a)(Object(f.a)({},g),u)),Object(j.jsxs)(j.Fragment,{children:[e,O(Object(j.jsx)(j.Fragment,{children:b&&Object(j.jsxs)("div",Object(f.a)(Object(f.a)({},x),{},{style:Object(f.a)(Object(f.a)({},x.style),{},{zIndex:11,backgroundColor:a||"#1a1a1a",color:c||"#fff",padding:"5px 10px",fontSize:13,lineHeight:"18px",borderRadius:5,border:"1px solid ".concat(d||"#1a1a1a"),boxShadow:"rgba(210, 210, 210, 0.5) 0px 0px 3px 0px",width:r||"auto"}),children:[i,Object(j.jsx)(R.a,Object(f.a)(Object(f.a)({},h),{},{size:6,angle:45,roundness:1,borderWidth:1,borderColor:d||"#1a1a1a",backgroundColor:a||"#1a1a1a"}))]}))}))]})};var P=p.memo(T)},79:function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return i})),t.d(e,"d",(function(){return o}));var i=t.p+"static/media/msms.774b33f8.jpg",o="data:image/png;base64,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"},80:function(n,e,t){"use strict";var i,o,r,c,a,d,l=t(87),s=t(76),b=t(0),u=t(92),f=t(78),p=t.n(f),A=t(6),g=t(21),x=t(91),h=t(3),j=function(){return[{index:0,itemId:"/customer",title:"\uace0\uac1d\uad00\ub9ac",show:!0,icon:Object(h.jsx)(x.g,{size:20})},{index:1,title:"\ud50c\ub7ec\uadf8\uc778",itemId:"/plugin",subOpen:!1,subNav:[{index:0,title:"\ubd07 \ud15c\ud50c\ub9bf",itemId:"/plugin/bot",show:!0,icon:Object(h.jsx)(x.b,{size:20})},{index:1,title:"\uc2dc\ub098\ub9ac\uc624 \ud15c\ud50c\ub9bf",itemId:"/plugin/scenario",show:!0,icon:Object(h.jsx)(x.a,{size:20})},{index:2,title:"\ube14\ub85d \ud15c\ud50c\ub9bf",itemId:"/plugin/block",show:!0,icon:Object(h.jsx)(x.f,{size:20})}],show:!0},{index:2,title:"\uc6b4\uc601\uad00\ub9ac",itemId:"/manage",subOpen:!1,subNav:[{index:0,title:"\uacf5\uc9c0\uc0ac\ud56d",itemId:"/manage/notice",show:!0,icon:Object(h.jsx)(x.c,{size:20})},{index:1,title:"QnA",itemId:"/manage/qna",show:!0,icon:Object(h.jsx)(x.d,{size:20})},{index:2,title:"FAQ",itemId:"/manage/faq",show:!0,icon:Object(h.jsx)(x.e,{size:20})}],show:!0}]},O=t(77),m=t(13),C=t(74),I=t(75),B=I.a.div(i||(i=Object(C.a)(["\n  user-select: none;\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  position: fixed;\n  flex-direction: column;\n  width: ",";\n  height: calc(100% - 95px);\n  top: 55px;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  padding: 20px 0;\n  color: #1a1a1a;\n  background-color: #fcfcfc;\n"])),(function(n){return n.width?n.width+"px":"150px"})),E=(I.a.div(o||(o=Object(C.a)(["\n  margin: 8px 11px;\n  flex-direction: column;\n  margin-right: auto;\n  cursor: pointer;\n  span {\n    display: flex;\n    background: #fcfcfc;\n    padding: 2px;\n    border: 1px solid hsl(0deg 0% 70%);\n    border-radius: 5px;\n    color: hsl(0deg 0% 70%);\n    :hover {\n      color: #377dff;\n      border-color: #377dff;\n    }\n  }\n"]))),I.a.div(r||(r=Object(C.a)(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n"])))),v=I.a.div(c||(c=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 10px;\n  margin-right: auto;\n  cursor: pointer;\n  span {\n    display: flex;\n    background: #fcfcfc;\n    padding: 4px;\n    border-radius: 5px;\n    color: hsl(0deg 0% 70%);\n    margin-bottom: 20px;\n    :hover {\n      color: #377dff;\n      background: #e9f1fe;\n    }\n    &.active {\n      color: #377dff;\n      background: #e9f1fe;\n    }\n  }\n"]))),w=I.a.span(a||(a=Object(C.a)(['\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  line-height: 30px;\n  font-size: 13px;\n  background: #fcfcfc;\n  &.active {\n    background-color: #e9f1fe;\n    &:after {\n      content: " ";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 3px;\n      bottom: 0;\n      background-color: #377dff;\n    }\n  }\n  &.itemWrapper:not(.active) {\n    :hover {\n      background: #f8f8f8;\n    }\n  }\n  span {\n    &.menuFlag {\n      position: absolute;\n      right: 20px;\n    }\n    &.menuTitle {\n      width: 100%;\n      padding-left: 10px;\n    }\n  }\n']))),Q=I.a.span(d||(d=Object(C.a)(['\n  position: relative;\n  padding: 0 20px 0;\n  font-size: 11px;\n  background: #fcfcfc;\n  &.subItemWrapper:not(.active) {\n    :hover {\n      background: #f8f8f8;\n    }\n  }\n  &.active {\n    background-color: #e9f1fe;\n    &:after {\n      content: " ";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 3px;\n      bottom: 0;\n      background-color: #377dff;\n    }\n  }\n'])));e.a=Object(A.h)((function(n){var e=n.location.pathname,t=Object(g.b)(m.d),i=Object(g.a)(),o=Object(A.g)(),r=Object(b.useState)(j()),c=Object(s.a)(r,2),a=c[0],d=c[1],f=Object(b.useState)(150===t.leftMenuSize?"unfold":"fold"),x=Object(s.a)(f,2),C=x[0],I=x[1];Object(b.useEffect)((function(){I(150===t.leftMenuSize?"unfold":"fold")}),[t.leftMenuSize]),Object(b.useEffect)((function(){var n="/".concat(e.split("/")[1]),o=t.menuStyle.filter((function(n){return n.subOpen}));d(a.map((function(e){return e.itemId===n||o.some((function(n){return n.itemId===e.itemId}))?(e.subOpen=!0,e):e}))),i(Object(m.c)(a.map((function(n){return{itemId:n.itemId,subOpen:(null===n||void 0===n?void 0:n.subOpen)||!1}}))))}),[e]);var k=Object(b.useCallback)((function(n){if(!n.subOpen||e.split("/")[1]!==n.itemId.split("/")[1])if(n.subNav){var t=Object(l.a)(a);t[n.index].subOpen=!t[n.index].subOpen,d(t),i(Object(m.c)(t.map((function(n){return{itemId:n.itemId,subOpen:(null===n||void 0===n?void 0:n.subOpen)||!1}}))))}else o.push(n.itemId)}),[a]);return Object(h.jsxs)(B,{width:t.leftMenuSize,children:["unfold"===C&&Object(h.jsx)(E,{children:a&&a.map((function(n){return Object(h.jsxs)(w,{className:p()({active:e===n.itemId,itemWrapper:!0}),children:[Object(h.jsxs)("div",{onClick:function(){k(n)},children:[Object(h.jsx)("span",{className:"menuTitle",children:n.title}),n.subNav&&Object(h.jsx)("span",{className:"menuFlag",children:n.subOpen?Object(h.jsx)(u.b,{}):Object(h.jsx)(u.a,{})})]}),Object(h.jsx)(E,{children:n.subNav&&n.subNav.filter((function(e){return n.subOpen})).map((function(n){return Object(h.jsx)(Q,{onClick:function(){n.itemId&&o.push(n.itemId)},className:p()({active:e===n.itemId,subItemWrapper:!0}),children:n.title},n.index)}))})]},n.index)}))}),"fold"===C&&Object(h.jsx)(v,{children:a&&a.filter((function(n){return n.show})).map((function(n){if("subNav"in n)return n.subNav.filter((function(n){return n.show})).map((function(n){var t=function(){return n.icon};return Object(h.jsx)(O.e,{content:n.title,placement:"right-center",color:"#1a1a1a",borderColor:"#377dff",bgColor:"#fff",children:Object(h.jsx)("span",{onClick:function(){o.push(n.itemId)},className:p()({active:e===n.itemId}),children:Object(h.jsx)(t,{})})},n.index)}));var t=function(){return n.icon};return Object(h.jsx)(O.e,{content:n.title,placement:"right-center",color:"#1a1a1a",borderColor:"#377dff",bgColor:"#fff",children:Object(h.jsx)("span",{onClick:function(){o.push(n.itemId)},className:p()({active:e===n.itemId}),children:Object(h.jsx)(t,{})})},n.index)}))})]})}))},81:function(n,e,t){"use strict";t(0);var i,o,r,c,a=t(22),d=t(21),l=t(13),s=t(90),b=t(74),u=t(75),f=t(79),p=u.a.div(i||(i=Object(b.a)(["\n  display: flex;\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 54px;\n  z-index: 10;\n  background-color: #fcfcfc;\n  border-bottom: 1px solid #d8d8d8;\n"]))),A=u.a.span(o||(o=Object(b.a)(["\n  display: flex;\n  width: 90px;\n  height: 22px;\n  margin: 0 10px;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-image: url(",");\n  background-image: image-set(\n    url(",") 1x,\n    url(",") 2x,\n    url(",") 3x\n  );\n"])),f.a,f.a,f.b,f.c),g=u.a.span(r||(r=Object(b.a)(["\n  margin: 15px 0 15px 10px;\n  cursor: pointer;\n  color: hsl(0deg 0% 70%);\n  width: 25px;\n  height: 25px;\n  :hover {\n    color: #377dff;\n  }\n"]))),x=u.a.div(c||(c=Object(b.a)(["\n  display: flex;\n  font-size: 12px;\n  margin-right: 20px;\n  margin-right: 20px;\n  margin-left: auto;\n"]))),h=t(3);e.a=function(){var n=Object(d.a)(),e=Object(d.b)(l.d).leftMenuSize,t=Object(d.b)(l.d).authUser;return Object(h.jsxs)(p,{children:[Object(h.jsx)(g,{onClick:function(){n(Object(l.b)(150===e?50:150))},children:Object(h.jsx)(s.a,{size:25})}),Object(h.jsx)(a.b,{to:"/main",children:Object(h.jsx)(A,{})}),t&&Object(h.jsx)(x,{children:t.email||"--"})]})}}}]);
//# sourceMappingURL=10.d0de6efc.chunk.js.map