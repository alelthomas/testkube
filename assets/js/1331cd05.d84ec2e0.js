"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[2719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return n?o.createElement(b,a(a({ref:t},u),{},{components:n})):o.createElement(b,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const s={},a="Dependencies for Testkube",i={unversionedId:"concepts/dependencies",id:"concepts/dependencies",title:"Dependencies for Testkube",description:"Installing Testkube runs a Nats.io, Minio and MongoDB instance in your Kubernetes cluster. There is an option to replace some of these with your own instances.",source:"@site/docs/concepts/dependencies.md",sourceDirName:"concepts",slug:"/concepts/dependencies",permalink:"/testkube/concepts/dependencies",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/concepts/dependencies.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test Triggers",permalink:"/testkube/concepts/triggers"},next:{title:"Common issues",permalink:"/testkube/concepts/common-issues"}},l={},c=[{value:"MongoDB",id:"mongodb",level:2},{value:"SSL connections",id:"ssl-connections",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dependencies-for-testkube"},"Dependencies for Testkube"),(0,r.kt)("p",null,"Installing Testkube runs a Nats.io, Minio and MongoDB instance in your Kubernetes cluster. There is an option to replace some of these with your own instances."),(0,r.kt)("h2",{id:"mongodb"},"MongoDB"),(0,r.kt)("p",null,"MongoDB is used for storage of Testkube Test results and various Testkube configurations as telemetry settings and cluster ID."),(0,r.kt)("p",null,"In order to use an external MongoDB instance, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure you have access to the MongoDB you want to connect to - note: newest versions of MongoDB might not work optimally with Testkube, for the best experience, use MongoDB v4.4.12"),(0,r.kt)("li",{parentName:"ol"},"Install testkube with --set mongo.enabled=false:\n",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl testkube install --set mongo.enabled=false")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubeshop/helm-charts/blob/main/charts/testkube/values.yaml"},"Update MongoDB details for the api-server in the helm values with valid connection string"))),(0,r.kt)("h3",{id:"ssl-connections"},"SSL connections"),(0,r.kt)("p",null,"Inspecting the Testkube api-server manifest shows the following MongoDB-related environment variables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},'"API_MONGO_DSN"'),' (default:"mongodb://localhost:27017") - connection string'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},'"API_MONGO_DB"'),' (default:"testkube") - database name'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},'"API_MONGO_SSL_CERT"')," (no default value) - reference to Kubernetes secret for MongoDB instances with SSL enabled")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"API_MONGO_SSL_CERT")," expects the name of a Kubernetes secret containing all the necessary information to establish an SSL connection to the MongoDB instance. This secret has to be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"testkube")," namespace and should have the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: mongo-ssl-certs\n  namespace: testkube\ntype: Opaque\ndata:\n  sslCertificateAuthorityFile: <base64 encoded root-ca.pem>\n  sslClientCertificateKeyFile: <base64 encoded mongodb.pem>\n  sslClientCertificateKeyFilePassword: <base64 encoded password>\n")),(0,r.kt)("p",null,"To set this variable on helm-charts level, set ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/helm-charts/blob/main/charts/testkube-api/values.yaml"},"mongodb.sslCertSecret")," to the name of the secret."))}p.isMDXComponent=!0}}]);