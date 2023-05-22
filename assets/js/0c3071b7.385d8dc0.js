"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[7802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const r={},o="Step 1 - Installing Testkube CLI",i={unversionedId:"articles/step1-installing-cli",id:"articles/step1-installing-cli",title:"Step 1 - Installing Testkube CLI",description:"To install Testkube CLI you'll need the following tools:",source:"@site/docs/articles/step1-installing-cli.md",sourceDirName:"articles",slug:"/articles/step1-installing-cli",permalink:"/articles/step1-installing-cli",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/articles/step1-installing-cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/articles/getting-started-overview"},next:{title:"Step 2 - Install Testkube Cluster Components Using Testkube's CLI",permalink:"/articles/step2-installing-cluster-components"}},s={},u=[{value:"MacOS",id:"macos",level:4},{value:"Windows",id:"windows",level:4},{value:"Ubuntu/Debian",id:"ubuntudebian",level:4},{value:"Script Installation",id:"script-installation",level:4},{value:"Manual Download",id:"manual-download",level:4}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"step-1---installing-testkube-cli"},"Step 1 - Installing Testkube CLI"),(0,l.kt)("p",null,"To install Testkube CLI you'll need the following tools:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"Kubectl"),", Kubernetes command-line tool"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Installing the Testkube CLI with Chocolatey and Homebrew will automatically install these dependencies if they are not present. For Linux-based systems please install them manually in advance.")),(0,l.kt)("h4",{id:"macos"},"MacOS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install testkube\n")),(0,l.kt)("h4",{id:"windows"},"Windows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"choco source add --name=kubeshop_repo --source=https://chocolatey.kubeshop.io/chocolatey  \nchoco install testkube -y\n")),(0,l.kt)("h4",{id:"ubuntudebian"},"Ubuntu/Debian"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'wget -qO - https://repo.testkube.io/key.pub | sudo apt-key add - && echo "deb https://repo.testkube.io/linux linux main" | sudo tee -a /etc/apt/sources.list && sudo apt-get update && sudo apt-get install -y testkube\n')),(0,l.kt)("h4",{id:"script-installation"},"Script Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSLf https://get.testkube.io | sh\n")),(0,l.kt)("h4",{id:"manual-download"},"Manual Download"),(0,l.kt)("p",null,"If you don't want to use scripts or package managers you can always do a manual install:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the binary for the version and platform of your choice ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubeshop/testkube/releases"},"here")),(0,l.kt)("li",{parentName:"ol"},"Unpack it. For example, in Linux use ",(0,l.kt)("inlineCode",{parentName:"li"},"tar -zxvf testkube_1.5.1_Linux_x86_64.tar.gz")),(0,l.kt)("li",{parentName:"ol"},"Move it to a location in the PATH. For example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"mv  testkube_1.5.1_Linux_x86_64/kubectl-testkube /usr/local/bin/kubectl-testkube`\n")),(0,l.kt)("p",null,"For Windows, you will need to unpack the binary and add it to the ",(0,l.kt)("inlineCode",{parentName:"p"},"%PATH%")," as well."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If you use a package manager that we don't support, please let us know here ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube/issues/161"},"#161"),".")))}c.isMDXComponent=!0}}]);