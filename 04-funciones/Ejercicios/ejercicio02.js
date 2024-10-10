const obj = {
  nombre: "Andrew",
};

function extender(user) {
  const metodos = {
    login() {
      console.log("Login", this.nombre);
    },
    logout() {
      console.log("Logout", this.nombre);
    },
  };
  return Object.assign(user, metodos);
}

const objExt = extender(obj);

objExt.login();
objExt.logout();
