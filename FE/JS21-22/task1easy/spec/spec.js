
var stepen = require('../js/script.js');

describe("Test pow function", function() {

    it('2^2', function () {
        var result;
        result = stepen(2,2);
    expect(result).toEqual(4);
    });
    it('5^2', function () {
        var result;
        result = stepen(5,2);
        expect(result).toEqual(25);
    });
    it('8^5', function () {
        var result;
        result = stepen(8,5);
        expect(result).toEqual(32768);
    });
    it('14^7', function () {
        var result;
        result = stepen(14,7);
        expect(result).toEqual(105413504);
    });

});
