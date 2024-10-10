const suma = (...args) => {
  return args.reduce((acc, el) => acc + el, 0);
};

console.log(suma(1, 2, 3, 4, 5)); // 15

// Compare this snippet from 04-funciones/03-alcance.js:
