const obj = {
  nombre: "Andrew",
};

function Extender() {
  this.login = () => {
    console.log("Login", this.nombre);
  };
  this.logout = () => {
    console.log("Logout", this.nombre);
  };
  return this;
}

Extender.call(obj);

obj.login();
obj.logout();
