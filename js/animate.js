
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

$('#redux').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+720) {
          $(this).addClass("stretchLeft");
        }

});

//Portfolio animations.

$(function(){
$('#proj1, #proj2 ,#proj3 ,#proj4, #proj5, #proj6, #proj7, #proj8, #proj9, #proj10').each(function(){

      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+720) {
          $(this).addClass("slideExpandUp");
        }

});
});

//Button Animations.

$('#button').hover(function() {
		$(this).addClass("pulse");
    $("pulse").unbind('mouseenter').bind('mouseleave');
	});

  $('#button1').hover(function() {
  		$(this).addClass("pulse");
  	});


});
