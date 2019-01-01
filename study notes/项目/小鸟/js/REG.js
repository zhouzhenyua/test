
$(function () {
    $(".T-header").load("header.html");
    $(".T-fooer").load("footer.html");
    var id=getParams("articleId");
    console.log(id);
    var a=articleData[id].data;
    console.log(a)
    //console.log(window.location.search.substring(1));
    console.log(a);
});
function getParams(type){
    var reg=new RegExp("(^|&)"+type+"=([^|&]*)(&|$)");
    //substring   substr
    var value=window.location.search.substring(1).match(reg);
    //test  match  exec
    if(value==null){
        return null
    }else{
        return  value[2]
		//正则匹配出的有4个值,1默认值   皆取出来的所有东西  2,小括号里的值  
    }


}