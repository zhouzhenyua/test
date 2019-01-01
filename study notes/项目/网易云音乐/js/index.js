window.onload =function(){
    var oDl = document.getElementById('dl');
    var oDBox = document.getElementById('dlbox');

    oDl.onmouseover =function(){
        oDBox.style.display = 'block'
    };
    oDl.onmouseout =function(){
        oDBox.style.display = 'none'
    };


    var oDot = document.getElementById('dot');
    var oBanner = document.getElementById('banner');
    var adot = oDot.querySelectorAll('li');
    var oImg = document.querySelectorAll('.Lbox .imgs imgs');
    var zBtn = document.querySelector('.Lbox .zbtn');
    var yBtn = document.querySelector('.Lbox .ybtn');
    console.log(oBanner);
    var num = 0;
    for (let i = 0; i < adot.length; i++) {
        adot[i].index = i;
         adot[i].onclick = function(){
             num = this.index;
             aa();
         };
    }
    function aa(){
        for (var j = 0; j < oImg.length; j++) {
            oImg[j].classList.remove('avtive');
            adot[j].classList.remove('now');
        }
        oImg[num].classList.add('avtive');
        adot[num].classList.add('now');
    }

    yBtn.onclick = function(){
        if(num < oImg.length-1){
            num++;
        }else{
            num = 0;
        }
        aa()
    };
    zBtn.onclick = function(){
        if(num <=0){
            num=oImg.length-1;
        }else{
            num --;
        }
        aa();
    };
    time();
    var ds;
    function time(){
         ds = setInterval(function(){
            if(num < oImg.length-1){
                num++;
            }else{
                num = 0;
            }
            aa()
        },3000)
    }
    oBanner.onmouseover =function(){
        clearInterval(ds)
    };
    oBanner.onmouseout =function(){
        time();
    };

};
