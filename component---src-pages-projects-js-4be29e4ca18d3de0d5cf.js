(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{130:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(248),i=n(145),c=n(6),l=n.n(c),u=n(138),s=n(139),f=n(136),d=n(210),h={center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},m=Object(f.css)(["align-items:",";"],function(e){return h[e.align]}),p={around:"space-around",between:"space-between",center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},g=Object(f.css)(["align-content:",";"],function(e){return p[e.alignContent]}),y={center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},v=Object(f.css)(["justify-items:",";"],function(e){return y[e.justify]}),b={around:"space-around",between:"space-between",center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},w=Object(f.css)(["justify-content:",";"],function(e){return b[e.justifyContent]}),j={flex:"1fr",full:"100%","1/2":"50%","1/4":"25%","2/4":"50%","3/4":"75%","1/3":"33.33%","2/3":"66.66%"},E=function(e,t){return"minmax("+(t.global.size[e]||e)+", 1fr)"},k=function(e,t,n){var r=j[e];return!n||!r||t.fillContainer&&"horizontal"!==t.fillContainer||console.warn("Grid needs `fill` when using fractional row sizes"),r||t.theme.global.size[e]||e},O=f.default.div.withConfig({displayName:"StyledGrid",componentId:"sc-1wofa1l-0"})(["display:grid;box-sizing:border-box;"," "," "," "," "," "," "," "," "," "," ",""],d.e,function(e){return e.fillContainer&&("horizontal"===(t=e.fillContainer)?"width: 100%;":"vertical"===t?"height: 100%;":t?"\n      width: 100%;\n      height: 100%;\n    ":void 0);var t},function(e){return e.align&&m},function(e){return e.alignContent&&g},function(e){return e.areas&&function(e){Array.isArray(e.rowsProp)&&Array.isArray(e.columns)||console.warn("Grid `areas` requires `rows` and `columns` to be arrays.");var t=e.rowsProp.map(function(){return e.columns.map(function(){return"."})});return e.areas.forEach(function(e){for(var n=e.start[1];n<=e.end[1];n+=1)for(var r=e.start[0];r<=e.end[0];r+=1)t[n][r]=e.name}),"grid-template-areas: "+t.map(function(e){return'"'+e.join(" ")+'"'}).join(" ")+";"}(e)},function(e){return e.columns&&function(e){return Array.isArray(e.columns)?Object(f.css)(["grid-template-columns:",";"],e.columns.map(function(t){return Array.isArray(t)?"minmax("+k(t[0],e)+", "+k(t[1],e)+")":k(t,e)}).join(" ")):"object"==typeof e.columns?Object(f.css)(["grid-template-columns:repeat( ",","," );"],"number"==typeof(t=e.columns.count)?t:"auto-"+t,E(e.columns.size,e.theme)):Object(f.css)(["grid-template-columns:repeat( auto-fill,"," );"],E(e.columns,e.theme));var t}(e)},function(e){return e.gap&&function(e){if("string"==typeof e.gap){var t=e.theme.global.edgeSize[e.gap];return"grid-gap: "+t+" "+t+";"}return e.gap.row&&e.gap.column?"\n      grid-row-gap: "+e.theme.global.edgeSize[e.gap.row]+";\n      grid-column-gap: "+e.theme.global.edgeSize[e.gap.column]+";\n    ":e.gap.row?"\n      grid-row-gap: "+e.theme.global.edgeSize[e.gap.row]+";\n    ":e.gap.column?"\n      grid-column-gap: "+e.theme.global.edgeSize[e.gap.column]+";\n    ":""}(e)},function(e){return e.justify&&v},function(e){return e.justifyContent&&w},function(e){return e.rowsProp&&function(e){return Array.isArray(e.rowsProp)?Object(f.css)(["grid-template-rows:",";"],e.rowsProp.map(function(t){return Array.isArray(t)?"minmax("+k(t[0],e,!0)+", "+k(t[1],e,!0)+")":k(t,e,!0)}).join(" ")):Object(f.css)(["grid-auto-rows:",";"],e.theme.global.size[e.rowsProp])}(e)},function(e){return e.theme.grid&&e.theme.grid.extend});function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var x={div:O},S=function(e){var t=e.fill,n=e.rows,r=e.tag,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["fill","rows","tag"]),i=x[r];return i||(i=O.withComponent(r),x[r]=i),a.a.createElement(i,C({fillContainer:t,rowsProp:n},o))};S.defaultProps={tag:"div"};var z=Object(u.a)(s.d)(S);z.available="undefined"!=typeof window&&window.CSS&&window.CSS.supports&&window.CSS.supports("display","grid");var P={cover:"cover",contain:"contain"},T=Object(f.css)(["flex:1 1;overflow:hidden;object-fit:",";"],function(e){return P[e.fit]}),A=f.default.img.withConfig({displayName:"StyledImage",componentId:"ey4zx9-0"})([""," "," ",""],d.e,function(e){return e.fit&&T},function(e){return e.theme.image&&e.theme.image.extend});var I=Object(u.a)(s.d)(function(e){return a.a.createElement(A,e)}),q=n(250),R=f.default.div.withConfig({displayName:"StyledStack",componentId:"ajspsk-0"})(["position:relative;"," "," ",""],d.e,function(e){return e.fillContainer&&"\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  flex-grow: 1;\n  display: flex;\n"},function(e){return e.theme.stack&&e.theme.stack.extend}),_={fill:"\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  ",center:"\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  ",left:"\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n  ",right:"\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n  ",top:"\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ",bottom:"\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ","top-left":"\n    top: 0;\n    left: 0;\n  ","bottom-left":"\n    bottom: 0;\n    left: 0;\n  ","top-right":"\n    top: 0;\n    right: 0;\n  ","bottom-right":"\n    bottom: 0;\n    right: 0;\n  "},G=f.default.div.withConfig({displayName:"StyledStack__StyledStackLayer",componentId:"ajspsk-1"})(["position:",";"," "," ",""],function(e){return e.guiding?"relative":"absolute"},function(e){return e.guiding&&"display: block;"},function(e){return!e.guiding&&_[e.anchor||"fill"]+";"},function(e){return e.fillContainer&&"\n    width: 100%;\n    height: 100%;\n  "});function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var J=function(e){var t,n;function o(){return e.apply(this,arguments)||this}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){var e=this.props,t=e.anchor,n=e.children,o=e.fill,i=e.guidingChild,c=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["anchor","children","fill","guidingChild"]),l=i;"first"!==l&&l?"last"===l&&(l=a.a.Children.count(n)-1):l=0;var u=0,s=r.Children.map(n,function(e){var n;return e?(n=u===l?a.a.createElement(G,{guiding:!0,fillContainer:o},e):a.a.createElement(G,{anchor:t},e),u+=1,n):e});return a.a.createElement(R,N({fillContainer:o},c),s)},o}(r.Component);var L=Object(u.a)(s.d)(J),D=(n(66),n(46),n(236),n(187)),K=n(179),W=n(181),B=n(178),M=function(e){var t=e.links;return a.a.createElement(o.a,{direction:"row"},Object.keys(t).map(function(e,n){return a.a.createElement(D.a,{key:n,icon:function(e){switch(e){case"github":return a.a.createElement(K.a,{size:"large"});case"url":return a.a.createElement(W.a,{size:"large"});case"file":return a.a.createElement(B.a,{size:"large"})}}(e),href:t[e]})}))},F=function(e){var t=e.children,n=e.links,r=e.showOverlay,i=e.accentKey;return a.a.createElement(L,null,a.a.createElement(o.a,null,t),r&&a.a.createElement(o.a,{fill:!0,align:"center",justify:"center",background:{color:"accent-"+(i%4+1),opacity:"strong"}},a.a.createElement(M,{links:n})))},Q=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={showOverlay:!1},t.handleEvent=function(e){var n=e.type;switch(n){case"mouseenter":return t.setState({showOverlay:!0});case"mouseleave":return t.setState({showOverlay:!1});case"click":return t.setState(function(e){return{showOverlay:!e.showOverlay}});default:return console.warn("No case for event type: "+n)}},t}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.description,r=e.links,i=e.accentKey,c=this.state.showOverlay;return a.a.createElement(o.a,{basis:"medium",margin:"xsmall",onMouseEnter:this.handleEvent,onMouseLeave:this.handleEvent,onClick:this.handleEvent},a.a.createElement(F,{accentKey:i,showOverlay:c,links:r},a.a.createElement(o.a,{height:"small"},a.a.createElement(I,{src:"https://via.placeholder.com/300x150",fit:"cover"})),a.a.createElement(q.a,{size:"large",weight:"bold",margin:{vertical:"small"}},t),a.a.createElement(o.a,{height:"small"},a.a.createElement(q.a,null,n))))},t}(r.Component),U=function(e){var t=e.projects;return a.a.createElement(z,{direction:"row",columns:"medium"},t.map(function(e,t){return a.a.createElement(Q,{key:t,accentKey:t,title:e.title,description:e.description,links:e.links})}))},H=n(143),X=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return a.a.createElement(U,{projects:H.b})},t}(r.Component);t.default=function(){return a.a.createElement(i.a,{title:"My projects"},a.a.createElement(o.a,{pad:{horizontal:"medium"}},a.a.createElement(X,null)))}},137:function(e,t,n){var r;e.exports=(r=n(142))&&r.default||r},140:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(147),i=n.n(o),c=n(247),l=n(148);n(141);t.a=function(e){var t=e.children;return a.a.createElement(c.a,{theme:l.grommet,style:{height:"100%"}},a.a.createElement(i.a,{title:"DH.Kim",meta:[{name:"description",content:"Website of Dong-Ha Kim"},{name:"keywords",content:"web development, blockchain, student, blog, javascript"}]}),t)}},141:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);n(29);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(45),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},143:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return i});var r=[{to:"/about",name:"ABOUT"},{to:"/blog",name:"BLOG"},{to:"/contact",name:"CONTACT"},{to:"/projects",name:"PROJECTS"}],a=["Javascript","Ethereum","Tools"],o=[{category:"Javascript",name:"ES6+",level:85},{category:"Javascript",name:"TypeScript",level:85},{category:"Javascript",name:"React / React Native",level:80},{category:"Javascript",name:"Node",level:70},{category:"Tools",name:"Git",level:75},{category:"Tools",name:"Travis CI / Circle CI",level:60},{category:"Tools",name:"Docker",level:60},{category:"Ethereum",name:"Solidity",level:70},{category:"Ethereum",name:"Truffle Framework",level:80},{category:"Ethereum",name:"web3.js",level:85}],i=[{title:"dongha.kim",description:"My personal website built with gatsby.",keywords:["react","gatsby"],links:{github:"https://github.com/dakingha69/dakingha69.github.io",url:"dongha.kim"}},{title:"trustlines.network clientlib",description:"People powered money - Ethereum based social credit protocol, where I contributed a lot to the TypeScript client library.",keywords:["ethereum","web3","typescript"],links:{github:"https://github.com/trustlines-network/clientlib"}},{title:"CITES Blockchain Challenge",description:"",keywords:["ethereum","web3","truffle","solidity"],links:{github:"https://github.com/cites-on-blocks/cites-on-blocks_dapp"}},{title:"CITES Blockchain Challenge Paper",description:"",keywords:["ethereum","scientific paper"],links:{file:""}}]},145:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(248),i=n(251),c=n(140),l=(n(144),n(133)),u=n(249),s=n(246),f=n(180),d=n(143),h=function(e){return a.a.createElement(o.a,{direction:"row",style:{justifyContent:"space-around"}},a.a.createElement(u.a,{icon:a.a.createElement(f.a,null),onClick:function(){return Object(l.navigate)("/")}}),a.a.createElement(s.a,{label:"Go to",items:d.a.map(function(e){var t=e.to;return{label:e.name,onClick:function(){return Object(l.navigate)(t)}}})}))};t.a=function(e){var t=e.title,n=e.children;return a.a.createElement(c.a,null,a.a.createElement(o.a,{animation:"fadeIn"},a.a.createElement(h,null),a.a.createElement(i.a,{alignSelf:"center"},t),n))}},149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return h});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(133),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(137),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var f=n(28);n.d(t,"parsePath",function(){return f.a});var d=a.a.createContext({}),h=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},187:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(138),i=n(248),c=n(139),l=n(136),u=n(176),s=n(210),f=l.default.a.withConfig({displayName:"StyledAnchor",componentId:"sc-1rp7lwl-0"})(["box-sizing:border-box;"," color:",";"," text-decoration:",";cursor:pointer;outline:none;"," "," "," "," "," ",""],function(e){return function(e){if(e.size){var t=e.size||"medium",n=e.theme.text[t];return Object(l.css)(["font-size:",";line-height:",";"],n.size,n.height)}return Object(l.css)(["font-size:inherit;line-height:inherit;"])}(e)},function(e){return Object(u.c)(e.colorProp||e.theme.anchor.color,e.theme)},function(e){return e.theme.anchor.fontWeight&&"font-weight: "+e.theme.anchor.fontWeight+";"},function(e){return e.hasIcon?"none":e.theme.anchor.textDecoration},s.e,function(e){return!e.disabled&&e.theme.anchor.hover&&Object(l.css)(["&:hover{"," "," ","}"],e.theme.anchor.hover.textDecoration&&"text-decoration: "+e.theme.anchor.hover.textDecoration+";",e.theme.anchor.hover.fontWeight&&"font-weight: "+e.theme.anchor.hover.fontWeight+";",e.theme.anchor.hover.extend)},function(e){return e.hasIcon&&!e.hasLabel&&"\n    padding: "+e.theme.global.edgeSize.small+";\n  "},function(e){return e.disabled&&"\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n"},function(e){return e.focus&&s.d},function(e){return e.theme.anchor.extend});function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",function(){return m});var h=function(e){var t,n;function o(t){var n;n=e.call(this,t)||this;var r=t.children,a=t.icon,o=t.label;return(a||o)&&r&&console.warn("Anchor should not have children if icon or label is provided"),n}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){var e=this.props,t=e.a11yTitle,n=e.children,o=e.color,c=e.disabled,l=e.forwardRef,s=e.href,h=e.icon,m=e.focus,p=e.label,g=e.onClick,y=e.reverse,v=e.theme,b=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["a11yTitle","children","color","disabled","forwardRef","href","icon","focus","label","onClick","reverse","theme"]),w=h;h&&!h.props.color&&(w=Object(r.cloneElement)(h,{color:Object(u.c)(o||v.anchor.color,v)}));var j=y?p:w,E=y?w:p;return a.a.createElement(f,d({},b,{ref:l,"aria-label":t,colorProp:o,disabled:c,hasIcon:!!h,focus:m,hasLabel:p,reverse:y,theme:v,href:c?void 0:s,onClick:c?void 0:g}),j&&E?a.a.createElement(i.a,{tag:"span",direction:"row",align:"center",gap:"small",style:{display:"inline-flex"}},j,E):j||E||n)},o}(r.Component);var m=Object(o.a)(c.a,c.d,c.b)(h)},236:function(e,t,n){var r=n(32),a=n(31);n(237)("keys",function(){return function(e){return a(r(e))}})},237:function(e,t,n){var r=n(22),a=n(24),o=n(21);e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],i={};i[e]=t(n),r(r.S+r.F*o(function(){n(1)}),"Object",i)}}}]);
//# sourceMappingURL=component---src-pages-projects-js-4be29e4ca18d3de0d5cf.js.map