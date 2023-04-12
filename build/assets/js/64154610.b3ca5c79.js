"use strict";(self.webpackChunksolstory=self.webpackChunksolstory||[]).push([[349],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7941:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:6},c="Costs & Fee Structure",l={unversionedId:"costs_and_fees",id:"costs_and_fees",title:"Costs & Fee Structure",description:"A lot of effort has been put into optimizing Solstory to minimize cost. More",source:"@site/docs/costs_and_fees.md",sourceDirName:".",slug:"/costs_and_fees",permalink:"/costs_and_fees",editUrl:"https://github.com/solstoryorg/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/costs_and_fees.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Advanced - Optimizations",permalink:"/architecture/optimizations"},next:{title:"Terms",permalink:"/terms"}},u={},p=[{value:"Metadata Initialization",id:"metadata-initialization",level:2},{value:"WriterHead Initialization",id:"writerhead-initialization",level:2},{value:"Appending an Item",id:"appending-an-item",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"costs--fee-structure"},"Costs & Fee Structure"),(0,a.kt)("p",null,"A lot of effort has been put into optimizing Solstory to minimize cost. More\nabout that ",(0,a.kt)("a",{parentName:"p",href:"/architecture/optimizations"},"here"),". At the moment, there\u2019s\neffectively three costs to using solstory."),(0,a.kt)("h2",{id:"metadata-initialization"},"Metadata Initialization"),(0,a.kt)("p",null,"This is a one time (per writer address) cost for PDA space. This is\napproximately 0.01 sol, for ~ 1.2 KB of data space."),(0,a.kt)("h2",{id:"writerhead-initialization"},"WriterHead Initialization"),(0,a.kt)("p",null,"The WriterHead is a PDA representing an individual story and sits at the\nintersection between the writer key and the NFT. In SQL terms you can think\nof it as a row containing a writer_id and an nft_id and a pointer to where\nthe actual data is located off chain. Because it represents a many-to-many\nrelationship, a a WriterHead needs to be initialized for every single story\n(meaning if you\u2019re operating two writers and attaching them to 5 NFTs each\nyou\u2019ll need a total of 10 WriterHead).  A WriterHead costs ~0.00141288 in\nPDA rent exemption cost (about 14 cents when Sol~$100)."),(0,a.kt)("p",null,"There\u2019s a 10% fee on top of this cost (~1.4 cents when Sol ~$100) that lets us\ncontinue to maintain things like the CDN and also buy the huge number of lattes\nand bobas that it takes to write all of this infrastructure code."),(0,a.kt)("p",null,"In order to distribute this cost more fairly, a WriterHead can be initialized\nby either the writer program itself ",(0,a.kt)("em",{parentName:"p"},"or")," by the NFT creator (technically whomever\nholds update privileges). Meaning that\ndevelopers can offer functionality to NFTs and either handle collecting payment\nthemselves or ask the NFT creator to initialize the WriterHeads themselves (or both)."),(0,a.kt)("p",null,"NOTE: For efficiency\u2019s purpose the appendItemCreate function will automatically\ncreate a writer head. The appendItem function will not\u2013this is to avoid writer\nprograms accidentally incurring a ton of hidden cost without visibility to the developer."),(0,a.kt)("h2",{id:"appending-an-item"},"Appending an Item"),(0,a.kt)("p",null,"If you\u2019ve uploaded your data yourself, the only cost for appending an item is\nthe Solana transaction fee."),(0,a.kt)("p",null,"If you\u2019re using the built in bundlr integration, check out (",(0,a.kt)("a",{parentName:"p",href:"https://arweavefees.com/"},"https://arweavefees.com/"),").\nNote that for small uploads the ARWeave transaction reward dominates the cost,\nand by using bundlr we actually only pay a fraction of that appropriate for our\ndata size. A better way of getting pricing estimates is to initialize the API\nand play with the checkPrice function."))}f.isMDXComponent=!0}}]);