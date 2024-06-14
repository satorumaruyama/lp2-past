// カルーセル
// new Swiper('.swiper', {
//     slidesPerView: 'auto',
//     spaceBetween: 35,
//     breakpoints: {
//         390: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 3,
//       },
//     },
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
$('.voice__slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  variableWidth: true,
  responsive: [
    // {
    //   breakpoint: 1500,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     // infinite: true,
    //     dots: true
    //   }
    // },
    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 2
    //   }
    // },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// アコーディオン
$('.faq__answer').hide();
$('.faq__question').on('click', (e) => {
    if($(e.target).hasClass('active')) {
      $(e.target).removeClass('active');
      $(e.target).removeClass('after');
      $(e.target).next().hide();
    } else {
      $(e.target).addClass('active');
      $(e.target).next().show(); 
    }
    console.log("hello")
  });

