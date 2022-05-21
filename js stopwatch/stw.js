window.onload = function () {

  var seconds = 00;
  var tenths = 00;
  var sec = document.getElementById("seconds");
  var tens = document.getElementById("tenths");
  var starts = document.getElementById("st");
  var stops = document.getElementById("sp");
  var resets = document.getElementById("rt");
  var interval ;
  
  starts.onclick = function() {
  
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  }

  stops.onclick  = function() {
    clearInterval(interval);
  }

  resets.onclick = function() {
    clearInterval(interval);
    tenths = "00";
    seconds = "00";
    tens.innerHTML = tenths;
    sec.innerHTML = seconds;

  }  

  function startTimer () {
    tenths++;

    if(tenths <= 9) {
      tens.innerHTML = "0" + tenths;

    }else {
        tens.innerHTML = tenths;

    }

    if(tenths > 99) {
        console.log("seconds");
        seconds++;
        sec.innerHTML = "0" + seconds;
        tenths = 0;
        tens.innerHTML = "0" + 0;
    }
    if(seconds > 9) {
      sec.innerHTML = seconds;
      
    }
  }

}