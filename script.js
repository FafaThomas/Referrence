const hamburgerMenu = document.getElementById('hamburgerMenu');
const menu = document.getElementById('menu');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  menu.classList.toggle('show-menu');
});
