$(function(){
    var aNav = document.getElementById('nav');
    var oTbtn = aNav.getElementsByClassName('unav-info-menu');
    var oPoint = aNav.getElementsByClassName('umsitefont');
    var aDbox = aNav.getElementsByClassName('unav-hover-bg');

    function a(x,y,z){
        for (var i = 0; i < x.length; i++) {
            x[i].index = i;
            x[i].onmouseover = function(){
                for (var j = 0; j < y.length; j++) {
                    x[j].classList.remove('now');
                    y[j].style.display = 'none';
                }
                z[this.index].style.display = 'block';
                y[this.index].style.display = 'block';
                x[this.index].classList.add('now');
            };
            x[i].onmouseout = function(){
                y[this.index].style.display = 'none';
                z[this.index].style.display = 'none';
                x[this.index].classList.remove('now');
            }
        }
    }
    a(oTbtn,aDbox,oPoint);
});

