$(function () {
    var $popup = $('.popup');
        $popup.hide();

    $(':button').click(
        function (){
            $popup.show();
            $popup.delay(2000).fadeOut('slow');

        });

    $('#first').hover (
        function(){
            $('#field1').toggle();

        }
    );
    $('#last').hover (
        function(){
            $('#field2').toggle();

        }
    );
    $('#address').hover (
        function(){
            $('#field3').toggle();

        }
    );
});