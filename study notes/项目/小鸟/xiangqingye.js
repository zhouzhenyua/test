
$(function () {
    $("#listMore").click(function () {
        pageStart++;
        if(pageStart>3){
            $("#listMore").hide()
        }else{
            getList();
        }
   });
    //跳转详情页
    $("#articleList").delegate(".content_one","click",function(){
        var articleId=$(this).attr("articleid");
        window.location="wenzhang.html?articleId=xiaoniaoNews"+articleId;
    });
    getList();

});
var pageStart = 0;
function getList(){
//页数
/*    console.log(listData);
    $.ajax({
        url:"",
        type:"get",
        async :false,
        dataType:"json",
        data:{

        }.done(function (result) {

            })

    })*/
    var result = listData["listData0"+pageStart];
    //console.log(result);
    var list  = result.data.list;
    var pageSize =  result.data.pageSize
    //console.log(list);
    if(pageStart == 0){
        $("#articleList").html("");
    }
    for (var i = 0; i < list.length; i++) {
        //拿到模板里的所有节点   //console.log(htmlmodel);
        var htmlmodel = $(".model").html();

       htmolmodel =  htmlmodel.replace("$articleid$",list[i].sysId)
           .replace("$articleCover$",list[i].coverImg)
           .replace("$articletitle$",list[i].title)
           .replace("$Uptime$",list[i].creatAt)
           .replace("$descript$",list[i].describe)
        $("#articleList").append(htmolmodel);

    }
}

