$(document).ready(function () {

    var open = false;
    
    $('.menu-icon').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('is-opened')) {
            $(this).addClass('is-closed').removeClass('is-opened');
            $('.collapsed-menu').fadeOut(350);
            open = false;
        } else {
            $(this).removeClass('is-closed').addClass('is-opened');
            $('.collapsed-menu').fadeIn(350);
            open = true;
        }
    });
    
    $(window).resize(function () {
        var ww = $(window).width();
        if (ww > 768) {
            $('.collapsed-menu').fadeOut(350);
        }
        if (ww < 768 && open) {
            $('.collapsed-menu').fadeIn(350);
        }
    });
});