function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

let vuela = {
  vuela() {
    console.log("Volando");
  },
};

let nada = {
  nada() {
    console.log("Nadando");
  },
};

let bano = {
  bano() {
    console.log("Banandose");
  },
};

let camina = {
  camina() {
    console.log("Caminando");
  },
};

function Pato() {
  this.name = "Pato";
}

mixin(Pato.prototype, camina, nada, bano, vuela);

function Perro() {}

mixin(Perro.prototype, camina, nada, bano);

function Pez() {}

Object.assign(Pez.prototype, nada, bano);

function Avion() {}

Object.assign(Avion.prototype, vuela);

const pato = new Pato();
const perro = new Perro();
const pez = new Pez();
const avion = new Avion();

console.log(pato);
console.log(perro);
console.log(pez);
console.log(avion);
