const toggleSpan = document.querySelector(".toggle-header span");
const headerToggle = document.querySelector(".header-toggle");
const menu = document.querySelector(".icon-menu");
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

const myDropdown = document.querySelector('.dropdown')
myDropdown.addEventListener('show.bs.dropdown', event => {
   event.hidden.bs.dropdown	
})

menu.addEventListener("click", function () {
  headerToggle.classList.toggle("show-siderbar");
});

toggleSpan.addEventListener("click", function () {
  headerToggle.classList.remove("show-siderbar");
});
/Image/tu-soi-mau-x-rite-SpectraLight-QC-Light-Booth-800x500-768x480 (1).gif
./Image/hop-soi-mau-cac60-verivide.gif
./Image/img10.jpg
./Image/may-test-luc-nut.gif