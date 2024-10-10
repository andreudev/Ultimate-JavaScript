// Fact arrow functions
// No tienen arguments, super, this, ni new.target

const suma = (a, b) => {
  return Array.from(arguments).reduce((acc, el) => acc + el, 0);
};

console.log(sumar(1)); // NaN
console.log(sumar(1, 2)); // 3
console.log(sumar(1, 2, 3, 4, 5)); // 3
