/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    
    var coverdist, cvtopdist, cvbottomdist, projectsdist, portfoliodist, skilldist;

    function initializeDistances() {
        coverdist = $('#cover').height();
        cvtopdist = coverdist + $('#cv-top').height();
        cvbottomdist = cvtopdist + $('#cv-bottom').height();
        projectsdist = cvbottomdist + $('#projects-top').height();
        portfoliodist = projectsdist + $('#portfolio-top').height();
        skilldist = $('#skills-inner').height();
    }
    
    function updateActiveNavItem(positionTop) {
        if (positionTop >= portfoliodist) {
            $('#contact-nav').addClass('active');
            $('#portfolio-nav').removeClass('active');
            $('#projects-nav').removeClass('active');
            $('#cv-nav').removeClass('active');
            $('#home-nav').removeClass('active');
        } else if (positionTop >= projectsdist) {
            $('#contact-nav').removeClass('active');
            $('#portfolio-nav').addClass('active');
            $('#projects-nav').removeClass('active');
            $('#cv-nav').removeClass('active');
            $('#home-nav').removeClass('active');
        } else if (positionTop >= cvbottomdist) {
            $('#contact-nav').removeClass('active');
            $('#portfolio-nav').removeClass('active');
            $('#projects-nav').addClass('active');
            $('#cv-nav').removeClass('active');
            $('#home-nav').removeClass('active');
        } else if (positionTop >= coverdist) {
            $('#contact-nav').removeClass('active');
            $('#portfolio-nav').removeClass('active');
            $('#projects-nav').removeClass('active');
            $('#cv-nav').addClass('active');
            $('#home-nav').removeClass('active');
        } else {
            $('#contact-nav').removeClass('active');
            $('#portfolio-nav').removeClass('active');
            $('#projects-nav').removeClass('active');
            $('#cv-nav').removeClass('active');
            $('#home-nav').addClass('active');
        }
    }
    
    function onScroll(positionTop) {
        var startingPoint = (coverdist + ((cvtopdist - coverdist) / 2)),
            endingPoint = (cvbottomdist - skilldist + 70),
            fadeInPoint = (((endingPoint - startingPoint) / 4) + startingPoint),
            fadeOutPoint = (((3 * (endingPoint - startingPoint)) / 4) + startingPoint);
        $('#navbar').fadeTo(0, (positionTop / coverdist));
        $('#profile-picture').fadeTo(0, 1 - ((positionTop - coverdist) / ((cvtopdist - coverdist) / 2)));
        if (positionTop < fadeInPoint) {
            $('#skills').fadeTo(0, ((positionTop - startingPoint) / (fadeInPoint - startingPoint)));
        } else if (positionTop > fadeOutPoint) {
            $('#skills').fadeTo(0, 1 - ((positionTop - fadeOutPoint) / (endingPoint - fadeOutPoint)));
        } else {
            $('#skills').fadeTo(0, 1);
        }
        updateActiveNavItem(positionTop);
    }
    
    
    $('.scrolling-btn').click(function () {
        var id = $(this).attr("data-id");
        $('html, body').animate({
            scrollTop: ($(id).offset().top)
        }, 500);
        return false;
    });
    
    $('.top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
    });
    
    initializeDistances();
    onScroll($(this).scrollTop());
    
    window.onresize = function (event) {
        initializeDistances();
    };
    
    $(window).scroll(function () {
        onScroll($(this).scrollTop());
    });
});