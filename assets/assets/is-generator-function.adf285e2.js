import{s as u}from"./has-tostringtag.0722ba29.js";var c=Object.prototype.toString,f=Function.prototype.toString,s=/^\s*(?:function)?\*/,o=u(),r=Object.getPrototypeOf,v=function(){if(!o)return!1;try{return Function("return function*() {}")()}catch{}},e,l=function(t){if(typeof t!="function")return!1;if(s.test(f.call(t)))return!0;if(!o){var i=c.call(t);return i==="[object GeneratorFunction]"}if(!r)return!1;if(typeof e>"u"){var n=v();e=n?r(n):!1}return r(t)===e};export{l as i};
