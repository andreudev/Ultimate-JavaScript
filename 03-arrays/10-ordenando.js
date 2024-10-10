let numeros = [10, 5, 7, 11, -3, 2, -1];
numeros.sort((a, b) =>{
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
});
console.log(numeros); // [-1, -11, 10, 2, 3, 5, 7]

let letras = ['Z', 'a', 'c', 'b', 'f', 'e'];
letras.sort((a,b)=> {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
});
console.log(letras); // ['a', 'b', 'c', 'e', 'f', 'z']