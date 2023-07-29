$(function() {
    $('ul.benefits__tabs').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.benefits__content').removeClass('active').eq($(this).index()).addClass('active');
    });
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    autoplay: {
        delay: 3000
    },
    speed: 1500,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});

var swiperTest = new Swiper(".testSwiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    speed: 1500,
    navigation: {
        nextEl: ".test__prev",
        prevEl: ".test__next",
    },
});

let logIn = document.querySelector('.header__login')
let overlay = document.querySelector('.overlay')
let close = document.querySelector('.popup__close')

logIn.addEventListener('click', () => {
    overlay.style.display = 'flex'
})

close.addEventListener('click', () => {
    overlay.style.display = 'none'
})

overlay.addEventListener('click', (e) => {
    if(e.target.className === 'overlay'){
        overlay.style.display = 'none'
    }
})
