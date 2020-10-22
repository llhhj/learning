const p2 = new Promise((res,rej)=>{

})

const p1 = new Promise((res,rej)=>{

})



p1.then(res=>{
    console.log('p2',res);
}).catch(rej=>{
    console.log('p1',rej);
})


