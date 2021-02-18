const { log } = require('console');
var fs = require('fs')

// fs.readFile('fs.txt','utf-8',(err,data)=>{
//     console.log(err,'err');
//     console.log(data,'data');
// })


// let data = 'output'
// fs.writeFile('output.doc',data,(err)=>{
//     console.log(err);
// })

fs.readFile('beauty.jpg',(err,data)=>{
    fs.writeFile('output/output.png',data,err=>{
        console.log(err);
    })
})