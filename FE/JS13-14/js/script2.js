"use strict";
$(function() {
var temp = localStorage.getItem('quest');
var testing = JSON.parse(temp);
    var html = $('#test').html();
    var content = _.template(html)(testing);
    $('body').append(content);
    var correctArr=[];
    for (var j=0; j<testing.questions.length; j++){
        correctArr[j]=testing.questions[j].correct;
    }
       var button = $('input:submit')[0];
    button.addEventListener('click', function(e){
        e.preventDefault();
        var chk = $('input:checkbox:checked');
        var arrCompare =[];
        for (var i=0;i<chk.length; i++) {
            arrCompare[i]=Number(chk[i].id);
        }
        var result = '';
        (JSON.stringify(arrCompare) == JSON.stringify(correctArr)) ? (result = 'Правильно!') : (result = 'Неправильно!');
            $('body').append('<div class="modal-overlay"><div class="modal"><h4>Результаты теста</h4><h2>' +
                result +'</h2><input type="button" value="OK" id="okbutton"></div></div>');
            $('#okbutton')[0].addEventListener('click', function(e) {
                e.preventDefault();
                $(chk).prop('checked', false);
                $('.modal-overlay').remove();
            });
    });
});

