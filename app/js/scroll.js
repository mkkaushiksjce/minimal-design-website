var headerTop = 50;
var navbarFixed = false;
var activeElm = null;
var lastScrollTop = 0;

function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
};


$(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= headerTop) {
        $('.navbar-wrap').addClass('header-fixed');
        navbarFixed = true;
    } else {
        $('.navbar-wrap').removeClass('header-fixed');
        navbarFixed = false;
    }
});

$(".nav-component").on('click', function(){
    $(".nav-component").each(function(element) {
        if(this.className.indexOf('active-nav') != -1){
            $(this).removeClass("active-nav");
        };
    }, this);
    activeElm = $(this)[0].innerText
    $(this).addClass('active-nav');
});




