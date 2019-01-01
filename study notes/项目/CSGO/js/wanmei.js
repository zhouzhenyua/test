$(function(){
    var csSwiper = new Swiper('.m-csgo .swiper-container',{

    })
    var dotaSwiper = new Swiper('.m-dota .swiper-container',{

    })
    $(".m-csgo .nav li").on("click",function(){
        var $this = $(this), index = $this.index();
        csSwiper.slideTo(index,500,false)
        $this.addClass("on").siblings().removeClass("on");
    })
    $(".m-dota .nav li").on("click",function(){
        var $this = $(this), index = $this.index();
        dotaSwiper.slideTo(index,500,false)
        $this.addClass("on").siblings().removeClass("on");
    });



    var t_csgo2 = $(".m-csgo").offset().top;
    var t_dota = $(".m-dota").offset().top;
    var $movetonav = $(".movetonav a");
    var halfh = document.documentElement.clientHeight/2;
    var arrT = [0,t_csgo2,t_dota];

    $movetonav.on("click",function(){
        var $this = $(this), index = $this.index();

        $("body,html").animate({
            scrollTop:arrT[index]},400,function(){
            $this.addClass("on").siblings().removeClass("on");
        })
    })

    $(".csgobtn").on("click",function(){
        $("body,html").animate({
            scrollTop:t_csgo2},400,function(){
            $movetonav.eq(1).addClass("on").siblings().removeClass("on");
        })
    }).on("mouseover",function(){

        $(".m1 .left").removeClass("show").next().addClass("show")
    }).on("mouseout",function(){
        $(".m1 .left,.m1 .right").removeClass("show")
    })
    $(".dotabtn").on("click",function(){
        $("body,html").animate({
            scrollTop:t_dota},400,function(){
            $movetonav.eq(2).addClass("on").siblings().removeClass("on");
        })
    }).on("mouseover",function(){
        $(".m1 .right").removeClass("show").prev().addClass("show");
    }).on("mouseout",function(){
        $(".m1 .left,.m1 .right").removeClass("show")
    })
    $(".m1 .left").on("click",function(){
        $movetonav.eq(1).click()
    })
    $(".m1 .right").on("click",function(){
        $movetonav.eq(2).click()
    })

    $(window).on("scroll",function(){
        var t = document.body.scrollTop || document.documentElement.scrollTop;
        // if(t >= t_csgo2 - halfh & t < t_dota - halfh){
        // 	$movetonav.eq(1).addClass("on").siblings().removeClass("on");
        // }else if(t >= t_dota - halfh){
        // 	$movetonav.eq(2).addClass("on").siblings().removeClass("on");
        // }else if(t < t_csgo2 - halfh){
        // 	$movetonav.eq(0).addClass("on").siblings().removeClass("on");
        // }
        $.each(arrT,function(i,n){
            if(i == 0){

                if(t < arrT[1] - halfh){
                    $movetonav.eq(i).addClass("on").siblings().removeClass("on");
                }
            }else if(i == arrT.length-1){
                if(t >=arrT[i] - halfh){
                    $movetonav.eq(i).addClass("on").siblings().removeClass("on");
                }
            }else{
                if(t >= n - halfh & t < arrT[i+1] - halfh){
                    $movetonav.eq(i).addClass("on").siblings().removeClass("on");
                }
            }
        })
    })


    $(".m1nav .link a").on("click",function(){
        var $this = $(this),index = Number($this.attr("data-target"));
        if($this.hasClass("cs")){
            $(".csgobtn").click();
            csSwiper.slideTo(index,500,function(){

            })
            $(".m-csgo .nav li").eq(index).addClass("on").siblings().removeClass("on");

        }else{
            $(".dotabtn").click();
            dotaSwiper.slideTo(index,500,function(){

            })
            $(".m-dota .nav li").eq(index).addClass("on").siblings().removeClass("on");
        }

    })


})