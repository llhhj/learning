function timeout(ms) {
    return new Promise(reslove=>{
        setTimeout(reslove, ms);
    })
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value)
}

asyncPrint('1',1000)

console.log(asyncPrint('1',1000));