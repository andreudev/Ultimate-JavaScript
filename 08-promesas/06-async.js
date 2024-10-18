let promesa1 = (param1) =>
  new Promise((res, rej) => {
    const b = "Hola mundo";
    res(b);
  });

let promesa2 = (param2) =>
  new Promise((res, rej) => {
    res(param2 + ", Hola mundo");
  });

let promesa3 = (param1, param2) => {
  return new Promise((res, rej) => {
    res("Chanchito Feliz");
  });
};

Promise.resolve("Hola").then((a) => {
  return promesa1(a).then((b) => {
    return promesa2(b).then((c) => {
      return promesa3(b, c).then((d) => {
        console.log(a, b, c, d);
      });
    });
  });
});

async function main() {
  try {
    const a = await Promise.resolve("Primer valor");
    const b = await promesa1(a);
    const c = await promesa2(b);
    promesa3(a, b).then((d) => {
      console.log(a, b, c, d);
    });
  } catch (e) {
    console.log(e);
  }
}

main();
