(this.webpackJsonpquifi=this.webpackJsonpquifi||[]).push([[0],{101:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(9),r=a.n(s),i=(a(101),a(65),a(37)),o=a(12),j=a.p+"static/media/quifi.629db642.svg",l=a(169),b=a(158),u=a(4);var h=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("img",{src:j,className:"App-logo-quifi",alt:"logo"}),Object(u.jsx)(l.a,{m:2}),Object(u.jsx)(b.a,{component:i.b,to:"/home",color:"primary",variant:"outlined",style:{border:"2px solid"},children:"Start"})]})]})},d=a(78),p=a(79),O=a(86),x=a(85),m=a(54),f=a(162),v=a(163),g=a(164),y=a(170),C=a(165),S=a(81),w=a.n(S),k=a(82),A=a.n(k),q=a(160),F=a(161),R=a(80),E=a.n(R),I=function(e){Object(O.a)(a,e);var t=Object(x.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(q.a,{position:"static",style:{backgroundColor:"white"},children:Object(u.jsx)(F.a,{children:Object(u.jsx)(m.a,{variant:"h6",children:"Select a quizz"})})}),Object(u.jsx)(m.a,{variant:"h4"}),Object(u.jsx)(l.a,{m:1}),Object(u.jsxs)(f.a,{children:[Object(u.jsxs)(v.a,{component:i.b,to:"/europecapitals",children:[Object(u.jsx)(g.a,{children:Object(u.jsx)(y.a,{children:Object(u.jsx)(E.a,{})})}),Object(u.jsx)(C.a,{primary:"European capitals",secondary:"Capitals from european countries"})]}),Object(u.jsxs)(v.a,{children:[Object(u.jsx)(g.a,{children:Object(u.jsx)(y.a,{children:Object(u.jsx)(w.a,{})})}),Object(u.jsx)(C.a,{primary:"World capitals",secondary:"Capitals from all countries"})]}),Object(u.jsxs)(v.a,{children:[Object(u.jsx)(g.a,{children:Object(u.jsx)(y.a,{children:Object(u.jsx)(A.a,{})})}),Object(u.jsx)(C.a,{primary:"Flags",secondary:"Random flags from all countries"})]})]})]})}}]),a}(c.Component),M=a(83),B=a(29),N=a(167),W=a(51),z=a.n(W),G=(a(127),a(59)),J=a(52),L=Object(J.b)({name:"europeCapitals",initialState:{countries:null},reducers:{setCountries:function(e,t){e.countries=t.payload}}}),P=(L.actions.setCountries,L.reducer),T=function(){var e=n.a.useState(null),t=Object(B.a)(e,2),a=t[0],s=t[1];Object(c.useEffect)((function(){z.a.get("https://cors.bridged.cc/https://restcountries.com/v3/region/europe").then((function(e){var t,a=[],c=Object(M.a)(e.data);try{for(c.s();!(t=c.n()).done;){var n=t.value;n.independent&&a.push(n)}}catch(r){c.e(r)}finally{c.f()}s(a)})).catch((function(e){console.log(e)})).then((function(){}))}),[]);var r=n.a.useRef(),i=n.a.useState("Click in the button to start"),o=Object(B.a)(i,2),j=o[0],h=o[1],d=n.a.useState(null),p=Object(B.a)(d,2),O=p[0],x=p[1],f=n.a.useState(""),v=Object(B.a)(f,2),g=v[0],y=v[1],C=n.a.useState("Get country"),S=Object(B.a)(C,2),w=S[0],k=S[1],A=n.a.useState("You will see here the results"),R=Object(B.a)(A,2),E=R[0],I=R[1],W=n.a.useState(0),G=Object(B.a)(W,2),J=G[0],L=G[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(q.a,{position:"static",style:{backgroundColor:"white"},children:Object(u.jsx)(F.a,{children:Object(u.jsx)(m.a,{variant:"h6",children:"European Capitals"})})}),Object(u.jsx)(m.a,{variant:"h4"}),Object(u.jsx)(l.a,{m:1}),Object(u.jsxs)(l.a,{m:2,children:[Object(u.jsx)(m.a,{variant:"h6",children:j}),Object(u.jsx)(l.a,{m:2}),Object(u.jsx)(N.a,{label:"Capital",variant:"outlined",fullWidth:!0,disabled:"Get country"===w,value:g,onChange:function(e){y(e.target.value)},inputRef:r}),Object(u.jsx)(l.a,{m:3}),Object(u.jsx)(b.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(){"Answer"===w?(r.current.focus(),""!==g&&g.toUpperCase()===O.capital[0].toUpperCase()?(console.log("Correct"),I("Correct"),L(J+1)):(console.log("Incorrect"),I("Incorrect, the correct answer was: "+O.capital[0]),L(0)),console.log(g),y("")):k("Answer");var e=a[Math.floor(Math.random()*a.length)];console.log(e),h(e.name.common),x(e)},children:w}),Object(u.jsx)(l.a,{m:3}),Object(u.jsx)(m.a,{variant:"body1",children:E}),Object(u.jsxs)(m.a,{variant:"h6",children:["Streak: ",J]})]})]})},U=a(166),D=a(84),Y=Object(D.a)({palette:{primary:{main:"#A2CB93"}}}),H=Object(J.a)({reducer:{europeCapitals:P}});var K=function(){return Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(G.a,{store:H,children:Object(u.jsx)(U.a,{theme:Y,children:Object(u.jsxs)("div",{children:[Object(u.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/index.html",component:h}),Object(u.jsx)(o.a,{exact:!0,path:"/",component:h}),Object(u.jsx)(o.a,{exact:!0,path:"/home",component:I}),Object(u.jsx)(o.a,{exact:!0,path:"/europecapitals",component:T})]})]})})})})})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,172)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(K,{})}),document.getElementById("root")),Q()},65:function(e,t,a){}},[[128,1,2]]]);
//# sourceMappingURL=main.6952ead9.chunk.js.map