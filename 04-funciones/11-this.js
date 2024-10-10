// const user = {
//   name: "Pepe",
//   login() {
//     console.log(this);
//   },
// };

// user.logout = function logout() {
//   console.log(this);
// };

// user.logout();

// this en window
// function log() {
//   console.log(this);
// }

// log();

function Log(mensaje) {
  this.mensaje = mensaje;
  console.log(this);
}

/**
 * Se crea un objeto literal
 * se vincula el this a ese objeto
 * se vincula el prototipo de ese objeto a la función
 * retorna el objeto
 */

const log = new Log("Hola mundo");
