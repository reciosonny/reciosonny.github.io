(window.webpackJsonp=window.webpackJsonp||[]).push([[14,40],{148:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/logo.4320c46ecf16b5f7bd1385c36cb64116.png"},298:function(e,t,a){"use strict";var n=a(2),o=a.n(n),i=a(1),s=a.n(i),r=a(3),c=function(){return s.a.createElement("div",{className:"page-loading"},s.a.createElement("div",{className:"page-loading__halo"},s.a.createElement(r.a,{className:"page-loading__svg-code",size:40})))};t.a=function(e){var t=e.children,a=e.pageTitle,n=s.a.useState(!1),r=o()(n,2),l=r[0],d=r[1];return Object(i.useEffect)((function(){return setTimeout((function(){d(!0)}),500),function(){}}),[]),l?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"page-layout"},s.a.createElement("h1",{className:"page-layout__title"},a),s.a.createElement("div",{className:"page-layout__body"},t))):s.a.createElement(c,null)}},644:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(53),s=a(298),r=a(18),c=a(5),l=a(329),d=a(12),p=a(56),m=function(e){var t=e.name,a=e.logo,n=e.logoSize,i=e.position,s=e.workType,c=e.stacksIds,l=e.desc,d=e.notClickable,m=e.onClick;return o.a.createElement("div",{className:"job-experience__content card-animate-press",onClick:function(){d||m()}},o.a.createElement("header",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-9 no-padding-left no-padding-right"},o.a.createElement("h2",{style:{wordBreak:"break-all"}},t)),o.a.createElement("div",{className:"col-xs-3 no-padding-left no-padding-right",style:{textAlign:"right"}},o.a.createElement("img",{src:a,style:n}))),o.a.createElement("h1",null,i)),o.a.createElement("div",null,("company"===s||"opensource"===s)&&o.a.createElement(p.a,{list:c}),"company"!==s&&"opensource"!==s&&o.a.createElement("span",{style:{fontSize:"14px",fontWeight:"500"}},l)),o.a.createElement("div",{style:{display:"flex",flexDirection:"row-reverse"}},o.a.createElement(r.e,{fontSize:"30px"})))},g=function(e){var t=e.type;return o.a.createElement("div",{className:"job-experience__symbol"},"company"===t&&o.a.createElement(c.a,{size:25}),"opensource"===t&&o.a.createElement(r.e,{size:25}),"publication"===t&&o.a.createElement(d.a,{size:20}),"school"===t&&o.a.createElement(r.d,{size:20}),"certificate"===t&&o.a.createElement(l.a,{size:20}))},u=function(e){var t=e.data,a=e.onClick,n=e.showRight,i=e.isDesktop,s=t.name,r=t.desc,c=t.logo,l=t.customSizeLogo,d=t.position,p=t.dateFromWorked,u=t.dateUntilWorked,f=t.workType,h=t.stacksIds,b=t.notClickable,y=l||{width:"100%"};return o.a.createElement("div",{className:"row job-experience"},i&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"col-md-6 show-desktop no-padding-left no-padding-right job-experience__container-details-left"},!n&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"job-experience__years-exp"},p," - ",u),o.a.createElement(m,{desc:r,logo:c,logoSize:y,name:s,position:d,stacksIds:h,workType:f,notClickable:b,onClick:function(){return a(t)}}))),o.a.createElement("div",{className:"col-md-2 no-padding-left no-padding-right job-experience__line-icon"},o.a.createElement(g,{type:f})),o.a.createElement("div",{className:"col-md-4 no-padding-left no-padding-right job-experience__container-details"},n&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"job-experience__years-exp"},p," - ",u),o.a.createElement(m,{desc:r,logo:c,logoSize:y,name:s,position:d,stacksIds:h,workType:f,onClick:function(){return a(t)}})))),!i&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"col-xs-2 no-padding-left no-padding-right job-experience__line-icon"},o.a.createElement(g,{type:f})),o.a.createElement("div",{className:"col-xs-10 no-padding-left no-padding-right job-experience__container-details"},o.a.createElement("div",{className:"job-experience__years-exp"},p," - ",u),o.a.createElement(m,{desc:r,logo:c,logoSize:y,name:s,position:d,stacksIds:h,workType:f,onClick:function(){return a(t)}}))))},f=a.p+"assets/logo.bf7f93769d426eec302dd80afe33becd.png",h=a.p+"assets/logo.2f999fc8d8151fe737a20fc23ff3cf5f.png",b=a.p+"assets/logo.ef8bf88e1a51a9b429594d59f79c48bc.png",y=a.p+"assets/logo.495529432c38a658c8fa96a47ee90110.png",k=a.p+"assets/logo.946d2dff7dcfc864ec148490eb17301a.png",v=a.p+"assets/logo.6c308d62387d774cffdb61c749b6a380.svg",w=a.p+"assets/logo.0e28eebaa2414b2586d65cdba5bcf74f.png",E=a.p+"assets/logo.ce41c2965200601c4cbe4867c74964c1.jpg",I=(a.p,a.p+"assets/logo.c6049fdb1d933b4b56592e1b84a3fe01.png"),x=a(148),j=a.p+"assets/logo.6f0d5e50fecb1de22c7e33100819ae09.svg",S=a.p+"assets/logo.d356cb3096ab4cbabbb503c3932572c4.jpg",P=[{key:"ridevue",logo:"",name:"Video Streaming App - EVs",workType:"company",desc:"Software company based in Muntinlupa City",position:"Lead React Engineer",contributions:["Acted as lead for the project with 3 devs which leads a couple of decisions behind React/Typescript UI architectural design patterns, navigation architecture, as well as architected implementations such as mqtt","Lead and created reusable UI components by using React's best design patterns for Vinfast theme that devs can follow and reuse in pages which UX designers have created which results in consistency of UI across different pages","Solved the pain points of app performance load by implementing the following: Async Storage, Redux-Toolkit, promise API parallel calls, Intersection Observer API","Solved some very challenging problems in running React Native for Web by reconfiguring webpack and with help of react-app-rewired. This leads to better integration of 3rd party libraries","Guided devs to follow best practices by reviewing their code, and proposed technical implementation that can solve major techical challenges which leads to better app features and fewer bugs","Configured typescript and eslint to follow the best practices for the code"],totalExp:1,totalProjects:1,dateFromWorked:"July 2022",dateUntilWorked:"Present",stacksIds:["html","react","redux","webpack","typescript","js"],projectsIds:["ridevue"]},{key:"devpartners",logo:y,name:"Dev Partners, Inc.",workType:"company",desc:"Software company based in Davao City",position:"Front-End Vue Engineer",contributions:["Integrated Truefit API which automatically analyzes the best fit items for user","Implemented new UI styling for login/signup modal","Improved functionality of cart checkout page by integrating K-Leather API","Suggested better solutions for some tasks that needs improving"],totalExp:1,totalProjects:1,dateFromWorked:"November 2020",dateUntilWorked:"June 2022",stacksIds:["gulp","vue","sass","css","javascript"],projectsIds:["soccer"]},{key:"rentuals",logo:a.p+"assets/logo-full.d52534e8ac53d0e660905ae5a5533e14.svg",name:"Rentuals, Inc.",workType:"company",desc:"Real Estate app from Europe",position:"Laravel Engineer",contributions:["Integrated Truefit API which automatically analyzes the best fit items for user","Implemented new UI styling for login/signup modal","Improved functionality of cart checkout page by integrating K-Leather API","Suggested better solutions for some tasks that needs improving"],totalExp:1,totalProjects:1,dateFromWorked:"September 2020",dateUntilWorked:"December 2020",stacksIds:["html","js","vue","laravel","mysql","css"],projectsIds:["rentuals"]},{key:"packtpublishing",logo:k,name:"Packt Publishing",workType:"publication",desc:"Reviewed books such as webpack and laravel publications",position:"Technical reviewer",contributions:["Reviewed books"],totalExp:1,totalProjects:1,dateFromWorked:"April 2020",dateUntilWorked:"April 2020",stacksIds:["react","redux"],projectsIds:["xmachines"],notClickable:!0},{key:"newsfeederadicator",logo:E,customSizeLogo:{width:"50px",height:"50px",borderRadius:"20px"},name:"Newsfeed Eradicator",workType:"opensource",desc:"Open-source chrome extension",position:"Open-Source React Developer",contributions:["Contributed to Google Chrome extension for support to dark theme in Facebook when blocking newsfeed"],totalExp:1,totalProjects:1,dateFromWorked:"April 2020",dateUntilWorked:"April 2020",stacksIds:["react","webpack"],projectsIds:["xmachines"]},{key:"appointhealthapp",logo:x.default,customSizeLogo:{width:"40px",height:"40px"},name:"AppointHealth App",workType:"company",desc:"Open-source chrome extension",position:"Chief Executive Officer",contributions:["Designed the overall User-Interface / User-Experience to improve user adoption using Figma","Applied Redux-Saga for managing side-effects of app, resulting in maintainable state which includes API notifications, logging, authentication","Implemented code-splitting JavaScript bundles using React Suspense and Lazy, resulting in faster load times in initial page load. Configured webpack to make this code-splitting possible for bundling","Solved performance problems in Single-Page web app using compression algorithms such as gZip using webpack and NodeJS, resulting in compressed JavaScript bundles that improved loading times significantly","Used React-Native for patient side app, resulting in native feel of the app form mobile devices","Used Firebase and socket.io for real-time notifications, resulting in real-time interactions between patient and clinics through messaging, appointment booking","Integrated Google Maps API for address input location","Added fluid animations using CSS transitions/animations in settings page leading to fluid User-Experience using styled-components","Developed whole app landing page with Responsive Web Design implementation","Applied hot module replacement in client-side, resulting in rapid pace development on client-side","Used MVC pattern for Node backend, resulting in rapid pace development","Used FileStack API in handling files and images, resulting in faster implementation of file/image upload features"],totalExp:1,totalProjects:1,dateFromWorked:"February 2020",dateUntilWorked:"December 2020",stacksIds:["html","react","webpack","redux","redux-saga","sass","css","javascript","nodejs"],projectsIds:["appointhealth"]},{key:"jystcreative",logo:v,name:"Jyst Creative",workType:"company",desc:"Creative Agency based in United Kingdom",position:"React Front-End Developer",contributions:["Integrated Google Maps API for address input location","Added fluid animations using CSS transitions/animations in settings page leading to fluid User-Experience using styled-components","Developed app home landing page with Responsive Web Design implementation for both mobile and desktop","Re-architected some parts of redux-saga code to make it maintainable, resulting in lesser time implementing complex queries in API endpoints","Used Context API in some components to solve “prop-drilling” issues, resulting in less time implementing features","Implemented UI designs presented in Zeplin"],totalExp:1,totalProjects:1,dateFromWorked:"August 2019",dateUntilWorked:"December 2019",stacksIds:["html","react","webpack","redux","redux-saga","javascript","css","sass","nodejs"],projectsIds:["xmachines"]},{key:"ashore",logo:j,customSizeLogo:{height:"50px"},name:"Ashore",workType:"company",desc:"Online proofing software for creatives",position:"Freelance Laravel/Vue Developer",contributions:["Fixed a difficult bug that causes various issues in proofs page and its database using Eloquent ORM","Added features such as file and image upload","Improved logic for approvers and viewing proofs","Used FileStack API in handling files and images, resulting in faster implementation of file/image upload features","Rendered documents such as pdf, .docx, .html files in webpage using Vue","Wrote Unit Tests for web using Selenium API"],totalExp:1,totalProjects:1,dateFromWorked:"May 2018",dateUntilWorked:"May 2019",stacksIds:["laravel","vue"],projectsIds:["ashore"]},{key:"isoftwaresolutions",logo:h,name:"I-Software Solutions, Inc.",workType:"company",desc:"Software Company based in Australia",position:"Chief Technology Officer",contributions:["Architected the whole app using webpack, ReactJS, NodeJS, MongoDB","Implemented Code-Splitting in webpack apps","Involved in all major decisions of improving the app such as what features to add, approaches to fix the bug, to its technical implementation","Restructured VB.net code to use Service Oriented Architecture and Repository Pattern with Dependency Injection, resulting in boost of productivity for devs, easily Unit Testable, and lesser bugs","Fixed issues related to Xero API, ensuring all of sales computation going through xero are accurate","Applied localStorage caching in Front-End, and different caching techniques in .net for Back-End, leading to blazing fast page load and reduced downtime in Web App with 200+ users","Added Unit Testing in every business logic with complex computations for improved efficiency of testings, resulting in lesser bugs, and faster development time","Increased efficiency of dev team by leading AWS admins to setup AWS infrastructure based on developer environment and code setup","Involved in configuring AWS settings like CodePipeline, CodeCommit, EC2, which results in stability of production server and better developer experience","Setup background service using Hangfire to handle automated payments and email campaigns"],totalExp:4,totalProjects:2,dateFromWorked:"May 2017",dateUntilWorked:"Present",stacksIds:["react","aspnet","webpack","csharp","javascript"],projectsIds:["iframer"]},{key:"roomdock",logo:S,customSizeLogo:{width:"50px",height:"50px"},name:"Roomdock",workType:"company",desc:"",position:"Freelance ASP.net MVC Developer",totalExp:1,totalProjects:1,contributions:["Implemented Stripe API using C#, resulting in successful payment transactions for our users","Implemented features for room seeker and room provider using C# and Entity Framework"],dateFromWorked:"January 2017",dateUntilWorked:"March 2017",stacksIds:["aspnet","csharp","angular","javascript"],projectsIds:["roomdock"]},{key:"intellis",logo:b,customSizeLogo:{width:"50px",height:"50px"},name:"Intellis",workType:"company",desc:"",position:"Fullstack ASP.net MVC Developer",totalExp:1,totalProjects:2,contributions:["Applied and implemented complex UI mockups made by designer into Front-End code using AngularJS and ASP.net MVC","Improved Front-End performance using caching mechanisms such as LocalStorage implementation","Improved some features by applying algorithms which improved the performance","Coded most features using VB.net and C# as main programming language in ASP.net web server"],dateFromWorked:"June 2016",dateUntilWorked:"May 2017",stacksIds:["aspnet","csharp","angular","javascript"],projectsIds:["iframer","icontract"]},{key:"3agbusiness",logo:f,name:"3AG Business Solutions",workType:"company",desc:"",position:"Software Engineer",totalExp:1,totalProjects:4,contributions:["Implemented Appointment Scheduling feature","Integrated TypeScript superset in its early stages to make it more maintainable","Improved performance of existing resume builder app by revising code algorithms, therefore reducing bottleneck","Built real-time communication for telehealth platform app which requires instant messaging, video calls, etc. using opentok platform","Implemented food ordering system from scratch using AngularJS, ASP.net MVC API integration","Added more features in existing ERP system with hundreds of users"],dateFromWorked:"July 2015",dateUntilWorked:"May 2016",stacksIds:["csharp","typescript","aspnet","javascript"],projectsIds:["optushealth"]},{key:"rdfishing",logo:w,name:"RD Fishing Industry, Inc.",workType:"company",desc:"",position:"Senior Programmer",totalExp:2,totalProjects:4,contributions:["Maintained existing ERP systems through managing database data and creating programs on top of ERP system","Improved existing legacy payroll system app using FoxPro DOS optimizations","Applied better solutions for 13th month pay in payroll system by applying better algorithms and formulas which will cater employee benefits"],dateFromWorked:"July 2013",dateUntilWorked:"July 2015",stacksIds:["csharp","javascript","aspnet"]},{key:"nddu",logo:I,name:"NDDU",workType:"school",desc:"Graduated in 4-year college course",position:"Bachelor of Science in Information Technology",contributions:["Integrated Truefit API which automatically analyzes the best fit items for user","Implemented new UI styling for login/signup modal","Improved functionality of cart checkout page by integrating K-Leather API","Suggested better solutions for some tasks that needs improving"],totalExp:1,totalProjects:1,dateFromWorked:"March 2009",dateUntilWorked:"March 2013"}],A=a(55),C=a(68),F=a.n(C),U=a(69),W=a.n(U),T=a(9),_=a.n(T);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(Object(a),!0).forEach((function(t){_()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=function(){function e(t,a){F()(this,e),_()(this,"dbExperiences",void 0),_()(this,"dbProjects",void 0),this.dbExperiences=t,this.dbProjects=a}return W()(e,[{key:"getCompanies",value:function(){var e=this.dbProjects.reduce((function(e,t){return e[t.key]=t,e}),{});return this.dbExperiences.map((function(t){if("company"===t.workType){var a,n=null===(a=t.projectsIds)||void 0===a?void 0:a.map((function(t){return e[t]}));return N(N({},t),{},{projects:n})}return t}))}}]),e}();t.default=function(e){var t=e.onShowModal,a=new O(P,A.a),n=Object(i.useMediaQuery)({query:"(min-width: 768px)"}),r=a.getCompanies();return o.a.createElement(s.a,{pageTitle:"Resume",currentMenu:"resume"},o.a.createElement("a",{href:"https://drive.google.com/uc?id=1pptyRMAHxMcMlzEb7yLyOAeHQzsgeE4Q&export=download",target:"_blank",className:"resume__download-cv"},o.a.createElement(l.b,{fontSize:"30px"}),o.a.createElement("span",{className:"resume__download-cv__text"},"Download CV")),r.map((function(e,a){return o.a.createElement(u,{isDesktop:n,key:a,showRight:a%2==0,data:e,onClick:t})})))}}}]);