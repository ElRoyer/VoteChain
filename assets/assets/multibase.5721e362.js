import{s as U}from"./@multiformats.fccb61fa.js";var g={exports:{}};const j=new TextDecoder,A=t=>j.decode(t),k=new TextEncoder,D=t=>k.encode(t);function F(t,e){const c=new Uint8Array(e);let i=0;for(const o of t)c.set(o,i),i+=o.length;return c}var y={decodeText:A,encodeText:D,concat:F};const{encodeText:S}=y;class z{constructor(e,c,i,o){this.name=e,this.code=c,this.codeBuf=S(this.code),this.alphabet=o,this.codec=i(o)}encode(e){return this.codec.encode(e)}decode(e){for(const c of e)if(this.alphabet&&this.alphabet.indexOf(c)<0)throw new Error(`invalid character '${c}' in '${e}'`);return this.codec.decode(e)}}var q=z;const K=(t,e,c)=>{const i={};for(let a=0;a<e.length;++a)i[e[a]]=a;let o=t.length;for(;t[o-1]==="=";)--o;const f=new Uint8Array(o*c/8|0);let s=0,u=0,l=0;for(let a=0;a<o;++a){const p=i[t[a]];if(p===void 0)throw new SyntaxError("Invalid character "+t[a]);u=u<<c|p,s+=c,s>=8&&(s-=8,f[l++]=255&u>>s)}if(s>=c||255&u<<8-s)throw new SyntaxError("Unexpected end of data");return f},O=(t,e,c)=>{const i=e[e.length-1]==="=",o=(1<<c)-1;let f="",s=0,u=0;for(let l=0;l<t.length;++l)for(u=u<<8|t[l],s+=8;s>c;)s-=c,f+=e[o&u>>s];if(s&&(f+=e[o&u<<c-s]),i)for(;f.length*c&7;)f+="=";return f},V=t=>e=>({encode(c){return O(c,e,t)},decode(c){return K(c,e,t)}});var L={rfc4648:V};const w=U,M=q,{rfc4648:r}=L,{decodeText:G,encodeText:H}=y,J=()=>({encode:G,decode:H}),T=[["identity","\0",J,""],["base2","0",r(1),"01"],["base8","7",r(3),"01234567"],["base10","9",w,"0123456789"],["base16","f",r(4),"0123456789abcdef"],["base16upper","F",r(4),"0123456789ABCDEF"],["base32hex","v",r(5),"0123456789abcdefghijklmnopqrstuv"],["base32hexupper","V",r(5),"0123456789ABCDEFGHIJKLMNOPQRSTUV"],["base32hexpad","t",r(5),"0123456789abcdefghijklmnopqrstuv="],["base32hexpadupper","T",r(5),"0123456789ABCDEFGHIJKLMNOPQRSTUV="],["base32","b",r(5),"abcdefghijklmnopqrstuvwxyz234567"],["base32upper","B",r(5),"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"],["base32pad","c",r(5),"abcdefghijklmnopqrstuvwxyz234567="],["base32padupper","C",r(5),"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567="],["base32z","h",r(5),"ybndrfg8ejkmcpqxot1uwisza345h769"],["base36","k",w,"0123456789abcdefghijklmnopqrstuvwxyz"],["base36upper","K",w,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"],["base58btc","z",w,"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"],["base58flickr","Z",w,"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"],["base64","m",r(6),"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"],["base64pad","M",r(6),"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],["base64url","u",r(6),"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"],["base64urlpad","U",r(6),"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_="]],m=T.reduce((t,e)=>(t[e[0]]=new M(e[0],e[1],e[2],e[3]),t),{}),N=T.reduce((t,e)=>(t[e[1]]=m[e[0]],t),{});var Q={names:m,codes:N};(function(t,e){const c=Q,{encodeText:i,decodeText:o,concat:f}=y;function s(n,d){if(!d)throw new Error("requires an encoded Uint8Array");const{name:b,codeBuf:x}=h(n);return p(b,d),f([x,d],x.length+d.length)}function u(n,d){const b=h(n),x=i(b.encode(d));return f([b.codeBuf,x],b.codeBuf.length+x.length)}function l(n){n instanceof Uint8Array&&(n=o(n));const d=n[0];return["f","F","v","V","t","T","b","B","c","C","h","k","K"].includes(d)&&(n=n.toLowerCase()),h(n[0]).decode(n.substring(1))}function a(n){if(n instanceof Uint8Array&&(n=o(n)),Object.prototype.toString.call(n)!=="[object String]")return!1;try{return h(n[0]).name}catch{return!1}}function p(n,d){h(n).decode(o(d))}function h(n){if(Object.prototype.hasOwnProperty.call(c.names,n))return c.names[n];if(Object.prototype.hasOwnProperty.call(c.codes,n))return c.codes[n];throw new Error(`Unsupported encoding: ${n}`)}function E(n){return n instanceof Uint8Array&&(n=o(n)),h(n[0])}e=t.exports=s,e.encode=u,e.decode=l,e.isEncoded=a,e.encoding=h,e.encodingFromData=E;const v=Object.freeze(c.names),B=Object.freeze(c.codes);e.names=v,e.codes=B})(g,g.exports);export{g as s};
