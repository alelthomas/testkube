"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[6125],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(n),k=o,b=m["".concat(u,".").concat(k)]||m[k]||p[k]||a;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={},l="Development",s={unversionedId:"contributing/development/index",id:"contributing/development/index",title:"Development",description:"Running with CRDs on Kubernetes Cluster",source:"@site/docs/contributing/development/index.md",sourceDirName:"contributing/development",slug:"/contributing/development/",permalink:"/testkube/contributing/development/",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/contributing/development/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contributing to Testkube Open Source",permalink:"/testkube/contributing/intro"},next:{title:"Testkube Custom Resources",permalink:"/testkube/contributing/development/crds"}},u={},i=[{value:"Running with CRDs on Kubernetes Cluster",id:"running-with-crds-on-kubernetes-cluster",level:2},{value:"Running on a Local Machine",id:"running-on-a-local-machine",level:2},{value:"Making Calls to a Local API Server Instance",id:"making-calls-to-a-local-api-server-instance",level:3},{value:"Installing Local Executors",id:"installing-local-executors",level:3},{value:"Intercepting an API Server on a Cluster",id:"intercepting-an-api-server-on-a-cluster",level:2}],c={toc:i};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"development"},"Development"),(0,o.kt)("h2",{id:"running-with-crds-on-kubernetes-cluster"},"Running with CRDs on Kubernetes Cluster"),(0,o.kt)("p",null,"The minimal component which must be deployed on your local Kubernetes cluster is testkube-operator with project CRDs (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube-operator"},"https://github.com/kubeshop/testkube-operator"),")."),(0,o.kt)("p",null,"To install CRDs into your local cluster, checkout the testkube-operator project and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"make install \n")),(0,o.kt)("h2",{id:"running-on-a-local-machine"},"Running on a Local Machine"),(0,o.kt)("p",null,"The next critical components are the Testkube API (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube"},"https://github.com/kubeshop/testkube"),") and an executor. You can use your own tests executor or an existing one from Testkube."),(0,o.kt)("p",null,"Checkout the Testkube project and run a local API server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"make run-mongo-dev run-api\n")),(0,o.kt)("p",null,"Next, run the Testkube Postman executor (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube-executor-postman"},"https://github.com/kubeshop/testkube-executor-postman"),"). The postman executor is MongoDB based so it will launch MongoDB with the API server step:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"make run-executor\n")),(0,o.kt)("h3",{id:"making-calls-to-a-local-api-server-instance"},"Making Calls to a Local API Server Instance"),(0,o.kt)("p",null,"If you want to debug an API server locally, you can run a local kube-proxy which makes all calls to kube proxy URIs directly to API server instances."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"make run-proxy\n")),(0,o.kt)("p",null,"And when calling any of ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl testkube")," subcommands just pass direct client flag (",(0,o.kt)("inlineCode",{parentName:"p"},"-cdirect"),")"),(0,o.kt)("h3",{id:"installing-local-executors"},"Installing Local Executors"),(0,o.kt)("p",null,"Install development executors by running them from the Testkube project (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube"},"https://github.com/kubeshop/testkube"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"make dev-install-local-executors\n")),(0,o.kt)("p",null,"This will register Custom Resources for the following test types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"local-postman/collection"),(0,o.kt)("li",{parentName:"ul"},"local-cypress/project"),(0,o.kt)("li",{parentName:"ul"},"local-curl/test")),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Test")," Custom Resource with one of the types above to be executed on the given executor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl testkube create test --file my_collection_file.json --name my-test-name --type local-postman/collection\n")),(0,o.kt)("p",null,"To summarize: ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," is the single relation between ",(0,o.kt)("inlineCode",{parentName:"p"},"Test")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Executor"),"."),(0,o.kt)("h2",{id:"intercepting-an-api-server-on-a-cluster"},"Intercepting an API Server on a Cluster"),(0,o.kt)("p",null,"For debugging on Kubernetes, intercept the whole API Server (or Postman executor) service\nby using ",(0,o.kt)("a",{parentName:"p",href:"https://telepresence.io"},"Telepresence"),"."),(0,o.kt)("p",null,"Simply intercept the API server with the local instance."),(0,o.kt)("p",null,"To create/run tests pointed to in-cluster executors, start the API Server with telepresence mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"make run-api-telepresence\n")))}p.isMDXComponent=!0}}]);