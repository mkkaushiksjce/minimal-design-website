var headerTop = 50;
var navbarFixed = false;
var activeElm = null;
var lastScrollTop = 0;
var scrollSpeed = 70;
// set the default position
var current = 0;
// set the direction
var direction = 'h';
var whiteLogo = "../common/images/logo/logo_white.png";
var colorLogo = "../common/images/logo/logo_color.png";
var whiteLogoUrl = 'url(' + whiteLogo + ')';
var colorLogoUrl = 'url(' + colorLogo + ')';

function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
};


$(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= headerTop) {
        $('.navbar-wrap').addClass('header-fixed');
        $('.logo-wrap').css('background-image', colorLogoUrl);
        navbarFixed = true;
    } else {
        $('.navbar-wrap').removeClass('header-fixed');
        $('.logo-wrap').css('background-image', whiteLogoUrl);
        navbarFixed = false;
    }
});

$(".nav-component").on('click', function () {
    $(".nav-component").each(function (element) {
        if (this.className.indexOf('active-nav') != -1) {
            $(this).removeClass("active-nav");
        };
    }, this);
    activeElm = $(this)[0].innerText
    $(this).addClass('active-nav');
});



function bgscroll() {
    // 1 pixel row at a time
    current -= 1;
    // move the background with backgrond-position css properties
    $('div.home-section-wrap').css("backgroundPosition", (direction == 'h') ? current + "px 0" : "0 " + current + "px");
}

//Calls the scrolling function repeatedly
setInterval(bgscroll, scrollSpeed);
