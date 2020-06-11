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
    //define data role
    $(".library-address li a").data('click');
    //library
    $(".library-address li a").on("click", function(e) {
        e.preventDefault();

        var ids = $('.library').map(function() {
            return $(this).attr('id');
        });

        let id = $('#' + ids[0]);
        let id1 = $('#' + ids[1]);
        let id2 = $('#' + ids[2]);
        let id3 = $('#' + ids[3]);

        var dataName = $(this).attr('data-click');

        if (dataName == ids[0]) {
            id.removeClass('hidden')
            id1.removeClass('hidden')
            id2.removeClass('hidden')
            id3.removeClass('hidden')

        } else if (dataName == ids[1]) {
            id.addClass('hidden')
            id1.removeClass('hidden')
            id2.addClass('hidden')
            id3.addClass('hidden')
        } else if (dataName == ids[2]) {
            id.addClass('hidden')
            id2.removeClass('hidden')
            id1.addClass('hidden')
            id3.addClass('hidden')
        } else if (dataName == ids[3]) {
            id.addClass('hidden')
            id3.removeClass('hidden')
            id1.addClass('hidden')
            id2.addClass('hidden')
        }
    });
    //Toggle Btn Sidebar
    $('.inner .fa-times').on('click', function() {
        $('.fa-times').removeClass('show');
        $('.fa-bars').removeClass('hidden-bars');
        $('.left-part').addClass('hidden-sidebar');
        $('.right-wrapper').css('filter', ' grayscale(0%)')

    });
    $('.right-part .fa-bars').on('click', function() {
        $('.fa-times').addClass('show');
        $('.fa-bars').addClass('hidden-bars');
        $('.left-part').removeClass('hidden-sidebar');
        $('.right-wrapper').css('filter', ' grayscale(150%)')

    })
});