let tit = document.getElementsByTagName('a');
let cont = document.getElementsByTagName('li');


    let xhr = new XMLHttpRequest;
    let prDate = null;

    xhr.open('GET','json/a.json',false);

    xhr.onreadystatechange =function(){
        if( xhr.readyState ==4 && xhr.status ==200){
            prDate = JSON.parse(xhr.responseText);
        }
    };
    xhr.send(null);


console.log(prDate);

//绑定数据
(function(){
    let str =``; //创建空的模板字符串
    for (var i = 0; i < prDate.length; i++) {
        var {hot,img,price,time,title} = prDate[i];
        str +=` <li data-time ="${time}" data-price ="${price}" data-hot ="${hot}"  ><a href="javascript:;">
            <img src="${img}" alt="">
            <p>+${title}</p>
            <span>￥${price}</span>
            <span>${time}</span>
            <span>${hot}</span>
        </a></li>`
    }
    list.innerHTML = str;
})();

(function(){
    let sortList = function(){
        let{index:index1,flag:flag1} = this;
        let arrCont = Array.from(cont);
        arrCont.sort(function(a,b){
            let arr =['data-time','data-price','data-hot'];
            let prev =a.getAttribute(arr[index1]),
                next =b.getAttribute(arr[index1]);
            if(index1 === 0){
                prev = prev.replace(/-/g,'');
                next = next.replace(/-/g,'');
            }
            return(prev -next)*flag1;
        });
        let fg = document.createDocumentFragment();
        for (let i = 0; i < arrCont.length; i++) {
            list.appendChild(arrCont[i])
        }
        list.appendChild(fg);
        fg = null;
    };
    for (let i = 0; i < tit.length; i++) {
        tit[i].index =i;
        tit[i].flag = -1;
        tit[i].onclick = function(){
            for (let j = 0; j < tit.length; j++) {
                if(tit[j] !== this){
                    tit[j].flag = -1;
                }
            }
            this.flag = -1;
            sortList.call(this);
        }
    }
})();

let productRender = (function(){
    let tit = document.getElementsByTagName('a');
    let cont = document.getElementsByTagName('li');
    prDate = null;

    let getData = function(){
        let xhr = new XMLHttpRequest;
        let prDate = null;
        xhr.open('GET','json/a.json',false);
        xhr.onreadystatechange =function(){
            if( xhr.readyState ==4 && xhr.status ==200){
                prDate = JSON.parse(xhr.responseText)
            }
        };
        xhr.send(null);
       return prDate;
    };
    let bindHtml = function(){
        let str =``; //创建空的模板字符串
        for (var i = 0; i < prDate.length; i++) {
            var {hot,img,price,time,title} = prDate[i];
            str +=` <li data-time ="${time}" data-price ="${price}" data-hot ="${hot}"  ><a href="javascript:;">
            <img src="${img}" alt="">
            <p>+${title}</p>
            <span>￥${price}</span>
            <span>${time}</span>
            <span>${hot}</span>
        </a></li>`
        }
        list.innerHTML = str;
    };
    let sortList = function(){
        let sortList = function(){
            let{index:index1,flag:flag1} = this;
            let arrCont = Array.from(cont);
            arrCont.sort(function(a,b){
                let arr =['data-time','data-price','data-hot'];
                let prev =a.getAttribute(arr[index1]),
                    next =b.getAttribute(arr[index1]);
                if(index1 === 0){
                    prev = prev.replace(/-/g,'');
                    next = next.replace(/-/g,'');
                }
                return(prev -next)*flag1;
            });
            let fg = document.createDocumentFragment();
            for (let i = 0; i < arrCont.length; i++) {
                list.appendChild(arrCont[i])
            }
            list.appendChild(fg);
            fg = null;
        };
        for (let i = 0; i < tit.length; i++) {
            tit[i].index =i;
            tit[i].flag = -1;
            tit[i].onclick = function(){
                for (let j = 0; j < tit.length; j++) {
                    if(tit[j] !== this){
                        tit[j].flag = -1;
                    }
                }
                this.flag = -1;
                sortList.call(this);
            }
        }
    };
    return {
        init:function(){
            getData();
            bindHtml();
            sortList();
        }
    }
})();
productRender.init();