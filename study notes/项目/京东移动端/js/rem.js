
//封装  函数：自执行函数

/*var docEl=document.documentElement;
docEl.style.fontSize = docEl.clientWidth/7.5+'px';

    doc = document   addEventListener()    DOMContentLoaded

window   orientationchange  事件=>屏幕翻转  reload()


meta
事件
    案例
    qq列表
    轮播图

兼容性
移动端库或框架

domcontentloaded
 resize()
 reload()
*/
(function (doc,win){

   var docEl = doc.documentElement;
    //设备重置
    resizeEvt = "orientationchange" in window ? "orientationchange" :'resize';

    relalc = function(){
        //  获取屏幕宽度

        var cletentWith = docEl.clientWidth;

        if(!cletentWith) return;
        docEl.style.fontSize = cletentWith/7.5+'px';
    };

    if(!addEventListener) return;
    win.addEventListener(resizeEvt,relalc,false);
    doc.addEventListener('DOMContentLoaded',relalc,false)

})(document,window);


