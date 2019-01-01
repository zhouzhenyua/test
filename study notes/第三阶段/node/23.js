
/*
* 静态资源目录    public
*
* */

var express = require("express");
var app= express();

// 静态资源目录
app.use(express.static("./public"));
app.get("/demo1.html",(req,res)=>{
    res.send()
});


app.listen(3000);
