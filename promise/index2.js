let p = new Promise((res,rej)=>{
    console.log('promise');
    rej()
    res()
})

p.then(_=>{
    console.log('then');
}).catch(_=>{
    console.log('catch');
})

console.log('nones');