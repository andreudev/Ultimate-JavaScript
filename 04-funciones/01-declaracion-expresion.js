// Funcion nombrada -> Named Function
function sumar(a, b) {
    return a + b;
}

// Funcion anonima -> Anonymous Function
[1, 2, 3, 4, 5].forEach(function (element) {
    console.log(element);
});

// Expresion de funcion -> Function Expression
const sumar = function (a, b) { // Anonymous Function Expression
    return a + b;
}

// Fat Arrow Function -> Arrow Function
const sumar = (a, b) => a + b;