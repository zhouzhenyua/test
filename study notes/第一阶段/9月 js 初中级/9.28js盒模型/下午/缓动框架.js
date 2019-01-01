/**
 * Created by 雨 on 2018/9/28.
 */
function animate(obj,terget){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var leader = obj.offsetLeft;
        var step = (target - leader)/10;
        step = step>0? Math.ceil(step):Math.floor(step);
        leader = leader+step;
        obj.style.left = leader + 'px';
        if(leader === target){
            clearInterval(obj.timer);
        }
    },15);
}