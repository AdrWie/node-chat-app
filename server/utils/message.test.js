var expect = require('expect');

var {generateMessage} = require('./message.js');

describe('genereateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Adrian';
        var text = 'Some text';
        var message = generateMessage(from, text);

        expect(message.from).toMatch(from);
        expect(message.text).toMatch(text);
        expect(typeof message.createdAt).toBe('number');
    }); 
});