function callback(fn, ...args) {
  return fn(...args);
}

callback(
  (...args) => {
    args.forEach((arg) => console.log(arg));
  },
  "Hola mundo",
  1,
  2,
  3
);
