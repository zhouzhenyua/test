//简单文件写入

/*
* flag 参数
*   r 读取文件，如果不存在报错
*   w 写文件，如果不存在创建
*   a  追加，如果不存在创建
*
* */
var fs=require("fs");

fs.writeFile("hee.txt","这是通过writeFile写入的内容",{flag:"w"},function(err){
    if(!err){
        console.log("写入成功。。。")
    }
});
