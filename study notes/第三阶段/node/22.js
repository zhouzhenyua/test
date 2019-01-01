/**
 * Created by 雨 on 2018/12/6.
 */

var express = require("express");
var app= express();


    app.get("/teacher/:id",function(req,res){
        // 获取地址栏数据 params
        res.send({"data":req.params.id});
        //路由跳转
    });

    app.get(/^\/student\/([/d{6}])$/,function(req,res){
        // 获取地址栏数据 params
        res.send({"data":req.params[0]});

    });




app.listen(3000);
