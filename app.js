
var headerimg = document.querySelector('.header__loop-img');
var headerInput = document.querySelector('.header__search-input');
var headerBurger = document.querySelector('.header__burger');
var headerMenu = document.querySelector('.menu');


headerimg.addEventListener('click', ()=> {
    headerInput.classList.toggle('active')
})


headerBurger.addEventListener('click', ()=> {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
})

