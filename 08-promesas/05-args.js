let promesa1 = (user) =>
  new Promise((res, rej) => {
    res(user);
  });
let promesa2 = (user) =>
  new Promise((res, rej) => {
    res(user + " Hola mundo");
  });

promesa1("Argumento promesa")
  .then((res) => promesa2(res))
  .then((dato) => console.log(dato));
