function Select() {}
Select.prototype.render = function () {
  console.log("Renderizando select");
};

function Input() {}

Input.prototype.render = function () {
  console.log("Renderizando input");
};

let componentes = [new Select(), new Input()];

componentes.forEach((componente) => componente.render());
