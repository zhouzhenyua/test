
var express = require("express");
var app = express();

//  报错
app.use("/",(req,res)=>{
    //  status 状态码 自动捕获错误
    res.status(404).send("没有此页面")
});
app.listen(3000);