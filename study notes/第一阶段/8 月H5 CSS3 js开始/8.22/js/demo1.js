window.onload =function(){

    var oBox1=document.getElementById('box1');
    var oBox2=document.getElementById('box2');
    //var oBox=document.getElementById('box');

    //oBox.onmouseover=function(){
    //    oBox1.style.background='#ff0';
    //    oBox2.style.display='block'
    //};
    //
    //oBox.onmouseout=function(){
    //    oBox1.style.background='#00f';
    //    oBox2.style.display='none'
    //}
    //注意： “=” 赋值     “==” 比较

    //js通过style 操纵的是行内样式

    oBox1.onclick=function(){
        oBox1.style.background='#ff0';
        if (oBox2.style.display =='block') {
            oBox2.style.display = 'none';
            //console.log(oBox2);
        }else {
                oBox1.style.background='#00f';
                oBox2.style.display='block';
            console.log(oBox2.getAttribute(''));
        }
    };

};
