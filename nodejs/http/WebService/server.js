let fs = require('fs')
let http = require('http')
let path = require("path");
let url = require('url')

http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname;

    if (pathName == "/") {
        pathName = "index.html"
    }

    let extName = path.extname(pathName)

    if (pathName != 'favicon.ico') {
        fs.readFile("./" + pathName, (err, data) => {
            if (err) {
                console.log('404');
                fs.readFile("./404.html", (errNoFound, dataNoFound) => {
                    if (errNoFound) {
                        console.log(errNoFound);
                    } else {
                        res.writeHead(200, {
                            "Content-Type": "text/html;charset='utf-8'"
                        });
                        res.write(dataNoFound)
                        res.end()
                    }
                })
                return;
            } else {
                let ext = getExt(extName);
                res.writeHead(200, {
                    "Content-Type": ext + "; charset='utf-8'"
                })
                res.write(data)

                res.end()
            }
        })
    }
}).listen(8000)

getExt = (extName) => {
    switch (extName) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/js';
        default:
            return 'text/html';
    }
}