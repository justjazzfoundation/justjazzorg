(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.r(t),window.onload=function(){n(document.querySelectorAll(".newspack-newsletters-subscribe")).forEach((function(e){var t=e.querySelector("form");if(t){var r=e.querySelector(".newspack-newsletters-subscribe-response"),n=e.querySelector('input[type="email"]'),o=e.querySelector('input[type="submit"]');t.addEventListener("submit",(function(a){a.preventDefault();var i=new FormData(t);i.has("email")&&i.get("email")&&(n.disabled=!0,o.disabled=!0,r.innerHTML="",fetch(t.getAttribute("action")||window.location.pathname,{method:"POST",headers:{Accept:"application/json"},body:i}).then((function(a){n.disabled=!1,o.disabled=!1,a.json().then((function(n){var o=n.message,i=document.createElement("p");i.innerHTML=o,i.className="message status-".concat(a.status),200===a.status?e.replaceChild(i,t):r.appendChild(i)}))})))}))}}))};var o=window;for(var a in t)o[a]=t[a];t.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();