const burger = document.querySelector('.burger');
const burger_activ = document.querySelector('.burger_activ');
const burger_menu = document.querySelector('.burger_menu');

burger.addEventListener('click',function(){
      burger.classList.toggle('burger_activ');
      burger_menu.classList.toggle('burger_menu_activ')
});