
// node 输出

var http = require("http");
var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    res.write('<h1>我是h1标签</h1>');
    res.end((1+2+3).toString())
});

server.listen("3000","127.0.0.1");
