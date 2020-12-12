// $('.slider-for').slick({
//     responsive:[
//         {
//             breakpoint: 1024,
//             settings:{
//                 slidesToShow:1,
//             }
//         },
//         {
//             breakpoint: 768,
//             settings:{
//                 slidesToShow:1,
//             }
//         },
//         {
//             breakpoint: 480,
//             settings:{
//                 slidesToShow:1,
//             }
//         },
//     ]
// });
// $('.slider-nav').slick({
//     responsive:[
//         {
//             breakpoint: 1024,
//             settings:{
//                 slidesToShow:1,
//             }
//         },
//         {
//             breakpoint: 768,
//             settings:{
//                 slidesToShow:1,
//             }
//         },
//         {
//             breakpoint: 480,
//             settings:{
//                 slidesToShow:1,
//             }
//         },
//     ]
// });

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  
  
});    