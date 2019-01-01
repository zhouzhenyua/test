/*
* express 基于node 的web框架
*
* express-generator  生成器 脚手架
*
*
* */


var express = require('express');
var app = express();
//console.log(app);

app.get("/",function(req,res){
    res.send("success")
});
app.get("/new",function(req,res){
    res.send("这是新闻页")
});

//app.get("/student/:id",function(req,res){
//    // 获取地址栏数据 params
//    res.send({"data":req.params.id});
//    //路由跳转
//});

app.get(/^\/stydent\/([/d{6}])$/,function(req,res){
    // 获取地址栏数据 params
    res.send({"data":req.params[0]});
    //路由跳转
});

// student  teacher


app.listen(3000);


