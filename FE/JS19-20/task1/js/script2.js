$(function(){
 $('.banner__link').click(function(e) {
     e.preventDefault();
     var parentClass = $(this).parent().attr('class');
     if (parentClass == 'inactive') {
         $(this).parent().removeClass('inactive');
         $(this).parent().addClass('active');
     }
     else {
         $(this).parent().removeClass('active');
         $(this).parent().addClass('inactive');
     }
})
});