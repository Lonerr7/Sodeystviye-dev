document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobilemenu');
  const body = document.body;

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    body.classList.toggle('lock');
  });

  //* Slider

  $('.forums__slider').slick({
    // arrows: true,
    slidesToShow: 3,
    prevArrow: $('.forums__button--left'),
    nextArrow: $('.forums__button--right'),
  });

  $('.competitions__slider').slick({
    slidesToShow: 3,
    prevArrow: $('.competitions__button--left'),
    nextArrow: $('.competitions__button--right'),
  });

  $('.news__slider').slick({
    slidesToShow: 3,
    prevArrow: $('.news__button--left'),
    nextArrow: $('.news__button--right'),
  });

  //* Popup
  $('.policy__popuplink').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });
});
