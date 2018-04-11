var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message.js');

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

describe('generateLocationMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Admin';
        var url = 'https://www.google.com/maps?q=10,15';
        var latitude = 10;
        var longitude = 15;
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.from).toMatch(from);
        expect(typeof message.createdAt).toBe('number');
        expect(message.url).toMatch(url);
    });
});