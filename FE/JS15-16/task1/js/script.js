'use strict';
function GoogleCallback(jqueryObj,data){
    if(data.results.length) {
    for (var i = 0; i<data.results.length; i++) {
        $('body').append('<div class="search"><a href="'
            + data.results[i].url+ '">'+data.results[i].title+'</a>'+
                '<p class="link">'+data.results[i].url+'</p>'+
                '<p class="content">'+data.results[i].content +'</p>'+
            '</div>');
    }} else {$('body').append('<div class="search">Ничего не найдено!</div>')}
    }
$(function (){
    var string = '';
    function googleSearch(e){
            $.ajax({
            url:'https://ajax.googleapis.com/ajax/services/search/web?v=1.0&rsz=large&q='+e+'&callback=GoogleCallback&context=?',
            dataType: 'jsonp'
    });
    }
    $('input:button')[0].addEventListener('click', function(e){
            e.preventDefault();
            string =  $('input:text')[0].value;
            googleSearch(string);
            $('.search').remove();
        });
    $('input:text')[0].addEventListener('keydown', function(e){
        if (e.keyCode == 13){
            e.preventDefault();
            string = $('input:text')[0].value;
            googleSearch(string);
            $('.search').remove();
        }});
});
