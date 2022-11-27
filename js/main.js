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

/***** post slide *****/
let postSlide = {
  slidesPerView : 2.2,
  spaceBetween : 10,
  loop : true,
}
const pSlide = new Swiper('#postSlide', postSlide)


/****** tkt 클릭시 변동 ******/
const $btn = $('.tktMenu li');  //버튼역할하는 nav a를 변수로

$btn.click(function(){
  $btn.removeClass('tktActive');
  $(this).addClass('tktActive');
// });
// window.addEventListener("load", () => {
//   //Masonry 레이아웃(Isotope 플러그인 이용)
//   const iso = new Isotope("#tktSlide", {
//     // options
//     itemSelector: ".tktWrap li",
//   });

// const tktFilterBtn = document.querySelectorAll(".tktBar>li"); //.btn>li들을 변수에

//   for (let el of tktFilterBtn) {
//     //배열 filterBtn 의 아이템(갯수) 만큼 반복
//     el.addEventListener("click", (e) => {
//       e.preventDefault();

//       //클릭을 할때 각 아이템(버튼)에 반복, on클라스 없애줌
//       for (let el of tktFilterBtn) {
//         el.classList.remove("tktActive");
//       }

//       //클릭한 버튼에 클라스 넣어줌
//       e.currentTarget.classList.add("tktActive");

//       //클릭한 버튼에 있는 a태그 안의 속성 href의 value값을 가져온다
//       const filering = e.currentTarget.querySelector("a").getAttribute("href");

//       iso.arrange({ filter: filering }); //버튼을 누르면 필터링 작동(플러그인)
//     });
//   }

});
  


/******* feed ******/

window.addEventListener("load", () => {
  //Masonry 레이아웃(Isotope 플러그인 이용)
  const iso = new Isotope(".feedList", {
    // options
    itemSelector: "article",
  });

  const filterBtn = document.querySelectorAll(".feedBtn>li"); //.btn>li들을 변수에

  for (let el of filterBtn) {
    //배열 filterBtn 의 아이템(갯수) 만큼 반복
    el.addEventListener("click", (e) => {
      e.preventDefault();

      //클릭을 할때 각 아이템(버튼)에 반복, on클라스 없애줌
      for (let el of filterBtn) {
        el.classList.remove("on");
      }

      //클릭한 버튼에 클라스 넣어줌
      e.currentTarget.classList.add("on");

      //클릭한 버튼에 있는 a태그 안의 속성 href의 value값을 가져온다
      const filering = e.currentTarget.querySelector("a").getAttribute("href");

      iso.arrange({ filter: filering }); //버튼을 누르면 필터링 작동(플러그인)
    });
  }
});


/*** topBtn ****/
$(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 600){
      $('#topBtn').fadeIn();
      $('#topBtn').css('opacity','0.7');
      $('.fixedBtn').addClass('fixedBtnActive');
    }else{
      $('#topBtn').fadeOut();
      $('.fixedBtn').removeClass('fixedBtnActive');
    }
  });
});
  
  $('#topBtn').click(function(){
    $('html, body').animate({
      scrollTop : 0
    }, 400);
    return false;
  });