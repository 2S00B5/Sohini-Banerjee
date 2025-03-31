window.addEventListener('DOMContentLoaded',() => {
  VANTA.NET({
      el: "#net",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x9c28cf,
      backgroundColor: 0x111118,
      points: 20.00,
      maxDistance: 29.00,
      spacing: 17.00
});
});
window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  effect.setOptions({
    cameraZ: 50 + scrollY * 0.3 // Moves background elements
  });
});

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = `
  @keyframes blinkCursor {
    50% { border-color: transparent; }
  }

  .typewrite > .wrap {
    border-right: 2px solid #fff;
    animation: blinkCursor 0.7s step-end infinite;
    display: inline-block;
  }
`;

document.body.appendChild(css);
};
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");

// open and close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav__menu--open")) {
      navMenu.classList.remove("nav__menu--open");
    }
    changeIcon();
  });
});

// Change nav toggle icon
function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}

// Testimonial Slide

const testimonialSlide = new Swiper(".testimonial__wrapper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    520: {
      slidesPerView: "auto",
    },
  },
});

// header scroll animation
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// ScrollReveal animations
const sr = ScrollReveal({
  duration: 2000,
  distance: "100px",
  delay: 300,
  reset: false,
  mobile: true,
  useDelay: 'always',
});

// sr.reveal(".hero__content, .about__content");
// sr.reveal(".hero__img", { origin: "top" });

// sr.reveal(
//   ".hero__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .service__card, .project__content, .testimonial__wrapper, .footer__content",
//   {
//     delay: 500,
//     interval: 100,
//   }
// );

// sr.reveal(".qualification__footer-text, .contact__content", {
//   origin: "left",
// });

// sr.reveal(".qualification__footer .btn, .contact__btn", { origin: "right" });

sr.reveal('.hero__content', { origin: 'bottom', delay: 200 });
sr.reveal('.hero__img', { origin: 'top', delay: 400 });
sr.reveal('.about__content', { origin: 'left', delay: 300 });
sr.reveal('.skills__title', { origin: 'right', delay: 300 });
sr.reveal('.skills__content', { origin: 'bottom', delay: 400, interval: 100 });
sr.reveal('.qualification__name', { origin: 'left', delay: 300 });
sr.reveal('.qualification__item', { origin: 'bottom', delay: 400, interval: 100 });
sr.reveal('.service__card', { origin: 'bottom', delay: 400, interval: 100 });
sr.reveal('.project__content', { origin: 'bottom', delay: 400, interval: 100 });
sr.reveal('.contact__content', { origin: 'left', delay: 400 });
sr.reveal('.contact__btn', { origin: 'right', delay: 400 });
sr.reveal('.footer__content', { origin: 'bottom', delay: 400, interval: 100 });
