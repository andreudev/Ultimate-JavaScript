class Entidad {
  constructor(id) {
    this.id = id;
    this.createdAt = new Date();
  }

  save() {
    console.log("Guardando entidad");
  }
}

class User extends Entidad {
  constructor(name, id) {
    super(id);
    this.name = name;
  }

  save() {
    super.save();
    console.log("Guardando usuario");
  }
}

const u = new User("John Doe", 1);

console.log(u);

u.save();
