let objeto = {
    name:"Andrew"
}

function generarID(obj){
    if(typeof obj === "object"){
        obj.id = Math.floor(Math.random() * 100);
    }
    return obj;
}

console.log(generarID(objeto));