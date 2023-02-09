import {Swiper, EffectCoverflow, Pagination, Lazy, Navigation} from "swiper"

Swiper.use([EffectCoverflow, Pagination, Lazy, Navigation])

let bottomSlider = new Swiper('.bottom__slider', {
    effect: 'coverflow',
    slidesPerView: "auto",
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    lazy: true,
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: false,
    },
    breakpoints: {
        1079: {
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 1000,
                modifier: 1,
                slideShadows: false,
            },
        }
    },
    navigation: {
        nextEl: '.bottom__slider-next',
    },
});
