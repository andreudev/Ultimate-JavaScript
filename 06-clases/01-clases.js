class User {
  constructor(name) {
    this.name = name;
    this.instancia = function () {};
  }

  activo = true;

  logout = () => {
    console.log(`${this.name} ha cerrado sesión`);
  };

  login() {
    console.log(`${this.name} ha iniciado sesión`);
  }
}

const user = new User("Andrew");

console.log(user);
