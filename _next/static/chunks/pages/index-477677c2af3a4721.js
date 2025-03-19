(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3332],{7554:(e,n,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(1104)}])},1104:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>ng});var t=a(2540),r=a(3696),i=a(2831),s=a(904),o=a(3711),l=a(9113),d=a(8347),c=a(9209),m=a(1367),p=a(584),u=a(2569),h=a(145);function x(e){let{errorOf:n}=e;return(0,t.jsxs)(u.E,{children:[(0,t.jsxs)(u.E,{span:!0,c:"red",children:["Error loading component ",n," data."," "]}),"If you see this message please let us know by"," ",(0,t.jsx)(h.M,{href:"https://github.com/mantinedev/mantine/issues/new?assignees=&labels=&template=docs_report.yml",target:"_blank",children:"opening an issue on GitHub"}),"."]})}var g=a(1750),j=a(2236),b=a.n(j);function f(e){let{className:n,...a}=e;return(0,t.jsx)(u.E,{component:"span",className:(0,g.A)(b().code,n),...a})}function v(e){let{component:n,query:a,data:r}=e;if(!r[n])return(0,t.jsx)(x,{errorOf:"props"});let i=Object.keys(r[n].props).filter(e=>r[n].props[e].name.toLowerCase().includes(a.toLowerCase().trim())).map(e=>{let i=r[n].props[e];return(0,t.jsxs)(m.X.Tr,{children:[(0,t.jsxs)(m.X.Td,{style:{whiteSpace:"nowrap"},children:[(0,t.jsx)(p.f,{highlight:a,component:"span",fz:"sm",children:i.name}),i.required&&(0,t.jsxs)(u.E,{component:"sup",c:"red",fz:"xs",children:[" ","*"]})]}),(0,t.jsx)(m.X.Td,{children:(0,t.jsx)(f,{children:i.type.name})}),(0,t.jsx)(m.X.Td,{children:(0,t.jsx)(u.E,{fz:"sm",dangerouslySetInnerHTML:{__html:i.description}})})]},e)});return 0===i.length?(0,t.jsx)(u.E,{c:"dimmed",mb:"xl",fz:"sm",children:"Nothing found"}):(0,t.jsx)(m.X.ScrollContainer,{minWidth:800,children:(0,t.jsxs)(m.X,{layout:"fixed",children:[(0,t.jsx)(m.X.Thead,{children:(0,t.jsxs)(m.X.Tr,{children:[(0,t.jsx)(m.X.Th,{w:210,children:"Name"}),(0,t.jsx)(m.X.Th,{w:310,children:"Type"}),(0,t.jsx)(m.X.Th,{children:"Description"})]})}),(0,t.jsx)(m.X.Tbody,{children:i})]})})}var y=a(7763),_=a(763),q=a(851);function w(e){let{component:n,componentPrefix:a}=e;return a?a===n?n:"".concat(a,".").concat(n.replace(a,"")):n}var N=a(3261),C=a.n(N);function k(e){let{components:n,componentPrefix:a,data:i}=e,[s,o]=(0,r.useState)(""),l=n.map(e=>(0,t.jsxs)("div",{className:C().section,children:[(0,t.jsxs)(_.h,{order:2,className:C().title,children:[w({component:e,componentPrefix:a})," component props"]}),(0,t.jsx)(v,{component:e,query:s,data:i})]},e));return(0,t.jsxs)("div",{className:C().root,children:[(0,t.jsx)(q.k,{className:C().search,value:s,onChange:e=>o(e.currentTarget.value),leftSection:(0,t.jsx)(y.A,{className:C().searchIcon}),placeholder:"Search props",radius:"md",size:"lg",autoFocus:!0}),l]})}function T(e){var n,a,r;let{data:i,fixedLayout:s=!0,...o}=e,l=null===(n=i.modifiers)||void 0===n?void 0:n.some(e=>!!e.condition),d=null===(a=i.modifiers)||void 0===a?void 0:a.some(e=>!!e.value),c=(null===(r=i.modifiers)||void 0===r?void 0:r.map((e,n)=>(0,t.jsxs)(m.X.Tr,{children:[(0,t.jsx)(m.X.Td,{children:Array.isArray(e.selector)?e.selector.join(", "):e.selector}),(0,t.jsx)(m.X.Td,{children:(0,t.jsx)(f,{children:e.modifier})}),l&&(0,t.jsx)(m.X.Td,{children:(0,t.jsx)(u.E,{fz:"sm",children:e.condition||"–"})}),d&&(0,t.jsx)(m.X.Td,{children:(0,t.jsx)(u.E,{fz:"sm",children:e.value||"–"})})]},n)))||[];return(0,t.jsx)(m.X.ScrollContainer,{minWidth:600,children:(0,t.jsxs)(m.X,{layout:s?"fixed":void 0,...o,children:[(0,t.jsx)(m.X.Thead,{children:(0,t.jsxs)(m.X.Tr,{children:[(0,t.jsx)(m.X.Th,{w:s?210:void 0,children:"Selector"}),(0,t.jsx)(m.X.Th,{w:s?310:void 0,children:"Attribute"}),l&&(0,t.jsx)(m.X.Th,{children:"Condition"}),d&&(0,t.jsx)(m.X.Th,{children:"Value"})]})}),(0,t.jsx)(m.X.Tbody,{children:c})]})})}function E(e){let{data:n,component:a,fixedLayout:r=!0,...i}=e,s=Object.keys(n.selectors).map(e=>(0,t.jsxs)(m.X.Tr,{children:[(0,t.jsx)(m.X.Td,{children:e}),(0,t.jsx)(m.X.Td,{children:(0,t.jsxs)(f,{children:[".mantine-",a,"-",e]})}),(0,t.jsx)(m.X.Td,{children:(0,t.jsx)(u.E,{fz:"sm",children:n.selectors[e]})})]},e));return(0,t.jsx)(m.X.ScrollContainer,{minWidth:600,children:(0,t.jsxs)(m.X,{layout:r?"fixed":void 0,...i,children:[(0,t.jsx)(m.X.Thead,{children:(0,t.jsxs)(m.X.Tr,{children:[(0,t.jsx)(m.X.Th,{w:r?210:void 0,children:"Selector"}),(0,t.jsx)(m.X.Th,{w:r?310:void 0,children:"Static selector"}),(0,t.jsx)(m.X.Th,{children:"Description"})]})}),(0,t.jsx)(m.X.Tbody,{children:s})]})})}function B(e){let{data:n,fixedLayout:a=!0,...r}=e,i=Object.keys(n.vars).reduce((e,a)=>(Object.keys(n.vars[a]).forEach((r,i)=>{e.push((0,t.jsxs)(m.X.Tr,{children:[0===i&&(0,t.jsx)(m.X.Td,{rowSpan:Object.keys(n.vars[a]).length,children:a}),(0,t.jsx)(m.X.Td,{children:(0,t.jsx)(f,{children:r})}),(0,t.jsx)(m.X.Td,{children:(0,t.jsx)(u.E,{fz:"sm",children:n.vars[a][r]})})]},"".concat(a,"-").concat(r)))}),e),[]);return(0,t.jsx)(m.X.ScrollContainer,{minWidth:600,children:(0,t.jsxs)(m.X,{layout:a?"fixed":void 0,...r,children:[(0,t.jsx)(m.X.Thead,{children:(0,t.jsxs)(m.X.Tr,{children:[(0,t.jsx)(m.X.Th,{w:a?210:void 0,children:"Selector"}),(0,t.jsx)(m.X.Th,{w:a?310:void 0,children:"Variable"}),(0,t.jsx)(m.X.Th,{children:"Description"})]})}),(0,t.jsx)(m.X.Tbody,{children:i})]})})}var z=a(345),S=a.n(z);function M(e){let{component:n,componentPrefix:a,data:r}=e;if(!r)return(0,t.jsx)(x,{errorOf:"Styles API"});let i=w({component:n,componentPrefix:a});return(0,t.jsxs)("div",{className:S().root,children:[(0,t.jsxs)("div",{className:S().section,children:[(0,t.jsxs)(_.h,{order:2,className:S().title,children:[i," selectors"]}),(0,t.jsx)(E,{component:n,data:r})]}),Object.keys(r.vars).length>0&&(0,t.jsxs)("div",{className:S().section,children:[(0,t.jsxs)(_.h,{order:2,className:S().title,children:[i," CSS variables"]}),(0,t.jsx)(B,{data:r})]}),Array.isArray(r.modifiers)&&r.modifiers.length>0&&(0,t.jsxs)("div",{className:S().section,children:[(0,t.jsxs)(_.h,{order:2,className:S().title,children:[i," data attributes"]}),(0,t.jsx)(T,{data:r})]})]})}var A=a(7089),X=a(8493),H=a(6178),I=a(2437),L=a(9983),D=a(9880),P=a(8026),F=a(6400),V=a(9264),O=a.n(V);function W(e){let{className:n,...a}=e,r=(0,D.xd)();return(0,t.jsx)(P.C,{className:(0,g.A)(O().root,n),icon:(0,t.jsx)(L.A,{className:O().icon}),radius:"md",__vars:{"--docs-bq-code-bg-light":(0,F.B)(r.colors.blue[6],.2),"--docs-bq-code-bg-dark":(0,F.B)(r.colors.blue[4],.2)},...a})}var G=a(5188),R=a.n(G);function U(e){let{id:n,children:a,order:r=2,...i}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{id:n,"data-heading":a,"data-order":r,className:R().titleOffset}),(0,t.jsx)(_.h,{order:r,className:R().title,...i,children:(0,t.jsx)("a",{className:(0,g.A)(R().titleLink,"mantine-focus-auto"),href:"#".concat(n),children:a})})]})}let J=e=>n=>(0,t.jsx)(U,{order:e,...n});function Y(e){let{children:n}=e;return(0,t.jsx)(I.q,{className:R().code,code:n.props.children,language:function(e){let n=(e.props.className||"").match(RegExp("language-(?<lang>.*)"));return n&&n.groups&&n.groups.lang?n.groups.lang:"tsx"}(n)})}function $(e){return(0,t.jsx)("p",{className:R().paragraph,...e})}function Z(e){return(0,t.jsx)("ul",{className:R().ul,...e})}function K(e){return(0,t.jsx)("li",{className:R().li,...e})}function Q(e){let{href:n,...a}=e;return(0,t.jsx)(h.M,{className:R().link,href:n,...a})}function ee(e){return{img:X._,ul:Z,li:K,p:$,a:Q,code:A.C,blockquote:W,h1:J(1),h2:J(2),h3:J(3),h4:J(4),h5:J(5),h6:J(6),pre:Y,Demo:H.C,...e}}function en(e){let{components:n,data:a,componentPrefix:r}=e,i=n.map(e=>(0,t.jsx)("div",{className:S().group,children:(0,t.jsx)(M,{component:e,componentPrefix:r,data:a[e]})},e));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:S().groupsHeader,children:[(0,t.jsx)(U,{style:{marginTop:0},children:"Styles API"}),(0,t.jsxs)($,{style:{marginTop:0},children:[(0,t.jsx)(A.C,{children:n[0]})," component supports"," ",(0,t.jsx)(Q,{href:"https://mantine.dev/styles/styles-api",target:"_blank",children:"Styles API"}),". With Styles API, you can customize styles of any inner element. Follow"," ",(0,t.jsx)(Q,{href:"https://mantine.dev/styles/styles-api",target:"_blank",children:"the documentation"})," ","to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles."]})]}),i]})}var ea=a(2961),et=a(8570),er=a(8447),ei=a(9481),es=a(8112),eo=a.n(es);function el(e){let{withTabs:n}=e,a=(0,i.useRouter)(),r=(0,ei.f)({selector:"#mdx [data-heading]",getDepth:e=>Number(e.getAttribute("data-order")),getValue:e=>e.getAttribute("data-heading")||""}),s=r.data.filter(e=>e.depth>1);if(0===s.length)return null;let o=s.map((e,n)=>(0,t.jsx)(u.E,{component:"a",className:eo().link,mod:{active:r.active===n},href:"#".concat(e.id),__vars:{"--toc-link-offset":"".concat(e.depth-1)},onClick:n=>{n.preventDefault(),a.replace("".concat(a.pathname,"#").concat(e.id))},children:e.value},e.id));return(0,t.jsx)(ea.a,{component:"nav",mod:{"with-tabs":n},className:eo().wrapper,children:(0,t.jsx)("div",{className:eo().inner,children:(0,t.jsxs)("div",{children:[(0,t.jsx)(u.E,{className:eo().title,children:"Table of contents"}),(0,t.jsxs)(et.F.Autosize,{mah:"calc(100vh - 172px)",type:"never",children:[(0,t.jsx)("div",{className:eo().items,children:o}),(0,t.jsx)(er.$,{h:"xl"})]})]})})})}var ed=a(384),ec=a.n(ed);function em(e){let{children:n,docgen:a,componentsProps:m,componentsStyles:p,stylesApiData:u,componentPrefix:h}=e,x=(0,i.useRouter)(),[g,j]=(0,r.useState)("docs"),b=Array.isArray(m),f=Array.isArray(p);return((0,r.useEffect)(()=>{j(window.location.search.replace("?t=","")||"docs")},[]),b||f)?(0,t.jsxs)(d.t,{variant:"pills",value:g,classNames:{root:ec().root,list:ec().tabsList,tab:ec().tab},keepMounted:!1,radius:"md",onChange:e=>{x.replace("docs"===e?x.pathname:"".concat(x.pathname,"?t=").concat(e)),j(e)},children:[(0,t.jsx)("div",{className:ec().tabsWrapper,children:(0,t.jsx)(c.m,{size:"lg",children:(0,t.jsxs)(d.t.List,{children:[(0,t.jsx)(d.t.Tab,{value:"docs",children:(0,t.jsxs)("div",{className:ec().tabInner,children:[(0,t.jsx)(s.A,{size:20,stroke:1.5,className:ec().tabIcon}),"Documentation"]})}),b&&(0,t.jsx)(d.t.Tab,{value:"props",children:(0,t.jsxs)("div",{className:ec().tabInner,children:[(0,t.jsx)(o.A,{size:20,stroke:1.5,className:ec().tabIcon}),"Props"]})}),f&&(0,t.jsx)(d.t.Tab,{value:"styles-api",children:(0,t.jsxs)("div",{className:ec().tabInner,children:[(0,t.jsx)(l.A,{size:20,stroke:1.5,className:ec().tabIcon}),"Styles API"]})})]})})}),(0,t.jsxs)(c.m,{size:"lg",children:[(0,t.jsx)(d.t.Panel,{value:"docs",children:(0,t.jsxs)("div",{className:ec().tabContent,"data-main":!0,children:[(0,t.jsx)("div",{className:ec().main,id:"mdx",children:n}),(0,t.jsx)("div",{className:ec().tableOfContents,children:(0,t.jsx)(el,{withTabs:!0})})]})}),(0,t.jsx)(d.t.Panel,{value:"props",children:(0,t.jsx)("div",{className:ec().tabContent,"data-secondary":!0,children:(0,t.jsx)(k,{components:m,data:a})})}),(0,t.jsx)(d.t.Panel,{value:"styles-api",children:(0,t.jsx)("div",{className:ec().tabContent,"data-secondary":!0,children:u&&(0,t.jsx)(en,{data:u,components:p,componentPrefix:h})})})]})]}):null}var ep=a(6660),eu=a(3177),eh=a(1919),ex=a(5893),eg=a(1735),ej=a(6517),eb=a(2868),ef=a(3580),ev=a(2818),ey=a(4081),e_=a(9179),eq=a.n(e_);function ew(e){let{label:n,icon:a,children:r,link:i}=e,s=i?(0,t.jsxs)("a",{href:i,target:"_blank",className:eq().body,rel:"noreferrer",children:[(0,t.jsx)("div",{className:eq().icon,children:a}),(0,t.jsx)("div",{className:eq().content,children:r})]}):(0,t.jsxs)("div",{className:eq().body,children:[(0,t.jsx)("div",{className:eq().icon,children:a}),(0,t.jsx)("div",{className:eq().content,children:r})]});return(0,t.jsxs)("div",{className:eq().root,children:[(0,t.jsx)("div",{className:eq().label,children:n}),s]})}var eN=a(202),eC=a.n(eN);function ek(e){let{data:n}=e;return(0,t.jsx)("header",{className:eC().root,children:(0,t.jsxs)(c.m,{size:"lg",children:[(0,t.jsx)(_.h,{className:eC().title,children:n.packageName}),(0,t.jsx)(u.E,{className:eC().description,children:n.packageDescription}),(0,t.jsxs)("div",{className:eC().links,children:[(0,t.jsx)(ew,{label:"Version",icon:(0,t.jsx)(ep.A,{size:18,stroke:1.5}),children:(0,t.jsxs)(eb.E,{children:["v",ey.rE]})}),(0,t.jsx)(ew,{label:"Changelog",icon:(0,t.jsx)(ef.N,{size:16}),link:n.repositoryUrl+"/releases/tag/"+ey.rE,children:"View the Changelog"}),(0,t.jsx)(ew,{label:"Source",icon:(0,t.jsx)(ef.N,{size:16}),link:n.repositoryUrl,children:"View source code"}),(0,t.jsx)(ew,{label:"Package",icon:(0,t.jsx)(ev.X,{size:16}),link:"https://npmjs.com/package/".concat(n.packageName),children:n.packageName}),(0,t.jsx)(ew,{label:"See More",icon:(0,t.jsx)(eu.A,{size:16}),link:"https://mantine-extensions.vercel.app/",children:"Mantine Extensions"}),(0,t.jsx)(ew,{label:"Docs",icon:(0,t.jsx)(eh.A,{size:18,stroke:1.5}),link:n.mdxFileUrl,children:"Edit this page"}),(0,t.jsxs)(ew,{label:"Built by",icon:(0,t.jsx)(ex.A,{size:18,stroke:1.5}),link:"https://github.com/".concat(n.author.githubUsername),children:[n.author.name," ",(0,t.jsxs)(u.E,{span:!0,c:"dimmed",inherit:!0,children:["(@",n.author.githubUsername,")"]})]}),(0,t.jsx)(ew,{label:"License",icon:(0,t.jsx)(eg.A,{size:18,stroke:1.5}),link:n.licenseUrl,children:"MIT"}),(0,t.jsx)(ew,{label:"Support",icon:(0,t.jsx)(ej.A,{color:"red",size:18,stroke:1.5}),link:"https://github.com/sponsors/gfazioli?o=esb",children:"Become a sponsor"})]})]})})}var eT=a(2252),eE=a(2058),eB=a(8667),ez=a(8851),eS=a(5785),eM=a(1734),eA=a(2040),eX=a(5219),eH=a(1533),eI=a(6731);let eL={packageName:"@gfazioli/mantine-marquee",packageDescription:"A Mantine component that allows you to create a marquee effect with a list of elements.",mdxFileUrl:"https://github.com/gfazioli/mantine-marquee/blob/master/docs/docs.mdx",repositoryUrl:"https://github.com/gfazioli/mantine-marquee",licenseUrl:"https://github.com/gfazioli/mantine-marquee/blob/master/LICENSE",author:{name:"Giovambattista Fazioli",githubUsername:"gfazioli"}};var eD=a(708),eP=a.n(eD);function eF(e){let{children:n}=e,{toggleColorScheme:a}=(0,eT.C)();(0,eM.O)([["mod + J",a]]);let r=eL.packageName.replace("@gfazioli/","").replaceAll("-"," ").split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");return(0,t.jsxs)(eE.G,{header:{height:60},children:[(0,t.jsx)(eE.G.Header,{className:(0,g.A)(eB.A.classNames.zeroRight,eP().header),children:(0,t.jsxs)(c.m,{size:"lg",px:"md",className:eP().inner,children:[(0,t.jsxs)(ez.Y,{children:[(0,t.jsx)("a",{href:"https://mantine.dev/",target:"_blank",className:(0,g.A)("mantine-focus-auto",eP().logo),rel:"noreferrer",children:(0,t.jsx)(eH.m,{size:30,type:"mark"})}),(0,t.jsx)(_.h,{order:2,children:r})]}),(0,t.jsxs)(ez.Y,{gap:10,children:[(0,t.jsx)("iframe",{src:"https://github.com/sponsors/gfazioli/button",title:"Sponsor gfazioli",height:"34",width:"114",className:eP().sponsor}),(0,t.jsx)(eS.M,{visibleFrom:"sm",size:36,radius:8,component:"a",href:"https://undolog.com/",target:"_blank",rel:"noreferrer","aria-label":"Undolog",title:"Undolog",variant:"subtle",children:(0,t.jsx)("img",{width:36,src:"https://substackcdn.com/image/fetch/f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5d483192-7bf9-4d61-aaf7-ced1a3f4adf8_1024x1024.png",alt:"Undolog"})}),(0,t.jsx)(eA.c,{visibleFrom:"sm",githubLink:eL.repositoryUrl,withDirectionToggle:!1,withSearch:!1,withSupport:!1,discordLink:eI.m.discordLink})]}),(0,t.jsx)(ez.Y,{hiddenFrom:"sm",children:(0,t.jsx)(eX.K,{})})]})}),(0,t.jsx)(eE.G.Main,{children:(0,t.jsx)("div",{className:eP().main,children:n})})]})}let eV=JSON.parse('{"Marquee":{"props":{"children":{"description":"Content","name":"children","required":false,"type":{"name":"React.ReactNode"}},"duration":{"description":"Animation speed/duration in seconds. Minimum value is 0.1.","name":"duration","required":false,"type":{"name":"number"}},"fadeEdges":{"description":"Add fade edges","name":"fadeEdges","required":false,"type":{"name":"boolean"}},"fadeEdgesColor":{"description":"Fade edges color","name":"fadeEdgesColor","required":false,"type":{"name":"MantineColor"}},"fadeEdgesSize":{"description":"Fade edges size","name":"fadeEdgesSize","required":false,"type":{"name":"MantineSize | (string & {})"}},"gap":{"description":"Gap between marquee items","name":"gap","required":false,"type":{"name":"MantineSize | (string & {})"}},"pauseOnHover":{"description":"Pause animation on hover","name":"pauseOnHover","required":false,"type":{"name":"boolean"}},"repeat":{"description":"Number of times to clone the children. Minimum value is 2.","name":"repeat","required":false,"type":{"name":"number"}},"reverse":{"description":"Reverse animation direction","name":"reverse","required":false,"type":{"name":"boolean"}},"vertical":{"description":"Vertical layout","name":"vertical","required":false,"type":{"name":"boolean"}}}}}');var eO=a(7998),eW=a(4151),eG=a(5369),eR=a.n(eG);function eU(e){let{yarnScript:n,npmScript:a}=e,[r,i]=(0,eO.M)({key:"script-tab-value",defaultValue:"yarn"});return(0,t.jsxs)(d.t,{value:r,onChange:e=>i(e),variant:"pills",classNames:eR(),children:[(0,t.jsxs)(d.t.List,{children:[(0,t.jsx)(d.t.Tab,{value:"yarn",children:(0,t.jsxs)(ez.Y,{gap:5,children:[(0,t.jsx)(eW.S,{className:eR().icon,size:16}),(0,t.jsx)("span",{children:"yarn"})]})}),(0,t.jsx)(d.t.Tab,{value:"npm",children:(0,t.jsxs)(ez.Y,{gap:5,children:[(0,t.jsx)(ev.X,{className:eR().icon,size:16}),(0,t.jsx)("span",{children:"npm"})]})})]}),(0,t.jsx)(d.t.Panel,{value:"yarn",children:(0,t.jsx)(I.q,{className:eR().code,code:n,language:"bash","data-without-radius":!0})}),(0,t.jsx)(d.t.Panel,{value:"npm",children:(0,t.jsx)(I.q,{className:eR().code,code:a,language:"bash"})})]})}function eJ(e){let{packages:n,dev:a}=e;return(0,t.jsx)(eU,{yarnScript:"yarn add ".concat(a?"--dev ":"").concat(n),npmScript:"npm install ".concat(a?"--save-dev ":"").concat(n)})}var eY=a(1930),e$=a(2794),eZ=a(7110),eK=a(9906),eQ=a(9158),e0=a(46),e1={root:"me_7dc7d3cd",marqueeContainer:"me_931ed4ea",marqueeContent:"me_8bbdc322",marquee:"me_18e82957",marqueeContentVertical:"me_ddf84cb8","marquee-vertical":"me_cdef532c",marqueeFadeEdgeLeft:"me_d77b8cf7",marqueeFadeEdgeRight:"me_184c732c",marqueeFadeEdgeTop:"me_f66f7665",marqueeFadeEdgeBottom:"me_d64f0b1b"};let e2={},e3=(0,eY.V)((e,{reverse:n,repeat:a,vertical:t,pauseOnHover:r,duration:i,fadeEdgesColor:s,fadeEdgesSize:o,gap:l})=>({root:{"--marquee-animation-direction":n?"reverse":"normal","--marquee-direction":t?"column":"row","--marquee-duration":`${i||20}s`,"--marquee-gap":(0,e$.YC)(l,"marquee-gap"),"--marquee-fade-edge-size":(0,e$.YC)(o,"marquee-fade-edge-size"),"--marquee-fade-edge-color":s?(0,eZ.r)(s,e):void 0}})),e7=(0,eK.P9)((e,n)=>{let a=(0,eQ.Y)("Marquee",e2,e),[t,i]=r.useState(!1),{reverse:s=!1,repeat:o=2,vertical:l=!1,pauseOnHover:d,duration:c=20,fadeEdges:m=!1,fadeEdgesSize:p="xs",gap:u="xl",fadeEdgesColor:h="white",classNames:x,style:g,styles:j,unstyled:b,vars:f,children:v,className:y,..._}=a,q=(0,e0.I)({name:"Marquee",props:a,classes:e1,className:y,style:{...g,"--marquee-play-state":t&&d?"paused":"running"},classNames:x,styles:j,unstyled:b,vars:f,varsResolver:e3}),w=(0,r.useMemo)(()=>Array.from({length:o<2?2:o}).map((e,n)=>r.createElement("div",{key:`marquee-item-${o}-${u}-${c}-${n}`,className:`${e1.marqueeContent} ${l?e1.marqueeContentVertical:""}`},v)),[o,l,v]),N=(0,r.useMemo)(()=>m?r.createElement(r.Fragment,null,l?r.createElement(r.Fragment,null,r.createElement("div",{className:e1.marqueeFadeEdgeBottom}),r.createElement("div",{className:e1.marqueeFadeEdgeTop})):r.createElement(r.Fragment,null,r.createElement("div",{className:e1.marqueeFadeEdgeRight}),r.createElement("div",{className:e1.marqueeFadeEdgeLeft}))):null,[l,m]);return r.createElement(ea.a,{...q("root"),..._},r.createElement(ea.a,{ref:n,className:e1.marqueeContainer,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)},w),N)});e7.classes=e1,e7.displayName="Marquee";let e4={type:"configurator",component:function(e){function n(e){let{children:n,...a}=e;return(0,t.jsx)(ea.a,{...a,p:"md",w:"200px",c:"white",style:{borderRadius:"8px"},children:n})}return(0,t.jsxs)(e7,{...e,w:544,h:58,children:[(0,t.jsx)(n,{bg:"red",children:"Hello World #1"}),(0,t.jsx)(n,{bg:"cyan",children:"Hope you like it #2"}),(0,t.jsx)(n,{bg:"blue",children:"Have a nice day #3"}),(0,t.jsx)(n,{bg:"lime",children:"Goodbye #4"}),(0,t.jsx)(n,{bg:"orange",children:"Hello World #5"}),(0,t.jsx)(n,{bg:"dark",children:"Hope you like it #6"}),(0,t.jsx)(n,{bg:"green",children:"Have a nice day #7"})]})},code:'\nimport { Marquee } from \'@gfazioli/mantine-marquee\';\n\nfunction Demo() {\n  function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {\n    return (\n      <Box {...props} p="md" w="200px" c="white" style={{ borderRadius: \'8px\' }}>\n        {children}\n      </Box>\n    );\n  }\n\n  return (\n    <Marquee w={544} h={300}{{props}}>\n      <BoxComponent bg="red">Hello World #1</BoxComponent>\n      <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>\n      <BoxComponent bg="blue">Have a nice day #3</BoxComponent>\n      <BoxComponent bg="lime">Goodbye #4</BoxComponent>\n    </Marquee>\n  );\n}\n',controls:[{prop:"reverse",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"vertical",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"fadeEdges",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"pauseOnHover",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"repeat",type:"number",initialValue:4,libraryValue:4,min:2,max:20},{prop:"duration",type:"number",initialValue:10,libraryValue:10,step:.1,min:.1,max:60},{type:"size",prop:"gap",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"fadeEdgesSize",initialValue:"sm",libraryValue:"sm"},{type:"color",prop:"fadeEdgesColor",initialValue:"",libraryValue:""}]};var e8=a(3314),e6=a(716),e5=a(7011),e9=a(8360),ne=a(3531),nn=a(6196),na=a(4946),nt=a(4985);let nr={type:"code",component:function(e){let n=[(0,t.jsx)(e8.A,{style:{width:"70%",height:"70%"}}),(0,t.jsx)(e6.A,{style:{width:"70%",height:"70%"}}),(0,t.jsx)(e5.A,{style:{width:"70%",height:"70%"}}),(0,t.jsx)(e9.A,{style:{width:"70%",height:"70%"}}),(0,t.jsx)(ne.A,{style:{width:"70%",height:"70%"}}),(0,t.jsx)(nn.A,{style:{width:"70%",height:"70%"}}),(0,t.jsx)(na.A,{style:{width:"70%",height:"70%"}})];function a(e){let{children:n,...a}=e;return(0,t.jsx)(nt.L,{...a,variant:"transparent",size:"120px",children:n})}return(0,t.jsx)(e7,{w:792,pauseOnHover:!0,fadeEdges:!0,children:n.map((e,n)=>(0,t.jsx)(a,{children:e},n))})},code:"\nimport { Marquee } from '@gfazioli/mantine-marquee';\nimport {\n  IconBrand4chan,\n  IconBrandAmazon,\n  IconBrandBing,\n  IconBrandGithub,\n  IconBrandMantine,\n  IconBrandWhatsapp,\n  IconBrandWordpress,\n} from \"@tabler/icons-react\";\n\nfunction Demo() {\n  const iconsBrand = [\n    <IconBrand4chan style={{ width: '70%', height: '70%' }} />,\n    <IconBrandWhatsapp style={{ width: '70%', height: '70%' }} />,\n    <IconBrandWordpress style={{ width: '70%', height: '70%' }} />,\n    <IconBrandBing style={{ width: '70%', height: '70%' }} />,\n    <IconBrandGithub style={{ width: '70%', height: '70%' }} />,\n    <IconBrandMantine style={{ width: '70%', height: '70%' }} />,\n    <IconBrandAmazon style={{ width: '70%', height: '70%' }} />,\n  ];\n\n  function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {\n    return (\n      <ThemeIcon {...props} variant=\"transparent\" size={'120px'}>\n        {children}\n      </ThemeIcon>\n    );\n  }\n\n  return (\n    <Marquee w={792} pauseOnHover fadeEdges>\n      {iconsBrand.map((icon, index) => (\n        <BoxComponent key={index}>{icon}</BoxComponent>\n      ))}\n    </Marquee>\n  );\n}\n",defaultExpanded:!1};var ni=a(8050),ns=a(1090),no=a(6174),nl=a(3488);let nd={type:"code",component:function(){function e(e){let{children:n,avatar:a,name:r,rating:i,...s}=e;return(0,t.jsxs)(ni.Z,{w:200,shadow:"sm",padding:"lg",radius:"md",withBorder:!0,children:[(0,t.jsx)(ni.Z.Section,{p:"md",children:(0,t.jsxs)(ez.Y,{children:[(0,t.jsx)(ns.e,{size:"md",radius:"xl",src:a}),(0,t.jsx)(_.h,{order:4,children:r})]})}),(0,t.jsxs)(no.B,{children:[(0,t.jsx)(u.E,{size:"sm",c:"dimmed",children:n}),(0,t.jsx)(ez.Y,{justify:"end",children:(0,t.jsx)(nl.G,{value:i})})]})]})}return(0,t.jsx)(e7,{w:792,pauseOnHover:!0,fadeEdges:!0,children:[{name:"John Doe",avatar:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",rating:4},{name:"Jane Doe",avatar:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",rating:4},{name:"Jessica Doe",avatar:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",rating:2},{name:"Jack Doe",avatar:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",rating:5},{name:"Jill Doe",avatar:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",rating:3}].map((n,a)=>{let{text:r,...i}=n;return(0,t.jsx)(e,{...i,children:r},a)})})},code:[{fileName:"Demo.tsx",code:'\nimport { Marquee } from \'@gfazioli/mantine-marquee\';\nimport { Avatar, Card, Group, Rating, Stack, Text, Title } from \'@mantine/core\';\nimport { ReactNode } from \'react\';\nimport { testimonials } from \'./testimonials\';\n\nfunction Demo() {\n  function BoxComponent({\n    children,\n    avatar,\n    name,\n    rating,\n    ...props\n  }: {\n    children: ReactNode;\n    avatar: string;\n    name: string;\n    [key: string]: any;\n  }) {\n    return (\n      <Card w={200} shadow="sm" padding="lg" radius="md" withBorder>\n        <Card.Section p={\'md\'}>\n          <Group>\n            <Avatar size="md" radius="xl" src={avatar} />\n            <Title order={4}>{name}</Title>\n          </Group>\n        </Card.Section>\n        <Stack>\n          <Text size="sm" c="dimmed">\n            {children}\n          </Text>\n          <Group justify="end">\n            <Rating value={rating} />\n          </Group>\n        </Stack>\n      </Card>\n    );\n  }\n\n  return (\n    <Marquee w={792} pauseOnHover fadeEdges>\n      {testimonials.map(({ text, ...testimonial }, index) => (\n        <BoxComponent key={index} {...testimonial}>\n          {text}\n        </BoxComponent>\n      ))}\n    </Marquee>\n  );\n}\n'},{fileName:"testimonials.ts",code:'\nexport const testimonials = [\n  {\n    name: "John Doe",\n    avatar:\n      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",\n    text:\n      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +\n      "tempor incididunt ut labore et dolore magna aliqua.",\n    rating: 4,\n  },\n  {\n    name: "Jane Doe",\n    avatar:\n      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",\n    text:\n      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +\n      "tempor incididunt ut labore et dolore magna aliqua.",\n    rating: 4,\n  },\n  {\n    name: "Jessica Doe",\n    avatar:\n      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",\n    text:\n      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +\n      "tempor incididunt ut labore et dolore magna aliqua.",\n    rating: 2,\n  },\n  {\n    name: "Jack Doe",\n    avatar:\n      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",\n    text:\n      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +\n      "tempor incididunt ut labore et dolore magna aliqua.",\n    rating: 5,\n  },\n  {\n    name: "Jill Doe",\n    avatar:\n      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",\n    text:\n      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +\n      "tempor incididunt ut labore et dolore magna aliqua.",\n    rating: 3,\n  },\n];\n'}],centered:!0,defaultExpanded:!1},nc={type:"code",component:function(){function e(e){let{children:n,...a}=e;return(0,t.jsx)(ea.a,{...a,p:"md",w:"200px",c:"white",style:{borderRadius:"8px"},children:n})}return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e7,{w:790,mb:16,fadeEdges:!0,children:[(0,t.jsx)(e,{bg:"red",children:"Hello World #1"}),(0,t.jsx)(e,{bg:"cyan",children:"Hope you like it #2"}),(0,t.jsx)(e,{bg:"blue",children:"Have a nice day #3"}),(0,t.jsx)(e,{bg:"lime",children:"Goodbye #4"})]}),(0,t.jsxs)(e7,{reverse:!0,w:790,fadeEdges:!0,children:[(0,t.jsx)(e,{bg:"red",children:"Hello World #1"}),(0,t.jsx)(e,{bg:"cyan",children:"Hope you like it #2"}),(0,t.jsx)(e,{bg:"blue",children:"Have a nice day #3"}),(0,t.jsx)(e,{bg:"lime",children:"Goodbye #4"})]})]})},code:'\nimport { Marquee } from \'@gfazioli/mantine-marquee\';\n\nfunction Demo() {\n  function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {\n    return (\n      <Box {...props} p="md" w="200px" c="white" style={{ borderRadius: \'8px\' }}>\n        {children}\n      </Box>\n    );\n  }\n\n  return (\n    <>\n      <Marquee w={800} mb={16} fadeEdges>\n        <BoxComponent bg="red">Hello World #1</BoxComponent>\n        <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>\n        <BoxComponent bg="blue">Have a nice day #3</BoxComponent>\n        <BoxComponent bg="lime">Goodbye #4</BoxComponent>\n      </Marquee>\n      <Marquee reverse w={800} fadeEdges>\n        <BoxComponent bg="red">Hello World #1</BoxComponent>\n        <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>\n        <BoxComponent bg="blue">Have a nice day #3</BoxComponent>\n        <BoxComponent bg="lime">Goodbye #4</BoxComponent>\n      </Marquee>\n    </>\n  );\n}\n',defaultExpanded:!1};var nm=a(2486);let np={type:"code",component:function(e){function n(e){let{children:n,...a}=e;return(0,t.jsx)(ea.a,{...a,p:"md",w:"200px",c:"white",style:{borderRadius:"8px"},children:n})}return(0,t.jsxs)(nm.s,{w:500,children:[(0,t.jsxs)(e7,{h:300,fadeEdges:!0,vertical:!0,children:[(0,t.jsx)(n,{bg:"red",children:"Hello World #1"}),(0,t.jsx)(n,{bg:"cyan",children:"Hope you like it #2"}),(0,t.jsx)(n,{bg:"blue",children:"Have a nice day #3"}),(0,t.jsx)(n,{bg:"lime",children:"Goodbye #4"})]}),(0,t.jsxs)(e7,{h:300,reverse:!0,fadeEdges:!0,vertical:!0,children:[(0,t.jsx)(n,{bg:"red",children:"Hello World #1"}),(0,t.jsx)(n,{bg:"cyan",children:"Hope you like it #2"}),(0,t.jsx)(n,{bg:"blue",children:"Have a nice day #3"}),(0,t.jsx)(n,{bg:"lime",children:"Goodbye #4"})]})]})},code:'\nimport { Marquee } from \'@gfazioli/mantine-marquee\';\n\n  function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {\n    return (\n      <Box {...props} p="md" w="200px" c="white" style={{ borderRadius: \'8px\' }}>\n        {children}\n      </Box>\n    );\n  }\n\n  return (\n    <Flex w={500}>\n      <Marquee h={300} fadeEdges vertical>\n        <BoxComponent bg="red">Hello World #1</BoxComponent>\n        <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>\n        <BoxComponent bg="blue">Have a nice day #3</BoxComponent>\n        <BoxComponent bg="lime">Goodbye #4</BoxComponent>\n      </Marquee>\n      <Marquee h={300} reverse fadeEdges vertical>\n        <BoxComponent bg="red">Hello World #1</BoxComponent>\n        <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>\n        <BoxComponent bg="blue">Have a nice day #3</BoxComponent>\n        <BoxComponent bg="lime">Goodbye #4</BoxComponent>\n      </Marquee>\n    </Flex>\n  );\n}\n',centered:!0,defaultExpanded:!1};function nu(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...ee(),...e.components},{Demo:a}=n;return a||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(eJ,{packages:"@gfazioli/mantine-marquee"}),"\n",(0,t.jsx)(n.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import '@gfazioli/mantine-marquee/styles.css';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can import styles within a layer ",(0,t.jsx)(n.code,{children:"@layer mantine-marquee"})," by importing ",(0,t.jsx)(n.code,{children:"@gfazioli/mantine-marquee/styles.layer.css"})," file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import '@gfazioli/mantine-marquee/styles.layer.css';\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Marquee"})," component allows you to create a marquee effect with any content."]}),"\n",(0,t.jsx)(a,{data:e4}),"\n",(0,t.jsx)(n.h2,{id:"multiple",children:"Multiple"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Marquee"})," component allows you to create a marquee effect with multiple items."]}),"\n",(0,t.jsx)(a,{data:nc}),"\n",(0,t.jsx)(n.h2,{id:"vertical",children:"Vertical"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Marquee"})," component allows you to create a marquee effect with multiple items in vertical direction."]}),"\n",(0,t.jsx)(a,{data:np}),"\n",(0,t.jsx)(n.h2,{id:"example-testimonials",children:"Example: Testimonials"}),"\n",(0,t.jsx)(n.p,{children:"Your customers feedback is important to you. Use Marquee to display your testimonials."}),"\n",(0,t.jsx)(a,{data:nd}),"\n",(0,t.jsx)(n.h2,{id:"example-branding",children:"Example: Branding"}),"\n",(0,t.jsxs)(n.p,{children:["One of the most common use cases for ",(0,t.jsx)(n.code,{children:"Marquee"})," is to create branding banners."]}),"\n",(0,t.jsx)(a,{data:nr})]})}function nh(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...ee(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(nu,{...e})}):nu(e)}let nx={Marquee:{selectors:{root:"Root element"},vars:{root:{"--marquee-animation-direction":"Animation direction","--marquee-direction":"Horizontal or vertical direction","--marquee-duration":"Animation speed duration","--marquee-gap":"Space between elements","--marquee-fade-edge-size":"Fade edge size","--marquee-fade-edge-color":"Fade edge color"}}}};function ng(){return(0,t.jsxs)(eF,{children:[(0,t.jsx)(ek,{data:eL}),(0,t.jsx)(em,{docgen:eV,componentsProps:["Marquee"],componentsStyles:["Marquee"],stylesApiData:nx,children:(0,t.jsx)(nh,{})})]})}},384:e=>{e.exports={tabsWrapper:"DocsTabs_tabsWrapper__YsuwI",tab:"DocsTabs_tab__8DzLW",tabIcon:"DocsTabs_tabIcon__XvAyG",tabInner:"DocsTabs_tabInner__BZ0Uj",main:"DocsTabs_main__8nkOc",tableOfContents:"DocsTabs_tableOfContents__7xu8G",tabContent:"DocsTabs_tabContent__4JiOP",contentWrapper:"DocsTabs_contentWrapper___n0VR"}},5369:e=>{e.exports={icon:"MdxNpmScript_icon__54ht8",tab:"MdxNpmScript_tab__bjE_J",code:"MdxNpmScript_code__LWHmK"}},5188:e=>{e.exports={paragraph:"MdxElements_paragraph__LrCuY",link:"MdxElements_link__jk9cD",ul:"MdxElements_ul__W4EB_",li:"MdxElements_li__6r9ym",title:"MdxElements_title__P7Gzb",titleLink:"MdxElements_titleLink__e0LIm",titleOffset:"MdxElements_titleOffset__Z_6nf",code:"MdxElements_code__PalUe"}},9264:e=>{e.exports={root:"MdxInfo_root__dfJpR",icon:"MdxInfo_icon__3SVbN"}},202:e=>{e.exports={root:"PageHeader_root__tFEU9",title:"PageHeader_title__k_EVD",description:"PageHeader_description__yhN1K",links:"PageHeader_links__cp_9V"}},9179:e=>{e.exports={root:"PageHeaderLink_root__vwNqV",label:"PageHeaderLink_label__ba9ke",body:"PageHeaderLink_body__tt7bH",icon:"PageHeaderLink_icon__LrOP2"}},3261:e=>{e.exports={root:"PropsTablesList_root__pX4uZ",searchIcon:"PropsTablesList_searchIcon__5aknz",title:"PropsTablesList_title__Fpe6X",section:"PropsTablesList_section__47SqB",search:"PropsTablesList_search__kLpUw"}},708:e=>{e.exports={header:"Shell_header__qTSAf",inner:"Shell_inner__3gWUn",main:"Shell_main__g9BIV",logo:"Shell_logo__W2t5j",sponsor:"Shell_sponsor__vXysb"}},345:e=>{e.exports={root:"StylesApiTable_root__g6l3y",groupsHeader:"StylesApiTable_groupsHeader__RNk5U",group:"StylesApiTable_group__y7jFA",title:"StylesApiTable_title__JqnqI",section:"StylesApiTable_section__Ja33o"}},2236:e=>{e.exports={code:"TableInlineCode_code__hldA0"}},8112:e=>{e.exports={wrapper:"TableOfContents_wrapper__MNgv0",inner:"TableOfContents_inner__QrzxB",link:"TableOfContents_link__4LVi4",title:"TableOfContents_title__CJG7E",items:"TableOfContents_items__MotUD",editPage:"TableOfContents_editPage__Ep1tF",editPageIcon:"TableOfContents_editPageIcon__KDjuj"}}},e=>{var n=n=>e(e.s=n);e.O(0,[6520,1390,636,6593,8792],()=>n(7554)),_N_E=e.O()}]);