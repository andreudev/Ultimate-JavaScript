let request = require("request-promise");

function leerPagina(url) {
  return new Promise((res, rej) => {
    request(url, (error, response) => {
      if (error) return rej(error);

      res(response);
    });
  });
}

let promesa = leerPagina("https://www.google.com");

promesa
  .then((res) => {
    console.log("Finalice");
  })
  .catch((error) => {
    console.error(error);
  });
