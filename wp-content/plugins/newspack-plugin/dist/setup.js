(()=>{"use strict";var e,t={4809:(e,t,n)=>{n.r(t),n(5674);var a=n(9307),r=n(5736),s=n(2819),o=n(6989),l=n.n(o),i=n(1984),c=n(5430),u=n(8184),p=n(444);const m=(0,a.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(p.Path,{d:"M18.5 5.5V8H20V5.5h2.5V4H20V1.5h-1.5V4H16v1.5h2.5zM12 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-6h-1.5v6a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5h6V4z"}));var d=n(5332),w=n(6483),h=n(5609),g=n(3520),k=n(9674);const b=r.__,{useHistory:v}=k.Z,y=newspack_aux_data.is_e2e?12:40,E=y+3,f={plugin_configuration:{message:b("Installation","newspack")},starter_content:{message:b("Demo content","newspack")}},_=e=>l()({path:`/newspack/v1/wizard/newspack-setup-wizard/starter-content/${e}`,method:"post"}),S=(0,g.a4)((e=>{let{buttonAction:t}=e;const[n,r]=(0,a.useState)(0),[o,p]=(0,a.useState)([]),[k,S]=(0,a.useState)(null),[x,C]=(0,a.useState)(!0),[T,N]=(0,a.useState)([]),[z,P]=(0,a.useState)(""),[M,F]=(0,a.useState)(),j="generated"===M,O="import"===M,W=e=>t=>N((n=>[...n,{...e,error:t}])),L=(x?E:0)+o.length;(0,a.useEffect)((()=>(document.body.classList.add("newspack-wizard__welcome","newspack-wizard__blue"),l()({path:"/newspack/v1/wizard/newspack-setup-wizard/initial-check/"}).then((e=>{p(e.plugins),S(e.is_ssl)})),()=>document.body.classList.remove("newspack-wizard__welcome","newspack-wizard__blue"))),[]);const A=()=>r((e=>e+1)),Z=async()=>{N([]),r(0),await new Promise((e=>setTimeout(e,1)));const e=o.map((e=>"active"===e.Status?(A(),()=>Promise.resolve()):()=>l()({path:`/newspack/v1/plugins/${e.Slug}/configure/`,method:"POST"}).then(A).catch(W({info:f.plugin_configuration,item:`${b("Failed to install","newspack")} ${e.Name}`}))));for(let t=0;t<e.length;t++)await e[t]();(j&&x||O)&&(await function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return l()({path:"/newspack/v1/wizard/newspack-setup-wizard/starter-content/init",method:"post",data:{type:e,site:t}})}(M,z).then(A).catch((e=>{window.location="/wp-admin/admin.php?page=newspack-setup-wizard&newspack-notice=_error_"+e.message})),await Promise.allSettled((0,s.times)(y,(e=>_(`post/${e}`).then(A).catch(W({info:f.starter_content,item:b("Failed to create a post.","newspack")}))))),await _("homepage").then(A).catch(W({info:f.starter_content,item:b("Failed to create the homepage.","newspack")})),await _("theme").then(A).catch(W({info:f.starter_content,item:b("Failed to activate the theme.","newspack")})))},H=v(),R=t.href,B=T.length>0,I=0===n,D=n===L&&!B,$=(0,a.useRef)(),[U,V]=(0,a.useState)(5);(0,a.useEffect)((()=>{0===U&&(clearInterval($.current),H.push(R.replace("#","")))}),[U]),(0,a.useEffect)((()=>{D&&5===U&&($.current=setInterval((()=>{V((e=>e-1))}),1e3))}),[D,U]);return(0,a.createElement)(a.Fragment,null,I&&(0,a.createElement)(g.rj,{columns:1,gutter:8},(0,a.createElement)(g.VQ,{simple:!0,size:36,white:!0}),(0,a.createElement)(g.M$,{title:()=>(0,a.createElement)(a.Fragment,null,b("Welcome to Newspack,","newspack"),(0,a.createElement)("br",null),b("the platform for news","newspack")),heading:1,centered:!0,isWhite:!0,noMargin:!0})),(0,a.createElement)(g.Zb,{isNarrow:!0,isWhite:!0,className:0===T.length&&n>0&&!D?"loading":null},(0,a.createElement)(g.rj,{columns:1},!I&&(0,a.createElement)("h1",null,B?(0,a.createElement)(i.Z,{className:"newspack--error",icon:c.Z}):D?(0,a.createElement)("span",{className:"newspack-checkbox-icon newspack-checkbox-icon--checked"},(0,a.createElement)(i.Z,{icon:u.Z})):void 0,b(B?"Installation error":D?"Installation complete":"Installing…","newspack")),0===T.length&&n>0?(0,a.createElement)(g.ko,{completed:n,total:L}):null,(0,a.createElement)("p",null,b(B?"There has been an error during the installation. Please retry or manually install required plugins to continue with the configuration of your site.":I?"We will help you get set up by installing the most relevant plugins first before requiring a few details from you in order to build your site.":D?"Click the button below to start configuring your site.":x?"We are now installing core plugins and pre-populating your site with categories and placeholder stories to help you pre-configure it. All placeholder content can be deleted later.":"We are now installing core plugins.","newspack"),D&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)("br",null),(0,a.createElement)("i",null,b("Automatic redirection in","newspack")," ",U," ",b("seconds…","newspack")))),!1===k&&(0,a.createElement)(g.qX,{isError:!0,noticeText:b("This site does not use HTTPS. Newspack can't be installed.","newspack")}),T.length?T.map(((e,t)=>(0,a.createElement)(g.fM,{isSmall:!0,key:t,title:e.info.message+": "+e.item,actionText:b("Retry","newspack"),onClick:Z,secondaryActionText:b("Skip","newspack"),secondaryDestructive:!0,onSecondaryActionClick:()=>(e=>{const t=[];for(let n=0;n<T.length;++n)e!==n&&t.push(T[n]);N(t),A()})(t),className:"newspack--error-actioncard"}))):null,(I||D)&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(g.C0,null),I&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(g.Zb,{noBorder:!0},(0,a.createElement)(g.Wu,{href:"#",title:b("Start a new site","newspack"),desc:b("You don't have content to import","newspack"),icon:m,className:"br--top",isPressed:j,onClick:()=>F("generated"),grouped:!0}),(0,a.createElement)(g.Wu,{href:"#",title:b("Migrate an existing WordPress site","newspack"),desc:b("You have content to import","newspack"),icon:d.Z,className:"br--bottom",isPressed:O,onClick:()=>F("import"),grouped:!0})),O&&(0,a.createElement)(g.w4,{label:b("URL","newspack"),placeholder:"https://yourgroovydomain.com/",type:"url",help:b("We will import the last 50 articles from your existing site to help you with the set up and customization.","newspack"),onChange:e=>P(e)})),(0,a.createElement)(g.Zb,{noBorder:!0,className:"newspack-card__footer"},I&&j&&(0,a.createElement)(h.CheckboxControl,{checked:x,label:b("Install demo content","newspack"),onChange:C}),I&&(j||O)&&(0,a.createElement)(g.zx,{disabled:!k||O&&!(0,w.isURL)(z),isPrimary:!0,onClick:Z},b("Get Started","newspack")),!I&&(0,a.createElement)(g.zx,{disabled:!k,isPrimary:!0,href:D?R:null},b("Continue","newspack")))))))})),x=r.__,C=document.title.replace(newspack_aux_data.site_title,"__SITE_TITLE__"),T=(0,g.a4)((e=>{let{setError:t,wizardApiFetch:n,renderPrimaryButton:r}=e;const[{currencies:s=[],countries:o=[],wpseoFields:i=[]},c]=(0,a.useState)({}),[u,p]=g.PT.useObjectState({});(0,a.useEffect)((()=>{n({path:"/newspack/v1/profile/",method:"GET"}).then((e=>{c({currencies:e.currencies,countries:e.countries,wpseoFields:e.wpseo_fields}),p(e.profile)})).catch(t)}),[]),(0,a.useEffect)((()=>{"string"==typeof u.site_title&&(document.title=C.replace("__SITE_TITLE__",u.site_title))}),[u.site_title]);const m=e=>{let{options:t,label:n,key:r,type:s,placeholder:o,className:l}=e;return t?(0,a.createElement)(g.Yw,{label:n,value:u[r],onChange:p(r),options:t,className:l}):"image"===s?(0,a.createElement)(g.Ur,{label:n,style:{width:"102px",height:"102px"},image:u[r],isCovering:!0,onChange:p(r)}):(0,a.createElement)(g.w4,{label:n,value:u[r]||"",onChange:p(r),placeholder:o,className:l})};return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(g.M$,{title:x("Site Profile","newspack"),description:x("Add and manage the basic information","newspack")}),(0,a.createElement)(g.rj,{columns:3,gutter:32,rowGap:16,className:"newspack-site-profile"},m({key:"site_icon",label:x("Site Icon","newspack"),type:"image"}),(0,a.createElement)(g.rj,{columns:1,gutter:16},m({key:"site_title",label:x("Site Title","newspack")}),m({key:"tagline",label:x("Tagline","newspack")})),(0,a.createElement)(g.rj,{columns:1,gutter:16},m({options:o,key:"countrystate",label:x("Country","newspack")}),m({options:s,key:"currency",label:x("Currency")}))),(0,a.createElement)(g.M$,{title:x("Social Accounts","newspack"),description:x("Allow visitors to quickly access your social profiles","newspack")}),(0,a.createElement)(g.rj,{columns:3,gutter:32,rowGap:16},i.map((e=>(0,a.createElement)(a.Fragment,{key:e.key},m({...e}))))),(0,a.createElement)("div",{className:"newspack-buttons-card"},r({onClick:()=>l()({path:"/newspack/v1/profile/",method:"POST",data:{profile:u}})})))}),{hidePrimaryButton:!0});var N=n(4184),z=n.n(N),P=n(9818),M=n(7405);const F=r.__,j={once:{tieredLabel:F("One-time donations"),staticLabel:F("Suggested one-time donation amount")},month:{tieredLabel:F("Monthly donations"),staticLabel:F("Suggested donation amount per month")},year:{tieredLabel:F("Annual donations"),staticLabel:F("Suggested donation amount per year")}},O=Object.keys(j),W=()=>{const e=g.en.useWizardData("reader-revenue"),{updateWizardSettings:t}=(0,P.useDispatch)(g.en.STORE_NAMESPACE);if(!e.donation_data||"errors"in e.donation_data)return null;const{amounts:n,currencySymbol:r,tiered:s,disabledFrequencies:o,minimumDonation:l}=e.donation_data,i=e=>n=>t({slug:"newspack-reader-revenue-wizard",path:["donation_data",...e],value:n}),c=O.map((e=>({key:e,...j[e]}))),u=parseFloat(l);return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(g.Zb,{headerActions:!0,noBorder:!0},(0,a.createElement)(g.M$,{title:F("Suggested Donations","newspack"),description:F("Set suggested donation amounts. These will be the default settings for the Donate block.","newspack"),noMargin:!0}),(0,a.createElement)(g.Yw,{label:F("Donation Type","newspack"),onChange:()=>i(["tiered"])(!s),buttonOptions:[{value:!0,label:F("Tiered","newspack")},{value:!1,label:F("Untiered","newspack")}],buttonSmall:!0,value:s,hideLabelFromVision:!0})),s?(0,a.createElement)(g.rj,{columns:1,gutter:16},c.map((e=>{const t=o[e.key],s=Object.values(o).filter(Boolean).length===O.length-1;return(0,a.createElement)(g.Zb,{isMedium:!0,key:e.key},(0,a.createElement)(g.rj,{columns:1,gutter:16},(0,a.createElement)(h.ToggleControl,{checked:!t,onChange:()=>i(["disabledFrequencies",e.key])(!t),label:e.tieredLabel,disabled:!t&&s}),!t&&(0,a.createElement)(g.rj,{columns:3,rowGap:16},(0,a.createElement)(M.P,{currencySymbol:r,label:F("Low-tier"),error:n[e.key][0]<u?F("Warning: suggested donations should be at least the minimum donation amount.","newspack"):null,value:n[e.key][0],min:u,onChange:i(["amounts",e.key,0])}),(0,a.createElement)(M.P,{currencySymbol:r,label:F("Mid-tier"),error:n[e.key][1]<u?F("Warning: suggested donations should be at least the minimum donation amount.","newspack"):null,value:n[e.key][1],min:u,onChange:i(["amounts",e.key,1])}),(0,a.createElement)(M.P,{currencySymbol:r,label:F("High-tier"),error:n[e.key][2]<u?F("Warning: suggested donations should be at least the minimum donation amount.","newspack"):null,value:n[e.key][2],min:u,onChange:i(["amounts",e.key,2])}))))}))):(0,a.createElement)(g.Zb,{isMedium:!0},(0,a.createElement)(g.rj,{columns:3,rowGap:16},c.map((e=>(0,a.createElement)(M.P,{currencySymbol:r,label:e.staticLabel,value:n[e.key][3],min:u,error:n[e.key][3]<u?F("Warning: suggested donations should be at least the minimum donation amount.","newspack"):null,onChange:i(["amounts",e.key,3]),key:e.key}))))),(0,a.createElement)(g.Zb,{headerActions:!0,noBorder:!0},(0,a.createElement)(g.M$,{title:F("Minimum Donation","newspack"),description:F("Set minimum donation amount. Setting a reasonable minimum donation amount can help protect your site from bot attacks.","newspack"),noMargin:!0}),(0,a.createElement)(g.w4,{label:F("Minimum donation","newspack"),type:"number",min:1,value:u,onChange:e=>i(["minimumDonation"])(e)})))},L=r.__,{SettingsCard:A}=g.Zr,Z=()=>{const e=g.en.useWizardData("reader-revenue"),{testMode:t=!1,publishableKey:n="",secretKey:r="",testPublishableKey:s="",testSecretKey:o=""}=e.stripe_data||{},{updateWizardSettings:l}=(0,P.useDispatch)(g.en.STORE_NAMESPACE),i=e=>t=>l({slug:"newspack-reader-revenue-wizard",path:["stripe_data",e],value:t});return(0,a.createElement)(g.rj,{columns:1,gutter:16},(0,a.createElement)(g.rj,{columns:1,gutter:16},(0,a.createElement)("p",{className:"newspack-payment-setup-screen__api-keys-instruction"},L("Configure Stripe and enter your API keys","newspack")," – ",(0,a.createElement)(h.ExternalLink,{href:"https://stripe.com/docs/keys#api-keys"},L("learn how"))),(0,a.createElement)(h.CheckboxControl,{label:L("Use Stripe in test mode","newspack"),checked:t,onChange:i("testMode"),help:L("Test mode will not capture real payments. Use it for testing your purchase flow.","newspack")})),(0,a.createElement)(g.rj,{noMargin:!0,rowGap:16},t?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(g.w4,{type:"password",value:s,label:L("Test Publishable Key","newspack"),onChange:i("testPublishableKey")}),(0,a.createElement)(g.w4,{type:"password",value:o,label:L("Test Secret Key","newspack"),onChange:i("testSecretKey")})):(0,a.createElement)(a.Fragment,null,(0,a.createElement)(g.w4,{type:"password",value:n,label:L("Publishable Key","newspack"),onChange:i("publishableKey")}),(0,a.createElement)(g.w4,{type:"password",value:r,label:L("Secret Key","newspack"),onChange:i("secretKey")}))))},H=r.__;var R=n(7462);const B=r.__,I=e=>{let{className:t,onUpdate:n,isOnboarding:r=!0}=e;const[o,i]=(0,a.useState)(),[c,u]=g.PT.useObjectState({}),p=e=>{u(e),n&&n((0,s.mapValues)(e.settings,(0,s.property)("value")))},m=()=>{l()({path:"/newspack/v1/wizard/newspack-engagement-wizard/newsletters"}).then(p).catch(i)};(0,a.useEffect)(m,[]);const d=e=>{var t,n,a,r,s,o;return{value:(null===(t=c.settings[e])||void 0===t?void 0:t.value)||"",checked:Boolean(null===(n=c.settings[e])||void 0===n?void 0:n.value),label:null===(a=c.settings[e])||void 0===a?void 0:a.description,placeholder:null===(r=c.settings[e])||void 0===r?void 0:r.placeholder,options:(null===(s=c.settings[e])||void 0===s||null===(o=s.options)||void 0===o?void 0:o.map((e=>({value:e.value,label:e.name}))))||null,onChange:t=>p({settings:{[e]:{value:t}}})}};return!o&&(0,s.isEmpty)(c)?(0,a.createElement)("div",{className:"flex justify-around mt4"},(0,a.createElement)(g.Pi,null)):o?(0,a.createElement)(g.qX,{noticeText:o.message||B("Something went wrong.","newspack"),isError:!0}):(0,a.createElement)("div",{className:t},!1===c.configured&&(0,a.createElement)(g.xf,{plugins:["newspack-newsletters"],withoutFooterButton:!0,onStatus:e=>{let{complete:t}=e;return t&&m()}}),!0===c.configured&&(()=>{const e=d("newspack_newsletters_service_provider");return(0,a.createElement)(g.rj,{gutter:16,columns:1},(0,s.values)(c.settings).filter((t=>!t.provider||t.provider===e.value)).map((e=>{if(r&&!e.onboarding)return null;switch(e.type){case"select":return(0,a.createElement)(g.Yw,(0,R.Z)({key:e.key},d(e.key)));case"checkbox":return(0,a.createElement)(h.CheckboxControl,(0,R.Z)({key:e.key},d(e.key)));default:return(0,a.createElement)(g.rj,{columns:1,gutter:8,key:e.key},(0,a.createElement)(g.w4,d(e.key)),e.help&&e.helpURL&&(0,a.createElement)("p",null,(0,a.createElement)(h.ExternalLink,{href:e.helpURL},e.help)))}})))})())},D=e=>{let{onUpdate:t}=e;const[n,r]=(0,a.useState)(!1),[s,o]=(0,a.useState)(!1),[i,c]=(0,a.useState)([]),u=e=>{c(e),"function"==typeof t&&t(e)},p=(e,t)=>n=>{const a=[...i];a[e][t]=n,u(a)};return(0,a.useEffect)((()=>{r(!1),o(!0),l()({path:"/newspack-newsletters/v1/lists"}).then(u).catch(r).finally((()=>o(!1)))}),[]),null!=i&&i.length||n?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(g.M$,{title:B("Subscription Lists","newspack"),description:B("Manage the lists available for subscription.","newspack")}),n&&(0,a.createElement)(g.qX,{noticeText:(null==n?void 0:n.message)||B("Something went wrong.","newspack"),isError:!0}),i.map(((e,t)=>(0,a.createElement)(g.Zb,{key:e.id,isSmall:!0},(0,a.createElement)(h.ToggleControl,{label:e.name,checked:e.active,disabled:s,onChange:p(t,"active")}),e.active&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(g.w4,{label:B("List title","newspack"),value:e.title,disabled:s,onChange:p(t,"title")}),(0,a.createElement)(h.TextareaControl,{label:B("List description","newspack"),value:e.description,disabled:s,onChange:p(t,"description")}))))),(0,a.createElement)("div",{className:"newspack-buttons-card"},(0,a.createElement)(g.zx,{isPrimary:!0,onClick:()=>{r(!1),o(!0),l()({path:"/newspack-newsletters/v1/lists",method:"post",data:{lists:i}}).then(u).catch(r).finally((()=>o(!1)))},disabled:s},B("Save Subscription Lists","newspack")))):null},$=()=>{const[{newslettersConfig:e},t]=g.PT.useObjectState({}),[n,r]=(0,a.useState)(""),[s,o]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{const t=null==e?void 0:e.newspack_newsletters_service_provider;o(!(!n||t===n)),!n&&t&&r(t)}),[null==e?void 0:e.newspack_newsletters_service_provider]),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(g.Zb,{headerActions:!0,noBorder:!0},(0,a.createElement)("h2",null,B("Authoring","newspack")),(0,a.createElement)(g.zx,{variant:"primary",onClick:async()=>l()({path:"/newspack/v1/wizard/newspack-engagement-wizard/newsletters",method:"POST",data:e}).finally((()=>{r(null==e?void 0:e.newspack_newsletters_service_provider),o(!1)}))},B("Save Settings","newspack"))),(0,a.createElement)(I,{isOnboarding:!1,onUpdate:e=>t({newslettersConfig:e})}),s?(0,a.createElement)(g.qX,{noticeText:B("Please save your settings before changing your subscription lists.","newspack"),isWarning:!0}):(0,a.createElement)(D,null))};(0,g.a4)((()=>(0,a.createElement)(a.Fragment,null,(0,a.createElement)($,null),(0,a.createElement)(g.M$,{title:B("WooCommerce integration","newspack")}),(0,a.createElement)(g.xf,{plugins:["mailchimp-for-woocommerce"],withoutFooterButton:!0}))));var U=n(2307);const V=r.__,G={"reader-revenue":{label:V("Reader Revenue","newspack"),description:V("Encourage site visitors to contribute to your publishing through donations","newspack"),Component:e=>{var t;let{className:n}=e;const r=g.en.useWizardData("reader-revenue");return(0,a.createElement)("div",{className:z()(n,{"o-50":(0,s.isEmpty)(r)})},"nrh"===(null===(t=r.platform_data)||void 0===t?void 0:t.platform)?(0,a.createElement)("p",null,H("Looks like this Newspack instance is already configured to use News Revenue Hub as the Reader Revenue platform. To edit these settings, visit the Reader Revenue section from the Newspack dashboard.","newspack")):(0,a.createElement)(a.Fragment,null,(0,a.createElement)(W,null),(0,a.createElement)("h2",null,H("Payment gateway","newspack")),(0,a.createElement)(Z,null)))},configuration:{is_service_enabled:!1}},newsletters:{label:V("Newsletters","newspack"),description:V("Create email newsletters and send them to your mail lists, all without leaving your website","newspack"),Component:I,configuration:{is_service_enabled:!1}},"google-ad-manager":{label:V("Google Ad Manager","newspack"),description:V("An advanced ad inventory creation and management platform, allowing you to be specific about ad placements","newspack"),Component:U.Z,configuration:{is_service_enabled:!1}}},K=(0,g.a4)((e=>{let{renderPrimaryButton:t}=e;const[n,r]=g.PT.useObjectState(G),[o,i]=(0,a.useState)(!0),c=(0,s.keys)(n),u=g.en.useWizardData("reader-revenue");return(0,a.useEffect)((()=>{l()({path:"/newspack/v1/wizard/newspack-setup-wizard/services"}).then((e=>{r(e),i(!1)}))}),[]),(0,a.createElement)(a.Fragment,null,(0,s.values)(n).map(((e,t)=>{const n=c[t],s=e.Component;return(0,a.createElement)(g.fM,{isMedium:!0,key:t,title:e.label,description:e.description,className:n,toggleChecked:e.configuration.is_service_enabled,hasGreyHeader:e.configuration.is_service_enabled,toggleOnChange:e=>r({[n]:{configuration:{is_service_enabled:e}}}),disabled:o,href:e.configuration.is_service_enabled&&e.href,actionText:e.configuration.is_service_enabled&&e.actionText},e.configuration.is_service_enabled&&s?(0,a.createElement)(s,{className:"newspack-action-card__region-children__inner",configuration:e.configuration,onUpdate:e=>r({[n]:{configuration:e}})}):null)})),(0,a.createElement)("div",{className:"newspack-buttons-card"},t({onClick:async()=>{const e=(0,s.mapValues)(n,(0,s.property)("configuration"));return e["reader-revenue"]={...e["reader-revenue"],...u},l()({path:"/newspack/v1/wizard/newspack-setup-wizard/services",method:"POST",data:e})}})))}),{hidePrimaryButton:!0});var q=n(3741);const Y=r.__,X=(0,g.a4)((()=>{(0,a.useEffect)((()=>(document.body.classList.add("newspack-wizard__completed","newspack-wizard__blue"),document.querySelector(".newspack-wizard__header").remove(),()=>document.body.classList.remove("newspack-wizard__completed","newspack-wizard__blue"))),[]);const e=z()("flex","flex-column","justify-between"),t=z()("flex","flex-row-reverse");return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(g.Zb,{noBorder:!0},(0,a.createElement)(g.M$,{title:Y("You’re ready to go!","newspack"),description:Y("While you’re off to a great start, there’s plenty more you can do:","newspack"),heading:1,centered:!0,isWhite:!0})),(0,a.createElement)(g.Zb,{isWhite:!0},(0,a.createElement)(g.rj,null,(0,a.createElement)(g.fM,{title:Y("Configure Newspack","newspack"),description:Y("Go in-depth with our various options to set up Newspack to meet your needs.","newspack"),className:e},(0,a.createElement)("div",{className:t},(0,a.createElement)(g.zx,{variant:"primary",href:newspack_urls.dashboard},Y("Go to the Dashboard","newspack")))),(0,a.createElement)(g.fM,{title:Y("Explore our documentation","newspack"),description:Y("Read about the different tools, plugins, and themes that make up Newspack.","newspack"),className:e},(0,a.createElement)("div",{className:t},(0,a.createElement)(g.zx,{variant:"primary",href:newspack_urls.support},Y("Read Documentation","newspack")))),(0,a.createElement)(g.fM,{title:Y("Update your homepage","newspack"),description:Y("We’ve created the basics, now it’s time to update the content.","newspack"),className:e},(0,a.createElement)("div",{className:t},(0,a.createElement)(g.zx,{variant:"primary",href:newspack_urls.homepage},Y("Edit Homepage","newspack")))),(0,a.createElement)(g.fM,{title:Y("View your site","newspack"),description:Y("Preview what you’ve created so far. It looks great!","newspack"),className:e},(0,a.createElement)("div",{className:t},(0,a.createElement)(g.zx,{variant:"primary",href:newspack_urls.site},Y("Visit Site","newspack")))))))}),{hidePrimaryButton:!0}),Q=r.__,{HashRouter:J,Route:ee}=k.Z,te=[{path:"/",label:Q("Welcome","newspack"),render:e=>(0,a.createElement)(S,(0,s.omit)(e,["routes","headerText","buttonText"])),isHiddenInNav:!0},{path:"/settings",label:Q("Settings","newspack"),subHeaderText:Q("Share a few details so we can start setting up your site","newspack"),render:T},{path:"/services",label:Q("Services","newspack"),subHeaderText:Q("Activate and configure the services that you need","newspack"),render:K},{path:"/design",label:Q("Design","newspack"),subHeaderText:Q("Customize the look and feel of your site","newspack"),render:q.Z},{path:"/completed",label:Q("Completed","newspack"),render:X,isHiddenInNav:!0}];(0,a.render)((0,a.createElement)((0,g.uF)((e=>{let{wizardApiFetch:t,setError:n}=e;return(0,a.createElement)(a.Fragment,null,newspack_aux_data.has_completed_setup&&(0,a.createElement)(g.qX,{isWarning:!0,className:"ma0"},Q("Heads up! The setup has already been completed. No need to run it again.","newspack")),(0,a.createElement)(J,{hashType:"slash"},te.map(((e,r)=>{var s;const o=null===(s=te[r+1])||void 0===s?void 0:s.path,l=o?{href:"#"+o}:{};return(0,a.createElement)(ee,{key:r,path:e.path,exact:"/"===e.path,render:()=>e.render({wizardApiFetch:t,setError:n,disableUpcomingInTabbedNavigation:!0,tabbedNavigation:te,headerText:e.label,subHeaderText:e.subHeaderText,buttonText:o?e.buttonText||Q("Continue"):Q("Finish"),buttonAction:l})})}))))}),[]),{simpleFooter:!0}),document.getElementById("newspack-setup-wizard"))},9196:e=>{e.exports=window.React},2819:e=>{e.exports=window.lodash},6292:e=>{e.exports=window.moment},6989:e=>{e.exports=window.wp.apiFetch},5609:e=>{e.exports=window.wp.components},9818:e=>{e.exports=window.wp.data},9307:e=>{e.exports=window.wp.element},2694:e=>{e.exports=window.wp.hooks},2629:e=>{e.exports=window.wp.htmlEntities},5736:e=>{e.exports=window.wp.i18n},9630:e=>{e.exports=window.wp.keycodes},444:e=>{e.exports=window.wp.primitives},6483:e=>{e.exports=window.wp.url}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}};return t[e].call(s.exports,s,s.exports,a),s.exports}a.m=t,e=[],a.O=(t,n,r,s)=>{if(!n){var o=1/0;for(u=0;u<e.length;u++){for(var[n,r,s]=e[u],l=!0,i=0;i<n.length;i++)(!1&s||o>=s)&&Object.keys(a.O).every((e=>a.O[e](n[i])))?n.splice(i--,1):(l=!1,s<o&&(o=s));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,r,s]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.j=350,(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={350:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,s,[o,l,i]=n,c=0;if(o.some((t=>0!==e[t]))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(i)var u=i(a)}for(t&&t(n);c<o.length;c++)s=o[c],a.o(e,s)&&e[s]&&e[s][0](),e[o[c]]=0;return a.O(u)},n=globalThis.webpackChunkwebpack=globalThis.webpackChunkwebpack||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=a.O(void 0,[351],(()=>a(4809)));r=a.O(r);var s=window;for(var o in r)s[o]=r[o];r.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})})();