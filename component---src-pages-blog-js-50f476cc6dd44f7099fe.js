(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{126:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(145);t.default=function(){return r.a.createElement(i.a,{title:"My blog"})}},137:function(e,t,n){var a;e.exports=(a=n(142))&&a.default||a},140:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(147),o=n.n(i),c=n(247),l=n(148);n(141);t.a=function(e){var t=e.children;return r.a.createElement(c.a,{theme:l.grommet,style:{height:"100%"}},r.a.createElement(o.a,{title:"DH.Kim",meta:[{name:"description",content:"Website of Dong-Ha Kim"},{name:"keywords",content:"web development, blockchain, student, blog, javascript"}]}),t)}},141:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(45),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},143:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return o});var a=[{to:"/about",name:"ABOUT"},{to:"/blog",name:"BLOG"},{to:"/contact",name:"CONTACT"},{to:"/projects",name:"PROJECTS"}],r=["Javascript","Ethereum","Tools"],i=[{category:"Javascript",name:"ES6+",level:85},{category:"Javascript",name:"TypeScript",level:85},{category:"Javascript",name:"React / React Native",level:80},{category:"Javascript",name:"Node",level:70},{category:"Tools",name:"Git",level:75},{category:"Tools",name:"Travis CI / Circle CI",level:60},{category:"Tools",name:"Docker",level:60},{category:"Ethereum",name:"Solidity",level:70},{category:"Ethereum",name:"Truffle Framework",level:80},{category:"Ethereum",name:"web3.js",level:85}],o=[{title:"dongha.kim",description:"My personal website built with gatsby.",keywords:["react","gatsby"],links:{github:"https://github.com/dakingha69/dakingha69.github.io",url:"dongha.kim"}},{title:"trustlines.network clientlib",description:"People powered money - Ethereum based social credit protocol, where I contributed a lot to the TypeScript client library.",keywords:["ethereum","web3","typescript"],links:{github:"https://github.com/trustlines-network/clientlib"}},{title:"CITES Blockchain Challenge",description:"",keywords:["ethereum","web3","truffle","solidity"],links:{github:"https://github.com/cites-on-blocks/cites-on-blocks_dapp"}},{title:"CITES Blockchain Challenge Paper",description:"",keywords:["ethereum","scientific paper"],links:{file:""}}]},145:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(248),o=n(251),c=n(140),l=(n(144),n(133)),u=n(249),s=n(246),d=n(180),m=n(143),p=function(e){return r.a.createElement(i.a,{direction:"row",style:{justifyContent:"space-around"}},r.a.createElement(u.a,{icon:r.a.createElement(d.a,null),onClick:function(){return Object(l.navigate)("/")}}),r.a.createElement(s.a,{label:"Go to",items:m.a.map(function(e){var t=e.to;return{label:e.name,onClick:function(){return Object(l.navigate)(t)}}})}))};t.a=function(e){var t=e.title,n=e.children;return r.a.createElement(c.a,null,r.a.createElement(i.a,{animation:"fadeIn"},r.a.createElement(p,null),r.a.createElement(o.a,{alignSelf:"center"},t),n))}},149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(133),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(137),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(28);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}}}]);
//# sourceMappingURL=component---src-pages-blog-js-50f476cc6dd44f7099fe.js.map