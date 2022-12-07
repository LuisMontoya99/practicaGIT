var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2.68,
  coverflowEffect: {
    rotate: 0,
    stretch: -50,
    depth: 150,
    modifier: 2,
    slideShadows: true
  },
  loop: true,
});