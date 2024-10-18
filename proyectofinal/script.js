let serialize = (target) =>
  Array.from(target.elements).reduce((acc, el) => {
    if (!el.name) return acc;
    acc[el.name] = el.value;
    return acc;
  }, {});

class User {
  static #url = "https://jsonplaceholder.typicode.com/users";
  static #users = [];
  static #ul = document.createElement("ul");
  static #form = document.createElement("form");
  static #initialData = { name: "", email: "" };

  constructor(data) {
    this.name = data.name;
    this.email = data.email;
  }

  static async getAll() {
    try {
      const response = await fetch(`${this.#url}`);
      if (!response.ok) throw response;
      this.#users = await response.json();
      return this.#users;
    } catch (error) {
      console.error(error);
    }
  }

  static renderUser(user) {
    let li = document.createElement("li");
    li.textContent = user.name;
    return li;
  }

  static render() {
    let users = this.#users;
    users.forEach((user) => {
      this.#ul.appendChild(this.renderUser(user));
    });
    return this.#ul;
  }

  static onSubmit(e) {
    e.preventDefault();
    console.log(this);
    let data = serialize(e.target);
    let user = new User(data);
    const errors = user.validate(data);
    if (Object.keys(errors).length > 0) {
      this.#form.innerHTML = this.formHTML({
        data,
        errors,
      });
      return;
    }
    console.log("Enviando datos", data);
    User.save(user);
  }

  save() {
    return User.save(this);
  }

  static async save(user) {
    try {
      const response = await fetch(this.#url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      this.#users.unshift(data);
      this.#ul.prepend(this.renderUser(data));
    } catch (error) {
      console.error(error);
    }
  }

  validate(data) {
    let errors = {};
    if (!data.name) {
      errors.name = "El nombre es obligatorio";
    }
    if (!data.email) {
      errors.email = "El correo es obligatorio";
    }

    return errors;
  }

  static formHTML({ data, errors }) {
    return `
      <form>
        <div>
            <label>Nombre:</label>
            <input type="text" name="name" value="${data.name}" >
            ${errors.name || ""}
        </div>
        <div>
            <label>Correo:</label>
            <input type="text" name="email" value="${data.email}" >
            ${errors.email || ""}
        </div>
        <input type="submit" value="Enviar">
        </form>
    `;
  }

  static renderForm() {
    this.#form.onsubmit = this.onSubmit.bind(this);
    this.#form.innerHTML = this.formHTML({
      data: this.#initialData,
      errors: {},
    });

    return this.#form;
  }
}

async function main() {
  const users = await User.getAll();
  const template = User.render(users);
  const form = User.renderForm();
  document.body.insertAdjacentElement("afterbegin", template);
  document.body.insertAdjacentElement("afterbegin", form);
}

main();
