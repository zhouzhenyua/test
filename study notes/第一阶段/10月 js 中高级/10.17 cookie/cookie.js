/**
 * Created by 雨 on 2018/10/17.
 */


//存
function setCookie(name,value,iDay){ //iDay时间
    var oDate =new Date();
    oDate.setDate(oDate.getDate()+iDay);
    document.cookie = name +"=" +value +";expires="+oDate
}


//取

function getCookie(name){
    var arr = document.cookie.split('; ');
    for (var i = 0; i < arr.length; i++) {
        var newArr = arr[i].split('=');
        if(newArr[0]==name){
            return newArr[1]
        }
    }
}


//删除
function removeCookie(name){
    setCookie(name,'',-1)
}