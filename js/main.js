$(document).ready(function(){
    $('.slider-for').slick({
      asNavFor: '.slider-nav',
      arrows: false,
      touchMove: true
    });
    $('.slider-nav').slick({
      asNavFor: '.slider-for',
      slide: 'li'
    });
  });
