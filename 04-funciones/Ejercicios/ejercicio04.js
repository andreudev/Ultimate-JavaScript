function suma(fn, ...args) {
  let resultado = args.reduce((acc, valor) => acc + valor);
  fn(resultado);
}

suma(
  (resultado) => {
    console.log(resultado);
  },
  1,
  2,
  3,
  4
);
