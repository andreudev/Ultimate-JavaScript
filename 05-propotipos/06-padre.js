function Entidad(entidad) {
  this.id = Math.random().toString("20");
  this.entidad = entidad;
  this.attrs = this.attrs;
}

function User() {
  this.attrs = {
    name: "Usuario Pro",
    email: "chanchito@email.com",
  };
  Entidad.call(this, "User");

  this.attrs = {
    ...this.attrs,
    password: "123456",
  };
}

const user = new User();

console.log(user);
