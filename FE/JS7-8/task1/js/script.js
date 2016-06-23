$(function () {
    $('.box').hide();
    $('#1').show();
    $(".link").click(function(e) {
        e.preventDefault();
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        var $show = $(this).attr("href");
        $('.box').not($show).hide();
        $($show).fadeIn();
    });
});



