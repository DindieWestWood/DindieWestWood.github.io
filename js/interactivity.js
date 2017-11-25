/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    
    /*var states = {
        IDLE: 1,
        MENU: 2,
        DETAIL: 3
    },
        state = states.IDLE;
    
    $('.menu').click(function (e) {
        e.preventDefault();
        switch (state) {
        case states.IDLE:
            state = states.MENU;
            $(this).removeClass('is-closed').addClass('is-opened');
            $('.collapsed-menu').fadeIn(400);
            break;
        case states.MENU:
            state = states.IDLE;
            $(this).addClass('is-closed').removeClass('is-opened');
            $('.collapsed-menu').fadeOut(400);
            break;
        case states.DETAIL:
            break;
        }
    });
    
    $('.menu-btn').click(function (e) {
        e.preventDefault();
        switch (state) {
        case states.IDLE:
            break;
        case states.MENU:
            state = states.IDLE;
            $('.menu').addClass('is-closed').removeClass('is-opened');
            $('.collapsed-menu').fadeOut(400);
            break;
        case states.DETAIL:
            break;
        }
    });
    
    $('.scrolling-btn').click(function () {
        var id = $(this).attr("data-id");
        $('html, body').animate({
            scrollTop: ($(id).offset().top)
        }, 400);
    });
    
    $('.navbar').hide();
    
    $(function () {
        $(window).scroll(function () {
            var dist = ($(window).height() - $('.navbar').height() - $('.splash-div').height()) / 2;
            if ($(this).scrollTop() > dist) {
                $('.navbar').fadeIn();
                $('.splash-div').fadeOut();
            } else {
                $('.navbar').fadeOut();
                $('.splash-div').fadeIn();
            }
        });
    });*/
    
});