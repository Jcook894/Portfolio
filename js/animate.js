
//Fancy box for Thumbnail imgs
$(document).ready(function() {
  $(".fancybox").fancybox();
});


//Scroll animations.
$(window).scroll(function() {
		$('.animateUp').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+720) {
				$(this).addClass("fadeIn");
			}
		});
});

    // Scroll animations for skills, will stretch left and right.
  $(window).scroll(function(){

    $('#skillHeader').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+720) {
              $(this).addClass("fadeIn");
            }

    });

      $('#html').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+720) {
              $(this).addClass("stretchRight");
            }
});

      $('#css').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+720) {
                $(this).addClass("stretchLeft");
              }

    });

    $('#javascript').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+720) {
              $(this).addClass("stretchRight");
            }

  });

  $('#jasmine').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+720) {
            $(this).addClass("stretchLeft");
          }

});

$('#knockout').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+720) {
          $(this).addClass("stretchRight");
        }

});

$('#webOpt').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+720) {
          $(this).addClass("stretchLeft");
        }

});

$('#react').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+720) {
          $(this).addClass("stretchRight");
        }

});

//Portfolio animations.

$('#proj1').each(function(){

  $('#projHeader').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+720) {
            $(this).addClass("fadeIn");
          }

  });

      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+720) {
          $(this).addClass("slideExpandUp");
        }

});

$('#proj2').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+720) {
          $(this).addClass("slideExpandUp");
        }

});

$('#proj3').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+720) {
          $(this).addClass("slideExpandUp");
        }

});

$('#proj4').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+720) {
          $(this).addClass("slideExpandUp");
        }

});

$('#proj5').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+720) {
          $(this).addClass("slideExpandUp");
        }

});

$('#proj6').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+720) {
          $(this).addClass("slideExpandUp");
        }

});


//Contact Me animations.

$('#contHeader').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+720) {
          $(this).addClass("expandUp");
        }

});

$('#follow').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+720) {
          $(this).addClass("expandUp");
        }

});

//Button Animations.

$('#button').click(function() {
		$(this).addClass("pulse");
	});

  $('#button1').click(function() {
  		$(this).addClass("pulse");
  	});


});
