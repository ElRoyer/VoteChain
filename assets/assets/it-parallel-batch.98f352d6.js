import{i as s}from"./it-batch.cd3c5ace.js";const i=s;async function*n(o,r=1){for await(const l of i(o,r)){const e=l.map(a=>a().then(t=>({ok:!0,value:t}),t=>({ok:!1,err:t})));for(let a=0;a<e.length;a++){const t=await e[a];if(t.ok)yield t.value;else throw t.err}}}var h=n;export{h as i};
