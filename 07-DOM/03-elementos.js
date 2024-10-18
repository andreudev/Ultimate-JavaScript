let el = document.createElement("p");

el.innerText = "Elemento creado desde el DOM";

document.body.append(el);

// el.innerText = "Texto modificado";

// el.innerHTML = "<ul><li>Hola1</li><li>Hola2</li></ul>";

el.style = "background-color: red; color: white;";
el.className = "parrafo";
el.id = "parrafo1";

el.setAttribute("mi-atributo", "chanchito");

console.log(el.getAttribute("mi-atributo"));
console.log(el.hasAttribute("mi-atributo"));
