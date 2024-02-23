// Usage of Swiper for slider
new Swiper(".swiper-our-resources", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",

        clickable: true,
    },

    centeredSlides: true,
    loop: true,

    slidesPerView: 1,
});