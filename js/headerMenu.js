const openMenuButton = document.querySelector('.header_menu_button');
const menuItself = document.querySelector('.header_menu_inner');
const closeMenuButton = document.querySelector('.header_menu_inner_button_close');
console.log(closeMenuButton)

openMenuButton.addEventListener('click', () => {
    menuItself.classList.add('open');
    openMenuButton.classList.add('click_open');
    closeMenuButton.classList.add('click_open');

    document.body.style.overflow = 'hidden';
});
closeMenuButton.addEventListener('click', () => {
    menuItself.classList.remove("open");
    openMenuButton.classList.remove('click_open');
    closeMenuButton.classList.remove('click_open')

    document.body.style.overflow = 'visible';
});