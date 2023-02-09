
import $ from "jquery"
import LazyLoad from "vanilla-lazyload"
import fancybox from "@fancyapps/fancybox"

let lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
});

$(window).scroll(function () {
    let scrollPosition = $(window).scrollTop();
    let headerHeight = $('.header').outerHeight();
    
    if (scrollPosition > 0) {
        $("header").addClass("header__fixed");
        $("main").css("margin-top", headerHeight);
    } else {
        $("header").removeClass("header__fixed");
        $("main").css("margin-top", "0");
    }
    
    $('.block--effect').each(function() {
        let elementScroll = $(this).offset().top
        if (scrollPosition >= (elementScroll - 400)) {
            $('.block--effect-left' , $(this)).attr('data-effect' , 'active');
        }
    });
});

function burger() {
    $(".header__burger").toggleClass("header__burger--close"); 
    $(".header__mobile-nav").toggleClass("header__mobile-nav--open");

    if ($(window).width() < 767) {
        $(".shadow").toggle();
    }

    if ($(".header__mobile-nav").hasClass("header__mobile-nav--open")) {
        $("body").css("overflow-y", "hidden");
    } else {
        $("body").css("overflow-y", "visible");
    }
}

$(".header__burger").on("click" , function() {
    burger();
});

$(".shadow").on("click" , function() {
    burger();
});


$("a.scroll").on("click" , function() {  
    let link = $(this);
    let headerHeight = $(".header").height();

    if ($(window).width() < 1079 && $(link).attr("href") !== '#decision' && $(link).attr("href") !== '#popup__bottom') {
        burger();
    }

    $("html, body").animate({
        scrollTop: $(link.attr("href")).offset().top - headerHeight + "px"
    }, {
        duration: 800
    });
    return false;

});


function adaptiveMenuItems() {
    if ($(window).width() <= 1079) {
        if ($(".header__mobile-nav").length <= 1) {
            $(".header__mobile-nav").append($(".header__link"));
        }
    } else {
        if ($(".header__nav").length <= 1) {
            $(".header__nav").append($(".header__link"));
        }
    }    
}

adaptiveMenuItems();

$(window).on("resize", function() {
    adaptiveMenuItems();
});

$.fancybox.defaults.mobile.clickSlide = function(current) {return 'close';}

$('[data-fancybox=""]').fancybox({
    autoFocus: false
});

$('.btn--thanks').on('click', function() {
    $.fn.fancybox.close();
})