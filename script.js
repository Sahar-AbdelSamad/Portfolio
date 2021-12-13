const menuButton = document.querySelector('.btn-tertiary');
const navigation = document.querySelector('.top-navigation');
const menuItem = document.querySelectorAll('.menu-item');
const mobileMenu = document.querySelectorAll('.nav-ul-mobile');

function openMenu() {
  navigation.classList.toggle('top-navigation');
  menuItem.classList.toggle('menu-item-new');
}

menuItem.forEach((item) => {
  item.addEventListener('click', openMenu);
});
menuButton.addEventListener('click', openMenu);