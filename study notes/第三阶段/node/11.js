

var http=require("http");
var fs= require('fs');
http.createServer((req,res)=>{
    if(req.url=="./favicon.ico"){
        return
    }
    // stat 判断是否是文件夹
    fs.readdir('./album/',(err,files)=>{
        //console.log(stats.isDirectory());
        var wjj =[];
        //迭代
        (function iter(i){
            if(i==files.length){
                return
            }
            fs.stat("./album/",+files[i],(err,stats)=>{
                if(stats.isDirectory()){
                    // 如果是文件夹就添加进去，否则什么都不做
                    wjj.push(files[i]);
                    console.log(wjj);
                }
            });
            iter(i+1)
        })(0);
        //console.log(wjj);
        //if(err){
        //    return console.error(err)
        //}
        //files.forEach((file)=>{
        //    console.log(file);
        //});
        //
        //res.end();
    })
}).listen(3000);




