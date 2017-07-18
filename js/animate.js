


//Fancy box for Thumbnail imgs
$(document).ready(function() {
  $(".fancybox").fancybox();
});


// Scroll animations for skills, will stretch left and right.
  $(document).ready(function(){

    $('.animateUp').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+720) {
        $(this).addClass("fadeIn");
      }
    });
  });

    $(document).scroll(function(){

      $("#left-bar1, #left-bar2, #left-bar3, #left-bar4").each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+720) {
              $(this).addClass("stretchRight");
            }
});

      $('#right-bar1, #right-bar2, #right-bar3, #right-bar4').each(function(){
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
});

//Fancy box for Thumbnail imgs
$(document).ready(function() {
  $(".fancybox").fancybox();
});


// Scroll animations for skills, will stretch left and right.
  $(document).ready(function(){

    $('.animateUp').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+720) {
        $(this).addClass("fadeIn");
      }
    });
  });

    $(document).scroll(function(){

      $("#left-bar1, #left-bar2, #left-bar3, #left-bar4").each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+720) {
              $(this).addClass("stretchRight");
            }
});

      $('#right-bar1, #right-bar2, #right-bar3, #right-bar4').each(function(){
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
});
