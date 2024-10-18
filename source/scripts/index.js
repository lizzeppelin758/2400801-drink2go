/* в этот файл добавляет скрипты*/

/*burger menu*/

const menuButton = document.querySelector('.js-toggle-button');
const menu = document.querySelector('.navigation__menu');

menuButton.addEventListener('click', ()=>{
  menu.classList.toggle('navigation__menu--opened');
  menuButton.classList.toggle('js-toggle-button--close');
});
