var J=s;s.default=s;s.stable=b;s.stableStringify=b;var O="[...]",S="[Circular]",g=[],c=[];function N(){return{depthLimit:Number.MAX_SAFE_INTEGER,edgesLimit:Number.MAX_SAFE_INTEGER}}function s(e,f,t,i){typeof i>"u"&&(i=N()),m(e,"",0,[],void 0,0,i);var n;try{c.length===0?n=JSON.stringify(e,f,t):n=JSON.stringify(e,E(f),t)}catch{return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;g.length!==0;){var d=g.pop();d.length===4?Object.defineProperty(d[0],d[1],d[3]):d[0][d[1]]=d[2]}}return n}function o(e,f,t,i){var n=Object.getOwnPropertyDescriptor(i,t);n.get!==void 0?n.configurable?(Object.defineProperty(i,t,{value:e}),g.push([i,t,f,n])):c.push([f,t,e]):(i[t]=e,g.push([i,t,f]))}function m(e,f,t,i,n,d,u){d+=1;var r;if(typeof e=="object"&&e!==null){for(r=0;r<i.length;r++)if(i[r]===e){o(S,e,f,n);return}if(typeof u.depthLimit<"u"&&d>u.depthLimit){o(O,e,f,n);return}if(typeof u.edgesLimit<"u"&&t+1>u.edgesLimit){o(O,e,f,n);return}if(i.push(e),Array.isArray(e))for(r=0;r<e.length;r++)m(e[r],r,r,i,e,d,u);else{var y=Object.keys(e);for(r=0;r<y.length;r++){var h=y[r];m(e[h],h,r,i,e,d,u)}}i.pop()}}function A(e,f){return e<f?-1:e>f?1:0}function b(e,f,t,i){typeof i>"u"&&(i=N());var n=L(e,"",0,[],void 0,0,i)||e,d;try{c.length===0?d=JSON.stringify(n,f,t):d=JSON.stringify(n,E(f),t)}catch{return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;g.length!==0;){var u=g.pop();u.length===4?Object.defineProperty(u[0],u[1],u[3]):u[0][u[1]]=u[2]}}return d}function L(e,f,t,i,n,d,u){d+=1;var r;if(typeof e=="object"&&e!==null){for(r=0;r<i.length;r++)if(i[r]===e){o(S,e,f,n);return}try{if(typeof e.toJSON=="function")return}catch{return}if(typeof u.depthLimit<"u"&&d>u.depthLimit){o(O,e,f,n);return}if(typeof u.edgesLimit<"u"&&t+1>u.edgesLimit){o(O,e,f,n);return}if(i.push(e),Array.isArray(e))for(r=0;r<e.length;r++)L(e[r],r,r,i,e,d,u);else{var y={},h=Object.keys(e).sort(A);for(r=0;r<h.length;r++){var l=h[r];L(e[l],l,r,i,e,d,u),y[l]=e[l]}if(typeof n<"u")g.push([n,f,e]),n[f]=y;else return y}i.pop()}}function E(e){return e=typeof e<"u"?e:function(f,t){return t},function(f,t){if(c.length>0)for(var i=0;i<c.length;i++){var n=c[i];if(n[1]===f&&n[0]===t){t=n[2],c.splice(i,1);break}}return e.call(this,f,t)}}export{J as f};
