"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[696],{876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9826:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(8427),a=(r(2784),r(876));const i={},o="Character Limit",l={unversionedId:"plugins/character-limit",id:"plugins/character-limit",title:"Character Limit",description:"Limit number of characters in a GraphQL document.",source:"@site/docs/plugins/character-limit.md",sourceDirName:"plugins",slug:"/plugins/character-limit",permalink:"/graphql-armor/docs/plugins/character-limit",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/plugins/character-limit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Block field suggestions",permalink:"/graphql-armor/docs/plugins/block-field-suggestions"},next:{title:"Cost limit",permalink:"/graphql-armor/docs/plugins/cost-limit"}},c={},s=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With <code>@envelop/core</code> from <code>@the-guild-org</code>",id:"with-envelopcore-from-the-guild-org",level:3},{value:"Design decisions",id:"design-decisions",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"character-limit"},"Character Limit"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Limit")," number of ",(0,a.kt)("strong",{parentName:"p"},"characters")," in a GraphQL document."),(0,a.kt)("p",null,"This help preventing ",(0,a.kt)("strong",{parentName:"p"},"DoS attacks")," by limiting the size of the document."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#usage"},"Usage"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#with-envelopcore-from-the-guild-org"},"With ",(0,a.kt)("inlineCode",{parentName:"a"},"@envelop/core")," from ",(0,a.kt)("inlineCode",{parentName:"a"},"@the-guild-org"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#design-decisions"},"Design decisions"))),(0,a.kt)("admonition",{title:"Out of core",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This plugin is not part of the core package, you need to install it separately.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @escape.tech/graphql-armor-character-limit\n\n# yarn\nyarn add @escape.tech/graphql-armor-character-limit\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"with-envelopcore-from-the-guild-org"},"With ",(0,a.kt)("inlineCode",{parentName:"h3"},"@envelop/core")," from ",(0,a.kt)("inlineCode",{parentName:"h3"},"@the-guild-org")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { envelop } from '@envelop/core';\nimport { characterLimitPlugin } from '@escape.tech/graphql-armor-character-limit';\n\nconst getEnveloped = envelop({\n  plugins: [\n    // ... other plugins ...\n    characterLimitPlugin({\n        maxLength: 15000, // Number of characters allowed | Default: 15000\n    }),\n  ]\n});\n")),(0,a.kt)("h2",{id:"design-decisions"},"Design decisions"),(0,a.kt)("p",null,"This plugin relies on a parser plugin to works and access query from the context."),(0,a.kt)("p",null,"This should be supported by the engine you use."),(0,a.kt)("p",null,"If you experience any issues, please open an issue."))}u.isMDXComponent=!0}}]);