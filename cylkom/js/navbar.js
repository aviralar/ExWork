$(document).ready(function() {

    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});   

    // Add smooth scrolling on all links inside the navbar
    $("#collapsibleNavbar a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        }  // End if
    });

    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 700){
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