document.addEventListener("scroll", handleScroll);
// get a reference to our predefined button
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");

function handleScroll() {
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.5;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    //show button
    scrollToTopBtn.style.display = "block";
  } else {
    //hide button
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

let menuBurger = document.querySelector('#menu_burger');
let menuDeroulant = document.querySelector('#menuDeroulant');

let firstSpan = document.querySelector('.firstSpan');
let secondSpan = document.querySelector('.secondSpan');
let thirdSpan = document.querySelector('.thirdSpan');


menuBurger.addEventListener("click", toggleMenu);

function toggleMenu() {
  if(menuDeroulant.classList.contains("showMenu")){
    menuDeroulant.classList.remove("showMenu");
    menuDeroulant.style.display = "none";
    firstSpan.classList.remove("firstSpanRotate");
    secondSpan.style.display = "block";
    thirdSpan.classList.remove("thirdSpanRotate");
  
  }else{
    menuDeroulant.classList.add("showMenu");
    menuDeroulant.style.display = "block";
    firstSpan.classList.add("firstSpanRotate");
    secondSpan.style.display = "none";
    thirdSpan.classList.add("thirdSpanRotate");

  }
}

let menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)