(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[5],{507:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),o=c(r(21)),a=c(r(39)),i=r(521);function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,m,b,g=function(e){function t(){return l(this,t),s(this,p(t).apply(this,arguments))}var r,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),r=t,(o=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&a.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var r=n.default.createElement("div",{className:"react-head-temp"},t);a.default.render(r,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var r=e.temporaryElement.querySelector(".react-head-temp");if(null!==r){var n=Array.prototype.slice.call(r.children),o=document.head,a=o.innerHTML;(n=(n=n.filter((function(e){return-1===a.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var r=(0,i.getDuplicateTitle)();r&&(0,i.removeChild)(o,r)}else if("meta"===t){var n=(0,i.getDuplicateMeta)(e);n&&(0,i.removeChild)(o,n)}else if("link"===t&&"canonical"===e.rel){var a=(0,i.getDuplicateCanonical)(e);a&&(0,i.removeChild)(o,a)}})),(0,i.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&f(r.prototype,o),c&&f(r,c),t}(n.Component);d=g,m="contextTypes",b={extract:o.default.func},m in d?Object.defineProperty(d,m,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[m]=b;var h=g;t.default=h,e.exports=t.default},513:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var n=i(r(520)),o=i(r(507)),a=i(r(522));function i(e){return e&&e.__esModule?e:{default:e}}var c=o.default;t.default=c},520:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=r(0),a=(n=r(21))&&n.__esModule?n:{default:n};function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return c(this,t),l(this,f(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),r=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return o.Children.only(this.props.children)}}])&&u(r.prototype,n),a&&u(r,a),t}(o.Component);!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(p,"childContextTypes",{extract:a.default.func});var y=p;t.default=y,e.exports=t.default},521:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,r=null,n=[],i=[];return e.forEach((function(e){var o=e.type,a=e.props;"title"===o?t=e:"link"===o&&"canonical"===a.rel?r=e:"meta"===o?n.push(e):i.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};a.forEach((function(e){t[e]=[]}));for(var r=[],n=function(n){var i=e[n],c=i.props.id;(c?!t.id[c]:0===o.filter((function(e){var r=i.props[e],n=t[e][r];return n&&!n.props.id})).length)&&(r.unshift(i),a.forEach((function(e){var r=i.props[e];r&&(t[e][r]=i)})))},i=e.length-1;i>=0;i--)n(i);return r}(n)),[r],i)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,r=e.id;if(r)return r&&t.querySelector("#".concat(r));return n.reduce((function(r,n){var o,a=e.getAttribute(n);return a?r.concat((o=t.querySelectorAll("[".concat(n,' = "').concat(a,'"]')),(o=Array.prototype.slice.call(o||[])).filter((function(e){return!e.id})))):r}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=document.createDocumentFragment(),n=0,o=t.length;n<o;n++)r.appendChild(t[n]);e.appendChild(r)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=0,n=t.length;r<n;r++)e.removeChild(t[r])};var n=["property","name","itemprop"],o=n.concat(["itemProp"]),a=o.concat(["id"])},522:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),o=i(r(21)),a=i(r(507));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y,d,m,b=function(e){function t(){return u(this,t),f(this,s(t).apply(this,arguments))}var r,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,(o=[{key:"render",value:function(){return n.default.createElement(a.default,null,n.default.createElement("title",null,this.props.title))}}])&&l(r.prototype,o),i&&l(r,i),t}(n.Component);y=b,d="propTypes",m={title:o.default.string},d in y?Object.defineProperty(y,d,{value:m,enumerable:!0,configurable:!0,writable:!0}):y[d]=m;var g=b;t.default=g,e.exports=t.default},559:function(e,t,r){"use strict";var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function f(e,t){return e(t={exports:{}},t.exports),t.exports}var s=f((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,s=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,d=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.fundamental"):60117,h=r?Symbol.for("react.responder"):60118,v=r?Symbol.for("react.scope"):60119;function O(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case s:case a:case c:case i:case y:return e;default:switch(e=e&&e.$$typeof){case l:case p:case u:return e;default:return t}}case b:case m:case o:return t}}}function P(e){return O(e)===s}t.typeOf=O,t.AsyncMode=f,t.ConcurrentMode=s,t.ContextConsumer=l,t.ContextProvider=u,t.Element=n,t.ForwardRef=p,t.Fragment=a,t.Lazy=b,t.Memo=m,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=y,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===s||e===c||e===i||e===y||e===d||"object"===typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===u||e.$$typeof===l||e.$$typeof===p||e.$$typeof===g||e.$$typeof===h||e.$$typeof===v)},t.isAsyncMode=function(e){return P(e)||O(e)===f},t.isConcurrentMode=P,t.isContextConsumer=function(e){return O(e)===l},t.isContextProvider=function(e){return O(e)===u},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return O(e)===p},t.isFragment=function(e){return O(e)===a},t.isLazy=function(e){return O(e)===b},t.isMemo=function(e){return O(e)===m},t.isPortal=function(e){return O(e)===o},t.isProfiler=function(e){return O(e)===c},t.isStrictMode=function(e){return O(e)===i},t.isSuspense=function(e){return O(e)===y}}));l(s);s.typeOf,s.AsyncMode,s.ConcurrentMode,s.ContextConsumer,s.ContextProvider,s.Element,s.ForwardRef,s.Fragment,s.Lazy,s.Memo,s.Portal,s.Profiler,s.StrictMode,s.Suspense,s.isValidElementType,s.isAsyncMode,s.isConcurrentMode,s.isContextConsumer,s.isContextProvider,s.isElement,s.isForwardRef,s.isFragment,s.isLazy,s.isMemo,s.isPortal,s.isProfiler,s.isStrictMode,s.isSuspense;var p=f((function(e,t){0}));l(p);p.typeOf,p.AsyncMode,p.ConcurrentMode,p.ContextConsumer,p.ContextProvider,p.Element,p.ForwardRef,p.Fragment,p.Lazy,p.Memo,p.Portal,p.Profiler,p.StrictMode,p.Suspense,p.isValidElementType,p.isAsyncMode,p.isConcurrentMode,p.isContextConsumer,p.isContextProvider,p.isElement,p.isForwardRef,p.isFragment,p.isLazy,p.isMemo,p.isPortal,p.isProfiler,p.isStrictMode,p.isSuspense,f((function(e){e.exports=s}));var y=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;function b(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}})()&&Object.assign;var g="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function h(e,t,r,n,o){}h.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function v(){}function O(){}O.resetWarningCache=v;var P=f((function(e){e.exports=function(){function e(e,t,r,n,o,a){if(a!==g){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:O,resetWarningCache:v};return r.PropTypes=r,r}()})),C=P.number,j=P.string,S=P.func,w=P.oneOfType,x=P.node;!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".react-hooks-paginator {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin: 1rem 0; }\n  .react-hooks-paginator .page-item {\n    list-style: none; }\n    .react-hooks-paginator .page-item:first-child .page-link {\n      margin-left: 0;\n      border-top-left-radius: 3px;\n      border-bottom-left-radius: 3px; }\n    .react-hooks-paginator .page-item:last-child .page-link {\n      border-top-right-radius: 3px;\n      border-bottom-right-radius: 3px; }\n    .react-hooks-paginator .page-item:hover .page-link, .react-hooks-paginator .page-item.active .page-link {\n      background-color: #3895d3;\n      border-color: #3895d3;\n      color: #fff; }\n  .react-hooks-paginator .page-link {\n    border: 1px solid #dee2e6;\n    color: #4a4a4a;\n    margin-left: -1px;\n    outline: none;\n    padding: 0.5rem 0.75rem;\n    text-decoration: none;\n    transition: all 0.2s; }\n");var _=function(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e,o=[];n<=t;)o.push(n),n+=r;return o};function E(e){var t=c(Object(n.useState)((function(){return function(){var t=e.totalRecords,r=void 0===t?null:t,n=e.pageLimit,o=void 0===n?20:n,a=e.pageNeighbours,i=void 0===a?0:a;return{pageLimit:o="number"===typeof o?o:20,totalRecords:r="number"===typeof r?r:0,pageNeighbours:i="number"===typeof i?Math.max(0,Math.min(i,2)):0,totalPages:Math.ceil(r/o)}}()})),2),r=t[0],l=t[1],f=Object(n.useRef)(!0),s=Object(n.useCallback)((function(t){var n=Math.max(1,Math.min(t,r.totalPages));e.setCurrentPage(n)}),[r.totalPages,e.pageLimit]);Object(n.useEffect)((function(){s(1)}),[s]),Object(n.useEffect)((function(){e.setOffset((e.currentPage-1)*e.pageLimit)}),[e.currentPage]),Object(n.useEffect)((function(){if(f.current)f.current=!1;else{var t=e.totalRecords,n=Math.ceil(t/r.pageLimit);l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{totalRecords:e.totalRecords,totalPages:n}))}}),[e.totalRecords]);var p=Object(n.useCallback)((function(t){t.preventDefault(),s(e.currentPage-2*r.pageNeighbours-1)}),[e.currentPage]),y=Object(n.useCallback)((function(t){t.preventDefault(),s(e.currentPage+2*r.pageNeighbours+1)}),[e.currentPage,r.pageNeighbours]),d=Object(n.useCallback)((function(){var t=r.totalPages,n=e.currentPage,o=r.pageNeighbours,a=2*r.pageNeighbours+3;if(t>a+2){var i=[],c=n-o,l=n+o,f=t-1,s=c>2?c:2,p=l<f?l:f,y=a-(i=_(s,p)).length-1,d=s>2,m=p<f,b="LEFT";if(d&&!m){var g=_(s-y,s-1);i=[b].concat(u(g),u(i))}else if(!d&&m){var h=_(p+1,p+y);i=[].concat(u(i),u(h),["RIGHT"])}else d&&m&&(i=[b].concat(u(i),["RIGHT"]));return[1].concat(u(i),[t])}return _(1,t)}),[r.totalPages,e.currentPage,r.pageNeighbours]);if(!r.totalRecords)return null;if(1===r.totalPages)return null;var m=e.currentPage,b=d();return o.a.createElement("ul",{className:e.pageContainerClass},b.map((function(t,r){return"LEFT"===t?o.a.createElement("li",{className:e.pageItemClass,key:r},o.a.createElement("button",{className:e.pagePrevClass,onClick:p},e.pagePrevText)):"RIGHT"===t?o.a.createElement("li",{className:e.pageItemClass,key:r},o.a.createElement("button",{className:e.pageNextClass,onClick:y},e.pageNextText)):o.a.createElement("li",{className:"".concat(e.pageItemClass," ").concat(m===t?e.pageActiveClass:null),key:r},o.a.createElement("button",{className:e.pageLinkClass,onClick:function(e){return function(e,t){t.preventDefault(),s(e)}(t,e)}},t))})))}E.defaultProps={pageContainerClass:"react-hooks-paginator",pageActiveClass:"active",pageItemClass:"page-item",pageLinkClass:"page-link",pageNextText:"Next \xbb",pagePrevText:"\xab Prev",pagePrevClass:"page-link",pageNextClass:"page-link"},E.propTypes={currentPage:C,pageActiveClass:j,pageNextText:w([j,x]),pagePrevText:w([j,x]),pagePrevClass:j,pageNextClass:j,pageContainerClass:j,pageItemClass:j,pageLimit:C,pageLinkClass:j,pageNeighbours:C,setCurrentPage:S,setOffset:S,totalRecords:C.isRequired},t.a=E}}]);
//# sourceMappingURL=5.1a37653d.chunk.js.map