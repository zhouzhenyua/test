/**
 * Created by 雨 on 2018/11/3.
 */
$(function(){


    //加载头部和底部
    $('#navBox').load('header.html');
    $('#footerBox').load('footer.html');

//右边活动盒子
    $('.lnk-close').click(function(){
        $('#csgo-side-float').animate({'right':"-158px",'display':"none"})
    });

    $(document).scroll(function(){
        //alert(1)

        $('.section1').css({'margin-top':"116px"})

    });

// banner
    $('.box_skitter_large').skitter({
        //auto_play: true,
        //interval: 3000,
        //hide_tools:true,
        //navigation: false,
        //dots: false,
        //numbers: true,
        imageSwitched:function(index){
            $('.box-nav').children().eq(index).addClass('active').siblings().removeClass('active')
        }
    });

// 新闻活动
    $('.section2 .col-tabs li').click(function(){
        $('.section2 .col-tabs li').attr('class','');
        $(this).attr('class','active');

        $('.section2 .m-list-items').attr('class','m-list-items');
        $('.section2 .m-list-items').eq($(this).index()).attr('class','m-list-items now');
    });
// 电竞中心




// 攻略中心
    $('.section5 .col-left .col-tabs li').click(function(){
        $('.section5 .col-left .col-tabs li').attr('class','');
        $(this).attr('class','active');

        $('.section5 .col-left .m-list-items').attr('class','m-list-items');
        $('.section5 .col-left .m-list-items').eq($(this).index()).attr('class','m-list-items now');
    });

    $('.section5 .col-right .col-tabs li').click(function(){
        $('.section5 .col-right .col-tabs li').attr('class','');
        $(this).attr('class','active');

        $('.section5 .col-right .m-list-items').attr('class','m-list-items');
        $('.section5 .col-right .m-list-items').eq($(this).index()).attr('class','m-list-items now');
    });
    $('.col-right .m-list-imgtxt li').hover(function(){
        $(this).find('.pic-size').show();
    },function(){
        $(this).find('.pic-size').hide();
    });









});
