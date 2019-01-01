
$(function(){
    $(".nav-Top").load("header.html");
    $(".footer-bottom").load("footer.html");
    $("#map").load("map.html");
});
var oImg = document.querySelectorAll('.banner_pc');
var oSpan = document.querySelectorAll('.banner .banner_change>span');
var oSFours = document.querySelectorAll('.banner .middle>span');
var oBannerTit = document.querySelectorAll('.banner_img');
var onNum =0;
oSpan[0].onclick = function(){
    onNum--;
    if(onNum<0){
        onNum = oSFours.length-1;
    }
    for (var i = 0; i < oSFours.length; i++) {
        oSFours[i].classList.remove('now');
        oImg[i].classList.remove('now');
    }
    oSFours[onNum].classList.add('now');
    oImg[onNum].classList.add('now');
};
oSpan[1].onclick = function(){
    onNum++;
    if(onNum>2){
        onNum = 0
    }
    for (var i = 0; i < oSFours.length; i++) {
        oSFours[i].classList.remove('now');
        oImg[i].classList.remove('now');
    }
    oSFours[onNum].classList.add('now');
    oImg[onNum].classList.add('now')
};
for (var i = 0; i < oSFours.length; i++) {
    oSFours[i].index = i;
   oSFours[i].onclick =function(){
       onNum = this.index;
       for (var j = 0; j < oImg.length; j++) {
           oImg[j].classList.remove("now");
           oSFours[j].classList.remove("now");
       }
       this.classList.add("now");
       oImg[this.index].classList.add("now");
   }
}

var aIBtn = document.querySelectorAll('.mokuai .now_line .now_linebtn_one');
var aContent = document.querySelectorAll('.mokuai .content_one');
var aAllBtn = document.querySelectorAll('.mokuai .change_line span');
var tentNum = 0;
aAllBtn[0].onclick = function(){
    tentNum--;
    if(tentNum<0){
        tentNum = aIBtn.length-1;
    }
    for (var i = 0; i < aIBtn.length; i++) {
        aIBtn[i].classList.remove('now');
        aContent[i].style.display = 'none';
        aContent[i].classList.remove('box-1');
    }
    aIBtn[tentNum].classList.add('now');
    aContent[tentNum].style.display = 'block';
    aContent[tentNum].classList.add('box-2');
};
aAllBtn[1].onclick = function(){
    tentNum++;
    if(tentNum>aIBtn.length-1){
        tentNum = 0;
    }
    for (var i = 0; i < aIBtn.length; i++) {
        aIBtn[i].classList.remove('now');
        aContent[i].style.display = 'none';
        aContent[i].classList.remove('box-2');
    }
    aIBtn[tentNum].classList.add('now');
    aContent[tentNum].style.display = 'block';
    aContent[tentNum].classList.add('box-1');
};
for (var i = 0; i < aIBtn.length; i++) {
    aIBtn[i].index = i;
    aIBtn[i].onclick = function(){
        tentNum = this.index;
        for (var j = 0; j < aIBtn.length; j++) {
            aIBtn[j].classList.remove('now');
            aContent[j].style.display = 'none';
            aContent[j].classList.remove('box-1');
            aContent[j].classList.remove('box-2');
        }
        aIBtn[tentNum].classList.add('now');
        aContent[this.index].style.display = 'block';
        aContent[tentNum].classList.add('box-2');
    }
}
var titClose = document.querySelectorAll('.yewucontent_simple .shousuo_icon');
var titCont = document.querySelectorAll('.yewucontent_ditail');
var flag = true;
for (var i = 0; i < titClose.length; i++) {
    titClose[i].index = i;
    titClose[i].onclick = function(){
        if(flag){
            this.classList.add('now');
            titCont[this.index].style.display = 'block';
            titCont[this.index].style.opacity = '1';
            flag = false
        }else {
            this.classList.remove('now');
            titCont[this.index].style.display = 'none';
            titCont[this.index].style.opacity = '0';
            flag = true;
        }

    }
}
/*------------------团队介绍---------------------*/
var aImgBox = document.getElementsByClassName("twoteam_wrap");
var aImgBoxBtn = document.getElementById('prev_1');
var aImgBoxBtn1 = document.getElementById('next_1');
var oTeam = document.getElementsByClassName('team_move')[0];
var aListSp = document.querySelectorAll('.team_change .middle>span');
//console.log(aListSp);
var spNum = 0;
aImgBoxBtn1.onclick = function(){
    for (var i = 0; i < aImgBox.length; i++) {
        aImgBox[i].classList.remove('pc_1');
    }
    aImgBox[2].classList.add('pc_D');
$(".team_move").animate({"left":-230+"px"},500);
$(".team_move").animate({"left":0+"px"},500);
    oTeam.insertBefore(aImgBox[2],oTeam.firstChild);
    spNum++;
    if(spNum>=3){
        spNum = 0;
    }
    for (var i = 0; i < aListSp.length; i++) {
        aListSp[i].classList.remove("now");
    }
    aListSp[spNum].classList.add("now");
};

aImgBoxBtn.onclick = function(){
    for (var i = 0; i < aImgBox.length; i++) {
        aImgBox[i].classList.remove('pc_D');
    }
    spNum--;
    if(spNum<0){
        spNum = 2;
    }
    for (var i = 0; i < aListSp.length; i++) {
        aListSp[i].classList.remove("now");
    }
    aListSp[spNum].classList.add("now");
    aImgBox[2].classList.add('pc_1');
    $(".team_move").animate({"left":230+"px"},500);
    $(".team_move").animate({"left":0+"px"},500);
    oTeam.insertBefore(aImgBox[2],oTeam.firstChild);
};
var temp;
temper();
function temper(){
    temp = setInterval(function(){
        aImgBoxBtn1.onclick();
    },4000);
}
/*清除定时器*/
var clearTime = document.getElementsByClassName('teamcontent_wrap')[0];
//console.log(clearTime);
clearTime.onmouseover  =function(){
    clearInterval(temp);
};
clearTime.onmouseout  =function(){
    temper();
};



