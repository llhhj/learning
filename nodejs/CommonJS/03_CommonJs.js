let tools1 = require('./03_tool-add')
let http = require('http')
let tools2 = require('03_tool-multiply')
let tools3 = require('jsliang-module')

http.createServer((req,res)=>{

    res.writeHead(200, {
        "Content-Type": "text/html;charset=UTF-8"
    })
    res.write('<h1 style="text-align:center">Hello NodeJS</h1>')

    // console.log(tools1.add(1,2,3),'tools1')
    // console.log(tools2.multiply(1,3,5),'tools2')
    console.log(tools3.add(1,3,5),'tools3.add')
    console.log(tools3.multiply(1,3,5),'tools3.multiply')

    res.end()
}).listen(3000)