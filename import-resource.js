const p2 = document.getElementsByTagName('p')[1];
setInterval(function(){
  p2.style.left = parseFloat(p2.style.left) + 5 + 'px';
}, 17);
