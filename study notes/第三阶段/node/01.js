//http  把http这个模块引入到当前程序中     require.js
var http =require("http");
// require 路径为相对路径、不能使用绝对路径，必须以（.或..开头）

// 创建服务器  req = request 请求  res = response 响应
http.createServer(function(req,res){
// end 结束响应
//    res.end('hello');
// 设置响应头 content-type 文本类型  charset 编码格式
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    //res.end('你好');

    res.end("买一个奔驰"+(3+4+5)+"s");
    //console.log(arguments);
}).listen(3000);

//exports() 暴露给外部
