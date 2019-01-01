window.onload = function (){
    var oTime = document.getElementsByClassName('timer-count');

    function checkTime(i){
        if (i<10){
            i="0" + i;
        }
        return i;
    }

    var mDate = new Date(2018,10,16);
    var gg1 =mDate.getTime();
    function clock(){
        var oDate =new Date();
        var gg2 = oDate.getTime();
        var total = parseInt((gg1-gg2)/1000);
        var day = parseInt(total/86400);
        //total=total%86400;
        //var h =parseInt(total/3600);
        //total = total%3600;
        //var m =parseInt(total/60);
        //var s = total%60;
        oTime.innerHTML= checkTime(day)+'天';
    }
    setInterval(clock);
    checkTime();

    //😂第一页
    var imga = document.querySelectorAll('.center-imgs-list imgs');
    var imgb = document.querySelectorAll('.index-icon-list imgs');

    for (let i = 0; i < imga.length; i++) {
        imga[i].index = i;
        num = this.index;
        for (var j = 0; j < imgb.length; j++) {
            imga[j].classList.remove('show');
            //imga[j].classList.add('hide');
            imgb[j].classList.add('hide');
            imgb[j].classList.remove('show')
        }
        imga[i].classList.remove('hide');
        //imga[i].classList.add('show');
        //imgb[i].classList.remove('hide');
        //imgb[i].classList.add('show');
    }
    time();
    var sj = 0;

    function time(){
        var num = 0;
        sj = setInterval(function(){

            if(num<imgb.length-1){
                num++;
            }else {
                num = 0
            }
            for (var j = 0; j < imgb.length; j++) {
                imga[j].classList.remove('show');
                //imga[j].classList.add('hide');
                imgb[j].classList.add('hide');
                imgb[j].classList.remove('show')
            }
            imga[num].classList.remove('hide');
            //imga[i].classList.add('show');
            //imgb[i].classList.remove('hide');
            //imgb[i].classList.add('show');
        },1000);

    }

    // 第二页
    var oDot = document.querySelectorAll('.dots span');
    var zBtn = document.querySelector('.pre-page');
    var yBtn = document.querySelector('.next-page');
    var oUl = document.querySelectorAll('.list-wrap .list');

    var index = 0;
    function bb(){
        for (var j = 0; j < oUl.length; j++) {
            oDot[j].classList.remove('on');
            oUl[j].classList.remove('on');
        }
        oDot[index].classList.add('on');
        oUl[index].classList.add('on');
    }
    for (var i = 0; i < oDot.length; i++) {
        oDot[i].index = i;
        oDot[i].onclick = function () {
            index = this.index;
            bb()
        };
        zBtn.onclick = function () {
            if (index < oUl.length - 1) {
                index++;
            } else {
                index = 0;
            }
            bb()
        };

        yBtn.onclick = function () {
            if (index <= 0) {
                index = oUl.length - 1;
            } else {
                index--;
            }
            bb()
        };


        //第三页
        var oTabCon = document.getElementById('tabCon');
        var oTabMenu = document.getElementById('tabMenu');
        var oLi = oTabMenu.getElementsByTagName('li');
        var oDiv = oTabCon.children;
        for (let i = 0; i < oLi.length; i++) {
            oLi[i].onclick = function () {
                for (var j = 0; j < oDiv.length; j++) {
                    oDiv[j].style.display = 'none';
                    oLi[j].className = '';
                }
                oDiv[i].style.display = 'block';
                oLi[i].className = 'active'
            };

        }
    }
};
