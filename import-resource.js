const movingDiv = document.getElementById('moving');
setInterval(function(){
  movingDiv.style.left = parseFloat(movingDiv2.style.left) + 5 + 'px';
}, 17);
