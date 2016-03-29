var page = {
    header: 'Тест по программированию',
    question: ['Вопрос №1' , 'Вопрос №2' ,' Вопрос №3'],
    checkboxname: ['one' , 'two' , 'three' , 'four' , 'five' , 'six' , 'seven' ,'eight','nine'],
    id: ['1' , '2' , '3' , '4' , '5' , '6' , '7' ,'8','9'],
    answer: ['Вариант ответа №1','Вариант ответа №2', 'Вариант ответа №3',
            'Вариант ответа №1','Вариант ответа №2', 'Вариант ответа №3',
            'Вариант ответа №1','Вариант ответа №2', 'Вариант ответа №3'],
    submit: 'Проверить мои результаты'
};
var k = 0;
var head = document.createElement('div');
    head.style.textAlign = 'center';
var form = document.createElement('form');
    form.action = ' ';
    form.method = ' ';
var ol = document.createElement('ol');
var parent = document.body;
var wrapper = document.createElement('div');
    wrapper.style.width = '600px';
    wrapper.style.margin = '30px 0 0 50px';
var footer = document.createElement('div');
    footer.style.textAlign = 'center';
var button = document.createElement('input');
    button.type = 'submit';
    button.value = page.submit;
    button.style.width = '300px';
    button.style.height = '40px';
    button.style.backgroundColor = '#BCE7F5';
    button.style.marginTop = '50px';
    button.style.border = '2px solid black';
wrapper.classList.add('wrapper');
wrapper.style.fontSize = '18px';
wrapper.style.fontFamily = 'arial';
head.innerHTML= page.header;
wrapper.appendChild(head);
parent.appendChild(wrapper);
wrapper.appendChild(form);
form.appendChild(ol);
for (i=0; i<page.question.length; i++) {
    var li = document.createElement('li');
    ol.appendChild(li);
    var h4 = document.createElement('h4');
    h4.innerHTML = page.question[i];
    li.appendChild(h4);
    for (j=0;j<3;j++) {
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = page.checkboxname[k];
        checkbox.id = page.id[k];
        var div = document.createElement('div');
        var label = document.createElement('label');
        label.htmlFor = page.id[k];
        label.appendChild(document.createTextNode(page.answer[k]));
        li.appendChild(div);
        div.appendChild(checkbox);
        div.appendChild(label);
        k++;
    }
}
form.appendChild(footer);
footer.appendChild(button);


