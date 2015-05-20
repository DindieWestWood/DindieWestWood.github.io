$(document).ready(function () {
    var seen = false;
    
     $('.home-about-container').bind('inview', function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView && !seen) {
            $(".home-about-container").removeClass("hdn");
            $(".home-about-container").addClass("vsb");
            seen = true;
        }
    });
});