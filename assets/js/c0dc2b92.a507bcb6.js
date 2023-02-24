"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[3634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=s.createContext({}),l=function(e){var t=s.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return s.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},b=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,g=b["".concat(u,".").concat(d)]||b[d]||p[d]||a;return n?s.createElement(g,i(i({ref:t},c),{},{components:n})):s.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}b.displayName="MDXCreateElement"},92373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(87462),r=(n(67294),n(3905));const a={},i="Ingress-NGINX",o={unversionedId:"guides/exposing-testkube/ingress-nginx",id:"guides/exposing-testkube/ingress-nginx",title:"Ingress-NGINX",description:"Prerequisites",source:"@site/docs/guides/exposing-testkube/ingress-nginx.md",sourceDirName:"guides/exposing-testkube",slug:"/guides/exposing-testkube/ingress-nginx",permalink:"/testkube/guides/exposing-testkube/ingress-nginx",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/guides/exposing-testkube/ingress-nginx.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/testkube/guides/exposing-testkube/overview"},next:{title:"Using Testkube from CI/CD",permalink:"/testkube/guides/cicd/"}},u={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure Ingress-NGINX to expose Testkube API",id:"configure-ingress-nginx-to-expose-testkube-api",level:2},{value:"Exposing Testkube Dashboard",id:"exposing-testkube-dashboard",level:2},{value:"HTTPS/TLS Configuration",id:"httpstls-configuration",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ingress-nginx"},"Ingress-NGINX"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Add the repo to Helm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo add kubeshop https://kubeshop.github.io/helm-charts && helm repo update\n")),(0,r.kt)("p",null,"A values file for guidance can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/helm-charts/blob/39f73098630b333ba66db137e7fc016c39d92876/testkube/charts/testkube/values-demo.yaml"},"here"),"."),(0,r.kt)("h2",{id:"configure-ingress-nginx-to-expose-testkube-api"},"Configure Ingress-NGINX to expose Testkube API"),(0,r.kt)("p",null,"The Testkube Dashboard needs the Testkube API to be exposed. For this, you can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'helm upgrade testkube kubeshop/testkube --set testkube-api.ingress.enabled="true"\n')),(0,r.kt)("p",null,"By default, the API's entry point is the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/results"),", so the results will be accessible at ",(0,r.kt)("inlineCode",{parentName:"p"},"$INGRESS_HOST/results/")),(0,r.kt)("p",null,"The Ingress configuration used is available in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/helm-charts"},"Testkube Helm Repo"),"."),(0,r.kt)("h2",{id:"exposing-testkube-dashboard"},"Exposing Testkube Dashboard"),(0,r.kt)("p",null,"To expose the Dashboard and the API together, run: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'helm install testkube kubeshop/testkube --set testkube-dashboard.enabled="true" --set testkube-dashboard.ingress.enabled="true" --set testkube-api.ingress.enabled="true"\n')),(0,r.kt)("p",null,"To get the address of Ingress use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get ingress -n testkube\n")),(0,r.kt)("h2",{id:"httpstls-configuration"},"HTTPS/TLS Configuration"),(0,r.kt)("p",null,"To have secure access to Testkube Dashboard and the API, a certificate should be provided. The Helm charts can be configured from the Ingress section of the values file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'ingress:\n    enabled: "true"\n    annotations: \n      kubernetes.io/ingress.class: nginx\n      nginx.ingress.kubernetes.io/force-ssl-redirect: "false"\n      nginx.ingress.kubernetes.io/ssl-redirect: "false"\n      nginx.ingress.kubernetes.io/enable-cors: "true"\n      nginx.ingress.kubernetes.io/cors-allow-methods: "GET"\n      nginx.ingress.kubernetes.io/cors-allow-credentials: "false"\n      # add an annotation indicating the issuer to use.\n      cert-manager.io/cluster-issuer: letsencrypt-prod\n      # controls whether the ingress is modified \u2018in-place\u2019,\n      # or a new one is created specifically for the HTTP01 challenge.\n      acme.cert-manager.io/http01-edit-in-place: "true"\n    path: /\n    hosts:\n      - demo.testkube.io\n    tlsenabled: "true"\n    tls: # < placing a host in the TLS config will indicate a certificate should be created\n    - hosts:\n      - demo.testkube.io\n      secretName: testkube-demo-cert-secret\n')),(0,r.kt)("p",null,"Certificates are automatically generated using Let's Encrypt and cert-manager, but can be configured for any particular case. A full values file example can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/helm-charts/blob/39f73098630b333ba66db137e7fc016c39d92876/testkube/charts/testkube/values-demo.yaml"},"here"),"."),(0,r.kt)("p",null,"If there is no need for TLS (Transport Layer Security) to be enabled, omit the TLS configuration."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"We highly discourage working in a non-safe environment which is exposed without the use of a TLS-based connection. Please do so in a private internal environment for testing or development purposes only.")),(0,r.kt)("p",null,'To pass specific values to the Ingress annotations, the Helm "--set" option can be used: '),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'helm install testkube kubeshop/testkube --set testkube-dashboard.enabled="true" --set testkube-dashboard.ingress.enabled="true" --set testkube-api.ingress.enabled="true" --set testkube-api.ingress.annotations.kubernetes\\\\.io/ingress\\\\.class="anything_needed" \n')),(0,r.kt)("p",null,"A better approach is to configure and call a values file with the Ingress custom values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm install testkube kubeshop/testkube --values https://github.com/kubeshop/helm-charts/blob/39f73098630b333ba66db137e7fc016c39d92876/testkube/charts/testkube/values-demo.yaml\n")))}p.isMDXComponent=!0}}]);