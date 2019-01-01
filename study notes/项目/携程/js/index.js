window.onload=function(){
  var oLag =document.getElementById('Language'),
      oLbox =document.getElementById('l_box'),
      oTel =document.getElementById('tel'),
      oTbox =document.getElementById('tel_box'),
      aApp =document.getElementById('app'),
      aAppBox =document.getElementById('app_box'),
      aWx =document.getElementById('wx'),
      aWxBox =document.getElementById('wx_box'),

      oDl=document.getElementById('dl'),
      oDlBox=document.getElementById('dl-box')
    oLag.onmouseover=function(){
        oLbox.style.display='block'
    };
    oLag.onmouseout=function(){
        oLbox.style.display='none'
    };
    oTel.onmouseover=function(){
        oTbox.style.display='block'
    };
    oTel.onmouseout=function(){
        oTbox.style.display='none'
    };
    aApp.onmouseover=function(){
        aAppBox.style.display='block'
    };
    aApp.onmouseout=function(){
        aAppBox.style.display='none'
    };
    aWx.onmouseover=function(){
        aWxBox.style.display='block'
    };
    aWx.onmouseout=function(){
        aWxBox.style.display='none'
    };


    var aDl=document.getElementById('dl');
    var oDBox=document.getElementById('dl-box');

    aDl.onmouseover=function(){
        oDBox.style.display='block'
    };
    aDl.onmouseout=function(){
        oDBox.style.display='none'
    };

    var aList =document.getElementById('list');
    var oList = aList.getElementsByClassName('hotels');
    var aBox = aList.getElementsByClassName('hotel_wrap');


    //console.log(oList);
    function c(x,y){
        for (var i = 0; i < x.length; i++) {
            x[i].index = i;
            x[i].onmouseover = function(){
                for (var j = 0; j < y.length; j++) {
                    x[j].classList.remove('now');
                    y[j].style.display = 'none';
                }
                y[this.index].style.display = 'block';
                x[this.index].classList.add('now');
            };
            x[i].onmouseout = function(){
                for (var j = 0; j < y.length; j++) {
                    //x[j].classList.remove('now');
                    //y[j].style.display = 'none';
                }
                y[this.index].style.display = 'none';
                x[this.index].classList.remove('now');
            }
        }
    }
    c(oList,aBox);




    var oSearch = document.getElementById('search');
    var aSbtn = oSearch.getElementsByClassName('search_btn');
    var aDbox = oSearch.getElementsByClassName('dbox');
    var aHover = oSearch.getElementsByClassName('ahover');

    console.log(aSbtn);
    function a(x,y){
    for (var i = 0; i < x.length; i++) {
        x[i].index = i;
        x[i].onclick = function(){
            for (var j = 0; j < y.length; j++) {
                x[j].classList.remove('now');
                x[j].classList.remove('ahover');
                y[j].style.display = 'none';
            }
            y[this.index].style.display = 'block';
            x[this.index].classList.add('now');
            x[this.index].classList.add('ahover');
        }
    }
    }
    a(aSbtn,aDbox);

    var aRou =document.getElementById('tou');
    var oSpan=aRou.getElementsByTagName('span');
    var oDian= aRou.getElementsByTagName('i');
    var oTmh = document.getElementById('tmh');
    var oMod = oTmh.getElementsByClassName('mod-bd');


    var aJwzc = document.getElementById('jwzc');
    var aZuce =document.getElementById('zuce');
    var oSpan1=aZuce.getElementsByTagName('span');
    var oDian1= aZuce.getElementsByTagName('i');
    var oMod1 = aJwzc.getElementsByClassName('mod-bd');


    function b(x,y,z){
    for (var i = 0; i < x.length; i++) {
        x[i].index = i;
        x[i].onclick = function(){
            for (var j = 0; j < y.length; j++) {
                x[j].classList.remove('now');
                y[j].style.display = 'none';
                z[j].style.display = 'none';
            }
            y[this.index].style.display = 'block';
            z[this.index].style.display = 'block';
            x[this.index].classList.add('now');
        }
    }
    }

    b(oSpan,oMod,oDian);
    b(oSpan1,oMod1,oDian1)



};
