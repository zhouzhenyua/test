// fs 读写模块 文件系统     readfile
var http=require("http");

var fs = require("fs");
http.createServer(function(req,res){
    //req.url 获取地址栏信息
    if(req.url == "/demo2"){
        //readFile 读文件

        fs.readFile("./fs/demo2.html",function(err,data){
            res.end(data);
            //console.log(data.toString());
        })
    }else if(req.url == "/demo1"){
        fs.readFile("./fs/demo1.html",function(err,data){
            res.end(data);
        })
    }else if(req.url == "/bb.css"){
        fs.readFile("./fs/aa.css",function(err,data){
            res.writeHead(200,{"Content-type":"text/css;"});
            res.end(data)
        })
    }else if(req.url == "/img/2.jpg"){
        fs.readFile("./fs/img/2.jpg",function(err,data){
            res.end(data)
        })
    }else {
        res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
        res.end("404")
    }
    //console.log(req.url);
}).listen(3000);

