// navbar
const menuBtn = document.getElementById("navbar-toggle");
const menu = document.querySelector(".nav ul");
const backdrop = document.querySelector(".backdrop");

menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
    backdrop.classList.toggle("active");
});

backdrop.addEventListener("click", function() {
    menuBtn.classList.remove("active");
    menu.classList.remove("active");
    backdrop.classList.remove("active");
});

// game slider
var swiper = new Swiper(".gameSwiper", {
  slidesPerView: 2.5,
  centeredSlides: true,
  initialSlide: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 2.5,
    }
  }
});

// top gams tabing
$(document).ready(function () {

  $('.t-btn').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('.t-btn').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })

});

// slider js
var swiper = new Swiper(".reviewSwiper", {
  spaceBetween: 30,
  // slidesPerGroup: 2,
  slidesPerView: 2,
  initialSlide: 4,
  loop: true,
  // freeMode: true,
  pagination: {
    el: ".review-pagination",
    clickable: true,
  },
  breakpoints: {

    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    }
  }
});

// counter js
function animateCounter(id, target, speed) {
  let count = 0;
  let counter = setInterval(() => {
    count++;
    document.getElementById(id).innerText = count + "+";
    if (count >= target) {
      clearInterval(counter);
    }
  }, speed);
}

animateCounter("counter1", 300, 10);
animateCounter("counter2", 200, 15);
animateCounter("counter3", 500, 5);

animateCounter("m-counter1", 300, 10);
animateCounter("m-counter2", 200, 15);
animateCounter("m-counter3", 500, 5);