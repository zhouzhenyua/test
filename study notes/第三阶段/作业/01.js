var http = require("http");
var url= require("url");

http.createServer((req,res)=>{

    if(req.url=="./favicon.ico"){
        return
    }

    console.log(url);
    var queryObj = url.parse(req.url,true).query;
    //res.writeHead(200,{"Content-type":";text/html;charset=utf-8"});
    res.write(queryObj.uesrname) ;
    res.end();
    //res.end("uesrname"+queryObj.uesrname);
    //res.end 结束响应  (write after )
}).listen(3000,"127.0.0.1");


/*
* 1、根据地址栏判断当前是学生还是老师
* 2、如果是老师返回老师的工号
*
*
* */
