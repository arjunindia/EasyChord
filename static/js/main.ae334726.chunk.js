(this["webpackJsonpeasy-chord"]=this["webpackJsonpeasy-chord"]||[]).push([[0],{113:function(e,n,t){},114:function(e,n,t){"use strict";t.r(n);var a,r,o,l,i,c,u,m,b,s=t(0),d=t.n(s),p=t(10),f=t.n(p),E=t(14),h=t(56),x=t(15),v=function(){var e=x.a.div(a||(a=Object(E.a)(["\n    margin: 0 2em;\n    @media (max-width: 480px) {\n      display: none;\n    }\n  "])));return d.a.createElement(e,null,d.a.createElement(h.a,{align:"center",variant:"h1"},"Welcome, let\u2019s pick a key and start playing!"))},g=t(76),j=t(151),y=t(152),C=t(6),A=t(147),F=t(117),O=Object(s.createContext)("F_sharp"),B=Object(s.createContext)("minor"),D=Object(s.createContext)(),G=function(e){var n=e.children,t=Object(s.useState)("F_sharp"),a=Object(C.a)(t,2),r=a[0],o=a[1],l=Object(s.useState)("minor"),i=Object(C.a)(l,2),c=i[0],u=i[1],m=Object(s.useState)(),b=Object(C.a)(m,2),p=b[0],f=b[1];return d.a.createElement(O.Provider,{value:[r,o]},d.a.createElement(B.Provider,{value:[c,u]},d.a.createElement(D.Provider,{value:[p,f]},n)))},w=t(146),k=[{note:"C",value:"C"},{note:"C#/Db",value:"C#"},{note:"D",value:"D"},{note:"D#/Eb",value:"Eb"},{note:"E",value:"E"},{note:"F",value:"F"},{note:"F#/Gb",value:"F#"},{note:"G",value:"G"},{note:"G#/Ab",value:"Ab"},{note:"A",value:"A"},{note:"A#/Bb",value:"Bb"},{note:"B",value:"B"}],S={major:{C:["C","D","E","F","G","A","B"],C_sharp:["C#","D#","F","F#","G#","A#","C"],D:["D","E","F#","G","A","B","C#"],Eb:["Eb","F","G","Ab","Bb","C","D"],E:["E","F#","G#","A","B","C#","D#"],F:["F","G","A","Bb","C","D","E"],F_sharp:["F#","G#","A#","B","C#","D#","F"],G:["G","A","B","C","D","E","F#"],Ab:["Ab","Bb","C","Db","Eb","F","G"],A:["A","B","C#","D","E","F#","Ab"],Bb:["Bb","C","D","Eb","F","G","A"],B:["B","C#","D#","E","F#","G#","A#"]},minor:{A:["A","B","C","D","E","F","G"],Bb:["Bb","C","Db","Eb","F","Gb","Ab"],B:["B","C#","D","E","F#","G","A"],C:["C","D","Eb","F","G","Ab","Bb","C"],C_sharp:["C#","D#","E","F#","G#","A","B"],D:["D","E","F","G","A","Bb","C"],Eb:["Eb","F","Gb","Ab","Bb","B","Db"],E:["E","F#","G","A","B","C","D"],F:["F","G","Ab","Bb","C","Db","Eb"],F_sharp:["F#","G#","A","B","C#","D","E"],G:["G","A","Bb","C","D","Eb","F"],Ab:["Ab","Bb","B","Db","Eb","E","Gb"]}},I=t(73),M=t.n(I),_=t(58),z=Object(w.a)({root:{fontFamily:"Montserrat",borderRadius:50,fontWeight:"bold",fontSize:"1.3em",width:264}}),K={minor:[[1,6,7],[1,4,7],[1,4,5],[1,6,3,7],[2,5,1],[1,7,4,4]],major:[[1,4,5],[4,5,6],[1,6,4,5],[2,5,1],[1,5,6,4],[1,5,5,2]]},R=function(){var e=z(),n=Object(s.useState)(),t=Object(C.a)(n,2),a=t[0],l=t[1],i=Object(s.useContext)(D),c=Object(C.a)(i,2),u=c[0],m=c[1],b=Object(s.useContext)(B),p=Object(C.a)(b,1)[0],f=Object(s.useContext)(O),v=Object(C.a)(f,1)[0],g=S[p][v],j=Object(s.useState)(!1),y=Object(C.a)(j,2),G=y[0],w=y[1],k=(new _.a).toDestination(),I=x.a.div(r||(r=Object(E.a)(["\n    margin-top: 3em;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "]))),R=x.a.div(o||(o=Object(E.a)(["\n    width: 100%;\t\n    background: rgba(255, 255, 255, 0.13);\n    box-shadow: 0px 5px 13px 0px rgba(0,0,0,0.2);\n  "])));Object(s.useEffect)((function(){P()}),[p]);var P=function(){V("minor"===p?K.minor[Math.floor(Math.random()*K.minor.length)]:K.major[Math.floor(Math.random()*K.major.length)])},V=function(e){m(e);var n=["I","ii","iii","IV","V","vi","vii\xb0"],t=["i","ii\xb0","III","iv","v","VI","VII"],r=Array.from(e);if("minor"===p){var o=r.map((function(e){return t[e-1]})).toString().replace(/,/g,"-");a===o?P():l(o)}else{var i=r.map((function(e){return n[e-1]})).toString().replace(/,/g,"-");a===i?P():l(i)}};return d.a.createElement("div",null,d.a.createElement(R,null,d.a.createElement(h.a,{align:"center",variant:"h2"},a)),d.a.createElement(I,null,d.a.createElement(A.a,{variant:"outlined",className:e.root,onClick:P},"GENERATE"),d.a.createElement(F.a,{style:{marginLeft:4},disabled:G,onClick:function(){w(!0);if(u){var e=function(e,n){var t=e.concat(e),a=u.map((function(e,a){var r=n[a]-1,o=[t[r]];return o.push(t[r+2]),o.push(t[r+4]),o}));return console.log(a),a}(g,u),n=[];e.forEach((function(e){n.push(e.map((function(e){return"".concat(e,"4")})))})),console.log(n),n.forEach((function(e){return e.push("".concat(e[0][0],"2"))})),function(e){var n=_.b();e.forEach((function(e,t){return k.triggerAttackRelease(e,1.5,n+2*t,.7)})),setTimeout((function(){return w(!1)}),"".concat(2*e.length,"000"))}(n)}}},d.a.createElement(M.a,null))))},P=t(7),V=t(157),W=t(148),N=t(153),T=t(156),U=Object(P.a)((function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["Montserrat","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}}))(T.a),J=Object(w.a)((function(e){return{margin:{margin:e.spacing(2),width:70}}})),q=function(){var e=J(),n=Object(s.useContext)(O),t=Object(C.a)(n,2),a=t[0],r=t[1];return d.a.createElement("div",null,d.a.createElement(W.a,{className:e.margin},d.a.createElement(N.a,{labelId:"key-select",id:"custom-key-select",value:a,onChange:function(e){r(e.target.value)},input:d.a.createElement(U,null),MenuProps:{getContentAnchorEl:function(){return null}}},d.a.createElement(V.a,{value:"A"},"A"),d.a.createElement(V.a,{value:"Ab"},"Ab"),d.a.createElement(V.a,{value:"B"},"B"),d.a.createElement(V.a,{value:"Bb"},"Bb"),d.a.createElement(V.a,{value:"C"},"C"),d.a.createElement(V.a,{value:"C_sharp"},"C#"),d.a.createElement(V.a,{value:"D"},"D"),d.a.createElement(V.a,{value:"E"},"E"),d.a.createElement(V.a,{value:"Eb"},"Eb"),d.a.createElement(V.a,{value:"F"},"F"),d.a.createElement(V.a,{value:"F_sharp"},"F#"),d.a.createElement(V.a,{value:"G"},"G"))))},H=t(149),L=function(){var e=Object(s.useContext)(B),n=Object(C.a)(e,2),t=n[0],a=n[1];return d.a.createElement("div",{style:{display:"flex",alignItems:"center"}},d.a.createElement(h.a,{variation:"body1"},t),d.a.createElement(H.a,{onChange:function(){a("minor"===t?"major":"minor")},checked:"major"===t}))},Q=t(158),X=t(155),Y=t(150),Z=function(){var e=Object(s.useContext)(O),n=Object(C.a)(e,2),t=(n[0],n[1]),a=Object(s.useContext)(B),r=Object(C.a)(a,2),o=r[0],l=(r[1],Object(s.useState)([])),i=Object(C.a)(l,2),c=i[0],u=i[1],m=Object(s.useState)([]),b=Object(C.a)(m,2),p=b[0],f=b[1];return Object(s.useEffect)((function(){!function(){if(f([]),"minor"===o){var e=[],n=function(n){var t={};c.every((function(e){return S.minor[n].includes(e)}))&&(t.root=n,t.notes=S.minor[n],e.push(t))};for(var t in S.minor)n(t);f(e)}if("major"===o){var a=[],r=function(e){var n={};c.every((function(n){return S.major[e].includes(n)}))&&(n.root=e,n.notes=S.major[e],a.push(n))};for(var l in S.major)r(l);f(a)}}()}),[c]),Object(s.useEffect)((function(){p.length>0&&t(p[0].root)}),[p]),d.a.createElement("div",{style:{marginTop:10}},d.a.createElement(W.a,{style:{width:130}},d.a.createElement(Q.a,{id:"key-checkbox"},"Filter by note"),d.a.createElement(N.a,{labelId:"mutiple-checkbox-key",id:"mutiple-checkbox-key",multiple:!0,value:c,onChange:function(e){u(e.target.value)},renderValue:function(e){return e.join(", ")},MenuProps:{getContentAnchorEl:function(){return null}}},k.map((function(e){return d.a.createElement(V.a,{key:e.value,value:e.value},d.a.createElement(X.a,{checked:c.indexOf(e.value)>-1}),d.a.createElement(Y.a,{primary:e.note}))})))))},$=t(154),ee=function(){return d.a.createElement($.a,{display:"flex",justifyContent:{xs:"center",lg:"flex-start"}},d.a.createElement(q,null),d.a.createElement(L,null),d.a.createElement(Z,null))},ne=t(74),te=x.a.div(l||(l=Object(E.a)(["\n  display: flex;\n  width: 650px;\n  max-height: 216px;\n  max-width: 85vw;\n  box-shadow: 0px 10px 13px 0px rgba(0,0,0,0.3);\n\n  p {\n    font-family: 'Montserrat';\n    font-weight: bold;\n  }\n"]))),ae=x.a.button(i||(i=Object(E.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  height: 200px;\n  width: 55px;\n  background-color: ",";\n  border: 1px solid #AAAAAA;\n\n  ","\n\n  ","\n"])),(function(e){return e.inKey,"white"}),(function(e){return!e.inKey&&"\n    p {\n      display: none;\n    }\n  "}),(function(e){return e.root&&"\n    p {\n      text-decoration: underline red;\n      text-underline-offset: 2px;\n    }\n  "})),re=x.a.button(c||(c=Object(E.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  height: 120px;\n  width: 35px;\n  background-color: ",";\n  border: 1px solid #AAAAAA;\n  z-index: 2;\n  margin: 0 -18px;\n\n  p {\n    color: white;\n  }\n\n  ","\n\n  ","\n"])),(function(e){return e.inKey?"#000000":"#808080"}),(function(e){return!e.inKey&&"\n    p {\n      display: none;\n    }\n  "}),(function(e){return e.root&&"\n    p {\n      text-decoration: underline red;\n      text-underline-offset: 2px;\n    }\n  "})),oe=x.a.p(u||(u=Object(E.a)(["\n  position: absolute;\n  bottom: 5px;\n  color: black;\n"]))),le=function(){var e=Object(s.useContext)(O),n=Object(C.a)(e,1)[0],t=Object(s.useContext)(B),a=Object(C.a)(t,1)[0],r=Object(s.useContext)(D),o=Object(C.a)(r,2),l=(o[0],o[1],S[a][n],function(){var e=S[a][n],t=function(e,n){if("minor"===e)return!!["E","B","F_sharp","C_sharp"].includes(n);return!!["G","D","A","E","B","C_sharp","F_sharp"].includes(n)}(a,n),r=k.map((function(e){return e.note})).map((function(a){var r=t?a.slice(0,2):a.slice(3);return 1===a.length?d.a.createElement(ae,{root:n===a,inKey:e.includes(a)},d.a.createElement(oe,null,a[0])):d.a.createElement(re,{root:e[0]===r,inKey:e.includes(r)},d.a.createElement(oe,null,r))}));return console.log(e),r});return d.a.createElement(ne.a,{query:"(max-width: 470px)"},(function(e){return e?d.a.createElement(te,null,d.a.createElement(l,null)):d.a.createElement(te,null,d.a.createElement(l,null),d.a.createElement(l,null))}))},ie=function(){return d.a.createElement("div",{style:{width:"90%",minWidth:"90%",margin:"0 auto",padding:"3em 0"}},d.a.createElement($.a,{display:"flex",justifyContent:"space-between",alignItems:{xs:"center",lg:"flex-start"},flexDirection:{xs:"column",lg:"row"}},d.a.createElement($.a,{mr:{lg:"2em"},mb:{xs:"2em",lg:"0"}},d.a.createElement(le,null)),d.a.createElement($.a,{display:"flex",flexDirection:"column",justifyContent:{xs:"center",md:"space-around"},width:"100%"},d.a.createElement(ee,null))))},ce=t(46),ue=(t(113),function(){var e=Object(g.a)({palette:{type:"dark"},typography:{fontFamily:"'Montserrat', 'Fira Sans', sans-serif",h1:{fontFamily:"Montserrat",fontWeight:"bold",fontSize:"3rem","@media (max-width:1277px)":{fontSize:"2rem"}},h2:{fontFamily:"Fira Sans",fontWeight:"bold",fontSize:"8rem","@media (max-width:650px)":{fontSize:"4rem"}},body1:{fontFamily:"Montserrat"}}}),n=x.a.div(m||(m=Object(E.a)(["\n    box-sizing: border-box;\n    border: 2px solid rgba(255,255,255, 0.5);\n    height: 900px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    padding: 2em 0;\n    margin: auto;\n    @media (max-width: 480px) {\n      border: none;\n      padding-top: 0;\n    }\n    @media (min-width: 1490px) {\n      min-width: 1490px;\n    }\n  "]))),t=x.a.div(b||(b=Object(E.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    @media (max-width: 480px) {\n      align-items: flex-start;\n    }\n  "])));return d.a.createElement(j.a,{theme:e},d.a.createElement(G,null,d.a.createElement(t,null,d.a.createElement(ce.Fade,{duration:6e3},d.a.createElement(n,null,d.a.createElement(y.a,null),d.a.createElement(ce.Fade,{up:!0,duration:2e3},d.a.createElement(v,null)),d.a.createElement(ce.Fade,{delay:1e3,duration:2e3},d.a.createElement(ie,null)),d.a.createElement(ce.Fade,{delay:2e3,duration:2e3},d.a.createElement(R,null)))))))});f.a.render(d.a.createElement(ue,null),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.ae334726.chunk.js.map