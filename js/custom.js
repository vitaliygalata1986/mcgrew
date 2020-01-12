$(function(){

    $('.header-wrap__button').click(function () {
        $(this).toggleClass('on');
        $('body').toggleClass('mob_menu_open');
    })

    $('.menu-mob .js-pagenav li a').click(function() {
        $('body').removeClass('mob_menu_open');
        $('.header-wrap__button').removeClass('on');
    });

    $(".slider__box").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: false,
        prevArrow: false,
        fade: true,
        cssEase: "linear",
        nextArrow: false
    });

    $(window).scroll(function () {

        if ($(window).scrollTop() > 40) {
            $('.header__top').addClass('menu-fixed');
        }
        else{
            $('.header__top').removeClass('menu-fixed');
        }

        if ($(this).scrollTop() > 200) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });

    $("#scroller").click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    $('.js-pagenav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        easing: 'swing',
    });

});