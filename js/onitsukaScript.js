// AOS animate
console.log("왜 안됨");

// 헤더 이벤트
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header_wrap");

  header.addEventListener("mouseover", function () {
    header.classList.add("on");
  });

  header.addEventListener("mouseout", function () {
    header.classList.remove("on");
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


// full Page
$('#fullpage').fullpage({
  sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
  anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
  menu: '#menu',
  slidesNavigation: true
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
    { threshold: 0.2 }
  );

  observer.observe(footer);
});