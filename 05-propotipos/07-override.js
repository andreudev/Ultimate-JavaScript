function Entidad() {}
Entidad.prototype.save = function () {
  console.log("Guardando... desde entidad");
};

function User() {
  this.name = "Usuario";
}

User.prototype.save = function () {
  console.log("Guardando... desde usuario");
};

function Product() {
  this.name = "Producto";
}

Object.setPrototypeOf(User.prototype, Entidad.prototype);

const user = new User();

user.save();

console.log(Object.getPrototypeOf(Object.getPrototypeOf(user)).save());
