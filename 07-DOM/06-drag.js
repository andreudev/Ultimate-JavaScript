let id;

function createDraggable() {
  let span = document.createElement("span");
  span.id = "hola-mundo";
  span.innerText = "Arrastrable";
  span.draggable = true;
  span.ondragstart = (e) => {
    id = e.target.id;
  };

  return span;
}

function createDropArea() {
  let dropArea = document.createElement("div");
  dropArea.className = "drop";

  dropArea.ondragenter = (e) => {
    e.target.style.background = "yellow";
  };

  dropArea.ondragleave = (e) => {
    e.target.style.background = "";
  };

  dropArea.ondragover = (e) => {
    e.preventDefault();
  };

  dropArea.ondrop = (e) => {
    e.target.appendChild(document.getElementById(id));
  };

  return dropArea;
}

let dropArea1 = createDropArea();
let dropArea2 = createDropArea();
let span = createDraggable();

document.body.append(span);
document.body.append(dropArea1);
document.body.append(dropArea2);
