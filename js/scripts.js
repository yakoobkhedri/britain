new SmoothScroll('a[href*="#"]', {
    easing: 'linear',
    speed: 1000
});

new WOW().init();

$('#toggler').on('click', function () {
    var nav = $('#nav');
    var toggler = $('#toggler i');
    if (nav.css('right') === '0px') {
        nav.css('right', '-240px');
        toggler.removeClass('fa-times').addClass('fa-bars');
    } else {
        nav.css('right', '0');
        toggler.removeClass('fa-bars').addClass('fa-times');
    }
});