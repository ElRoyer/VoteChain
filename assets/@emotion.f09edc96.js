import"./hoist-non-react-statics.b29c1177.js";import"./node-stdlib-browser.6b0e4e0c.js";import{j as L,R as H,r as b}from"./react.bd8c6b34.js";import{_ as ee}from"./@babel.61813fc7.js";import{m as he,R as pe,c as me,K as ye,s as _,a as P,r as l,D as ge,b as xe,d as be,e as ve,h as we,f as k,W as o,M as p,g as q,i as G,j as $,k as ke,l as Se,n as Ce,o as te,t as re,p as Pe,q as I,u as Ae,v as Te,w as ne}from"./stylis.ce260fe6.js";const Ee=L.exports.Fragment,N=L.exports.jsx,Re=L.exports.jsxs;function Oe(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function _e(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var $e=function(){function t(r){var n=this;this._insertTag=function(a){var i;n.tags.length===0?n.insertionPoint?i=n.insertionPoint.nextSibling:n.prepend?i=n.container.firstChild:i=n.before:i=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,i),n.tags.push(a)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(n){n.forEach(this._insertTag)},e.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(_e(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Oe(a);try{i.insertRule(n,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},e.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},t}(),U=function(e){var r=new WeakMap;return function(n){if(r.has(n))return r.get(n);var a=e(n);return r.set(n,a),a}};function ae(t){var e=Object.create(null);return function(r){return e[r]===void 0&&(e[r]=t(r)),e[r]}}var Me=function(e,r,n){for(var a=0,i=0;a=i,i=I(),a===38&&i===12&&(r[n]=1),!re(i);)te();return Te(e,ne)},Fe=function(e,r){var n=-1,a=44;do switch(re(a)){case 0:a===38&&I()===12&&(r[n]=1),e[n]+=Me(ne-1,r,n);break;case 2:e[n]+=Ae(a);break;case 4:if(a===44){e[++n]=I()===58?"&\f":"",r[n]=e[n].length;break}default:e[n]+=Pe(a)}while(a=te());return e},Ie=function(e,r){return Se(Fe(Ce(e),r))},V=new WeakMap,Ne=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,n=e.parent,a=e.column===n.column&&e.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!V.get(n))&&!a){V.set(e,!0);for(var i=[],s=Ie(r,i),c=n.props,d=0,y=0;d<s.length;d++)for(var u=0;u<c.length;u++,y++)e.props[y]=i[d]?s[d].replace(/&\f/g,c[u]):c[u]+" "+s[d]}}},Le=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function ie(t,e){switch(we(t,e)){case 5103:return o+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return o+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return o+t+$+t+p+t+t;case 6828:case 4268:return o+t+p+t+t;case 6165:return o+t+p+"flex-"+t+t;case 5187:return o+t+l(t,/(\w+).+(:[^]+)/,o+"box-$1$2"+p+"flex-$1$2")+t;case 5443:return o+t+p+"flex-item-"+l(t,/flex-|-self/,"")+t;case 4675:return o+t+p+"flex-line-pack"+l(t,/align-content|flex-|-self/,"")+t;case 5548:return o+t+p+l(t,"shrink","negative")+t;case 5292:return o+t+p+l(t,"basis","preferred-size")+t;case 6060:return o+"box-"+l(t,"-grow","")+o+t+p+l(t,"grow","positive")+t;case 4554:return o+l(t,/([^-])(transform)/g,"$1"+o+"$2")+t;case 6187:return l(l(l(t,/(zoom-|grab)/,o+"$1"),/(image-set)/,o+"$1"),t,"")+t;case 5495:case 3959:return l(t,/(image-set\([^]*)/,o+"$1$`$1");case 4968:return l(l(t,/(.+:)(flex-)?(.*)/,o+"box-pack:$3"+p+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+o+t+t;case 4095:case 3583:case 4068:case 2532:return l(t,/(.+)-inline(.+)/,o+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(q(t)-1-e>6)switch(k(t,e+1)){case 109:if(k(t,e+4)!==45)break;case 102:return l(t,/(.+:)(.+)-([^]+)/,"$1"+o+"$2-$3$1"+$+(k(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~G(t,"stretch")?ie(l(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(k(t,e+1)!==115)break;case 6444:switch(k(t,q(t)-3-(~G(t,"!important")&&10))){case 107:return l(t,":",":"+o)+t;case 101:return l(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+o+(k(t,14)===45?"inline-":"")+"box$3$1"+o+"$2$3$1"+p+"$2box$3")+t}break;case 5936:switch(k(t,e+11)){case 114:return o+t+p+l(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return o+t+p+l(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return o+t+p+l(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return o+t+p+t+t}return t}var ze=function(e,r,n,a){if(e.length>-1&&!e.return)switch(e.type){case ge:e.return=ie(e.value,e.length);break;case ye:return _([P(e,{value:l(e.value,"@","@"+o)})],a);case pe:if(e.length)return me(e.props,function(i){switch(ke(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return _([P(e,{props:[l(i,/:(read-\w+)/,":"+$+"$1")]})],a);case"::placeholder":return _([P(e,{props:[l(i,/:(plac\w+)/,":"+o+"input-$1")]}),P(e,{props:[l(i,/:(plac\w+)/,":"+$+"$1")]}),P(e,{props:[l(i,/:(plac\w+)/,p+"input-$1")]})],a)}return""})}},We=[ze],je=function(e){var r=e.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(f){var h=f.getAttribute("data-emotion");h.indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var a=e.stylisPlugins||We,i={},s,c=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(f){for(var h=f.getAttribute("data-emotion").split(" "),v=1;v<h.length;v++)i[h[v]]=!0;c.push(f)});var d,y=[Ne,Le];{var u,g=[xe,be(function(f){u.insert(f)})],M=he(y.concat(a,g)),S=function(h){return _(ve(h),M)};d=function(h,v,C,w){u=C,S(h?h+"{"+v.styles+"}":v.styles),w&&(m.inserted[v.name]=!0)}}var m={key:r,sheet:new $e({key:r,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:d};return m.sheet.hydrate(c),m},De=!0;function He(t,e,r){var n="";return r.split(" ").forEach(function(a){t[a]!==void 0?e.push(t[a]+";"):n+=a+" "}),n}var se=function(e,r,n){var a=e.key+"-"+r.name;(n===!1||De===!1)&&e.registered[a]===void 0&&(e.registered[a]=r.styles)},oe=function(e,r,n){se(e,r,n);var a=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var i=r;do e.insert(r===i?"."+a:"",i,e.sheet,!0),i=i.next;while(i!==void 0)}};function qe(t){for(var e=0,r,n=0,a=t.length;a>=4;++n,a-=4)r=t.charCodeAt(n)&255|(t.charCodeAt(++n)&255)<<8|(t.charCodeAt(++n)&255)<<16|(t.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(a){case 3:e^=(t.charCodeAt(n+2)&255)<<16;case 2:e^=(t.charCodeAt(n+1)&255)<<8;case 1:e^=t.charCodeAt(n)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Ge={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ue=/[A-Z]|^ms/g,Ve=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ce=function(e){return e.charCodeAt(1)===45},B=function(e){return e!=null&&typeof e!="boolean"},F=ae(function(t){return ce(t)?t:t.replace(Ue,"-$&").toLowerCase()}),X=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(Ve,function(n,a,i){return x={name:a,styles:i,next:x},a})}return Ge[e]!==1&&!ce(e)&&typeof r=="number"&&r!==0?r+"px":r};function A(t,e,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return x={name:r.name,styles:r.styles,next:x},r.name;if(r.styles!==void 0){var n=r.next;if(n!==void 0)for(;n!==void 0;)x={name:n.name,styles:n.styles,next:x},n=n.next;var a=r.styles+";";return a}return Be(t,e,r)}case"function":{if(t!==void 0){var i=x,s=r(t);return x=i,A(t,e,s)}break}}if(e==null)return r;var c=e[r];return c!==void 0?c:r}function Be(t,e,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=A(t,e,r[a])+";";else for(var i in r){var s=r[i];if(typeof s!="object")e!=null&&e[s]!==void 0?n+=i+"{"+e[s]+"}":B(s)&&(n+=F(i)+":"+X(i,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var c=0;c<s.length;c++)B(s[c])&&(n+=F(i)+":"+X(i,s[c])+";");else{var d=A(t,e,s);switch(i){case"animation":case"animationName":{n+=F(i)+":"+d+";";break}default:n+=i+"{"+d+"}"}}}return n}var K=/label:\s*([^\s;\n{]+)\s*(;|$)/g,x,z=function(e,r,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var a=!0,i="";x=void 0;var s=e[0];s==null||s.raw===void 0?(a=!1,i+=A(n,r,s)):i+=s[0];for(var c=1;c<e.length;c++)i+=A(n,r,e[c]),a&&(i+=s[c]);K.lastIndex=0;for(var d="",y;(y=K.exec(i))!==null;)d+="-"+y[1];var u=qe(i)+d;return{name:u,styles:i,next:x}},Xe=function(e){return e()},le=H["useInsertionEffect"]?H["useInsertionEffect"]:!1,Ke=le||Xe,Y=le||b.exports.useLayoutEffect,fe=b.exports.createContext(typeof HTMLElement<"u"?je({key:"css"}):null);fe.Provider;var de=function(e){return b.exports.forwardRef(function(r,n){var a=b.exports.useContext(fe);return e(r,a,n)})},T=b.exports.createContext({}),dt=function(){return b.exports.useContext(T)},Ye=function(e,r){if(typeof r=="function"){var n=r(e);return n}return ee({},e,r)},Ze=U(function(t){return U(function(e){return Ye(t,e)})}),ut=function(e){var r=b.exports.useContext(T);return e.theme!==r&&(r=Ze(r)(e.theme)),N(T.Provider,{value:r,children:e.children})},ht=de(function(t,e){var r=t.styles,n=z([r],void 0,b.exports.useContext(T)),a=b.exports.useRef();return Y(function(){var i=e.key+"-global",s=new e.sheet.constructor({key:i,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),c=!1,d=document.querySelector('style[data-emotion="'+i+" "+n.name+'"]');return e.sheet.tags.length&&(s.before=e.sheet.tags[0]),d!==null&&(c=!0,d.setAttribute("data-emotion",i),s.hydrate([d])),a.current=[s,c],function(){s.flush()}},[e]),Y(function(){var i=a.current,s=i[0],c=i[1];if(c){i[1]=!1;return}if(n.next!==void 0&&oe(e,n.next,!0),s.tags.length){var d=s.tags[s.tags.length-1].nextElementSibling;s.before=d,s.flush()}e.insert("",n,s,!1)},[e,n.name]),null});function Je(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return z(e)}var pt=function(){var e=Je.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Qe=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,et=ae(function(t){return Qe.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),tt=et,rt=function(e){return e!=="theme"},Z=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?tt:rt},J=function(e,r,n){var a;if(r){var i=r.shouldForwardProp;a=e.__emotion_forwardProp&&i?function(s){return e.__emotion_forwardProp(s)&&i(s)}:i}return typeof a!="function"&&n&&(a=e.__emotion_forwardProp),a},nt=function(e){var r=e.cache,n=e.serialized,a=e.isStringTag;return se(r,n,a),Ke(function(){return oe(r,n,a)}),null},at=function t(e,r){var n=e.__emotion_real===e,a=n&&e.__emotion_base||e,i,s;r!==void 0&&(i=r.label,s=r.target);var c=J(e,r,n),d=c||Z(a),y=!d("as");return function(){var u=arguments,g=n&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(i!==void 0&&g.push("label:"+i+";"),u[0]==null||u[0].raw===void 0)g.push.apply(g,u);else{g.push(u[0][0]);for(var M=u.length,S=1;S<M;S++)g.push(u[S],u[0][S])}var m=de(function(f,h,v){var C=y&&f.as||a,w="",W=[],E=f;if(f.theme==null){E={};for(var j in f)E[j]=f[j];E.theme=b.exports.useContext(T)}typeof f.className=="string"?w=He(h.registered,W,f.className):f.className!=null&&(w=f.className+" ");var D=z(g.concat(W),h.registered,E);w+=h.key+"-"+D.name,s!==void 0&&(w+=" "+s);var ue=y&&c===void 0?Z(C):d,R={};for(var O in f)y&&O==="as"||ue(O)&&(R[O]=f[O]);return R.className=w,R.ref=v,Re(Ee,{children:[N(nt,{cache:h,serialized:D,isStringTag:typeof C=="string"}),N(C,{...R})]})});return m.displayName=i!==void 0?i:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",m.defaultProps=e.defaultProps,m.__emotion_real=m,m.__emotion_base=a,m.__emotion_styles=g,m.__emotion_forwardProp=c,Object.defineProperty(m,"toString",{value:function(){return"."+s}}),m.withComponent=function(f,h){return t(f,ee({},r,h,{shouldForwardProp:J(m,h,!0)})).apply(void 0,g)},m}},it=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Q=at.bind();it.forEach(function(t){Q[t]=Q(t)});export{Ee as F,ht as G,T,Re as a,ut as b,N as j,pt as k,Q as n,dt as u};