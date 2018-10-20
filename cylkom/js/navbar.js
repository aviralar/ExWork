$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 500){
        $('.services').addClass('appear-animation');
    }
    if($(this).scrollTop() > 120){
        $('.aboutUs').addClass('appear-animation');
    }
      if($(this).scrollTop() > 100) { 
          $('.navbar').addClass('navbar-solid');
      } else {
          $('.navbar').removeClass('navbar-solid');
      }
    });
});