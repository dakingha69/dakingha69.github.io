(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{126:function(e,t,n){"use strict";n.r(t);n(28);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),c=n(136),l=n.n(c),u=n(134),s=n(142),d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={in:!1},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({in:!0})},n.render=function(){return o.a.createElement(u.a,null,o.a.createElement(l.a,{in:this.state.in,timeout:100},function(e){return o.a.createElement("div",{style:Object.assign({},p,m[e])},o.a.createElement(s.a,null),o.a.createElement("div",{style:f.container},o.a.createElement("h1",null,"Hello world!"),o.a.createElement("div",{style:f.textContainer},o.a.createElement("p",null,"My name is Dong-Ha Kim and I am a",o.a.createElement("p",null),o.a.createElement("div",null,"Fullstack Developer"),o.a.createElement("div",null,"Blockchain Enthusiast"),o.a.createElement("div",null,"M. Sc. Information Systems Management Student")),o.a.createElement("p",null,"I love writing applications - from prototypes to production ready."),o.a.createElement("p",null,"I am also a BIG fan and believer of blockchain technology, especially Ethereum ♥"))))}))},t}(i.Component),p={transition:"opacity 500ms",opacity:0},m={entering:{opacity:0},entered:{opacity:1}},f={container:{textAlign:"center"},textContainer:{}};t.default=d},133:function(e,t,n){var a;e.exports=(a=n(135))&&a.default||a},134:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(138),o=n.n(i);t.a=function(e){var t=e.children;return r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(o.a,{title:"DH.Kim",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),r.a.createElement("div",{style:{height:"100%"}},t))}},135:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(45),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},137:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(132),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(133),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(29);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},142:function(e,t,n){"use strict";n(139),n(140);var a=n(0),r=n.n(a),i=n(132),o=n(146),c={container:{flex:1,display:"flex",flexDirection:"row",justifyContent:"flex-start",padding:"10px"},arrow:{fontSize:"40px"}};t.a=function(e){e.direction,e.link,e.name,e.onPageLeave;return r.a.createElement("div",{style:c.container,onClick:function(){return Object(i.navigateTo)("/")}},r.a.createElement(o.a,{className:"pointer",style:c.arrow}))}}}]);
//# sourceMappingURL=component---src-pages-about-js-09834aa70d9c7217c9ef.js.map