$(function() {
let temp = localStorage.getItem('quest');
let testing = JSON.parse(temp);
    let wrapper = $('<div class="wrapper">');
    let ol;
    let li;
    let form;
    let footer;
    $('body').append(wrapper);
    wrapper.append(`<header>${testing.header}</header`);
    form = $('<form>')
    wrapper.append(form);
    ol = $('<ol>');
    form.append(ol);
    for (let i = 0; i < testing.questions.length; i++) {
        li = $('<li>');
        li.append(`<h4>${testing.questions[i].title}</h4>`);
        ol.append(li);
        for (let j = 0; j < testing.questions[i].answers.length; j++) {
            li.append(`<p><input type="checkbox" name="${testing.questions[i].checkboxname[j]}"
            id="${testing.questions[i].id[j]}"/><label for="${testing.questions[i].id[j]}"> ${testing.questions[i].answers[j]}</label></p>`)
        }
    }
    footer = $('<footer>');
    form.append(footer);
    footer.append(`<input type="submit" value="${testing.submit}">`);
    let correctArr=[];
    for (let j=0; j<testing.questions.length; j++){
        correctArr[j]=testing.questions[j].correct;
    }
       let button = $('input:submit')[0];
    button.addEventListener('click', function(e){
        e.preventDefault();
        let chk = $('input:checkbox:checked');
        let arrCompare =[];
        for (let i=0;i<chk.length; i++) {
            arrCompare[i]=Number(chk[i].id);
        }
        let result = '';
        (JSON.stringify(arrCompare) == JSON.stringify(correctArr)) ? (result = 'Правильно!') : (result = 'Неправильно!');
            $('body').append(`<div class="modal-overlay"><div class="modal"><h4>Результаты теста</h4><h2>
                ${result}</h2><input type="button" value="OK" id="okbutton"></div></div>`);
            $('#okbutton')[0].addEventListener('click', function(e) {
                e.preventDefault();
                $(chk).prop('checked', false);
                $('.modal-overlay').remove();
            });
    });


});

