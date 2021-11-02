(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[55],{507:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=o(a(21)),l=o(a(39)),c=a(521);function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,E,b,v=function(e){function t(){return u(this,t),s(this,d(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a=t,(r=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&l.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var a=n.default.createElement("div",{className:"react-head-temp"},t);l.default.render(a,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var a=e.temporaryElement.querySelector(".react-head-temp");if(null!==a){var n=Array.prototype.slice.call(a.children),r=document.head,l=r.innerHTML;(n=(n=n.filter((function(e){return-1===l.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var a=(0,c.getDuplicateTitle)();a&&(0,c.removeChild)(r,a)}else if("meta"===t){var n=(0,c.getDuplicateMeta)(e);n&&(0,c.removeChild)(r,n)}else if("link"===t&&"canonical"===e.rel){var l=(0,c.getDuplicateCanonical)(e);l&&(0,c.removeChild)(r,l)}})),(0,c.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&m(a.prototype,r),o&&m(a,o),t}(n.Component);p=v,E="contextTypes",b={extract:r.default.func},E in p?Object.defineProperty(p,E,{value:b,enumerable:!0,configurable:!0,writable:!0}):p[E]=b;var y=v;t.default=y,e.exports=t.default},509:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(119);t.a=function(e){var t=e.imageUrl,a=e.logoClass;return r.a.createElement("div",{className:"".concat(a||"")},r.a.createElement(l.b,{to:"/ecommerce/"},r.a.createElement("img",{alt:"",src:"/ecommerce"+t})))}},511:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(75);t.a=function(e){var t=e.currency,a=e.setCurrency,n=e.currentLanguageCode,c=e.dispatch,o=function(e){var t=e.target.value;c(Object(l.changeLanguage)(t))},i=function(e){var t=e.target.value;a(t)};return r.a.createElement("div",{className:"language-currency-wrap"},r.a.createElement("div",{className:"same-language-currency language-style"},r.a.createElement("span",null,"en"===n?"English":"fn"===n?"French":"de"===n?"Germany":""," ",r.a.createElement("i",{className:"fa fa-angle-down"})),r.a.createElement("div",{className:"lang-car-dropdown"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{value:"en",onClick:function(e){return o(e)}},"English")),r.a.createElement("li",null,r.a.createElement("button",{value:"fn",onClick:function(e){return o(e)}},"French")),r.a.createElement("li",null,r.a.createElement("button",{value:"de",onClick:function(e){return o(e)}},"Germany"))))),r.a.createElement("div",{className:"same-language-currency use-style"},r.a.createElement("span",null,t.currencyName," ",r.a.createElement("i",{className:"fa fa-angle-down"})),r.a.createElement("div",{className:"lang-car-dropdown"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{value:"USD",onClick:function(e){return i(e)}},"USD")),r.a.createElement("li",null,r.a.createElement("button",{value:"EUR",onClick:function(e){return i(e)}},"EUR")),r.a.createElement("li",null,r.a.createElement("button",{value:"GBP",onClick:function(e){return i(e)}},"GBP"))))),r.a.createElement("div",{className:"same-language-currency"},r.a.createElement("p",null,"Call Us 3965410")))}},512:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(119);t.a=function(e){var t=e.footerLogo,a=e.spaceBottomClass;return r.a.createElement("div",{className:"copyright ".concat(a||"")},r.a.createElement("div",{className:"footer-logo"},r.a.createElement(l.b,{to:"/ecommerce/"},r.a.createElement("img",{alt:"",src:"/ecommerce"+t}))),r.a.createElement("p",null,"\xa9 2020"," ",r.a.createElement("a",{href:"//hasthemes.com",rel:"noopener noreferrer",target:"_blank"},"Flone"),".",r.a.createElement("br",null)," All Rights Reserved"))}},513:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var n=c(a(520)),r=c(a(507)),l=c(a(522));function c(e){return e&&e.__esModule?e:{default:e}}var o=r.default;t.default=o},514:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(525),c=function(e){var t,a=e.status,n=e.message,l=e.onValidated;return r.a.createElement("div",{className:"subscribe-form"},r.a.createElement("div",{className:"mc-form"},r.a.createElement("div",null,r.a.createElement("input",{id:"mc-form-email",className:"email",ref:function(e){return t=e},type:"email",placeholder:"Enter your email address..."})),r.a.createElement("div",{className:"clear"},r.a.createElement("button",{className:"button",onClick:function(){t&&t.value.indexOf("@")>-1&&l({EMAIL:t.value}),document.getElementById("mc-form-email").value=""}},"SUBSCRIBE"))),"sending"===a&&r.a.createElement("div",{style:{color:"#3498db",fontSize:"12px"}},"sending..."),"error"===a&&r.a.createElement("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===a&&r.a.createElement("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}))},o=function(e){var t=e.mailchimpUrl;return r.a.createElement("div",null,r.a.createElement(l.a,{url:t,render:function(e){var t=e.subscribe,a=e.status,n=e.message;return r.a.createElement(c,{status:a,message:n,onValidated:function(e){return t(e)}})}}))};t.a=function(e){var t=e.spaceBottomClass,a=e.spaceLeftClass,n=e.sideMenu;return r.a.createElement("div",{className:"footer-widget ".concat(t||""," ").concat(n?"ml-ntv5":a||"")},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"SUBSCRIBE")),r.a.createElement("div",{className:"subscribe-style"},r.a.createElement("p",null,"Get E-mail updates about our latest shop and special offers."),r.a.createElement(o,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})))}},515:function(e,t,a){"use strict";var n=a(506),r=a(0),l=a.n(r),c=a(119),o=a(527),i=a(512),u=a(514);t.a=function(e){var t=e.backgroundColorClass,a=e.spaceTopClass,m=e.spaceBottomClass,s=e.containerClass,d=e.extraFooterClass,f=e.sideMenu,p=Object(r.useState)(0),E=Object(n.a)(p,2),b=E[0],v=E[1],y=Object(r.useState)(0),g=Object(n.a)(y,2),h=g[0],N=g[1];Object(r.useEffect)((function(){return N(100),window.addEventListener("scroll",w),function(){window.removeEventListener("scroll",w)}}),[]);var w=function(){v(window.scrollY)};return l.a.createElement("footer",{className:"footer-area ".concat(t||""," ").concat(a||""," ").concat(m||""," ").concat(d||"")},l.a.createElement("div",{className:"".concat(s||"container")},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"".concat(f?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement(i.a,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})),l.a.createElement("div",{className:"".concat(f?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement("div",{className:"footer-widget mb-30 ml-30"},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"ABOUT US")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"/ecommerce/about"},"About us")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/ecommerce#/"},"Store location")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/ecommerce/contact"},"Contact")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/ecommerce#/"},"Orders tracking")))))),l.a.createElement("div",{className:"".concat(f?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement("div",{className:"".concat(f?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50")},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"USEFUL LINKS")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"/ecommerce#/"},"Returns")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/ecommerce#/"},"Support Policy")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/ecommerce#/"},"Size guide")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/ecommerce#/"},"FAQs")))))),l.a.createElement("div",{className:"".concat(f?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6")},l.a.createElement("div",{className:"".concat(f?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75")},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"FOLLOW US")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer"},"Facebook")),l.a.createElement("li",null,l.a.createElement("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer"},"Twitter")),l.a.createElement("li",null,l.a.createElement("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer"},"Instagram")),l.a.createElement("li",null,l.a.createElement("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer"},"Youtube")))))),l.a.createElement("div",{className:"".concat(f?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6")},l.a.createElement(u.a,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:f})))),l.a.createElement("button",{className:"scroll-top ".concat(b>h?"show":""),onClick:function(){o.animateScroll.scrollToTop()}},l.a.createElement("i",{className:"fa fa-angle-double-up"})))}},519:function(e,t,a){"use strict";var n=a(506),r=a(0),l=a.n(r),c=a(509),o=a(516),i=a(518),u=a(517),m=a(75),s=a(74),d=a(160),f=a(511),p=Object(s.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(t){e(Object(d.b)(t))}}}))(Object(m.multilanguage)((function(e){var t=e.currency,a=e.setCurrency,n=e.currentLanguageCode,r=e.dispatch,c=e.borderStyle;return l.a.createElement("div",{className:"header-top-wap ".concat("fluid-border"===c?"border-bottom":"")},l.a.createElement(f.a,{currency:t,setCurrency:a,currentLanguageCode:n,dispatch:r}),l.a.createElement("div",{className:"header-offer"},l.a.createElement("p",null,"Free delivery on order over"," ",l.a.createElement("span",null,t.currencySymbol+(200*t.currencyRate).toFixed(2)))))})));t.a=function(e){var t=e.layout,a=e.top,m=e.borderStyle,s=e.headerPaddingClass,d=e.headerBgClass,f=Object(r.useState)(0),E=Object(n.a)(f,2),b=E[0],v=E[1],y=Object(r.useState)(0),g=Object(n.a)(y,2),h=g[0],N=g[1];Object(r.useEffect)((function(){var e=document.querySelector(".sticky-bar");return N(e.offsetTop),window.addEventListener("scroll",w),function(){window.removeEventListener("scroll",w)}}),[]);var w=function(){v(window.scrollY)};return l.a.createElement("header",{className:"header-area clearfix ".concat(d||"")},l.a.createElement("div",{className:"".concat(s||""," ").concat("visible"===a?"d-none d-lg-block":"d-none"," header-top-area ").concat("fluid-border"===m?"border-none":"")},l.a.createElement("div",{className:"container-fluid"===t?t:"container"},l.a.createElement(p,{borderStyle:m}))),l.a.createElement("div",{className:" ".concat(s||""," sticky-bar header-res-padding clearfix ").concat(b>h?"stick":"")},l.a.createElement("div",{className:"container-fluid"===t?t:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4"},l.a.createElement(c.a,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})),l.a.createElement("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block"},l.a.createElement(o.a,null)),l.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8"},l.a.createElement(i.a,null)))),l.a.createElement(u.a,null)))}},520:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=a(0),l=(n=a(21))&&n.__esModule?n:{default:n};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return o(this,t),u(this,m(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),a=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return r.Children.only(this.props.children)}}])&&i(a.prototype,n),l&&i(a,l),t}(r.Component);!function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(d,"childContextTypes",{extract:l.default.func});var f=d;t.default=f,e.exports=t.default},521:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,a=null,n=[],c=[];return e.forEach((function(e){var r=e.type,l=e.props;"title"===r?t=e:"link"===r&&"canonical"===l.rel?a=e:"meta"===r?n.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};l.forEach((function(e){t[e]=[]}));for(var a=[],n=function(n){var c=e[n],o=c.props.id;(o?!t.id[o]:0===r.filter((function(e){var a=c.props[e],n=t[e][a];return n&&!n.props.id})).length)&&(a.unshift(c),l.forEach((function(e){var a=c.props[e];a&&(t[e][a]=c)})))},c=e.length-1;c>=0;c--)n(c);return a}(n)),[a],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,a=e.id;if(a)return a&&t.querySelector("#".concat(a));return n.reduce((function(a,n){var r,l=e.getAttribute(n);return l?a.concat((r=t.querySelectorAll("[".concat(n,' = "').concat(l,'"]')),(r=Array.prototype.slice.call(r||[])).filter((function(e){return!e.id})))):a}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=document.createDocumentFragment(),n=0,r=t.length;n<r;n++)a.appendChild(t[n]);e.appendChild(a)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=0,n=t.length;a<n;a++)e.removeChild(t[a])};var n=["property","name","itemprop"],r=n.concat(["itemProp"]),l=r.concat(["id"])},522:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=c(a(21)),l=c(a(507));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,p,E,b=function(e){function t(){return i(this,t),m(this,s(t).apply(this,arguments))}var a,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(r=[{key:"render",value:function(){return n.default.createElement(l.default,null,n.default.createElement("title",null,this.props.title))}}])&&u(a.prototype,r),c&&u(a,c),t}(n.Component);f=b,p="propTypes",E={title:r.default.string},p in f?Object.defineProperty(f,p,{value:E,enumerable:!0,configurable:!0,writable:!0}):f[p]=E;var v=b;t.default=v,e.exports=t.default},523:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(519),c=a(515);t.a=function(e){var t=e.children,a=e.headerContainerClass,o=e.headerTop,i=e.headerPaddingClass;return r.a.createElement(n.Fragment,null,r.a.createElement(l.a,{layout:a,top:o,headerPaddingClass:i}),t,r.a.createElement(c.a,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},526:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(119),c=a(162);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(c.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:l.c,finalItem:"span"}))))}},763:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(119),c=a(513),o=a.n(c),i=a(74),u=a(162),m=a(505),s=a(523),d=a(526);t.default=Object(i.connect)((function(e){return{cartItems:e.cartData,currency:e.currencyData}}))((function(e){var t=e.location,a=e.cartItems,c=e.currency,i=t.pathname,f=0;return r.a.createElement(n.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("title",null,"Flone | Checkout"),r.a.createElement("meta",{name:"description",content:"Checkout page of flone react minimalist eCommerce template."})),r.a.createElement(u.BreadcrumbsItem,{to:"/ecommerce/"},"Home"),r.a.createElement(u.BreadcrumbsItem,{to:"/ecommerce"+i},"Checkout"),r.a.createElement(s.a,{headerTop:"visible"},r.a.createElement(d.a,null),r.a.createElement("div",{className:"checkout-area pt-95 pb-100"},r.a.createElement("div",{className:"container"},a&&a.length>=1?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-7"},r.a.createElement("div",{className:"billing-info-wrap"},r.a.createElement("h3",null,"Billing Details"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-md-6"},r.a.createElement("div",{className:"billing-info mb-20"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text"}))),r.a.createElement("div",{className:"col-lg-6 col-md-6"},r.a.createElement("div",{className:"billing-info mb-20"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text"}))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"billing-info mb-20"},r.a.createElement("label",null,"Company Name"),r.a.createElement("input",{type:"text"}))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"billing-select mb-20"},r.a.createElement("label",null,"Country"),r.a.createElement("select",null,r.a.createElement("option",null,"Select a country"),r.a.createElement("option",null,"Azerbaijan"),r.a.createElement("option",null,"Bahamas"),r.a.createElement("option",null,"Bahrain"),r.a.createElement("option",null,"Bangladesh"),r.a.createElement("option",null,"Barbados")))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"billing-info mb-20"},r.a.createElement("label",null,"Street Address"),r.a.createElement("input",{className:"billing-address",placeholder:"House number and street name",type:"text"}),r.a.createElement("input",{placeholder:"Apartment, suite, unit etc.",type:"text"}))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"billing-info mb-20"},r.a.createElement("label",null,"Town / City"),r.a.createElement("input",{type:"text"}))),r.a.createElement("div",{className:"col-lg-6 col-md-6"},r.a.createElement("div",{className:"billing-info mb-20"},r.a.createElement("label",null,"State / County"),r.a.createElement("input",{type:"text"}))),r.a.createElement("div",{className:"col-lg-6 col-md-6"},r.a.createElement("div",{className:"billing-info mb-20"},r.a.createElement("label",null,"Postcode / ZIP"),r.a.createElement("input",{type:"text"}))),r.a.createElement("div",{className:"col-lg-6 col-md-6"},r.a.createElement("div",{className:"billing-info mb-20"},r.a.createElement("label",null,"Phone"),r.a.createElement("input",{type:"text"}))),r.a.createElement("div",{className:"col-lg-6 col-md-6"},r.a.createElement("div",{className:"billing-info mb-20"},r.a.createElement("label",null,"Email Address"),r.a.createElement("input",{type:"text"})))),r.a.createElement("div",{className:"additional-info-wrap"},r.a.createElement("h4",null,"Additional information"),r.a.createElement("div",{className:"additional-info"},r.a.createElement("label",null,"Order notes"),r.a.createElement("textarea",{placeholder:"Notes about your order, e.g. special notes for delivery. ",name:"message",defaultValue:""}))))),r.a.createElement("div",{className:"col-lg-5"},r.a.createElement("div",{className:"your-order-area"},r.a.createElement("h3",null,"Your order"),r.a.createElement("div",{className:"your-order-wrap gray-bg-4"},r.a.createElement("div",{className:"your-order-product-info"},r.a.createElement("div",{className:"your-order-top"},r.a.createElement("ul",null,r.a.createElement("li",null,"Product"),r.a.createElement("li",null,"Total"))),r.a.createElement("div",{className:"your-order-middle"},r.a.createElement("ul",null,a.map((function(e,t){var a=Object(m.a)(e.price,e.discount),n=(e.price*c.currencyRate).toFixed(2),l=(a*c.currencyRate).toFixed(2);return f+=null!=a?l*e.quantity:n*e.quantity,r.a.createElement("li",{key:t},r.a.createElement("span",{className:"order-middle-left"},e.name," X ",e.quantity)," ",r.a.createElement("span",{className:"order-price"},null!==a?c.currencySymbol+(l*e.quantity).toFixed(2):c.currencySymbol+(n*e.quantity).toFixed(2)))})))),r.a.createElement("div",{className:"your-order-bottom"},r.a.createElement("ul",null,r.a.createElement("li",{className:"your-order-shipping"},"Shipping"),r.a.createElement("li",null,"Free shipping"))),r.a.createElement("div",{className:"your-order-total"},r.a.createElement("ul",null,r.a.createElement("li",{className:"order-total"},"Total"),r.a.createElement("li",null,c.currencySymbol+f.toFixed(2))))),r.a.createElement("div",{className:"payment-method"})),r.a.createElement("div",{className:"place-order mt-25"},r.a.createElement("button",{className:"btn-hover"},"Place Order"))))):r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"item-empty-area text-center"},r.a.createElement("div",{className:"item-empty-area__icon mb-30"},r.a.createElement("i",{className:"pe-7s-cash"})),r.a.createElement("div",{className:"item-empty-area__text"},"No items found in cart to checkout ",r.a.createElement("br",null)," ",r.a.createElement(l.b,{to:"/ecommerce/shop-grid-standard"},"Shop Now")))))))))}))}}]);
//# sourceMappingURL=55.b61b9c7a.chunk.js.map