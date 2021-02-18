// Прелоадер
let preloader = document.querySelector('.preloader');
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hide');
    }, 1700);
    setTimeout(() => {
        preloader.remove();
    }, 2000);
});
//Плавная прокрутка
$("body").on('click', '[href*="#"]', function (e) {
    let fixedOffset = 0;
    if (document.documentElement.clientWidth < 768) {
        fixedOffset = 70;
    }
    else {
        fixedOffset = 130;
    }
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixedOffset }, 1000);
    e.preventDefault();
});
// Меню и бургер для телефонов
$(document).ready(function () {
    $(".header-burgerblock").click(function (e) {
        $(".header__burger, .menu").toggleClass("active");
    });
    $(".menu__item").click(function (e) {
        $(".header__burger").removeClass("active");
        $(".menu").removeClass("active");
    });
});
// Затемнение хедера при скролле
window.onscroll = function showHeader() {
    let header = document.querySelector('.header');

    if (window.pageYOffset > 20) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

};

// Аккордеон 
// $(document).ready(function () {
//     $(".program-block__title").click(function (e) { 
//         if ($(".program-blocks").hasClass("one")) {
//             $(".program-block__title").not($(this)).removeClass("active");
//             $(".program-block__text").not($(this).next()).slideUp(300);
//         }
//         $(this).toggleClass("active").next().slideToggle(300);
//     });
// });

// меню
if (document.documentElement.clientWidth > 1199) {
    const marker = document.querySelector('#marker');
    const item = document.querySelectorAll('.menu__link');

    function indicator(e){
        marker.style.top = e.offsetTop + 'px';
        marker.style.width = 30 + e.offsetWidth + 'px';
    }

    item.forEach(link => {
        link.addEventListener('mousemove', (e) => {
            indicator(e.target);
        });
    });
}

// // POPUP
// /* 1 */
// // открыть по кнопке
// $('.js-button-campaign-1').click(function () {
//     $('.js-overlay-campaign-1').fadeIn();
//     $(".html").addClass("lock");
// });
// // закрыть на крестик
// $('.js-close-campaign-1').click(function () {
//     $('.js-overlay-campaign-1').fadeOut();
//     $(".html").removeClass("lock");
// });
// /* 2 */
// // открыть по кнопке
// $('.js-button-campaign-2').click(function () {
//     $('.js-overlay-campaign-2').fadeIn();
//     $(".html").addClass("lock");
// });
// // закрыть на крестик
// $('.js-close-campaign-2').click(function () {
//     $('.js-overlay-campaign-2').fadeOut();
//     $(".html").removeClass("lock");
// });
// /* 3 */
// // открыть по кнопке
// $('.js-button-campaign-3').click(function () {
//     $('.js-overlay-campaign-3').fadeIn();
//     $(".html").addClass("lock");
// });
// // закрыть на крестик
// $('.js-close-campaign-3').click(function () {
//     $('.js-overlay-campaign-3').fadeOut();
//     $(".html").removeClass("lock");
// });
// // Закрытие thank-popup
// $('#thank-close').click(function () {
//     $('.thank-popup').fadeOut();
//     $(".html").removeClass("lock");
// });
// // Маска на ввод номера телефона
// $(".form__phone").mask("+7(999)999-99-99");