import{c as p}from"./@account-abstraction.16fd1566.js";import{s as E}from"./@metamask.9b2b42ff.js";import{d as P}from"./eth-rpc-errors.b18d9e70.js";var R={},h={},w={};Object.defineProperty(w,"__esModule",{value:!0});w.getUniqueId=void 0;const j=4294967295;let v=Math.floor(Math.random()*j);function O(){return v=(v+1)%j,v}w.getUniqueId=O;Object.defineProperty(h,"__esModule",{value:!0});h.createIdRemapMiddleware=void 0;const A=w;function C(){return(a,e,r,n)=>{const i=a.id,t=A.getUniqueId();a.id=t,e.id=t,r(o=>{a.id=i,e.id=i,o()})}}h.createIdRemapMiddleware=C;var m={};Object.defineProperty(m,"__esModule",{value:!0});m.createAsyncMiddleware=void 0;function $(a){return async(e,r,n,i)=>{let t;const o=new Promise(f=>{t=f});let u=null,d=!1;const l=async()=>{d=!0,n(f=>{u=f,t()}),await o};try{await a(e,r,l),d?(await o,u(null)):i(null)}catch(f){u?u(f):i(f)}}}m.createAsyncMiddleware=$;var y={};Object.defineProperty(y,"__esModule",{value:!0});y.createScaffoldMiddleware=void 0;function b(a){return(e,r,n,i)=>{const t=a[e.method];return t===void 0?n():typeof t=="function"?t(e,r,n,i):(r.result=t,i())}}y.createScaffoldMiddleware=b;var _={},I=p&&p.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(_,"__esModule",{value:!0});_.JsonRpcEngine=void 0;const H=I(E),s=P;class c extends H.default{constructor(){super(),this._middleware=[]}push(e){this._middleware.push(e)}handle(e,r){if(r&&typeof r!="function")throw new Error('"callback" must be a function if provided.');return Array.isArray(e)?r?this._handleBatch(e,r):this._handleBatch(e):r?this._handle(e,r):this._promiseHandle(e)}asMiddleware(){return async(e,r,n,i)=>{try{const[t,o,u]=await c._runAllMiddleware(e,r,this._middleware);return o?(await c._runReturnHandlers(u),i(t)):n(async d=>{try{await c._runReturnHandlers(u)}catch(l){return d(l)}return d()})}catch(t){return i(t)}}}async _handleBatch(e,r){try{const n=await Promise.all(e.map(this._promiseHandle.bind(this)));return r?r(null,n):n}catch(n){if(r)return r(n);throw n}}_promiseHandle(e){return new Promise(r=>{this._handle(e,(n,i)=>{r(i)})})}async _handle(e,r){if(!e||Array.isArray(e)||typeof e!="object"){const o=new s.EthereumRpcError(s.errorCodes.rpc.invalidRequest,`Requests must be plain objects. Received: ${typeof e}`,{request:e});return r(o,{id:void 0,jsonrpc:"2.0",error:o})}if(typeof e.method!="string"){const o=new s.EthereumRpcError(s.errorCodes.rpc.invalidRequest,`Must specify a string method. Received: ${typeof e.method}`,{request:e});return r(o,{id:e.id,jsonrpc:"2.0",error:o})}const n=Object.assign({},e),i={id:n.id,jsonrpc:n.jsonrpc};let t=null;try{await this._processRequest(n,i)}catch(o){t=o}return t&&(delete i.result,i.error||(i.error=s.serializeError(t))),r(t,i)}async _processRequest(e,r){const[n,i,t]=await c._runAllMiddleware(e,r,this._middleware);if(c._checkForCompletion(e,r,i),await c._runReturnHandlers(t),n)throw n}static async _runAllMiddleware(e,r,n){const i=[];let t=null,o=!1;for(const u of n)if([t,o]=await c._runMiddleware(e,r,u,i),o)break;return[t,o,i.reverse()]}static _runMiddleware(e,r,n,i){return new Promise(t=>{const o=d=>{const l=d||r.error;l&&(r.error=s.serializeError(l)),t([l,!0])},u=d=>{r.error?o(r.error):(d&&(typeof d!="function"&&o(new s.EthereumRpcError(s.errorCodes.rpc.internal,`JsonRpcEngine: "next" return handlers must be functions. Received "${typeof d}" for request:
${g(e)}`,{request:e})),i.push(d)),t([null,!1]))};try{n(e,r,u,o)}catch(d){o(d)}})}static async _runReturnHandlers(e){for(const r of e)await new Promise((n,i)=>{r(t=>t?i(t):n())})}static _checkForCompletion(e,r,n){if(!("result"in r)&&!("error"in r))throw new s.EthereumRpcError(s.errorCodes.rpc.internal,`JsonRpcEngine: Response has no error or result for request:
${g(e)}`,{request:e});if(!n)throw new s.EthereumRpcError(s.errorCodes.rpc.internal,`JsonRpcEngine: Nothing ended request:
${g(e)}`,{request:e})}}_.JsonRpcEngine=c;function g(a){return JSON.stringify(a,null,2)}var M={};Object.defineProperty(M,"__esModule",{value:!0});M.mergeMiddleware=void 0;const S=_;function U(a){const e=new S.JsonRpcEngine;return a.forEach(r=>e.push(r)),e.asMiddleware()}M.mergeMiddleware=U;(function(a){var e=p&&p.__createBinding||(Object.create?function(n,i,t,o){o===void 0&&(o=t),Object.defineProperty(n,o,{enumerable:!0,get:function(){return i[t]}})}:function(n,i,t,o){o===void 0&&(o=t),n[o]=i[t]}),r=p&&p.__exportStar||function(n,i){for(var t in n)t!=="default"&&!Object.prototype.hasOwnProperty.call(i,t)&&e(i,n,t)};Object.defineProperty(a,"__esModule",{value:!0}),r(h,a),r(m,a),r(y,a),r(w,a),r(_,a),r(M,a)})(R);export{R as d};