'use strict';

$(function () {
    var temp = localStorage.getItem('quest');
    var testing = JSON.parse(temp);
    var wrapper = $('<div class="wrapper">');
    var ol = void 0;
    var li = void 0;
    var form = void 0;
    var footer = void 0;
    $('body').append(wrapper);
    wrapper.append('<header>' + testing.header + '</header');
    form = $('<form>');
    wrapper.append(form);
    ol = $('<ol>');
    form.append(ol);
    for (var i = 0; i < testing.questions.length; i++) {
        li = $('<li>');
        li.append('<h4>' + testing.questions[i].title + '</h4>');
        ol.append(li);
        for (var j = 0; j < testing.questions[i].answers.length; j++) {
            li.append('<p><input type="checkbox" name="' + testing.questions[i].checkboxname[j] + '"\n            id="' + testing.questions[i].id[j] + '"/><label for="' + testing.questions[i].id[j] + '"> ' + testing.questions[i].answers[j] + '</label></p>');
        }
    }
    footer = $('<footer>');
    form.append(footer);
    footer.append('<input type="submit" value="' + testing.submit + '">');
    var correctArr = [];
    for (var _j = 0; _j < testing.questions.length; _j++) {
        correctArr[_j] = testing.questions[_j].correct;
    }
    var button = $('input:submit')[0];
    button.addEventListener('click', function (e) {
        e.preventDefault();
        var chk = $('input:checkbox:checked');
        var arrCompare = [];
        for (var _i = 0; _i < chk.length; _i++) {
            arrCompare[_i] = Number(chk[_i].id);
        }
        var result = '';
        JSON.stringify(arrCompare) == JSON.stringify(correctArr) ? result = 'Правильно!' : result = 'Неправильно!';
        $('body').append('<div class="modal-overlay"><div class="modal"><h4>Результаты теста</h4><h2>\n                ' + result + '</h2><input type="button" value="OK" id="okbutton"></div></div>');
        $('#okbutton')[0].addEventListener('click', function (e) {
            e.preventDefault();
            $(chk).prop('checked', false);
            $('.modal-overlay').remove();
        });
    });
});
