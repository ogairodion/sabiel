import {Swiper, EffectCoverflow, Pagination, Lazy, Navigation} from "swiper"

Swiper.use([EffectCoverflow, Pagination, Lazy, Navigation])

let reviewsSlider = new Swiper('.reviews__slider', {
    spaceBetween: 30,
    slidesPerView: 1,
    observer: true,
    autoHeight: true,
    observeParents: true,
    lazy: true,
    navigation: {
        nextEl: '.reviews__slider-arrow--next',
        prevEl: '.reviews__slider-arrow--prev',
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
        }
    }
});