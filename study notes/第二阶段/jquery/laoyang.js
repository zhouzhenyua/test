/**
 * Created by 雨 on 2018/11/21.
 */









//obj 元素    events事件    fn回调函数
function bindEvent(obj,events,fn){

    if(obj.addEventListener){
        //谷歌
        obj.addEventListener(events,function(ev){
            // fn =false   fn=undefined
            if(fn==false){
                ev.preventDefault();
                ev.cancelBubble=true;
            }
        },false)
    }else {
        //ie
        obj.attachEvent("on"+events,function(){
            if(fn==false){
                window.event.cancelBubble =true;
                return false
            }
        })
    }
}




// 封装class 获取

function getByClass(oParents,aClass){
    var arr =[];
    var ele = oParents.getElementsByTagName('*');
    for (var i = 0; i < ele.length; i++) {
        if(ele[i].className==aClass){
            arr.push(ele[i])
        }
    }
    return arr
}



// 封装 style

function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr]
    }else {
        // false
        // 兼容火狐低版本
        // true
        //getComputedStyle 兼容谷歌
        return getComputedStyle(obj,false)[attr]
    }
}



//封装转数组
function toArray(elems){
    var arr=[];
    for (var i = 0; i < elems.length; i++) {
        arr.push(elems[i])
    }
    return arr;
}

function Squery(sArg){
  //  arguments

    this.elements=[];//push
    switch (typeof sArg){
        // function =>window
            case "funtion":
            bindEvent(window,"load",sArg);
            break;
        case "string":
            switch (sArg.charAt(0)){
                case "#":
                    this.elements.push(document.getElementById(sArg.substring(1)));
                    break;
                case ".":
                    this.elements=getByClass(document,sArg.substring(1));
                    break;
                //case ""
            }
    }

}
function $(sArg){
    return new Squery(sArg)
}

//Squery.prototype.html=function(){
//
//};

$(function(){
    alert(1)
})
