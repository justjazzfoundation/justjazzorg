(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[1105],{1105:(t,e,n)=>{!function(t){"use strict";function e(t){for(var e={},n=t.split(" "),r=0;r<n.length;++r)e[n[r]]=!0;return e}function n(e,n){"string"==typeof e&&(e=[e]);var r=[];function i(t){if(t)for(var e in t)t.hasOwnProperty(e)&&r.push(e)}i(n.keywords),i(n.builtin),i(n.timerOps),i(n.portOps),r.length&&(n.helperType=e[0],t.registerHelper("hintWords",e[0],r));for(var o=0;o<e.length;++o)t.defineMIME(e[o],n)}t.defineMode("ttcn",(function(t,e){var n,r=t.indentUnit,i=e.keywords||{},o=e.builtin||{},s=e.timerOps||{},a=e.portOps||{},l=e.configOps||{},c=e.verdictOps||{},p=e.sutOps||{},u=e.functionOps||{},f=e.verdictConsts||{},m=e.booleanConsts||{},d=e.otherConsts||{},b=e.types||{},h=e.visibilityModifiers||{},y=e.templateMatch||{},v=e.multiLineStrings,g=!1!==e.indentStatements,x=/[+\-*&@=<>!\/]/;function k(t,e){var r=t.next();if('"'==r||"'"==r)return e.tokenize=O(r),e.tokenize(t,e);if(/[\[\]{}\(\),;\\:\?\.]/.test(r))return n=r,"punctuation";if("#"==r)return t.skipToEnd(),"atom preprocessor";if("%"==r)return t.eatWhile(/\b/),"atom ttcn3Macros";if(/\d/.test(r))return t.eatWhile(/[\w\.]/),"number";if("/"==r){if(t.eat("*"))return e.tokenize=w,w(t,e);if(t.eat("/"))return t.skipToEnd(),"comment"}if(x.test(r))return"@"==r&&(t.match("try")||t.match("catch")||t.match("lazy"))?"keyword":(t.eatWhile(x),"operator");t.eatWhile(/[\w\$_\xa1-\uffff]/);var v=t.current();return i.propertyIsEnumerable(v)?"keyword":o.propertyIsEnumerable(v)?"builtin":s.propertyIsEnumerable(v)?"def timerOps":l.propertyIsEnumerable(v)?"def configOps":c.propertyIsEnumerable(v)?"def verdictOps":a.propertyIsEnumerable(v)?"def portOps":p.propertyIsEnumerable(v)?"def sutOps":u.propertyIsEnumerable(v)?"def functionOps":f.propertyIsEnumerable(v)?"string verdictConsts":m.propertyIsEnumerable(v)?"string booleanConsts":d.propertyIsEnumerable(v)?"string otherConsts":b.propertyIsEnumerable(v)?"builtin types":h.propertyIsEnumerable(v)?"builtin visibilityModifiers":y.propertyIsEnumerable(v)?"atom templateMatch":"variable"}function O(t){return function(e,n){for(var r,i=!1,o=!1;null!=(r=e.next());){if(r==t&&!i){var s=e.peek();s&&("b"!=(s=s.toLowerCase())&&"h"!=s&&"o"!=s||e.next()),o=!0;break}i=!i&&"\\"==r}return(o||!i&&!v)&&(n.tokenize=null),"string"}}function w(t,e){for(var n,r=!1;n=t.next();){if("/"==n&&r){e.tokenize=null;break}r="*"==n}return"comment"}function E(t,e,n,r,i){this.indented=t,this.column=e,this.type=n,this.align=r,this.prev=i}function C(t,e,n){var r=t.indented;return t.context&&"statement"==t.context.type&&(r=t.context.indented),t.context=new E(r,e,n,null,t.context)}function I(t){var e=t.context.type;return")"!=e&&"]"!=e&&"}"!=e||(t.indented=t.context.indented),t.context=t.context.prev}return{startState:function(t){return{tokenize:null,context:new E((t||0)-r,0,"top",!1),indented:0,startOfLine:!0}},token:function(t,e){var r=e.context;if(t.sol()&&(null==r.align&&(r.align=!1),e.indented=t.indentation(),e.startOfLine=!0),t.eatSpace())return null;n=null;var i=(e.tokenize||k)(t,e);if("comment"==i)return i;if(null==r.align&&(r.align=!0),";"!=n&&":"!=n&&","!=n||"statement"!=r.type)if("{"==n)C(e,t.column(),"}");else if("["==n)C(e,t.column(),"]");else if("("==n)C(e,t.column(),")");else if("}"==n){for(;"statement"==r.type;)r=I(e);for("}"==r.type&&(r=I(e));"statement"==r.type;)r=I(e)}else n==r.type?I(e):g&&(("}"==r.type||"top"==r.type)&&";"!=n||"statement"==r.type&&"newstatement"==n)&&C(e,t.column(),"statement");else I(e);return e.startOfLine=!1,i},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"brace"}})),n(["text/x-ttcn","text/x-ttcn3","text/x-ttcnpp"],{name:"ttcn",keywords:e("activate address alive all alt altstep and and4b any break case component const continue control deactivate display do else encode enumerated except exception execute extends extension external for from function goto group if import in infinity inout interleave label language length log match message mixed mod modifies module modulepar mtc noblock not not4b nowait of on optional or or4b out override param pattern port procedure record recursive rem repeat return runs select self sender set signature system template testcase to type union value valueof var variant while with xor xor4b"),builtin:e("bit2hex bit2int bit2oct bit2str char2int char2oct encvalue decomp decvalue float2int float2str hex2bit hex2int hex2oct hex2str int2bit int2char int2float int2hex int2oct int2str int2unichar isbound ischosen ispresent isvalue lengthof log2str oct2bit oct2char oct2hex oct2int oct2str regexp replace rnd sizeof str2bit str2float str2hex str2int str2oct substr unichar2int unichar2char enum2int"),types:e("anytype bitstring boolean char charstring default float hexstring integer objid octetstring universal verdicttype timer"),timerOps:e("read running start stop timeout"),portOps:e("call catch check clear getcall getreply halt raise receive reply send trigger"),configOps:e("create connect disconnect done kill killed map unmap"),verdictOps:e("getverdict setverdict"),sutOps:e("action"),functionOps:e("apply derefers refers"),verdictConsts:e("error fail inconc none pass"),booleanConsts:e("true false"),otherConsts:e("null NULL omit"),visibilityModifiers:e("private public friend"),templateMatch:e("complement ifpresent subset superset permutation"),multiLineStrings:!0})}(n(4631))}}]);