# Bailey-Borwein-Plouffe formula

## Install

`npm i --save bbp-formula`

## Usage

```javascript
const bbp = require('bbp-formula');
console.time('estimation');
const calculatedPi = bbp(0);
console.timeEnd('estimation');
console.log(calculatedPi.toString());
```

### Refs
- http://stackoverflow.com/questions/4484489/using-basic-arithmetics-for-calculating-pi-with-arbitary-precision