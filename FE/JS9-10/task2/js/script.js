$(function(){
   $('.dropdown').hover(
       function() {
           $(this).children('.drops').slideDown({
               duration: 500,
               easing: 'easeInQuart'});
           },
       function() {
           $(this).children('.drops').slideUp({
               duration: 500,
               easing: 'easeInQuart'});

       }
   );
    $('.dropdown .menu__item').hover(
        function() {
            $(this).animate({backgroundColor:"green"}, 1000 );
        },
        function () {
            $(this).animate({backgroundColor:"#455961"}, 1000 );
            }
    );


});