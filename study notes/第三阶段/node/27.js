var express = require("express");
var app = express();

// 路径地址不区分大小写
app.get("/aa",function(req,res){

    res.send("233")
});
app.listen(3000);
