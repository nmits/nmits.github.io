/*
$( '#codingLink' ).on('click', function(event) {
        event.preventDefault();
        var target = $(this).parents().attr("href");
        alert(target);
            $('html, body').animate({
            scrollTop: $(target).offset().top;
        }, 1500);
 });

 $( '#schoolLink' ).on('click', function(event) {
            event.preventDefault();
            var target = $(this).parents().attr("href");
            alert(target);
                $('html, body').animate({
                scrollTop: $(target).offset().top;
            }, 1500);
     });

$( '#dataLink' ).on('click', function(event) {
        event.preventDefault();
        var target = $(this).parents().attr("href");
        alert(target);
            $('html, body').animate({
            scrollTop: $(target).offset().top;
        }, 1500);
 });

 $( '#financeLink' ).on('click', function(event) {
         event.preventDefault();
         var target = $(this).parents().attr("href");
         alert(target);
             $('html, body').animate({
             scrollTop: $(target).offset().top;
         }, 1500);
  });
*/

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

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
      }, 1500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});