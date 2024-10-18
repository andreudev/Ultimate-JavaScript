let render = ({ data, errors }) => {
  return `
        <form name="formulario">
            <div>
                <label>Nombre:</label>
                <input type="text" name="name" value="${data.name}"/>
                <span>${errors.name || ""}</span>
            </div>
            <div>
                <label>Apellido:</label>
                <input type="text" name="lastname" value="${data.lastname}"/>
                <span>${errors.lastname || ""}</span>
            </div>
            <div>
                <button>Enviar</button>
            </div>
        </form>
    `;
};

let inicialValues = {
  name: "",
  lastname: "",
};

let validate = (data) => {
  let errors = {};
  if (!data.name) {
    errors.name = "El nombre es obligatorio";
  }
  if (!data.lastname) {
    errors.lastname = "El apellido es obligatorio";
  }

  return errors;
};

let form = document.createElement("form");
form.innerHTML = render({ data: inicialValues, errors: {} });

document.body.append(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Array.from(form.elements).reduce((acc, el) => {
    if (!el.name) return acc;
    acc[el.name] = el.value;
    return acc;
  }, {});
  console.log(data);

  const errors = validate(data);
  console.log(errors);

  if (Object.keys(errors).length > 0) {
    let html = render({ errors, data });
    form.innerHTML = html;
  }
});
