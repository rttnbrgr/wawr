// jQuery dependent smooth scrolling
function smoothScroll(e) {
	console.log('smoothScroll started')
	// do some check, i dk
	if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
		
		// get the hash
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

		var smoothScrollSpeed = 500;

		if (target.length) {
			
			$('html, body').animate({
					scrollTop: target.offset().top
			}, smoothScrollSpeed);

			e.preventDefault();			

		}
	}
	console.log('smoothScroll ended')
}

// capture all #anchor links for smooth scroll
$(document).on('click', 'a[href*="#"]:not([href="#"])', smoothScroll );