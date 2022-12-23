(()=>{var e={4184:(e,t)=>{var n;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=l.apply(null,n);s&&e.push(s)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},6531:(e,t,n)=>{"use strict";n.r(t),n.d(t,{blocks:()=>S});var r={};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}n.r(r),n.d(r,{metadata:()=>k,name:()=>O,settings:()=>j});const s=window.wp.blocks,o=window.wp.element,i=window.wp.primitives,c=(0,o.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(i.Path,{fillRule:"evenodd",d:"M6 5.5h12a.5.5 0 01.5.5v7H14a2 2 0 11-4 0H5.5V6a.5.5 0 01.5-.5zm-.5 9V18a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-3.5h-3.337a3.5 3.5 0 01-6.326 0H5.5zM4 13V6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2v-5z",clipRule:"evenodd"}));function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],_n=!0,s=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);_n=!0);}catch(o){s=!0,l=o}finally{try{_n||null==n.return||n.return()}finally{if(s)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=n(4184),d=n.n(m);const f=window.lodash,w=window.wp.apiFetch;var y=n.n(w);const b=window.wp.i18n,h=window.wp.components,g=window.wp.blockEditor;var __=b.__,v=function(e){return"newspack-newsletters-list-checkbox-"+e},E=window.newspack_newsletters_blocks.settings_url;const k=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"newspack-newsletters/subscribe","title":"Newsletter Subscription Form","category":"newspack","description":"Subscribe an email to a newsletter list.","textdomain":"newspack-newsletters","attributes":{"placeholder":{"type":"string","default":"Email Address"},"displayNameField":{"type":"boolean","default":false},"displayLastNameField":{"type":"boolean","default":false},"namePlaceholder":{"type":"string","default":""},"lastNamePlaceholder":{"type":"string","default":"Last Name"},"label":{"type":"string","default":"Subscribe"},"displayDescription":{"type":"boolean","default":true},"lists":{"type":"array","default":[],"items":{"type":"string"}}},"supports":{"html":false,"align":true}}');for(var O=k.name,j={icon:{src:c,foreground:"#36f"},edit:function(e){var t=e.setAttributes,n=e.attributes,r=n.placeholder,l=n.displayNameField,a=n.displayLastNameField,s=n.namePlaceholder,i=n.lastNamePlaceholder,c=n.label,u=n.lists,m=n.displayDescription,w=(0,g.useBlockProps)(),b=p((0,o.useState)(!1),2),k=b[0],O=b[1],j=p((0,o.useState)({}),2),S=j[0],N=j[1];(0,o.useEffect)((function(){O(!0),y()({path:"/newspack-newsletters/v1/lists_config"}).then(N).finally((function(){return O(!1)}))}),[]),(0,o.useEffect)((function(){var e=Object.keys(S);!e.length||u.length&&(0,f.intersection)(u,e).length||t({lists:[Object.keys(S)[0]]})}),[S]);var P=function(){return s||__(a?"First Name":"Name","newspack-newsletters")};return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(g.InspectorControls,null,(0,o.createElement)(h.PanelBody,{title:__("Form settings","newspack-newsletters")},(0,o.createElement)(h.TextControl,{label:__("Email placeholder","newspack-newsletters"),value:r,onChange:function(e){return t({placeholder:e})}}),(0,o.createElement)(h.ToggleControl,{label:__("Display name field","newspack-newsletters"),checked:l,onChange:function(e){return t({displayNameField:e})}}),l&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(h.TextControl,{label:__("Name placeholder","newspack-newsletters"),value:s,placeholder:P(),onChange:function(e){return t({namePlaceholder:e})}}),(0,o.createElement)(h.ToggleControl,{label:__('Display "Last Name" field',"newspack-newsletters"),checked:a,onChange:function(e){return t({displayLastNameField:e})}}),a&&(0,o.createElement)(h.TextControl,{label:__('"Last Name" placeholder',"newspack-newsletters"),value:i,onChange:function(e){return t({lastNamePlaceholder:e})}})),(0,o.createElement)(h.TextControl,{label:__("Button label","newspack-newsletters"),value:c,onChange:function(e){return t({label:e})}}),u.length>1&&(0,o.createElement)(h.ToggleControl,{label:__("Display list description","newspack-newsletters"),checked:m,onChange:function(){return t({displayDescription:!m})}})),(0,o.createElement)(h.PanelBody,{title:__("Subscription Lists","newspack-newsletters")},k&&(0,o.createElement)(h.Spinner,null),!k&&!Object.keys(S).length&&(0,o.createElement)("div",{style:{marginBottom:"1.5rem"}},(0,o.createElement)(h.Notice,{isDismissible:!1,status:"error"},__("You must enable lists for subscription.","newspack-newsletters"))),u.length<1&&(0,o.createElement)("div",{style:{marginBottom:"1.5rem"}},(0,o.createElement)(h.Notice,{isDismissible:!1,status:"error"},__("You must select at least one list.","newspack-newsletters"))),Object.keys(S).map((function(e){return(0,o.createElement)(h.ToggleControl,{key:e,label:S[e].title,checked:u.includes(e),onChange:function(){u.includes(e)?t({lists:u.filter((function(t){return t!==e}))}):t({lists:u.concat(e)})}})})),(0,o.createElement)("p",null,(0,o.createElement)("a",{href:E},__("Manage your subscription lists","newspack-newsletters"))))),(0,o.createElement)("div",w,k?(0,o.createElement)(h.Spinner,null):(0,o.createElement)("div",{className:d()({"newspack-newsletters-subscribe":!0,"multiple-lists":u.length>1})},(0,o.createElement)("form",{onSubmit:function(e){return e.preventDefault()}},u.length>1&&(0,o.createElement)("div",{className:"newspack-newsletters-lists"},(0,o.createElement)("ul",null,u.map((function(e){var t,n;return(0,o.createElement)("li",{key:e},(0,o.createElement)("span",{className:"list-checkbox"},(0,o.createElement)("input",{id:v(e),type:"checkbox",checked:!0,readOnly:!0})),(0,o.createElement)("span",{className:"list-details"},(0,o.createElement)("label",{htmlFor:v(e)},(0,o.createElement)("span",{className:"list-title"},null===(t=S[e])||void 0===t?void 0:t.title),m&&(0,o.createElement)("span",{className:"list-description"},null===(n=S[e])||void 0===n?void 0:n.description))))})))),l&&(0,o.createElement)("div",{className:"newspack-newsletters-name-input"},(0,o.createElement)("input",{type:"text",placeholder:P()}),a&&(0,o.createElement)("input",{type:"text",placeholder:i})),(0,o.createElement)("div",{className:"newspack-newsletters-email-input"},(0,o.createElement)("input",{type:"email",placeholder:r}),(0,o.createElement)("input",{type:"submit",value:c}))))))}},S=[r],N=function(e){if(e){var t=e.metadata,n=e.settings,r=e.name;(0,s.registerBlockType)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:r},t),n)}},P=0,x=S;P<x.length;P++){N(x[P])}}},t={};function n(r){var l=t[r];if(void 0!==l)return l.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r=n(6531),l=window;for(var a in r)l[a]=r[a];r.__esModule&&Object.defineProperty(l,"__esModule",{value:!0})})();