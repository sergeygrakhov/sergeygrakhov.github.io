
var app = function (num, exp) {
    var result = 1;
  for (var i=0; i<exp;i++) {
      result *=num;
  }
        return result;
};

module.exports = app;