function saludar(...args) {
  console.log(this, args);
}

// saludar.call({ nombre: "Andrew" }, "Hola mundo", 1, 2, 3);
// saludar.apply({ nombre: "Andrew" }, ["Hola mundo", 1, 2, 3]);

let nuevoSaludo = saludar.bind({ nombre: "Andrew" }, "Hola mundo", 1, 2, 3);
nuevoSaludo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
