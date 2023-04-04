"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[5506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>a,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},a=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,a=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||l;return r?n.createElement(d,i(i({ref:t},a),{},{components:r})):n.createElement(d,i({ref:t},a))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29577:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const l={},i="testkube completion powershell",s={unversionedId:"reference/cli/testkube_completion_powershell",id:"reference/cli/testkube_completion_powershell",title:"testkube completion powershell",description:"Generate the autocompletion script for powershell",source:"@site/docs/reference/cli/testkube_completion_powershell.md",sourceDirName:"reference/cli",slug:"/reference/cli/testkube_completion_powershell",permalink:"/reference/cli/testkube_completion_powershell",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/reference/cli/testkube_completion_powershell.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"testkube completion fish",permalink:"/reference/cli/testkube_completion_fish"},next:{title:"testkube completion zsh",permalink:"/reference/cli/testkube_completion_zsh"}},p={},c=[{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],a={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testkube-completion-powershell"},"testkube completion powershell"),(0,o.kt)("p",null,"Generate the autocompletion script for powershell"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Generate the autocompletion script for powershell."),(0,o.kt)("p",null,"To load completions in your current shell session:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"testkube completion powershell | Out-String | Invoke-Expression\n")),(0,o.kt)("p",null,"To load completions for every new session, add the output of the above command\nto your powershell profile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"testkube completion powershell [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help              help for powershell\n      --no-descriptions   disable completion descriptions\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth\n      --verbose            show additional debug messages\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reference/cli/testkube_completion"},"testkube completion"),"\t - Generate the autocompletion script for the specified shell")))}u.isMDXComponent=!0}}]);