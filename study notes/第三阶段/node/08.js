var http=require('http');

var fs=require('fs');

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    fs.writeFile("./fs/1.txt","333",(err)=>{

        res.end('写入成功')
    })
}).listen(3000);

