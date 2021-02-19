let fs = require('fs')

fs.stat('upload', (err, stats)=>{
    if (err) {
        // console.log(err);
        // return false
        fs.mkdir('upload', err=>{
            if (err) {
                console.log(err);
                return false
            } else {
                console.log('create uploadDir success!');
            }
        })
    } else {
        console.log('already has uploadDir!');
    }
})

fs.readdir('node_modules', (err,files)=>{
    if (err) {
        console.log(err);
        return false
    } else {
        console.log(files);

        let filesArr = [];

        // (function getFile(i){
        //     console.log(i);
        // }(0))
        (function getFile(i){
            if (i == files.length) {
                console.log('目录：');
                console.log(filesArr);
                return false
            }

            fs.stat('node_modules/'+files[i], (err,stats)=>{
                if (stats.isDirectory()) {
                    filesArr.push(files[i])
                }
                getFile(i+1)
            })
        })(0)

        // getFile(0)
    }
})