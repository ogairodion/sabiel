import $ from "jquery"
import Swiper from "swiper"



function garantySliderInit() {
    if ($(window).width() < 1079) {
        $('.garanty__slider').addClass('swiper-container');
        $('.garanty__slider-content').addClass('swiper-wrapper');
        $('.garanty__slide').addClass('swiper-slide');
        $('.garanty__slider-content').unwrap('.l-default');
        
        let garantySlider = new Swiper('.garanty__slider', {
            slidesPerView: "auto",
            observer: true,
            centeredSlides: true,
            observeParents: true,
            lazy: true,
        });
        
    } else {
        if (!$('.garanty__slider .l-default').length) {
            $('.garanty__slider-content').wrap('<div class="l-default"></div>');
        }
        $('.garanty__slider').removeClass('swiper-container');
        $('.garanty__slider-content').removeClass('swiper-wrapper');
        $('.garanty__slide').removeClass('swiper-slide');
    }
}

garantySliderInit();

$(window).on('resize', function() {
    garantySliderInit();
});