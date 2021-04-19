(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(e,t,a){e.exports={container:"Cards_container__13bO7",card:"Cards_card__rYJN3",infected:"Cards_infected__3X7Wx",recovered:"Cards_recovered__2gTz3",deaths:"Cards_deaths__1ViVy"}},204:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),o=a.n(c),s=a(6),i=a.n(s),u=a(11),d=a(17),l=a(223),j=a(227),b=a(224),p=a(225),f=a(14),h=a.n(f),x=a(31),v=a.n(x),O=a(32),m=a.n(O),g=a(2),y=function(e){var t=e.data,a=t.confirmed,n=t.recovered,r=t.deaths,c=t.lastUpdate;return a?Object(g.jsx)("div",{className:h.a.container,children:Object(g.jsxs)(l.a,{container:!0,spacing:3,justify:"center",children:[Object(g.jsx)(l.a,{item:!0,component:j.a,xs:14,md:3,className:m()(h.a.card,h.a.infected),children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(p.a,{color:"textSecondary",gutterButton:!0,children:"Infected"}),Object(g.jsx)(p.a,{variant:"h5",children:Object(g.jsx)(v.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(g.jsx)(p.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(g.jsx)(p.a,{variant:"body2",children:"Number of active cases"})]})}),Object(g.jsx)(l.a,{item:!0,component:j.a,xs:12,md:3,className:m()(h.a.card,h.a.recovered),children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(p.a,{color:"textSecondary",gutterBotton:!0,children:"Recovered"}),Object(g.jsx)(p.a,{variant:"h5",children:Object(g.jsx)(v.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(g.jsx)(p.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(g.jsx)(p.a,{variant:"body2",children:"Number of recoveries"})]})}),Object(g.jsx)(l.a,{item:!0,component:j.a,xs:12,md:3,className:m()(h.a.card,h.a.deaths),children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(p.a,{color:"textSecondary",gutterBotton:!0,children:"Deaths"}),Object(g.jsx)(p.a,{variant:"h5",children:Object(g.jsx)(v.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(g.jsx)(p.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(g.jsx)(p.a,{variant:"body2",children:"Number of deaths"})]})})]})}):"Loading..."},w=a(33),S=a.n(w),C="https://covid19.mathdro.id/api",_=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c,o,s,u,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=C,e.t0=!0,e.next=e.t0===(void 0!==t)?4:6;break;case 4:return a="".concat(C,"/countries/").concat(t),e.abrupt("break",6);case 6:return e.prev=6,e.next=9,S.a.get(a);case 9:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,u=r.lastUpdate,d={confirmed:c,recovered:o,deaths:s,lastUpdate:u},e.abrupt("return",d);case 19:e.prev=19,e.t1=e.catch(6);case 21:case"end":return e.stop()}}),e,null,[[6,19]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(C,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(C,"/countries"));case 3:return t=e.sent,a={response:t.data.countries.map((function(e){return e.name}))},e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),D=a(45),B=a(76),E=a.n(B),R=function(e){var t=e.data,a=e.country,r=Object(n.useState)([]),c=Object(d.a)(r,2),o=c[0],s=c[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,k();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=o.length?Object(g.jsx)(D.Line,{data:{labels:o.map((function(e){return e.date})),datasets:[{data:o.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:o.map((function(e){return e.deaths})),label:"Deaths",borderColor:"rgb(187, 69, 69)",backgroundColor:"grey",fill:!0}]}}):null,j=t.confirmed?Object(g.jsx)(D.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgb(129, 115, 115)","rgb(113, 214, 45)","rgb(187, 69, 69)"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(a)}}}):null;return Object(g.jsx)("div",{className:E.a.container,children:a?j:l})},I=a(228),J=a(226),M=a(77),V=a.n(M),W=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),r=Object(d.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=N(),e.next=3,t;case 3:a=e.sent,o(a.response);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(g.jsx)(I.a,{className:V.a.formControl,children:Object(g.jsxs)(J.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(g.jsx)("option",{value:"global",children:"Global"}),c.map((function(e,t){return Object(g.jsx)("option",{value:e,children:e},t)}))]})})},H=(a(204),function(){var e=Object(n.useState)([""]),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(d.a)(c,2),s=o[0],l=o[1],j=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=_(),e.next=3,t;case 3:a=e.sent,r(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:a=e.sent,r(a),l(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){j()}),[]),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("img",{className:"imgLogo",src:"https://lh3.googleusercontent.com/proxy/NRHZSkmmJF2CMWcM1Z9khWHSin8737viReQ_L7CSGozkj9jjWCNMFB4qOn7UpH7wutVanS4kAxjDScn4ItF5Rxi-RhOumMYyiK6v3SHJ0XZy_4bavtVS2vwWKA"}),Object(g.jsx)(y,{data:a}),Object(g.jsx)(W,{handleCountryChange:b}),Object(g.jsx)(R,{data:a,country:s})]})});o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(H,{})}),document.getElementById("root"))},76:function(e,t,a){e.exports={container:"Chart_container__Es--E"}},77:function(e,t,a){}},[[205,1,2]]]);
//# sourceMappingURL=main.a2f5d249.chunk.js.map