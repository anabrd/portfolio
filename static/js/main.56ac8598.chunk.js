(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{35:function(e,t,n){},50:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(24),c=n.n(r),s=(n(35),n(18)),o=n(6),l=n(40),d=(n(50),n(12)),h=n(27),j=n(2);var u=function(e){var t=e.children,n=Object(h.useTrail)(t.length,{config:{mass:5,tension:2e3,friction:200},opacity:e.show?1:0,x:(e.show,0),height:e.show?30:0,from:{opacity:0,x:0,height:0}});return Object(j.jsx)("div",{children:n.map((function(e,n){var i=e.height,a=Object(d.a)(e,["height"]);return Object(j.jsx)(h.a.div,{style:a,children:Object(j.jsx)(h.a.div,{style:{height:i},children:t[n]})},n)}))})};function b(e){var t=Object(i.useState)(!1),n=Object(o.a)(t,2),a=n[0],r=n[1];Object(i.useEffect)((function(){var e=setTimeout((function(){return r(!0)}),2e3);return window.addEventListener("scroll",console.log("ok")),function(){clearTimeout(e)}}),[]);var c=e.data.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsx)(l.a,{smooth:!0,to:{hash:e.title.toLowerCase()},children:e.heading})},t)}));return c.shift(),Object(j.jsx)("nav",{children:Object(j.jsx)("ul",{className:"menu-vertical",children:Object(j.jsx)(u,{show:a,children:c})})})}n(57);var m=function(e){return Object(j.jsxs)("div",{className:"circle-wrapper",children:[Object(j.jsx)("div",{className:"circle circle-outer",style:"light"==e.theme?{background:"var(--light)"}:{background:"var(--blue)"}}),Object(j.jsx)("div",{className:"circle circle-inner"}),Object(j.jsx)("div",{className:"circle circle-outer",style:"light"==e.theme?{background:"var(--light)"}:{background:"var(--blue)"}})]})};n(58);var p=function(e){var t=e.data.filter((function(e){return 0===e.id}))[0];return Object(j.jsxs)("section",{id:t.title.toLowerCase(),children:[Object(j.jsxs)("div",{className:"main-heading",children:[Object(j.jsx)("h1",{children:t.subheading}),Object(j.jsx)("h3",{children:t.description})]}),Object(j.jsx)(m,{theme:"light"})]})};n(59);var g=function(e){var t=Object(i.useRef)(),n=Object(i.useState)(!1),a=Object(o.a)(n,2),r=(a[0],a[1]);Object(i.useEffect)((function(){window.addEventListener("scroll",(function(e){window.scrollY>t.current.offsetTop&&r(!0)}))}),[]);var c=e.data.filter((function(e){return 1===e.id}))[0],s=c.content.map((function(e,t){return Object(j.jsx)("ul",{children:e.map((function(e,t){return Object(j.jsx)("li",{children:e},t)}))},t)})),l=c.description.map((function(e,t){return Object(j.jsxs)("p",{children:[e.regular,e.strong]},t)}));return Object(j.jsxs)("section",{ref:t,id:c.title.toLowerCase(),children:[Object(j.jsx)("h2",{className:"section-heading",children:c.heading}),Object(j.jsxs)("div",{className:"section-content",children:[Object(j.jsx)("div",{className:"about-wrapper",children:l}),Object(j.jsxs)("div",{className:"tools-wrapper",children:[Object(j.jsx)("h4",{children:c.subheading}),Object(j.jsx)("div",{className:"tools-list-wrapper",children:s})]})]})]})};n(60);var f=function(e){var t=e.data.filter((function(e){return 2===e.id}))[0],n=t.content.map((function(e,t){return Object(j.jsxs)("div",{className:"project",children:[Object(j.jsx)("h5",{children:Object(j.jsx)("a",{href:e.links[1],target:"_blank",rel:"noreferrer",children:e.name})}),Object(j.jsx)("p",{children:e.description}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Tools: "}),e.tools]}),Object(j.jsxs)("div",{className:"projects-links-wrapper",children:[Object(j.jsx)("a",{href:e.links.github,target:"_blank",rel:"noreferrer",children:"GitHub"}),e.links.live&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{children:" | "}),Object(j.jsx)("a",{href:e.links.live,target:"_blank",rel:"noreferrer",children:"Live"})]})]})]},t)}));return Object(j.jsxs)("section",{id:t.title.toLowerCase(),children:[Object(j.jsx)("h2",{className:"section-heading",children:t.heading}),Object(j.jsx)("div",{className:"project-wrapper",children:n})]})},O=n(34);n(64);var x=function(e){var t=Object(O.b)("xbjqovnq"),n=Object(o.a)(t,2),a=n[0],r=n[1],c=Object(i.useState)(!1),s=Object(o.a)(c,2),l=s[0],d=s[1],h="";a.succeeded&&(h="Message sent, thank you!");var b=e.data.filter((function(e){return 3==e.id}))[0],p=Object(j.jsxs)("form",{onSubmit:r,children:[b.contactForm.map((function(e,t){return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{id:e.name,type:e.type,name:e.name,placeholder:e.placeholder}),Object(j.jsx)("label",{htmlFor:e.name,children:e.name}),Object(j.jsx)(O.a,{prefix:e.name,field:e.name,errors:a.errors})]},t)})),Object(j.jsx)("button",{type:"submit",disabled:a.submitting,children:"Send"})]}),g=b.contactLinks.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:e.path,target:"_blank",rel:"noreferrer",children:e.name})},t)}));function f(e){window.innerHeight+window.scrollY>=document.body.offsetHeight&&d(!0)}return window.onscroll=f,window.ontouchmove=f,Object(j.jsxs)("section",{id:b.title.toLowerCase(),onScroll:function(){return d(!0)},children:[Object(j.jsx)("h2",{className:"section-heading",children:b.heading}),Object(j.jsxs)("div",{className:"section-content",children:[Object(j.jsxs)("div",{className:"form-wrapper",children:[Object(j.jsx)("p",{children:b.description}),p,Object(j.jsx)("p",{className:"message-sent",children:h})]}),Object(j.jsx)(m,{theme:"dark"})]}),Object(j.jsx)("ul",{className:"contact-links menu-vertical",children:Object(j.jsx)(u,{show:l,children:g})})]})},v=[{id:0,title:"Landing",heading:"Home",subheading:"Ana Brdar",description:"Berlin-based Web Developer"},{id:1,title:"About",heading:"About",description:[{regular:"Hi! My name is Ana and I am a software engineer."},{regular:"A while back, I decided to part ways with my career as a translator and shift my focus from natural to programming languages."},{regular:"Since then, I have been working as a full-stack engineer."},{regular:"I enjoy exploring the intersection of techology, linguistics and language learning in my spare time."}],subheading:"Tools & technologies",content:[["JavaScript","TypeScript","Node.js"],["GraphQL","NestJS","Prisma"],["PostgreSQL","Jest","MongoDB"],["Git","GitHub","Bitbucket"],["Figma","Jira","Slack","Notion"]]},{id:2,title:"Projects",heading:"Projects",description:"Portfolio of projects.",content:[{name:"Roughly the Size Of",description:"Country to US State comparison.",tools:"Bootstrap, Python/Flask, Jinja, SQLite",links:{github:"https://github.com/anabrd/roughly-the-size-of",live:"https://roughly-the-size-of-cdf85c2c6396.herokuapp.com/"}},{name:"Get It Done",description:"Full-stack task management app with authentication.",tools:"React, Material-UI, Node.js, Express, MongoDB",links:{github:"https://github.com/anabrd/get-it-done-app",live:"https://anabrd.github.io/get-it-done-app/"}},{name:"Snakes and Ladders",description:"Classic board game reimagined as a pure JavaScript web page.",tools:"HTML, CSS, JavaScript, Vectary",links:{github:"https://github.com/anabrd/snakes-and-ladders",live:"https://anabrd.github.io/snakes-and-ladders/"}},{name:"Paved",description:"App for sharing curated learning paths. Collaboration project.",tools:"React, Material-UI, Node.js, Express, MongoDB",links:{github:"https://github.com/Paved-Team/paved",live:""}}]},{id:3,title:"Contact",heading:"Contact",description:"Get in touch.",contactForm:[{name:"name",label:"Your Name",type:"text",placeholder:"Please enter your name"},{name:"email",label:"Your Email",type:"email",placeholder:"Please enter your email"},{name:"message",label:"Your Message",type:"text",placeholder:"Please enter your message"}],contactLinks:[{name:"LinkedIn",path:"https://www.linkedin.com/in/anabrdar/"},{name:"GitHub",path:"https://github.com/anabrd"}]}];var w=function(){var e=v;return Object(i.useEffect)((function(){setTimeout((function(){var e=document.querySelector("meta[name=viewport]");e.setAttribute("content","".concat(e.content,", height=").concat(window.innerHeight))}),200)}),[]),Object(j.jsxs)(s.a,{children:[Object(j.jsx)("header",{children:Object(j.jsx)(b,{data:e})}),Object(j.jsxs)("main",{children:[Object(j.jsx)(p,{data:e}),Object(j.jsx)(g,{data:e}),Object(j.jsx)(f,{data:e}),Object(j.jsx)(x,{data:e})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),k()}},[[65,1,2]]]);
//# sourceMappingURL=main.56ac8598.chunk.js.map