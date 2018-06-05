var info = document.querySelectorAll('.info');
var tab = document.querySelectorAll('.tab');
var navList = document.querySelector('.nav-list');
var pageName = document.querySelector('.page-name');

for (let i=0; i<tab.length; i++) {
  tab[i].addEventListener ( 'click', ()=> {
    info[i].classList.toggle("showInfo");
    console.log('ok');
  });
}

function navIcon(x) {
    x.classList.toggle("change");
    navList.classList.toggle("show-nav");
    pageName.classList.toggle("hide-name");
}
