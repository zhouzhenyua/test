

    /*
    * getCss 由于我们通过style.xx 只能操作行内样式，
    * 所以要封装getCss方法
    * 特点：可以获取行内/内嵌/外部样式
    *
    * ele :元素
    *
    * attr : 属性
    *
    * get computed Style 获取计算之后的样式 兼容性
    * */


    function getCss(ele,attr){
          if(ele.currentStyle){
              return ele.currentStyle[attr]
          }else {
              return getComputedStyle(ele)[attr]
          }
    }

    /*
    * setCss 设置样式
    * ele 元素
    *
    * attr 属性
    *
    * val 属性对应的值
    * */

    function setCss(ele,attr,val){
          ele['style'][attr] = val;
    }

    function getStyle(ele,attr,val){
        var sum = arguments;
        if(sum.length == 2){
           return getCss(ele,attr)
        }else if(sum.length == 3){
            setCss(ele,attr,val)
        }
    }



    function setGroupCss(ele,obj){
        for (var k in obj){
            ele['style'][k] = obj[k];
        }
    }

    function getcss(ele,attr){
       //return ele.currentStyle[attr]? getComputedStyle(ele)[attr]

    }


    function css(){
        var arg = [].slice.call(arguments);
        if(arg.length == 3){
            setCss(arg[0],arg[1],arg[2])
        }else if(arg.length == 2 ){
            if(typeof arg[1]=='object'){
                setGroupCss(arg[0],arg[1])
            }else {
                return getCss(arg[0],arg[1])
            }
        }
    }