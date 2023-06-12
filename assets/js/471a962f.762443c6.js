"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[7704],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>p});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},I=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),I=c(i),p=n,b=I["".concat(u,".").concat(p)]||I[p]||h[p]||a;return i?r.createElement(b,s(s({ref:t},l),{},{components:i})):r.createElement(b,s({ref:t},l))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,s=new Array(a);s[0]=I;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<a;c++)s[c]=i[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}I.displayName="MDXCreateElement"},63919:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=i(87462),n=(i(67294),i(3905));const a={},s="OAuth for CLI",o={unversionedId:"articles/oauth-cli",id:"articles/oauth-cli",title:"OAuth for CLI",description:'By default, Testkube CLI uses the "proxy" client which leverages the kube apiserver proxy to reach the Testkube API server. This implies granting users access to Iestkube internals in order to reach the Testkube APIREST endpoint (when using commands such as testkube get artifact ).',source:"@site/docs/articles/oauth-cli.md",sourceDirName:"articles",slug:"/articles/oauth-cli",permalink:"/articles/oauth-cli",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/articles/oauth-cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test Sources",permalink:"/articles/test-sources"},next:{title:"OAuth for Testkube Dashboard",permalink:"/articles/oauth-dashboard"}},u={},c=[{value:"Provide Parameters for API Ingress",id:"provide-parameters-for-api-ingress",level:2},{value:"Create Github OAuth Application",id:"create-github-oauth-application",level:2},{value:"Provide Parameters for CLI",id:"provide-parameters-for-cli",level:2},{value:"Run CLI Commands with OAuth",id:"run-cli-commands-with-oauth",level:2},{value:"Environment Variables",id:"environment-variables",level:2}],l={toc:c};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"oauth-for-cli"},"OAuth for CLI"),(0,n.kt)("p",null,'By default, Testkube CLI uses the "proxy" client which leverages the ',(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/proxies/"},"kube apiserver proxy")," to reach the Testkube API server. This implies granting users access to Iestkube internals in order to reach the Testkube APIREST endpoint (when using commands such as ",(0,n.kt)("inlineCode",{parentName:"p"},"testkube get artifact")," )."),(0,n.kt)("p",null,"This section describes how to protect the Testkube api-server REST API endpoint with ",(0,n.kt)("a",{parentName:"p",href:"https://oauth.net/2/grant-types/authorization-code/"},"oauth2 authentication authorization grant"),', for use by the Testkube CLI as an oauth 2 client. In this mode, Testkube users do not need to be granted "Testkube administrator roles".'),(0,n.kt)("p",null,"Testkube doesn't provide a separate user/role management system to protect access to its CLI."),(0,n.kt)("p",null,"Users can configure OAuth-based authentication modules using Testkube Helm chart parameters and the CLI config command."),(0,n.kt)("p",null,"Testkube can automatically configure the Kubernetes NGINX Ingress Controller and create the required ingresses."),(0,n.kt)("h2",{id:"provide-parameters-for-api-ingress"},"Provide Parameters for API Ingress"),(0,n.kt)("p",null,"Pass values to Testkube Helm chart during installation or upgrade (they are empty by default).\nPay attention to the usage of the scheme (http or https) in URIs."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'--set testkube-api.cliIngress.enabled=true \\\n--set testkube-api.cliIngress.oauth.provider="github"\n--set testkube-api.cliIngress.oauth.clientID="XXXXXXXXXX" \\\n--set testkube-api.cliIngress.oauth.clientSecret="XXXXXXXXXX" \\\n--set testkube-api.cliIngress.oauth.scopes=""\n')),(0,n.kt)("h2",{id:"create-github-oauth-application"},"Create Github OAuth Application"),(0,n.kt)("p",null,"Currently, only GitHub OAuth authentication is supported. It is not yet possible to configure kube api-server to authenticate Testkube CLI OAuth2 against other OAuth2 IDPs. "),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc6749#section-1.1"},"OAuth terminology"),": "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GitHub is the ",(0,n.kt)("em",{parentName:"li"},"authorization server"),"."),(0,n.kt)("li",{parentName:"ul"},"Testkube CLI is the ",(0,n.kt)("em",{parentName:"li"},"client")," receiving HTTP redirects from the authorization server on a local HTTP endpoint (",(0,n.kt)("a",{parentName:"li",href:"http://127.0.0.1:13254"},"http://127.0.0.1:13254"),") served by the CLI. A local web browser invoked by ",(0,n.kt)("a",{parentName:"li",href:"https://linux.die.net/man/1/xdg-open"},"xdg-open")," is required to access GitHub web UI, and then follow HTTP redirect to the local HTTP authorization callback endpoint."),(0,n.kt)("li",{parentName:"ul"},"Testkube api-server is the ",(0,n.kt)("em",{parentName:"li"},"resource server"),".")),(0,n.kt)("p",null,"Register a new Github OAuth application for your personal or organization account."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Register new App",src:i(28783).Z,width:"1226",height:"906"})),(0,n.kt)("p",null,"Pay attention to the usage of the scheme (http or https) in URIs.\nThe homepage URL should be the Testkube Dashboard home page ",(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:13254"},"http://127.0.0.1:13254"),"."),(0,n.kt)("p",null,"The authorization callback URL should be a prebuilt page at the Testkube Dashboard website ",(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:13254/oauth/callback"},"http://127.0.0.1:13254/oauth/callback"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"View created App",src:i(63145).Z,width:"1182",height:"906"})),(0,n.kt)("p",null,"Make note of the generated Client ID and Client Secret."),(0,n.kt)("h2",{id:"provide-parameters-for-cli"},"Provide Parameters for CLI"),(0,n.kt)("p",null,"Run the command below to configure oauth parameters (we support GitHub OAuth provider):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl testkube config oauth https://demo.testkube.io/api --client-id XXXXXXXXXX --client-secret XXXXXXXXXX\n")),(0,n.kt)("p",null,"Output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"You will be redirected to your browser for authentication or you can open the url below manually\nhttps://github.com/login/oauth/authorize?access_type=offline&client_id=XXXXXXXXXX&redirect_uri=http%3A%2F%2F127.0.0.1%3A13254%2Foauth%2Fcallback&response_type=code&state=iRQkcwXV\nAuthentication will be cancelled in 60 seconds\n")),(0,n.kt)("p",null,"Authorization for the GitHub application will be requested and access will need to be confirmed.\n",(0,n.kt)("img",{alt:"Confirm App authorization",src:i(81336).Z,width:"697",height:"637"})),(0,n.kt)("p",null,"If authorization is successful, you will see the success page.\n",(0,n.kt)("img",{alt:"Success Page",src:i(8254).Z,width:"481",height:"151"})),(0,n.kt)("p",null,"Output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"Shutting down server...\nServer gracefully stopped \ud83e\udd47\nNew api uri set to https://demo.testkube.io/api \ud83e\udd47\nNew oauth token gho_XXXXXXXXXX \ud83e\udd47\n")),(0,n.kt)("h2",{id:"run-cli-commands-with-oauth"},"Run CLI Commands with OAuth"),(0,n.kt)("p",null,"Now all of your requests with direct client will submit an OAuth token, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl testkube get executors -c direct\n")),(0,n.kt)("p",null,"Output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"  NAME               | URI | LABELS\n+--------------------+-----+--------+\n  artillery-executor |     |\n  curl-executor      |     |\n  cypress-executor   |     |\n  k6-executor        |     |\n  postman-executor   |     |\n  soapui-executor    |     |\n")),(0,n.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,n.kt)("p",null,"You can use 2 environment variables to override CLI config values:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"TESTKUBE_API_URI")," - For the API uri."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"TESTKUBE_OAUTH_ACCESS_TOKEN")," - For the OAuth access token."))}h.isMDXComponent=!0},81336:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/github_app_authorize_cli-32295022169a4f522be810c2f3dd24b0.png"},28783:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/github_app_request_cli-75c5d293bc878e0e64f356ee84387c2d.png"},63145:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/github_app_response_cli-aa0aba78cfe52d13e138d8f4ec07636b.png"},8254:(e,t,i)=>{i.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);