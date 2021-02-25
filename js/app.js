//salim rana sir js pack

(function ($) {
    "use strict";









    ////////////////////////////////////////////////////

    // 01. Testimonial Slider Js

    $('.testimonial-slider').owlCarousel({

        loop: true,

        margin: 50,

        autoplay: false,

        autoplayTimeout: 3000,

        smartSpeed: 500,

        items: 1,

        dots: false,

        responsive: {

            0: {

                items: 1

            },

            767: {

                items: 1

            },

            992: {

                items: 1

            },

            1200: {

                items: 1

            }

        }

    });





    ////////////////////////////////////////////////////

    // 01.RESPONSIVE MENU  Js

   

    var body = $('body');
    var menuTrigger = $('.js-menu-trigger');
    var mainOverlay = $('.js-main-overlay');

    menuTrigger.on('click', function () {
        body.addClass('menu-is-active');
    });

    mainOverlay.on('click', function () {
        body.removeClass('menu-is-active');
    });


    $('.links li a').on('click', function () {
        $('body').removeClass("menu-is-active");
    });

    
    $(".close-btn").on("click", function () {
        $('body').removeClass("menu-is-active");
    });


    
    
   ////////////////////////////////////////////////////

    // 01. STICKY MENU  Js

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $("#header-sticky").removeClass("sticky");
        } else {
            $("#header-sticky").addClass("sticky");
        }
    });

    
    
    




})(jQuery);
