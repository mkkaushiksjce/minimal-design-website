var scrollDelay = 500;

$(document).ready(function () {

    $("#home, .footer-logo-wrap").click(function () {
        $("html, body").animate({
            scrollTop: $(".home-section-wrap").offset().top
        }, scrollDelay);
    });

    $("#service").click(function () {
        $("html, body").animate({
            scrollTop: $(".services-section-wrap").offset().top
        }, scrollDelay);
    });

    $("#contact, #contactBtn").click(function () {
        $("html, body").animate({
            scrollTop: $(".contactus-section-wrap").offset().top
        }, scrollDelay);
    });
});
