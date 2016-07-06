// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function hideCurtain() {}

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
			'showInfo': 0,
			'rel': 0,
			'autoplay': 1,
		}
	}	
	
	// add a new YT player to the videos array
	wawrVideos.push(new YT.Player(vTarget, {
		height: ytSettings.vHeight,
		width: ytSettings.vWidth,
		// get the vcode on click
		videoId: vCode,
		playerVars: ytSettings.vars,
		// playerVars: {
			// autoplay: 1,
	// 		loop: 1,
	// 		playlist: 'yOc-MXGuKgs',
	// 		start: start
		// },
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange,
		}
	}));
}

function pauseAll() {
	for(var i=0; i < wawrVideos.length; i++){
		console.log(i)
		wawrVideos[i].pauseVideo();
	}
}

//
// YOUTUBE PLAYER EVENTS
//
function onPlayerReady(event) {
	console.log('onPlayerReady');
	// event.target.setVolume(0);
	// event.target.playVideo();

	console.log('event.target = ' + event.target );

	// bind events
	var playButton = document.getElementById("play-button");
	playButton.addEventListener("click", function() {
		wawrVideos[0].playVideo();
	});
	
	var pauseButton = document.getElementById("pause-button");
	pauseButton.addEventListener("click", pauseAll);
}


function onPlayerStateChange(event) {
	console.log('state change');
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
	// var vcode = videosArray[i].data
	var clickTarget = videosArray[i].nextElementSibling;
	var vcode = videoCodesArray[i];
	// console.log('vcode', vcode);

	clickTarget.addEventListener('click', function() {
		// get the video element
		var videoElement = this.previousElementSibling;
		// check if it actually has a video associated w/ it
		(videoElement.dataset.hasVideo === 'true') ? $(this).slideToggle() : $(this).toggleClass('playing');
		// hide the curtain
		// $(this).slideToggle();
		// should be broken out, but THIS is killing me
		var videoCode = this.previousElementSibling.dataset.video;
		//get the video target
		var videoTarget = this.previousElementSibling.children[0].getAttribute('id')
		// add a new youtube video to the wawr array; pass along the code and target
		addYoutubeVideo(videoTarget, videoCode);
		// create new youtube video



		// var uu = this.previousElementSibling.dataset.video;
		// console.log(uu);
		// addYoutubeVideo().bind(this);
		// addYoutubeVideo().bind(this);

	});
}







