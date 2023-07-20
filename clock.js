const clock = setInterval(function(){
  const time = new Date();
  if(time){
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
  }
},1000);