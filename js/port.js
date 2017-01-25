
//Fancy box for Thumbnail imgs
$(document).ready(function() {
  $(".fancybox").fancybox();
});



//Scroll animations.
$(window).scroll(function() {
		$('.animateUp').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+700) {
				$(this).addClass("fadeIn");
			}
		});
});

    // Scroll animations for skills, will stretch left and right.
    $(window).scroll(function(){
          $('#html').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+550) {
              $(this).addClass("fadeIn");
            }

    });


});
