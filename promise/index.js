function timeout(ms) {
    return new Promise((res,rej)=>{
        console.log(1); //立即执行
        setTimeout(res,ms,'done')
    })
}

// timeout(1000).then(v=>{
//     console.log(v); //异步执行
// })

console.log(2); 