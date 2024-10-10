const usuario = {
  nombre: "Andrew",
  ciudadanias: ["Colombia", "Estados Unidos"],
  mostarCiudadanias() {
    // Debe ser una función de flecha para que this haga referencia al objeto usuario, por que funcion normal this hace referencia al objeto global
    this.ciudadanias.forEach((ciudadania) => {
      console.log(`${this.nombre} es ciudadano de ${ciudadania}`);
    });
  },
};

usuario.mostarCiudadanias();
