/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
	function changeImage(obj,img) {
		obj.src = img;
	}
    
	 $('.thumb').click(function () {
		var target = $(this).attr("data-target");
		var large = $(this).attr("data-large");
		changeImage(document.getElementById(target), large);
		$(this).parent().parent().parent().children().removeClass("active");
		$(this).parent().parent().addClass("active");
    });



});