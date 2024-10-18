let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Se ejecutó");
  }, 1000);
});

promesa.then(
  (valor) => console.log(valor),
  (error) => console.log(error)
);
