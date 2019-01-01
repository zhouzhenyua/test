/*
* fs读取index.ejs
* 后台提供数据    前端对数据进行渲染
* 数据：
*   定义一个对象，前端渲染出对应的内容
*   data =[
*       {},
*       {},
*       {}
*   ]
*   <%%>
*
*
* */

var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer((req,res)=>{
    fs.readFile('./views/index.ejs',(err,data)=>{
        // 模板数据绑定
        //var
        var template = data.toString();
        var directoray ={
            num:4,
            news:[
            {content:233},
            {content:233},
            {content:233},
            {content:233}
        ]
        };
        var html = ejs.render(template,directoray);
        res.end(html);
        //console.log(data);
    })
}).listen(3000);
