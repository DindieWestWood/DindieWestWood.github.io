// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$( window ).load(function() {
    setAboutImage('about-background', "images/about-background.jpg", 'about', 'about-col');
});

$( window ).resize(function() {
    setAboutImage('about-background', "images/about-background.jpg", 'about', 'about-col');
});

function setAboutImage(id, src, containerheight, containerwidth){
    var oh = document.getElementById(containerheight).clientHeight;
    var ow = document.getElementById(containerwidth).clientWidth;
    var w = document.body.clientWidth;
    var i = document.getElementById(id);
    i.setAttribute("src", src);
    if (w < 768){
        i.style.position = "relative";
        i.style.width = "100%";
        i.style.height = "auto";
    } else {
        i.style.position = "absolute";
        i.style.height = ""+oh+"px";
        i.style.width = "auto";
        i.style.top = "0";
        i.style.left = "0";
        i.style.clip = "rect(auto," + (ow) + "px,auto,auto)"; 
    }
}