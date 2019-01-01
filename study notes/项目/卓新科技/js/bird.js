
var sW=$(window).width();
var sH=$(window).height();
$("article").css({
    "height":sH+"px"
});
$(".content").css({
    "height":sH+"px"
});
$(".content_all").css({
    "height":sH*5+"px"
});
$(".box_a").css({
    "height":sH+"px"
});


$("nav ul li").click(function () {
    $(".d").removeClass("active");
    $(this).find(".d").addClass("active")

});


$(".welcome").slideDown(1000, "linear", function () {
    $(this).find(".cen_img").css({
        "margin-top": "0",
        "transition": "5s"
    });
    $(this).find(".cen_text").slideDown(1000)
}).delay(7000).slideUp(1000);
$("header").hide();
$(".content").hide();
setTimeout(function(){
    $("header").show();
    $(".content").show();
},7000)

var num = 0;
$(".m_t_right").click(function () {
    num++;
    if (num > 2) {
        num = 2;
    }
    $(".m_t_box").css({
        "left": -num * sW
    })
});
$(".m_t_left").click(function () {
    num--;
    if (num < 0) {
        num = 0;
    }
    $(".m_t_box").css({
        "left": -num * sW
    })
});


$(".model_four ul li").click(function () {
        $(".model_four ul li").removeClass("active");
        $(this).addClass("active");
    });
$(".model_four ul li").eq(0).click(function () {
        $(".m_four_move").css({
            "left": 0
        })
    });
$(".model_four ul li").eq(1).click(function () {
        $(".m_four_move").css({
            "left": "-920px"
        })
    });

//全屏滚动
var oScreenBanner=document.getElementsByClassName("content")[0];
var oAllScreen = document.getElementsByClassName("content_all")[0];
var arrScreen = oAllScreen.getElementsByTagName("article");
var screenW=sW,screenH=sH;
var page = 0;
var isRunning = false;


//定义向上滚动的事件函数
function scrollUp() {
    if (!isRunning) {
        isRunning = true;

        setTimeout(function () {
            isRunning = false;
        }, 1000);
        if (page > 0) {

            page--;
            oAllScreen.style.top = -page * screenH + "px";
        }
    }
}

function scrollDown() {
    if (!isRunning) {
        isRunning = true;
        setTimeout(function () {
            isRunning = false;
        }, 1000);
        if (page < arrScreen.length - 1) {

            page++;
            oAllScreen.style.top = -page * screenH + "px";
        }
    }
}

$(".next_i").click(function(){
    page=1;
    $(".content_all").css({
        "top":-page*screenH+"px"

    })
});


addEvent(window, "mousewheel", mouseWheel);

addEvent(window, "DOMMouseScroll", mouseWheel);





function mouseWheel(ev) {
    var oEvent = window.event || ev;
    if (oEvent.detail) {
        if (oEvent.detail > 0) {
            scrollDown()
        } else {
            scrollUp()
        }
    } else if (oEvent.wheelDelta) {
        if (oEvent.wheelDelta > 0) {
            scrollUp()
        } else {
            scrollDown()
        }
    }
}


function addEvent(ele, type, listener) {
    if (ele.addEventListener) {
        ele.addEventListener(type, listener);
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + type, listener);
    } else {
        ele["on" + type] = listener;
    }
}