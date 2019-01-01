
/*
* 需求：
* 通过form提交数据 username  password
* addListener接收数据 node 处理数据
*
* 处理数据  queryString
*
* */

var http = require("http");

var queryString= require("querystring"); //处理字符串模块

http.createServer((req,res)=>{
    //console.log(req);
    if(req.url=="/dopost"&&req.method.toLowerCase()=="post"){
        var alldata = "";

        /*
        * node 处理数据非常细致
        * 它会把数据分割成段 依次接收
        * chunk 块
        *
        * */
        req.addListener("data",(chunk)=>{
            alldata+=chunk;
        });

        req.addListener("end",()=>{
            //  data    Buffer
            var dataString = alldata.toString();

            res.end("success");

            var queryobj = queryString.parse(dataString);

            console.log(queryobj);
        });
        //console.log(req);
    }

}).listen(3000);

