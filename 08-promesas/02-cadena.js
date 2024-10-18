let promesa1 = new Promise((res, rej) => {
  rej(12);
});

let promesa2 = new Promise((res, rej) => {
  res(15);
});

promesa1
  .then((value) => {
    if (value === 12) {
      return promesa2;
    }
  })
  .then((value) => {
    console.log("Segunda promesa");
    return value;
  })
  .catch((err) => {
    console.log("Error", err);
  })
  .finally(() => {
    console.log("Final");
  });
