function sumaTodo(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("El argumento debe ser un arreglo");
  }
  return arr.reduce((acc, el) => {
    if (typeof el !== "number" || isNaN(el)) {
      throw new Error(`El elemento ${el} no es un número`);
    }
    return acc + el;
  }, 0);
}

try {
  console.log(sumaTodo([1, 2, NaN, 4, 5]));
} catch (error) {
  console.error(error.message);
}

console.log("Esto se sigue ejecutando");
