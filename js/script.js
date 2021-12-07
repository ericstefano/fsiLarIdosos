const swiper = new Swiper('.swiper', {
  speed: 800,
  spaceBetween: 0,
  direction: 'vertical',
  resistanceRatio: 0.65,
  followFinger: true,
  longSwipesMs: 0,
  longSwipesRatio: 0,
  mousewheel: {
    enabled: true,
  },
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
  },
});
const nav = document.getElementById('nav');
const navbarTop = document.querySelector('.navbar-top');
const navbarBottom = document.querySelector('.navbar-bottom');
const navbarBurger = document.querySelector('.navbar-burger');
const navbar = document.querySelector('#navbar');
const navbarLogo = document.querySelector('.navbar-item > img');
const buttonDoar = document.getElementById('doar');
const modal = document.getElementById('modal');
const modalBackground = document.getElementById('modal-background');
const modalClose = document.getElementById('modal-close');
const footerLinks = document.getElementById('footer-links');

swiper.on('slideChange', (e) => {
  navbarBurger.classList.remove('is-active');
  navbar.classList.remove('is-active');
  if (e.activeIndex !== 0) {
    navbarTop.classList.add('display-none');
  } else {
    navbarTop.classList.remove('display-none');
  }

  if (e.activeIndex === 4) {
    nav.classList.add('display-none');
  } else {
    nav.classList.remove('display-none');
  }
});

navbarBurger.addEventListener('click', (e) => {
  e.preventDefault();
  navbarBurger.classList.toggle('is-active');
  navbar.classList.toggle('is-active');
});

const items = [...navbar.firstElementChild.children];

const navigation = () => {};

items.forEach((anchor, i) => {
  anchor.addEventListener('click', () => {
    swiper.slideTo(i);
    navbarBurger.classList.remove('is-active');
    navbar.classList.remove('is-active');
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('is-active');
});

modalBackground.addEventListener('click', (e) => {
  if (e.target === modalBackground) {
    modal.classList.remove('is-active');
  }
});
buttonDoar.addEventListener('click', () => {
  modal.classList.add('is-active');
});

const footerItems = [...footerLinks.children];

footerItems.forEach((anchor, i) => {
  anchor.addEventListener('click', () => {
    console.log(anchor);
    swiper.slideTo(i);
    navbarBurger.classList.remove('is-active');
    navbar.classList.remove('is-active');
  });
});
