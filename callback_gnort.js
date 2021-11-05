const add = function(a,b) {
  return (a+b);
}

const multiply = function(a,b) {
  return (a*b);
}

const calc = function(a,b,callback) {
  return callback(a,b)
}

console.log(calc(2,3, add));
console.log(calc(4,5, multiply));