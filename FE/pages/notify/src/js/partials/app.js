$(function(){
    $('a').on('click', function(e){
        e.preventDefault()});
    var angle = 0;
    setInterval(function(){
        angle+=3;
        $(".rotate").rotate(angle);
    },50);
});