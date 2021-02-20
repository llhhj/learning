var http = require('http')

let items = []  //数据库数据

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*') //允许跨域
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Content-Type', 'application/json')

    switch(req.method){
        case 'OPTIONS':
          res.statusCode = 200
          res.end()
          break;
        case 'GET':
          let data = JSON.stringify(items);
          res.write(data)
          res.end()
          break;
        case 'POST':
          let item = '';
          req.on('data',(chunk)=>{
            item += chunk
          })
          req.on('end',()=>{
            item = JSON.parse(item);
            items.push(item)

            let data = JSON.stringify(items)
            res.write(data)
            res.end()
          })
          break;
    }
}).listen(3000)