import{i as I}from"./inherits.44081206.js";import{s as w}from"./safe-buffer.3510e1d8.js";var u0={exports:{}},Z=w.exports.Buffer;function z(t,h){this._block=Z.alloc(t),this._finalSize=h,this._blockSize=t,this._len=0}z.prototype.update=function(t,h){typeof t=="string"&&(h=h||"utf8",t=Z.from(t,h));for(var a=this._block,r=this._blockSize,s=t.length,_=this._len,e=0;e<s;){for(var i=_%r,x=Math.min(s-e,r-i),c=0;c<x;c++)a[i+c]=t[e+c];_+=x,e+=x,_%r===0&&this._update(a)}return this._len+=s,this};z.prototype.digest=function(t){var h=this._len%this._blockSize;this._block[h]=128,this._block.fill(0,h+1),h>=this._finalSize&&(this._update(this._block),this._block.fill(0));var a=this._len*8;if(a<=4294967295)this._block.writeUInt32BE(a,this._blockSize-4);else{var r=(a&4294967295)>>>0,s=(a-r)/4294967296;this._block.writeUInt32BE(s,this._blockSize-8),this._block.writeUInt32BE(r,this._blockSize-4)}this._update(this._block);var _=this._hash();return t?_.toString(t):_};z.prototype._update=function(){throw new Error("_update must be implemented by subclass")};var $=z,l0=I.exports,T=$,B0=w.exports.Buffer,p0=[1518500249,1859775393,-1894007588,-899497514],E0=new Array(80);function k(){this.init(),this._w=E0,T.call(this,64,56)}l0(k,T);k.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this};function w0(t){return t<<5|t>>>27}function C0(t){return t<<30|t>>>2}function A0(t,h,a,r){return t===0?h&a|~h&r:t===2?h&a|h&r|a&r:h^a^r}k.prototype._update=function(t){for(var h=this._w,a=this._a|0,r=this._b|0,s=this._c|0,_=this._d|0,e=this._e|0,i=0;i<16;++i)h[i]=t.readInt32BE(i*4);for(;i<80;++i)h[i]=h[i-3]^h[i-8]^h[i-14]^h[i-16];for(var x=0;x<80;++x){var c=~~(x/20),f=w0(a)+A0(c,r,s,_)+e+h[x]+p0[c]|0;e=_,_=s,s=C0(r),r=a,a=f}this._a=a+this._a|0,this._b=r+this._b|0,this._c=s+this._c|0,this._d=_+this._d|0,this._e=e+this._e|0};k.prototype._hash=function(){var t=B0.allocUnsafe(20);return t.writeInt32BE(this._a|0,0),t.writeInt32BE(this._b|0,4),t.writeInt32BE(this._c|0,8),t.writeInt32BE(this._d|0,12),t.writeInt32BE(this._e|0,16),t};var I0=k,$0=I.exports,W=$,g0=w.exports.Buffer,F0=[1518500249,1859775393,-1894007588,-899497514],y0=new Array(80);function m(){this.init(),this._w=y0,W.call(this,64,56)}$0(m,W);m.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this};function D0(t){return t<<1|t>>>31}function S0(t){return t<<5|t>>>27}function k0(t){return t<<30|t>>>2}function m0(t,h,a,r){return t===0?h&a|~h&r:t===2?h&a|h&r|a&r:h^a^r}m.prototype._update=function(t){for(var h=this._w,a=this._a|0,r=this._b|0,s=this._c|0,_=this._d|0,e=this._e|0,i=0;i<16;++i)h[i]=t.readInt32BE(i*4);for(;i<80;++i)h[i]=D0(h[i-3]^h[i-8]^h[i-14]^h[i-16]);for(var x=0;x<80;++x){var c=~~(x/20),f=S0(a)+m0(c,r,s,_)+e+h[x]+F0[c]|0;e=_,_=s,s=k0(r),r=a,a=f}this._a=a+this._a|0,this._b=r+this._b|0,this._c=s+this._c|0,this._d=_+this._d|0,this._e=e+this._e|0};m.prototype._hash=function(){var t=g0.allocUnsafe(20);return t.writeInt32BE(this._a|0,0),t.writeInt32BE(this._b|0,4),t.writeInt32BE(this._c|0,8),t.writeInt32BE(this._d|0,12),t.writeInt32BE(this._e|0,16),t};var H0=m,U0=I.exports,j=$,z0=w.exports.Buffer,G0=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],K0=new Array(64);function H(){this.init(),this._w=K0,j.call(this,64,56)}U0(H,j);H.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this};function q0(t,h,a){return a^t&(h^a)}function L0(t,h,a){return t&h|a&(t|h)}function J0(t){return(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10)}function M0(t){return(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7)}function N0(t){return(t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3}function O0(t){return(t>>>17|t<<15)^(t>>>19|t<<13)^t>>>10}H.prototype._update=function(t){for(var h=this._w,a=this._a|0,r=this._b|0,s=this._c|0,_=this._d|0,e=this._e|0,i=this._f|0,x=this._g|0,c=this._h|0,f=0;f<16;++f)h[f]=t.readInt32BE(f*4);for(;f<64;++f)h[f]=O0(h[f-2])+h[f-7]+N0(h[f-15])+h[f-16]|0;for(var v=0;v<64;++v){var u=c+M0(e)+q0(e,i,x)+G0[v]+h[v]|0,p=J0(a)+L0(a,r,s)|0;c=x,x=i,i=e,e=_+u|0,_=s,s=r,r=a,a=u+p|0}this._a=a+this._a|0,this._b=r+this._b|0,this._c=s+this._c|0,this._d=_+this._d|0,this._e=e+this._e|0,this._f=i+this._f|0,this._g=x+this._g|0,this._h=c+this._h|0};H.prototype._hash=function(){var t=z0.allocUnsafe(32);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t.writeInt32BE(this._h,28),t};var t0=H,P0=I.exports,Q0=t0,R0=$,V0=w.exports.Buffer,X0=new Array(64);function G(){this.init(),this._w=X0,R0.call(this,64,56)}P0(G,Q0);G.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this};G.prototype._hash=function(){var t=V0.allocUnsafe(28);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t};var Y0=G,Z0=I.exports,h0=$,T0=w.exports.Buffer,Q=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],W0=new Array(160);function U(){this.init(),this._w=W0,h0.call(this,128,112)}Z0(U,h0);U.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this};function R(t,h,a){return a^t&(h^a)}function V(t,h,a){return t&h|a&(t|h)}function X(t,h){return(t>>>28|h<<4)^(h>>>2|t<<30)^(h>>>7|t<<25)}function Y(t,h){return(t>>>14|h<<18)^(t>>>18|h<<14)^(h>>>9|t<<23)}function j0(t,h){return(t>>>1|h<<31)^(t>>>8|h<<24)^t>>>7}function tt(t,h){return(t>>>1|h<<31)^(t>>>8|h<<24)^(t>>>7|h<<25)}function ht(t,h){return(t>>>19|h<<13)^(h>>>29|t<<3)^t>>>6}function at(t,h){return(t>>>19|h<<13)^(h>>>29|t<<3)^(t>>>6|h<<26)}function b(t,h){return t>>>0<h>>>0?1:0}U.prototype._update=function(t){for(var h=this._w,a=this._ah|0,r=this._bh|0,s=this._ch|0,_=this._dh|0,e=this._eh|0,i=this._fh|0,x=this._gh|0,c=this._hh|0,f=this._al|0,v=this._bl|0,u=this._cl|0,p=this._dl|0,l=this._el|0,g=this._fl|0,F=this._gl|0,y=this._hl|0,n=0;n<32;n+=2)h[n]=t.readInt32BE(n*4),h[n+1]=t.readInt32BE(n*4+4);for(;n<160;n+=2){var D=h[n-30],S=h[n-15*2+1],r0=j0(D,S),q=tt(S,D);D=h[n-2*2],S=h[n-2*2+1];var i0=ht(D,S),L=at(S,D),s0=h[n-7*2],e0=h[n-7*2+1],_0=h[n-16*2],J=h[n-16*2+1],d=q+e0|0,E=r0+s0+b(d,q)|0;d=d+L|0,E=E+i0+b(d,L)|0,d=d+J|0,E=E+_0+b(d,J)|0,h[n]=E,h[n+1]=d}for(var A=0;A<160;A+=2){E=h[A],d=h[A+1];var f0=V(a,r,s),x0=V(f,v,u),c0=X(a,f),M=X(f,a),n0=Y(e,l),b0=Y(l,e),o0=Q[A],N=Q[A+1],d0=R(e,i,x),O=R(l,g,F),o=y+b0|0,B=c+n0+b(o,y)|0;o=o+O|0,B=B+d0+b(o,O)|0,o=o+N|0,B=B+o0+b(o,N)|0,o=o+d|0,B=B+E+b(o,d)|0;var P=M+x0|0,v0=c0+f0+b(P,M)|0;c=x,y=F,x=i,F=g,i=e,g=l,l=p+o|0,e=_+B+b(l,p)|0,_=s,p=u,s=r,u=v,r=a,v=f,f=o+P|0,a=B+v0+b(f,o)|0}this._al=this._al+f|0,this._bl=this._bl+v|0,this._cl=this._cl+u|0,this._dl=this._dl+p|0,this._el=this._el+l|0,this._fl=this._fl+g|0,this._gl=this._gl+F|0,this._hl=this._hl+y|0,this._ah=this._ah+a+b(this._al,f)|0,this._bh=this._bh+r+b(this._bl,v)|0,this._ch=this._ch+s+b(this._cl,u)|0,this._dh=this._dh+_+b(this._dl,p)|0,this._eh=this._eh+e+b(this._el,l)|0,this._fh=this._fh+i+b(this._fl,g)|0,this._gh=this._gh+x+b(this._gl,F)|0,this._hh=this._hh+c+b(this._hl,y)|0};U.prototype._hash=function(){var t=T0.allocUnsafe(64);function h(a,r,s){t.writeInt32BE(a,s),t.writeInt32BE(r,s+4)}return h(this._ah,this._al,0),h(this._bh,this._bl,8),h(this._ch,this._cl,16),h(this._dh,this._dl,24),h(this._eh,this._el,32),h(this._fh,this._fl,40),h(this._gh,this._gl,48),h(this._hh,this._hl,56),t};var a0=U,rt=I.exports,it=a0,st=$,et=w.exports.Buffer,_t=new Array(160);function K(){this.init(),this._w=_t,st.call(this,128,112)}rt(K,it);K.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this};K.prototype._hash=function(){var t=et.allocUnsafe(48);function h(a,r,s){t.writeInt32BE(a,s),t.writeInt32BE(r,s+4)}return h(this._ah,this._al,0),h(this._bh,this._bl,8),h(this._ch,this._cl,16),h(this._dh,this._dl,24),h(this._eh,this._el,32),h(this._fh,this._fl,40),t};var ft=K,C=u0.exports=function(h){h=h.toLowerCase();var a=C[h];if(!a)throw new Error(h+" is not supported (we accept pull requests)");return new a};C.sha=I0;C.sha1=H0;C.sha224=Y0;C.sha256=t0;C.sha384=ft;C.sha512=a0;export{u0 as s};