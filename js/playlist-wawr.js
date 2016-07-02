$(document).ready(function(){

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_rarity",
		cssSelectorAncestor: "#jp_container_rarity"
	}, [
		{
			title: "Who Are We Really",
			mp3:"audio/wawr/mp3/wawr-01.mp3"
		},
		{
			title: "Break It Down",
			mp3:"audio/wawr/mp3/wawr-02.mp3"
		},		
		{
			title: "92 Firebird",
			mp3:"audio/wawr/mp3/wawr-03.mp3"
		},		
		{
			title: "Beautiful Demise",
			mp3:"audio/wawr/mp3/wawr-04.mp3"
		},
		{
			title: "The Happening",
			mp3:"audio/wawr/mp3/wawr-05.mp3"
		},
		{
			title: "Quartz",
			mp3:"audio/wawr/mp3/wawr-06.mp3"
		}
	], {
		swfPath: "../js",
		supplied: "mp3",
		// supplied: "oga, mp3",
		wmode: "window",
		smoothPlayBar: true,
		keyEnabled: true
	});

	$("#jplayer_inspector_1").jPlayerInspector({jPlayer:$("#jquery_jplayer_1")});
});