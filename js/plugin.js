$(document).ready(function() {

    $(".header").ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04

    });

    //navbar
    $(".nav li a").click(function(e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#' + $(this).data("scroll")).offset().top
        }, 1000);
    });

    //sync navbar
    $(window).scroll(function() {
        $(".block").each(function() {
            if ($(window).scrollTop() > $(this).offset().top) {
                var blockID = $(this).attr('id');
                $(".nav a").removeClass("active");
                $('.nav li a[data-scroll="' + blockID + '"]').addClass('active');
            }
        });
    });

    //arrow
    $(".home-arrow a").click(function() {
        $('html ,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        });
    });

    //Animated progress
    $(".progress-bar").each(function() {
        $(this).animate({
            width: $(this).attr('data-progress') + '%'
        }, 600)
    });


    //carousel
    $('.news-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: 500,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }

        }
    })

    //scroll to top with button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $(".top-arrow i").fadeIn(600)
        } else {
            $(".top-arrow i").fadeOut(600)
        }
    });

    $(".top-arrow i").on('click', function() {
        $('body , html').animate({
            scrollTop: 0
        }, 600);
    })

    // change opacity
    $(window).scroll(function() {
        if ($(window).scrollTop() >= $('.news').offset().top - 500) {
            $(".news .container").animate({
                opacity: 1
            });
        }
    });

    //library
    $(".library-address li a").on("click", function(e) {
        e.preventDefault();
        if ($(this).data('click') == $('.library').attr('id')) {
            $('#' + $(this).data('click')).fadeIn();
        }
    });
    //Toggle Btn Sidebar
    $('.inner .fa-times').on('click', function() {
        $('.fa-times').removeClass('show');
        $('.fa-bars').removeClass('hidden-bars');
        $('.left-part').addClass('hidden-sidebar');
        $('.right-wrapper').css('filter', ' grayscale(150%)')

    });
    $('.right-part .fa-bars').on('click', function() {
        $('.fa-times').addClass('show');
        $('.fa-bars').addClass('hidden-bars');
        $('.left-part').removeClass('hidden-sidebar');
        $('.right-wrapper').css('filter', ' grayscale(150%)')

    })
});