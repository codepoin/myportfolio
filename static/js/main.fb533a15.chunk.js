(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){e.exports=a(208)},131:function(e,t,a){},132:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},133:function(e,t,a){},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),o=(a(131),a(132),a(133),a(14)),i=a(15),s=a(17),m=a(16),u=a(18),h=a(212),p=a(41),d=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={menu:[{url:"/",name:"Home"},{url:"/profile",name:"Profile"},{url:"/portofolio",name:"Portofolio"},{url:"/contact",name:"Contact"}]},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.b,{mode:this.props.menuType},this.state.menu.map(function(e){return r.a.createElement(h.b.Item,{key:e.name},r.a.createElement(p.b,{to:e.url},e.name))}))}}]),t}(n.Component),f=a(214),b=a(12),g=a(213),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={current:"mail",visible:!1},a.showDrawer=function(){a.setState({visible:!0})},a.onClose=function(){a.setState({visible:!1})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"menuBar"},r.a.createElement("div",{className:"logo"}),r.a.createElement("div",{className:"menuCon"},r.a.createElement("div",{className:"rightMenu"},r.a.createElement(d,{menuType:"horizontal"})),r.a.createElement(f.a,{className:"barsMenu",type:"primary",onClick:this.showDrawer},r.a.createElement("span",{className:"barsBtn"},r.a.createElement(b.a,{type:"star",theme:"filled"}))),r.a.createElement(g.a,{title:"Other Menu",placement:"right",closable:!1,onClose:this.onClose,visible:this.state.visible},r.a.createElement(d,{menuType:"inline"}))))}}]),t}(n.Component),E=a(42),y=a(53),j=a(30),O=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{guter:8},r.a.createElement(j.a,{offset:2,span:20},this.props.children))}}]),t}(r.a.Component),w=a(210),k=a(71),x=a.n(k),C=a(211),N=w.a.Title,I=(w.a.Paragraph,function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={skill:[{percentage:"100",name:"HTML"},{percentage:"100",name:"CSS"},{percentage:"100",name:"Javascript"},{percentage:"100",name:"ReactJS"}]},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"skill"},r.a.createElement(j.a,{xs:24,sm:24,md:24,lg:24,xl:24},r.a.createElement("center",null,r.a.createElement(N,null,"Skill"))),this.state.skill.map(function(e){return r.a.createElement(j.a,{xs:24,sm:24,md:6,lg:6,xl:6,className:"box-center"},r.a.createElement("center",null,r.a.createElement(C.a,{type:"circle",percent:e.percentage}),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(N,{level:3},e.name)))}),this.state.skill.map(function(e){return r.a.createElement(j.a,{xs:24,sm:24,md:6,lg:12,xl:12},r.a.createElement(N,{level:3,className:"progress-title"},e.name),r.a.createElement(C.a,{percent:50,size:"big",status:"active",className:"progress-bar"}))})))}}]),t}(r.a.Component)),T=w.a.Title,S=w.a.Paragraph,A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={name:"Ade Dwi Putra"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,r.a.createElement("div",{class:"profile"},r.a.createElement(j.a,{xs:24,sm:24,md:24,lg:24,xl:12,className:"left"},r.a.createElement(T,{className:"title"},"About Me"),r.a.createElement(S,{className:"desc"},"In this special moment, I would like to introduce myself. I am Ade Dwi Putra. You can call me Ade. I was born on December 30rd, 1998 in Pangkalpinang, Bangka-Belitung Island. I live at Al-Hayati I street Est Kace, with my parents and two siblings (one older brother and one younger sister). So, I am the second child in my family. The school subjects that I love are Programming and Science. They are so challenging but also fun. I love reading Science Fiction books because they are very imaginative. They are full of innovative and creative ideas. Science Fiction movies such as Interstellar, Avatar, Star Wars are the movies I enjoy watching because they are so awesome. Besides, I love travelling, listening to music and playing games. I usually play games with my siblings and sometimes with my parents. We have so much fun. That\u2019s all about myself. Thank you for your attention")),r.a.createElement(j.a,{xs:24,sm:24,md:24,lg:24,xl:12,className:"right"},r.a.createElement("img",{src:x.a,alt:"Rocket"})))),r.a.createElement(O,null,r.a.createElement(I,null)))}}]),t}(n.Component),P=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Halaman Kontak"))}}]),t}(n.Component),W=w.a.Title,M=w.a.Paragraph,R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={title:"WELCOME ^v^",desc:"We help companies plan, create and deliver integrated product and brand experiences."},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement(y.a,{type:"flex home"},r.a.createElement(j.a,{xs:24,sm:24,md:24,lg:24,xl:12,className:"left"},r.a.createElement(W,{className:"title"},this.state.title),r.a.createElement(M,{className:"desc"},this.state.desc),r.a.createElement(f.a,{style:{borderRadius:100}},r.a.createElement(p.b,{to:"/profile"},"About Me"))),r.a.createElement(j.a,{xs:24,sm:24,md:24,lg:24,xl:12,className:"right"},r.a.createElement("img",{src:x.a,alt:"Rocket"}))))}}]),t}(r.a.Component),B=a(209),D=B.a.Meta,F=(r.a.Component,w.a.Title),H=(w.a.Paragraph,function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement("center",{style:{marginTop:50}},r.a.createElement(F,null,"Riwayat Pendidikan")))}}]),t}(n.Component)),J=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:R}),r.a.createElement(E.a,{path:"/contact",component:P}),r.a.createElement(E.a,{path:"/profile",component:A}),r.a.createElement(E.a,{path:"/portofolio",component:H}))}}]),t}(n.Component);var L=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(J,null))},U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(p.a,null,r.a.createElement(L,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/myportfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/myportfolio","/service-worker.js");U?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):z(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):z(t,e)})}}()},71:function(e,t,a){e.exports=a.p+"static/media/rocket.a655ba64.png"}},[[126,1,2]]]);
//# sourceMappingURL=main.fb533a15.chunk.js.map