import{c as m}from"./@account-abstraction.16fd1566.js";import{r as G,a as J,b as K,c as Q,d as X,e as Y,f as Z}from"./@protobufjs.8119d9b5.js";var x={exports:{}},q={},E={},R,U;function tt(){if(U)return R;U=1,R=t;var a=w();function t(r,e){this.lo=r>>>0,this.hi=e>>>0}var c=t.zero=new t(0,0);c.toNumber=function(){return 0},c.zzEncode=c.zzDecode=function(){return this},c.length=function(){return 1};var l=t.zeroHash="\0\0\0\0\0\0\0\0";t.fromNumber=function(e){if(e===0)return c;var u=e<0;u&&(e=-e);var i=e>>>0,d=(e-i)/4294967296>>>0;return u&&(d=~d>>>0,i=~i>>>0,++i>4294967295&&(i=0,++d>4294967295&&(d=0))),new t(i,d)},t.from=function(e){if(typeof e=="number")return t.fromNumber(e);if(a.isString(e))if(a.Long)e=a.Long.fromString(e);else return t.fromNumber(parseInt(e,10));return e.low||e.high?new t(e.low>>>0,e.high>>>0):c},t.prototype.toNumber=function(e){if(!e&&this.hi>>>31){var u=~this.lo+1>>>0,i=~this.hi>>>0;return u||(i=i+1>>>0),-(u+i*4294967296)}return this.lo+this.hi*4294967296},t.prototype.toLong=function(e){return a.Long?new a.Long(this.lo|0,this.hi|0,Boolean(e)):{low:this.lo|0,high:this.hi|0,unsigned:Boolean(e)}};var s=String.prototype.charCodeAt;return t.fromHash=function(e){return e===l?c:new t((s.call(e,0)|s.call(e,1)<<8|s.call(e,2)<<16|s.call(e,3)<<24)>>>0,(s.call(e,4)|s.call(e,5)<<8|s.call(e,6)<<16|s.call(e,7)<<24)>>>0)},t.prototype.toHash=function(){return String.fromCharCode(this.lo&255,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,this.hi&255,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},t.prototype.zzEncode=function(){var e=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^e)>>>0,this.lo=(this.lo<<1^e)>>>0,this},t.prototype.zzDecode=function(){var e=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^e)>>>0,this.hi=(this.hi>>>1^e)>>>0,this},t.prototype.length=function(){var e=this.lo,u=(this.lo>>>28|this.hi<<4)>>>0,i=this.hi>>>24;return i===0?u===0?e<16384?e<128?1:2:e<2097152?3:4:u<16384?u<128?5:6:u<2097152?7:8:i<128?9:10},R}var I;function w(){return I||(I=1,function(a){var t=a;t.asPromise=G(),t.base64=J(),t.EventEmitter=K(),t.float=Q(),t.inquire=X(),t.utf8=Y(),t.pool=Z(),t.LongBits=tt(),t.isNode=Boolean(typeof m<"u"&&m&&m.process&&m.process.versions&&m.process.versions.node),t.global=t.isNode&&m||typeof window<"u"&&window||typeof self<"u"&&self||m,t.emptyArray=Object.freeze?Object.freeze([]):[],t.emptyObject=Object.freeze?Object.freeze({}):{},t.isInteger=Number.isInteger||function(r){return typeof r=="number"&&isFinite(r)&&Math.floor(r)===r},t.isString=function(r){return typeof r=="string"||r instanceof String},t.isObject=function(r){return r&&typeof r=="object"},t.isset=t.isSet=function(r,e){var u=r[e];return u!=null&&r.hasOwnProperty(e)?typeof u!="object"||(Array.isArray(u)?u.length:Object.keys(u).length)>0:!1},t.Buffer=function(){try{var s=t.inquire("buffer").Buffer;return s.prototype.utf8Write?s:null}catch{return null}}(),t._Buffer_from=null,t._Buffer_allocUnsafe=null,t.newBuffer=function(r){return typeof r=="number"?t.Buffer?t._Buffer_allocUnsafe(r):new t.Array(r):t.Buffer?t._Buffer_from(r):typeof Uint8Array>"u"?r:new Uint8Array(r)},t.Array=typeof Uint8Array<"u"?Uint8Array:Array,t.Long=t.global.dcodeIO&&t.global.dcodeIO.Long||t.global.Long||t.inquire("long"),t.key2Re=/^true|false|0|1$/,t.key32Re=/^-?(?:0|[1-9][0-9]*)$/,t.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,t.longToHash=function(r){return r?t.LongBits.from(r).toHash():t.LongBits.zeroHash},t.longFromHash=function(r,e){var u=t.LongBits.fromHash(r);return t.Long?t.Long.fromBits(u.lo,u.hi,e):u.toNumber(Boolean(e))};function c(s,r,e){for(var u=Object.keys(r),i=0;i<u.length;++i)(s[u[i]]===void 0||!e)&&(s[u[i]]=r[u[i]]);return s}t.merge=c,t.lcFirst=function(r){return r.charAt(0).toLowerCase()+r.substring(1)};function l(s){function r(e,u){if(!(this instanceof r))return new r(e,u);Object.defineProperty(this,"message",{get:function(){return e}}),Error.captureStackTrace?Error.captureStackTrace(this,r):Object.defineProperty(this,"stack",{value:new Error().stack||""}),u&&c(this,u)}return(r.prototype=Object.create(Error.prototype)).constructor=r,Object.defineProperty(r.prototype,"name",{get:function(){return s}}),r.prototype.toString=function(){return this.name+": "+this.message},r}t.newError=l,t.ProtocolError=l("ProtocolError"),t.oneOfGetter=function(r){for(var e={},u=0;u<r.length;++u)e[r[u]]=1;return function(){for(var i=Object.keys(this),d=i.length-1;d>-1;--d)if(e[i[d]]===1&&this[i[d]]!==void 0&&this[i[d]]!==null)return i[d]}},t.oneOfSetter=function(r){return function(e){for(var u=0;u<r.length;++u)r[u]!==e&&delete this[r[u]]}},t.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},t._configure=function(){var s=t.Buffer;if(!s){t._Buffer_from=t._Buffer_allocUnsafe=null;return}t._Buffer_from=s.from!==Uint8Array.from&&s.from||function(e,u){return new s(e,u)},t._Buffer_allocUnsafe=s.allocUnsafe||function(e){return new s(e)}}}(E)),E}var L,W;function $(){if(W)return L;W=1,L=i;var a=w(),t,c=a.LongBits,l=a.base64,s=a.utf8;function r(h,o,p){this.fn=h,this.len=o,this.next=void 0,this.val=p}function e(){}function u(h){this.head=h.head,this.tail=h.tail,this.len=h.len,this.next=h.states}function i(){this.len=0,this.head=new r(e,0,0),this.tail=this.head,this.states=null}var d=function(){return a.Buffer?function(){return(i.create=function(){return new t})()}:function(){return new i}};i.create=d(),i.alloc=function(o){return new a.Array(o)},a.Array!==Array&&(i.alloc=a.pool(i.alloc,a.Array.prototype.subarray)),i.prototype._push=function(o,p,g){return this.tail=this.tail.next=new r(o,p,g),this.len+=p,this};function b(h,o,p){o[p]=h&255}function f(h,o,p){for(;h>127;)o[p++]=h&127|128,h>>>=7;o[p]=h}function n(h,o){this.len=h,this.next=void 0,this.val=o}n.prototype=Object.create(r.prototype),n.prototype.fn=f,i.prototype.uint32=function(o){return this.len+=(this.tail=this.tail.next=new n((o=o>>>0)<128?1:o<16384?2:o<2097152?3:o<268435456?4:5,o)).len,this},i.prototype.int32=function(o){return o<0?this._push(y,10,c.fromNumber(o)):this.uint32(o)},i.prototype.sint32=function(o){return this.uint32((o<<1^o>>31)>>>0)};function y(h,o,p){for(;h.hi;)o[p++]=h.lo&127|128,h.lo=(h.lo>>>7|h.hi<<25)>>>0,h.hi>>>=7;for(;h.lo>127;)o[p++]=h.lo&127|128,h.lo=h.lo>>>7;o[p++]=h.lo}i.prototype.uint64=function(o){var p=c.from(o);return this._push(y,p.length(),p)},i.prototype.int64=i.prototype.uint64,i.prototype.sint64=function(o){var p=c.from(o).zzEncode();return this._push(y,p.length(),p)},i.prototype.bool=function(o){return this._push(b,1,o?1:0)};function _(h,o,p){o[p]=h&255,o[p+1]=h>>>8&255,o[p+2]=h>>>16&255,o[p+3]=h>>>24}i.prototype.fixed32=function(o){return this._push(_,4,o>>>0)},i.prototype.sfixed32=i.prototype.fixed32,i.prototype.fixed64=function(o){var p=c.from(o);return this._push(_,4,p.lo)._push(_,4,p.hi)},i.prototype.sfixed64=i.prototype.fixed64,i.prototype.float=function(o){return this._push(a.float.writeFloatLE,4,o)},i.prototype.double=function(o){return this._push(a.float.writeDoubleLE,8,o)};var B=a.Array.prototype.set?function(o,p,g){p.set(o,g)}:function(o,p,g){for(var v=0;v<o.length;++v)p[g+v]=o[v]};return i.prototype.bytes=function(o){var p=o.length>>>0;if(!p)return this._push(b,1,0);if(a.isString(o)){var g=i.alloc(p=l.length(o));l.decode(o,g,0),o=g}return this.uint32(p)._push(B,p,o)},i.prototype.string=function(o){var p=s.length(o);return p?this.uint32(p)._push(s.write,p,o):this._push(b,1,0)},i.prototype.fork=function(){return this.states=new u(this),this.head=this.tail=new r(e,0,0),this.len=0,this},i.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new r(e,0,0),this.len=0),this},i.prototype.ldelim=function(){var o=this.head,p=this.tail,g=this.len;return this.reset().uint32(g),g&&(this.tail.next=o.next,this.tail=p,this.len+=g),this},i.prototype.finish=function(){for(var o=this.head.next,p=this.constructor.alloc(this.len),g=0;o;)o.fn(o.val,p,g),g+=o.len,o=o.next;return p},i._configure=function(h){t=h,i.create=d(),t._configure()},L}var S,H;function rt(){if(H)return S;H=1,S=c;var a=$();(c.prototype=Object.create(a.prototype)).constructor=c;var t=w();function c(){a.call(this)}c._configure=function(){c.alloc=t._Buffer_allocUnsafe,c.writeBytesBuffer=t.Buffer&&t.Buffer.prototype instanceof Uint8Array&&t.Buffer.prototype.set.name==="set"?function(r,e,u){e.set(r,u)}:function(r,e,u){if(r.copy)r.copy(e,u,0,r.length);else for(var i=0;i<r.length;)e[u++]=r[i++]}},c.prototype.bytes=function(r){t.isString(r)&&(r=t._Buffer_from(r,"base64"));var e=r.length>>>0;return this.uint32(e),e&&this._push(c.writeBytesBuffer,e,r),this};function l(s,r,e){s.length<40?t.utf8.write(s,r,e):r.utf8Write?r.utf8Write(s,e):r.write(s,e)}return c.prototype.string=function(r){var e=t.Buffer.byteLength(r);return this.uint32(e),e&&this._push(l,e,r),this},c._configure(),S}var O,D;function V(){if(D)return O;D=1,O=r;var a=w(),t,c=a.LongBits,l=a.utf8;function s(f,n){return RangeError("index out of range: "+f.pos+" + "+(n||1)+" > "+f.len)}function r(f){this.buf=f,this.pos=0,this.len=f.length}var e=typeof Uint8Array<"u"?function(n){if(n instanceof Uint8Array||Array.isArray(n))return new r(n);throw Error("illegal buffer")}:function(n){if(Array.isArray(n))return new r(n);throw Error("illegal buffer")},u=function(){return a.Buffer?function(y){return(r.create=function(B){return a.Buffer.isBuffer(B)?new t(B):e(B)})(y)}:e};r.create=u(),r.prototype._slice=a.Array.prototype.subarray||a.Array.prototype.slice,r.prototype.uint32=function(){var n=4294967295;return function(){if(n=(this.buf[this.pos]&127)>>>0,this.buf[this.pos++]<128||(n=(n|(this.buf[this.pos]&127)<<7)>>>0,this.buf[this.pos++]<128)||(n=(n|(this.buf[this.pos]&127)<<14)>>>0,this.buf[this.pos++]<128)||(n=(n|(this.buf[this.pos]&127)<<21)>>>0,this.buf[this.pos++]<128)||(n=(n|(this.buf[this.pos]&15)<<28)>>>0,this.buf[this.pos++]<128))return n;if((this.pos+=5)>this.len)throw this.pos=this.len,s(this,10);return n}}(),r.prototype.int32=function(){return this.uint32()|0},r.prototype.sint32=function(){var n=this.uint32();return n>>>1^-(n&1)|0};function i(){var f=new c(0,0),n=0;if(this.len-this.pos>4){for(;n<4;++n)if(f.lo=(f.lo|(this.buf[this.pos]&127)<<n*7)>>>0,this.buf[this.pos++]<128)return f;if(f.lo=(f.lo|(this.buf[this.pos]&127)<<28)>>>0,f.hi=(f.hi|(this.buf[this.pos]&127)>>4)>>>0,this.buf[this.pos++]<128)return f;n=0}else{for(;n<3;++n){if(this.pos>=this.len)throw s(this);if(f.lo=(f.lo|(this.buf[this.pos]&127)<<n*7)>>>0,this.buf[this.pos++]<128)return f}return f.lo=(f.lo|(this.buf[this.pos++]&127)<<n*7)>>>0,f}if(this.len-this.pos>4){for(;n<5;++n)if(f.hi=(f.hi|(this.buf[this.pos]&127)<<n*7+3)>>>0,this.buf[this.pos++]<128)return f}else for(;n<5;++n){if(this.pos>=this.len)throw s(this);if(f.hi=(f.hi|(this.buf[this.pos]&127)<<n*7+3)>>>0,this.buf[this.pos++]<128)return f}throw Error("invalid varint encoding")}r.prototype.bool=function(){return this.uint32()!==0};function d(f,n){return(f[n-4]|f[n-3]<<8|f[n-2]<<16|f[n-1]<<24)>>>0}r.prototype.fixed32=function(){if(this.pos+4>this.len)throw s(this,4);return d(this.buf,this.pos+=4)},r.prototype.sfixed32=function(){if(this.pos+4>this.len)throw s(this,4);return d(this.buf,this.pos+=4)|0};function b(){if(this.pos+8>this.len)throw s(this,8);return new c(d(this.buf,this.pos+=4),d(this.buf,this.pos+=4))}return r.prototype.float=function(){if(this.pos+4>this.len)throw s(this,4);var n=a.float.readFloatLE(this.buf,this.pos);return this.pos+=4,n},r.prototype.double=function(){if(this.pos+8>this.len)throw s(this,4);var n=a.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,n},r.prototype.bytes=function(){var n=this.uint32(),y=this.pos,_=this.pos+n;if(_>this.len)throw s(this,n);return this.pos+=n,Array.isArray(this.buf)?this.buf.slice(y,_):y===_?new this.buf.constructor(0):this._slice.call(this.buf,y,_)},r.prototype.string=function(){var n=this.bytes();return l.read(n,0,n.length)},r.prototype.skip=function(n){if(typeof n=="number"){if(this.pos+n>this.len)throw s(this,n);this.pos+=n}else do if(this.pos>=this.len)throw s(this);while(this.buf[this.pos++]&128);return this},r.prototype.skipType=function(f){switch(f){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;(f=this.uint32()&7)!==4;)this.skipType(f);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+f+" at offset "+this.pos)}return this},r._configure=function(f){t=f,r.create=u(),t._configure();var n=a.Long?"toLong":"toNumber";a.merge(r.prototype,{int64:function(){return i.call(this)[n](!1)},uint64:function(){return i.call(this)[n](!0)},sint64:function(){return i.call(this).zzDecode()[n](!1)},fixed64:function(){return b.call(this)[n](!0)},sfixed64:function(){return b.call(this)[n](!1)}})},O}var A,F;function et(){if(F)return A;F=1,A=c;var a=V();(c.prototype=Object.create(a.prototype)).constructor=c;var t=w();function c(l){a.call(this,l)}return c._configure=function(){t.Buffer&&(c.prototype._slice=t.Buffer.prototype.slice)},c.prototype.string=function(){var s=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+s,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+s,this.len))},c._configure(),A}var j={},z,M;function it(){if(M)return z;M=1,z=t;var a=w();(t.prototype=Object.create(a.EventEmitter.prototype)).constructor=t;function t(c,l,s){if(typeof c!="function")throw TypeError("rpcImpl must be a function");a.EventEmitter.call(this),this.rpcImpl=c,this.requestDelimited=Boolean(l),this.responseDelimited=Boolean(s)}return t.prototype.rpcCall=function c(l,s,r,e,u){if(!e)throw TypeError("request must be specified");var i=this;if(!u)return a.asPromise(c,i,l,s,r,e);if(!i.rpcImpl){setTimeout(function(){u(Error("already ended"))},0);return}try{return i.rpcImpl(l,s[i.requestDelimited?"encodeDelimited":"encode"](e).finish(),function(b,f){if(b)return i.emit("error",b,l),u(b);if(f===null){i.end(!0);return}if(!(f instanceof r))try{f=r[i.responseDelimited?"decodeDelimited":"decode"](f)}catch(n){return i.emit("error",n,l),u(n)}return i.emit("data",f,l),u(null,f)})}catch(d){i.emit("error",d,l),setTimeout(function(){u(d)},0);return}},t.prototype.end=function(l){return this.rpcImpl&&(l||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this},z}var N;function nt(){return N||(N=1,function(a){var t=a;t.Service=it()}(j)),j}var k,P;function ot(){return P||(P=1,k={}),k}var T;function st(){return T||(T=1,function(a){var t=a;t.build="minimal",t.Writer=$(),t.BufferWriter=rt(),t.Reader=V(),t.BufferReader=et(),t.util=w(),t.rpc=nt(),t.roots=ot(),t.configure=c;function c(){t.util._configure(),t.Writer._configure(t.BufferWriter),t.Reader._configure(t.BufferReader)}c()}(q)),q}var C;function ht(){return C||(C=1,function(a){a.exports=st()}(x)),x.exports}export{ht as r};