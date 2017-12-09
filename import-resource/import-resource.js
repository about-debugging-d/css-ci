const movingDiv = document.getElementById('moving');
setInterval(function(){
  movingDiv.style.left = parseFloat(movingDiv.style.left) + 5 + 'px';
}, 17);
