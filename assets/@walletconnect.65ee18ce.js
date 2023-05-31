import{q as ze}from"./query-string.3e5d83f3.js";import{b as Z,_ as Me}from"./node-stdlib-browser.6b0e4e0c.js";import{i as un}from"./is-typedarray.90714367.js";import{t as hn}from"./typedarray-to-buffer.9039d6fe.js";import{c as A,a as fn}from"./@account-abstraction.16fd1566.js";import{d as _n}from"./detect-browser.2f4566c2.js";import{b as pn}from"./qrcode.8ac4ebac.js";import{c as gn}from"./copy-to-clipboard.eb25ebbd.js";import{b as mn}from"./preact.d568ab7b.js";import{b as P}from"./process.232f0ee3.js";import{e as Fe}from"./events.1ed0639b.js";import{f as Ne}from"./cross-fetch.140379b1.js";import"./safe-buffer.3510e1d8.js";import"./inherits.44081206.js";import"./util.0775b4ff.js";import"./string_decoder.d191aa72.js";import"./sha.js.9b95ab78.js";import"./minimalistic-assert.2f00d150.js";import"./bn.js.b2f94f66.js";import"./hash.js.e20acac1.js";import"./uint8arrays.2e5a3914.js";import{t as wn}from"./tslib.1f74f0c7.js";class Je{}class xs extends Je{constructor(e){super()}}class bn extends Je{constructor(){super()}}class vn extends bn{constructor(e){super()}}const yn="PARSE_ERROR",En="INVALID_REQUEST",xn="METHOD_NOT_FOUND",Rn="INVALID_PARAMS",Qe="INTERNAL_ERROR",he="SERVER_ERROR",Sn=[-32700,-32600,-32601,-32602,-32603],F={[yn]:{code:-32700,message:"Parse error"},[En]:{code:-32600,message:"Invalid Request"},[xn]:{code:-32601,message:"Method not found"},[Rn]:{code:-32602,message:"Invalid params"},[Qe]:{code:-32603,message:"Internal error"},[he]:{code:-32e3,message:"Server error"}},Ge=he;function kn(t){return Sn.includes(t)}function Le(t){return Object.keys(F).includes(t)?F[t]:F[Ge]}function Cn(t){const e=Object.values(F).find(n=>n.code===t);return e||F[Ge]}function Tn(t,e,n){return t.message.includes("getaddrinfo ENOTFOUND")||t.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${n} RPC url at ${e}`):t}var $={},R={},qe;function In(){if(qe)return R;qe=1,Object.defineProperty(R,"__esModule",{value:!0}),R.isBrowserCryptoAvailable=R.getSubtleCrypto=R.getBrowerCrypto=void 0;function t(){return(A===null||A===void 0?void 0:A.crypto)||(A===null||A===void 0?void 0:A.msCrypto)||{}}R.getBrowerCrypto=t;function e(){const r=t();return r.subtle||r.webkitSubtle}R.getSubtleCrypto=e;function n(){return!!t()&&!!e()}return R.isBrowserCryptoAvailable=n,R}var S={},Ae;function On(){if(Ae)return S;Ae=1,Object.defineProperty(S,"__esModule",{value:!0}),S.isBrowser=S.isNode=S.isReactNative=void 0;function t(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}S.isReactNative=t;function e(){return typeof P.exports<"u"&&typeof P.exports.versions<"u"&&typeof P.exports.versions.node<"u"}S.isNode=e;function n(){return!t()&&!e()}return S.isBrowser=n,S}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=wn.exports;e.__exportStar(In(),t),e.__exportStar(On(),t)})($);function fe(t=3){const e=Date.now()*Math.pow(10,t),n=Math.floor(Math.random()*Math.pow(10,t));return e+n}function Mn(t=6){return BigInt(fe(t))}function Nn(t,e,n){return{id:n||fe(),jsonrpc:"2.0",method:t,params:e}}function Ln(t,e,n){return{id:t,jsonrpc:"2.0",error:qn(e,n)}}function qn(t,e){return typeof t>"u"?Le(Qe):(typeof t=="string"&&(t=Object.assign(Object.assign({},Le(he)),{message:t})),typeof e<"u"&&(t.data=e),kn(t.code)&&(t=Cn(t.code)),t)}const An="^https?:";function Un(t){const e=t.match(new RegExp(/^\w+:/,"gi"));if(!(!e||!e.length))return e[0]}function Pn(t,e){const n=Un(t);return typeof n>"u"?!1:new RegExp(e).test(n)}function Ue(t){return Pn(t,An)}function Dn(t){return typeof t=="object"&&"id"in t&&"jsonrpc"in t&&t.jsonrpc==="2.0"}function Bn(t){return Dn(t)&&($n(t)||Ve(t))}function $n(t){return"result"in t}function Ve(t){return"error"in t}const ie="Session currently connected",O="Session currently disconnected",Wn="Session Rejected",jn="Missing JSON RPC response",Hn='JSON-RPC success response must include "result" field',zn='JSON-RPC error response must include "error" field',Fn='JSON RPC request must have valid "method" value',Jn='JSON RPC request must have valid "id" value',Qn="Missing one of the required parameters: bridge / uri / session",Pe="JSON RPC response format is invalid",Gn="URI format is invalid",Vn="QRCode Modal not provided",De="User close QRCode Modal",Yn=["session_request","session_update","exchange_key","connect","disconnect","display_uri","modal_closed","transport_open","transport_close","transport_error"],Kn=["wallet_addEthereumChain","wallet_switchEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"],Ye=["eth_sendTransaction","eth_signTransaction","eth_sign","eth_signTypedData","eth_signTypedData_v1","eth_signTypedData_v2","eth_signTypedData_v3","eth_signTypedData_v4","personal_sign",...Kn],ae="WALLETCONNECT_DEEPLINK_CHOICE",Zn={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan"},_e="hex",pe="utf8",Xn="binary",er="buffer",tr="array",nr="typed-array",rr="array-buffer",X="0";function D(t){return new Uint8Array(t)}function ge(t,e=!1){const n=t.toString(_e);return e?Q(n):n}function me(t){return t.toString(pe)}function Ke(t){return t.readUIntBE(0,t.length)}function W(t){return hn(t)}function C(t,e=!1){return ge(W(t),e)}function Ze(t){return me(W(t))}function Xe(t){return Ke(W(t))}function we(t){return Z.Buffer.from(B(t),_e)}function T(t){return D(we(t))}function or(t){return me(we(t))}function ir(t){return Xe(T(t))}function be(t){return Z.Buffer.from(t,pe)}function et(t){return D(be(t))}function sr(t,e=!1){return ge(be(t),e)}function ar(t){const e=parseInt(t,10);return Sr(Rr(e),"Number can only safely store up to 53 bits"),e}function cr(t){return hr(ve(t))}function lr(t){return ye(ve(t))}function dr(t,e){return fr(ve(t),e)}function ur(t){return`${t}`}function ve(t){const e=(t>>>0).toString(2);return xe(e)}function hr(t){return W(ye(t))}function ye(t){return new Uint8Array(br(t).map(e=>parseInt(e,2)))}function fr(t,e){return C(ye(t),e)}function _r(t){return!(typeof t!="string"||!new RegExp(/^[01]+$/).test(t)||t.length%8!==0)}function tt(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||e&&t.length!==2+2*e)}function ee(t){return Z.Buffer.isBuffer(t)}function Ee(t){return un.strict(t)&&!ee(t)}function nt(t){return!Ee(t)&&!ee(t)&&typeof t.byteLength<"u"}function pr(t){return ee(t)?er:Ee(t)?nr:nt(t)?rr:Array.isArray(t)?tr:typeof t}function gr(t){return _r(t)?Xn:tt(t)?_e:pe}function mr(...t){return Z.Buffer.concat(t)}function rt(...t){let e=[];return t.forEach(n=>e=e.concat(Array.from(n))),new Uint8Array([...e])}function wr(t,e=8){const n=t%e;return n?(t-n)/e*e+e:t}function br(t,e=8){const n=xe(t).match(new RegExp(`.{${e}}`,"gi"));return Array.from(n||[])}function xe(t,e=8,n=X){return vr(t,wr(t.length,e),n)}function vr(t,e,n=X){return kr(t,e,!0,n)}function B(t){return t.replace(/^0x/,"")}function Q(t){return t.startsWith("0x")?t:`0x${t}`}function yr(t){return t=B(t),t=xe(t,2),t&&(t=Q(t)),t}function Er(t){const e=t.startsWith("0x");return t=B(t),t=t.startsWith(X)?t.substring(1):t,e?Q(t):t}function xr(t){return typeof t>"u"}function Rr(t){return!xr(t)}function Sr(t,e){if(!t)throw new Error(e)}function kr(t,e,n,r=X){const o=e-t.length;let i=t;if(o>0){const a=r.repeat(o);i=n?a+t:t+a}return i}function K(t){return W(new Uint8Array(t))}function Cr(t){return Ze(new Uint8Array(t))}function ot(t,e){return C(new Uint8Array(t),!e)}function Tr(t){return Xe(new Uint8Array(t))}function Ir(...t){return T(t.map(e=>C(new Uint8Array(e))).join("")).buffer}function it(t){return D(t).buffer}function Or(t){return me(t)}function Mr(t,e){return ge(t,!e)}function Nr(t){return Ke(t)}function Lr(...t){return mr(...t)}function qr(t){return et(t).buffer}function Ar(t){return be(t)}function Ur(t,e){return sr(t,!e)}function Pr(t){return ar(t)}function Dr(t){return we(t)}function st(t){return T(t).buffer}function Br(t){return or(t)}function $r(t){return ir(t)}function Wr(t){return cr(t)}function jr(t){return lr(t).buffer}function Hr(t){return ur(t)}function at(t,e){return dr(Number(t),!e)}var l={};Object.defineProperty(l,"__esModule",{value:!0});var ct=l.getLocalStorage=bt=l.getLocalStorageOrThrow=wt=l.getCrypto=mt=l.getCryptoOrThrow=gt=l.getLocation=pt=l.getLocationOrThrow=_t=l.getNavigator=ft=l.getNavigatorOrThrow=ht=l.getDocument=ut=l.getDocumentOrThrow=dt=l.getFromWindowOrThrow=lt=l.getFromWindow=void 0;function M(t){let e;return typeof window<"u"&&typeof window[t]<"u"&&(e=window[t]),e}var lt=l.getFromWindow=M;function j(t){const e=M(t);if(!e)throw new Error(`${t} is not defined in Window`);return e}var dt=l.getFromWindowOrThrow=j;function zr(){return j("document")}var ut=l.getDocumentOrThrow=zr;function Fr(){return M("document")}var ht=l.getDocument=Fr;function Jr(){return j("navigator")}var ft=l.getNavigatorOrThrow=Jr;function Qr(){return M("navigator")}var _t=l.getNavigator=Qr;function Gr(){return j("location")}var pt=l.getLocationOrThrow=Gr;function Vr(){return M("location")}var gt=l.getLocation=Vr;function Yr(){return j("crypto")}var mt=l.getCryptoOrThrow=Yr;function Kr(){return M("crypto")}var wt=l.getCrypto=Kr;function Zr(){return j("localStorage")}var bt=l.getLocalStorageOrThrow=Zr;function Xr(){return M("localStorage")}ct=l.getLocalStorage=Xr;const eo=lt,to=dt,no=ut,ro=ht,oo=ft,vt=_t,io=pt,yt=gt,so=mt,ao=wt,co=bt,te=ct;function ne(t){return _n(t)}function re(){const t=ne();return t&&t.os?t.os:void 0}function Et(){const t=re();return t?t.toLowerCase().includes("android"):!1}function xt(){const t=re();return t?t.toLowerCase().includes("ios")||t.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1:!1}function Rt(){return re()?Et()||xt():!1}function St(){const t=ne();return t&&t.name?t.name.toLowerCase()==="node":!1}function kt(){return!St()&&!!vt()}const lo=t=>JSON.stringify(t,(e,n)=>typeof n=="bigint"?n.toString()+"n":n),uo=t=>{const e=/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,n=t.replace(e,'$1"$2n"$3');return JSON.parse(n,(r,o)=>typeof o=="string"&&o.match(/^\d+n$/)?BigInt(o.substring(0,o.length-1)):o)};function Ct(t){if(typeof t!="string")throw new Error(`Cannot safe json parse value of type ${typeof t}`);try{return uo(t)}catch{return t}}function ce(t){return typeof t=="string"?t:lo(t)||""}const Tt=Ct,It=ce;function Re(t,e){const n=It(e),r=te();r&&r.setItem(t,n)}function Se(t){let e=null,n=null;const r=te();return r&&(n=r.getItem(t)),e=n&&Tt(n),e}function ke(t){const e=te();e&&e.removeItem(t)}var Ce={};Object.defineProperty(Ce,"__esModule",{value:!0});var Ot=Ce.getWindowMetadata=void 0;const Be=l;function ho(){let t,e;try{t=Be.getDocumentOrThrow(),e=Be.getLocationOrThrow()}catch{return null}function n(){const c=t.getElementsByTagName("link"),f=[];for(let _=0;_<c.length;_++){const b=c[_],v=b.getAttribute("rel");if(v&&v.toLowerCase().indexOf("icon")>-1){const h=b.getAttribute("href");if(h)if(h.toLowerCase().indexOf("https:")===-1&&h.toLowerCase().indexOf("http:")===-1&&h.indexOf("//")!==0){let E=e.protocol+"//"+e.host;if(h.indexOf("/")===0)E+=h;else{const k=e.pathname.split("/");k.pop();const H=k.join("/");E+=H+"/"+h}f.push(E)}else if(h.indexOf("//")===0){const E=e.protocol+h;f.push(E)}else f.push(h)}}return f}function r(...c){const f=t.getElementsByTagName("meta");for(let _=0;_<f.length;_++){const b=f[_],v=["itemprop","property","name"].map(h=>b.getAttribute(h)).filter(h=>h?c.includes(h):!1);if(v.length&&v){const h=b.getAttribute("content");if(h)return h}}return""}function o(){let c=r("name","og:site_name","og:title","twitter:title");return c||(c=t.title),c}function i(){return r("description","og:description","twitter:description","keywords")}const a=o(),d=i(),u=e.origin,m=n();return{description:d,url:u,icons:m,name:a}}Ot=Ce.getWindowMetadata=ho;function le(){return Ot()}function fo(t){return yr(t)}function _o(t){return Q(t)}function po(t){return B(t)}function go(t){return Er(Q(t))}const Mt=fe;function Y(){return((e,n)=>{for(n=e="";e++<36;n+=e*51&52?(e^15?8^Math.random()*(e^20?16:4):4).toString(16):"-");return n})()}function mo(){console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!")}function Nt(t,e){let n;const r=Zn[t];return r&&(n=`https://${r}.infura.io/v3/${e}`),n}function wo(t,e){let n;const r=Nt(t,e.infuraId);return e.custom&&e.custom[t]?n=e.custom[t]:r&&(n=r),n}function bo(t,e){const n=encodeURIComponent(t);return e.universalLink?`${e.universalLink}/wc?uri=${n}`:e.deepLink?`${e.deepLink}${e.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}`:""}function vo(t){const e=t.href.split("?")[0];Re(ae,Object.assign(Object.assign({},t),{href:e}))}function Lt(t,e){return t.filter(n=>n.name.toLowerCase().includes(e.toLowerCase()))[0]}function yo(t,e){let n=t;return e&&(n=e.map(r=>Lt(t,r)).filter(Boolean)),n}function Eo(t,e){return async(...r)=>new Promise((o,i)=>{const a=(d,u)=>{(d===null||typeof d>"u")&&i(d),o(u)};t.apply(e,[...r,a])})}function qt(t){const e=t.message||"Failed or Rejected Request";let n=-32e3;if(t&&!t.code)switch(e){case"Parse error":n=-32700;break;case"Invalid request":n=-32600;break;case"Method not found":n=-32601;break;case"Invalid params":n=-32602;break;case"Internal error":n=-32603;break;default:n=-32e3;break}const r={code:n,message:e};return t.data&&(r.data=t.data),r}const At="https://registry.walletconnect.com";function xo(){return At+"/api/v2/wallets"}function Ro(){return At+"/api/v2/dapps"}function Ut(t,e="mobile"){var n;return{name:t.name||"",shortName:t.metadata.shortName||"",color:t.metadata.colors.primary||"",logo:(n=t.image_url.sm)!==null&&n!==void 0?n:"",universalLink:t[e].universal||"",deepLink:t[e].native||""}}function So(t,e="mobile"){return Object.values(t).filter(n=>!!n[e].universal||!!n[e].native).map(n=>Ut(n,e))}function Pt(t){const e=t.indexOf("?")!==-1?t.indexOf("?"):void 0;return typeof e<"u"?t.substr(e):""}function Dt(t,e){let n=Te(t);return n=Object.assign(Object.assign({},n),e),t=Bt(n),t}function Te(t){return ze.parse(t)}function Bt(t){return ze.stringify(t)}function $t(t){return typeof t.bridge<"u"}function Wt(t){const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),o=t.substring(e+1,n);function i(c){const f="@",_=c.split(f);return{handshakeTopic:_[0],version:parseInt(_[1],10)}}const a=i(o),d=typeof n<"u"?t.substr(n):"";function u(c){const f=Te(c);return{key:f.key||"",bridge:f.bridge||""}}const m=u(d);return Object.assign(Object.assign({protocol:r},a),m)}function ko(t){return t===""||typeof t=="string"&&t.trim()===""}function Co(t){return!(t&&t.length)}function To(t){return ee(t)}function Io(t){return Ee(t)}function Oo(t){return nt(t)}function Mo(t){return pr(t)}function No(t){return gr(t)}function Lo(t,e){return tt(t,e)}function qo(t){return typeof t.params=="object"}function jt(t){return typeof t.method<"u"}function U(t){return typeof t.result<"u"}function J(t){return typeof t.error<"u"}function de(t){return typeof t.event<"u"}function Ht(t){return Yn.includes(t)||t.startsWith("wc_")}function zt(t){return t.method.startsWith("wc_")?!0:!Ye.includes(t.method)}const Ao=Object.freeze(Object.defineProperty({__proto__:null,convertArrayBufferToBuffer:K,convertArrayBufferToUtf8:Cr,convertArrayBufferToHex:ot,convertArrayBufferToNumber:Tr,concatArrayBuffers:Ir,convertBufferToArrayBuffer:it,convertBufferToUtf8:Or,convertBufferToHex:Mr,convertBufferToNumber:Nr,concatBuffers:Lr,convertUtf8ToArrayBuffer:qr,convertUtf8ToBuffer:Ar,convertUtf8ToHex:Ur,convertUtf8ToNumber:Pr,convertHexToBuffer:Dr,convertHexToArrayBuffer:st,convertHexToUtf8:Br,convertHexToNumber:$r,convertNumberToBuffer:Wr,convertNumberToArrayBuffer:jr,convertNumberToUtf8:Hr,convertNumberToHex:at,detectEnv:ne,detectOS:re,isAndroid:Et,isIOS:xt,isMobile:Rt,isNode:St,isBrowser:kt,safeJsonParse:Tt,safeJsonStringify:It,setLocal:Re,getLocal:Se,removeLocal:ke,getClientMeta:le,sanitizeHex:fo,addHexPrefix:_o,removeHexPrefix:po,removeHexLeadingZeros:go,payloadId:Mt,uuid:Y,logDeprecationWarning:mo,getInfuraRpcUrl:Nt,getRpcUrl:wo,formatIOSMobile:bo,saveMobileLinkInfo:vo,getMobileRegistryEntry:Lt,getMobileLinkRegistry:yo,promisify:Eo,formatRpcError:qt,getWalletRegistryUrl:xo,getDappRegistryUrl:Ro,formatMobileRegistryEntry:Ut,formatMobileRegistry:So,isWalletConnectSession:$t,parseWalletConnectUri:Wt,getQueryString:Pt,appendToQueryString:Dt,parseQueryString:Te,formatQueryString:Bt,isEmptyString:ko,isEmptyArray:Co,isBuffer:To,isTypedArray:Io,isArrayBuffer:Oo,getType:Mo,getEncoding:No,isHexString:Lo,isJsonRpcSubscription:qo,isJsonRpcRequest:jt,isJsonRpcResponseSuccess:U,isJsonRpcResponseError:J,isInternalEvent:de,isReservedEvent:Ht,isSilentPayload:zt,getFromWindow:eo,getFromWindowOrThrow:to,getDocumentOrThrow:no,getDocument:ro,getNavigatorOrThrow:oo,getNavigator:vt,getLocationOrThrow:io,getLocation:yt,getCryptoOrThrow:so,getCrypto:ao,getLocalStorageOrThrow:co,getLocalStorage:te},Symbol.toStringTag,{value:"Module"}));class Uo{constructor(){this._eventEmitters=[],typeof window<"u"&&typeof window.addEventListener<"u"&&(window.addEventListener("online",()=>this.trigger("online")),window.addEventListener("offline",()=>this.trigger("offline")))}on(e,n){this._eventEmitters.push({event:e,callback:n})}trigger(e){let n=[];e&&(n=this._eventEmitters.filter(r=>r.event===e)),n.forEach(r=>{r.callback()})}}const Po=typeof Me.WebSocket<"u"?Me.WebSocket:require("ws");class Do{constructor(e){if(this.opts=e,this._queue=[],this._events=[],this._subscriptions=[],this._protocol=e.protocol,this._version=e.version,this._url="",this._netMonitor=null,this._socket=null,this._nextSocket=null,this._subscriptions=e.subscriptions||[],this._netMonitor=e.netMonitor||new Uo,!e.url||typeof e.url!="string")throw new Error("Missing or invalid WebSocket url");this._url=e.url,this._netMonitor.on("online",()=>this._socketCreate())}set readyState(e){}get readyState(){return this._socket?this._socket.readyState:-1}set connecting(e){}get connecting(){return this.readyState===0}set connected(e){}get connected(){return this.readyState===1}set closing(e){}get closing(){return this.readyState===2}set closed(e){}get closed(){return this.readyState===3}open(){this._socketCreate()}close(){this._socketClose()}send(e,n,r){if(!n||typeof n!="string")throw new Error("Missing or invalid topic field");this._socketSend({topic:n,type:"pub",payload:e,silent:!!r})}subscribe(e){this._socketSend({topic:e,type:"sub",payload:"",silent:!0})}on(e,n){this._events.push({event:e,callback:n})}_socketCreate(){if(this._nextSocket)return;const e=Bo(this._url,this._protocol,this._version);if(this._nextSocket=new Po(e),!this._nextSocket)throw new Error("Failed to create socket");this._nextSocket.onmessage=n=>this._socketReceive(n),this._nextSocket.onopen=()=>this._socketOpen(),this._nextSocket.onerror=n=>this._socketError(n),this._nextSocket.onclose=()=>{setTimeout(()=>{this._nextSocket=null,this._socketCreate()},1e3)}}_socketOpen(){this._socketClose(),this._socket=this._nextSocket,this._nextSocket=null,this._queueSubscriptions(),this._pushQueue()}_socketClose(){this._socket&&(this._socket.onclose=()=>{},this._socket.close())}_socketSend(e){const n=JSON.stringify(e);this._socket&&this._socket.readyState===1?this._socket.send(n):(this._setToQueue(e),this._socketCreate())}async _socketReceive(e){let n;try{n=JSON.parse(e.data)}catch{return}if(this._socketSend({topic:n.topic,type:"ack",payload:"",silent:!0}),this._socket&&this._socket.readyState===1){const r=this._events.filter(o=>o.event==="message");r&&r.length&&r.forEach(o=>o.callback(n))}}_socketError(e){const n=this._events.filter(r=>r.event==="error");n&&n.length&&n.forEach(r=>r.callback(e))}_queueSubscriptions(){this._subscriptions.forEach(n=>this._queue.push({topic:n,type:"sub",payload:"",silent:!0})),this._subscriptions=this.opts.subscriptions||[]}_setToQueue(e){this._queue.push(e)}_pushQueue(){this._queue.forEach(n=>this._socketSend(n)),this._queue=[]}}function Bo(t,e,n){var r,o;const a=(t.startsWith("https")?t.replace("https","wss"):t.startsWith("http")?t.replace("http","ws"):t).split("?"),d=kt()?{protocol:e,version:n,env:"browser",host:((r=yt())===null||r===void 0?void 0:r.host)||""}:{protocol:e,version:n,env:((o=ne())===null||o===void 0?void 0:o.name)||""},u=Dt(Pt(a[1]||""),d);return a[0]+"?"+u}class $o{constructor(){this._eventEmitters=[]}subscribe(e){this._eventEmitters.push(e)}unsubscribe(e){this._eventEmitters=this._eventEmitters.filter(n=>n.event!==e)}trigger(e){let n=[],r;jt(e)?r=e.method:U(e)||J(e)?r=`response:${e.id}`:de(e)?r=e.event:r="",r&&(n=this._eventEmitters.filter(o=>o.event===r)),(!n||!n.length)&&!Ht(r)&&!de(r)&&(n=this._eventEmitters.filter(o=>o.event==="call_request")),n.forEach(o=>{if(J(e)){const i=new Error(e.error.message);o.callback(i,null)}else o.callback(null,e)})}}class Wo{constructor(e="walletconnect"){this.storageId=e}getSession(){let e=null;const n=Se(this.storageId);return n&&$t(n)&&(e=n),e}setSession(e){return Re(this.storageId,e),e}removeSession(){ke(this.storageId)}}const jo="walletconnect.org",Ho="abcdefghijklmnopqrstuvwxyz0123456789",Ft=Ho.split("").map(t=>`https://${t}.bridge.walletconnect.org`);function zo(t){let e=t.indexOf("//")>-1?t.split("/")[2]:t.split("/")[0];return e=e.split(":")[0],e=e.split("?")[0],e}function Fo(t){return zo(t).split(".").slice(-2).join(".")}function Jo(){return Math.floor(Math.random()*Ft.length)}function Qo(){return Ft[Jo()]}function Go(t){return Fo(t)===jo}function Vo(t){return Go(t)?Qo():t}class Yo{constructor(e){if(this.protocol="wc",this.version=1,this._bridge="",this._key=null,this._clientId="",this._clientMeta=null,this._peerId="",this._peerMeta=null,this._handshakeId=0,this._handshakeTopic="",this._connected=!1,this._accounts=[],this._chainId=0,this._networkId=0,this._rpcUrl="",this._eventManager=new $o,this._clientMeta=le()||e.connectorOpts.clientMeta||null,this._cryptoLib=e.cryptoLib,this._sessionStorage=e.sessionStorage||new Wo(e.connectorOpts.storageId),this._qrcodeModal=e.connectorOpts.qrcodeModal,this._qrcodeModalOptions=e.connectorOpts.qrcodeModalOptions,this._signingMethods=[...Ye,...e.connectorOpts.signingMethods||[]],!e.connectorOpts.bridge&&!e.connectorOpts.uri&&!e.connectorOpts.session)throw new Error(Qn);e.connectorOpts.bridge&&(this.bridge=Vo(e.connectorOpts.bridge)),e.connectorOpts.uri&&(this.uri=e.connectorOpts.uri);const n=e.connectorOpts.session||this._getStorageSession();n&&(this.session=n),this.handshakeId&&this._subscribeToSessionResponse(this.handshakeId,"Session request rejected"),this._transport=e.transport||new Do({protocol:this.protocol,version:this.version,url:this.bridge,subscriptions:[this.clientId]}),this._subscribeToInternalEvents(),this._initTransport(),e.connectorOpts.uri&&this._subscribeToSessionRequest(),e.pushServerOpts&&this._registerPushServer(e.pushServerOpts)}set bridge(e){!e||(this._bridge=e)}get bridge(){return this._bridge}set key(e){if(!e)return;const n=st(e);this._key=n}get key(){return this._key?ot(this._key,!0):""}set clientId(e){!e||(this._clientId=e)}get clientId(){let e=this._clientId;return e||(e=this._clientId=Y()),this._clientId}set peerId(e){!e||(this._peerId=e)}get peerId(){return this._peerId}set clientMeta(e){}get clientMeta(){let e=this._clientMeta;return e||(e=this._clientMeta=le()),e}set peerMeta(e){this._peerMeta=e}get peerMeta(){return this._peerMeta}set handshakeTopic(e){!e||(this._handshakeTopic=e)}get handshakeTopic(){return this._handshakeTopic}set handshakeId(e){!e||(this._handshakeId=e)}get handshakeId(){return this._handshakeId}get uri(){return this._formatUri()}set uri(e){if(!e)return;const{handshakeTopic:n,bridge:r,key:o}=this._parseUri(e);this.handshakeTopic=n,this.bridge=r,this.key=o}set chainId(e){this._chainId=e}get chainId(){return this._chainId}set networkId(e){this._networkId=e}get networkId(){return this._networkId}set accounts(e){this._accounts=e}get accounts(){return this._accounts}set rpcUrl(e){this._rpcUrl=e}get rpcUrl(){return this._rpcUrl}set connected(e){}get connected(){return this._connected}set pending(e){}get pending(){return!!this._handshakeTopic}get session(){return{connected:this.connected,accounts:this.accounts,chainId:this.chainId,bridge:this.bridge,key:this.key,clientId:this.clientId,clientMeta:this.clientMeta,peerId:this.peerId,peerMeta:this.peerMeta,handshakeId:this.handshakeId,handshakeTopic:this.handshakeTopic}}set session(e){!e||(this._connected=e.connected,this.accounts=e.accounts,this.chainId=e.chainId,this.bridge=e.bridge,this.key=e.key,this.clientId=e.clientId,this.clientMeta=e.clientMeta,this.peerId=e.peerId,this.peerMeta=e.peerMeta,this.handshakeId=e.handshakeId,this.handshakeTopic=e.handshakeTopic)}on(e,n){const r={event:e,callback:n};this._eventManager.subscribe(r)}off(e){this._eventManager.unsubscribe(e)}async createInstantRequest(e){this._key=await this._generateKey();const n=this._formatRequest({method:"wc_instantRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,request:this._formatRequest(e)}]});this.handshakeId=n.id,this.handshakeTopic=Y(),this._eventManager.trigger({event:"display_uri",params:[this.uri]}),this.on("modal_closed",()=>{throw new Error(De)});const r=()=>{this.killSession()};try{const o=await this._sendCallRequest(n);return o&&r(),o}catch(o){throw r(),o}}async connect(e){if(!this._qrcodeModal)throw new Error(Vn);return this.connected?{chainId:this.chainId,accounts:this.accounts}:(await this.createSession(e),new Promise(async(n,r)=>{this.on("modal_closed",()=>r(new Error(De))),this.on("connect",(o,i)=>{if(o)return r(o);n(i.params[0])})}))}async createSession(e){if(this._connected)throw new Error(ie);if(this.pending)return;this._key=await this._generateKey();const n=this._formatRequest({method:"wc_sessionRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,chainId:e&&e.chainId?e.chainId:null}]});this.handshakeId=n.id,this.handshakeTopic=Y(),this._sendSessionRequest(n,"Session update rejected",{topic:this.handshakeTopic}),this._eventManager.trigger({event:"display_uri",params:[this.uri]})}approveSession(e){if(this._connected)throw new Error(ie);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl,peerId:this.clientId,peerMeta:this.clientMeta},r={id:this.handshakeId,jsonrpc:"2.0",result:n};this._sendResponse(r),this._connected=!0,this._setStorageSession(),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})}rejectSession(e){if(this._connected)throw new Error(ie);const n=e&&e.message?e.message:Wn,r=this._formatResponse({id:this.handshakeId,error:{message:n}});this._sendResponse(r),this._connected=!1,this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession()}updateSession(e){if(!this._connected)throw new Error(O);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl},r=this._formatRequest({method:"wc_sessionUpdate",params:[n]});this._sendSessionRequest(r,"Session update rejected"),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]}),this._manageStorageSession()}async killSession(e){const n=e?e.message:"Session Disconnected",r={approved:!1,chainId:null,networkId:null,accounts:null},o=this._formatRequest({method:"wc_sessionUpdate",params:[r]});await this._sendRequest(o),this._handleSessionDisconnect(n)}async sendTransaction(e){if(!this._connected)throw new Error(O);const n=e,r=this._formatRequest({method:"eth_sendTransaction",params:[n]});return await this._sendCallRequest(r)}async signTransaction(e){if(!this._connected)throw new Error(O);const n=e,r=this._formatRequest({method:"eth_signTransaction",params:[n]});return await this._sendCallRequest(r)}async signMessage(e){if(!this._connected)throw new Error(O);const n=this._formatRequest({method:"eth_sign",params:e});return await this._sendCallRequest(n)}async signPersonalMessage(e){if(!this._connected)throw new Error(O);const n=this._formatRequest({method:"personal_sign",params:e});return await this._sendCallRequest(n)}async signTypedData(e){if(!this._connected)throw new Error(O);const n=this._formatRequest({method:"eth_signTypedData",params:e});return await this._sendCallRequest(n)}async updateChain(e){if(!this._connected)throw new Error("Session currently disconnected");const n=this._formatRequest({method:"wallet_updateChain",params:[e]});return await this._sendCallRequest(n)}unsafeSend(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),new Promise((r,o)=>{this._subscribeToResponse(e.id,(i,a)=>{if(i){o(i);return}if(!a)throw new Error(jn);r(a)})})}async sendCustomRequest(e,n){if(!this._connected)throw new Error(O);switch(e.method){case"eth_accounts":return this.accounts;case"eth_chainId":return at(this.chainId);case"eth_sendTransaction":case"eth_signTransaction":e.params;break;case"personal_sign":e.params;break}const r=this._formatRequest(e);return await this._sendCallRequest(r,n)}approveRequest(e){if(U(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(Hn)}rejectRequest(e){if(J(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(zn)}transportClose(){this._transport.close()}async _sendRequest(e,n){const r=this._formatRequest(e),o=await this._encrypt(r),i=typeof(n==null?void 0:n.topic)<"u"?n.topic:this.peerId,a=JSON.stringify(o),d=typeof(n==null?void 0:n.forcePushNotification)<"u"?!n.forcePushNotification:zt(r);this._transport.send(a,i,d)}async _sendResponse(e){const n=await this._encrypt(e),r=this.peerId,o=JSON.stringify(n),i=!0;this._transport.send(o,r,i)}async _sendSessionRequest(e,n,r){this._sendRequest(e,r),this._subscribeToSessionResponse(e.id,n)}_sendCallRequest(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),this._subscribeToCallResponse(e.id)}_formatRequest(e){if(typeof e.method>"u")throw new Error(Fn);return{id:typeof e.id>"u"?Mt():e.id,jsonrpc:"2.0",method:e.method,params:typeof e.params>"u"?[]:e.params}}_formatResponse(e){if(typeof e.id>"u")throw new Error(Jn);const n={id:e.id,jsonrpc:"2.0"};if(J(e)){const r=qt(e.error);return Object.assign(Object.assign(Object.assign({},n),e),{error:r})}else if(U(e))return Object.assign(Object.assign({},n),e);throw new Error(Pe)}_handleSessionDisconnect(e){const n=e||"Session Disconnected";this._connected||(this._qrcodeModal&&this._qrcodeModal.close(),ke(ae)),this._connected&&(this._connected=!1),this._handshakeId&&(this._handshakeId=0),this._handshakeTopic&&(this._handshakeTopic=""),this._peerId&&(this._peerId=""),this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession(),this.transportClose()}_handleSessionResponse(e,n){n?n.approved?(this._connected?(n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]})):(this._connected=!0,n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),n.peerId&&!this.peerId&&(this.peerId=n.peerId),n.peerMeta&&!this.peerMeta&&(this.peerMeta=n.peerMeta),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})),this._manageStorageSession()):this._handleSessionDisconnect(e):this._handleSessionDisconnect(e)}async _handleIncomingMessages(e){if(![this.clientId,this.handshakeTopic].includes(e.topic))return;let r;try{r=JSON.parse(e.payload)}catch{return}const o=await this._decrypt(r);o&&this._eventManager.trigger(o)}_subscribeToSessionRequest(){this._transport.subscribe(this.handshakeTopic)}_subscribeToResponse(e,n){this.on(`response:${e}`,n)}_subscribeToSessionResponse(e,n){this._subscribeToResponse(e,(r,o)=>{if(r){this._handleSessionResponse(r.message);return}U(o)?this._handleSessionResponse(n,o.result):o.error&&o.error.message?this._handleSessionResponse(o.error.message):this._handleSessionResponse(n)})}_subscribeToCallResponse(e){return new Promise((n,r)=>{this._subscribeToResponse(e,(o,i)=>{if(o){r(o);return}U(i)?n(i.result):i.error&&i.error.message?r(i.error):r(new Error(Pe))})})}_subscribeToInternalEvents(){this.on("display_uri",()=>{this._qrcodeModal&&this._qrcodeModal.open(this.uri,()=>{this._eventManager.trigger({event:"modal_closed",params:[]})},this._qrcodeModalOptions)}),this.on("connect",()=>{this._qrcodeModal&&this._qrcodeModal.close()}),this.on("call_request_sent",(e,n)=>{const{request:r}=n.params[0];if(Rt()&&this._signingMethods.includes(r.method)){const o=Se(ae);o&&(window.location.href=o.href)}}),this.on("wc_sessionRequest",(e,n)=>{e&&this._eventManager.trigger({event:"error",params:[{code:"SESSION_REQUEST_ERROR",message:e.toString()}]}),this.handshakeId=n.id,this.peerId=n.params[0].peerId,this.peerMeta=n.params[0].peerMeta;const r=Object.assign(Object.assign({},n),{method:"session_request"});this._eventManager.trigger(r)}),this.on("wc_sessionUpdate",(e,n)=>{e&&this._handleSessionResponse(e.message),this._handleSessionResponse("Session disconnected",n.params[0])})}_initTransport(){this._transport.on("message",e=>this._handleIncomingMessages(e)),this._transport.on("open",()=>this._eventManager.trigger({event:"transport_open",params:[]})),this._transport.on("close",()=>this._eventManager.trigger({event:"transport_close",params:[]})),this._transport.on("error",()=>this._eventManager.trigger({event:"transport_error",params:["Websocket connection failed"]})),this._transport.open()}_formatUri(){const e=this.protocol,n=this.handshakeTopic,r=this.version,o=encodeURIComponent(this.bridge),i=this.key;return`${e}:${n}@${r}?bridge=${o}&key=${i}`}_parseUri(e){const n=Wt(e);if(n.protocol===this.protocol){if(!n.handshakeTopic)throw Error("Invalid or missing handshakeTopic parameter value");const r=n.handshakeTopic;if(!n.bridge)throw Error("Invalid or missing bridge url parameter value");const o=decodeURIComponent(n.bridge);if(!n.key)throw Error("Invalid or missing key parameter value");const i=n.key;return{handshakeTopic:r,bridge:o,key:i}}else throw new Error(Gn)}async _generateKey(){return this._cryptoLib?await this._cryptoLib.generateKey():null}async _encrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.encrypt(e,n):null}async _decrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.decrypt(e,n):null}_getStorageSession(){let e=null;return this._sessionStorage&&(e=this._sessionStorage.getSession()),e}_setStorageSession(){this._sessionStorage&&this._sessionStorage.setSession(this.session)}_removeStorageSession(){this._sessionStorage&&this._sessionStorage.removeSession()}_manageStorageSession(){this._connected?this._setStorageSession():this._removeStorageSession()}_registerPushServer(e){if(!e.url||typeof e.url!="string")throw Error("Invalid or missing pushServerOpts.url parameter value");if(!e.type||typeof e.type!="string")throw Error("Invalid or missing pushServerOpts.type parameter value");if(!e.token||typeof e.token!="string")throw Error("Invalid or missing pushServerOpts.token parameter value");const n={bridge:this.bridge,topic:this.clientId,type:e.type,token:e.token,peerName:"",language:e.language||""};this.on("connect",async(r,o)=>{if(r)throw r;if(e.peerMeta){const i=o.params[0].peerMeta.name;n.peerName=i}try{if(!(await(await fetch(`${e.url}/new`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).json()).success)throw Error("Failed to register in Push Server")}catch{throw Error("Failed to register in Push Server")}})}}function Ko(t){return $.getBrowerCrypto().getRandomValues(new Uint8Array(t))}const Jt=256,Qt=Jt,Zo=Jt,I="AES-CBC",Xo=`SHA-${Qt}`,ue="HMAC",ei="encrypt",ti="decrypt",ni="sign",ri="verify";function oi(t){return t===I?{length:Qt,name:I}:{hash:{name:Xo},name:ue}}function ii(t){return t===I?[ei,ti]:[ni,ri]}async function Ie(t,e=I){return $.getSubtleCrypto().importKey("raw",t,oi(e),!0,ii(e))}async function si(t,e,n){const r=$.getSubtleCrypto(),o=await Ie(e,I),i=await r.encrypt({iv:t,name:I},o,n);return new Uint8Array(i)}async function ai(t,e,n){const r=$.getSubtleCrypto(),o=await Ie(e,I),i=await r.decrypt({iv:t,name:I},o,n);return new Uint8Array(i)}async function ci(t,e){const n=$.getSubtleCrypto(),r=await Ie(t,ue),o=await n.sign({length:Zo,name:ue},r,e);return new Uint8Array(o)}function li(t,e,n){return si(t,e,n)}function di(t,e,n){return ai(t,e,n)}async function Gt(t,e){return await ci(t,e)}async function Vt(t){const e=(t||256)/8,n=Ko(e);return it(W(n))}async function Yt(t,e){const n=T(t.data),r=T(t.iv),o=T(t.hmac),i=C(o,!1),a=rt(n,r),d=await Gt(e,a),u=C(d,!1);return B(i)===B(u)}async function ui(t,e,n){const r=D(K(e)),o=n||await Vt(128),i=D(K(o)),a=C(i,!1),d=JSON.stringify(t),u=et(d),m=await li(i,r,u),y=C(m,!1),c=rt(m,i),f=await Gt(r,c),_=C(f,!1);return{data:y,hmac:_,iv:a}}async function hi(t,e){const n=D(K(e));if(!n)throw new Error("Missing key: required for decryption");if(!await Yt(t,n))return null;const o=T(t.data),i=T(t.iv),a=await di(i,n,o),d=Ze(a);let u;try{u=JSON.parse(d)}catch{return null}return u}const fi=Object.freeze(Object.defineProperty({__proto__:null,generateKey:Vt,verifyHmac:Yt,encrypt:ui,decrypt:hi},Symbol.toStringTag,{value:"Module"}));class Rs extends Yo{constructor(e,n){super({cryptoLib:fi,connectorOpts:e,pushServerOpts:n})}}const _i=fn(Ao);function Kt(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var g=_i,Zt=Kt(pn),pi=Kt(gn),s=mn;function gi(t){Zt.toString(t,{type:"terminal"}).then(console.log)}var mi=`:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function wi(t,e){try{var n=t()}catch(r){return e(r)}return n&&n.then?n.then(void 0,e):n}var bi="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",vi="WalletConnect",yi=300,Ei="rgb(64, 153, 255)",Xt="walletconnect-wrapper",$e="walletconnect-style-sheet",en="walletconnect-qrcode-modal",xi="walletconnect-qrcode-close",tn="walletconnect-qrcode-text",Ri="walletconnect-connect-button";function Si(t){return s.createElement("div",{className:"walletconnect-modal__header"},s.createElement("img",{src:bi,className:"walletconnect-modal__headerLogo"}),s.createElement("p",null,vi),s.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:t.onClose},s.createElement("div",{id:xi,className:"walletconnect-modal__close__icon"},s.createElement("div",{className:"walletconnect-modal__close__line1"}),s.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function ki(t){return s.createElement("a",{className:"walletconnect-connect__button",href:t.href,id:Ri+"-"+t.name,onClick:t.onClick,rel:"noopener noreferrer",style:{backgroundColor:t.color},target:"_blank"},t.name)}var Ci="data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";function Ti(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick;return s.createElement("a",{className:"walletconnect-modal__base__row",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},s.createElement("h3",{className:"walletconnect-modal__base__row__h3"},r),s.createElement("div",{className:"walletconnect-modal__base__row__right"},s.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),s.createElement("img",{src:Ci,className:"walletconnect-modal__base__row__right__caret"})))}function Ii(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick,a=window.innerWidth<768?(r.length>8?2.5:2.7)+"vw":"inherit";return s.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},s.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),s.createElement("div",{style:{fontSize:a},className:"walletconnect-connect__button__text"},r))}var Oi=5,se=12;function Mi(t){var e=g.isAndroid(),n=s.useState(""),r=n[0],o=n[1],i=s.useState(""),a=i[0],d=i[1],u=s.useState(1),m=u[0],y=u[1],c=a?t.links.filter(function(p){return p.name.toLowerCase().includes(a.toLowerCase())}):t.links,f=t.errorMessage,_=a||c.length>Oi,b=Math.ceil(c.length/se),v=[(m-1)*se+1,m*se],h=c.length?c.filter(function(p,w){return w+1>=v[0]&&w+1<=v[1]}):[],E=!e&&b>1,k=void 0;function H(p){o(p.target.value),clearTimeout(k),p.target.value?k=setTimeout(function(){d(p.target.value),y(1)},1e3):(o(""),d(""),y(1))}return s.createElement("div",null,s.createElement("p",{id:tn,className:"walletconnect-qrcode__text"},e?t.text.connect_mobile_wallet:t.text.choose_preferred_wallet),!e&&s.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:r,onChange:H}),s.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(e?"__android":_&&c.length?"__wrap":"")},e?s.createElement(ki,{name:t.text.connect,color:Ei,href:t.uri,onClick:s.useCallback(function(){g.saveMobileLinkInfo({name:"Unknown",href:t.uri})},[])}):h.length?h.map(function(p){var w=p.color,x=p.name,N=p.shortName,G=p.logo,L=g.formatIOSMobile(t.uri,p),q=s.useCallback(function(){g.saveMobileLinkInfo({name:x,href:L})},[h]);return _?s.createElement(Ii,{color:w,href:L,name:N||x,logo:G,onClick:q}):s.createElement(Ti,{color:w,href:L,name:x,logo:G,onClick:q})}):s.createElement(s.Fragment,null,s.createElement("p",null,f.length?t.errorMessage:!!t.links.length&&!c.length?t.text.no_wallets_found:t.text.loading))),E&&s.createElement("div",{className:"walletconnect-modal__footer"},Array(b).fill(0).map(function(p,w){var x=w+1,N=m===x;return s.createElement("a",{style:{margin:"auto 10px",fontWeight:N?"bold":"normal"},onClick:function(){return y(x)}},x)})))}function Ni(t){var e=!!t.message.trim();return s.createElement("div",{className:"walletconnect-qrcode__notification"+(e?" notification__show":"")},t.message)}var Li=function(t){try{var e="";return Promise.resolve(Zt.toString(t,{margin:0,type:"svg"})).then(function(n){return typeof n=="string"&&(e=n.replace("<svg",'<svg class="walletconnect-qrcode__image"')),e})}catch(n){return Promise.reject(n)}};function qi(t){var e=s.useState(""),n=e[0],r=e[1],o=s.useState(""),i=o[0],a=o[1];s.useEffect(function(){try{return Promise.resolve(Li(t.uri)).then(function(u){a(u)})}catch(u){Promise.reject(u)}},[]);var d=function(){var u=pi(t.uri);u?(r(t.text.copied_to_clipboard),setInterval(function(){return r("")},1200)):(r("Error"),setInterval(function(){return r("")},1200))};return s.createElement("div",null,s.createElement("p",{id:tn,className:"walletconnect-qrcode__text"},t.text.scan_qrcode_with_wallet),s.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),s.createElement("div",{className:"walletconnect-modal__footer"},s.createElement("a",{onClick:d},t.text.copy_to_clipboard)),s.createElement(Ni,{message:n}))}function Ai(t){var e=g.isAndroid(),n=g.isMobile(),r=n?t.qrcodeModalOptions&&t.qrcodeModalOptions.mobileLinks?t.qrcodeModalOptions.mobileLinks:void 0:t.qrcodeModalOptions&&t.qrcodeModalOptions.desktopLinks?t.qrcodeModalOptions.desktopLinks:void 0,o=s.useState(!1),i=o[0],a=o[1],d=s.useState(!1),u=d[0],m=d[1],y=s.useState(!n),c=y[0],f=y[1],_={mobile:n,text:t.text,uri:t.uri,qrcodeModalOptions:t.qrcodeModalOptions},b=s.useState(""),v=b[0],h=b[1],E=s.useState(!1),k=E[0],H=E[1],p=s.useState([]),w=p[0],x=p[1],N=s.useState(""),G=N[0],L=N[1],q=function(){u||i||r&&!r.length||w.length>0||s.useEffect(function(){var sn=function(){try{if(e)return Promise.resolve();a(!0);var oe=wi(function(){var z=t.qrcodeModalOptions&&t.qrcodeModalOptions.registryUrl?t.qrcodeModalOptions.registryUrl:g.getWalletRegistryUrl();return Promise.resolve(fetch(z)).then(function(an){return Promise.resolve(an.json()).then(function(cn){var ln=cn.listings,dn=n?"mobile":"desktop",V=g.getMobileLinkRegistry(g.formatMobileRegistry(ln,dn),r);a(!1),m(!0),L(V.length?"":t.text.no_supported_wallets),x(V);var Oe=V.length===1;Oe&&(h(g.formatIOSMobile(t.uri,V[0])),f(!0)),H(Oe)})})},function(z){a(!1),m(!0),L(t.text.something_went_wrong),console.error(z)});return Promise.resolve(oe&&oe.then?oe.then(function(){}):void 0)}catch(z){return Promise.reject(z)}};sn()})};q();var on=n?c:!c;return s.createElement("div",{id:en,className:"walletconnect-qrcode__base animated fadeIn"},s.createElement("div",{className:"walletconnect-modal__base"},s.createElement(Si,{onClose:t.onClose}),k&&c?s.createElement("div",{className:"walletconnect-modal__single_wallet"},s.createElement("a",{onClick:function(){return g.saveMobileLinkInfo({name:w[0].name,href:v})},href:v,rel:"noopener noreferrer",target:"_blank"},t.text.connect_with+" "+(k?w[0].name:"")+" \u203A")):e||i||!i&&w.length?s.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(on?" right__selected":"")},s.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),n?s.createElement(s.Fragment,null,s.createElement("a",{onClick:function(){return f(!1),q()}},t.text.mobile),s.createElement("a",{onClick:function(){return f(!0)}},t.text.qrcode)):s.createElement(s.Fragment,null,s.createElement("a",{onClick:function(){return f(!0)}},t.text.qrcode),s.createElement("a",{onClick:function(){return f(!1),q()}},t.text.desktop))):null,s.createElement("div",null,c||!e&&!i&&!w.length?s.createElement(qi,Object.assign({},_)):s.createElement(Mi,Object.assign({},_,{links:w,errorMessage:G})))))}var Ui={choose_preferred_wallet:"W\xE4hle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterst\xFCtzten Wallet",no_wallets_found:"keine Wallet gefunden"},Pi={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},Di={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera m\xF3vil",scan_qrcode_with_wallet:"Escanea el c\xF3digo QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"C\xF3digo QR",mobile:"M\xF3vil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo sali\xF3 mal",no_supported_wallets:"Todav\xEDa no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},Bi={choose_preferred_wallet:"Choisissez votre portefeuille pr\xE9f\xE9r\xE9",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copi\xE9!",connect_with:"Connectez-vous \xE0 l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourn\xE9",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouv\xE9"},$i={choose_preferred_wallet:"\uC6D0\uD558\uB294 \uC9C0\uAC11\uC744 \uC120\uD0DD\uD558\uC138\uC694",connect_mobile_wallet:"\uBAA8\uBC14\uC77C \uC9C0\uAC11\uACFC \uC5F0\uACB0",scan_qrcode_with_wallet:"WalletConnect \uC9C0\uC6D0 \uC9C0\uAC11\uC5D0\uC11C QR\uCF54\uB4DC\uB97C \uC2A4\uCE94\uD558\uC138\uC694",connect:"\uC5F0\uACB0",qrcode:"QR \uCF54\uB4DC",mobile:"\uBAA8\uBC14\uC77C",desktop:"\uB370\uC2A4\uD06C\uD0D1",copy_to_clipboard:"\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC",copied_to_clipboard:"\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!",connect_with:"\uC640 \uC5F0\uACB0\uD558\uB2E4",loading:"\uB85C\uB4DC \uC911...",something_went_wrong:"\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.",no_supported_wallets:"\uC544\uC9C1 \uC9C0\uC6D0\uB418\uB294 \uC9C0\uAC11\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",no_wallets_found:"\uC9C0\uAC11\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"},Wi={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se \xE0 carteira m\xF3vel",scan_qrcode_with_wallet:"Ler o c\xF3digo QR com uma carteira compat\xEDvel com WalletConnect",connect:"Conectar",qrcode:"C\xF3digo QR",mobile:"M\xF3vel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda n\xE3o h\xE1 carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},ji={choose_preferred_wallet:"\u9009\u62E9\u4F60\u7684\u94B1\u5305",connect_mobile_wallet:"\u8FDE\u63A5\u81F3\u79FB\u52A8\u7AEF\u94B1\u5305",scan_qrcode_with_wallet:"\u4F7F\u7528\u517C\u5BB9 WalletConnect \u7684\u94B1\u5305\u626B\u63CF\u4E8C\u7EF4\u7801",connect:"\u8FDE\u63A5",qrcode:"\u4E8C\u7EF4\u7801",mobile:"\u79FB\u52A8",desktop:"\u684C\u9762",copy_to_clipboard:"\u590D\u5236\u5230\u526A\u8D34\u677F",copied_to_clipboard:"\u590D\u5236\u5230\u526A\u8D34\u677F\u6210\u529F\uFF01",connect_with:"\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u8FDE\u63A5",loading:"\u6B63\u5728\u52A0\u8F7D...",something_went_wrong:"\u51FA\u4E86\u95EE\u9898",no_supported_wallets:"\u76EE\u524D\u8FD8\u6CA1\u6709\u652F\u6301\u7684\u94B1\u5305",no_wallets_found:"\u6CA1\u6709\u627E\u5230\u94B1\u5305"},Hi={choose_preferred_wallet:"\u06A9\u06CC\u0641 \u067E\u0648\u0644 \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u062E\u0648\u062F \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",connect_mobile_wallet:"\u0628\u0647 \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u0645\u0648\u0628\u0627\u06CC\u0644 \u0648\u0635\u0644 \u0634\u0648\u06CC\u062F",scan_qrcode_with_wallet:"\u06A9\u062F QR \u0631\u0627 \u0628\u0627 \u06CC\u06A9 \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u0633\u0627\u0632\u06AF\u0627\u0631 \u0628\u0627 WalletConnect \u0627\u0633\u06A9\u0646 \u06A9\u0646\u06CC\u062F",connect:"\u0627\u062A\u0635\u0627\u0644",qrcode:"\u06A9\u062F QR",mobile:"\u0633\u06CC\u0627\u0631",desktop:"\u062F\u0633\u06A9\u062A\u0627\u067E",copy_to_clipboard:"\u06A9\u067E\u06CC \u0628\u0647 \u06A9\u0644\u06CC\u067E \u0628\u0648\u0631\u062F",copied_to_clipboard:"\u062F\u0631 \u06A9\u0644\u06CC\u067E \u0628\u0648\u0631\u062F \u06A9\u067E\u06CC \u0634\u062F!",connect_with:"\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627",loading:"...\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",something_went_wrong:"\u0645\u0634\u06A9\u0644\u06CC \u067E\u06CC\u0634 \u0622\u0645\u062F",no_supported_wallets:"\u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0634\u062F\u0647 \u0627\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F",no_wallets_found:"\u0647\u06CC\u0686 \u06A9\u06CC\u0641 \u067E\u0648\u0644\u06CC \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F"},We={de:Ui,en:Pi,es:Di,fr:Bi,ko:$i,pt:Wi,zh:ji,fa:Hi};function zi(){var t=g.getDocumentOrThrow(),e=t.getElementById($e);e&&t.head.removeChild(e);var n=t.createElement("style");n.setAttribute("id",$e),n.innerText=mi,t.head.appendChild(n)}function Fi(){var t=g.getDocumentOrThrow(),e=t.createElement("div");return e.setAttribute("id",Xt),t.body.appendChild(e),e}function nn(){var t=g.getDocumentOrThrow(),e=t.getElementById(en);e&&(e.className=e.className.replace("fadeIn","fadeOut"),setTimeout(function(){var n=t.getElementById(Xt);n&&t.body.removeChild(n)},yi))}function Ji(t){return function(){nn(),t&&t()}}function Qi(){var t=g.getNavigatorOrThrow().language.split("-")[0]||"en";return We[t]||We.en}function Gi(t,e,n){zi();var r=Fi();s.render(s.createElement(Ai,{text:Qi(),uri:t,onClose:Ji(e),qrcodeModalOptions:n}),r)}function Vi(){nn()}var rn=function(){return typeof P.exports<"u"&&typeof P.exports.versions<"u"&&typeof P.exports.versions.node<"u"};function Yi(t,e,n){console.log(t),rn()?gi(t):Gi(t,e,n)}function Ki(){rn()||Vi()}var Zi={open:Yi,close:Ki},Ss=Zi;const Xi={Accept:"application/json","Content-Type":"application/json"},es="POST",je={headers:Xi,method:es},He=10;class ks{constructor(e){if(this.url=e,this.events=new Fe.exports.EventEmitter,this.isAvailable=!1,this.registering=!1,!Ue(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);this.url=e}get connected(){return this.isAvailable}get connecting(){return this.registering}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e=this.url){await this.register(e)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(e,n){this.isAvailable||await this.register();try{const r=ce(e),i=await(await Ne(this.url,Object.assign(Object.assign({},je),{body:r}))).json();this.onPayload({data:i})}catch(r){this.onError(e.id,r)}}async register(e=this.url){if(!Ue(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);if(this.registering){const n=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=n||this.events.listenerCount("open")>=n)&&this.events.setMaxListeners(n+1),new Promise((r,o)=>{this.events.once("register_error",i=>{this.resetMaxListeners(),o(i)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return o(new Error("HTTP connection is missing or invalid"));r()})})}this.url=e,this.registering=!0;try{const n=ce({id:1,jsonrpc:"2.0",method:"test",params:[]});await Ne(e,Object.assign(Object.assign({},je),{body:n})),this.onOpen()}catch(n){const r=this.parseError(n);throw this.events.emit("register_error",r),this.onClose(),r}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(e){if(typeof e.data>"u")return;const n=typeof e.data=="string"?Ct(e.data):e.data;this.events.emit("payload",n)}onError(e,n){const r=this.parseError(n),o=r.message||r.toString(),i=Ln(e,o);this.events.emit("payload",i)}parseError(e,n=this.url){return Tn(e,n,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>He&&this.events.setMaxListeners(He)}}class Cs extends vn{constructor(e){super(e),this.events=new Fe.exports.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(e),this.connection.connected&&this.registerEventListeners()}async connect(e=this.connection){await this.open(e)}async disconnect(){await this.close()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async request(e,n){return this.requestStrict(Nn(e.method,e.params||[],e.id||Mn().toString()),n)}async requestStrict(e,n){return new Promise(async(r,o)=>{if(!this.connection.connected)try{await this.open()}catch(i){o(i)}this.events.on(`${e.id}`,i=>{Ve(i)?o(i.error):r(i.result)});try{await this.connection.send(e,n)}catch(i){o(i)}})}setConnection(e=this.connection){return e}onPayload(e){this.events.emit("payload",e),Bn(e)?this.events.emit(`${e.id}`,e):this.events.emit("message",{type:e.method,data:e.params})}onClose(e){e&&e.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)),this.events.emit("disconnect")}async open(e=this.connection){this.connection===e&&this.connection.connected||(this.connection.connected&&this.close(),typeof e=="string"&&(await this.connection.open(e),e=this.connection),this.connection=this.setConnection(e),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",e=>this.onPayload(e)),this.connection.on("close",e=>this.onClose(e)),this.connection.on("error",e=>this.events.emit("error",e)),this.connection.on("register_error",e=>this.onClose()),this.hasRegisteredEventListeners=!0)}}export{ks as H,xs as I,Cs as J,Ye as S,Rs as W,Ss as c,Ln as f,wo as g};
