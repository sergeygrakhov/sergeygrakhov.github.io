$(function(){
 $('.banner__link').click(function(e) {
     e.preventDefault();
     var parentClass = $(this).parent().attr('class');
     if (parentClass == 'innactive') {
         $(this).parent().siblings().removeClass('acctive').addClass('innactive', {duration:500});
         $(this).parent().removeClass('innactive').addClass('acctive', {duration:500});
     }
     else {
         $(this).parent().removeClass('acctive').addClass('innactive', {duration:500});
     }
})
});