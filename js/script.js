$(function(){
    'use strict'


// slick slider(banner) start

    
$('.bnnr_picup').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
});





// venubox start

$('.venobox').venobox(); 






// testimonial slider

$('.test_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});





// counter part start

$('.counting').counterUp();






// slider logo start

$('.logo_col').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: true,
  centerMode: true,
  centerPadding: 0,
  nextArrow:'<i class="fas fa-chevron-right nxxt_arr"></i>',
  prevArrow:'<i class="fas fa-chevron-left prrv_arr"></i>',
});








});