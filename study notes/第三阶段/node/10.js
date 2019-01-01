

var http=require("http");
var fs= require('fs');
http.createServer((req,res)=>{
    if(req.url=="./favicon.ico"){
        return
    }
  // stat 判断是否是文件夹
    fs.lstatSync('./album/aa',(err,stats)=>{
        //console.log(stats.isDirectory());
        console.log(stats);
        res.end();
    })
}).listen(3000);


/*
* 判断当前文件夹是否是文件夹，如果是的话就输出文件夹名称，
* readdir 读目录
*express
* */

/*

 stat
    size 文件的大小
    isFile() 是否是一个文件
    isDirectory() 是否是一个文件夹（目录）

fs.stat("",function(err,stat){

    console.log(stat.isDirectory())

})
*
*
* */