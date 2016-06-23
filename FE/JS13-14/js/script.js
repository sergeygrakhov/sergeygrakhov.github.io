"use strict";
var testProgram = {
    header: 'Тест по программированию',
    questions: [
            {title: 'Вопрос №1',
            checkboxname:['one','two','three'],
            id:['1','2','3'],
            answers:['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'],
            correct: 1},
            {title: 'Вопрос №2',
            checkboxname:['four','five','six'],
            id:['4','5','6'],
            answers:['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'],
            correct: 5
            },
            {title: 'Вопрос №3',
            checkboxname:['seven','eight','nine'],
            id:['7','8','9'],
            answers:['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'],
            correct: 9}
],
    submit: 'Проверить мои результаты'
};
var copy = JSON.stringify(testProgram);
localStorage.setItem("quest",copy);
