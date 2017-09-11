var scrollDelay = 500;
var bgScrollParams = {
    scrollspeed: 70,
    currentPosition: 0,
    scrollDirection: "horizontal"
}

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

    function backgroundScroll(bgScrollParams){
        // 1 pixel row at a time
        bgScrollParams.current -= 1;
   
        // move the background with backgrond-position css properties
        $('div.clouds').css("backgroundPosition", (bgScrollParams.direction == 'horizontal') ? bgScrollParams.current+"px 0" : "0 " + bgScrollParams.current+"px");
    }

    //Calls the scrolling function repeatedly
     setInterval(bgscroll, scrollSpeed);  
});
