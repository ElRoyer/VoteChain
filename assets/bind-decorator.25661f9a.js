var o={};Object.defineProperty(o,"__esModule",{value:!0});var e;(function(t){t.typeOfFunction="function",t.boolTrue=!0})(e||(e={}));function i(t,r,n){if(!n||typeof n.value!==e.typeOfFunction)throw new TypeError("Only methods can be decorated with @bind. <"+r+"> is not a method!");return{configurable:e.boolTrue,get:function(){var u=n.value.bind(this);return Object.defineProperty(this,r,{value:u,configurable:e.boolTrue,writable:e.boolTrue}),u}}}o.bind=i;o.default=i;export{o as b};
