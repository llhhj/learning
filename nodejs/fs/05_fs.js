let fs = require('fs')

// fs.mkdir('css' , err=>{
//     if (err) {
//         console.log(err);
//         return false
//     } else {
//         console.log('create success!');
//         return false
//     }
// })

// fs.rmdir('css', err=>{
//     if (err) {
//         console.log(err);
//         return false
//     } else {
//         console.log('remove success!');
//     }
// })

// fs.stat('index.js', (error,stats)=>{
//     if (error) {
//         console.log(error);
//         return false
//     } else {
//         console.log(stats);

//         console.log(`文件：${stats.isFile()}`);
//         console.log(`目录：${stats.isDirectory()}`);
        
//         return false
//     }
// })

// fs.writeFile('index.js', 'Hello jsliang', err=>{
//     if (err) {
//         console.log(err);
//         return false
//     } else {
//         console.log('write success!');
//         return false
//     }
// })

// fs.appendFile('index.js', 'appendFileString', err=>{
//     if (err) {
//         console.log(err);
//         return false
//     } else {
//         console.log('append success!');
//         return false
//     }
// })

fs.readFile('index.js', (err,data) => {
    if (err) {
        console.log(err);
        return false
    } else {
        console.log('readFileSuccess!');
        console.log(data);
    }
})

fs.readdir('node_modules', (err,data)=>{
    if (err) {
        console.log(err);
        return false
    } else{
        console.log('readDirSuccess!');
        console.log(data);
    }
})