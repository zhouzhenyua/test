/**
 * Created by 雨 on 2018/10/9.
 */
//事件监听 兼容写法
function addEvent(ele,e,fn){ //添加
    if(ele.addEventListener){
        ele.addEventListener(e,fn);
    }else if(ele.attachEvent){
        ele.attachEvent('on' + e,fn);
    }else{
        ele['on' + e] = fn;
    }
}
function removeEvent(ele,e,fn){ //移除
    if(ele.removeEventListener){
        ele.addEventListener(e,fn);
    }else if(ele.detachEvent){
        ele.detachEvent('on' + e,fn);
    }else{
        ele['on' + e] = null;
    }
}