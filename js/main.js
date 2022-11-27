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
    if ($(this).scrollTop() > 520){
      $('.topBtn').addClass('topBtnActive').css('opacity','0.8');
      $('.fixedBtn').addClass('fixedBtnActive');
    }else{
      $('.topBtn').removeClass('topBtnActive').css('opacity','0');
      $('.fixedBtn').removeClass('fixedBtnActive');
    }
  });
});
  
  $('.topBtn').click(function(){
    $('html, body').animate({
      scrollTop : 0
    }, 400);
    return false;
  });



  /**** 서브 메뉴 분야 선택 *****/

$('.darkBg').click(function(){
  $(this).css({'display':'none'});
  $('.s_popupMenu').hide();
  $('.s_popupOrder').hide();
});

$('.s_tktMenu').click(function(){
  $('.s_popupMenu').show();
  $('.darkBg').css({'display':'block'});
});

$('.s_tktOrder').click(function(){
  $('.s_popupOrder').show();
  $('.darkBg').css({'display':'block'});
});

$('.s_popup > li').click(function(){
  $('.s_popupMenu').css({'display':'none'});
  $('.darkBg').css({'display':'none'});
  $('.s_popupMenu').hide();
  $('.s_popupOrder').hide();
});

  /**** 서브 메뉴 분야 선택 인기순 *****/





  /**** 서브 메뉴 레이아웃  *****/

  window.addEventListener("load", () => {
    //Masonry 레이아웃(Isotope 플러그인 이용)
    const iso = new Isotope(".s_tktList", {
      // options
      itemSelector: "article",
    });
  
    const sTktListBtn = document.querySelectorAll(".s_popup > li"); //.btn>li들을 변수에
  
    for (let el of sTktListBtn) {
      //배열 filterBtn 의 아이템(갯수) 만큼 반복
      el.addEventListener("click", (e) => {
        e.preventDefault();
  
        //클릭을 할때 각 아이템(버튼)에 반복, on클라스 없애줌
        for (let el of sTktListBtn) {
          el.classList.remove("on");
        }
  
        //클릭한 버튼에 클라스 넣어줌
        e.currentTarget.classList.add("on");
  
        //클릭한 버튼에 있는 a태그 안의 속성 href의 value값을 가져온다
        const sTkt = e.currentTarget.querySelector("a").getAttribute("href");
  
        iso.arrange({ filter: sTkt }); //버튼을 누르면 필터링 작동(플러그인)
      });
    }
  });


/*** 예매 검색 필터 ***/



const $searchInput = document.querySelector("#searchInput");
const $wordList = document.querySelector(".wordList");

// 특수문자 처리
const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function ch2pattern(ch) {
  // 사용자가 초성만 입력한 경우
  if (/[ㄱ-ㅎ]/.test(ch)) {
    const chToBegin = {
      ㄱ: "가".charCodeAt(0),
      ㄲ: "까".charCodeAt(0),
      ㄴ: "나".charCodeAt(0),
      ㄷ: "다".charCodeAt(0),
      ㄸ: "따".charCodeAt(0),
      ㄹ: "라".charCodeAt(0),
      ㅁ: "마".charCodeAt(0),
      ㅂ: "바".charCodeAt(0),
      ㅃ: "빠".charCodeAt(0),
      ㅅ: "사".charCodeAt(0),
      ㅆ: "싸".charCodeAt(0),
      ㅇ: "아".charCodeAt(0),
      ㅈ: "자".charCodeAt(0),
      ㅊ: "차".charCodeAt(0),
      ㅋ: "카".charCodeAt(0),
      ㅌ: "타".charCodeAt(0),
      ㅍ: "파".charCodeAt(0),
      ㅎ: "하".charCodeAt(0),
    };
    const begin = chToBegin[ch];
    const end = begin + 587;
    return `[${ch}\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  }
  // 사용자가 초성+중성 또는 초성+중성+종성을 입력한 경우
  else if (/[가-히]/.test(ch)) {
    const offset = "가".charCodeAt(0);
    const chCode = ch.charCodeAt(0) - offset;
    // 사용자가 초성+중성을 입력한 경우
    if (chCode % 28 <= 0) {
      const begin = Math.floor(chCode / 28) * 28 + offset;
      const end = begin + 27;
      return `[\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
    }
    // 사용자가 초성+중성+종성을 입력한 경우
    else return ch;
  }
  // 한글이 입력되지 않은 경우
  else return escapeRegExp(ch);
}

// 퍼지 문자열 검색을 위한 정규식 생성
function createFuzzyMatcher(input) {
  const pattern = input.split("").map(ch2pattern).join(".*?");
  return new RegExp(pattern);
}

// 한글 퍼지 문자열 검색
$searchInput.addEventListener("input", (e) => {
  const query = e.target.value;
  const regex = createFuzzyMatcher(query);
  const words = $wordList.children;
  for (let i = 0; i < words.length; i++) {
    if (regex.test(words[i].textContent.toLowerCase())) words[i].classList.remove("hidden");
    else words[i].classList.add("hidden");
  }
});
