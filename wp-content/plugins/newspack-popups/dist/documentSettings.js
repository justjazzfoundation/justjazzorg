(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t);const n=window.wp.element,o=window.wp.i18n,p=window.wp.data,s=window.wp.compose,i=window.wp.editPost,a=window.wp.plugins,r=window.wp.components;var __=o.__,u=(0,s.compose)([(0,p.withSelect)((function(e){var t=(0,e("core/editor").getEditedPostAttribute)("meta");return{hasDisabledPopups:t&&t.newspack_popups_has_disabled_popups}})),(0,p.withDispatch)((function(e){var t=e("core/editor").editPost;return{onChange:function(e){t({meta:{newspack_popups_has_disabled_popups:e}})}}}))])((function(e){var t=e.hasDisabledPopups,o=e.onChange;return(0,n.createElement)(i.PluginDocumentSettingPanel,{name:"newsletters-popups-settings-panel",title:__("Newspack Campaigns Settings","newspack-popups")},(0,n.createElement)(r.ToggleControl,{checked:t,onChange:function(){return o(!t)},label:__("Disable prompts on this post or page","newspack-popups")}))}));(0,a.registerPlugin)("newspack-popups-post-status-info",{render:u,icon:!1});var d=window;for(var w in t)d[w]=t[w];t.__esModule&&Object.defineProperty(d,"__esModule",{value:!0})})();