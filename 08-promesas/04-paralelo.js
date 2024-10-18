const p1 = Promise.reject(3);
const p2 = Promise.reject("22");
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "foo");
});

// Ejecuta todas las promesas y devuelve un arreglo con los valores de cada una y si alguna falla, se captura el error
Promise.all([p1, p2, p3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error);
  });

// Toma el valor de la primera promesa que se resuelva
Promise.race([p1, p2, p3])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

// Toma el valor de la primera promesa que se resuelva, si todas fallan, se captura el error
Promise.any([p1, p2, p3])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

// Toma el valor de todas las promesas, si alguna falla, se captura el error
Promise.allSettled([p1, p2, p3])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });
