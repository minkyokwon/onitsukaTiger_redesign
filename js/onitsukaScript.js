// 헤더 이벤트 (호버)
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

// 검색창 이벤트 (esc 추가)
document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.querySelector(".menu_wrap > ul > li .search");
  const searchClose = document.querySelector(".search_close");
  const pageSearch = document.querySelector(".page_search");
  const backDrop = document.querySelector(".backdrop");

  function openSearch() {
    pageSearch.style.display = "block";
    backDrop.style.display = "block";
    document.body.classList.add("no_scroll");
  }

  function closeSearch() {
    pageSearch.style.display = "none";
    backDrop.style.display = "none";
    document.body.classList.remove("no_scroll");
  }
    
    searchBtn.addEventListener("click", openSearch);

    
    searchClose.addEventListener("click", closeSearch);
    backDrop.addEventListener("click", closeSearch);

    // esc 눌러도 검색 창 닫히도록
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeSearch();
      }
    });
  });

// 메뉴 창 이벤트
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu_wrap > ul > li .burger");
  const menuClose = document.querySelector(".main_logo");
  const pageMenu = document.querySelector(".page_menu");
  const backDrop = document.querySelector(".backdrop");

  function openMenu() {
    pageMenu.style.display = "block";
    backDrop.style.display = "block";
    document.body.classList.add("no_scroll");
  }

  function closeMenu() {
    pageMenu.style.display = "none";
    backDrop.style.display = "none";
    document.body.classList.remove("no_scroll");
  }
    
    menuBtn.addEventListener("click", openMenu);

    
    menuClose.addEventListener("click", closeMenu);
    backDrop.addEventListener("click", closeMenu);

  });


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