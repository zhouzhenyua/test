
//

var http =require("http");
var formidable = require("formidable");
var util = require("util");
var fs = require("fs");
var sd = require("silly-datetime");
var path = require("path");


console.log(util);

http.createServer((req,res)=>{

    if(req.url=="/dopost"&&req.method.toLowerCase()=="post"){
        var form = new formidable.IncomingForm();
        //指定上传目录
        form.uploadDir = "./upload";

        form.parse(req, function(err, fields, files) {
            //
            var tt = sd.format(new Date(),"YYYYMMDDHH");
            var rdm = Math.ceil(Math.random()*1000+1000);
            var extname = path.extname(files.pic.name);
            //console.log(files.pic.name);

            var oldpath = __dirname+"\\"+files.pic.path;
            var newpath = __dirname+"/upload/"+tt+rdm+extname;
            //
            fs.rename(oldpath,newpath,(err)=>{
                if(err){
                    res.end("改名失败")
                }else {
                    res.end("改名成功")
                }
            });

            //console.log(fields);
            //console.log(233);
        })
    }
}).listen(3000);