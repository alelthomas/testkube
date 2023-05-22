"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[1966],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=s,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),s=(r(67294),r(3905));const a={},o="Test Triggers",i={unversionedId:"articles/test-triggers",id:"articles/test-triggers",title:"Test Triggers",description:"Testkube allows you to automate running tests and test suites by defining triggers on certain events for various Kubernetes resources.",source:"@site/docs/articles/test-triggers.md",sourceDirName:"articles",slug:"/articles/test-triggers",permalink:"/articles/test-triggers",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/articles/test-triggers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Metrics",permalink:"/articles/metrics"},next:{title:"Dependencies for Testkube",permalink:"/articles/testkube-dependencies"}},c={},l=[{value:"What is a Testkube Test Trigger?",id:"what-is-a-testkube-test-trigger",level:2},{value:"Custom Resource Definition Model",id:"custom-resource-definition-model",level:2},{value:"Selectors",id:"selectors",level:3},{value:"Name Selector",id:"name-selector",level:4},{value:"Label Selector",id:"label-selector",level:4},{value:"Resource Conditions",id:"resource-conditions",level:3},{value:"Supported Values",id:"supported-values",level:3},{value:"Example",id:"example",level:2},{value:"Architecture",id:"architecture",level:2},{value:"API",id:"api",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"test-triggers"},"Test Triggers"),(0,s.kt)("p",null,"Testkube allows you to automate running tests and test suites by defining triggers on certain events for various Kubernetes resources."),(0,s.kt)("h2",{id:"what-is-a-testkube-test-trigger"},"What is a Testkube Test Trigger?"),(0,s.kt)("p",null,"In generic terms, a ",(0,s.kt)("strong",{parentName:"p"},"trigger")," defines an ",(0,s.kt)("strong",{parentName:"p"},"action")," which will be executed for a given ",(0,s.kt)("strong",{parentName:"p"},"execution")," when a certain ",(0,s.kt)("strong",{parentName:"p"},"event")," on a specific ",(0,s.kt)("strong",{parentName:"p"},"resource")," occurs. For example, we could define a ",(0,s.kt)("strong",{parentName:"p"},"trigger")," which ",(0,s.kt)("strong",{parentName:"p"},"runs")," a ",(0,s.kt)("strong",{parentName:"p"},"test")," when a ",(0,s.kt)("strong",{parentName:"p"},"configmap")," gets ",(0,s.kt)("strong",{parentName:"p"},"modified"),"."),(0,s.kt)("p",null,"Watch our guide on using Testkube Test Triggers to perform ",(0,s.kt)("strong",{parentName:"p"},"Asynchronous Testing in Kubernetes"),":"),(0,s.kt)("iframe",{width:"100%",height:"350px",src:"https://www.youtube.com/embed/t4V6E9rQ5W4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,s.kt)("h2",{id:"custom-resource-definition-model"},"Custom Resource Definition Model"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: tests.testkube.io/v1\nkind: TestTrigger\nmetadata:\n  name: Kubernetes object name\n  namespace: Kubernetes object namespace\nspec:\n  resource: for which Resource do we monitor Event which triggers an Action\n  resourceSelector: resourceSelector identifies which Kubernetes objects should be watched\n  event: on which Event for a Resource should an Action be triggered\n  conditionSpec: which resource conditions should be matched\n  action: action represents what needs to be executed for selected execution\n  execution: execution identifies for which test execution should an action be executed\n  delay: "OPTIONAL: add a delay before scheduling a test or testsuite when a trigger is matched to an event"\n  testSelector: testSelector identifies on which Testkube Kubernetes Objects an action should be taken\n')),(0,s.kt)("h3",{id:"selectors"},"Selectors"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"resourceSelector")," and ",(0,s.kt)("strong",{parentName:"p"},"testSelector")," fields support selecting resources either by name or using\nthe Kubernetes ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#resources-that-support-set-based-requirements"},"Label Selector"),"."),(0,s.kt)("p",null,"Each selector should specify the ",(0,s.kt)("strong",{parentName:"p"},"namespace")," of the object, otherwise the namespace defaults to ",(0,s.kt)("strong",{parentName:"p"},"testkube"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"selector := resourceSelector | testSelector\n")),(0,s.kt)("h4",{id:"name-selector"},"Name Selector"),(0,s.kt)("p",null,"Name selectors are used when we want to select a specific resource in a specific namespace."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"selector:\n  name: Kubernetes object name\n  namespace: Kubernetes object namespace (default is **testkube**)\n")),(0,s.kt)("h4",{id:"label-selector"},"Label Selector"),(0,s.kt)("p",null,"Label selectors are used when we want to select a group of resources in a specific namespace."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"selector:\n  namespace: Kubernetes object namespace (default is **testkube**)\n  labelSelector:\n    matchLabels: map of key-value pairs\n    matchExpressions:\n      - key: label name\n        operator: one of In, NotIn, Exists, DoesNotExist\n        values: list of values\n")),(0,s.kt)("h3",{id:"resource-conditions"},"Resource Conditions"),(0,s.kt)("p",null,"Resource Conditions allows triggers to be defined based on the status conditions for a specific resource."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"conditionSpec:\n    timeout: duration in seconds the test trigger waits for conditions, until its stopped\n    conditions:\n    - type: test trigger condition type\n      status: test trigger condition status, supported values - True, False, Unknown\n      reason: test trigger condition reason\n")),(0,s.kt)("h3",{id:"supported-values"},"Supported Values"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Resource"),"  - pod, deployment, statefulset, daemonset, service, ingress, event, configmap"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Action"),"    - run"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Event"),"     - created, modified, deleted"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Execution")," - test, testsuite")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"NOTE"),": All resources support the above-mentioned events, a list of finer-grained events is in the works, stay tuned..."),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("p",null,"Here is an example for a ",(0,s.kt)("strong",{parentName:"p"},"Test Trigger")," ",(0,s.kt)("em",{parentName:"p"},"default/testtrigger-example")," which runs the ",(0,s.kt)("strong",{parentName:"p"},"TestSuite")," ",(0,s.kt)("em",{parentName:"p"},"frontend/sanity-test"),"\nwhen a ",(0,s.kt)("strong",{parentName:"p"},"deployment")," containing the label ",(0,s.kt)("strong",{parentName:"p"},"testkube.io/tier: backend")," gets ",(0,s.kt)("strong",{parentName:"p"},"modified")," and also has the conditions ",(0,s.kt)("strong",{parentName:"p"},"Progressing: True: NewReplicaSetAvailable")," and ",(0,s.kt)("strong",{parentName:"p"},"Available: True"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: tests.testkube.io/v1\nkind: TestTrigger\nmetadata:\n  name: testtrigger-example\n  namespace: default\nspec:\n  resource: deployment\n  resourceSelector:\n    labelSelector:\n      matchLabels:\n        testkube.io/tier: backend\n  event: modified\n  conditionSpec:\n    timeout: 100\n    conditions:\n    - type: Progressing\n      status: "True"\n      reason: "NewReplicaSetAvailable"\n    - type: Available\n      status: "True"\n  action: run\n  execution: testsuite\n  testSelector:\n    name: sanity-test\n    namespace: frontend\n')),(0,s.kt)("h2",{id:"architecture"},"Architecture"),(0,s.kt)("p",null,"Testkube uses ",(0,s.kt)("a",{parentName:"p",href:"https://pkg.go.dev/k8s.io/client-go/informers"},"Informers")," to watch Kubernetes resources and register handlers\non certain actions on the watched Kubernetes resources."),(0,s.kt)("p",null,"Informers are a reliable, scalable and fault-tolerant Kubernetes concept where each informer registers handlers with the\nKubernetes API and gets notified by Kubernetes on each event on the watched resources."),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("p",null,"Testkube exposes CRUD operations on test triggers in the REST API. Check out the ",(0,s.kt)("a",{parentName:"p",href:"/openapi"},"Open API")," docs for more info."))}p.isMDXComponent=!0}}]);