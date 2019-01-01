// 流式文件写入

var fs = require('fs');

var ws =fs.createWriteStream("hee.txt");

ws.once("open",function(){
    console.log("流打开了")
});

ws.once("close",function(){
    console.log("流关闭了")
});
// 通过ws 向文件中输出内容

ws.write('wrersef');
ws.write('233');
ws.write('445');
ws.write('7774');

//关闭流
ws.end();