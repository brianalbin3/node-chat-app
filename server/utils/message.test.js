var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Brian';
		var text = 'Hey how are you';
		var message = generateMessage(from,text);
		expect(message).toInclude({from, text});
		expect(message.from).toBe(from);
		expect(message.text).toBe(text);
		expect(message.createdAt).toBeA('number');
	});
});