import{c as S}from"./@account-abstraction.16fd1566.js";var p={exports:{}},g;function w(){return g||(g=1,function(m,d){//! stable.js 0.1.8, https://github.com/Two-Screen/stable
//! © 2018 Angry Bytes and contributors. MIT licensed.
(function(c,v){m.exports=v()})(S,function(){var c=function(e,t){return v(e.slice(),t)};c.inplace=function(e,t){var n=v(e,t);return n!==e&&x(n,null,e.length,e),e};function v(e,t){typeof t!="function"&&(t=function(b,l){return String(b).localeCompare(l)});var n=e.length;if(n<=1)return e;for(var f=new Array(n),i=1;i<n;i*=2){x(e,t,i,f);var r=e;e=f,f=r}return e}var x=function(e,t,n,f){var i=e.length,r=0,b=n*2,l,o,a,u,s;for(l=0;l<i;l+=b)for(o=l+n,a=o+n,o>i&&(o=i),a>i&&(a=i),u=l,s=o;;)if(u<o&&s<a)t(e[u],e[s])<=0?f[r++]=e[u++]:f[r++]=e[s++];else if(u<o)f[r++]=e[u++];else if(s<a)f[r++]=e[s++];else break};return c})}(p)),p.exports}export{w as r};