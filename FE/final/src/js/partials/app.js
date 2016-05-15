'use strict';
$(function(){
    var pool = ['vacation','travel','sport','nature','animals','health','history','relax','cat','flower','frontend','css','javascript','jQuery','css','html','programming','computer','robot','science','web','www','google','apple','ios'];
    var random;
    var string= '';
    for (var i=0; i<4; i++) {
        random = Math.floor((Math.random() * pool.length +1));
        searchPicture(pool[random],3)
    }
    function searchPicture(text, quantity) {
        var message ='<div class="picture item noPic">There is no pictures for your query</div>';
        if ((text.indexOf('.') !==-1) || (text.indexOf('!') !==-1)) {
            $('.grid').append(message)}
        else{
        $.getJSON('http://pixabay.com/api/?key=2563157-05cd126e344fd2fa56a52a281&q='+text+'&per_page='+quantity, function (data) {
            if (data.hits.length) {
                var pictureSection = $('#pictureLayout').html();
                var content = _.template(pictureSection)(data);
                $('.grid').append(content);
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
            searchPicture(string, 12);
        }


    });
    var $grid = $('#container').imagesLoaded( function(){

        $grid.masonry({
                itemSelector: 'item',
                columnWidth: 250
        });
    });

});
