let objeto = {
    id:1,
    name:"Andrew",
    login : function(){
        console.log("Login");
    },
    logout : function(){
        console.log("Logout");
    }
}

function haveProperty(obj, prop){
    for (let key in obj) {
        if (key === prop) {
            return true;
        }
    }
    return false;
}

console.log(haveProperty(objeto, "names"));