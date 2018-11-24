const Decimal = require('decimal.js');
const PRECISION = 100;
Decimal.config({precision: PRECISION});
const zero = new Decimal(0);
const one = new Decimal(1);
const two = new Decimal(2);
const four = new Decimal(4);

module.exports = function(n) {
	let p16 = one;
	let pi = zero;
	let k8 = new Decimal(n);
	for (let k = zero; k.lte(PRECISION); k = k.plus(one)) {
		const f = four.div(k8.plus(1))
			.minus(two.div(k8.plus(4)))
			.minus(one.div(k8.plus(5)))
			.minus(one.div(k8.plus(6)));
		pi = pi.plus(p16.times(f));
		p16 = p16.div(16);
		k8 = k8.plus(8);
	}
	return pi;
};