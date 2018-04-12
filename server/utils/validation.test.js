const expect = require('expect');

var {isRealString} = require('./validation.js');

describe('isRealString', () => {
    var res = isRealString(56);
    it('should reject non-string values', () => {
        expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var res = isRealString('   ');
        expect(res).toBe(false);
    });
    
    it('should allow string with non-space characters', () => {
        var res = isRealString('  Adde  ');
        expect(res).toBe(true);
    });
});