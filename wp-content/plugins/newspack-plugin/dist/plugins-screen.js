(()=>{"use strict";var e,n={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(n),e=jQuery,newspack_plugin_info.plugins.forEach((function(n){const l=e('tr[data-slug="'+n+'"]');l.length&&l.addClass("newspack-plugin"),newspack_plugin_info.installed_plugins.includes(n)||l.addClass("uninstalled")}));var l=window;for(var a in n)l[a]=n[a];n.__esModule&&Object.defineProperty(l,"__esModule",{value:!0})})();