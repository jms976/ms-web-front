(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[2],{13:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return p}));var r=n(5),a=Object(r.c)({name:"common",initialState:{leftMenuSize:150,menuStyle:[],isAuth:!1,authUser:null},reducers:{leftMenuSizeChange:function(e,t){e.leftMenuSize=t.payload},menuStyleChange:function(e,t){e.menuStyle=t.payload},setIsAuth:function(e,t){e.isAuth=t.payload},setAuthUser:function(e,t){e.authUser=t.payload}}}),c=a.actions,u=c.leftMenuSizeChange,s=c.menuStyleChange,i=c.setIsAuth,o=c.setAuthUser,p=function(e){return e.common};t.a=a.reducer},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n(17),a=function(){return Object(r.b)()},c=r.c},28:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return v})),n.d(t,"d",(function(){return j})),n.d(t,"g",(function(){return x}));var r=n(1),a=n.n(r),c=n(2),u=n(5),s=n(8),i=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("".concat("http://dev-api.maengmung.site/api/v1/supermarket","/member"),{headers:{noauth:"use"}});case 3:if("success"===(t=e.sent).data.status){e.next=6;break}return e.abrupt("return",Promise.reject(t));case 6:return e.abrupt("return",t.data.data);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("".concat("http://dev-api.maengmung.site/api/v1/supermarket","/member/").concat(t));case 3:if("success"===(n=e.sent).data.status){e.next=6;break}return e.abrupt("return",Promise.reject(n));case 6:return e.abrupt("return",n.data.data);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.put("".concat("http://dev-api.maengmung.site/api/v1/supermarket","/member/").concat(t,"/state?state=").concat(n));case 3:if("success"===(r=e.sent).data.status){e.next=6;break}return e.abrupt("return",Promise.reject(r));case 6:return e.abrupt("return",r.data.data);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.put("".concat("http://dev-api.maengmung.site/api/v1/supermarket","/member/").concat(t,"/license?license=").concat(n));case 3:if("success"===(r=e.sent).data.status){e.next=6;break}return e.abrupt("return",Promise.reject(r));case 6:return e.abrupt("return",r.data.data);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.put("".concat("http://dev-api.maengmung.site/api/v1/supermarket","/member/").concat(t,"/config"),n);case 3:if("success"===(r=e.sent).data.status){e.next=6;break}return e.abrupt("return",Promise.reject(r));case 6:return e.abrupt("return",r.data.data);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),f=Object(u.b)("members/oneMember",function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,o(t);case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0={};case 7:return n=e.t0,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=Object(u.b)("members/allMember",Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),m=Object(u.b)("members/stateUpeate",function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t.memberId,t.state);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=Object(u.b)("members/licenceUpeate",function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t.memberId,t.state);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=Object(u.b)("members/configUpeate",function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t.memberId,t.config);case 2:return n=e.sent,e.next=5,n;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=Object(u.c)({name:"member",initialState:{active:{},lists:[]},reducers:{licenseUadate:function(e,t){e.active=t.payload,e.lists=e.lists.map((function(e){return e._id===t.payload._id?t.payload:e}))}},extraReducers:function(e){e.addCase(b.fulfilled,(function(e,t){e.lists=t.payload})),e.addCase(f.fulfilled,(function(e,t){e.active=t.payload})),e.addCase(m.fulfilled,(function(e,t){var n,r;(null===(n=e.active)||void 0===n?void 0:n._id)&&(null===(r=e.active)||void 0===r?void 0:r._id)===t.payload._id&&(e.active=t.payload),e.lists=e.lists.map((function(e){return e._id===t.payload._id?t.payload:e}))})),e.addCase(v.fulfilled,(function(e,t){var n,r;(null===(n=e.active)||void 0===n?void 0:n._id)&&(null===(r=e.active)||void 0===r?void 0:r._id)===t.payload._id&&(e.active=t.payload),e.lists=e.lists.map((function(e){return e._id===t.payload._id?t.payload:e}))})),e.addCase(j.fulfilled,(function(e,t){e.active=t.payload,e.lists=e.lists.map((function(e){return e._id===t.payload._id?t.payload:e}))}))}}),x=function(e){return e.member};h.actions.licenseUadate,t.a=h.reducer},39:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l}));var r=n(1),a=n.n(r),c=n(2),u=n(5),s=n(8),i=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("".concat("http://dev-api.maengmung.site/api/v1/supermarket","/template/templates"));case 3:if("success"===(t=e.sent).data.status){e.next=6;break}return e.abrupt("return",Promise.reject(t));case 6:return e.abrupt("return",t.data.data);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),o=Object(u.b)("botTemplate/allBotTemplate",Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),p=Object(u.c)({name:"botTemplate",initialState:{lists:[]},reducers:{},extraReducers:function(e){e.addCase(o.fulfilled,(function(e,t){e.lists=t.payload}))}}),l=function(e){return e.botTemplate.lists};t.a=p.reducer},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l}));var r=n(1),a=n.n(r),c=n(2),u=n(5),s=n(8),i=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("".concat("http://dev-api.maengmung.site/api/v1/supermarket","/scenario/templates"));case 3:if("success"===(t=e.sent).data.status){e.next=6;break}return e.abrupt("return",Promise.reject(t));case 6:return e.abrupt("return",t.data.data);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),o=Object(u.b)("scenarioTemplate/allScenarioTemplate",Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),p=Object(u.c)({name:"scenarioTemplate",initialState:{lists:[]},reducers:{},extraReducers:function(e){e.addCase(o.fulfilled,(function(e,t){e.lists=t.payload}))}}),l=function(e){return e.scenarioTemplate.lists};t.a=p.reducer},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l}));var r=n(1),a=n.n(r),c=n(2),u=n(5),s=n(8),i=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("".concat("http://dev-api.maengmung.site/api/v1/supermarket","/library"));case 3:if("success"===(t=e.sent).data.status){e.next=6;break}return e.abrupt("return",Promise.reject(t));case 6:return e.abrupt("return",t.data.data);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),o=Object(u.b)("blockTemplate/allBlockTemplate",Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),p=Object(u.c)({name:"blockTemplate",initialState:{lists:[]},reducers:{},extraReducers:function(e){e.addCase(o.fulfilled,(function(e,t){e.lists=t.payload}))}}),l=function(e){return e.blockTemplate.lists};t.a=p.reducer},48:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(18),u=n.n(c),s=(n(48),n(22)),i=n(6),o=n(15),p=n(27),l=n(1),d=n.n(l),f=n(2),b=n(8),m=n(21),v=n(13);function j(){return(j=Object(f.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(m.b)(v.d).authUser,n=Object(m.a)(),r=function(){var e=Object(f.a)(d.a.mark((function e(){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",!0);case 2:return e.next=4,b.a.get("".concat("http://dev-api.maengmung.site","/auth/user")).catch((function(e){console.log("Not properly authenticated"),n(Object(v.f)(!1)),n(Object(v.e)(null))}));case 4:if(!(r=e.sent)||!r.data){e.next=9;break}return n(Object(v.f)(!0)),"success"===r.data.status&&n(Object(v.e)(r.data.data)),e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=5,r();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=n(3),x=["component"],O=function(e){var t=e.component,n=Object(p.a)(e,x),r=function(){return j.apply(this,arguments)}();return Object(h.jsx)(i.b,Object(o.a)(Object(o.a)({},n),{},{render:function(e){return r?Object(h.jsx)(t,Object(o.a)(Object(o.a)({},n),e)):Object(h.jsx)(i.a,{to:{pathname:"/login/fail",state:{from:e.location}}})}}))},y=(n(72),Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,135))}))),g=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(8)]).then(n.bind(null,141))})),w=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,142))})),k=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,143))})),P=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,144))})),S=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,136))})),C=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,137))})),T=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,138))})),z=Object(r.lazy)((function(){return n.e(15).then(n.bind(null,139))})),_=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,140))})),U=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(r.Suspense,{fallback:Object(h.jsx)("div",{children:"Loading..."}),children:Object(h.jsx)(s.a,{children:Object(h.jsxs)(i.d,{children:[Object(h.jsx)(O,{exact:!0,path:"/",component:y}),Object(h.jsx)(O,{exact:!0,path:"/main",component:y}),Object(h.jsx)(O,{exact:!0,path:"/customer",component:g}),Object(h.jsx)(O,{exact:!0,path:"/plugin/bot",component:w}),Object(h.jsx)(O,{exact:!0,path:"/plugin/scenario",component:k}),Object(h.jsx)(O,{exact:!0,path:"/plugin/block",component:P}),Object(h.jsx)(O,{exact:!0,path:"/manage/notice",component:S}),Object(h.jsx)(O,{exact:!0,path:"/manage/qna",component:C}),Object(h.jsx)(O,{exact:!0,path:"/manage/faq",component:T}),Object(h.jsx)(i.b,{exact:!0,path:"/login/success",component:z}),Object(h.jsx)(i.b,{exact:!0,path:"/login/fail",component:_}),Object(h.jsx)(i.b,{exact:!0,path:"/noAuth",component:g}),Object(h.jsx)(i.b,{path:"*",children:Object(h.jsx)("div",{children:"NotFound"})})]})})})})},A=n(5);function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var B=Object(A.b)("counter/fetchCount",function(){var e=Object(f.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),I=Object(A.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(B.pending,(function(e){e.status="loading"})).addCase(B.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),R=I.actions,q=(R.increment,R.decrement,R.incrementByAmount,I.reducer),F=n(28),J=n(39),N=n(40),W=n(41),E=Object(A.a)({reducer:{counter:q,member:F.a,botTemplate:J.a,scenarioTemplate:N.a,blockTemplate:W.a,common:v.a}}),L=n(17);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(L.a,{store:E,children:Object(h.jsx)(U,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){"use strict";var r=n(1),a=n.n(r),c=n(2),u=n(20),s=n.n(u);s.a.interceptors.request.use(function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"use"!==t.headers.noauth&&(t.withCredentials=!0),e.abrupt("return",Promise.resolve(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.reject(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),s.a.interceptors.response.use((function(e){return"error"===e.data.status?("noauth"===e.data.message&&(window.location.href="/login/fail"),Promise.reject({response:e,message:e.data.message})):e}),(function(e){return Promise.reject({response:e.response,message:e.reponse.data.message})})),t.a=s.a}},[[73,3,4]]]);
//# sourceMappingURL=main.975881bb.chunk.js.map