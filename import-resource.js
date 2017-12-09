const div2 = document.getElementsByTagName('div')[1];
setInterval(function(){
  div2.style.left = parseFloat(div2.style.left) + 5 + 'px';
}, 17);
