/*
* 文件读取
*
* */

var fs = require("fs");

//创建一个可读流
var rs = fs.createReadStream("./img/2.jpg");

//创建一个可写流
var ws = fs.createWriteStream("./img/3.jpg");

// pipe() 可以将可读流中的内容，直接输出到可写流中
rs.pipe(ws);