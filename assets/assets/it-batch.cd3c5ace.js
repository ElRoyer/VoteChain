async function*i(c,l=1){let t=[];l<1&&(l=1);for await(const h of c)for(t.push(h);t.length>=l;)yield t.slice(0,l),t=t.slice(l);for(;t.length;)yield t.slice(0,l),t=t.slice(l)}var n=i;export{n as i};
