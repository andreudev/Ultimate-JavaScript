let form = document.createElement("form");
form.id = "mi-form";
let input = document.createElement("input");
input.setAttribute("type", "text");
let btn = document.createElement("button");
btn.innerText = "Enviar";
form.append(input);
form.append(btn);

document.body.append(form);

form.onmouseenter = (e) => {
  console.log("Mouse enter", e);
};

form.onmouseleave = (e) => {
  console.log("Mouse leave", e);
};

input.onfocus = (e) => {
  console.log("Focus", e);
};

input.onblur = (e) => {
  console.log("Blur", e);
};

input.onchange = (e) => {
  console.log("Change to", e.target.value);
};

// btn.onclick = (e) => {
//   e.preventDefault();
//   console.log("Click", e);
// };

btn.addEventListener("click", (e) => {
  console.log("Click", e);
  e.preventDefault();
});
