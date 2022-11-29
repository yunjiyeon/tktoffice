/****** gnb sub menu slide ******/
$(".btnSub").click(function () {
  $("#gnb").removeClass("hide");
  $("#gnb").animate({ right: 0, left: 0 }, 300, "swing"); // swing 속도감이 높아짐
});

$(".close").click(function () {
  $("#gnb").animate({ right: -700, left: 700 }, 300, "swing", function () {
    $(this).addClass("hide");
  });
});

/****** banner slide ******/
let bannerSlide = {
  slidesPerView: "auto",
  spaceBetween: 0,
  loop: true,
  autoplay: {
    //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
};
const bSlide = new Swiper("#bannerSlide", bannerSlide);

/****** main tkt slide ******/
let tktSlide = {
  slidesPerView: 1.3,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    //자동슬라이드 (false-비활성화)
    delay: 3000, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
};
const tSlide = new Swiper("#tktSlide", tktSlide);

/****** show slide ******/
let showSlide = {
  slidesPerView: 2.5,
  spaceBetween: 10,
  loop: true,
};
const sSlide = new Swiper("#showSlide", showSlide);

/***** post slide *****/
let postSlide = {
  slidesPerView: 2.2,
  spaceBetween: 10,
  loop: true,
};
const pSlide = new Swiper("#postSlide", postSlide);

/****** tkt 클릭시 변동 ******/
const $btn = $(".tktMenu li a"); //버튼역할하는 nav a를 변수로

$btn.click(function () {
  $btn.removeClass("tktActive");
  $(this).addClass("tktActive");
});

/******* main feed ******/
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

/******* feed ******/
window.addEventListener("load", () => {
  //Masonry 레이아웃(Isotope 플러그인 이용)
  const iso = new Isotope(".s_feedList", {
    // options
    itemSelector: "article",
  });

  const filterBtn = document.querySelectorAll(".s_feedBtn>li"); //.btn>li들을 변수에

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
      const filerFeed = e.currentTarget.querySelector("a").getAttribute("href");

      iso.arrange({ filter: filerFeed }); //버튼을 누르면 필터링 작동(플러그인)
    });
  }
});

/**** 동영상 실행 *****/
$(".videoDarkBg, .videoClose").click(function () {
  $(".videoDarkBg").css({ display: "none" });
  $(".videoClose").css({ display: "none" });
  $(".videoPopup").hide();
});
$(".video").click(function () {
  $(".videoPopup").show();
  $(".videoDarkBg").css({ display: "block" });
  $(".videoClose").css({ display: "block" });
});

/*** topBtn ****/
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 520) {
      $(".topBtn").addClass("topBtnActive").css("opacity", "0.85");
      $(".fixedBtn").addClass("fixedBtnActive");
    } else {
      $(".topBtn").removeClass("topBtnActive").css("opacity", "0");
      $(".fixedBtn").removeClass("fixedBtnActive");
    }
  });
});

$(".topBtn").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    400,
  );
  return false;
});

/**** sub feed top btn */
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 520) {
      $(".feedTopBtn").addClass("feedTopBtnActive").css("opacity", "0.85");
    } else {
      $(".feedTopBtn").removeClass("feedTopBtnActive").css("opacity", "0");
    }
  });
});

$(".feedTopBtn").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    400,
  );
  return false;
});

/**** 서브 메뉴 버튼 실행 *****/

$("#allBtn").click(function () {
  let x = document.getElementsByClassName("menuBtnTxt")[0];
  x.innerText = "전체";
});
$("#playBtn").click(function () {
  let x = document.getElementsByClassName("menuBtnTxt")[0];
  x.innerText = "연극";
});
$("#musicalBtn").click(function () {
  let x = document.getElementsByClassName("menuBtnTxt")[0];
  x.innerText = "뮤지컬";
});
$("#concertBtn").click(function () {
  let x = document.getElementsByClassName("menuBtnTxt")[0];
  x.innerText = "콘서트";
});
$("#exhibitBtn").click(function () {
  let x = document.getElementsByClassName("menuBtnTxt")[0];
  x.innerText = "전시/행사";
});

$("#tktRateBtn").click(function () {
  let x = document.getElementsByClassName("orderBtnTxt")[0];
  x.innerText = "예매율순";
});
$("#latestBtn").click(function () {
  let x = document.getElementsByClassName("orderBtnTxt")[0];
  x.innerText = "최신순";
});
$("#alphabetBtn").click(function () {
  let x = document.getElementsByClassName("orderBtnTxt")[0];
  x.innerText = "가나다순";
});

/**** 서브 메뉴 실행 *****/
$(".darkBg").click(function () {
  $(this).css({ display: "none" });
  $(".s_popupMenu").hide();
  $(".s_popupOrder").hide();
});
$(".s_tktMenu").click(function () {
  $(".s_popupMenu").show();
  $(".darkBg").css({ display: "block" });
});
$(".s_tktOrder").click(function () {
  $(".s_popupOrder").show();
  $(".darkBg").css({ display: "block" });
});
$(".s_popup > li").click(function () {
  $(".s_popupMenu").css({ display: "none" });
  $(".darkBg").css({ display: "none" });
  $(".s_popupMenu").hide();
  $(".s_popupOrder").hide();
});

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

/** 공연 정보 toggle **/

var toggle = {
  click: function (target) {
    var $target = $(target);
    $target.on("click", function () {
      if ($(this).hasClass("on")) {
        slideUp($target);
      } else {
        slideUp($target);
        $(this).addClass("on").next().slideDown(400);
      }

      function slideUp($target) {
        $target.removeClass("on").next().slideUp(400);
      }
    });
  },
};
toggle.click(".infoBox");
