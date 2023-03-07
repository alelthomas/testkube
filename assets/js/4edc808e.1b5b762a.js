"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[4173],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var s=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,s,o=function(e,t){if(null==e)return{};var r,s,o={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=s.createContext({}),u=function(e){var t=s.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return s.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||n;return r?s.createElement(h,i(i({ref:t},l),{},{components:r})):s.createElement(h,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<n;u++)i[u]=r[u];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84151:(e,t,r)=>{r.d(t,{Z:()=>f});var s=r(67294),o=r(86010),n=r(39960),i=r(53438),a=r(13919),c=r(95999);const u="cardContainer_S8oU",l="cardTitle_HoSo",p="cardDescription_c27F";var d=r(92949);function m(e){let{href:t,children:r}=e;return s.createElement(n.Z,{href:t,className:(0,o.Z)("card padding--md",u)},r)}function h(e){let{href:t,icon:r,logo:n,title:i,description:a}=e;return s.createElement(m,{href:t},s.createElement("h2",{className:(0,o.Z)("text--truncate",l),title:i},r||s.createElement("img",{src:n,width:32,height:32,style:"dark"!==(0,d.I)().colorMode?{WebkitFilter:"invert(1)",filter:"invert(1)"}:void 0})," ",i),a&&s.createElement("p",{className:(0,o.Z)("text--truncate",p),title:a},a))}function y(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?s.createElement(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}const b=new Map([["/test-types/executor-artillery","https://raw.githubusercontent.com/kubeshop/testkube-dashboard/main/src/assets/images/artilleryIcon.svg"],["/test-types/executor-curl","https://raw.githubusercontent.com/kubeshop/testkube-dashboard/main/src/assets/images/curlIcon.svg"],["/test-types/executor-cypress","https://raw.githubusercontent.com/kubeshop/testkube-dashboard/main/src/assets/images/cypressIcon.svg"],["/test-types/executor-ginkgo","https://raw.githubusercontent.com/kubeshop/testkube-dashboard/main/src/assets/images/ginkgoIcon.svg"],["/test-types/executor-gradle","https://raw.githubusercontent.com/kubeshop/testkube-dashboard/main/src/assets/images/gradleIcon.svg"],["/test-types/executor-jmeter","https://raw.githubusercontent.com/kubeshop/testkube-dashboard/main/src/assets/images/jmeterIcon.svg"],["/test-types/executor-k6","https://raw.githubusercontent.com/kubeshop/testkube-dashboard/main/src/assets/images/k6Icon.svg"],["/test-types/executor-kubepug","https://raw.githubusercontent.com/kubeshop/testkube-dashboard/main/src/assets/images/kubepug.svg"],["/test-types/executor-maven","https://raw.githubusercontent.com/kubeshop/testkube-dashboard/main/src/assets/images/mavenIcon.svg"],["/test-types/executor-postman","https://raw.githubusercontent.com/kubeshop/testkube-dashboard/main/src/assets/images/postmanIcon.svg"],["/test-types/executor-soapui","https://raw.githubusercontent.com/kubeshop/testkube-dashboard/main/src/assets/images/soapIcon.svg"],["/test-types/executor-playwright","https://raw.githubusercontent.com/kubeshop/testkube-dashboard/main/src/assets/images/playwrightIcon.svg"]]);function g(e){let{item:t}=e;const r=b.get(t.href),o=r?void 0:(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(t.docId??void 0);return s.createElement(h,{href:t.href,icon:o,logo:r,title:t.label,description:null==n?void 0:n.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return s.createElement(g,{item:t});case"category":return s.createElement(y,{item:t});case"intro":return s.createElement(k,{item:t});case"tool_icons":return s.createElement(v,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{item:t}=e;return s.createElement(h,{href:t.href,icon:t.icon,title:t.label,description:t.description})}function v(e){let{item:t}=e;const r=b.get(t.href);return s.createElement(h,{href:t.href,logo:r,description:t.description})}},11788:(e,t,r)=>{r.r(t),r.d(t,{DocCardList:()=>d,ToolList:()=>m,assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var s=r(87462),o=(r(67294),r(3905)),n=r(84151),i=r(86010);const a={},c="Testkube Documentation",u={unversionedId:"index",id:"index",title:"Testkube Documentation",description:"Welcome to our documentation!",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/testkube/",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Supported Test Types",permalink:"/testkube/overview/supported-tests"}},l={},p=[{value:"What is Testkube?",id:"what-is-testkube",level:2},{value:"Try it out",id:"try-it-out",level:2},{value:"Tool Support",id:"tool-support",level:2},{value:"Advantages of using Testkube",id:"advantages-of-using-testkube",level:2}],d=e=>(0,o.kt)("section",{className:(0,i.Z)("row indent--min")},[{icon:"\ud83d\udee0",label:"Get started",description:"Get up and running by installing the Testkube CLI and its components within minutes.",href:"/getting-started",type:"intro"},{icon:"\ud83c\udfce\ud83d\udca8",label:"Run your first test",description:"Learn how to create, run, and display the results for your first test.",href:"/getting-started/step3-creating-first-test",type:"intro"},{icon:"\ud83d\ude80",label:"Connect to your CI/CD",description:"Incorporate Testkube into your CI/CD environment with the tools you already use.",href:"/guides/cicd",type:"intro"}].map(((e,t)=>(0,o.kt)("article",{key:t,className:"col padding--sm intro__card"},(0,o.kt)(n.Z,{item:e,mdxType:"DocCard"}))))),m=e=>(0,o.kt)("section",{className:(0,i.Z)("row indent--min")},[{description:"Cypress",href:"/test-types/executor-cypress",type:"tool_icons"},{description:"k6",href:"/test-types/executor-k6",type:"tool_icons"},{description:"Postman",href:"/test-types/executor-postman",type:"tool_icons"},{description:"Ginkgo",href:"/test-types/executor-ginkgo",type:"tool_icons"},{description:"JMeter",href:"/test-types/executor-jmeter",type:"tool_icons"},{description:"Gradle",href:"/test-types/executor-gradle",type:"tool_icons"},{description:"Maven",href:"/test-types/executor-maven",type:"tool_icons"},{description:"Artillery",href:"/test-types/executor-artillery",type:"tool_icons"},{description:"Playwright",href:"/test-types/executor-playwright",type:"tool_icons"},{description:"KubePug",href:"/test-types/executor-kubepug",type:"tool_icons"},{description:"cURL",href:"/test-types/executor-curl",type:"tool_icons"}].map(((e,t)=>(0,o.kt)("article",{key:t,className:"nopadding tools__card"},(0,o.kt)(n.Z,{item:e,mdxType:"DocCard"}))))),h={toc:p,DocCardList:d,ToolList:m};function y(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,s.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testkube-documentation"},"Testkube Documentation"),(0,o.kt)("p",null,"Welcome to our documentation!\nThis is the place where you'll find everything you need to get ramped up and start testing with Testkube."),(0,o.kt)("h2",{id:"what-is-testkube"},"What is Testkube?"),(0,o.kt)("p",null,"Testkube is a Kubernetes-native testing framework for Testers, Developers, and DevOps practitioners that allows you to automate the executions of your existing testing tools inside your Kubernetes cluster, removing all the complexity from your CI/CD pipelines."),(0,o.kt)("h2",{id:"try-it-out"},"Try it out"),(0,o.kt)(d,{mdxType:"DocCardList"}),(0,o.kt)("h2",{id:"tool-support"},"Tool Support"),(0,o.kt)("p",null,"To start testing with Testkube, choose your favorite testing tool:"),(0,o.kt)(m,{mdxType:"ToolList"}),(0,o.kt)("h2",{id:"advantages-of-using-testkube"},"Advantages of using Testkube"),(0,o.kt)("p",null,"With Testkube, tests are part of a cluster's state and can be executed as needed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2728Automatically on deployment of annotated/labeled Kubernetes objects (services, pods, etc)"),(0,o.kt)("li",{parentName:"ul"},"\u23f2\ufe0f On a schedule"),(0,o.kt)("li",{parentName:"ul"},"\ud83e\uddd1\u200d\ud83d\udcbb Manually via Testkube's CLI or Open Source Dashboard"),(0,o.kt)("li",{parentName:"ul"},"\u26a1 Externally triggered via API")))}y.isMDXComponent=!0}}]);