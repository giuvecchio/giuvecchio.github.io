(this["webpackJsonpgvecchio-web"]=this["webpackJsonpgvecchio-web"]||[]).push([[0],{225:function(e,t,n){},232:function(e,t){},234:function(e,t){},244:function(e,t){},246:function(e,t){},273:function(e,t){},275:function(e,t){},276:function(e,t){},281:function(e,t){},283:function(e,t){},289:function(e,t){},291:function(e,t){},310:function(e,t){},322:function(e,t){},325:function(e,t){},328:function(e,t,n){},329:function(e,t,n){"use strict";n.r(t);var i=n(13),c=n(94),s=n(0),r=n.n(s),o=n(47),a=n.n(o),j=n(24),d=n(43),l=n(20),h=n(23),b=n(53),g=n(54),x=n(335),m=n(338),u=n(339),O=n(340),p=n(1),f=function(e){var t=e.mode,n=e.pathname,i=e.onSelectCallback;return Object(p.jsxs)(x.a,{mode:t,selectedKeys:[n],onSelect:i,children:[Object(p.jsx)(x.a.Item,{children:Object(p.jsx)(d.b,{to:"/about",children:"About Us"})},"about"),Object(p.jsx)(x.a.Item,{children:Object(p.jsx)(d.b,{to:"/projects",children:"Projects"})},"projects"),Object(p.jsx)(x.a.Item,{children:Object(p.jsx)(d.b,{to:"/technology",children:"Technology"})},"technology"),Object(p.jsx)(x.a.Item,{children:Object(p.jsx)(d.b,{to:"/contacts",children:"Contacts"})},"contacts"),Object(p.jsx)(x.a.Item,{children:Object(p.jsx)("a",{href:"https://www.youtube.com/channel/UCIeSI05gN6-JnlLC72yo_yA",children:Object(p.jsx)(m.a,{})})},"youtube"),Object(p.jsx)(x.a.Item,{children:Object(p.jsx)("a",{href:"https://www.instagram.com/weirdframesofficial/",children:Object(p.jsx)(u.a,{})})},"instagram"),Object(p.jsx)(x.a.Item,{children:Object(p.jsx)("a",{href:"https://www.facebook.com/weirdframes/",children:Object(p.jsx)(O.a,{})})},"facebook")]})},v=n(331),y=n(334),w=n(337),I=n(341),k=n(32),S={sm:576,md:768,lg:992,xl:1200,xxl:1400},F=function(e){var t=e.children,n=e.screen_size,i=void 0===n?"sm":n,c=e.mode,s=void 0===c?"gt":c,o=S[i],a=r.a.useState(window.innerWidth),j=Object(k.a)(a,2),d=j[0],l=j[1];return r.a.useEffect((function(){var e=function(){return l(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),"lt"===s?d<o?t:null:d>o?t:null},C=n.p+"static/media/logo_h_light.60551d4a.svg",z=v.a.Header,A=(s.Component,n.p+"static/media/logo_light.b8d3c5d7.svg"),N=v.a.Footer,T=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(N,{children:[Object(p.jsx)("img",{src:A,alt:"logo",className:"logo"}),Object(p.jsxs)("p",{style:{fontSize:"14px"},children:["Copyright \xa9 ",(new Date).getFullYear()," Giuseppe Vecchio. All rights reserved."]})]})}}]),n}(s.Component),D=(n(225),function(e){var t=e.children;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"App",children:t}),Object(p.jsx)(T,{})]})}),P=n(336),W=n(332),_=n(49),L=n(83),R=(n(226),n(342)),E=n(343),M=n(344),G=function(e){var t=e.height,n=t?t.toString():"1";return Object(p.jsx)("div",{style:{height:n+"vmax"}})},V=n.p+"static/media/avatar.fc213e10.svg",B=P.a.Panel,H=W.a.Meta,J=[{xs:8,sm:16,md:32},{xs:8,sm:16,md:32}],U={background:'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/img/backgrounds/neon.jpg")',backgroundSize:"cover",backgroundPosition:"center"},Y={fontSize:"1.8rem",border:"none",width:"10rem"};function K(e){var t=Date.now()-e.getTime(),n=new Date(t);return Math.abs(n.getUTCFullYear()-1970)}var q=function(e){var t=e.title,n=e.icon;return Object(p.jsx)(_.a,{xs:8,sm:8,md:4,children:Object(p.jsx)("img",{alt:t,src:n,style:{maxWidth:80}})})},Z=function(e){var t=e.title,n=e.description,i=e.icon;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(_.a,{sm:12,md:8,style:{width:"100%"},children:Object(p.jsx)(W.a,{hoverable:!0,style:{minHeight:"100%",minWidth:"100%",paddingTop:24},cover:Object(p.jsx)("img",{alt:t,src:i,style:{maxWidth:60,margin:"auto",borderRadius:0}}),children:Object(p.jsx)(H,{title:t,description:n})})})})},Q=function(e){var t=e.title,n=e.description,i=e.icon,c=(e.link,Object(p.jsx)("img",{alt:t,src:i,style:{maxWidth:60,margin:"auto",borderRadius:0}}));return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(_.a,{md:12,lg:8,style:{width:"100%"},children:[Object(p.jsx)(F,{screen_size:"md",mode:"gt",children:Object(p.jsx)(W.a,{hoverable:!0,style:{minHeight:"100%",minWidth:"100%",paddingTop:24},cover:c,children:Object(p.jsx)(H,{title:t,description:n})})}),Object(p.jsx)(F,{screen_size:"md",mode:"lt",children:Object(p.jsx)(P.a,{expandIcon:function(e){var t=e.isActive;return Object(p.jsx)(R.a,{rotate:t?90:0})},expandIconPosition:"right",children:Object(p.jsx)(B,{header:c,children:Object(p.jsx)(H,{title:t,description:n})},"1")})})]})})},X=function(e){var t=e.title,n=e.description,i=e.authors,c=(e.icon,e.link);return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(_.a,{sm:24,md:24,style:{width:"100%"},children:[Object(p.jsx)(F,{screen_size:"sm",mode:"gt",children:Object(p.jsxs)(W.a,{hoverable:!0,style:{minWidth:"100%"},actions:[Object(p.jsx)("a",{href:c,children:"Read Paper"})],children:[Object(p.jsx)(H,{title:t,description:n}),Object(p.jsx)(G,{}),Object(p.jsx)("h7",{children:i})]})}),Object(p.jsx)(F,{screen_size:"sm",mode:"lt",children:Object(p.jsx)(P.a,{bordered:!0,expandIcon:function(e){var t=e.isActive;return Object(p.jsx)(R.a,{rotate:t?90:0})},expandIconPosition:"right",children:Object(p.jsxs)(B,{header:t,children:[Object(p.jsx)(H,{description:n}),Object(p.jsx)(G,{}),Object(p.jsx)("h7",{children:i}),Object(p.jsx)("hr",{style:{margin:"14px"}}),Object(p.jsx)("a",{href:c,children:"Read Paper"})]},"1")})})]})})},$=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:"Who am I?"}),Object(p.jsx)(G,{height:2}),Object(p.jsxs)("h5",{className:"description",children:["I'm a ",K(new Date(1995,12,9)),"-years-old"," ",Object(p.jsx)("b",{children:"Computer Engineer"})," and ",Object(p.jsx)("b",{children:"Deep Learning"})," researcher at the University of Catania.",Object(p.jsx)(G,{height:1.6}),"I'm also a free time photographer and 3D graphics geek.",Object(p.jsx)("br",{}),"I love watching movies, reading books, eating pizza and drinking beer.",Object(p.jsx)(G,{height:1.6}),"I'm also the proud co-founder of"," ",Object(p.jsx)("a",{href:"https://www.weirdframes.com",children:"Weird Frames"}),"."]}),Object(p.jsx)(G,{height:3}),Object(p.jsxs)("div",{children:[Object(p.jsx)(y.a,{href:"https://www.linkedin.com/in/giuvecchio/",style:Y,children:Object(p.jsx)(E.a,{})}),Object(p.jsx)(y.a,{href:"https://github.com/giuvecchio",style:Y,children:Object(p.jsx)(M.a,{})})]}),Object(p.jsx)(G,{height:6}),Object(p.jsxs)(L.a,{gutter:[32,32],children:[Object(p.jsx)(_.a,{sm:24,md:12,children:Object(p.jsx)("img",{style:{maxWidth:"100%"},src:"/img/pictures/then-now.jpg",alt:"then-now"})}),Object(p.jsxs)(_.a,{sm:24,md:12,style:{textAlign:"left"},children:[Object(p.jsxs)("p",{children:["My interest in computer science dates back to when I was a child, fascinated by what that strange object called a computer could accomplish."," "]}),Object(p.jsxs)("p",{children:["Films and other media, such as ",Object(p.jsx)("b",{children:"Blade Runner"})," and"," ",Object(p.jsx)("b",{children:"Ex_Machina"}),", did the rest, fueling the interest in what could be gained from the digital world."," "]})]})]})]})},ee=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"What I Do?"}),Object(p.jsx)(G,{height:1}),Object(p.jsxs)(L.a,{gutter:J,justify:"center",children:[Object(p.jsx)(Z,{title:"Deep Learning",description:"I'm 99.97% confident it's a cat! (or maybe not...)",icon:"/img/icons/deep.svg"}),Object(p.jsx)(Z,{title:"Software Design",description:"Can't I just write the code?",icon:"/img/icons/gear.svg"}),Object(p.jsx)(Z,{title:"Software Development",description:"Filling blank files with bugs.",icon:"/img/icons/pc.svg"})]}),Object(p.jsxs)(F,{screen_size:"sm",mode:"gt",children:[Object(p.jsx)(G,{height:3}),Object(p.jsx)("h5",{children:"My Tools?"}),Object(p.jsx)(G,{height:1}),Object(p.jsxs)(L.a,{gutter:J,justify:"center",children:[Object(p.jsx)(q,{icon:"/img/icons/business/cpp.svg"}),Object(p.jsx)(q,{icon:"/img/icons/business/c-sharp.svg"}),Object(p.jsx)(q,{icon:"/img/icons/business/python.svg"}),Object(p.jsx)(q,{icon:"/img/icons/business/unreal-engine.svg"}),Object(p.jsx)(q,{icon:"/img/icons/business/pytorch.svg"}),Object(p.jsx)(q,{icon:"/img/icons/business/github.svg"})]})]})]})},te=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:"Research Projects"}),Object(p.jsx)(G,{height:1}),Object(p.jsxs)(L.a,{gutter:J,justify:"center",children:[Object(p.jsx)(Q,{title:"Material Generation",description:"Automated material maps generation from single picture powered by deep learning.",icon:"/img/icons/mat_gen.svg",link:""}),Object(p.jsx)(Q,{title:"Autonomous Robot's Navigation",description:"Intelligent agents for autonomous robot's navigation in unstructured outdoor environments.",icon:"/img/icons/nav.svg"}),Object(p.jsx)(Q,{title:"Gaming AI",description:"Deep Learning techniques for smarter and improving NPC gaming AIs.",icon:"/img/icons/gaming.svg"})]})]})},ne=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:"Publications"}),Object(p.jsx)(G,{height:1}),Object(p.jsxs)(L.a,{gutter:J,justify:"center",align:"middle",children:[Object(p.jsx)(X,{title:"SurfaceNet: Adversarial SVBRDF Estimation from a Single Image",description:"International Conference on Computer Vision (ICCV), 2021",authors:"Giuseppe Vecchio, Simone Palazzo, Concetto Spampinato",icon:"/img/icons/mat_gen.svg",link:"https://tinyurl.com/4zwwcydd"}),Object(p.jsx)(X,{title:"MASK-RL: Multiagent Video Object Segmentation Framework Through Reinforcement Learning",description:"IEEE Transactions on Neural Networks and Learning Systems (TNNLS), 2020",authors:"Giuseppe Vecchio, Simone Palazzo, Daniela Giordano, Francesco Rundo, Concetto Spampinato",link:"https://tinyurl.com/3fnc9ent"})]}),Object(p.jsx)(G,{height:2}),Object(p.jsx)("div",{style:{textAlign:"right"},children:Object(p.jsx)(y.a,{href:"https://scholar.google.com/citations?user=TF1JBZYAAAAJ&hl",children:"More on Google Scholar"})})]})},ie=function(){var e=Object(s.useState)([]),t=Object(k.a)(e,2);t[0],t[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"slide slide-first white-text",style:U,children:Object(p.jsxs)("div",{className:"container centered",children:[Object(p.jsx)("img",{src:V,alt:"mascotte",style:{maxWidth:"400px",margin:"20px"}}),Object(p.jsx)("h1",{children:"Hi everyone!"})]})}),Object(p.jsx)("div",{className:"slide dotted",children:Object(p.jsx)("div",{className:"container centered",children:Object(p.jsxs)("div",{children:[Object(p.jsx)($,{}),Object(p.jsx)(G,{height:6}),Object(p.jsx)(ee,{}),Object(p.jsx)(G,{height:6}),Object(p.jsx)(te,{}),Object(p.jsx)(G,{height:6}),Object(p.jsx)(ne,{})]})})})]})},ce=n(333);var se=function(){return Object(p.jsx)("div",{className:"slide slide-first",children:Object(p.jsx)(ce.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:Object(p.jsx)(y.a,{type:"primary",ghost:!0,size:"large",children:Object(p.jsx)(d.b,{to:"/",children:"Back Home"})})})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,345)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),s(e),r(e)}))},oe=(n(328),["component","layout","pageTitle","background"]),ae=function(e){var t=e.component,n=e.layout,s=(e.pageTitle,e.background,Object(c.a)(e,oe));return Object(p.jsx)(j.b,Object(i.a)(Object(i.a)({},s),{},{render:function(e){return Object(p.jsx)(n,{children:Object(p.jsx)(t,Object(i.a)({},e))})}}))};a.a.render(Object(p.jsx)(d.a,{children:Object(p.jsxs)(j.d,{children:[Object(p.jsx)(ae,{exact:!0,path:"/",layout:D,component:ie}),Object(p.jsx)(ae,{exact:!0,path:"/404",layout:D,component:se}),Object(p.jsx)(j.a,{to:"/404"})]})}),document.getElementById("root")),re()}},[[329,1,2]]]);
//# sourceMappingURL=main.ea954274.chunk.js.map