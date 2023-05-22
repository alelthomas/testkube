"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[7604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=a(n),b=o,k=p["".concat(l,".").concat(b)]||p[b]||d[b]||s;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var a=2;a<s;a++)i[a]=n[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>a});var r=n(87462),o=(n(67294),n(3905));const s={},i="Testkube Cloud Architecture",u={unversionedId:"testkube-cloud/articles/architecture",id:"testkube-cloud/articles/architecture",title:"Testkube Cloud Architecture",description:"Multiple Testkube Agents",source:"@site/docs/testkube-cloud/articles/architecture.md",sourceDirName:"testkube-cloud/articles",slug:"/testkube-cloud/articles/architecture",permalink:"/testkube-cloud/articles/architecture",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/testkube-cloud/articles/architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connecting from the CLI",permalink:"/testkube-cloud/articles/managing-cli-context"},next:{title:"testkube",permalink:"/cli/testkube"}},l={},a=[{value:"Multiple Testkube Agents",id:"multiple-testkube-agents",level:2},{value:"Storing Results",id:"storing-results",level:2},{value:"Testkube Networking",id:"testkube-networking",level:2}],c={toc:a};function d(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testkube-cloud-architecture"},"Testkube Cloud Architecture"),(0,o.kt)("h2",{id:"multiple-testkube-agents"},"Multiple Testkube Agents"),(0,o.kt)("p",null,"The main Testkube Cloud feature is to have insights into multiple Testkube Cloud Agents.\nYou can look at your Kubernetes clusters from a single dashboard and easily switch between different Testkube clusters. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"multiple clusters",src:n(41368).Z,width:"640",height:"540"})),(0,o.kt)("h2",{id:"storing-results"},"Storing Results"),(0,o.kt)("p",null,"In Testkube standalone, all results are stored in the users cluster, so you need to be aware of MinIO and MongoDB.\nTestkube Cloud makes it easy for you. All data is stored in the Testkube Cloud infrastructure so you don't need to worry about backups."),(0,o.kt)("h2",{id:"testkube-networking"},"Testkube Networking"),(0,o.kt)("p",null,"To simplify networking connections, the Testkube Agent is able to create a connection to Testkube Cloud clusters. The Agent is registering itself into\nTestkube Cloud as a new environment.\nThis allows Testkube Cloud to send commands which Testkube will manage in Agent mode. The connection is established from Testkube Agent to Testkube Cloud."),(0,o.kt)("p",null,"After installation, the Testkube Agent connects to Testkube Cloud and starts listening for commands.\nAdditionally the Agent is connecting to the Testkube Cloud REST API."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"network",src:n(40707).Z,width:"880",height:"400"})),(0,o.kt)("p",null,"Testkube Agent is connecting to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.testkube.io")," on port ",(0,o.kt)("inlineCode",{parentName:"p"},"8088")," for HTTPS connection and on port ",(0,o.kt)("inlineCode",{parentName:"p"},"8089")," for GRPC connection."))}d.isMDXComponent=!0},41368:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/multiple-clusters-917f60735f2e9889366ab8f6e8a57ee2.jpeg"},40707:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/network-db3f8aaafbc1ae4f41573346e516c5f6.jpeg"}}]);