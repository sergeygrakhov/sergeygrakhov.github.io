$(function(){
 $('.banner__link').click(function(e) {
     e.preventDefault();
     var parentClass = $(this).parent().attr('class');
     if (parentClass == 'innactive') {
         $(this).parent().siblings().removeClass('acctive');
         $(this).parent().siblings().addClass('innactive');
         $(this).parent().removeClass('innactive');
         $(this).parent().addClass('acctive');
     }
     else {
         $(this).parent().removeClass('acctive');
         $(this).parent().addClass('innactive');
     }
})
});
