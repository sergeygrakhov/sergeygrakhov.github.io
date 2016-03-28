var arrayNames = [];
var i;
var userName;

for (i = 0; i<5; i++) {
    arrayNames[i] = prompt('Запонить массив именами');
}

userName = prompt('Введите имя пользователя');

for (i = 0; i<arrayNames.length; i++) {
     if (arrayNames[i] == userName) {
        alert (userName + ", вы успешно вошли");
    } else if (i==(arrayNames.length-1)) {alert ('Неверное имя пользователя, Вы не вошли')}
}