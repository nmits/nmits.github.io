
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


/**
0%, 12.66%, 16.66%, 100% {transform:translate3d(0,0,0);}
  29.32%, 33.32%, 45.98% {transform:translate3d(0,-25%,0);}
  49.98%,62.64%, 66.64% {transform:translate3d(0,-50%,0);}
  79.3%, 83.3%, 95.96% {transform:translate3d(0,-75%,0);}
  */