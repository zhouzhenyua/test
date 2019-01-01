
var express = require("express");

var app = express();

// use()
// 如果不写 /  默认为 /

//app.use((req,res,next)=>{
//
//    console.log(new Date());
//    // 继续执行后续操作
//    next();
//});


app.use("./admin",(req,res)=>{

    /*路径
    * baseUrl 读取的是默认路径
    * originalUrl 默认路径+ 后续所有路径
    * path 只读取默认路径后面带有 “/” 的路径参数
    *
    * */
    res.write("base==="+req.baseUrl+"/n");
    res.write("orig==="+req.originalUrl+"/n");
    res.write("path==="+req.path);
    res.send()
});

app.listen(3000);

