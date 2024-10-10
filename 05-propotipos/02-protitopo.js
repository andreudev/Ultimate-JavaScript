function User() {
  this.name = "Hola";
  // Metodo de instancia
  this.logger = function () {
    console.log("Logueando usuario");
  };
}

// Metodo de prototipo
User.prototype.login = function () {
  console.log(`Iniciando seccion`);
  this.logger();
};

const user = new User();

User.prototype.toString = function () {
  console.log(`User ${this.name}`);
};

console.log(user);
