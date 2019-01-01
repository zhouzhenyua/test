//fs 文件系统

var http=require('http');

var fs=require('fs');

http.createServer((req,res)=>{
    fs.readFile("./fs/2.txt",(err,data)=>{
        if(err){
            throw err
        }
        //res.end(data);
        fs.writeFile("./fs/1.txt",{flag:"a"},data,(err,data)=>{
            res.end(data)
        })
    });
}).listen(3000);


