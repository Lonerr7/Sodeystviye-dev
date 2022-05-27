document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');

  //* Slider

  $('.forums__slider').slick({
    // arrows: true,
    slidesToShow: 3,
    prevArrow: $('.forums__button--left'),
    nextArrow: $('.forums__button--right'),
  })
});
