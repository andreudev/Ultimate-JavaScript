function Usuario(){
    this.nombre = "Andrew";

    let log = function(){
        console.log("Logging...");
    }
    this.guaradar = function(){
        log();
        console.log("Guardando...");
    }
}

const usuario = new Usuario();

usuario.guaradar();