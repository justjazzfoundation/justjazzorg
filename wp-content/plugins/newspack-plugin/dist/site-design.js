!function(){"use strict";var e,t={5718:function(e,t,n){n.r(t);var a=n(4942),r=(n(5674),n(9307)),o=n(5736),i=n(4009),s=n(8614),l=n(3741);const c=o.__,p=e=>{const[t,n]=(0,r.useState)(null),{themeMods:a,setThemeMods:o}=e,{show_author_bio:s=!0,show_author_email:l=!1,author_bio_length:p=200,featured_image_default:u,newspack_image_credits_placeholder_url:d,newspack_image_credits_class_name:h="",newspack_image_credits_prefix_label:m=""}=a;return(0,r.useEffect)((()=>{d&&n(d)}),[d]),(0,r.createElement)(r.Fragment,null,(0,r.createElement)(i.M$,{title:c("Author Bio","newspack"),description:c("Control how author bios are displayed on posts.","newspack")}),(0,r.createElement)(i.rj,{gutter:32},(0,r.createElement)(i.rj,{columns:1,gutter:16},(0,r.createElement)(i.tX,{title:c("Author bio","newspack"),description:c("Display an author bio under individual posts.","newspack"),checked:s,onChange:e=>o({show_author_bio:e})},(0,r.createElement)(i.hp,{isDark:!0,label:c("Author email","newspack"),help:c("Display the author email with bio on individual posts.","newspack"),checked:l,onChange:e=>o({show_author_email:e})}))),(0,r.createElement)(i.rj,{columns:1,gutter:16},s&&(0,r.createElement)(i.w4,{label:c("Length","newspack"),help:c("Truncates the author bio on single posts to this approximate character length, but without breaking a word. The full bio appears on the author archive page.","newspack"),type:"number",value:p,onChange:e=>o({author_bio_length:e})}))),(0,r.createElement)(i.M$,{title:c("Featured Image","newspack"),description:c("Set a default featured image position for new posts.","newspack")}),(0,r.createElement)(i.us,{label:c("Default position","newspack"),selected:u||"large",options:[{label:c("Large","newspack"),value:"large"},{label:c("Small","newspack"),value:"small"},{label:c("Behind article title","newspack"),value:"behind"},{label:c("Beside article title","newspack"),value:"beside"},{label:c("Hidden","newspack"),value:"hidden"}],onChange:e=>o({featured_image_default:e})}),(0,r.createElement)(i.M$,{title:c("Media Credits","newspack"),description:c("Control how credits are displayed alongside media attachments.","newspack")}),(0,r.createElement)(i.rj,{gutter:32},(0,r.createElement)(i.rj,{columns:1,gutter:16},(0,r.createElement)(i.w4,{label:c("Credit Class Name","newspack"),help:c("A CSS class name to be applied to all image credit elements. Leave blank to display no class name.","newspack"),value:h,onChange:e=>o({newspack_image_credits_class_name:e})}),(0,r.createElement)(i.w4,{label:c("Credit Label","newspack"),help:c("A label to prefix all media credits. Leave blank to display no prefix.","newspack"),value:m,onChange:e=>o({newspack_image_credits_prefix_label:e})})),(0,r.createElement)(i.rj,{columns:1,gutter:16},(0,r.createElement)(i.Ur,{image:t?{url:t}:null,label:c("Placeholder Image","newspack"),buttonLabel:c("Select","newspack"),onChange:e=>{n((null==e?void 0:e.url)||null),o({newspack_image_credits_placeholder:(null==e?void 0:e.id)||null})},help:c("A placeholder image to be displayed in place of images without credits. If none is chosen, the image will be displayed normally whether or not it has a credit.","newspack")}))))};p.defaultProps={themeMods:{},setThemeMods:()=>null};var u=(0,i.a4)(p);const d=o.__,{HashRouter:h,Redirect:m,Route:w,Switch:f}=s.Z;class g extends r.Component{constructor(){super(...arguments),(0,a.Z)(this,"componentDidMount",(()=>{const{setError:e,wizardApiFetch:t}=this.props;t({path:"/newspack/v1/wizard/newspack-setup-wizard/theme",method:"GET"}).then((e=>this.setState({themeMods:e.theme_mods}))).catch(e)})),(0,a.Z)(this,"setThemeMods",(e=>this.setState({themeMods:{...this.state.themeMods,...e}}))),(0,a.Z)(this,"updateThemeMods",(()=>{const{setError:e,wizardApiFetch:t}=this.props,{themeMods:n}=this.state;t({path:"/newspack/v1/wizard/newspack-setup-wizard/theme/",method:"POST",data:{theme_mods:n},quiet:!0}).then((e=>{const{theme:t,theme_mods:n}=e;this.setState({theme:t,themeMods:n})})).catch((t=>{console.log("[Theme Update Error]",t),e({error:t})}))})),(0,a.Z)(this,"state",{})}render(){const{pluginRequirements:e,wizardApiFetch:t,setError:n}=this.props,a=[{label:d("Design"),path:"/",exact:!0},{label:d("Settings"),path:"/settings",exact:!0}];return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(h,{hashType:"slash"},(0,r.createElement)(f,null,e,(0,r.createElement)(w,{path:"/",exact:!0,render:()=>(0,r.createElement)(l.Z,{headerText:d("Site Design","newspack"),subHeaderText:d("Customize the look and feel of your site","newspack"),tabbedNavigation:a,wizardApiFetch:t,setError:n,isPartOfSetup:!1})}),(0,r.createElement)(w,{path:"/settings",exact:!0,render:()=>{const{themeMods:e}=this.state;return(0,r.createElement)(u,{headerText:d("Site Design","newspack"),subHeaderText:d("Configure your Newspack theme","newspack"),tabbedNavigation:a,themeMods:e,setThemeMods:this.setThemeMods,buttonText:d("Save","newspack"),buttonAction:this.updateThemeMods,secondaryButtonText:d("Advanced settings","newspack"),secondaryButtonAction:"/wp-admin/customize.php"})}}),(0,r.createElement)(m,{to:"/"}))))}}(0,r.render)((0,r.createElement)((0,i.uF)(g)),document.getElementById("newspack-site-design-wizard"))},9196:function(e){e.exports=window.React},2819:function(e){e.exports=window.lodash},6292:function(e){e.exports=window.moment},6989:function(e){e.exports=window.wp.apiFetch},5609:function(e){e.exports=window.wp.components},9818:function(e){e.exports=window.wp.data},9307:function(e){e.exports=window.wp.element},2694:function(e){e.exports=window.wp.hooks},2629:function(e){e.exports=window.wp.htmlEntities},5736:function(e){e.exports=window.wp.i18n},9630:function(e){e.exports=window.wp.keycodes},444:function(e){e.exports=window.wp.primitives},6483:function(e){e.exports=window.wp.url}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,a),o.exports}a.m=t,e=[],a.O=function(t,n,r,o){if(!n){var i=1/0;for(p=0;p<e.length;p++){n=e[p][0],r=e[p][1],o=e[p][2];for(var s=!0,l=0;l<n.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(p--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[n,r,o]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.j=657,function(){var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e}(),function(){var e={657:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],s=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var p=l(a)}for(t&&t(n);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[i[c]]=0;return a.O(p)},n=self.webpackChunkwebpack=self.webpackChunkwebpack||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=a.O(void 0,[351],(function(){return a(5718)}));r=a.O(r);var o=window;for(var i in r)o[i]=r[i];r.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})}();