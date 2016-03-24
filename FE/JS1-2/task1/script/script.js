
function stepen(num, exp) {
    var result = 1;
  for (var i=0; i<exp;i++) {
      result *=num;
  }
        return result;
}

var  a = prompt('Введите число');
var  b = prompt('Введите степень');

var calculations = stepen(a ,b);
console.log('Результат возведения в степень: ', calculations);