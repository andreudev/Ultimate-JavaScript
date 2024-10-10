function paraAbsolutos(array) {
    return array.map((n) => Math.abs(n));
}

const ns = [-1, 3, -2, 9, 10];

console.log(paraAbsolutos(ns)); // [1, 3, 2, 9, 10]
