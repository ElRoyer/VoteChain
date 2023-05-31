var aspromise,hasRequiredAspromise;function requireAspromise(){if(hasRequiredAspromise)return aspromise;hasRequiredAspromise=1,aspromise=_;function _(m,v){for(var q=new Array(arguments.length-1),l=0,n=2,a=!0;n<arguments.length;)q[l++]=arguments[n++];return new Promise(function(u,t){q[l]=function(h){if(a)if(a=!1,h)t(h);else{for(var c=new Array(arguments.length-1),i=0;i<c.length;)c[i++]=arguments[i];u.apply(null,c)}};try{m.apply(v||null,q)}catch(d){a&&(a=!1,t(d))}})}return aspromise}var base64={},hasRequiredBase64;function requireBase64(){return hasRequiredBase64||(hasRequiredBase64=1,function(_){var m=_;m.length=function(e){var u=e.length;if(!u)return 0;for(var t=0;--u%4>1&&e.charAt(u)==="=";)++t;return Math.ceil(e.length*3)/4-t};for(var v=new Array(64),q=new Array(123),l=0;l<64;)q[v[l]=l<26?l+65:l<52?l+71:l<62?l-4:l-59|43]=l++;m.encode=function(e,u,t){for(var d=null,h=[],c=0,i=0,r;u<t;){var o=e[u++];switch(i){case 0:h[c++]=v[o>>2],r=(o&3)<<4,i=1;break;case 1:h[c++]=v[r|o>>4],r=(o&15)<<2,i=2;break;case 2:h[c++]=v[r|o>>6],h[c++]=v[o&63],i=0;break}c>8191&&((d||(d=[])).push(String.fromCharCode.apply(String,h)),c=0)}return i&&(h[c++]=v[r],h[c++]=61,i===1&&(h[c++]=61)),d?(c&&d.push(String.fromCharCode.apply(String,h.slice(0,c))),d.join("")):String.fromCharCode.apply(String,h.slice(0,c))};var n="invalid encoding";m.decode=function(e,u,t){for(var d=t,h=0,c,i=0;i<e.length;){var r=e.charCodeAt(i++);if(r===61&&h>1)break;if((r=q[r])===void 0)throw Error(n);switch(h){case 0:c=r,h=1;break;case 1:u[t++]=c<<2|(r&48)>>4,c=r,h=2;break;case 2:u[t++]=(c&15)<<4|(r&60)>>2,c=r,h=3;break;case 3:u[t++]=(c&3)<<6|r,h=0;break}}if(h===1)throw Error(n);return t-d},m.test=function(e){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)}}(base64)),base64}var eventemitter,hasRequiredEventemitter;function requireEventemitter(){if(hasRequiredEventemitter)return eventemitter;hasRequiredEventemitter=1,eventemitter=_;function _(){this._listeners={}}return _.prototype.on=function(v,q,l){return(this._listeners[v]||(this._listeners[v]=[])).push({fn:q,ctx:l||this}),this},_.prototype.off=function(v,q){if(v===void 0)this._listeners={};else if(q===void 0)this._listeners[v]=[];else for(var l=this._listeners[v],n=0;n<l.length;)l[n].fn===q?l.splice(n,1):++n;return this},_.prototype.emit=function(v){var q=this._listeners[v];if(q){for(var l=[],n=1;n<arguments.length;)l.push(arguments[n++]);for(n=0;n<q.length;)q[n].fn.apply(q[n++].ctx,l)}return this},eventemitter}var float,hasRequiredFloat;function requireFloat(){if(hasRequiredFloat)return float;hasRequiredFloat=1,float=_(_);function _(n){return typeof Float32Array<"u"?function(){var a=new Float32Array([-0]),e=new Uint8Array(a.buffer),u=e[3]===128;function t(i,r,o){a[0]=i,r[o]=e[0],r[o+1]=e[1],r[o+2]=e[2],r[o+3]=e[3]}function d(i,r,o){a[0]=i,r[o]=e[3],r[o+1]=e[2],r[o+2]=e[1],r[o+3]=e[0]}n.writeFloatLE=u?t:d,n.writeFloatBE=u?d:t;function h(i,r){return e[0]=i[r],e[1]=i[r+1],e[2]=i[r+2],e[3]=i[r+3],a[0]}function c(i,r){return e[3]=i[r],e[2]=i[r+1],e[1]=i[r+2],e[0]=i[r+3],a[0]}n.readFloatLE=u?h:c,n.readFloatBE=u?c:h}():function(){function a(u,t,d,h){var c=t<0?1:0;if(c&&(t=-t),t===0)u(1/t>0?0:2147483648,d,h);else if(isNaN(t))u(2143289344,d,h);else if(t>34028234663852886e22)u((c<<31|2139095040)>>>0,d,h);else if(t<11754943508222875e-54)u((c<<31|Math.round(t/1401298464324817e-60))>>>0,d,h);else{var i=Math.floor(Math.log(t)/Math.LN2),r=Math.round(t*Math.pow(2,-i)*8388608)&8388607;u((c<<31|i+127<<23|r)>>>0,d,h)}}n.writeFloatLE=a.bind(null,m),n.writeFloatBE=a.bind(null,v);function e(u,t,d){var h=u(t,d),c=(h>>31)*2+1,i=h>>>23&255,r=h&8388607;return i===255?r?NaN:c*(1/0):i===0?c*1401298464324817e-60*r:c*Math.pow(2,i-150)*(r+8388608)}n.readFloatLE=e.bind(null,q),n.readFloatBE=e.bind(null,l)}(),typeof Float64Array<"u"?function(){var a=new Float64Array([-0]),e=new Uint8Array(a.buffer),u=e[7]===128;function t(i,r,o){a[0]=i,r[o]=e[0],r[o+1]=e[1],r[o+2]=e[2],r[o+3]=e[3],r[o+4]=e[4],r[o+5]=e[5],r[o+6]=e[6],r[o+7]=e[7]}function d(i,r,o){a[0]=i,r[o]=e[7],r[o+1]=e[6],r[o+2]=e[5],r[o+3]=e[4],r[o+4]=e[3],r[o+5]=e[2],r[o+6]=e[1],r[o+7]=e[0]}n.writeDoubleLE=u?t:d,n.writeDoubleBE=u?d:t;function h(i,r){return e[0]=i[r],e[1]=i[r+1],e[2]=i[r+2],e[3]=i[r+3],e[4]=i[r+4],e[5]=i[r+5],e[6]=i[r+6],e[7]=i[r+7],a[0]}function c(i,r){return e[7]=i[r],e[6]=i[r+1],e[5]=i[r+2],e[4]=i[r+3],e[3]=i[r+4],e[2]=i[r+5],e[1]=i[r+6],e[0]=i[r+7],a[0]}n.readDoubleLE=u?h:c,n.readDoubleBE=u?c:h}():function(){function a(u,t,d,h,c,i){var r=h<0?1:0;if(r&&(h=-h),h===0)u(0,c,i+t),u(1/h>0?0:2147483648,c,i+d);else if(isNaN(h))u(0,c,i+t),u(2146959360,c,i+d);else if(h>17976931348623157e292)u(0,c,i+t),u((r<<31|2146435072)>>>0,c,i+d);else{var o;if(h<22250738585072014e-324)o=h/5e-324,u(o>>>0,c,i+t),u((r<<31|o/4294967296)>>>0,c,i+d);else{var g=Math.floor(Math.log(h)/Math.LN2);g===1024&&(g=1023),o=h*Math.pow(2,-g),u(o*4503599627370496>>>0,c,i+t),u((r<<31|g+1023<<20|o*1048576&1048575)>>>0,c,i+d)}}}n.writeDoubleLE=a.bind(null,m,0,4),n.writeDoubleBE=a.bind(null,v,4,0);function e(u,t,d,h,c){var i=u(h,c+t),r=u(h,c+d),o=(r>>31)*2+1,g=r>>>20&2047,y=4294967296*(r&1048575)+i;return g===2047?y?NaN:o*(1/0):g===0?o*5e-324*y:o*Math.pow(2,g-1075)*(y+4503599627370496)}n.readDoubleLE=e.bind(null,q,0,4),n.readDoubleBE=e.bind(null,l,4,0)}(),n}function m(n,a,e){a[e]=n&255,a[e+1]=n>>>8&255,a[e+2]=n>>>16&255,a[e+3]=n>>>24}function v(n,a,e){a[e]=n>>>24,a[e+1]=n>>>16&255,a[e+2]=n>>>8&255,a[e+3]=n&255}function q(n,a){return(n[a]|n[a+1]<<8|n[a+2]<<16|n[a+3]<<24)>>>0}function l(n,a){return(n[a]<<24|n[a+1]<<16|n[a+2]<<8|n[a+3])>>>0}return float}var inquire_1,hasRequiredInquire;function requireInquire(){if(hasRequiredInquire)return inquire_1;hasRequiredInquire=1,inquire_1=inquire;function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(_){}return null}return inquire_1}var utf8={},hasRequiredUtf8;function requireUtf8(){return hasRequiredUtf8||(hasRequiredUtf8=1,function(_){var m=_;m.length=function(q){for(var l=0,n=0,a=0;a<q.length;++a)n=q.charCodeAt(a),n<128?l+=1:n<2048?l+=2:(n&64512)===55296&&(q.charCodeAt(a+1)&64512)===56320?(++a,l+=4):l+=3;return l},m.read=function(q,l,n){var a=n-l;if(a<1)return"";for(var e=null,u=[],t=0,d;l<n;)d=q[l++],d<128?u[t++]=d:d>191&&d<224?u[t++]=(d&31)<<6|q[l++]&63:d>239&&d<365?(d=((d&7)<<18|(q[l++]&63)<<12|(q[l++]&63)<<6|q[l++]&63)-65536,u[t++]=55296+(d>>10),u[t++]=56320+(d&1023)):u[t++]=(d&15)<<12|(q[l++]&63)<<6|q[l++]&63,t>8191&&((e||(e=[])).push(String.fromCharCode.apply(String,u)),t=0);return e?(t&&e.push(String.fromCharCode.apply(String,u.slice(0,t))),e.join("")):String.fromCharCode.apply(String,u.slice(0,t))},m.write=function(q,l,n){for(var a=n,e,u,t=0;t<q.length;++t)e=q.charCodeAt(t),e<128?l[n++]=e:e<2048?(l[n++]=e>>6|192,l[n++]=e&63|128):(e&64512)===55296&&((u=q.charCodeAt(t+1))&64512)===56320?(e=65536+((e&1023)<<10)+(u&1023),++t,l[n++]=e>>18|240,l[n++]=e>>12&63|128,l[n++]=e>>6&63|128,l[n++]=e&63|128):(l[n++]=e>>12|224,l[n++]=e>>6&63|128,l[n++]=e&63|128);return n-a}}(utf8)),utf8}var pool_1,hasRequiredPool;function requirePool(){if(hasRequiredPool)return pool_1;hasRequiredPool=1,pool_1=_;function _(m,v,q){var l=q||8192,n=l>>>1,a=null,e=l;return function(t){if(t<1||t>n)return m(t);e+t>l&&(a=m(l),e=0);var d=v.call(a,e,e+=t);return e&7&&(e=(e|7)+1),d}}return pool_1}export{requireBase64 as a,requireEventemitter as b,requireFloat as c,requireInquire as d,requireUtf8 as e,requirePool as f,requireAspromise as r};
