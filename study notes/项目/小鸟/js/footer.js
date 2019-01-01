
var oMusicBtn = document.getElementById('musicBtn');
var aMusic = oMusicBtn.getElementsByTagName('span');
var aMusicBox = document.getElementsByTagName('audio');
for (var i = 0; i < aMusic.length; i++) {
    aMusic[i].index = i;
    aMusic[i].onclick = function(){
        if(aMusicBox[this.index].ended !==true){
            aMusicBox[this.index].load();
            aMusicBox[this.index].play();
        }
    }
}


/*--------------------返回顶部----------------*/
var oScrollTopWrap = document.getElementById('scrollTop_wrap');
var oScrollTop = document.getElementById('scrollTop');
var Ch = document.documentElement.clientHeight || document.body.clientHeight;
window.onscroll=function(){
    var scrollTop= document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop>Ch){
        oScrollTopWrap.style.display = "block";
    }else{
        oScrollTopWrap.style.display = "none"
    }
};
oScrollTop.onclick = function(){
    (function smoothscroll(){
        var currentScroll = document.documentElement.scrollTop||document.body.scrollTop;
        if(currentScroll>0){
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0,currentScroll-(currentScroll/5))
        }
    })();
};


