(()=>{"use strict";var e,t={4809:(e,t,a)=>{a.r(t),a(5674);var n=a(9307),r=a(5736),s=a(2819),l=a(6989),o=a.n(l),i=a(1984),c=a(5430),p=a(8184),u=a(444);const d=(0,n.createElement)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(u.Path,{d:"M18.5 5.5V8H20V5.5h2.5V4H20V1.5h-1.5V4H16v1.5h2.5zM12 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-6h-1.5v6a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5h6V4z"}));var m=a(5332),w=a(6483),h=a(5609),g=a(3520),k=a(9674);const b=r.__,{useHistory:v}=k.Z,y=newspack_aux_data.is_e2e?12:40,E=y+3,f={plugin_configuration:{message:b("Installation","newspack")},starter_content:{message:b("Demo content","newspack")}},_=e=>o()({path:`/newspack/v1/wizard/newspack-setup-wizard/starter-content/${e}`,method:"post"}),S=(0,g.a4)((e=>{let{buttonAction:t}=e;const[a,r]=(0,n.useState)(0),[l,u]=(0,n.useState)([]),[k,S]=(0,n.useState)(null),[x,C]=(0,n.useState)(!0),[T,N]=(0,n.useState)([]),[z,P]=(0,n.useState)(""),[F,M]=(0,n.useState)(),j="generated"===F,O="import"===F,L=e=>t=>N((a=>[...a,{...e,error:t}])),A=(x?E:0)+l.length;(0,n.useEffect)((()=>(document.body.classList.add("newspack-wizard__welcome","newspack-wizard__blue"),o()({path:"/newspack/v1/wizard/newspack-setup-wizard/initial-check/"}).then((e=>{u(e.plugins),S(e.is_ssl)})),()=>document.body.classList.remove("newspack-wizard__welcome","newspack-wizard__blue"))),[]);const W=()=>r((e=>e+1)),Z=async()=>{N([]),r(0),await new Promise((e=>setTimeout(e,1)));const e=l.map((e=>"active"===e.Status?(W(),()=>Promise.resolve()):()=>o()({path:`/newspack/v1/plugins/${e.Slug}/configure/`,method:"POST"}).then(W).catch(L({info:f.plugin_configuration,item:`${b("Failed to install","newspack")} ${e.Name}`}))));for(let t=0;t<e.length;t++)await e[t]();(j&&x||O)&&(await function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return o()({path:"/newspack/v1/wizard/newspack-setup-wizard/starter-content/init",method:"post",data:{type:e,site:t}})}(F,z).then(W).catch((e=>{window.location="/wp-admin/admin.php?page=newspack-setup-wizard&newspack-notice=_error_"+e.message})),await Promise.allSettled((0,s.times)(y,(e=>_(`post/${e}`).then(W).catch(L({info:f.starter_content,item:b("Failed to create a post.","newspack")}))))),await _("homepage").then(W).catch(L({info:f.starter_content,item:b("Failed to create the homepage.","newspack")})),await _("theme").then(W).catch(L({info:f.starter_content,item:b("Failed to activate the theme.","newspack")})))},H=v(),R=t.href,I=T.length>0,B=0===a,$=a===A&&!I,D=(0,n.useRef)(),[U,V]=(0,n.useState)(5);(0,n.useEffect)((()=>{0===U&&(clearInterval(D.current),H.push(R.replace("#","")))}),[U]),(0,n.useEffect)((()=>{$&&5===U&&(D.current=setInterval((()=>{V((e=>e-1))}),1e3))}),[$,U]);return(0,n.createElement)(n.Fragment,null,B&&(0,n.createElement)(g.rj,{columns:1,gutter:8},(0,n.createElement)(g.VQ,{simple:!0,size:36,white:!0}),(0,n.createElement)(g.M$,{title:()=>(0,n.createElement)(n.Fragment,null,b("Welcome to Newspack,","newspack"),(0,n.createElement)("br",null),b("the platform for news","newspack")),heading:1,centered:!0,isWhite:!0,noMargin:!0})),(0,n.createElement)(g.Zb,{isNarrow:!0,isWhite:!0,className:0===T.length&&a>0&&!$?"loading":null},(0,n.createElement)(g.rj,{columns:1},!B&&(0,n.createElement)("h1",null,I?(0,n.createElement)(i.Z,{className:"newspack--error",icon:c.Z}):$?(0,n.createElement)("span",{className:"newspack-checkbox-icon newspack-checkbox-icon--checked"},(0,n.createElement)(i.Z,{icon:p.Z})):void 0,b(I?"Installation error":$?"Installation complete":"Installing…","newspack")),0===T.length&&a>0?(0,n.createElement)(g.ko,{completed:a,total:A}):null,(0,n.createElement)("p",null,b(I?"There has been an error during the installation. Please retry or manually install required plugins to continue with the configuration of your site.":B?"We will help you get set up by installing the most relevant plugins first before requiring a few details from you in order to build your site.":$?"Click the button below to start configuring your site.":x?"We are now installing core plugins and pre-populating your site with categories and placeholder stories to help you pre-configure it. All placeholder content can be deleted later.":"We are now installing core plugins.","newspack"),$&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("br",null),(0,n.createElement)("i",null,b("Automatic redirection in","newspack")," ",U," ",b("seconds…","newspack")))),!1===k&&(0,n.createElement)(g.qX,{isError:!0,noticeText:b("This site does not use HTTPS. Newspack can't be installed.","newspack")}),T.length?T.map(((e,t)=>(0,n.createElement)(g.fM,{isSmall:!0,key:t,title:e.info.message+": "+e.item,actionText:b("Retry","newspack"),onClick:Z,secondaryActionText:b("Skip","newspack"),secondaryDestructive:!0,onSecondaryActionClick:()=>(e=>{const t=[];for(let a=0;a<T.length;++a)e!==a&&t.push(T[a]);N(t),W()})(t),className:"newspack--error-actioncard"}))):null,(B||$)&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(g.C0,null),B&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(g.Zb,{noBorder:!0},(0,n.createElement)(g.Wu,{href:"#",title:b("Start a new site","newspack"),desc:b("You don't have content to import","newspack"),icon:d,className:"br--top",isPressed:j,onClick:()=>M("generated"),grouped:!0}),(0,n.createElement)(g.Wu,{href:"#",title:b("Migrate an existing WordPress site","newspack"),desc:b("You have content to import","newspack"),icon:m.Z,className:"br--bottom",isPressed:O,onClick:()=>M("import"),grouped:!0})),O&&(0,n.createElement)(g.w4,{label:b("URL","newspack"),placeholder:"https://yourgroovydomain.com/",type:"url",help:b("We will import the last 50 articles from your existing site to help you with the set up and customization.","newspack"),onChange:e=>P(e)})),(0,n.createElement)(g.Zb,{noBorder:!0,className:"newspack-card__footer"},B&&j&&(0,n.createElement)(h.CheckboxControl,{checked:x,label:b("Install demo content","newspack"),onChange:C}),B&&(j||O)&&(0,n.createElement)(g.zx,{disabled:!k||O&&!(0,w.isURL)(z),isPrimary:!0,onClick:Z},b("Get Started","newspack")),!B&&(0,n.createElement)(g.zx,{disabled:!k,isPrimary:!0,href:$?R:null},b("Continue","newspack")))))))})),x=r.__,C=document.title.replace(newspack_aux_data.site_title,"__SITE_TITLE__"),T=(0,g.a4)((e=>{let{setError:t,wizardApiFetch:a,renderPrimaryButton:r}=e;const[{currencies:s=[],countries:l=[],wpseoFields:i=[]},c]=(0,n.useState)({}),[p,u]=g.PT.useObjectState({});(0,n.useEffect)((()=>{a({path:"/newspack/v1/profile/",method:"GET"}).then((e=>{c({currencies:e.currencies,countries:e.countries,wpseoFields:e.wpseo_fields}),u(e.profile)})).catch(t)}),[]),(0,n.useEffect)((()=>{"string"==typeof p.site_title&&(document.title=C.replace("__SITE_TITLE__",p.site_title))}),[p.site_title]);const d=e=>{let{options:t,label:a,key:r,type:s,placeholder:l,className:o}=e;return t?(0,n.createElement)(g.Yw,{label:a,value:p[r],onChange:u(r),options:t,className:o}):"image"===s?(0,n.createElement)(g.Ur,{label:a,style:{width:"102px",height:"102px"},image:p[r],isCovering:!0,onChange:u(r)}):(0,n.createElement)(g.w4,{label:a,value:p[r]||"",onChange:u(r),placeholder:l,className:o})};return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(g.M$,{title:x("Site Profile","newspack"),description:x("Add and manage the basic information","newspack")}),(0,n.createElement)(g.rj,{columns:3,gutter:32,rowGap:16,className:"newspack-site-profile"},d({key:"site_icon",label:x("Site Icon","newspack"),type:"image"}),(0,n.createElement)(g.rj,{columns:1,gutter:16},d({key:"site_title",label:x("Site Title","newspack")}),d({key:"tagline",label:x("Tagline","newspack")})),(0,n.createElement)(g.rj,{columns:1,gutter:16},d({options:l,key:"countrystate",label:x("Country","newspack")}),d({options:s,key:"currency",label:x("Currency")}))),(0,n.createElement)(g.M$,{title:x("Social Accounts","newspack"),description:x("Allow visitors to quickly access your social profiles","newspack")}),(0,n.createElement)(g.rj,{columns:3,gutter:32,rowGap:16},i.map((e=>(0,n.createElement)(n.Fragment,{key:e.key},d({...e}))))),(0,n.createElement)("div",{className:"newspack-buttons-card"},r({onClick:()=>o()({path:"/newspack/v1/profile/",method:"POST",data:{profile:p}})})))}),{hidePrimaryButton:!0});var N=a(4184),z=a.n(N),P=a(9818),F=a(7405);const M=r.__,j={once:{tieredLabel:M("One-time donations"),staticLabel:M("Suggested one-time donation amount")},month:{tieredLabel:M("Monthly donations"),staticLabel:M("Suggested donation amount per month")},year:{tieredLabel:M("Annual donations"),staticLabel:M("Suggested donation amount per year")}},O=Object.keys(j),L=()=>{const e=g.en.useWizardData("reader-revenue"),{updateWizardSettings:t}=(0,P.useDispatch)(g.en.STORE_NAMESPACE);if(!e.donation_data||"errors"in e.donation_data)return null;const{amounts:a,currencySymbol:r,tiered:s,disabledFrequencies:l}=e.donation_data,o=e=>a=>t({slug:"newspack-reader-revenue-wizard",path:["donation_data",...e],value:a}),i=O.map((e=>({key:e,...j[e]})));return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(g.Zb,{headerActions:!0,noBorder:!0},(0,n.createElement)(g.M$,{title:M("Suggested Donations","newspack"),description:M("Set suggested donation amounts. These will be the default settings for the Donate block.","newspack"),noMargin:!0}),(0,n.createElement)(g.Yw,{label:M("Donation Type","newspack"),onChange:()=>o(["tiered"])(!s),buttonOptions:[{value:!0,label:M("Tiered","newspack")},{value:!1,label:M("Untiered","newspack")}],buttonSmall:!0,value:s,hideLabelFromVision:!0})),s?(0,n.createElement)(g.rj,{columns:1,gutter:16},i.map((e=>{const t=l[e.key],s=Object.values(l).filter(Boolean).length===O.length-1;return(0,n.createElement)(g.Zb,{isMedium:!0,key:e.key},(0,n.createElement)(g.rj,{columns:1,gutter:16},(0,n.createElement)(h.ToggleControl,{checked:!t,onChange:()=>o(["disabledFrequencies",e.key])(!t),label:e.tieredLabel,disabled:!t&&s}),!t&&(0,n.createElement)(g.rj,{columns:3,rowGap:16},(0,n.createElement)(F.P,{currencySymbol:r,label:M("Low-tier"),value:a[e.key][0],onChange:o(["amounts",e.key,0])}),(0,n.createElement)(F.P,{currencySymbol:r,label:M("Mid-tier"),value:a[e.key][1],onChange:o(["amounts",e.key,1])}),(0,n.createElement)(F.P,{currencySymbol:r,label:M("High-tier"),value:a[e.key][2],onChange:o(["amounts",e.key,2])}))))}))):(0,n.createElement)(g.Zb,{isMedium:!0},(0,n.createElement)(g.rj,{columns:3,rowGap:16},i.map((e=>(0,n.createElement)(F.P,{currencySymbol:r,label:e.staticLabel,value:a[e.key][3],onChange:o(["amounts",e.key,3]),key:e.key}))))))},A=r.__,{SettingsCard:W}=g.Zr,Z=()=>{const e=g.en.useWizardData("reader-revenue"),{testMode:t=!1,publishableKey:a="",secretKey:r="",testPublishableKey:s="",testSecretKey:l=""}=e.stripe_data||{},{updateWizardSettings:o}=(0,P.useDispatch)(g.en.STORE_NAMESPACE),i=e=>t=>o({slug:"newspack-reader-revenue-wizard",path:["stripe_data",e],value:t});return(0,n.createElement)(g.rj,{columns:1,gutter:16},(0,n.createElement)(g.rj,{columns:1,gutter:16},(0,n.createElement)("p",{className:"newspack-payment-setup-screen__api-keys-instruction"},A("Configure Stripe and enter your API keys","newspack")," – ",(0,n.createElement)(h.ExternalLink,{href:"https://stripe.com/docs/keys#api-keys"},A("learn how"))),(0,n.createElement)(h.CheckboxControl,{label:A("Use Stripe in test mode","newspack"),checked:t,onChange:i("testMode"),help:A("Test mode will not capture real payments. Use it for testing your purchase flow.","newspack")})),(0,n.createElement)(g.rj,{noMargin:!0,rowGap:16},t?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(g.w4,{type:"password",value:s,label:A("Test Publishable Key","newspack"),onChange:i("testPublishableKey")}),(0,n.createElement)(g.w4,{type:"password",value:l,label:A("Test Secret Key","newspack"),onChange:i("testSecretKey")})):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(g.w4,{type:"password",value:a,label:A("Publishable Key","newspack"),onChange:i("publishableKey")}),(0,n.createElement)(g.w4,{type:"password",value:r,label:A("Secret Key","newspack"),onChange:i("secretKey")}))))},H=r.__;var R=a(7462);const I=r.__,B=e=>{let{className:t,onUpdate:a,isOnboarding:r=!0}=e;const[l,i]=(0,n.useState)(),[c,p]=g.PT.useObjectState({}),u=e=>{p(e),a&&a((0,s.mapValues)(e.settings,(0,s.property)("value")))},d=()=>{o()({path:"/newspack/v1/wizard/newspack-engagement-wizard/newsletters"}).then(u).catch(i)};(0,n.useEffect)(d,[]);const m=e=>{var t,a,n,r,s,l;return{value:(null===(t=c.settings[e])||void 0===t?void 0:t.value)||"",checked:Boolean(null===(a=c.settings[e])||void 0===a?void 0:a.value),label:null===(n=c.settings[e])||void 0===n?void 0:n.description,placeholder:null===(r=c.settings[e])||void 0===r?void 0:r.placeholder,options:(null===(s=c.settings[e])||void 0===s||null===(l=s.options)||void 0===l?void 0:l.map((e=>({value:e.value,label:e.name}))))||null,onChange:t=>u({settings:{[e]:{value:t}}})}};return!l&&(0,s.isEmpty)(c)?(0,n.createElement)("div",{className:"flex justify-around mt4"},(0,n.createElement)(g.Pi,null)):l?(0,n.createElement)(g.qX,{noticeText:l.message||I("Something went wrong.","newspack"),isError:!0}):(0,n.createElement)("div",{className:t},!1===c.configured&&(0,n.createElement)(g.xf,{plugins:["newspack-newsletters"],withoutFooterButton:!0,onStatus:e=>{let{complete:t}=e;return t&&d()}}),!0===c.configured&&(()=>{const e=m("newspack_newsletters_service_provider");return(0,n.createElement)(g.rj,{gutter:16,columns:1},(0,s.values)(c.settings).filter((t=>!t.provider||t.provider===e.value)).map((e=>{if(r&&!e.onboarding)return null;switch(e.type){case"select":return(0,n.createElement)(g.Yw,(0,R.Z)({key:e.key},m(e.key)));case"checkbox":return(0,n.createElement)(h.CheckboxControl,(0,R.Z)({key:e.key},m(e.key)));default:return(0,n.createElement)(g.rj,{columns:1,gutter:8,key:e.key},(0,n.createElement)(g.w4,m(e.key)),e.help&&e.helpURL&&(0,n.createElement)("p",null,(0,n.createElement)(h.ExternalLink,{href:e.helpURL},e.help)))}})))})())},$=e=>{let{onUpdate:t}=e;const[a,r]=(0,n.useState)(!1),[s,l]=(0,n.useState)(!1),[i,c]=(0,n.useState)([]),p=e=>{c(e),"function"==typeof t&&t(e)},u=(e,t)=>a=>{const n=[...i];n[e][t]=a,p(n)};return(0,n.useEffect)((()=>{r(!1),l(!0),o()({path:"/newspack-newsletters/v1/lists"}).then(p).catch(r).finally((()=>l(!1)))}),[]),null!=i&&i.length||a?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(g.M$,{title:I("Subscription Lists","newspack"),description:I("Manage the lists available for subscription.","newspack")}),a&&(0,n.createElement)(g.qX,{noticeText:(null==a?void 0:a.message)||I("Something went wrong.","newspack"),isError:!0}),i.map(((e,t)=>(0,n.createElement)(g.Zb,{key:e.id,isSmall:!0},(0,n.createElement)(h.ToggleControl,{label:e.name,checked:e.active,disabled:s,onChange:u(t,"active")}),e.active&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(g.w4,{label:I("List title","newspack"),value:e.title,disabled:s,onChange:u(t,"title")}),(0,n.createElement)(h.TextareaControl,{label:I("List description","newspack"),value:e.description,disabled:s,onChange:u(t,"description")}))))),(0,n.createElement)("div",{className:"newspack-buttons-card"},(0,n.createElement)(g.zx,{isPrimary:!0,onClick:()=>{r(!1),l(!0),o()({path:"/newspack-newsletters/v1/lists",method:"post",data:{lists:i}}).then(p).catch(r).finally((()=>l(!1)))},disabled:s},I("Save Subscription Lists","newspack")))):null},D=()=>{const[{newslettersConfig:e},t]=g.PT.useObjectState({}),[a,r]=(0,n.useState)(""),[s,l]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const t=null==e?void 0:e.newspack_newsletters_service_provider;l(!(!a||t===a)),!a&&t&&r(t)}),[null==e?void 0:e.newspack_newsletters_service_provider]),(0,n.createElement)(n.Fragment,null,(0,n.createElement)(g.Zb,{headerActions:!0,noBorder:!0},(0,n.createElement)("h2",null,I("Authoring","newspack")),(0,n.createElement)(g.zx,{variant:"primary",onClick:async()=>o()({path:"/newspack/v1/wizard/newspack-engagement-wizard/newsletters",method:"POST",data:e}).finally((()=>{r(null==e?void 0:e.newspack_newsletters_service_provider),l(!1)}))},I("Save Settings","newspack"))),(0,n.createElement)(B,{isOnboarding:!1,onUpdate:e=>t({newslettersConfig:e})}),s?(0,n.createElement)(g.qX,{noticeText:I("Please save your settings before changing your subscription lists.","newspack"),isWarning:!0}):(0,n.createElement)($,null))};(0,g.a4)((()=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)(D,null),(0,n.createElement)(g.M$,{title:I("WooCommerce integration","newspack")}),(0,n.createElement)(g.xf,{plugins:["mailchimp-for-woocommerce"],withoutFooterButton:!0}))));var U=a(2307);const V=r.__,G={"reader-revenue":{label:V("Reader Revenue","newspack"),description:V("Encourage site visitors to contribute to your publishing through donations","newspack"),Component:e=>{var t;let{className:a}=e;const r=g.en.useWizardData("reader-revenue");return(0,n.createElement)("div",{className:z()(a,{"o-50":(0,s.isEmpty)(r)})},"nrh"===(null===(t=r.platform_data)||void 0===t?void 0:t.platform)?(0,n.createElement)("p",null,H("Looks like this Newspack instance is already configured to use News Revenue Hub as the Reader Revenue platform. To edit these settings, visit the Reader Revenue section from the Newspack dashboard.","newspack")):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(L,null),(0,n.createElement)("h2",null,H("Payment gateway","newspack")),(0,n.createElement)(Z,null)))},configuration:{is_service_enabled:!1}},newsletters:{label:V("Newsletters","newspack"),description:V("Create email newsletters and send them to your mail lists, all without leaving your website","newspack"),Component:B,configuration:{is_service_enabled:!1}},"google-ad-manager":{label:V("Google Ad Manager","newspack"),description:V("An advanced ad inventory creation and management platform, allowing you to be specific about ad placements","newspack"),Component:U.Z,configuration:{is_service_enabled:!1}}},K=(0,g.a4)((e=>{let{renderPrimaryButton:t}=e;const[a,r]=g.PT.useObjectState(G),[l,i]=(0,n.useState)(!0),c=(0,s.keys)(a),p=g.en.useWizardData("reader-revenue");return(0,n.useEffect)((()=>{o()({path:"/newspack/v1/wizard/newspack-setup-wizard/services"}).then((e=>{r(e),i(!1)}))}),[]),(0,n.createElement)(n.Fragment,null,(0,s.values)(a).map(((e,t)=>{const a=c[t],s=e.Component;return(0,n.createElement)(g.fM,{isMedium:!0,key:t,title:e.label,description:e.description,className:a,toggleChecked:e.configuration.is_service_enabled,hasGreyHeader:e.configuration.is_service_enabled,toggleOnChange:e=>r({[a]:{configuration:{is_service_enabled:e}}}),disabled:l,href:e.configuration.is_service_enabled&&e.href,actionText:e.configuration.is_service_enabled&&e.actionText},e.configuration.is_service_enabled&&s?(0,n.createElement)(s,{className:"newspack-action-card__region-children__inner",configuration:e.configuration,onUpdate:e=>r({[a]:{configuration:e}})}):null)})),(0,n.createElement)("div",{className:"newspack-buttons-card"},t({onClick:async()=>{const e=(0,s.mapValues)(a,(0,s.property)("configuration"));return e["reader-revenue"]={...e["reader-revenue"],...p},o()({path:"/newspack/v1/wizard/newspack-setup-wizard/services",method:"POST",data:e})}})))}),{hidePrimaryButton:!0});var q=a(3741);const Y=r.__,X=(0,g.a4)((()=>{(0,n.useEffect)((()=>(document.body.classList.add("newspack-wizard__completed","newspack-wizard__blue"),document.querySelector(".newspack-wizard__header").remove(),()=>document.body.classList.remove("newspack-wizard__completed","newspack-wizard__blue"))),[]);const e=z()("flex","flex-column","justify-between"),t=z()("flex","flex-row-reverse");return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(g.Zb,{noBorder:!0},(0,n.createElement)(g.M$,{title:Y("You’re ready to go!","newspack"),description:Y("While you’re off to a great start, there’s plenty more you can do:","newspack"),heading:1,centered:!0,isWhite:!0})),(0,n.createElement)(g.Zb,{isWhite:!0},(0,n.createElement)(g.rj,null,(0,n.createElement)(g.fM,{title:Y("Configure Newspack","newspack"),description:Y("Go in-depth with our various options to set up Newspack to meet your needs.","newspack"),className:e},(0,n.createElement)("div",{className:t},(0,n.createElement)(g.zx,{variant:"primary",href:newspack_urls.dashboard},Y("Go to the Dashboard","newspack")))),(0,n.createElement)(g.fM,{title:Y("Explore our documentation","newspack"),description:Y("Read about the different tools, plugins, and themes that make up Newspack.","newspack"),className:e},(0,n.createElement)("div",{className:t},(0,n.createElement)(g.zx,{variant:"primary",href:newspack_urls.support},Y("Read Documentation","newspack")))),(0,n.createElement)(g.fM,{title:Y("Update your homepage","newspack"),description:Y("We’ve created the basics, now it’s time to update the content.","newspack"),className:e},(0,n.createElement)("div",{className:t},(0,n.createElement)(g.zx,{variant:"primary",href:newspack_urls.homepage},Y("Edit Homepage","newspack")))),(0,n.createElement)(g.fM,{title:Y("View your site","newspack"),description:Y("Preview what you’ve created so far. It looks great!","newspack"),className:e},(0,n.createElement)("div",{className:t},(0,n.createElement)(g.zx,{variant:"primary",href:newspack_urls.site},Y("Visit Site","newspack")))))))}),{hidePrimaryButton:!0}),Q=r.__,{HashRouter:J,Route:ee}=k.Z,te=[{path:"/",label:Q("Welcome","newspack"),render:e=>(0,n.createElement)(S,(0,s.omit)(e,["routes","headerText","buttonText"])),isHiddenInNav:!0},{path:"/settings",label:Q("Settings","newspack"),subHeaderText:Q("Share a few details so we can start setting up your site","newspack"),render:T},{path:"/services",label:Q("Services","newspack"),subHeaderText:Q("Activate and configure the services that you need","newspack"),render:K},{path:"/design",label:Q("Design","newspack"),subHeaderText:Q("Customize the look and feel of your site","newspack"),render:q.Z},{path:"/completed",label:Q("Completed","newspack"),render:X,isHiddenInNav:!0}];(0,n.render)((0,n.createElement)((0,g.uF)((e=>{let{wizardApiFetch:t,setError:a}=e;return(0,n.createElement)(n.Fragment,null,newspack_aux_data.has_completed_setup&&(0,n.createElement)(g.qX,{isWarning:!0,className:"ma0"},Q("Heads up! The setup has already been completed. No need to run it again.","newspack")),(0,n.createElement)(J,{hashType:"slash"},te.map(((e,r)=>{var s;const l=null===(s=te[r+1])||void 0===s?void 0:s.path,o=l?{href:"#"+l}:{};return(0,n.createElement)(ee,{key:r,path:e.path,exact:"/"===e.path,render:()=>e.render({wizardApiFetch:t,setError:a,disableUpcomingInTabbedNavigation:!0,tabbedNavigation:te,headerText:e.label,subHeaderText:e.subHeaderText,buttonText:l?e.buttonText||Q("Continue"):Q("Finish"),buttonAction:o})})}))))}),[]),{simpleFooter:!0}),document.getElementById("newspack-setup-wizard"))},9196:e=>{e.exports=window.React},2819:e=>{e.exports=window.lodash},6292:e=>{e.exports=window.moment},6989:e=>{e.exports=window.wp.apiFetch},5609:e=>{e.exports=window.wp.components},9818:e=>{e.exports=window.wp.data},9307:e=>{e.exports=window.wp.element},2694:e=>{e.exports=window.wp.hooks},2629:e=>{e.exports=window.wp.htmlEntities},5736:e=>{e.exports=window.wp.i18n},9630:e=>{e.exports=window.wp.keycodes},444:e=>{e.exports=window.wp.primitives},6483:e=>{e.exports=window.wp.url}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var s=a[e]={exports:{}};return t[e].call(s.exports,s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,a,r,s)=>{if(!a){var l=1/0;for(p=0;p<e.length;p++){for(var[a,r,s]=e[p],o=!0,i=0;i<a.length;i++)(!1&s||l>=s)&&Object.keys(n.O).every((e=>n.O[e](a[i])))?a.splice(i--,1):(o=!1,s<l&&(l=s));if(o){e.splice(p--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[a,r,s]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=350,(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={350:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,s,[l,o,i]=a,c=0;if(l.some((t=>0!==e[t]))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(i)var p=i(n)}for(t&&t(a);c<l.length;c++)s=l[c],n.o(e,s)&&e[s]&&e[s][0](),e[l[c]]=0;return n.O(p)},a=globalThis.webpackChunkwebpack=globalThis.webpackChunkwebpack||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=n.O(void 0,[351],(()=>n(4809)));r=n.O(r);var s=window;for(var l in r)s[l]=r[l];r.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})})();