$(document).ready(function(){
    $('.slider-for').slick({
      asNavFor: '.slider-nav',
      arrows: false
    });
    $('.slider-nav').slick({
      asNavFor: '.slider-for',
      slide: 'li'
    });
  });
