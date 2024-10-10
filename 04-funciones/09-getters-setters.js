const usuario = {
  nombre: "Andrew",
  apellido: "Sarmiento",
  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  },
  set nombreCompleto(value) {
    const [nombre, apellido] = value.split(" ");
    this.nombre = nombre;
    this.apellido = apellido;
  },
};

usuario.nombreCompleto = "Danna";

console.log(usuario.nombreCompleto); // Andrew Sarmiento
