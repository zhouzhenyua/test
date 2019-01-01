/**
 * Created by cui on 2018/7/30.
 */
$(function(){
    $(".X-head").load("header.html");
    $(".X-footer").load("footer.html")
});
var centBox = document.getElementById('articleList');
var listMore = document.getElementById('listMore');
ajax("js/listData.json",function(date){
    console.log("成功");
    var _date = eval("("+date+")");
    var NZList = _date[0].data.list;
    var NZList1 = _date[1].data.list;
    var NZList2 = _date[2].data.list;
    var str ="";
    var str1 ="";
    var str2 = "" ;
    var FT = 0 ;
    //for (var i = 0; i < NZList.length; i++) {
    //    var {creatAt,describe,title,sysId,coverImg,status} = NZList[i];
    //    str += `  <div class="content_one" articleid=${sysId}>
    //            <div class="img_wrap"><img src="${coverImg}"></div>
    //            <div class="content_text">
    //                <div class="title_small">${title}</div>
    //                <div class="date">${creatAt}</div>
    //                <p>${describe}</p>
    //            </div>
    //            <img class="list_img_over_xiaojiantou" src="images/list_img_over_xiaojiantou.png">
    //        </div>`;
    //}



    centBox.innerHTML += str;
    listMore.onclick = function(){
        FT++;
        //if(FT == 1){
        //    for (var i = 0; i < NZList1.length; i++) {
        //        var {creatAt,describe,title,sysId,coverImg,status} = NZList1[i];
        //        str1 += `  <div class="content_one" articleid=${sysId}>
        //        <div class="img_wrap"><img src="${coverImg}"></div>
        //        <div class="content_text">
        //            <div class="title_small">${title}</div>
        //            <div class="date">${creatAt}</div>
        //            <p>${describe}</p>
        //        </div>
        //        <img class="list_img_over_xiaojiantou" src="images/list_img_over_xiaojiantou.png">
        //    </div>`;
        //    }
            centBox.innerHTML += str1;
        }
        //if(FT == 2){
        //    for (var i = 0; i < NZList2.length; i++) {
        //        var {creatAt,describe,title,sysId,coverImg,status} = NZList2[i];
        //        str2 += `  <div class="content_one" articleid=${sysId}>
        //        <div class="img_wrap"><img src="${coverImg}"></div>
        //        <div class="content_text">
        //            <div class="title_small">${title}</div>
        //            <div class="date">${creatAt}</div>
        //            <p>${describe}</p>
        //        </div>
        //        <img class="list_img_over_xiaojiantou" src="images/list_img_over_xiaojiantou.png">
        //    </div>`;
        //    }
            centBox.innerHTML += str2;
            var XiaLA = document.getElementById("imgList");
            XiaLA.setAttribute("src","images/list_gomore_bg_nomore.jpg");
            this.style.opacity = '0';
        //}

    //}
},function(){
    console.log("失败");
});


$(".content_one").live("click",function(){
    var num = $(this).attr("articleid");
    window.location.href= "wenzhang.html?type="+num
});

