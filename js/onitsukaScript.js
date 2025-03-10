// AOS animate
console.log("왜 안됨");

// lenis smooth scroll
// const lenis = new Lenis({

//   duration: 2,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);

// 헤더 이벤트
// document.addEventListener("DOMContentLoaded", function () {
//   const header = document.querySelector(".header_wrap");

//   header.addEventListener("mouseover", function () {
//     header.classList.add("on");
//   });

//   header.addEventListener("mouseout", function () {
//     header.classList.remove("on");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header_wrap");

  header.addEventListener("mouseover", function () {
    if (window.scrollY <= 100) {
      header.classList.add("on");
    }
  });

  header.addEventListener("mouseout", function () {
    if (window.scrollY <= 100) {
      header.classList.remove("on");
    }
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("on");
    } else {
      header.classList.remove("on");
    }
  });
});


// 헤더 이벤트 (스크롤)
$(function () {
  var prevScrollTop = 0;

  document.addEventListener("scroll", function () {

    var nowScrollTop = $(window).scrollTop();

    if (nowScrollTop > prevScrollTop) { $('#header').addClass('down'); }

    else { $('#header').removeClass('down'); }
    prevScrollTop = nowScrollTop;

  });

});

//검색창 열고 닫기
// const searchOpen = document.querySelector(".menu_wrap > ul > li > .search");
// const searchClose = document.querySelector(".search_close");
// const pageSearch = document.querySelector(".page_search");

// function openPageSearch() {
//   searchOpen.addEventListener("click", function() {
//     pageSearch.classList.remove("hidden");
//   });
//   searchClose.addEventListener("click", function() {
//     pageSearch.classList.add("hidden");
//   });
// }


// full Page
// $('#fullpage').fullpage({
//   sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
//   anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
//   menu: '#menu',
//   slidesNavigation: true
// });

// Top 버튼 스크롤 이벤트
$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#toTopBtn').fadeIn();
    } else {
      $('#toTopBtn').fadeOut();
    }
  });

  $('#toTopBtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });

});

// toTopBtn 스크롤 고정
document.addEventListener("DOMContentLoaded", function () {
  const toTopBtn = document.getElementById("toTopBtn");
  const footer = document.querySelector("footer");

  window.addEventListener("scroll", function () {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop <= windowHeight) {

      toTopBtn.style.position = "absolute";
      toTopBtn.style.bottom = `${windowHeight - footerTop + 40}px`;
    } else {

      toTopBtn.style.position = "fixed";
      toTopBtn.style.bottom = "40px";
    }
  });
});


// 푸터 섹션 스크롤 이벤트
document.addEventListener("DOMContentLoaded", function () {
  let footer = document.getElementById("footer");

  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.scrollTo({
            top: footer.offsetTop,
            behavior: "smooth"
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(footer);
});