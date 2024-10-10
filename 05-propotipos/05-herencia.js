function Entidad() {}
Entidad.prototype.save = function () {
  console.log("Guardando...", this.name);
};
Entidad.prototype.validate = function () {
  console.log("Validando...", this.name);
};

function User() {
  this.name = "Usuario";
}

function Product() {
  this.name = "Producto";
}

// User.prototype = Entidad.prototype;

// User.prototype = Object.create(Entidad.prototype);
// User.prototype.constructor = User;

Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Product.prototype, Entidad.prototype);

const user = new User();

console.log(user);
