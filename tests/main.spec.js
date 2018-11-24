const { expect } = require('chai');
const bbp = require('../index');
const PI = 3.141592653589793;

it('should return first digit of pi', () => {
	const digit = bbp(0);
	expect(digit).to.equal(PI);
});
