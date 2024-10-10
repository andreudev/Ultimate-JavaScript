let user = {
    id: 1,
    name: 'Andrew',
    email: 'andrew@correo.com',
    activo: true,
    recuperarClave: function(){
        console.log('Recuperando clave ...');
    }
};



// Factory function
function crearUsuario(nombre, email){
    return {
        nombre,
        email,
        activo: true,
        recuperarClave: function(){
            console.log('Recuperando clave ...');
        }
    };
}


let user1 = crearUsuario('Andrew', 'andrew@correo.com');
let user2 = crearUsuario('John', 'John@correo.com');

console.log(user1);
console.log(user2);


// Funcion constructora


function Usuario(id,nombre, email){
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.activo = true;
    this.recuperarClave = function(){
        console.log('Recuperando clave ...');
    }
}


let user3 = new Usuario(1, 'Andrew', 'andrew@corre.com');

console.log(user3);