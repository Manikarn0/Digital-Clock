const time= document.getElementById('time');
const date= document.getElementById('date');
setInterval(function(){
    time.innerHTML= new Date().toLocaleTimeString();

},1000)
date.innerHTML= new Date().toLocaleDateString();