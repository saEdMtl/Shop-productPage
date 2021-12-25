$(document).ready(function () {
    var menu = $('.web-menu-section');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0 && menu.hasClass('web-menu-section')) {
            menu.addClass('web-header-fixed');
        } else if ($(this).scrollTop() <= 0 && menu.hasClass('web-header-fixed')) {
            menu.removeClass('web-header-fixed');
        }
    });
});

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 50,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});   