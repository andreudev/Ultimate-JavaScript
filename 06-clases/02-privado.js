class User {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    this.#logger();
    return this.#name;
  }

  #logger() {
    console.log(`${this.#name} ha iniciado sesión`);
  }

  setName(name) {
    this.#name = name;
  }
}

const user = new User("Andrew");

console.log(user);
