const movingDiv = document.getElementById('moving');
movingDiv.style.left = 0;
setInterval(function(){
  movingDiv.style.left = parseFloat(movingDiv.style.left) + 5 + 'px';
  console.log(movingDiv.style.left);
}, 17);
