function mobileNavShow() {
  var hamburger = document.querySelector(".hamburger");
  var mobileNav = document.querySelector(".mobile-nav");
  if (mobileNav.classList.contains('nav-show')) {
    hamburger.classList.remove('x');
    mobileNav.classList.remove('nav-show');
  } else {
    hamburger.classList.add('x');
    mobileNav.classList.add('nav-show');
  }
};

function mobileNavClose() {
  var mobileNav = document.querySelector(".mobile-nav");
  var hamburger = document.querySelector(".hamburger");
  mobileNav.classList.remove('nav-show');
  hamburger.classList.remove('x');
};
