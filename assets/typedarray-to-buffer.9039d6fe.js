import{b as t}from"./node-stdlib-browser.6b0e4e0c.js";import{i as r}from"./is-typedarray.90714367.js";var y=r.strict,u=function(e){if(y(e)){var f=t.Buffer.from(e.buffer);return e.byteLength!==e.buffer.byteLength&&(f=f.slice(e.byteOffset,e.byteOffset+e.byteLength)),f}else return t.Buffer.from(e)};export{u as t};
