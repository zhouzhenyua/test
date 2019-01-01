//url
var http=require("http");
var url = require("url");

http.createServer((req,res)=>{
    //js: search hash port host path pathname
    //url.parse 可以将一个完整的地址，分割成块
    // url.parse 如果第二个参数传为true，可以把接收到的信息
    // 转为对象
    console.log(url.parse(req.url,true).query)
}).listen(3000);



//1、新建一个html
//2、通过表单发送数据，在后台页面接收到这些数据
//3、要显示在页面中
