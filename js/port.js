
//Fancy box for Thumbnail imgs
$(document).ready(function() {
  $(".fancybox").fancybox();
});


//Scroll animations.
$(window).scroll(function() {
		$('.animateUp').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+710) {
				$(this).addClass("fadeIn");
			}
		});
});

    // Scroll animations for skills, will stretch left and right.
  $(window).scroll(function(){
      $('#html').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+700) {
              $(this).addClass("stretchRight");
            }
});

      $('#css').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+700) {
                $(this).addClass("stretchLeft");
              }

    });

    $('#javascript').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+700) {
              $(this).addClass("stretchRight");
            }

  });

  $('#jasmine').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+700) {
            $(this).addClass("stretchLeft");
          }

});

$('#knockout').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+700) {
          $(this).addClass("stretchRight");
        }

});

$('#webOpt').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+700) {
          $(this).addClass("stretchLeft");
        }

});

$('#react').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+700) {
          $(this).addClass("stretchRight");
        }

});


});
