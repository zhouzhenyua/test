
/*
* formidable  处理表单
*
* 1、创建服务器
* 2、设置请求路径
* 3、处理form表单
* 4、接收form表单信息
*
*
*
* */



var http = require('http');

//var express = require("express");

var formidable  = require('formidable');

http.createServer((req,res)=>{
    if(req.url=="/dopost"&&req.method.toLowerCase()=="post"){

        var form = new formidable.IncomingForm();
        form.parse(req,(err,fields,file)=>{
            // fieldsf 所有的文本域 单选框

            //file 文件域

            console.log(fields);
            console.log(file);
        })

    }
}).listen(3000);

