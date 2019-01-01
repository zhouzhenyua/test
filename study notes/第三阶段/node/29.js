/*
* jade 模板引擎
*
*
* */

var express = require('express');
//var jade = require('jade');
var app = express();
// 注册模板引擎
app.engine('jade',require('jade').__express);
// 设置模板引擎
app.set('view engine','jade');
app.get('/',function(req,res){
   res.render('xixi')

});

app.listen(3000);
