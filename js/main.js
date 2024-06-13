// カルーセル
new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 35,
    breakpoints: {
        390: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
      },
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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