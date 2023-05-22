"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[2027],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=i(a),d=r,c=k["".concat(o,".").concat(d)]||k[d]||u[d]||l;return a?n.createElement(c,s(s({ref:t},m),{},{components:a})):n.createElement(c,s({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},34311:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={},s="Testkube Helm Charts",p={unversionedId:"articles/helm-chart",id:"articles/helm-chart",title:"Testkube Helm Charts",description:"1. Add the Kubeshop Helm repository.",source:"@site/docs/articles/helm-chart.md",sourceDirName:"articles",slug:"/articles/helm-chart",permalink:"/articles/helm-chart",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/articles/helm-chart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"testkube_watch_testsuiteexecution",permalink:"/cli/testkube_watch_testsuiteexecution"},next:{title:"OpenAPI Definition",permalink:"/openapi"}},o={},i=[{value:"1. Add the Kubeshop Helm repository.",id:"1-add-the-kubeshop-helm-repository",level:2},{value:"2. Install the <code>testkube</code> chart.",id:"2-install-the-testkube-chart",level:2},{value:"Testkube Multi-namespace Feature",id:"testkube-multi-namespace-feature",level:2},{value:"Helm Properties",id:"helm-properties",level:4}],m={toc:i};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testkube-helm-charts"},"Testkube Helm Charts"),(0,r.kt)("h2",{id:"1-add-the-kubeshop-helm-repository"},"1. Add the Kubeshop Helm repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo add kubeshop https://kubeshop.github.io/helm-charts\n")),(0,r.kt)("p",null,"If this repo already exists, run ",(0,r.kt)("inlineCode",{parentName:"p"},"helm repo update")," to retrieve\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," versions of the packages.  You can then run ",(0,r.kt)("inlineCode",{parentName:"p"},"helm search repo\ntestkube")," to see the charts."),(0,r.kt)("h2",{id:"2-install-the-testkube-chart"},"2. Install the ",(0,r.kt)("inlineCode",{parentName:"h2"},"testkube")," chart."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm install --create-namespace my-testkube kubeshop/testkube\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"By default, the namespace for the installation will be ",(0,r.kt)("inlineCode",{parentName:"p"},"testkube"),". If the ",(0,r.kt)("inlineCode",{parentName:"p"},"testkube")," namespace does not exist, it will be created for you."),(0,r.kt)("p",{parentName:"admonition"},"If you wish to install into a different namespace, please use following command:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm install --namespace namespace_name my-testkube kubeshop/testkube\n")),(0,r.kt)("p",{parentName:"admonition"},"To uninstall the ",(0,r.kt)("inlineCode",{parentName:"p"},"testkube")," chart if it was installed into the default namespace:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm delete my-testkube kubeshop/testkube\n")),(0,r.kt)("p",{parentName:"admonition"},"And from a namespace other than ",(0,r.kt)("inlineCode",{parentName:"p"},"testkube"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm delete --namespace namespace_name my-testkube kubeshop/testkube\n"))),(0,r.kt)("h2",{id:"testkube-multi-namespace-feature"},"Testkube Multi-namespace Feature"),(0,r.kt)("p",null,"It is possible to deploy multiple Testkube instances into the same Kubernetes cluster. Please follow these installation commands."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. For new installations:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo add kubeshop https://kubeshop.github.io/helm-charts\n\nhelm install testkube kubeshop/testkube --namespace testkube --create-namespace --set testkube-api.multinamespace.enabled=true\n\nhelm install testkube1 kubeshop/testkube -n testkube1 --create-namespace --set testkube-api.multinamespace.enabled=true --set testkube-operator.enabled=false\n")),(0,r.kt)("p",null,"These commands will deploy Testkube components into two namespaces: testkube and testkube1 and will create a watcher role to watch k8s resources in each namespace respectively. If you need to watch resources besides the installation namespace, please add them to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"additionalNamespaces"))," variable in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"testkube-api"))," section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"testkube-api:\n  additionalNamespaces: \n  - namespace2\n  - namespace3\n\n")),(0,r.kt)("p",null,"Additionally, It is possible to change the namespace for ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"testkube-operator"))," by setting a value for ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"namespace"))," variable in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"testkube-operator"))," section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"testkube-operator:\n  namespace: testkube-system\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please note that the ",(0,r.kt)("strong",{parentName:"p"},"Testkube Operator")," creates ",(0,r.kt)("strong",{parentName:"p"},"ClusterRoles"),", so for the second deployment of Testkube, we need to disable the Operator, because it will fail with a ",(0,r.kt)("inlineCode",{parentName:"p"},"resources already exist")," error.  Be aware that the Operator is deployed once with the first chart installation of Testkube. Therefore, if you uninstall the first release, it will uninstall the Operator as well.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. For the users who already have Testkube installed")),(0,r.kt)("p",null,"Run the following commands to deploy Testkube in another namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo update kubeshop\n\nhelm install testkube1 kubeshop/testkube --namespace testkube1 --set testkube-api.multinamespace.enabled=true --set testkube-operator.enabled=false\n")),(0,r.kt)("h4",{id:"helm-properties"},"Helm Properties"),(0,r.kt)("p",null,"The following Helm defaults are used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"testkube")," chart:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Is optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mongodb.auth.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mongodb.service.port"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},'"27017"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mongodb.service.portName"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},'"mongodb"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mongodb.service.nodePort"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mongodb.service.clusterIP"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mongodb.nameOverride"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},'"mongodb"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mongodb.fullnameOverride"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},'"testkube-mongodb"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.image.repository"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},'"kubeshop/testkube-api-server"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.image.pullPolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},'"Always"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.image.tag"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},'"latest"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.service.type"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},'"NodePort"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.service.port"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"8088")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.mongodb.dsn"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},'"mongodb://testkube-mongodb:27017"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.nats.uri"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},'"nats://testkube-nats"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.telemetryEnabled"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"testkube-minio-service-testkube:9000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.accessKeyId"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"minio")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.accessKey"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"minio123")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.scrapperEnabled"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.slackToken"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.slackSecret"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.slackConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.jobServiceAccountName"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.logs.storage"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},'"minio"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testkube-api.logs.bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},'"testkube-logs"')))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more configuration parameters of a ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB")," chart please visit:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts/tree/master/bitnami/mongodb#parameters"},"https://github.com/bitnami/charts/tree/master/bitnami/mongodb#parameters"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more configuration parameters of an ",(0,r.kt)("inlineCode",{parentName:"p"},"NATS")," chart please visit:\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.nats.io/running-a-nats-service/nats-kubernetes/helm-charts"},"https://docs.nats.io/running-a-nats-service/nats-kubernetes/helm-charts"))))}u.isMDXComponent=!0}}]);