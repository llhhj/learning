let url = require('url');
let http = require('http');

http.createServer((req,res)=>{
    // console.log(req.url)
    // console.log(result);
    if (req.url != '/favicon.ico') {
        let result = url.parse(req.url,true)
        console.log(result.query);
        console.log(result.query.userName);
        console.log(result.query.userAge);
    }
    res.end()
}).listen(3000)
