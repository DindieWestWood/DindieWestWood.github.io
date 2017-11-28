/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
	function changeImage(obj,img) {
		obj.src = img;
	}

	function thumbToMax(target, large) {
		changeImage(document.getElementById(target), large);
	}

	function showGallery() {
		$(document.getElementById("gallery-thumb-container")).children().removeClass("active");
		document.getElementById("gallery").style.height = "100%";
	}

	function hideGallery(){
		document.getElementById("gallery").style.height = "0%";
	}
    
	 $('.thumb').click(function () {
		var target = $(this).attr("data-target");
		var large = $(this).attr("data-large");
		thumbToMax(target, large);
		$(this).parent().parent().children().removeClass("active");
		$(this).parent().addClass("active");
    });

	$('.gallery-thumbnail').click(function () {
		var id = $(this).attr("data-id");
		var target = $(document.getElementById(id)).attr("data-target");
		var large = $(document.getElementById(id)).attr("data-large");
		showGallery();
		thumbToMax(target, large);
		$(document.getElementById(id)).parent().addClass("active");
	});

	$('.gallery-close-btn').click(function () {
		hideGallery();
	});

});