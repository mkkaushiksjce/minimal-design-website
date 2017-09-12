var headerTop = 50;

function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
};


$(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= headerTop) {
        $('.navbar-wrap').addClass('header-fixed');
    } else {
        $('.navbar-wrap').removeClass('header-fixed');
    }
});