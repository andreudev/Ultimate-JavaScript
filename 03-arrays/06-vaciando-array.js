// Primera forma de vaciar un array
// let array = [1,2,3]
// array = [];

// Segunda forma de vaciar un array
let array = [1,2,3];
let array2 = array;
array = [];
console.log(array, array2); // [] [1,2,3]

// Tercera forma
// let array = [1,2,3];
// array.length = 0;
// console.log(array); // []

// Cuarta forma
// let array = [1,2,3];
// array.splice(0, array.length);
// console.log(array); // []

// // Quinta forma
// // Esta forma es la mas lenta de todas
// let array = [1,2,3];
// while (array.length) {
//     array.pop();
// }