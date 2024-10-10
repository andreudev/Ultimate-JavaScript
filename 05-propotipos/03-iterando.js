function User() {
  this.name = "Hola Mundo";
}

// Metodo de prototipo
User.prototype.login = function () {
  console.log(`Iniciando seccion`, this.name);
};

const user = new User();

console.log(user);

for (let key in user) {
  //   if (!user.hasOwnProperty(key)) continue;
  console.log(key);
}

let propiedades = Object.keys(user);
console.log(propiedades);
