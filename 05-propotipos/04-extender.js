Object.prototype.isEqual = function (obj) {};
// No extender las funciones constructoras nativas como Object, Array, etc.
let x = {};

x.isEqual({ a: 1 }); // true
