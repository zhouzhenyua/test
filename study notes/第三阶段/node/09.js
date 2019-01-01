
var http=require("http");
var fs= require('fs');
http.createServer((req,res)=>{
    if(req.url=="./favicon.ico"){
        return
    }
    //mkdir  创建文件夹  recursive:true 设置后可创建多个嵌套文件
    fs.mkdir('./album/aa',{recursive:true},(err)=>{
        console.log("创建成功");
        res.end("创建成功")
    })
}).listen(3000);


