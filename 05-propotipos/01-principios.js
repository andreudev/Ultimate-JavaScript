// Encapsulamiento
const user = {
  name: "Andrew",
  apellido: "Mayer",
  getNombre() {
    return [this.name, this.apellido].join(" ");
  },
};

console.log(user.getNombre());

// Abstracción

// const user1 = new User();
// user.password = "123456";
// user.save();

//polimorfismo

function validaEntidad(entidad) {
  entidad.save();
}
