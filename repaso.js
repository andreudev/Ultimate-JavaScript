let n1;
const n_adivinar = Math.floor(Math.random() * 20) + 1;

let i = 0;
do {
  n1 = parseInt(prompt("Introduce un número (1-20)"));
  if (n1 > n_adivinar) {
    console.log("El número es menor");
  } else if (n1 < n_adivinar) {
    console.log("El número es mayor");
  }
  i++;
} while (n1 != n_adivinar);

console.log(`Has acertado el número ${n_adivinar} en ${i} intentos`);
