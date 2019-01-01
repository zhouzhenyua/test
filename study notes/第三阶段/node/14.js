//silly-datetime    crypto 加密（哈希加密  MD5加密）

var sd = require("silly-datetime");
//var data = "20181205"; //时间戳

var time = sd.format(new Date(),"YYYY-MM-DD-HH");

console.log(time);


