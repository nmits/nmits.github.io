
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

