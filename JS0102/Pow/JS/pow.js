// alert('debug');
var operand = prompt('Input some num', 2);
var exp = prompt('Input some exp', 8);
var res = operand;

if (exp == 0 ) {
  res = 1;
} else {
  for (var i = 1; i < Math.abs(exp); i++) {
    res *= operand;
  }
  if ( exp < 0) {
    res = 1 / res;
  }
}

console.log(res);
