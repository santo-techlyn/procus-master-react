(function ($) {

    "use strict"
    $(document).ready(function () {

        // mobile menu
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991.98",
            onePage: false
        });

        // color switch
        // const checkbox = document.getElementById("checkbox")
        // checkbox.addEventListener("change", () => {
        //     document.body.classList.toggle("light-theme")
        // })

        // counter up
        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });

        // accordion
        $(".accordion-list > li:first-child").addClass("active").find(".answer").show();
        $('.accordion-list > li:not(:first-child) .answer').hide();

        $('.accordion-list > li').click(function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active").find(".answer").slideUp();
            } else {
                $(".accordion-list > li.active .answer").slideUp();
                $(".accordion-list > li.active").removeClass("active");
                $(this).addClass("active").find(".answer").slideDown();
            }
        });

        // portfolio slider
        $('.portfolio-slider').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            ]
        });

        // brand slider
        $('.brand-slider').slick({
            dots: false,
            infinite: true,
            speed: 3000,
            autoplay: true,
            autoplaySpeed: 0,
            slidesToShow: 6,
            slidesToScroll: 1,
            cssEase: 'linear',
            arrows: false,
            centerMode: true,
            variableWidth: true,
        });

        // testimonial slider
        $('.testimonial-slider').slick({
            dots: true,
            infinite: true,
            fade: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        });

        // blog slider
        $('.blog-slider').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            ]
        });

        // magnific popup init
        $(".popup-gallery").magnificPopup({
            delegate: '.popup-img',
            type: 'image',
            gallery: {
                enabled: true
            },
        });

        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // navbar home 02
        $('.nav-bar').on('click', function () {
            $('.main-menu').toggleClass('active');
        })
        $('.nav-bar').on('click', function () {
            $('.nav-bar').toggleClass('active');
        })

        // service item 02
        $('.single-service-2').hover(function () {
            $('.single-service-2').removeClass('active');
            $(this).addClass('active');
        });

        $('.single-service-2:nth-child(4)').addClass('active');

        // portfolio slider 02
        $('.portfolio-slider-2').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<span class="arrow-left"><i class="fas fa-arrow-left"></i></span>',
            nextArrow: '<span class="arrow-right"><i class="fas fa-arrow-right"></i></span>',
            centerMode: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            ]
        });

        // case filter tab
        var $caseItems = $('.case-items .case-single');
        var $filterTabs = $('.case-filter-tab li');

        $filterTabs.on('click', function () {
            var $this = $(this); // Cache the current 'li' element
            var filter = $this.attr('data-filter');

            $this.addClass('active').siblings().removeClass('active');

            if (filter === 'all') {
                $caseItems.removeClass('item-hidden');
            } else {
                $caseItems.each(function () {
                    var $caseItem = $(this); // Cache the current case item
                    $caseItem.toggleClass('item-hidden', !$caseItem.hasClass(filter));
                });
            }
        });

        // testimonial slider 02
        $('.testimonial-slider-2').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            ]
        });

        // blog slider 02
        $('.blog-slider-2').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            ]
        });

        // brand slider 03
        $('.brand-slider-3').slick({
            dots: false,
            infinite: true,
            speed: 3000,
            autoplay: true,
            autoplaySpeed: 0,
            slidesToShow: 8,
            slidesToScroll: 1,
            cssEase: 'linear',
            arrows: false,
            responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            ]
        });

        // service tab 03
        $('.tab-menu-item').on('click', function () {
            var tabId = $(this).data('tab');

            // Remove active class from all tab-menu-item and tab-content-item
            $('.tab-menu-item').removeClass('active');
            $('.tab-content-item').removeClass('active');

            // Add active class to the clicked tab-menu-item and corresponding tab-content-item
            $(this).addClass('active');
            $('#' + tabId).addClass('active');
        });

        // testimonial slider 03
        $('.testimonial-slider-home-3').slick({
            dots: false,
            infinite: true,
            speed: 10000,
            autoplay: true,
            autoplaySpeed: 0,
            slidesToShow: 2,
            slidesToScroll: 1,
            cssEase: 'linear',
            arrows: false,
            centerMode: true,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    speed: 5000,
                }
            },
            ]
        });

        $('.testimonial-slider-2-home-3').slick({
            dots: false,
            infinite: true,
            speed: 8000,
            autoplay: true,
            autoplaySpeed: 0,
            slidesToShow: 2,
            slidesToScroll: 1,
            cssEase: 'linear',
            arrows: false,
            centerMode: true,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    speed: 4000,
                }
            },
            ]
        });

        // pricing toggle
        $('.monthly-plans').show();
        $('.yearly-plans').hide();

        $('.pricing-toggle-btn').on('click', function () {
            $('.pricing-toggle-btn').removeClass('active');
            $(this).addClass('active');

            var pricingType = $(this).data('pricing');
            if (pricingType === 'monthly') {
                $('.monthly-plans').show();
                $('.yearly-plans').hide();
            } else if (pricingType === 'yearly') {
                $('.monthly-plans').hide();
                $('.yearly-plans').show();
            }
        });

        // mouseover   
        var singleChoose = $('.single-choose-item')
        singleChoose.mouseover(function () {
            singleChoose.removeClass('active');
            $(this).addClass('active');
        });

        var singleInfo = $('.contact-info-area .single-info')
        singleInfo.mouseover(function () {
            singleInfo.removeClass('active');
            $(this).addClass('active');
        });

        // working process slider
        $('.working-process-slider').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            vertical: true,
            verticalSwiping: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            ]
        });

        // process slider 2
        $('.process-slider-2').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            ]
        });

        // Tab functionality
        $('.tab-menu-item').on('click', function () {
            var tabId = $(this).data('tab');

            // Remove active class from all tab-menu-item and tab-content-item
            $('.tab-menu-item').removeClass('active');
            $('.tab-content-item').removeClass('active');

            // Add active class to the clicked tab-menu-item and corresponding tab-content-item
            $(this).addClass('active');
            $('#' + tabId).addClass('active');
        });

        // Accordion functionality
        $('.accordion-header').on('click', function () {
            // Remove active class from all accordion-header and accordion-content
            $('.accordion-header').removeClass('active');
            $('.accordion-content').removeClass('active');

            // Add active class to the clicked accordion-header and corresponding accordion-content
            $(this).addClass('active');
            $(this).next('.accordion-content').addClass('active');
        });

        // Ensure one accordion item is active initially
        $('.accordion-item:first-child .accordion-header').addClass('active');
        $('.accordion-item:first-child .accordion-content').addClass('active');

    });

    $(window).on('scroll', function () {

        // back to top scroll
        var ScrollTop = $('.back-to-top');

        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

        // navbar fix
        const headerHeight = $(".header-area").outerHeight();
        if ($(this).scrollTop() > headerHeight) {
            $('.menu-area').addClass("fixed-top");
        } else {
            $('.menu-area').removeClass("fixed-top");
        }

    });

    $(window).on('load', function () {

        // wow js
        new WOW().init();

        // preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        // back to top animate
        $(".back-to-top").on('click', function () {
            $("html").animate({
                "scrollTop": "0"
            }, 1000);
        });

    });


 
})(jQuery);




// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });