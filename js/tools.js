
      // 执行动画的函数
      // var timer;
      function move(obj,attr, target, speed, callback){
        clearInterval(obj.timer);

        var current = parseInt(getStyle(obj,attr))
        if(current > target){
          speed = -speed;
        }
        obj.timer =  setInterval(function(){  
          var oldvalue = parseInt(getStyle(obj,attr))
          var newvalue = oldvalue + speed;
          if((newvalue < target && speed < 0) || (speed > 0 && newvalue > target)){
           newvalue = target
         }
          obj.style[attr] = newvalue + "px"
          
        if (newvalue === target){
          clearInterval(obj.timer)
          callback && callback()
        }
          // console.log(oldvalue)
        },30)
      }

      // get style
      function getStyle(obj, name) {
          if (getComputedStyle) {
            return getComputedStyle(obj, null)[name];
          } else {
            return obj.currentStyle[name];
          }
        }