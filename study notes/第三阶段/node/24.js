
/*
* ejs 模板引擎
* express 设置 模板引擎
*
*
* */

var express = require("express");
var app = express();

// view engine 设置引擎    ejs(引擎)

app.set("view engine" ,"ejs");
app.get("/demo2",(req,res)=>{
    res.render("demo2",{
        news:[
            {"title":"233"},
            {"title":"233"},
            {"title":"233"}
        ]
    })
});

app.listen(3000);