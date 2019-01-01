
//    地址解析
var aUlLI = document.querySelectorAll('.N-nav_wrap .nav_piece');
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

var Request = new Object();
Request = GetRequest();
var num = Request['N-x'];


var aUlCont = document.querySelectorAll('.N-main_wrap');
var back_1 =document.getElementById('qidong');
if(num == 2){
    var h = aUlCont[1].offsetHeight;
    $(".N-main_wrap_box").animate({"top":-h+"px"},0);
    //aUlLI[num].classList.add('now');
    back_1.style.display = "none"
}
if(num == 3){
    var h = aUlCont[2].offsetHeight;
    $(".N-main_wrap_box").animate({"top":-2*h+"px"},0);
    //for (var i = 0; i < aUlLI.length; i++) {
    //    aUlLI[i].classList.remove('now');
    //}
    //aUlLI[1].classList.add('now');
    back_1.style.display = "none"
}
if(num == 4){
    var h = aUlCont[3].offsetHeight;
    $(".N-main_wrap_box").animate({"top":-3*h+"px"},0)
    back_1.style.display = "none"
}
if(num == 5){
    var h = aUlCont[4].offsetHeight;
    $(".N-main_wrap_box").animate({"top":-4*h+"px"},0)
    back_1.style.display = "none"
}
/*------头部点击---------*/
var index = 0;
for (var i = 0; i < aUlLI.length-1; i++) {
    aUlLI[i].number = i;
    aUlLI[i].onclick = function(){
        var h = aUlCont[this.number].offsetHeight;
        index = this.number;
        for (var j = 0; j < aUlLI.length-1; j++) {
            aUlLI[j].classList.remove('now');
        }
        if(index>3){
            index = 3;
        }
        this.classList.add('now');
        $(".N-main_wrap_box").animate({"top":-(index+1)*h+"px"},500)
    }
}
var oNextBtn = document.querySelector('.donext');
oNextBtn.onclick = function(){
    var h = aUlCont[0].offsetHeight;
    $(".N-main_wrap_box").animate({"top":-h+"px"},500)
};

/*---------概述 左右点击------------*/
var oLeftBtn = document.getElementById('LeftBtn');
var oRightBtn = document.getElementById('RightBtn');
var titTimer=0;
oLeftBtn.onclick =function(){
    titTimer -= 1130;
    if(titTimer < 0){
        titTimer = 0;
    }
    $(".gaishu_slider").animate({"left":-titTimer+'px'},500)
};
oRightBtn.onclick =function(){
    titTimer += 1130;
    if(titTimer > 2260){
        titTimer = 2260
    }
    $(".gaishu_slider").animate({"left":-titTimer+'px'},500)
};

/*--------小鸟掌学左右转换按钮----------*/
var NC1 = document.getElementById('N-C-1');
var NC2 = document.getElementById('N-C-2');
var aZhuanHuan = document.querySelectorAll('.xiaoniaoyun .btn_box .yunmove_btn');
NC1.onclick = function(){
    if(aZhuanHuan[0].className != "yunmove_btn now"){
        aZhuanHuan[1].classList.remove('now');
        aZhuanHuan[0].classList.add('now');
        aZhuanHuan[1].style.left = '78px';
        aZhuanHuan[0].style.left = '0'
    }
};
NC2 .onclick = function(){
    if(aZhuanHuan[1].className != "yunmove_btn now"){
        aZhuanHuan[0].classList.remove('now');
        aZhuanHuan[1].classList.add('now');
        aZhuanHuan[0].style.left = '78px';
        aZhuanHuan[1].style.left = '0'
    }
};




setTimeout(function(){
    $(".qidong .welcome_wrap").animate({"top":-50+"px"},500);
    $("#DDiv").animate({"opacity":1},500);
},3000);

/*---跳转跳过动画没处理呢*/
setTimeout(function(){
    $(".qidong").animate({"height":0+"px"},500);
    var disNon = document.querySelector('.qidong .welcome_wrap');
    disNon.style.display = 'none';

    var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
                //事件
                xiagun();
                //alert("上滚");

            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
                //事件
                // alert("下滚");
                shanggun()

            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail> 0) { //当滑轮向上滚动时
                //事件
            }
            if (e.detail< 0) { //当滑轮向下滚动时
                //事件
            }
        }
    };
    function shanggun(){
        if ($(".N-main_wrap_box").is(':animated')) {
            return;
        }
        index++;
        if(index>4){
            index=4;
        }
        for (var j = 0; j < aUlLI.length-1; j++) {
            aUlLI[j].classList.remove('now');
        }
        aUlLI[index-1].classList.add('now');
        var H = aUlCont[0].offsetHeight;
        $(".N-main_wrap_box").animate({"top":-H*index+"px"},500);
    }
    function xiagun(){
        if ($(".N-main_wrap_box").is(':animated')) {
            return;
        }
        index--;
        if(index<0){
            index=0;
        }
        for (var j = 0; j < aUlLI.length-2; j++) {
            aUlLI[j].classList.remove('now');
        }
        if(index == 0){
            aUlLI[index].classList.add('now');
            $(".N-main_wrap_box").animate({"top":0+"px"},500);
        }
        aUlLI[index-1].classList.add('now');
        var H = aUlCont[0].offsetHeight;
        $(".N-main_wrap_box").animate({"top":-H*index+"px"},500);
    }
    window.onmousewheel = document.onmousewheel = scrollFunc;
},5000);





/*-----------------俩个点点----------------*/
var oG_1 = document.getElementById('g-1');
var oG_2 = document.getElementById('g-2');
oG_2.className = oG_1.className;

