$(function () {
    $('.popup').hide();
    $(':button').click(
        function (){
            $('.popup').toggle();
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