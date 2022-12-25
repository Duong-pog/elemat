var countDownDate = new Date("November 7, 2022 00:00:01").getTime();
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = (now - countDownDate)/1000
  document.getElementById("cd-d").innerHTML = Math.min(Math.floor((distance-4188400)/10),124)
  document.getElementById("cd-h").innerHTML = Math.min(Math.floor((distance-4193800)/40),22)
  document.getElementById("cd-m").innerHTML = Math.floor((distance-4159000)/10)
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Đã kết thúc";
  }
}, 1000);