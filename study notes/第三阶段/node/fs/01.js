/**
 * Created by 雨 on 2018/12/4.
 */

    //同步写入
var fs = require('fs');

// 打开文件
var fd = fs.openSync("hello.txt","w");
//向文件中写入内容
fs.writeSync(fd,"23300");
// 关闭文件
fs.closeSync(fd);



