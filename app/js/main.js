document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobileMenu');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobileMenu__active');
  });
});
