import{c as y}from"./@account-abstraction.16fd1566.js";import{i as j}from"./is-plain-obj.1387cb91.js";const l=j,{hasOwnProperty:a}=Object.prototype,{propertyIsEnumerable:A}=Object,c=(t,n,o)=>Object.defineProperty(t,n,{value:o,writable:!0,enumerable:!0,configurable:!0}),P=y,b={concatArrays:!1,ignoreUndefined:!1},p=t=>{const n=[];for(const o in t)a.call(t,o)&&n.push(o);if(Object.getOwnPropertySymbols){const o=Object.getOwnPropertySymbols(t);for(const r of o)A.call(t,r)&&n.push(r)}return n};function f(t){return Array.isArray(t)?m(t):l(t)?w(t):t}function m(t){const n=t.slice(0,0);return p(t).forEach(o=>{c(n,o,f(t[o]))}),n}function w(t){const n=Object.getPrototypeOf(t)===null?Object.create(null):{};return p(t).forEach(o=>{c(n,o,f(t[o]))}),n}const h=(t,n,o,r)=>(o.forEach(e=>{typeof n[e]>"u"&&r.ignoreUndefined||(e in t&&t[e]!==Object.getPrototypeOf(t)?c(t,e,u(t[e],n[e],r)):c(t,e,f(n[e])))}),t),E=(t,n,o)=>{let r=t.slice(0,0),e=0;return[t,n].forEach(s=>{const O=[];for(let i=0;i<s.length;i++)!a.call(s,i)||(O.push(String(i)),s===t?c(r,e++,s[i]):c(r,e++,f(s[i])));r=h(r,s,p(s).filter(i=>!O.includes(i)),o)}),r};function u(t,n,o){return o.concatArrays&&Array.isArray(t)&&Array.isArray(n)?E(t,n,o):!l(n)||!l(t)?f(n):h(t,n,p(n),o)}var S=function(...t){const n=u(f(b),this!==P&&this||{},b);let o={_:{}};for(const r of t)if(r!==void 0){if(!l(r))throw new TypeError("`"+r+"` is not an Option Object");o=u(o,{_:r},n)}return o._};export{S as m};
