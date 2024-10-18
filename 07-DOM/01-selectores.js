// HTMLElement
let htmlElement = document.getElementById("cuerpo");

// HTMLCollection
let elementsRed = document.getElementsByClassName("red");

// NodeList
let elementName = document.getElementsByName("chanchito");

// HTMLCollection
let parrafos = document.getElementsByTagName("p");

// HTMLElement solo un elemento
let el = document.querySelector("#cuerpo");

// NodeList
let els = document.querySelectorAll("p");

let plive = document.getElementsByTagName("p");
let pstatic = document.querySelectorAll("p");

console.log(plive);
console.log(pstatic);

let nuevoElemento = document.createElement("p");

document.body.append(nuevoElemento);

console.log(plive, pstatic);
