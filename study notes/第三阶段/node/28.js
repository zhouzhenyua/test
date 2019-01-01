
/*
* 中间件 middleware
* body-parser 处理post请求
*
* */

var express = require("express");
// 使用中间件
var bodyparser = require('body-parser');
var app = express();

// 允许接收post 发送的数据
app.use(bodyparser.urlencoded({extended:false}));

app.set("view engine","ejs");
app.get('/',function(req,res){
    res.render('form')
});

app.post('/',function(req,res){
    res.send({"success":"ok","data":req.body})
});

app.listen(3000,"127.0.0.1");
