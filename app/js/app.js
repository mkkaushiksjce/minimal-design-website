var scrollDelay = 500;
var bgScrollParams = {
    scrollspeed: 70,
    currentPosition: 0,
    scrollDirection: "horizontal"
}
var servicePadding;
var contactPadding;
var offset;
var currScroll = $(this).scrollTop();
var scrollDirection = 'bottom';

$(document).ready(function () {

    $("#home, .footer-logo-wrap").click(function () {
        $("html, body").animate({
            scrollTop: $(".home-section-wrap").offset().top
        }, scrollDelay);
    });


    $("#service").click(function () {
        servicePadding = parseInt($(".services-section-wrap").css('padding-bottom').match(/\d+/)[0]);

        currScroll = $(this).scrollTop();

        // if (currScroll > lastScrollTop) {
        //     scrollDirection = 'bottom';
        //     offset = $(".services-section-wrap").offset().top - servicePadding;
        //     //  offset = $(".services-section-wrap").offset().top - servicePadding - $(".navbar-wrap").height();
        // } else {
        //     scrollDirection = 'top';
        //     offset = $(".services-section-wrap").offset().top - servicePadding;
        // }
        // lastScrollTop = currScroll;

        $("html, body").animate({
            scrollTop: $(".services-section-wrap").offset().top + $(".navbar-wrap").height() - servicePadding
        }, scrollDelay);
    });

    $("#contact, #contactBtn").click(function () {
        contactPadding = parseInt($(".contactus-section-wrap").css('padding-bottom').match(/\d+/)[0]);
        // scrollTop: $(".contactus-section-wrap").offset().top - $(".navbar-wrap").height() - contactPadding
        // scrollTop: $(".contactus-section-wrap").offset().top - contactPadding
        $("html, body").animate({
            scrollTop: $(".contactus-section-wrap").offset().top - $(".navbar-wrap").height() - contactPadding
        }, scrollDelay);
    });

    var BackgroundScroll = function (params) {
        params = $.extend({
            scrollSpeed: bgScrollParams.scrollspeed,
            imageWidth: $('.home-section-wrap').width(),
            imageHeight: $('.home-section-wrap').height()
        }, params);

        var step = 1,
            current = 0,
            restartPosition = -(params.imageWidth - params.imageHeight);

        var scroll = function () {
            current -= step;
            if (current == restartPosition) {
                current = 0;
            }
            $('.home-section-wrap').css('backgroundPosition', (current > restartPosition ? 0: current) + 'px 0');

        };

        this.init = function () {
            setInterval(scroll, params.scrollSpeed);

        };
    };

    var scroll = new BackgroundScroll();
    // scroll.init();
});
