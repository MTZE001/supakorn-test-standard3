
const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-inner');
if(btn&&nav){btn.addEventListener('click',()=>nav.classList.toggle('open'));}
