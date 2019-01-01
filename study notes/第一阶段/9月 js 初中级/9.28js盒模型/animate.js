    //
    //function animate(obj,speed,target){
    //    clearInterval(obj.timer);
    //    obj.timer = setInterval(function(){
    //        var jl =obj.offsetLeft;
    //        speed =Math.abs(speed);
    //        speed = jl<target ? speed:-speed;
    //        if(Math.abs(target - jl)>Math.abs(speed)){
    //            jl += speed;
    //            obj.style.left = jl + 'px'
    //        }else{
    //            obj.style.left = target+'px';
    //            clearInterval(obj.timer);
    //        }
    //    },15)
    //}

    function animate1(obj, step, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            step = Math.abs(step);
            step = leader < target ? step : -step;
            //Math.abs(target - leader)  当前位置到目标的位置
            if (Math.abs(target - leader) > Math.abs(step)) {
                leader += step;
                obj.style.left = leader + "px";
            } else {
                obj.style.left = target + "px";
                clearInterval(obj.timer);
            }
        }, 15);
    }
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
