let headerBox = document.getElementById('header'),
    linkList = document.getElementsByTagName('a'),
    listBox = document.getElementById('list'),
    productList = document.getElementsByTagName('li');

//获取数据
//querry data /bind data


  //ajax
    let productDate = null;
//创建XMLHttpRequest() 实例
    let  xhr =  new XMLHttpRequest;
//打开与服务器的链接
    xhr. open('GET','json/a.json',false);


//等待服务器返回数据
    xhr.onreadystatechange = function(){
        xhr.readyState === 4 && xhr.status === 200?
        productDate = xhr.responseText : null;
        productDate ? productDate = JSON.parse(productDate):null;
        //if(xhr.readyState ==4 && xhr.status == 200){
        //    productDate = JSON.parse(xhr.responseText)
        //}
    };
//向服务器发送数据
    xhr.send(null);
    console.log(productDate);

    //function ajax(url, fnSucc, fnFaild) {
    //    //1.创建Ajax对象
    //    if(window.XMLHttpRequest){
    //        var oAjax=new XMLHttpRequest();
    //    }else{
    //        var oAjax=new ActiveXObject("Microsoft.XMLHTTP");   //ie 6
    //    }
    //
    //    //2.连接服务器（打开和服务器的连接）
    //    oAjax.open('GET', url, true);      //post     true:异步    false：同步
    //
    //    //3.发送
    //    oAjax.send();
    //
    //    //4.接收返回
    //    oAjax.onreadystatechange=function (){
    //        if(oAjax.readyState==4){        //浏览器和服务器，进行到哪一步了？
    //            // 4 代表完成了   但并非成功了
    //            if(oAjax.status==200){
    //
    //                //alert('成功了：'+oAjax.responseText);
    //                fnSucc(oAjax.responseText);
    //            }else{
    //                //alert('失败了');
    //                if(fnFaild){
    //                    fnFaild();
    //                }
    //            }
    //        }
    //    };
    //}
    //ajax("json/a.json",function(date){
    //   alert('成功');
    //    //var _date = eval("("+date+")");
    //},function(){
    //    alert('失败')
    //});
~function(){
    let str=``;
    for (var i = 0; i <productDate.length; i++) {

        let {title,price,time,hot,img}=productDate[i];
        str +=`<li >
        <a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>￥${price}</span><br/>
            <span>时间：${time}</span><br/>
            <span>热度：${hot}</span><br/>
        </a></li>`;

        // console.log(productDate);
    }
    listBox.innerHTML = str;
}();


~function () {
    let sortList = function(){
    let {index:_index, flag:_flag,} = this,
        productAry = [].slice.call(productList);
    productAry.sort((a,b)=>{
        let ary = ['data-time','data-price','data-hot'];
        let aInn = a.getAttribute(ary[_index]),
            bInn = b.getAttribute(ary[_index]);
        if(_index === 0){
            aInn = aInn.replace(/-/g,'');
            bInn = bInn.replace(/-/g,'');
        }
        return (aInn - bInn) *_flag;
    });
    for (let i = 0; i < productAry.length; i++) {
        let curLi = productAry[i];
        listBox.appendChild(curLi);

    }
    };
    for (let i = 0; i < linkList.length; i++) {
        let curLink = linkList[i];
        curLink.index = i;
        curLink.flag = -1;
        curLink.onclick = function(){
//=>当点击当前的A标签，我们需要让其余的A标签的FLAG回归原视值-1，
    //        这样下一次再点击某一个A标签，还是从-1开始乘，变为1，也就是从升序开始
            for (let j = 0; j < linkList.length; j++) {
                let item = linkList[j];
                if (item !== this){
                    item.flag = -1;
                }

            }
            this .flag *=-1;
            sortList.call(this);
        };

    }
}();




