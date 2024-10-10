function Usuario(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}

console.log(Usuario.name);

const U = Usuario;


let user = new U('Andrew', 'Smith', 30);
console.log(user);

function of(Fn,arg){
    return new Fn(arg);
}

let user2 = of(U,'Andrew');

console.log(user2);

function returned(){
    return function(){
        console.log('Hola');
    }
}

let r = returned();

r(); 


function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function() {
    console.log("Dibujando...");
  }
}

let punto = {z:7};

Punto.call(punto, 10, 20);
// Punto.apply(punto, [10, 20]);

console.log(punto);