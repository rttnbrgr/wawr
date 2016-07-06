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