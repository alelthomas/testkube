"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[7288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,g=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,s=new Array(i);s[0]=d;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:l,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const i={},s="Installing the Testkube Agent",r={unversionedId:"testkube-cloud/articles/installing-agent",id:"testkube-cloud/articles/installing-agent",title:"Installing the Testkube Agent",description:"Installation Steps",source:"@site/docs/testkube-cloud/articles/installing-agent.md",sourceDirName:"testkube-cloud/articles",slug:"/testkube-cloud/articles/installing-agent",permalink:"/testkube-cloud/articles/installing-agent",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/testkube-cloud/articles/installing-agent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testkube Cloud",permalink:"/testkube-cloud/articles/intro"},next:{title:"Migrating from Testkube Open Source",permalink:"/testkube-cloud/articles/transition-from-oss"}},o={},c=[{value:"Installation Steps",id:"installation-steps",level:2},{value:"Validating the Installation",id:"validating-the-installation",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installing-the-testkube-agent"},"Installing the Testkube Agent"),(0,l.kt)("h2",{id:"installation-steps"},"Installation Steps"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"To add a new agent, create a new environment: ")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Create Environment",src:n(4714).Z,width:"1051",height:"500"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Pass Info",src:n(23743).Z,width:"1203",height:"596"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Fill in the environment name: ")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Fill in Env Name",src:n(27335).Z,width:"1201",height:"593"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Copy the Helm install command into the terminal to install a new Testkube environment in Agent mode: ")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Copy Helm Command",src:n(6788).Z,width:"1197",height:"572"})),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Run the command in your terminal.")),(0,l.kt)("p",null,"You will need ",(0,l.kt)("em",{parentName:"p"},"Helm")," installed and ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," configured with access to your Kubernetes cluster: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To install ",(0,l.kt)("inlineCode",{parentName:"li"},"helm")," just follow the ",(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"install instrcutions on the Helm web site"),"."),(0,l.kt)("li",{parentName:"ul"},"To install ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl")," follow ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"Kubernetes docs"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Install Steps 1",src:n(81986).Z,width:"488",height:"362"})),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"After some time, you should see the Helm installation notice: ")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Install Steps 2",src:n(90642).Z,width:"578",height:"173"})),(0,l.kt)("h2",{id:"validating-the-installation"},"Validating the Installation"),(0,l.kt)("p",null,"Testkube Cloud will notify if the installation is successful. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A green indicator means that your cluster was able to connect to the Testkube Cloud."),(0,l.kt)("li",{parentName:"ul"},"A red indicator indicates that the Testkube Agent can't connect to the Testkube Cloud API (Testkube needs some time to establish a connection, max time is 2-3 minutes).")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Validate Install",src:n(51674).Z,width:"1140",height:"250"})),(0,l.kt)("p",null,"In case of a RED status you can try to debug the issues with the command below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"testkube agent debug\n")))}p.isMDXComponent=!0},6788:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/copy-helm-command-3545817bab1256192ae3664c4b5efea5.png"},4714:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/creating-environment-1e14c8a8ae4672e32d637660246d7732.jpeg"},27335:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fill-in-env-name-daa6bb8d3079d232ea931f734a0917ad.png"},90642:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/install-steps-2-adbef4f4ffc1fbee12ebe67ec8e3a75b.png"},81986:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/install-steps-f280189fe83f69855b15a6a35dd1027c.png"},23743:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pass-info-347c6f84a69a710859295c54ea8cdec3.png"},51674:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/validate-install-a1859455b391e75d1f4abfc427f15839.png"}}]);