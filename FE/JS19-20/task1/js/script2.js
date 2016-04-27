$(function(){
 $('.banner__link').click(function(e) {
     e.preventDefault();
     var parentClass = $(this).parent().attr('class');
     if (parentClass == 'innactive') {
         $(this).parent().removeClass('inactive');
         $(this).parent().addClass('acctive');
     }
     else {
         $(this).parent().removeClass('acctive');
         $(this).parent().addClass('innactive');
     }
})
});