$(function(){
   $('.dropdown').hover(
       function() {
           $(this).children('.drops').slideDown({
               duration: 500,
               easing: 'easeInQuart'});
           $(this).children('.drops').animate({backgroundColor:"green"}, 500 );
           },
       function() {
           $(this).children('.drops').slideUp({
               duration: 500,
               easing: 'easeInQuart'});
       }
   );

});