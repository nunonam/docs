(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92],{2417:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[category]/[post]",function(){return n(6489)}])},6489:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return G},default:function(){return K}});var r=n(5893),s=n(3193),a=n(201),i=n(7294),o=n(8093),l=n(2077);function c(){var e=window.location.href,t=(0,i.useState)(!1),n=t[0],s=t[1],a=1,o=-1;(0,i.useEffect)((function(){sessionStorage.getItem(e)?s(sessionStorage.getItem(e)):s(!1)}),[e]);var c=function(t){window.analytics.track("page-feedback",{feedback:t,url:e}),sessionStorage.setItem(e,!0),s(!0)};return(0,r.jsxs)("div",{className:"flex items-center mt-4 mb-4",children:[(0,r.jsx)("strong",{className:"mr-1",children:"Was this page useful?"}),n?(0,r.jsx)("span",{children:"Thank you!"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{size:"xsmall",variant:"secondary",className:"mr-1",onClick:function(e){return c(a)},children:"Yes"}),(0,r.jsx)(l.Z,{size:"xsmall",variant:"secondary",onClick:function(e){return c(o)},children:"No"})]})]})}function u(e){var t=e.title,n=e.subtitle,s=e.banner;return(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("h1",{className:"mb-1 text-4xl font-semibold",children:t}),n&&(0,r.jsx)("p",{className:"text-xl text-secondary",children:n}),s&&(0,r.jsx)("img",{src:s,alt:t})]})}var d=n(4184),f=n.n(d);function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var s=p(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return h(this,n)}}var g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(i,e);var t,n,s,a=j(i);function i(){return m(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"createKebabCase",value:function(e){var t="";return e&&e.toLowerCase&&(t=e.toLowerCase().split(":").join("").split(".").join("").split("(").join("").split(" ").join("-")),t}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.heading;return"api"!==e.category?(0,r.jsx)("a",{className:"text-primary",href:"#".concat(this.createKebabCase(t)),children:(0,r.jsx)("h1",{className:f()("font-semibold",{"text-2l mb-3 mt-4":"h1"===n,"text-xl mb-2 mt-3":"h2"===n,"text-lg mb-2 mt-3":"h3"===n,"text-base mb-1 mt-2":"h4"===n||"h5"===n,"text-sm mb-1 mt-2":"h6"===n}),as:n,id:"".concat(this.createKebabCase(t)),children:t})}):(0,r.jsx)("h1",{className:f()("font-semibold",{"text-2l mb-3 mt-4":"h1"===n,"text-xl mb-2 mt-3":"h2"===n,"text-lg mb-2 mt-3":"h3"===n,"text-base mb-1 mt-2":"h4"===n||"h5"===n,"text-sm mb-1 mt-2":"h6"===n}),as:n,children:t})}}])&&b(t.prototype,n),s&&b(t,s),i}(i.Component),v=n(3746),w=n(7410),k=n(4855),N=n.n(k),O=n(944),_=function(e){var t=e.value,n=e.ariaLabel,s=e.text,a=e.variant,o=e.title,c=e.className,u=e.onCopied,d=(0,i.useState)(!1),f=d[0],m=d[1],b=a||(s?"primary":"text");return(0,r.jsxs)("div",{className:"relative inline-flex",children:[(0,r.jsx)(N(),{text:t,onCopy:function(){m(!0),null!=u&&u(!0),setTimeout((function(){return m(!1)}),1500)},children:(0,r.jsxs)(l.Z,{variant:b,iconOnly:!s,className:"".concat(c," h-[32px]"),ariaLabel:n,title:o,children:[!s&&(0,r.jsx)(O.Z,{name:f?"clipboard-check":"clipboard"}),s]})}),(0,r.jsx)("div",{className:"font-sans pointer-events-none transition absolute z-10 px-1 text-white font-semibold dark:bg-gray-50 dark:text-gray-900 text-sm transform -translate-x-1/2 bg-gray-900 rounded shadow-lg py-sm left-1/2 top-1/2 ".concat(f?"opacity-1 translate-y-1.5":"opacity-0"),children:"Copied"})]})};function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){P(e,t,n[t])}))}return e}function C(e){var t=e.className,s=e.children,a=(0,i.useState)(""),o=a[0],l=a[1],c=(0,i.useState)(""),u=c[0],d=c[1],f=(0,i.useState)([]),m=f[0],b=f[1];return(0,i.useEffect)((function(){if(("undefined"!==typeof n.g?n.g:window).Prism=w.Z,n(8751),n(7013),t){var e=t.split("-")[1];d("zsh"===e?"bash":e),l(e)}2===s.split("------").length&&b(s.split("------"))}),[]),(0,r.jsxs)("div",{className:"max-w-full mt-2 mb-4 border rounded",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between px-2 border-b rounded-t py-sm bg-secondary",children:[(0,r.jsx)("span",{className:"font-sans text-secondary",children:o}),(0,r.jsx)(_,{value:2===m.length?m[0].trim():s.trim(),ariaLabel:"Copy snippet",title:"Copy snippet"})]}),(0,r.jsxs)("div",{className:"w-full p-2 overflow-x-auto",children:[2===m.length&&(0,r.jsx)(v.ZP,S({},v.lG,{code:m[0].trim(),language:u,children:function(e){var t=e.tokens,n=e.getLineProps,s=e.getTokenProps;return(0,r.jsx)("div",{children:t.map((function(e,t){return(0,r.jsx)("div",S({},n({line:e,key:t}),{children:e.map((function(e,t){return(0,r.jsx)("span",S({},s({token:e,key:t})),t)}))}),t)}))})}})),(0,r.jsx)(v.ZP,S({},v.lG,{code:2===m.length?m[1].trim():s.trim(),language:u,children:function(e){var t=e.tokens,n=e.getLineProps,s=e.getTokenProps;return(0,r.jsx)("div",{children:t.map((function(e,t){return(0,r.jsx)("div",S({},n({line:e,key:t}),{children:e.map((function(e,t){return(0,r.jsx)("span",S({},s({token:e,key:t})),t)}))}),t)}))})}}))]})]})}function E(e){var t=e.alt,n=e.src,s=(0,i.useState)(n)[0];return(0,r.jsxs)("span",{className:"block mt-3",children:[(0,r.jsx)("img",{src:s,alt:t,className:"max-h-[600px] mx-auto"}),t&&(0,r.jsx)("span",{className:"block mt-1 mb-4 text-sm text-center text-secondary",children:t})]})}function T(e){var t=e.type,n=e.children;return(0,r.jsxs)("div",{className:f()("my-4 border mb-3 px-3 py-2.5 rounded",{"bg-blue-50 dark:bg-blue-900 border-blue-100 dark:border-blue-800":"note"===t,"border-yellow-200 bg-yellow-50 dark:border-yellow-500 dark:bg-yellow-900":"warning"===t,"bg-purple-50 dark:bg-purple-900 border-purple-100 dark:border-purple-800":"tip"===t}),children:["note"===t&&(0,r.jsx)("strong",{children:"Note"})," ","warning"===t&&(0,r.jsx)("strong",{children:"Warning"})," ","tip"===t&&(0,r.jsx)("strong",{children:"Tip"}),(0,r.jsx)("div",{className:"mt-1 info-block",children:n})]})}function Z(e){var t=e.children;return(0,r.jsx)("code",{children:t})}var L=n(1664);function D(e){var t=e.steps;return(0,r.jsxs)("div",{className:"bg-secondary px-3 pt-2 rounded border mt-4 mb-4",children:[(0,r.jsx)("h1",{className:"font-semibold mb-1",children:"Next steps"}),(0,r.jsx)("ul",{className:"list-disc list-inside",children:t.map((function(e){return(0,r.jsx)("li",{className:"py-sm",children:(0,r.jsx)(L.default,{href:e.link,children:(0,r.jsx)("a",{className:"font-medium",children:e.text})})},e.link)}))})]})}function R(e){var t=e.children;return(0,r.jsx)("table",{children:t})}function U(e){var t=e.lastUpdatedOn,n=e.slug,s=new Date;t&&(s=new Date(Date.parse(t)));return(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b mb-4",children:[(0,r.jsxs)("div",{className:"text-secondary mb-1 sm:mb-0",children:["Last updated on ",new Intl.DateTimeFormat("en-US",{month:"long"}).format(s)," ",s.getDate(),", ",s.getFullYear()]}),(0,r.jsx)(L.default,{href:"https://github.com/chattycloud/docs/blob/main/content/docs/".concat(n,".mdx"),children:(0,r.jsx)("a",{children:"Help us improve this page"})})]})}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){z(e,t,n[t])}))}return e}function B(e){var t=e.title,n=e.subtitle,s=e.banner,a=e.body,i=e.lastUpdatedOn,l=e.slug,d=e.category,f={table:R,code:C,inlineCode:Z,img:E,h2:function(e){return(0,r.jsx)(g,I({},e,{heading:"h2",category:d}))},h3:function(e){return(0,r.jsx)(g,I({},e,{heading:"h3",category:d}))},NextBlock:D,InfoBlock:T};return(0,r.jsxs)("div",{className:"mdx-content",children:[(0,r.jsx)(u,{title:t,subtitle:n,banner:s}),(0,r.jsx)(o.R,I({},a,{components:f,lazy:!0})),(0,r.jsx)(c,{}),(0,r.jsx)(U,{lastUpdatedOn:i,slug:l})]})}var F=n(1669),G=!0;function K(e){var t=e.frontmatter,n=e.body,i=e.fields;return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(F.H,{title:t.title,description:t.subtitle?t.subtitle:"",banner:t.banner?t.banner:"/img/internals/social_share.png",pathname:"".concat(i.slug)}),(0,r.jsx)(B,{title:t.title,subtitle:t.subtitle?t.subtitle:"",banner:t.banner?t.banner:"",body:n,lastUpdatedOn:i.lastUpdatedOn,slug:i.slug}),(0,r.jsx)(s.Z,{})]})}}},function(e){e.O(0,[217,228,476,774,888,179],(function(){return t=2417,e(e.s=t);var t}));var t=e.O();_N_E=t}]);