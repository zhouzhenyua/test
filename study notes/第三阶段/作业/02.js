
var http = require("http");
var url = require('url');

http.createServer((req,res)=>{

    var userUrl=req.url;
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});

    if(userUrl.substr(0,9) == "/teacher/"){
        var userId1 =userUrl.substr(9);
        if(/^\d{6}$/.test(userId1)){
            res.end("老师的ID"+userId1);
            //console.log(success);
        }else {
            res.end("老师的ID不存在");
        }
    }
    if(userUrl.substr(0,9) == "/student/"){
        var userId2 =userUrl.substr(9);
        if(/^\d{6}$/.test(userId2)){
            res.end("学生的ID"+userId2);
            //console.log(success);
        }else {
            res.end("学生的ID不存在");
        }
    }
}).listen(3000);

