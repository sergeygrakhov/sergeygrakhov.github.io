'use strict';
$(function(){
    var $container = $('#container');
    function initializeMasonry(){
        $container.imagesLoaded( function() {
            $container.masonry({
                columnWidth: function( containerWidth ) {
                    return containerWidth / 3
                }
            });
        });
    }
    var pool = ['moto','sport','nature','animals','health','history','relax','cat','flower','auto','computer','robot','science','web','audi','subaru','skoda','bmw'];
    function randomWord (min,max) {
        var random = min - 0.5 + Math.random() * (max-min +1);
        random = Math.round(random);
        return random;
    }
    var rand;
    var string= '';
    for (var i=0; i<4; i++) {
        rand = randomWord (0,pool.length-1);
        searchPicture(pool[rand],3);
    }
    function searchPicture(text, quantity) {

        var message ='<div class="picture item noPic">There is no pictures for your query</div>';
        if ((text.indexOf('.') !==-1) || (text.indexOf('!') !==-1) || (text.indexOf('?') !==-1)) {
            $('.grid').append(message)}
        else{
        $.getJSON('http://pixabay.com/api/?key=2563157-05cd126e344fd2fa56a52a281&q='+text+'&per_page='+quantity, function (data) {
            if (data.hits.length) {

                var pictureSection = $('#pictureLayout').html();
                var content = _.template(pictureSection)(data);
                $('.grid').append(content);
                initializeMasonry();
            }
            else $('.grid').append(message);
        });
    }
    }
    $('.searching')[0].addEventListener('click',function(e){
        e.preventDefault();
        var elem = $('#seek');
        string = elem[0].value;
        if (string) {
            elem[0].value = '';
            $('.picture').remove();
            $container.masonry('destroy');
            searchPicture(string, 12);
        }
    });

});
