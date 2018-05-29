$(document).ready(function () {

    var open = false;
    
    $('.menu-icon').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('is-opened')) {
            $(this).addClass('is-closed').removeClass('is-opened');
            $('.collapsed-menu').fadeOut(200);
            open = false;
        } else {
            $(this).removeClass('is-closed').addClass('is-opened');
            $('.collapsed-menu').fadeIn(400);
            open = true;
        }
    });
    
    $('.menu-btn').click(function (e) {
        e.preventDefault();
        if ($('.menu-icon').hasClass('is-opened')) {
            $('.menu-icon').addClass('is-closed').removeClass('is-opened');
            $('.collapsed-menu').fadeOut(200);
            open = false;
        } else {
            $('.menu-icon').removeClass('is-closed').addClass('is-opened');
            $('.collapsed-menu').fadeIn(400);
            open = true;
        }
    });
    
    
});