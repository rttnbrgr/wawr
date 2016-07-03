function trackNumbers($trackList) {
	
	$tracks = $trackList.find('li');
	$tracks.each( function(i) {
		console.log(this);
		var trackNumber = '<span class="trackNumber">' + (i+1) + '</span>'
		// console.log(trackNumber);
		$(this).prepend(trackNumber);
	});
}

// youtube autoplay
function autoPlayVideo(vcode, width, height, wrapper){
	"use strict";
	$(wrapper).html('<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&modestbranding=1&autohide=1&loop=1&rel=0&wmode=transparent&controls=2" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
	console.log('autoplay swapped');
}

// document ready
$(function () {

	var $tracklistOne = $('.tracklist')
	trackNumbers($tracklistOne);
	// tracklist li
	$(function(){});  

});


$('.cinema-play').click( function() {
	console.log('let\'s go');
	var vcode = '4lYajC4utls'
			wrapper = "#video-1"

	autoPlayVideo(vcode, '1280', '720', wrapper);
	// $('.curtain').css('opacity', 0).slideToggle();
	$(this).closest('.curtain').slideToggle();
	// $('.curtain').slideToggle();
	// $('#cinema').toggleClass('lightsDown');
});

$('.cinema-play-2').click( function() {
	console.log('other video');
	var vcode = 'mwbyMNAkFSo'
			wrapper = "#video-2"
	autoPlayVideo(vcode, '1280', '720', wrapper);
	// $('.curtain').css('opacity', 0).slideToggle();
	$(this).closest('.curtain').slideToggle();
	// $('.curtain').slideToggle();
	// $('#cinema').toggleClass('lightsDown');
});