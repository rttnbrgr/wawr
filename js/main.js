// youtube autoplay
function autoPlayVideo(vcode, wrapper){
	"use strict";
	// Player Sizing
	var width = 1280;
	var height = 720;
	$(wrapper).html('<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&modestbranding=1&autohide=1&loop=1&rel=0&wmode=transparent&controls=2" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
	console.log('autoplay swapped for ' + vcode);
}

$('.cinema-play').click( function() {
	console.log('let\'s go');
	var vcode = '4lYajC4utls'
			wrapper = "#video-1"

	autoPlayVideo(vcode, wrapper);
	$(this).closest('.curtain').slideToggle();	
});

$('.cinema-play-2').click( function() {
	console.log('other video');
	var vcode = 'mwbyMNAkFSo'
			wrapper = "#video-2"
	autoPlayVideo(vcode, wrapper);
	// $('.curtain').css('opacity', 0).slideToggle();
	$(this).closest('.curtain').slideToggle();
	// $('.curtain').slideToggle();
	// $('#cinema').toggleClass('lightsDown');
});



videoCurtains = $('.video__curtain');

function logThis() {
	console.log(this);
	var $this = $(this);
	// var video = $this.siblings('.video');
	// var videoCode = $(video).dataset('video');
	// var siblings = $(this).siblings('.video')
	// this.siblings()
	// console.log(this);
	// console.log('video', video);
	// store the video
	var video = this.previousElementSibling;
	var videoCode = video.dataset.video;
	var test = this.previousElementSibling.dataset.video;
	// var videoCode = $(this).previousElementSibling.dataset.video;
	console.log('test = ' + videoCode);
}

function getSiblingVideoCode() {
	// store the curtain
	var curtain = this;
	console.log(this);

	// store the video
	var video = this.previousElementSibling;
	// get the video id
	var videoCode = video.dataset.video;
	console.log('videoCode = ' + videoCode);

	// play the video
	autoPlayVideo(videoCode, video);
	// hide the curtain
	$(curtain).slideToggle();
	

	// pass the video to youtube func
}

function playYoutube(videoCode, domTarget){


	vcode = getSiblingVideoCode();
	console.log('playing video ' + vcode);
	// autoPlayVideo()
}

function addEventHandler(array, type, func) {
	var l = array.length;
	for (var i=0; i < l; i++) {
		array.eq(i).bind(type, func);
	}
}

addEventHandler(videoCurtains, 'click', getSiblingVideoCode);






