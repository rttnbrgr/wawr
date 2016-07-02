$(document).ready(function () {

	treadMill();	

});


function treadMill() {

	$('.scroll-target').click(function(){
		console.log('click');
		var ref = $(this).attr('href')
			$ref = $(ref);
			// navHeight = $('nav').outerHeight()
		
		scrollToDiv($ref, 0);
		return false;
	});

	function scrollToDiv(element,fixieNav){
		var offset = element.offset(),
	  		offsetTop = offset.top,
			totalScroll = offsetTop-fixieNav

		$('body,html').animate({
			scrollTop: offsetTop
		}, 500);
	}
}