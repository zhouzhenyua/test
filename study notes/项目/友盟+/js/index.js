
    $(function(){
        $("#headerBox").load("header.html");
        $("#footerBox").load("footer.html");
        $("#goTop").load("goTop.html");


        var oBox = document.getElementById("box");
        var oList = document.getElementById("list");
        var aLi = oList.getElementsByTagName("li");
        var oImg = oList .getElementsByTagName('a');

        var oBtnBox = document.getElementById("btnBox");
        var aSpan = oBtnBox.getElementsByTagName("span");
        var number = 0;
        aSpan[0].style.background = "#fff"   ;


        for(var i=0;i<aSpan.length;i++){    //仅仅只是给span添加事件的
            aSpan[i].index = i;   //给span标签添加一个属性等i
            aSpan[i].onclick = function(){
                number = this.index;     //把number和this.index连续起来
                aaa();
            }
        }

        function aaa(){
            //让所有的消失
            for(var j=0;j<aSpan.length;j++){
                aLi[j].style.display = "none";
                oImg[j].style.opacity = '0';
                aSpan[j].style.opacity ='0.4';
            }
            //让我要的那个 显示出来
            aLi[number].style.display = "block";
            aSpan[number].style.opacity ='1';
            oImg[number].style.opacity ='1';

        }

        var oBtnL = document.getElementById("btnL");
        var oBtnR = document.getElementById("btnR");

        $(oBtnR).click(function right(){
            //length   7
            if(number<aLi.length-1){
                number++;
            }else{
                number=0
            }
            aaa();
        });

        $(oBtnL).click(function left(){
            //length   7
            if(number<=0){
                number=aLi.length-1
            }else{
                number--;
            }
            aaa();
        });

        timer();
        var ding;
        function timer(){
            ding = setInterval(function(){
                //length   7
                if(number<aLi.length-1){
                    number++;
                }else{
                    number=0
                }
                aaa();
            },3000)
        }

        oBox.onmouseover = function(){
            clearInterval(ding)
        };

        oBox.onmouseout = function(){
            timer();
        };







        var oSolutions = document.getElementById('solutions'),
            oJ1 = document.getElementsByClassName('J_solutionItem'),
            oMask = oSolutions.getElementsByClassName('mask'),
            oContent = oSolutions.getElementsByClassName('content'),
            oSpan = oSolutions.getElementsByClassName('icon-icon-up-copy');

            for (let i = 0; i < oJ1.length; i++) {
                oJ1[i].onmouseover = function () {
                    for (var j = 0; j < oMask.length; j++) {
                        oMask[j].classList.remove('on');
                        oContent[i].classList.remove('off');
                    }
                    oMask[i].classList.add('on');
                    index = i;
                };
                oContent[i].classList.add('off');
                oJ1[i].onmouseout = function () {
                    for (var j = 0; j < oMask.length; j++) {
                        oMask[j].classList.remove('on');
                    }
                    oContent[i].classList.add('off');
                };
                oContent[i].classList.add('off');
            }


        var aItem = document.querySelectorAll('.list-wrap .J-imgs-list .item-bg'),
            aBnner = document.querySelectorAll('.custom-banner .J-item');

        var oWrapper = document.querySelectorAll('.khhb .partner .tag-wrapper'),
            sSpan = document.querySelectorAll('.khhb .partner .tag-wrapper span');


        index =0;
        function teb(tit,cont,ev){
            for (let i = 0; i < tit.length; i++) {
                tit[i][ev]=function(){
                    for (var j = 0; j < cont.length; j++) {
                        cont[j].classList.remove('active');
                        tit[j].classList.remove('active')
                    }
                    cont[i].classList.add('active');
                    this.classList.add('active');
                    index = i;
                }
            }
        }
        teb(aItem,aBnner,'onclick');



        var oItem = document.querySelectorAll('.p-main .tag-item');
        var oTitle = document.querySelectorAll('.partner .tag-wrapper span')[0];




        var oCustoms = document.getElementById('customs');
        //var oPartners = document.getElementById('partners');
        var ozBtn = oCustoms.getElementsByTagName('div')[1];
        var oyBtn = oCustoms.getElementsByTagName('div')[0];

        var oIcon = oCustoms.getElementsByClassName('list');
        var oDot = oCustoms.getElementsByClassName('dot');




        var jsshu = 0;

        for (var i = 0; i < oDot.length; i++) {
            oDot[i].index =i;
            oDot[i].onclick = function(){
                jsshu = this.index;
                bbb()
            }
        }
        function bbb(){
            for (var j = 0; j < oDot.length; j++) {
                oIcon[j].style.display ='none';
                oDot[j].classList.remove('on3');
            }
            oIcon[jsshu].style.display ='block';
            oDot[jsshu].classList.add('on3')
        }

        ozBtn.onclick = function(){
            if(jsshu <oIcon.length-1){
                jsshu++;
            }else {
                jsshu = 0;
            }
            bbb() ;
        };
        oyBtn.onclick = function(){
            if(jsshu <=0){
                jsshu = oIcon.length-1;
            }else {
                jsshu--;
            }
            bbb();
        };

        var oPartner =document.getElementById('partner');
        var oPartners =document.getElementById('partners');
        var oSpan1 = oPartner.getElementsByTagName('span')[0];
        var oSpan2 = oPartner.getElementsByTagName('span')[1];

        oSpan1.onclick = function(){
            oCustoms.style.display = 'block';
            oPartners.style.display = 'none';
            oSpan1.className = 'zuo on0';
            oSpan2.className = 'you'

        };
        oSpan2.onclick = function(){
            oPartners.style.display = 'block';
            oCustoms.style.display = 'none';
            oSpan2.className = 'you on0';
            oSpan1.className = 'zuo'
        }


    });


