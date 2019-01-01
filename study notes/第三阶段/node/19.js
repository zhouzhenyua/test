/*
* 模板引擎
* ejs   <%=%>   较推荐
* jade      不推荐
*
* atr-template  推荐
*
*<% %> 标签符
* <%=%> 输出符
*
* */
//  引入模板引擎

var ejs = require("ejs"),
    users = ['geddy','neil','alex'];
console.log(ejs);

//  模板
var template="今天是星期<% =num %>";
//  渲染的数据
var data ={
    num:4
};
//  render(template(模板）,data(数据))
var html = ejs.render(template,data);


//ejs.render('<? = users.join("|");?>',{user:users},{delimter:"?"});

//ejs.delimiter ='$';
//ejs.render('<$= users.join("|");$>',{user:users});
