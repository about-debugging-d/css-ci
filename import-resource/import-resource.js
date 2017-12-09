const movingDiv = document.getElementById('moving');
movingDiv.style.left = 0;
var deviceWidth = document.body.clientWidth || document.documentElement.clientWidth;
// var maxLeft = deviceWidth - movingDiv.offsetWidth;
setInterval(function(){
  movingDiv.style.left = parseFloat(movingDiv.style.left) + 1 + 'px';
  console.log(movingDiv.style.left);
  if(parseFloat(movingDiv.style.left) + 5 >= deviceWidth) {
    movingDiv.style.left = -movingDiv.offsetWidth;
  }
}, 17);
