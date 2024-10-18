let promesa1 = new Promise((res, rej) => {
  res(5);
});

let promesa2 = new Promise((res, rej) => {
  res(15);
});

promesa1
  .then((value) => {
    if (value >= 12) {
      return promesa2;
    }
    // return Promise.reject("Valor menor que 12");
    return Promise.resolve(555);
  })
  .then((value) => {
    console.log("Segunda promesa", value);
    return value;
  })
  .catch((err) => {
    console.log("Error", err);
  })
  .finally(() => {
    console.log("Final");
  });
