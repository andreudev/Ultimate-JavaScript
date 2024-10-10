function sumar(a, b) {
  return Array.from(arguments).reduce((acc, el) => acc + el, 0);
  //   let total = 0;
  //   for (let valor of arguments) {
  //     total += valor;
  //   }
  //   return total;
}

console.log(sumar(1)); // NaN
console.log(sumar(1, 2)); // 3
console.log(sumar(1, 2, 3, 4, 5)); // 3
