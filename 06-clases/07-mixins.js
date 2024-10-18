class Entidad {
  save() {
    console.log("Guardando entidad");
  }
}

class User extends Entidad {
  constructor(name) {
    super();
    this.name = name;
  }

  save() {
    console.log("Guardando usuario");
  }
}

const u = new User("John Doe");
u.save();
