$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        console.log('xdd');
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
        window.location.hash = hash;
        });
      }
    });
  });