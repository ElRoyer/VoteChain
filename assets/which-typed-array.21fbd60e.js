import{c as p}from"./@account-abstraction.16fd1566.js";import{f as c}from"./for-each.17757083.js";import{a as v}from"./available-typed-arrays.6fc8a7f3.js";import{c as T}from"./call-bind.75075f34.js";import{g as S}from"./gopd.4edba3a9.js";import{s as b}from"./has-tostringtag.0722ba29.js";import{i as d}from"./is-typed-array.dab6d8b3.js";var s=c,h=v,g=T,f=S,u=g("Object.prototype.toString"),l=b(),y=typeof globalThis>"u"?p:globalThis,A=h(),O=g("String.prototype.slice"),m={},n=Object.getPrototypeOf;l&&f&&n&&s(A,function(o){if(typeof y[o]=="function"){var r=new y[o];if(Symbol.toStringTag in r){var a=n(r),t=f(a,Symbol.toStringTag);if(!t){var i=n(a);t=f(i,Symbol.toStringTag)}m[o]=t.get}}});var $=function(r){var a=!1;return s(m,function(t,i){if(!a)try{var e=t.call(r);e===i&&(a=e)}catch{}}),a},w=d,_=function(r){return w(r)?!l||!(Symbol.toStringTag in r)?O(u(r),8,-1):$(r):!1};export{_ as w};
