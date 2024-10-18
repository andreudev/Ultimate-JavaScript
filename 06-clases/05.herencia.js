class Entidad {
  constructor(id) {
    this.id = id;
    this.createdAt = new Date();
  }

  save() {}
}

class User extends Entidad {
  constructor(name, id) {
    super(id);
    this.name = name;
  }
}

const u = new User("John Doe", 1);

console.log(u);
