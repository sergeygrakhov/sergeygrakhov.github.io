$(function () {
    var $popup = $('.popup');
        $popup.hide();

    $(':button').click(
        function (){
            $popup.show();
            $popup.delay(2000).fadeOut('slow');
        });
    $el = $(':text');
    $el.mouseover (
        function(){
        $(this).siblings('.popup').fadeIn(300);
        });
    $el.mouseout (
        function(){
            $(this).siblings('.popup').fadeOut(300);
        });
});