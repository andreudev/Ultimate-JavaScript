let collection = document.getElementsByTagName("p");
let list = document.querySelectorAll("p");

console.log(collection, list);

// let item1 = collection.namedItem("chanchito");
// console.log(item1);

// let item2 = collection.item(1);
// console.log(item2);

// let item3 = collection[1];

// for (let el of collection) {
//   console.log(el);
// }

// Array.from(collection).forEach((el) => console.log(el));

// [...collection].forEach((el) => console.log(el));

// let item1 = list.item(1);
// let item2 = list[1];

list.forEach((el) => console.log(el));

let entries = list.entries();
let keys = list.keys();
let values = list.values();

[...list].forEach((el) => console.log(el));
