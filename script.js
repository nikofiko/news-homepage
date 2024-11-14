const buttonMenu = document.querySelector(".menu")
const buttonClose = document.querySelector(".close-menu")

const menu = document.querySelector('.menu-open')
const overlay = document.querySelector('.overlay')

buttonMenu.addEventListener("click", () => {
    menu.style.display = "block"
    overlay.style.display = "block"
    disableScroll()
})

buttonClose.addEventListener("click", () => {
    menu.style.display = "none"
    overlay.style.display = "none"
    enableScroll()
})

function disableScroll() {
    // Get the current page scroll position in the vertical direction
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
        
    // Get the current page scroll position in the horizontal direction 

    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
   
 window.onscroll = function() {
  window.scrollTo(scrollLeft, scrollTop);
 };
}

  function enableScroll() {
     window.onscroll = function() {};
 }