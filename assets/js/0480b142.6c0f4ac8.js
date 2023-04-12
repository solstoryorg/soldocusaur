"use strict";(self.webpackChunksolstory=self.webpackChunksolstory||[]).push([[836],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3584:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:9},l="FAQ",c={unversionedId:"faq",id:"faq",title:"FAQ",description:"What if Solana gets more expensive?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/soldocusaur/faq",editUrl:"https://github.com/solstoryorg/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Verified Programs",permalink:"/soldocusaur/verified"}},u={},p=[{value:"What if Solana gets more expensive?",id:"what-if-solana-gets-more-expensive",level:2},{value:"What if data storage (ARWeave, etc) gets more expensive?",id:"what-if-data-storage-arweave-etc-gets-more-expensive",level:2},{value:"Doesn&#39;t having a centralized <code>systemVerified</code> flag on every program&#39;s metadata give the Solstory org unfair power over the network?",id:"doesnt-having-a-centralized-systemverified-flag-on-every-programs-metadata-give-the-solstory-org-unfair-power-over-the-network",level:2}],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h2",{id:"what-if-solana-gets-more-expensive"},"What if Solana gets more expensive?"),(0,a.kt)("p",null,"One of the difficulties building software on a blockchain is that the more successful\na chain becomes, the more expensive the compute/storage/everything becomes to use.\nSolstory is designed to offload everything possible to external systems\u2013from solana's\nperspective an append operation is just calculating a hash and then updating two arrays.\nThis means that even as sol becomes more expensive we're dealing with transaction fees\nfor simple things instead of complex calculations or growing data storage."),(0,a.kt)("h2",{id:"what-if-data-storage-arweave-etc-gets-more-expensive"},"What if data storage (ARWeave, etc) gets more expensive?"),(0,a.kt)("p",null,"Solstory is storage location agnostic, and one of our medium term projects is building\nnative compatability for more storage options into the JS API. So if storage gets\nexpensive, you can always switch to a different storage provider."),(0,a.kt)("h2",{id:"doesnt-having-a-centralized-systemverified-flag-on-every-programs-metadata-give-the-solstory-org-unfair-power-over-the-network"},"Doesn't having a centralized ",(0,a.kt)("inlineCode",{parentName:"h2"},"systemVerified")," flag on every program's metadata give the Solstory org unfair power over the network?"),(0,a.kt)("p",null,"We thought ",(0,a.kt)("em",{parentName:"p"},"a lot")," about permissioning and safety when we were designing the\nnetwork architecture. In this case we felt a systemVerified flag displayed to\nclients struck a crucial compromise: it allowed people to rely on a centralized\norg as custodians, while similarly allowing them to disregard the flag if those\ncustodians were ever deemed not-trust-worthy. It helps that folks making that\ndecision will largely be developers making software like explorers and wallets,\nwho have the domain expertise to act as an effective check here."))}d.isMDXComponent=!0}}]);