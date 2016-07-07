// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function getSiblingVideoCode() {
	console.log('getSiblingVideoCode ', this);
	// store the curtain
	var curtain = this;	
	// store the video
	var video = this.previousElementSibling;
	// get the video id
	var videoCode = video.dataset.video;

	youtubeVideoCode = this.previousElementSibling.dataset.video;
	
	return videoCode
}

function pauseAll() {
	for(var i=0; i < wawrVideos.length; i++){
		console.log(i)
		wawrVideos[i].pauseVideo();
	}
}

function playAll() {
	for(var i=0; i < wawrVideos.length; i++){
		console.log(i)
		wawrVideos[i].playVideo();
	}	
}



// this is what will store all of our videos
var wawrVideos = []

function addYoutubeVideo(vTarget, vCode) {

	// default youtube settings
	ytSettings = {
		vHeight: 1280,
		vWidth: 720,
		vars: {
			'controls': 0,
			'modestBranding': 0,
			'showinfo': 0,
			'rel': 0,
			'autoplay': 1,
		}
	}	
	
	// add a new YT player to the videos array
	wawrVideos.push(new YT.Player(vTarget, {
		height: ytSettings.vHeight,
		width: ytSettings.vWidth,
		videoId: vCode,
		playerVars: ytSettings.vars,
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange,
			'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
      'onError': onPlayerError
		}
	}));

	// setup the play and pause btn
}

var playString = "&#9658";
var pauseString = "&#9612;&#9612";
var pauseString = "&#10074;&#10074;";



//
// YOUTUBE PLAYER EVENTS
//
function onPlayerReady(event) {
	console.log('onPlayerReady');

	// do i need all of these?
	var thisVideo = document.getElementById(event.target.h.id)	
	var thisCurtain = thisVideo.parentNode.nextElementSibling;
	var thisPlayButton = thisCurtain.children[0];
	// single var
	var thisPlayButton = document.getElementById(event.target.h.id).parentNode.nextElementSibling.children[0];

	// when we attach this event, its gonna be playing
	thisPlayButton.innerHTML = pauseString;

	thisPlayButton.addEventListener('click', function() {
		console.log('this play button called')
		
		// if the video is not playing...
		var videoIsPlaying = event.target.getPlayerState() === 1;
		// console.log('video is playing ? ' + videoIsPlaying);
		// videoIsPlaying ? console.log('videos playing') : console.log('nope, video is not playing');

		if(videoIsPlaying) {
			this.innerHTML = playString;
			event.target.pauseVideo();
		} 		
		else {
			// pause all the videos
			pauseAll();
			// swith html from play to pause
			this.innerHTML = pauseString;
			// play this video
			event.target.playVideo();
		}
		
		// 0 - pause all videos

		// 1 - swap play icon for pause
		// this.innerHTML = pauseString;

		// 2 - play the video
		// event.target.playVideo();
	})

	// local pause button; eventually this will go
	var thisPauseButton = thisCurtain.children[1];
	thisPauseButton.addEventListener('click', function() {
		console.log('this pause button called')
		event.target.pauseVideo();
	})
	// console.log(wawrVideos[])
	// event.target

	// 
	// SETUP THE TIME
	// 
	var timeTotal = event.target.getDuration();
	var timeCurrent = event.target.getCurrentTime();
	// var videoTime = '<div class="video__time-wrapper">'	
	// videoTime += '<span class="time--current">' + timeCurrent + '</span>'
	// videoTime += '<span class="time--total">' + timeTotal + '</span>'	
	// thisCurtain.append(videoTime);
	thisCurtain.children[2].children[1].innerHTML = timeTotal;
	console.log('break');




	// bind events 
	// play all
	var globalPlayButton = document.getElementById("play-button");
	globalPlayButton.addEventListener("click", playAll);
	// pause all
	var globalPauseButton = document.getElementById("pause-button");
	globalPauseButton.addEventListener("click", pauseAll);
}

//
// YOUTUBE EVENTS
//
function onPlayerStateChange(event) {
	console.log('state change');
}
function onPlayerPlaybackQualityChange(event) {
	console.log('playback quality change');
}
function onPlayerError(event) {
	console.log('on player error')
}










// 
// ADD CLICK EVENT TO ALL CURTAINS
// 

// get the videos and turn it to an array
videosArray = [].slice.call(document.getElementsByClassName('video'));
// get the video codes from the array
var videoCodesArray = videosArray.map(function(item) {
	return item.dataset.video
});
// store length of videos array
var videosLength = videosArray.length;

// attach click event handler to all of the videos in the array
for (var i=0; i < videosLength; i++) {
	
	var clickTarget = videosArray[i].nextElementSibling;
	var vcode = videoCodesArray[i];

	clickTarget.addEventListener('click', function(e) {
		// get the video element
		var videoElement = this.previousElementSibling;

		// does this target already hav a video in it?
		var videoExists = videoElement.children[0].nodeName.toLowerCase() === 'iframe'

		if(videoExists){
			// play and pause toggle
			console.log('curtain click; vid exists');
		}
		// if the video doesn't exist 
		else {
			// check if it actually has a video associated w/ it; slide curtain accordingly
			(videoElement.dataset.hasVideo === 'true') ? $(this).slideToggle() : $(this).toggleClass('playing');
			// should be broken out, but THIS is killing me
			var videoCode = this.previousElementSibling.dataset.video;
			//get the video target
			var videoTarget = this.previousElementSibling.children[0].getAttribute('id')
			// add a new youtube video to the wawr array; pass along the code and target
			addYoutubeVideo(videoTarget, videoCode, videoElement);
		}

		// should remove event handler
		e.target.removeEventListener(e.type, arguments.callee);
		console.log('event estroyds');



		// var uu = this.previousElementSibling.dataset.video;
		// console.log(uu);
		// addYoutubeVideo().bind(this);
		// addYoutubeVideo().bind(this);

	});
}







