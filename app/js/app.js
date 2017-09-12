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

        if (currScroll > lastScrollTop) {
            scrollDirection = 'bottom';
             offset = $(".services-section-wrap").offset().top - servicePadding ;
            //  offset = $(".services-section-wrap").offset().top - servicePadding - $(".navbar-wrap").height();
        } else {
            scrollDirection = 'top';
            offset = $(".services-section-wrap").offset().top - servicePadding;
        }
        lastScrollTop = currScroll;

        $("html, body").animate({
            scrollTop: offset
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

    function backgroundScroll(bgScrollParams) {
        // 1 pixel row at a time
        bgScrollParams.current -= 1;

        // move the background with backgrond-position css properties
        $('div.clouds').css("backgroundPosition", (bgScrollParams.direction == 'horizontal') ? bgScrollParams.current + "px 0" : "0 " + bgScrollParams.current + "px");
    }

    //Calls the scrolling function repeatedly
    //  setInterval(bgscroll, scrollSpeed);  
});
