var w,p;function q(){if(p)return w;p=1,w=c;var i=128,h=127,a=~h,d=Math.pow(2,31);function c(n,t,r){if(Number.MAX_SAFE_INTEGER&&n>Number.MAX_SAFE_INTEGER)throw c.bytes=0,new RangeError("Could not encode varint");t=t||[],r=r||0;for(var o=r;n>=d;)t[r++]=n&255|i,n/=128;for(;n&a;)t[r++]=n&255|i,n>>>=7;return t[r]=n|0,c.bytes=r-o+1,t}return w}var v,E;function s(){if(E)return v;E=1,v=a;var i=128,h=127;function a(d,t){var n=0,t=t||0,r=0,o=t,e,g=d.length;do{if(o>=g||r>49)throw a.bytes=0,new RangeError("Could not decode varint");e=d[o++],n+=r<28?(e&h)<<r:(e&h)*Math.pow(2,r),r+=7}while(e>=i);return a.bytes=o-t,n}return v}var M,u;function F(){if(u)return M;u=1;var i=Math.pow(2,7),h=Math.pow(2,14),a=Math.pow(2,21),d=Math.pow(2,28),c=Math.pow(2,35),n=Math.pow(2,42),t=Math.pow(2,49),r=Math.pow(2,56),o=Math.pow(2,63);return M=function(e){return e<i?1:e<h?2:e<a?3:e<d?4:e<c?5:e<n?6:e<t?7:e<r?8:e<o?9:10},M}var N,R;function f(){return R||(R=1,N={encode:q(),decode:s(),encodingLength:F()}),N}export{f as r};