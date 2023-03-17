"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[9257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=s.createContext({}),c=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=c(e.components);return s.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(o,".").concat(d)]||m[d]||p[d]||r;return n?s.createElement(g,u(u({ref:t},l),{},{components:n})):s.createElement(g,u({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,u=new Array(r);u[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var c=2;c<r;c++)u[c]=n[c];return s.createElement.apply(null,u)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=n(87462),a=(n(67294),n(3905));const r={},u="Getting Results",i={unversionedId:"concepts/test-suites/testsuites-getting-results",id:"concepts/test-suites/testsuites-getting-results",title:"Getting Results",description:"To get recent results, call the tests executions subcommand:",source:"@site/docs/concepts/test-suites/testsuites-getting-results.md",sourceDirName:"concepts/test-suites",slug:"/concepts/test-suites/testsuites-getting-results",permalink:"/concepts/test-suites/testsuites-getting-results",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/concepts/test-suites/testsuites-getting-results.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running Test Suites",permalink:"/concepts/test-suites/testsuites-running"},next:{title:"Testkube Dashboard",permalink:"/concepts/dashboard"}},o={},c=[{value:"Getting a Single Test Execution",id:"getting-a-single-test-execution",level:2},{value:"Getting a Test Suite Status of a Given Test Suite from Test Suite CRD",id:"getting-a-test-suite-status-of-a-given-test-suite-from-test-suite-crd",level:3}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-results"},"Getting Results"),(0,a.kt)("p",null,"To get recent results, call the ",(0,a.kt)("inlineCode",{parentName:"p"},"tests executions")," subcommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"testkube get tse\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},"             ID            |  TEST NAME   |           EXECUTION NAME            | STATUS  | STEPS\n+--------------------------+--------------+-------------------------------------+---------+-------+\n  61e1142465e59a318346512b | test-example | test-example.equally-enabled-heron  | success |     3\n  61e1136165e59a3183465125 | test-example | test-example.fairly-humble-tick     | success |     3\n  61dff61867326ad521b2a0d6 | test-example | test-example.verbally-merry-hagfish | success |     3\n  61dfe0de69b7bfcb9058dad0 | test-example | test-example.overly-exciting-krill  | success |     3\n\n")),(0,a.kt)("h2",{id:"getting-a-single-test-execution"},"Getting a Single Test Execution"),(0,a.kt)("p",null,"With the test execution ID, you can get single test results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"testkube get tse 61e1136165e59a3183465125\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},"Name: test-example.fairly-humble-tick\nStatus: success\n\n             STEP            | STATUS  |            ID            | ERROR\n+----------------------------+---------+--------------------------+-------+\n  run test: testkube/test1 | success | 61e1136165e59a3183465127 |\n  delay 2000ms               | success |                          |\n  run test: testkube/test1 | success | 61e1136765e59a3183465129 |\n\n\n\nUse the following command to get test execution details:\n$ testkube get tse 61e1136165e59a3183465125\n")),(0,a.kt)("p",null,"Test Suite steps that are running workflows based on ",(0,a.kt)("inlineCode",{parentName:"p"},"Test")," Custom Resources have a Test Execution ID. You can get the details of each in a separate command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl testkube get execution 61e1136165e59a3183465127Name: test-example-test1, Status: success, Duration: 4.677s\n\nnewman\n\nTODO\n\n\u2192 Create TODO\n  POST http://34.74.127.60:8080/todos [201 Created, 296B, 100ms]\n  \u2713  Status code is 201 CREATED\n  \u250c\n  \u2502 'creating', 'http://34.74.127.60:8080/todos/50'\n  \u2514\n  \u2713  Check if todo item craeted successfully\n  GET http://34.74.127.60:8080/todos/50 [200 OK, 291B, 8ms]\n\n\u2192 Complete TODO item\n  \u250c\n  \u2502 'completing', 'http://34.74.127.60:8080/todos/50'\n  \u2514\n  PATCH http://34.74.127.60:8080/todos/50 [200 OK, 290B, 8ms]\n\n\u2192 Delete TODO item\n  \u250c\n  \u2502 'deleting', 'http://34.74.127.60:8080/todos/50'\n  \u2514\n  DELETE http://34.74.127.60:8080/todos/50 [204 No Content, 113B, 7ms]\n  \u2713  Status code is 204 no content\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                         \u2502          executed \u2502           failed \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502              iterations \u2502                 1 \u2502                0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502                requests \u2502                 4 \u2502                0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502            test-scripts \u2502                 5 \u2502                0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502      prerequest-scripts \u2502                 6 \u2502                0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502              assertions \u2502                 3 \u2502                0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 total run duration: 283ms                                      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 total data received: 353B (approx)                             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 average response time: 30ms [min: 7ms, max: 100ms, s.d.: 39ms] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,a.kt)("h3",{id:"getting-a-test-suite-status-of-a-given-test-suite-from-test-suite-crd"},"Getting a Test Suite Status of a Given Test Suite from Test Suite CRD"),(0,a.kt)("p",null,"To get the Test Suite CRD status of a particular test suite, pass the test suite name as a parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl testkube get testsuites test-suite-example --crd-only\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},"apiVersion: tests.testkube.io/v2\nkind: TestSuite\nmetadata:\n  name: test-suite-example\n  namespace: testkube\nspec:\n  steps:\n    execute:\n      stopOnFailure: false\n      namespace: testkube\n      name: test-case\nstatus:\n  latestExecution:\n    id: 63b7551cb2a16c73e8cfa1bf\n    startTime: 2023-01-05T22:54:20Z\n    endTime: 2023-01-05T22:54:29Z\n    status: failed\n")))}p.isMDXComponent=!0}}]);