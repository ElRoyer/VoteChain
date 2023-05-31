import"./node-stdlib-browser.6b0e4e0c.js";import{c as st}from"./@account-abstraction.16fd1566.js";import{b as Mt}from"./process.232f0ee3.js";var Wt={exports:{}};(function(Rt){(function(){var d="input is invalid type",mt="finalize already called",St=typeof window=="object",y=St?window:{};y.JS_SHA3_NO_WINDOW&&(St=!1);var Gt=!St&&typeof self=="object",Vt=!y.JS_SHA3_NO_NODE_JS&&typeof Mt.exports=="object"&&Mt.exports.versions&&Mt.exports.versions.node;Vt?y=st:Gt&&(y=self);var Yt=!y.JS_SHA3_NO_COMMON_JS&&!0&&Rt.exports,k=!y.JS_SHA3_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",p="0123456789abcdef".split(""),Lt=[31,7936,2031616,520093696],It=[4,1024,262144,67108864],Xt=[1,256,65536,16777216],Zt=[6,1536,393216,100663296],b=[0,8,16,24],Nt=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],Dt=[224,256,384,512],Ct=[128,256],Ht=["hex","buffer","arrayBuffer","array","digest"],zt={128:168,256:136};(y.JS_SHA3_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(t){return Object.prototype.toString.call(t)==="[object Array]"}),k&&(y.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(t){return typeof t=="object"&&t.buffer&&t.buffer.constructor===ArrayBuffer});for(var Kt=function(t,e,r){return function(o){return new h(t,e,t).update(o)[r]()}},gt=function(t,e,r){return function(o,n){return new h(t,e,n).update(o)[r]()}},Jt=function(t,e,r){return function(o,n,i,f){return v["cshake"+t].update(o,n,i,f)[r]()}},Ut=function(t,e,r){return function(o,n,i,f){return v["kmac"+t].update(o,n,i,f)[r]()}},F=function(t,e,r,o){for(var n=0;n<Ht.length;++n){var i=Ht[n];t[i]=e(r,o,i)}return t},jt=function(t,e){var r=Kt(t,e,"hex");return r.create=function(){return new h(t,e,t)},r.update=function(o){return r.create().update(o)},F(r,Kt,t,e)},$t=function(t,e){var r=gt(t,e,"hex");return r.create=function(o){return new h(t,e,o)},r.update=function(o,n){return r.create(n).update(o)},F(r,gt,t,e)},qt=function(t,e){var r=zt[t],o=Jt(t,e,"hex");return o.create=function(n,i,f){return!i&&!f?v["shake"+t].create(n):new h(t,e,n).bytepad([i,f],r)},o.update=function(n,i,f,a){return o.create(i,f,a).update(n)},F(o,Jt,t,e)},Qt=function(t,e){var r=zt[t],o=Ut(t,e,"hex");return o.create=function(n,i,f){return new Ot(t,e,i).bytepad(["KMAC",f],r).bytepad([n],r)},o.update=function(n,i,f,a){return o.create(n,f,a).update(i)},F(o,Ut,t,e)},Pt=[{name:"keccak",padding:Xt,bits:Dt,createMethod:jt},{name:"sha3",padding:Zt,bits:Dt,createMethod:jt},{name:"shake",padding:Lt,bits:Ct,createMethod:$t},{name:"cshake",padding:It,bits:Ct,createMethod:qt},{name:"kmac",padding:It,bits:Ct,createMethod:Qt}],v={},w=[],x=0;x<Pt.length;++x)for(var A=Pt[x],S=A.bits,_=0;_<S.length;++_){var Et=A.name+"_"+S[_];if(w.push(Et),v[Et]=A.createMethod(S[_],A.padding),A.name!=="sha3"){var Tt=A.name+S[_];w.push(Tt),v[Tt]=v[Et]}}function h(t,e,r){this.blocks=[],this.s=[],this.padding=e,this.outputBits=r,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(t<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(r&31)>>3;for(var o=0;o<50;++o)this.s[o]=0}h.prototype.update=function(t){if(this.finalized)throw new Error(mt);var e,r=typeof t;if(r!=="string"){if(r==="object"){if(t===null)throw new Error(d);if(k&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!k||!ArrayBuffer.isView(t)))throw new Error(d)}else throw new Error(d);e=!0}for(var o=this.blocks,n=this.byteCount,i=t.length,f=this.blockCount,a=0,l=this.s,u,c;a<i;){if(this.reset)for(this.reset=!1,o[0]=this.block,u=1;u<f+1;++u)o[u]=0;if(e)for(u=this.start;a<i&&u<n;++a)o[u>>2]|=t[a]<<b[u++&3];else for(u=this.start;a<i&&u<n;++a)c=t.charCodeAt(a),c<128?o[u>>2]|=c<<b[u++&3]:c<2048?(o[u>>2]|=(192|c>>6)<<b[u++&3],o[u>>2]|=(128|c&63)<<b[u++&3]):c<55296||c>=57344?(o[u>>2]|=(224|c>>12)<<b[u++&3],o[u>>2]|=(128|c>>6&63)<<b[u++&3],o[u>>2]|=(128|c&63)<<b[u++&3]):(c=65536+((c&1023)<<10|t.charCodeAt(++a)&1023),o[u>>2]|=(240|c>>18)<<b[u++&3],o[u>>2]|=(128|c>>12&63)<<b[u++&3],o[u>>2]|=(128|c>>6&63)<<b[u++&3],o[u>>2]|=(128|c&63)<<b[u++&3]);if(this.lastByteIndex=u,u>=n){for(this.start=u-n,this.block=o[f],u=0;u<f;++u)l[u]^=o[u];B(l),this.reset=!0}else this.start=u}return this},h.prototype.encode=function(t,e){var r=t&255,o=1,n=[r];for(t=t>>8,r=t&255;r>0;)n.unshift(r),t=t>>8,r=t&255,++o;return e?n.push(o):n.unshift(o),this.update(n),n.length},h.prototype.encodeString=function(t){var e,r=typeof t;if(r!=="string"){if(r==="object"){if(t===null)throw new Error(d);if(k&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!k||!ArrayBuffer.isView(t)))throw new Error(d)}else throw new Error(d);e=!0}var o=0,n=t.length;if(e)o=n;else for(var i=0;i<t.length;++i){var f=t.charCodeAt(i);f<128?o+=1:f<2048?o+=2:f<55296||f>=57344?o+=3:(f=65536+((f&1023)<<10|t.charCodeAt(++i)&1023),o+=4)}return o+=this.encode(o*8),this.update(t),o},h.prototype.bytepad=function(t,e){for(var r=this.encode(e),o=0;o<t.length;++o)r+=this.encodeString(t[o]);var n=e-r%e,i=[];return i.length=n,this.update(i),this},h.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex,r=this.blockCount,o=this.s;if(t[e>>2]|=this.padding[e&3],this.lastByteIndex===this.byteCount)for(t[0]=t[r],e=1;e<r+1;++e)t[e]=0;for(t[r-1]|=2147483648,e=0;e<r;++e)o[e]^=t[e];B(o)}},h.prototype.toString=h.prototype.hex=function(){this.finalize();for(var t=this.blockCount,e=this.s,r=this.outputBlocks,o=this.extraBytes,n=0,i=0,f="",a;i<r;){for(n=0;n<t&&i<r;++n,++i)a=e[n],f+=p[a>>4&15]+p[a&15]+p[a>>12&15]+p[a>>8&15]+p[a>>20&15]+p[a>>16&15]+p[a>>28&15]+p[a>>24&15];i%t===0&&(B(e),n=0)}return o&&(a=e[n],f+=p[a>>4&15]+p[a&15],o>1&&(f+=p[a>>12&15]+p[a>>8&15]),o>2&&(f+=p[a>>20&15]+p[a>>16&15])),f},h.prototype.arrayBuffer=function(){this.finalize();var t=this.blockCount,e=this.s,r=this.outputBlocks,o=this.extraBytes,n=0,i=0,f=this.outputBits>>3,a;o?a=new ArrayBuffer(r+1<<2):a=new ArrayBuffer(f);for(var l=new Uint32Array(a);i<r;){for(n=0;n<t&&i<r;++n,++i)l[i]=e[n];i%t===0&&B(e)}return o&&(l[n]=e[n],a=a.slice(0,f)),a},h.prototype.buffer=h.prototype.arrayBuffer,h.prototype.digest=h.prototype.array=function(){this.finalize();for(var t=this.blockCount,e=this.s,r=this.outputBlocks,o=this.extraBytes,n=0,i=0,f=[],a,l;i<r;){for(n=0;n<t&&i<r;++n,++i)a=i<<2,l=e[n],f[a]=l&255,f[a+1]=l>>8&255,f[a+2]=l>>16&255,f[a+3]=l>>24&255;i%t===0&&B(e)}return o&&(a=i<<2,l=e[n],f[a]=l&255,o>1&&(f[a+1]=l>>8&255),o>2&&(f[a+2]=l>>16&255)),f};function Ot(t,e,r){h.call(this,t,e,r)}Ot.prototype=new h,Ot.prototype.finalize=function(){return this.encode(this.outputBits,!0),h.prototype.finalize.call(this)};var B=function(t){var e,r,o,n,i,f,a,l,u,c,C,E,O,M,R,I,N,D,H,z,K,g,J,U,j,P,T,W,m,G,V,Y,L,X,Z,$,q,Q,s,tt,et,rt,ot,nt,at,it,ft,ut,ct,ht,lt,pt,bt,yt,vt,xt,dt,At,kt,wt,_t,Bt,Ft;for(o=0;o<48;o+=2)n=t[0]^t[10]^t[20]^t[30]^t[40],i=t[1]^t[11]^t[21]^t[31]^t[41],f=t[2]^t[12]^t[22]^t[32]^t[42],a=t[3]^t[13]^t[23]^t[33]^t[43],l=t[4]^t[14]^t[24]^t[34]^t[44],u=t[5]^t[15]^t[25]^t[35]^t[45],c=t[6]^t[16]^t[26]^t[36]^t[46],C=t[7]^t[17]^t[27]^t[37]^t[47],E=t[8]^t[18]^t[28]^t[38]^t[48],O=t[9]^t[19]^t[29]^t[39]^t[49],e=E^(f<<1|a>>>31),r=O^(a<<1|f>>>31),t[0]^=e,t[1]^=r,t[10]^=e,t[11]^=r,t[20]^=e,t[21]^=r,t[30]^=e,t[31]^=r,t[40]^=e,t[41]^=r,e=n^(l<<1|u>>>31),r=i^(u<<1|l>>>31),t[2]^=e,t[3]^=r,t[12]^=e,t[13]^=r,t[22]^=e,t[23]^=r,t[32]^=e,t[33]^=r,t[42]^=e,t[43]^=r,e=f^(c<<1|C>>>31),r=a^(C<<1|c>>>31),t[4]^=e,t[5]^=r,t[14]^=e,t[15]^=r,t[24]^=e,t[25]^=r,t[34]^=e,t[35]^=r,t[44]^=e,t[45]^=r,e=l^(E<<1|O>>>31),r=u^(O<<1|E>>>31),t[6]^=e,t[7]^=r,t[16]^=e,t[17]^=r,t[26]^=e,t[27]^=r,t[36]^=e,t[37]^=r,t[46]^=e,t[47]^=r,e=c^(n<<1|i>>>31),r=C^(i<<1|n>>>31),t[8]^=e,t[9]^=r,t[18]^=e,t[19]^=r,t[28]^=e,t[29]^=r,t[38]^=e,t[39]^=r,t[48]^=e,t[49]^=r,M=t[0],R=t[1],it=t[11]<<4|t[10]>>>28,ft=t[10]<<4|t[11]>>>28,W=t[20]<<3|t[21]>>>29,m=t[21]<<3|t[20]>>>29,wt=t[31]<<9|t[30]>>>23,_t=t[30]<<9|t[31]>>>23,rt=t[40]<<18|t[41]>>>14,ot=t[41]<<18|t[40]>>>14,X=t[2]<<1|t[3]>>>31,Z=t[3]<<1|t[2]>>>31,I=t[13]<<12|t[12]>>>20,N=t[12]<<12|t[13]>>>20,ut=t[22]<<10|t[23]>>>22,ct=t[23]<<10|t[22]>>>22,G=t[33]<<13|t[32]>>>19,V=t[32]<<13|t[33]>>>19,Bt=t[42]<<2|t[43]>>>30,Ft=t[43]<<2|t[42]>>>30,yt=t[5]<<30|t[4]>>>2,vt=t[4]<<30|t[5]>>>2,$=t[14]<<6|t[15]>>>26,q=t[15]<<6|t[14]>>>26,D=t[25]<<11|t[24]>>>21,H=t[24]<<11|t[25]>>>21,ht=t[34]<<15|t[35]>>>17,lt=t[35]<<15|t[34]>>>17,Y=t[45]<<29|t[44]>>>3,L=t[44]<<29|t[45]>>>3,U=t[6]<<28|t[7]>>>4,j=t[7]<<28|t[6]>>>4,xt=t[17]<<23|t[16]>>>9,dt=t[16]<<23|t[17]>>>9,Q=t[26]<<25|t[27]>>>7,s=t[27]<<25|t[26]>>>7,z=t[36]<<21|t[37]>>>11,K=t[37]<<21|t[36]>>>11,pt=t[47]<<24|t[46]>>>8,bt=t[46]<<24|t[47]>>>8,nt=t[8]<<27|t[9]>>>5,at=t[9]<<27|t[8]>>>5,P=t[18]<<20|t[19]>>>12,T=t[19]<<20|t[18]>>>12,At=t[29]<<7|t[28]>>>25,kt=t[28]<<7|t[29]>>>25,tt=t[38]<<8|t[39]>>>24,et=t[39]<<8|t[38]>>>24,g=t[48]<<14|t[49]>>>18,J=t[49]<<14|t[48]>>>18,t[0]=M^~I&D,t[1]=R^~N&H,t[10]=U^~P&W,t[11]=j^~T&m,t[20]=X^~$&Q,t[21]=Z^~q&s,t[30]=nt^~it&ut,t[31]=at^~ft&ct,t[40]=yt^~xt&At,t[41]=vt^~dt&kt,t[2]=I^~D&z,t[3]=N^~H&K,t[12]=P^~W&G,t[13]=T^~m&V,t[22]=$^~Q&tt,t[23]=q^~s&et,t[32]=it^~ut&ht,t[33]=ft^~ct&lt,t[42]=xt^~At&wt,t[43]=dt^~kt&_t,t[4]=D^~z&g,t[5]=H^~K&J,t[14]=W^~G&Y,t[15]=m^~V&L,t[24]=Q^~tt&rt,t[25]=s^~et&ot,t[34]=ut^~ht&pt,t[35]=ct^~lt&bt,t[44]=At^~wt&Bt,t[45]=kt^~_t&Ft,t[6]=z^~g&M,t[7]=K^~J&R,t[16]=G^~Y&U,t[17]=V^~L&j,t[26]=tt^~rt&X,t[27]=et^~ot&Z,t[36]=ht^~pt&nt,t[37]=lt^~bt&at,t[46]=wt^~Bt&yt,t[47]=_t^~Ft&vt,t[8]=g^~M&I,t[9]=J^~R&N,t[18]=Y^~U&P,t[19]=L^~j&T,t[28]=rt^~X&$,t[29]=ot^~Z&q,t[38]=pt^~nt&it,t[39]=bt^~at&ft,t[48]=Bt^~yt&xt,t[49]=Ft^~vt&dt,t[0]^=Nt[o],t[1]^=Nt[o+1]};if(Yt)Rt.exports=v;else for(x=0;x<w.length;++x)y[w[x]]=v[w[x]]})()})(Wt);const oe=Wt.exports;export{Wt as a,oe as s};