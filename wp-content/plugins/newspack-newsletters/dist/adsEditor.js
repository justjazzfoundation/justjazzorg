(()=>{var e={4184:(e,t)=>{var n;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&e.push(a)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.apply(this,arguments)}n.r(r);const t=window.wp.element;var i=n(4184),o=n.n(i);const a=window.wp.i18n,s=window.wp.data,l=window.wp.compose,c=window.wp.editPost,p=window.wp.plugins,u=window.wp.components,d=window.wp.date;var __=a.__,w=(0,l.compose)([(0,s.withSelect)((function(e){var t=(0,e("core/editor").getEditedPostAttribute)("meta");return{expiryDate:t.expiry_date,positionInContent:t.position_in_content}})),(0,s.withDispatch)((function(e){return{editPost:e("core/editor").editPost}}))])((function(n){var r,i=n.expiryDate,a=n.positionInContent,s=n.editPost;if(i){var l=(0,d.format)("M j Y",i),p=(0,d.isInTheFuture)(i);r={children:p?"".concat(__("This ad will expire on ","newspack-newsletters")," ").concat(l,"."):__("The expiration date is set in the past. This ad will not be displayed.","newspack-newsletters"),status:p?"info":"warning"}}return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(c.PluginDocumentSettingPanel,{name:"newsletters-ads-settings-panel",title:__("Ad settings","newspack-newsletters")},(0,t.createElement)(u.RangeControl,{label:__("Approximate position (in percent)"),value:a,onChange:function(e){return s({meta:{position_in_content:e}})},min:0,max:100}),(0,t.createElement)(u.BaseControl,{className:o()("newspack-newsletters__date-picker",{"newspack-newsletters__date-picker--has-no-date":!i}),label:__("Expiration Date","newspack-newsletters")},(0,t.createElement)(u.DatePicker,{currentDate:i,onChange:function(e){return s({meta:{expiry_date:e}})}}),i?(0,t.createElement)("div",{style:{textAlign:"center"}},(0,t.createElement)(u.Button,{isSecondary:!0,isLink:!0,isDestructive:!0,onClick:function(){return s({meta:{expiry_date:null}})}},__("Remove expiry date","newspack-newsletters"))):null)),r?(0,t.createElement)(c.PluginPrePublishPanel,null,(0,t.createElement)(u.Notice,e({isDismissible:!1},r))):null)}));(0,p.registerPlugin)("newspack-newsletters-sidebar",{render:w,icon:null})})();var i=window;for(var o in r)i[o]=r[o];r.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();