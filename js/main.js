/****** gnb sub menu slide ******/
$('.btnSub').click(function(){
  $('#gnb').removeClass('hide');
  $('#gnb').animate({right:0,left:0},300,'swing'); // swing 속도감이 높아짐 
});

$('.close').click(function(){
  $('#gnb').animate({right:-700,left:700},300,'swing',
  function(){
    $(this).addClass('hide');
  });
});

/****** banner slide ******/
let bannerSlide = {
  slidesPerView : 'auto',
  spaceBetween : 0,
  loop : true,
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
}
const bSlide = new Swiper('#bannerSlide', bannerSlide)


/****** main tkt slide ******/
let tktSlide = {
  slidesPerView : 1.3,
  spaceBetween : 0,
  loop : true,
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 3000, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
}
const tSlide = new Swiper('#tktSlide', tktSlide)


/****** show slide ******/
let showSlide = {
  slidesPerView : 2.5,
  spaceBetween : 10,
  loop : true,
}
const sSlide = new Swiper('#showSlide', showSlide)




const $btn = $('.tktMenu li a');  //버튼역할하는 nav a를 변수로

$btn.click(function(){
  $btn.removeClass('tktActive');
  $(this).addClass('tktActive');
});



// $('.tktWrap').isotope({
//   // options
//   itemSelector: '.all',
//   stagger:100,
//   transitionDuration: '0.2s',
//   hiddenStyle: {
//     opacity: 0
//   },
//   visibleStyle: {
//     opacity: 1
//   }
// });

// $('.btnAll').click(function(){
//   $('.tktWrap').isotope({ filter: '*' });
// })
// $('.btnPlay').click(function(){
//   $('.tktWrap').isotope({ filter: '.play' });
// })
// $('.btnMusical').click(function(){
//   $('.tktWrap').isotope({ filter: '.musical' });
// })
// $('.btnConcert').click(function(){
//   $('.tktWrap').isotope({ filter: '.concert' });
// })
// $('.btnExhibit').click(function(){
//   $('.tktWrap').isotope({ filter: '.exhibit' });
// })

