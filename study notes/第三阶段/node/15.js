/*
* 路由  node vue react angular
*   req.url == ""
*   跳转到首页
*   student 跳到学生页
*       404
*
* */

var http= require("http");

var router=require("./router/router.js");

http.createServer((req,res)=>{
    if(req.url=="/"){
        router.showIndex(req,res)
    }else if(req.url=="/student"){
        router.showStudent(req,res)
    }else{
        router.show404(req,res)
    }

}).listen(3000);




