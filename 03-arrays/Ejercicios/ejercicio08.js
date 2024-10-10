const usuarios = [
  { edad: 12, nombre: "Nicolas", plan: "premium" },
  { edad: 18, nombre: "ChanchitoFeliz", plan: "premium" },
  { edad: 24, nombre: "Pato", plan: "gold" },
  { edad: 5, nombre: "lala", plan: "free" },
];

const payUsers = usuarios.filter((usuario) => usuario.plan !== "free");

payUsers.sort((a, b) => b.edad - a.edad);

let lista = payUsers.map((usuario) => `<li>${usuario.nombre}</li>`);

const html = `
<ul>
${lista.join("\n")}
</ul>`;

console.log(html);
