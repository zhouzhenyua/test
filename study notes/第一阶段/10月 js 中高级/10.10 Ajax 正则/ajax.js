/**
 * Created by 雨 on 2018/10/10.
 */
function ajax(url,fnSucc,fnFaild){
    //1、创建Ajax 对象
    try{
        var xml = new XMLHttpRequest();
    }catch (err){
        xml = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //2、连接服务器（打开和服务器的连接）
    xml.open('GET',url,true);

    //3、发送
    xml.send();

    //4、接收返回
    xml.onreadystatechange = function(){
        if(xml.readyState == 4){
            if(xml.status == 200){
                //alert('成功');
                fnSucc(xml.responseText);
            }else{
                //alert('失败');
                if(fnFaild){
                    fnFaild();
                }
            }
        }
    }
}