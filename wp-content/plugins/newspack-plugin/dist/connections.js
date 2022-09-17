(()=>{"use strict";var e,t={2069:(e,t,n)=>{n.r(t),n(5674);var a=n(9307),c=n(5736),r=n(3520),s=n(9674),i=n(6989),o=n.n(i);const l=c.__,p={jetpack:{pluginSlug:"jetpack",editLink:"admin.php?page=jetpack#/settings",name:"Jetpack",fetchStatus:()=>o()({path:"/newspack/v1/plugins/jetpack"}).then((e=>({jetpack:{status:e.Configured?e.Status:"inactive"}})))},"google-site-kit":{pluginSlug:"google-site-kit",editLink:"admin.php?page=googlesitekit-splash",name:l("Site Kit by Google","newspack"),fetchStatus:()=>o()({path:"/newspack/v1/plugins/google-site-kit"}).then((e=>({"google-site-kit":{status:e.Configured?e.Status:"inactive"}})))}},u=e=>{var t;return e.pluginSlug?(0,a.createElement)(r.OQ,{plugin:e.pluginSlug,editLink:e.editLink,compact:!0,isLink:!0},l("Connect","newspack")):e.url?(0,a.createElement)(r.zx,{isLink:!0,href:e.url,target:"_blank"},l("Connect","newspack")):"unavailable_site_id"===(null===(t=e.error)||void 0===t?void 0:t.code)?(0,a.createElement)("span",{className:"i newspack-error"},l("Jetpack connection required","newspack")):void 0},d=e=>{let{setError:t}=e;const[n,c]=r.PT.useObjectState(p),s=Object.values(n);return(0,a.useEffect)((()=>{s.forEach((async e=>{const n=await e.fetchStatus().catch(t);c(n)}))}),[]),(0,a.createElement)(a.Fragment,null,s.map((e=>{const t="inactive"===e.status,n=!e.status;return(0,a.createElement)(r.fM,{key:e.name,title:e.name,description:`${l("Status:","newspack")} ${l(n?"Loading…":t?"Not connected":"Connected","newspack")}`,actionText:t?u(e):null,checkbox:t||n?"unchecked":"checked",badge:e.badge,indent:e.indent,isMedium:!0})})))};var h=n(8635),m=n(9630),w=n(5609);const k=c.__,g=e=>{let{setError:t}=e;const[n,s]=(0,a.useState)({}),[i,l]=(0,a.useState)(!1),[p,u]=(0,a.useState)(),[d,h]=(0,a.useState)(!1),g=(0,a.useRef)(null),v=Boolean(n&&n.username),E=e=>t(e.message||k("Something went wrong.","newspack")),f=()=>{l(!1),u()};(0,a.useEffect)((()=>{h(!0),o()({path:"/newspack/v1/oauth/mailchimp"}).then((e=>{s(e)})).catch(E).finally((()=>h(!1)))}),[]),(0,a.useEffect)((()=>{i&&g.current.querySelector("input").focus()}),[i]);const b=()=>{t(),h(!0),o()({path:"/newspack/v1/oauth/mailchimp",method:"POST",data:{api_key:p}}).then((e=>{s(e)})).catch((e=>{t(e.message||k("Something went wrong during verification of your Mailchimp API key.","newspack"))})).finally((()=>{h(!1),f()}))};return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(r.fM,{title:"Mailchimp",description:`${k("Status:","newspack")} ${d?k("Loading…","newspack"):v?(0,c.sprintf)(k("Connected as %s","newspack"),n.username):k("Not connected","newspack")}`,checkbox:v?"checked":"unchecked",actionText:(0,a.createElement)(r.zx,{isLink:!0,isDestructive:v,onClick:v?()=>{h(!0),o()({path:"/newspack/v1/oauth/mailchimp",method:"DELETE"}).then((()=>{s({}),h(!1)})).catch(E)}:()=>l(!0),disabled:d},k(v?"Disconnect":"Connect","newspack")),isMedium:!0}),i&&(0,a.createElement)(r.u_,{title:k("Add Mailchimp API Key","newspack"),onRequestClose:f},(0,a.createElement)("div",{ref:g},(0,a.createElement)(r.rj,{columns:1,gutter:8},(0,a.createElement)(r.w4,{placeholder:"123457103961b1f4dc0b2b2fd59c137b-us1",label:k("Mailchimp API Key","newspack"),hideLabelFromVision:!0,value:p,onChange:u,onKeyDown:e=>{m.ENTER===e.keyCode&&""!==p&&(e.preventDefault(),b())}}),(0,a.createElement)("p",null,(0,a.createElement)(w.ExternalLink,{href:"https://mailchimp.com/help/about-api-keys/#Find_or_generate_your_API_key"},k("Find or generate your API key","newspack"))))),(0,a.createElement)(r.Zb,{buttonsCard:!0,noBorder:!0,className:"justify-end"},(0,a.createElement)(r.zx,{isSecondary:!0,onClick:f},k("Cancel","newspack")),(0,a.createElement)(r.zx,{isPrimary:!0,disabled:!p,onClick:b},k(d?"Connecting…":v?"Connected":"Connect","newspack")))))};var v=n(4184),E=n.n(v),f=n(2819);const b=c.__,y=[{service:"google_analytics",label:b("Google Analytics","newspack")},{service:"mailchimp",label:b("Mailchimp","newspack")},{service:"stripe",label:b("Stripe","newspack")},{service:"double_click_publishers",label:b("Google Ad Manager","newspack")},{service:"facebook_pages",label:b("Facebook Pages","newspack")}],_=e=>{let{setError:t}=e;const[n,c]=(0,a.useState)(),[s,i]=(0,a.useState)(!1),[l,p]=(0,a.useState)(null),u=e=>t(e.message||b("Something went wrong.","newspack")),d=s||!(void 0!==n)||!l;return(0,a.useEffect)((()=>{i(!0),o()({path:"/newspack/v1/oauth/fivetran"}).then((e=>{c(e.connections_statuses),p(e.has_accepted_tos)})).catch(u).finally((()=>i(!1)))}),[]),(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",null,b("In order to use the this features, you must read and accept","newspack")," ",(0,a.createElement)("a",{href:"https://newspack.pub/terms-of-service/"},b("Newspack Terms of Service","newspack")),":"),(0,a.createElement)(w.CheckboxControl,{className:E()("mt1",{"o-50":null===l}),checked:l,disabled:null===l,onChange:e=>{o()({path:"/newspack/v1/oauth/fivetran-tos",method:"POST",data:{has_accepted:e}}),p(e)},label:b("I've read and accept Newspack Terms of Service","newspack")}),y.map((e=>{const t=((e,t)=>{const n=void 0!==t,a=(0,f.get)(t,[e.service,"setup_state"]),c=(0,f.get)(t,[e.service,"sync_state"]),r=(0,f.get)(t,[e.service,"schema_status"]),s=r&&"ready"!==r||"paused"===c;let i="-";return a?"ready"===r?i=`${a}, ${c}`:s&&(i=`${a}, ${c}. ${b("Sync is in progress – please check back in a while.","newspack")}`):n&&(i=b("Not connected","newspack")),{label:i,isConnected:"connected"===a,isPending:s}})(e,n);return(0,a.createElement)(r.fM,{key:e.service,title:e.label,description:`${b("Status:","newspack")} ${t.label}`,isPending:t.isPending,actionText:(0,a.createElement)(w.Button,{disabled:d,onClick:()=>(e=>{let{service:t}=e;i(!0),o()({path:`/newspack/v1/oauth/fivetran/${t}`,method:"POST",data:{service:t}}).then((e=>{let{url:t}=e;return window.location=t})).catch(u)})(e),isLink:!0},t.isConnected?b("Re-connect","newspack"):b("Connect","newspack")),checkbox:t.isConnected?"checked":"unchecked",isMedium:!0})})))},S=c.__,C=()=>{const[e,t]=(0,a.useState)(null),[n,c]=(0,a.useState)(!1),[s,i]=(0,a.useState)({}),[l,p]=(0,a.useState)({});(0,a.useEffect)((async()=>{c(!0);try{i(await o()({path:"/newspack/v1/recaptcha"}))}catch(e){t(e.message||S("Error fetching settings.","newspack"))}finally{c(!1)}}),[]);const u=async e=>{t(null),c(!0);try{i(await o()({path:"/newspack/v1/recaptcha",method:"POST",data:e})),p({})}catch(e){t((null==e?void 0:e.message)||S("Error updating settings.","newspack"))}finally{c(!1)}};return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(r.M$,{title:S("reCAPTCHA v3","newspack")}),(0,a.createElement)(r.fM,{isMedium:!0,title:S("Enable reCAPTCHA","newspack"),description:()=>(0,a.createElement)("p",null,S("Enabling reCAPTCHA can help protect your site against bot attacks and credit card testing.","newspack")," ",(0,a.createElement)(w.ExternalLink,{href:"https://www.google.com/recaptcha/admin/create"},S("Get started"))),hasGreyHeader:!!s.use_captcha,toggleChecked:!!s.use_captcha,toggleOnChange:()=>u({use_captcha:!s.use_captcha}),actionContent:s.use_captcha&&(0,a.createElement)(r.zx,{variant:"primary",disabled:n||!Object.keys(l).length,onClick:()=>u(l)},S("Save Settings","newspack")),disabled:n},s.use_captcha&&(0,a.createElement)(a.Fragment,null,e&&(0,a.createElement)(r.qX,{isError:!0,noticeText:e}),s.use_captcha&&(!s.site_key||!s.site_secret)&&(0,a.createElement)(r.qX,{noticeText:S("You must enter a valid site key and secret to use reCAPTCHA.","newspack")}),(0,a.createElement)(r.rj,{noMargin:!0,rowGap:16},(0,a.createElement)(r.w4,{value:(null==l?void 0:l.site_key)||s.site_key,label:S("Site Key","newspack"),onChange:e=>p({...l,site_key:e}),disabled:n}),(0,a.createElement)(r.w4,{type:"password",value:(null==l?void 0:l.site_secret)||s.site_secret,label:S("Site Secret","newspack"),onChange:e=>p({...l,site_secret:e}),disabled:n})))))},x=c.__,T=c.__,{HashRouter:P,Redirect:M,Route:O,Switch:j}=s.Z,A=(0,r.a4)((()=>{const[e,t]=(0,a.useState)();return(0,a.createElement)(a.Fragment,null,e&&(0,a.createElement)(r.qX,{isError:!0,noticeText:e}),(0,a.createElement)(r.M$,{title:x("Plugins","newspack")}),(0,a.createElement)(d,null),(0,a.createElement)(r.M$,{title:x("APIs","newspack")}),newspack_connections_data.can_connect_google&&(0,a.createElement)(h.Z,{setError:t}),(0,a.createElement)(g,{setError:t}),newspack_connections_data.can_connect_fivetran&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(r.M$,{title:"Fivetran"}),(0,a.createElement)(_,{setError:t})),(0,a.createElement)(C,{setError:t}))}));(0,a.render)((0,a.createElement)((0,r.uF)((e=>{let{pluginRequirements:t,wizardApiFetch:n,startLoading:c,doneLoading:r}=e;const s={headerText:T("Connections","newspack"),subHeaderText:T("Connections to third-party services","newspack"),wizardApiFetch:n,startLoading:c,doneLoading:r};return(0,a.createElement)(P,{hashType:"slash"},(0,a.createElement)(j,null,t,(0,a.createElement)(O,{exact:!0,path:"/",render:()=>(0,a.createElement)(A,s)}),(0,a.createElement)(M,{to:"/"})))}))),document.getElementById("newspack-connections-wizard"))},9196:e=>{e.exports=window.React},2819:e=>{e.exports=window.lodash},6292:e=>{e.exports=window.moment},6989:e=>{e.exports=window.wp.apiFetch},5609:e=>{e.exports=window.wp.components},9818:e=>{e.exports=window.wp.data},9307:e=>{e.exports=window.wp.element},2694:e=>{e.exports=window.wp.hooks},2629:e=>{e.exports=window.wp.htmlEntities},5736:e=>{e.exports=window.wp.i18n},9630:e=>{e.exports=window.wp.keycodes},444:e=>{e.exports=window.wp.primitives},6483:e=>{e.exports=window.wp.url}},n={};function a(e){var c=n[e];if(void 0!==c)return c.exports;var r=n[e]={exports:{}};return t[e].call(r.exports,r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,n,c,r)=>{if(!n){var s=1/0;for(p=0;p<e.length;p++){for(var[n,c,r]=e[p],i=!0,o=0;o<n.length;o++)(!1&r||s>=r)&&Object.keys(a.O).every((e=>a.O[e](n[o])))?n.splice(o--,1):(i=!1,r<s&&(s=r));if(i){e.splice(p--,1);var l=c();void 0!==l&&(t=l)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[n,c,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.j=806,(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={806:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var c,r,[s,i,o]=n,l=0;if(s.some((t=>0!==e[t]))){for(c in i)a.o(i,c)&&(a.m[c]=i[c]);if(o)var p=o(a)}for(t&&t(n);l<s.length;l++)r=s[l],a.o(e,r)&&e[r]&&e[r][0](),e[s[l]]=0;return a.O(p)},n=globalThis.webpackChunkwebpack=globalThis.webpackChunkwebpack||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var c=a.O(void 0,[351],(()=>a(2069)));c=a.O(c);var r=window;for(var s in c)r[s]=c[s];c.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})})();