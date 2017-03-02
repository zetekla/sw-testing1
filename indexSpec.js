var chai = require('chai')
var expect = require('chai').expect;

describe('Sanitize', function () {
	it('returns lowercase of a string', function(){
		var word = 'hello world';
		expect(word).to.equal('hello world');
		expect(word).to.not.equal('HELLO WORLD');
		expect(word).to.be.a('string');
		expect(word).to.not.be.a('number');
		expect(word).to.contain('hello');
	})
	it('remove any hyphen')
})