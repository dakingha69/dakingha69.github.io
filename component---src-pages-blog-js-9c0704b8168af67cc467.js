(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{127:function(t,e,n){"use strict";n.r(e);n(28);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(133),u=n.n(s),l=n(139),c=n.n(l),p=n(136),d=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).state={in:!1},e}r()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.setState({in:!0})},n.render=function(){return o.a.createElement(p.a,null,o.a.createElement(c.a,{in:this.state.in,timeout:100},function(t){return o.a.createElement("div",{style:Object.assign({},f,h[t])},o.a.createElement("h1",null,"ABOUT"),o.a.createElement("p",null,"Welcome to page 2"),o.a.createElement(u.a,{to:"/"},"Go back to the homepage"))}))},e}(i.Component),f={transition:"opacity 500ms",opacity:0,padding:20,display:"inline-block",backgroundColor:"#8787d8"},h={entering:{opacity:0},entered:{opacity:1},exiting:{},exited:{}};e.default=d},133:function(t,e,n){"use strict";var a=n(8);e.__esModule=!0,e.withPrefix=f,e.navigateTo=e.replace=e.push=e.navigate=e.default=void 0;var r=a(n(146)),i=a(n(147)),o=a(n(6)),s=a(n(47)),u=a(n(48)),l=a(n(4)),c=a(n(0)),p=n(19),d=n(140);function f(t){return function(t){return t.replace(/\/+/g,"/")}("/"+t)}var h={activeClassName:l.default.string,activeStyle:l.default.object},m=function(t){function e(e){var n;n=t.call(this)||this,(0,u.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(t){return t.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,o.default)(e,t);var n=e.prototype;return n.componentDidUpdate=function(t,e){this.props.to===t.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.handleRef=function(t){var e,n,a,r=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(e=t,n=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(t){t.forEach(function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(a.unobserve(e),a.disconnect(),n())})})).observe(e))},n.render=function(){var t=this,e=this.props,n=e.to,a=e.getProps,o=void 0===a?this.defaultGetProps:a,s=e.onClick,u=e.onMouseEnter,l=(e.activeClassName,e.activeStyle,e.ref,e.innerRef,e.state),h=e.replace,m=(0,r.default)(e,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=f(n);return c.default.createElement(p.Link,(0,i.default)({to:v,state:l,getProps:o,innerRef:this.handleRef,onMouseEnter:function(t){u&&u(t),___loader.hovering((0,d.parsePath)(n).pathname)},onClick:function(e){return s&&s(e),0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(e.preventDefault(),g(n,{state:l,replace:h})),!0}},m))},e}(c.default.Component);m.propTypes=(0,i.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var v=m;e.default=v;var g=function(t,e){window.___navigate(f(t),e)};e.navigate=g;var E=function(t){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(t))};e.push=E;e.replace=function(t){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(t))};e.navigateTo=function(t){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),E(t)}},134:function(t,e,n){var a;t.exports=(a=n(138))&&a.default||a},136:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(142),o=n.n(i),s=n(231),u=n(143);n(137);e.a=function(t){var e=t.children;return r.a.createElement(s.a,{theme:u.grommet,style:{height:"100%"}},r.a.createElement(o.a,{title:"DH.Kim",meta:[{name:"description",content:"Website of Dong-Ha Kim"},{name:"keywords",content:"web development, blockchain, student, blog, javascript"}]}),e)}},137:function(t,e,n){},138:function(t,e,n){"use strict";n.r(e);n(28);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(45),u=n(2),l=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},139:function(t,e,n){"use strict";e.__esModule=!0,e.default=e.EXITING=e.ENTERED=e.ENTERING=e.EXITED=e.UNMOUNTED=void 0;var a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};a.get||a.set?Object.defineProperty(e,n,a):e[n]=t[n]}return e.default=t,e}(n(4)),r=s(n(0)),i=s(n(30)),o=n(46);n(144);function s(t){return t&&t.__esModule?t:{default:t}}var u="unmounted";e.UNMOUNTED=u;var l="exited";e.EXITED=l;var c="entering";e.ENTERING=c;var p="entered";e.ENTERED=p;e.EXITING="exiting";var d=function(t){var e,n;function a(e,n){var a;a=t.call(this,e,n)||this;var r,i=n.transitionGroup,o=i&&!i.isMounting?e.enter:e.appear;return a.appearStatus=null,e.in?o?(r=l,a.appearStatus=c):r=p:r=e.unmountOnExit||e.mountOnEnter?u:l,a.state={status:r},a.nextCallback=null,a}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=a.prototype;return o.getChildContext=function(){return{transitionGroup:null}},a.getDerivedStateFromProps=function(t,e){return t.in&&e.status===u?{status:l}:null},o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==c&&n!==p&&(e=c):n!==c&&n!==p||(e="exiting")}this.updateStatus(!1,e)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var t,e,n,a=this.props.timeout;return t=e=n=a,null!=a&&"number"!=typeof a&&(t=a.exit,e=a.enter,n=a.appear),{exit:t,enter:e,appear:n}},o.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e){this.cancelNextCallback();var n=i.default.findDOMNode(this);e===c?this.performEnter(n,t):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===l&&this.setState({status:u})},o.performEnter=function(t,e){var n=this,a=this.props.enter,r=this.context.transitionGroup?this.context.transitionGroup.isMounting:e,i=this.getTimeouts();e||a?(this.props.onEnter(t,r),this.safeSetState({status:c},function(){n.props.onEntering(t,r),n.onTransitionEnd(t,i.enter,function(){n.safeSetState({status:p},function(){n.props.onEntered(t,r)})})})):this.safeSetState({status:p},function(){n.props.onEntered(t)})},o.performExit=function(t){var e=this,n=this.props.exit,a=this.getTimeouts();n?(this.props.onExit(t),this.safeSetState({status:"exiting"},function(){e.props.onExiting(t),e.onTransitionEnd(t,a.exit,function(){e.safeSetState({status:l},function(){e.props.onExited(t)})})})):this.safeSetState({status:l},function(){e.props.onExited(t)})},o.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},o.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,e.nextCallback=null,t(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(t,e,n){this.setNextCallback(n),t?(this.props.addEndListener&&this.props.addEndListener(t,this.nextCallback),null!=e&&setTimeout(this.nextCallback,e)):setTimeout(this.nextCallback,0)},o.render=function(){var t=this.state.status;if(t===u)return null;var e=this.props,n=e.children,a=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(e,["children"]);if(delete a.in,delete a.mountOnEnter,delete a.unmountOnExit,delete a.appear,delete a.enter,delete a.exit,delete a.timeout,delete a.addEndListener,delete a.onEnter,delete a.onEntering,delete a.onEntered,delete a.onExit,delete a.onExiting,delete a.onExited,"function"==typeof n)return n(t,a);var i=r.default.Children.only(n);return r.default.cloneElement(i,a)},a}(r.default.Component);function f(){}d.contextTypes={transitionGroup:a.object},d.childContextTypes={transitionGroup:function(){}},d.propTypes={},d.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:f,onEntering:f,onEntered:f,onExit:f,onExiting:f,onExited:f},d.UNMOUNTED=0,d.EXITED=1,d.ENTERING=2,d.ENTERED=3,d.EXITING=4;var h=(0,o.polyfill)(d);e.default=h},140:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return h}),n.d(e,"StaticQueryContext",function(){return d}),n.d(e,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(133),u=n.n(s);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var l=n(134),c=n.n(l);n.d(e,"PageRenderer",function(){return c.a});var p=n(29);n.d(e,"parsePath",function(){return p.a});var d=r.a.createContext({}),f=function(t){return r.a.createElement(d.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(t,e,n){"use strict";e.__esModule=!0,e.transitionTimeout=function(t){var e="transition"+t+"Timeout",n="transition"+t;return function(t){if(t[n]){if(null==t[e])return new Error(e+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof t[e])return new Error(e+" must be a number (in milliseconds)")}return null}},e.classNamesShape=e.timeoutsShape=void 0;var a,r=(a=n(4))&&a.__esModule?a:{default:a};var i=r.default.oneOfType([r.default.number,r.default.shape({enter:r.default.number,exit:r.default.number}).isRequired]);e.timeoutsShape=i;var o=r.default.oneOfType([r.default.string,r.default.shape({enter:r.default.string,exit:r.default.string,active:r.default.string}),r.default.shape({enter:r.default.string,enterDone:r.default.string,enterActive:r.default.string,exit:r.default.string,exitDone:r.default.string,exitActive:r.default.string})]);e.classNamesShape=o},146:function(t,e){t.exports=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}},147:function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},n.apply(this,arguments)}t.exports=n}}]);
//# sourceMappingURL=component---src-pages-blog-js-9c0704b8168af67cc467.js.map