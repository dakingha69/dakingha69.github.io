(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{133:function(e,t,n){"use strict";var r=n(8);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var o=r(n(146)),i=r(n(147)),a=r(n(6)),u=r(n(47)),s=r(n(48)),l=r(n(4)),c=r(n(0)),f=n(19),p=n(140);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},v=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),n.state={IOSupported:r},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,r,o=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(o.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,r=t.getProps,a=void 0===r?this.defaultGetProps:r,u=t.onClick,s=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,v=(0,o.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),y=d(n);return c.default.createElement(f.Link,(0,i.default)({to:y,state:l,getProps:a,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),m(n,{state:l,replace:h})),!0}},v))},t}(c.default.Component);v.propTypes=(0,i.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var y=v;t.default=y;var m=function(e,t){window.___navigate(d(e),t)};t.navigate=m;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},139:function(e,t,n){"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(4)),o=u(n(0)),i=u(n(30)),a=n(46);n(144);function u(e){return e&&e.__esModule?e:{default:e}}var s="unmounted";t.UNMOUNTED=s;var l="exited";t.EXITED=l;var c="entering";t.ENTERING=c;var f="entered";t.ENTERED=f;t.EXITING="exiting";var p=function(e){var t,n;function r(t,n){var r;r=e.call(this,t,n)||this;var o,i=n.transitionGroup,a=i&&!i.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(o=l,r.appearStatus=c):o=f:o=t.unmountOnExit||t.mountOnEnter?s:l,r.state={status:o},r.nextCallback=null,r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.getChildContext=function(){return{transitionGroup:null}},r.getDerivedStateFromProps=function(e,t){return e.in&&t.status===s?{status:l}:null},a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==c&&n!==f&&(t=c):n!==c&&n!==f||(t="exiting")}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=r.appear),{exit:e,enter:t,appear:n}},a.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=i.default.findDOMNode(this);t===c?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===l&&this.setState({status:s})},a.performEnter=function(e,t){var n=this,r=this.props.enter,o=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,i=this.getTimeouts();t||r?(this.props.onEnter(e,o),this.safeSetState({status:c},function(){n.props.onEntering(e,o),n.onTransitionEnd(e,i.enter,function(){n.safeSetState({status:f},function(){n.props.onEntered(e,o)})})})):this.safeSetState({status:f},function(){n.props.onEntered(e)})},a.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:"exiting"},function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,function(){t.safeSetState({status:l},function(){t.props.onExited(e)})})})):this.safeSetState({status:l},function(){t.props.onExited(e)})},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},a.onTransitionEnd=function(e,t,n){this.setNextCallback(n),e?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},a.render=function(){var e=this.state.status;if(e===s)return null;var t=this.props,n=t.children,r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"==typeof n)return n(e,r);var i=o.default.Children.only(n);return o.default.cloneElement(i,r)},r}(o.default.Component);function d(){}p.contextTypes={transitionGroup:r.object},p.childContextTypes={transitionGroup:function(){}},p.propTypes={},p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d},p.UNMOUNTED=0,p.EXITED=1,p.ENTERING=2,p.ENTERED=3,p.EXITING=4;var h=(0,a.polyfill)(p);t.default=h},144:function(e,t,n){"use strict";t.__esModule=!0,t.transitionTimeout=function(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}},t.classNamesShape=t.timeoutsShape=void 0;var r,o=(r=n(4))&&r.__esModule?r:{default:r};var i=o.default.oneOfType([o.default.number,o.default.shape({enter:o.default.number,exit:o.default.number}).isRequired]);t.timeoutsShape=i;var a=o.default.oneOfType([o.default.string,o.default.shape({enter:o.default.string,exit:o.default.string,active:o.default.string}),o.default.shape({enter:o.default.string,enterDone:o.default.string,enterActive:o.default.string,exit:o.default.string,exitDone:o.default.string,exitActive:o.default.string})]);t.classNamesShape=a},146:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},147:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},179:function(e,t,n){var r=n(21).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||n(14)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},180:function(e,t,n){"use strict";n(224)("link",function(e){return function(t){return e(this,"a","href",t)}})},223:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=p(i),u=p(n(2)),s=p(n(10)),l=p(n(12)),c=p(n(13)),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(14));function p(e){return e&&e.__esModule?e:{default:e}}var d=["🔙","⏰"],h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={textLines:[],isDone:!1},n.onTypingDone=function(){n.mounted&&(n.setState({isDone:!0}),n.props.onTypingDone())},n.delayGenerator=function(e,t,r,o){var i=n.props.avgTypingDelay,a=n.props.stdTypingDelay;return n.props.delayGenerator(i,a,{line:e,lineIdx:t,character:r,charIdx:o,defDelayGenerator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return f.gaussianRnd(e,t)}})},n.typeLine=function(e,t){if(!n.mounted)return Promise.resolve();var r=e,o=n.props.onLineTyped;return f.isBackspaceElement(e)?(e.props.delay>0&&(n.introducedDelay=e.props.delay),r=String("🔙").repeat(e.props.count)):f.isDelayElement(e)&&(n.introducedDelay=e.props.ms,r="⏰"),new Promise(function(e,i){n.setState({textLines:n.state.textLines.concat([""])},function(){f.eachPromise(r,n.typeCharacter,r,t).then(function(){return o(r,t)}).then(e).catch(i)})})},n.typeCharacter=function(e,t,r,o){if(!n.mounted)return Promise.resolve();var i=n.props.onCharacterTyped;return new Promise(function(a){var u=n.state.textLines.slice();f.sleep(n.introducedDelay).then(function(){n.introducedDelay=null;var s="🔙"===e;if("⏰"===e)a();else{if(s&&o>0){for(var l=o-1,c=u[l],f=l;f>=0&&(!(c.length>0)||d.includes(c[0]));f--)c=u[l=f];u[l]=c.substr(0,c.length-1)}else u[o]+=e;n.setState({textLines:u},function(){var u=n.delayGenerator(r,o,e,t);i(e,t),setTimeout(a,u)})}})})},n.mounted=!1,n.linesToType=[],n.introducedDelay=null,e.children&&(n.linesToType=f.extractTextFromElement(e.children)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),o(t,[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.props,t=e.children,n=e.startDelay;t?n>0&&"undefined"!=typeof window?setTimeout(this.typeAllLines.bind(this),n):this.typeAllLines():this.onTypingDone()}},{key:"shouldComponentUpdate",value:function(e,t){if(t.textLines.length!==this.state.textLines.length)return!0;for(var n=0;n<t.textLines.length;n++){if(this.state.textLines[n]!==t.textLines[n])return!0}return this.state.isDone!==t.isDone}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"typeAllLines",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.linesToType;return f.eachPromise(t,this.typeLine).then(function(){return e.onTypingDone()})}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cursor,o=this.state.isDone,i=f.cloneElementWithSpecifiedText({element:this.props.children,textLines:this.state.textLines});return a.default.createElement("div",{className:"Typist "+t},i,a.default.createElement(s.default,r({isDone:o},n)))}}]),t}();h.propTypes={children:u.default.node,className:u.default.string,avgTypingDelay:u.default.number,stdTypingDelay:u.default.number,startDelay:u.default.number,cursor:u.default.object,onCharacterTyped:u.default.func,onLineTyped:u.default.func,onTypingDone:u.default.func,delayGenerator:u.default.func},h.defaultProps={className:"",avgTypingDelay:70,stdTypingDelay:25,startDelay:0,cursor:{},onCharacterTyped:function(){},onLineTyped:function(){},onTypingDone:function(){},delayGenerator:f.gaussianRnd},t.default=h,h.Backspace=l.default,h.Delay=c.default},function(e,t){e.exports=n(0)},function(e,t,n){e.exports=n(9)()},function(e,t,n){"use strict";var r=n(4),o=n(5),i=n(6),a=n(7),u=n(8);e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,s="@@iterator";var l="<<anonymous>>",c={array:h("array"),bool:h("boolean"),func:h("function"),number:h("number"),object:h("object"),string:h("string"),symbol:h("symbol"),any:d(r.thatReturnsNull),arrayOf:function(e){return d(function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){var s=y(u);return new p("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected an array.")}for(var l=0;l<u.length;l++){var c=e(u,l,r,o,i+"["+l+"]",a);if(c instanceof Error)return c}return null})},element:function(){return d(function(t,n,r,o,i){var a=t[n];if(!e(a)){var u=y(a);return new p("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected a single ReactElement.")}return null})}(),instanceOf:function(e){return d(function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||l,u=function(e){if(!e.constructor||!e.constructor.name)return l;return e.constructor.name}(t[n]);return new p("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null})},node:function(){return d(function(e,t,n,r,o){if(!v(e[t]))return new p("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.");return null})}(),objectOf:function(e){return d(function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],s=y(u);if("object"!==s)return new p("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var l in u)if(u.hasOwnProperty(l)){var c=e(u,l,r,o,i+"."+l,a);if(c instanceof Error)return c}return null})},oneOf:function(e){if(!Array.isArray(e))return r.thatReturnsNull;return d(function(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(f(a,e[u]))return null;var s=JSON.stringify(e);return new p("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+s+".")})},oneOfType:function(e){if(!Array.isArray(e))return r.thatReturnsNull;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return i(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",b(n),t),r.thatReturnsNull}return d(function(t,n,r,o,i){for(var u=0;u<e.length;u++){var s=e[u];if(null==s(t,n,r,o,i,a))return null}return new p("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")})},shape:function(e){return d(function(t,n,r,o,i){var u=t[n],s=y(u);if("object"!==s)return new p("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var c=e[l];if(c){var f=c(u,l,r,o,i+"."+l,a);if(f)return f}}return null})}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e){this.message=e,this.stack=""}function d(e){function n(n,r,i,u,s,c,f){(u=u||l,c=c||i,f!==a)&&(t&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"));return null==r[i]?n?null===r[i]?new p("The "+s+" `"+c+"` is marked as required in `"+u+"`, but its value is `null`."):new p("The "+s+" `"+c+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(r,i,u,s,c)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function h(e){return d(function(t,n,r,o,i,a){var u=t[n];return y(u)!==e?new p("Invalid "+o+" `"+i+"` of type `"+m(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null})}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[s]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol}(t,e)?"symbol":t}function m(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function b(e){var t=m(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,c.checkPropTypes=u,c.PropTypes=c,c}},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t){"use strict";var n=function(e){};e.exports=function(e,t,r,o,i,a,u,s){if(n(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,o,i,a,u,s],f=0;(l=new Error(t.replace(/%s/g,function(){return c[f++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,n){"use strict";var r=n(4);e.exports=r},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){}},function(e,t,n){"use strict";var r=n(4),o=n(5),i=n(7);e.exports=function(){function e(e,t,n,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=u(o),a=u(n(2));function u(e){return e&&e.__esModule?e:{default:e}}n(11);var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._isReRenderingCursor=!1,n.state={shouldRender:n.props.show},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;!this.props.isDone&&e.isDone&&this.props.hideWhenDone&&setTimeout(function(){return t.setState({shouldRender:!1})},this.props.hideWhenDoneDelay)}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.show,n=e.isDone;t&&(n||this._isReRenderingCursor||this._reRenderCursor())}},{key:"_reRenderCursor",value:function(){var e=this;this._isReRenderingCursor=!0,this.setState({shouldRender:!1},function(){e.setState({shouldRender:!0},function(){e._isReRenderingCursor=!1})})}},{key:"render",value:function(){if(this.state.shouldRender){var e=this.props.blink?" Cursor--blinking":"";return i.default.createElement("span",{className:"Cursor"+e},this.props.element)}return null}}]),t}();s.propTypes={blink:a.default.bool,show:a.default.bool,element:a.default.node,hideWhenDone:a.default.bool,hideWhenDoneDelay:a.default.number,isDone:a.default.bool},s.defaultProps={blink:!0,show:!0,element:"|",hideWhenDone:!1,hideWhenDoneDelay:1e3,isDone:!1},t.default=s},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){return r.default.createElement("noscript",null)};a.propTypes={count:o.default.number,delay:o.default.number},a.defaultProps={count:1,delay:0},t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){return r.default.createElement("noscript",null)};a.propTypes={ms:o.default.number.isRequired},t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sleep=void 0;var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.gaussianRnd=function(e,t){for(var n=0,r=0;r<12;r++)n+=Math.random();return n-=6,Math.round(n*t)+e},t.eachPromise=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return Array.from(e).reduce(function(e,n,o){return e.then(function(){return t.apply(void 0,[n,o].concat(r))})},Promise.resolve())},t.exclude=s,t.isBackspaceElement=l,t.isDelayElement=c,t.extractTextFromElement=function(e){var t=e?[e]:[],n=[];for(;t.length>0;){var r=t.pop();if(o.default.isValidElement(r))l(r)||c(r)?n.unshift(r):o.default.Children.forEach(r.props.children,function(e){t.push(e)});else if(Array.isArray(r)){var i=!0,a=!1,u=void 0;try{for(var s,f=r[Symbol.iterator]();!(i=(s=f.next()).done);i=!0){var p=s.value;t.push(p)}}catch(e){a=!0,u=e}finally{try{!i&&f.return&&f.return()}finally{if(a)throw u}}}else n.unshift(r)}return n},t.cloneElement=f,t.cloneElementWithSpecifiedText=function(e){var t=e.element,n=e.textLines;if(!t)return;return function e(t,n,i){if(i>=n.length)return[null,i];var a=i;var u=function(t){var o=e(t,n,a),i=r(o,2),u=i[0],s=i[1];return a=s,u};var s=o.default.isValidElement(t)&&!(l(t)||c(t));if(s){var p=o.default.Children.map(t.props.children,u)||[];return[f(t,p),a]}if(Array.isArray(t)){var d=t.map(u);return[d,a]}return[n[a],a+1]}(t,n,0)[0]};var o=u(n(1)),i=u(n(12)),a=u(n(13));function u(e){return e&&e.__esModule?e:{default:e}}t.sleep=function(e){return new Promise(function(t){return null!=e?setTimeout(t,e):t()})};function s(e,t){var n={};for(var r in e)-1===t.indexOf(r)&&(n[r]=e[r]);return n}function l(e){return e&&e.type===i.default}function c(e){return e&&e.type===a.default}function f(e,t){var n=e.type,r=s(e.props,["children"]);return r.key="Typist-element-"+n+"-"+(Date.now()+Math.random()+Math.random()),o.default.createElement.apply(o.default,[n,r].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t)))}}])},224:function(e,t,n){var r=n(24),o=n(22),i=n(23),a=/"/g,u=function(e,t,n,r){var o=String(i(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),u+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(u),r(r.P+r.F*o(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},232:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(181),a=n(182),u=n(135),s=n(205),l=n(196),c=n(230),f={center:"center",end:"right",start:"left"},p=Object(u.css)(["text-align:",";"],function(e){return f[e.textAlign]}),d=Object(u.css)(["color:",";"],function(e){return Object(l.b)(e.colorProp,e.theme)}),h=u.default.h1.withConfig({displayName:"StyledHeading",componentId:"sc-1rdh4aw-0"})([""," "," "," "," "," "," ",""],c.b,function(e){return e.theme.heading.font&&Object(u.css)(["font-family:",";"],e.theme.heading.font.family)},function(e){return function(e){var t=e.size||"medium",n=e.theme.heading,r=n.level[e.level];if(r){var o=r[t],i=[Object(u.css)(["font-size:",";line-height:",";max-width:",";font-weight:",";"],o.size,o.height,o.maxWidth,n.weight)];if(e.responsive&&n.responsiveBreakpoint){var a=e.theme.global.breakpoints[n.responsiveBreakpoint];if(a){var l=n.level[Math.min(e.level+1,4)][t];i.push(Object(s.a)(a,"\n          font-size: "+l.size+";\n          line-height: "+l.height+";\n          max-width: "+l.maxWidth+";\n        "))}}return i}return console.warn("Heading level "+e.level+" is not defined in your theme."),""}(e)},function(e){return e.textAlign&&p},function(e){return e.truncate&&"\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"},function(e){return e.colorProp&&d},function(e){return e.theme.heading&&e.theme.heading.extend});function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",function(){return b});var y={div:h},m=function(e){var t=e.color,n=e.level,r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["color","level"]),i="h"+n,a=y[i];return a||(a=h.withComponent(i),y[i]=a),o.a.createElement(a,v({colorProp:t,level:+n},r))};m.defaultProps={level:1,responsive:!0};var b=Object(i.a)(a.b)(m)}}]);
//# sourceMappingURL=10-30c80e70aedcf9936ceb.js.map