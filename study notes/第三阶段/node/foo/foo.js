
// exports 暴露 抛出

exports.a=1;
exports.show=function(){
    console.log(1);
} ;
//function show1(){
//    console.log(2);
//}

//exports.get=show1();
//module.exports={
//    show1:show1()
//};

//module.exports={
//  a:1,
//  b:2
//};

/*
* module.exports和exports的区别？（node面试必问 ）
*
* 1、module.exports是exports的引用
* 2、module.exports和exports的初始值为空
* 3、module.exports和exports被 require返回时，
* 返回的值是module.exports的值 。
*
*
* exports和module.exports 各司其职 互不干扰
*
* export (veu)
*
*
*
* */