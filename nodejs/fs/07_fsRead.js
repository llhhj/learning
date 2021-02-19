let fs = require('fs')

let fileReadStream = fs.createReadStream('index.js')

let count = 0;

let str = '';

fileReadStream.on('data',(chunk)=>{
    console.log(`${++count}接受到：${chunk.length}`);
    console.log(chunk);
    str += chunk
})

fileReadStream.on('end', ()=>{
    console.log("————结束————");
    console.log(count);
    console.log(str);
})

fileReadStream.on('error', error=>{
    console.log(error);
})