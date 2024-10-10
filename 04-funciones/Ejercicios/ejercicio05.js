function ordenar(texto, fn) {
  let textoFiltadro = texto
    .split("")
    .filter((letra) => letra !== " ")
    .sort()
    .join("");
  fn(textoFiltadro);
}

ordenar("hola mundo", console.log); // 'adhlmnou'
