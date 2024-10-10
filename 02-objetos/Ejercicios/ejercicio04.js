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

function metohdsofObject(obj){
    for(let key in obj){
        if(typeof obj[key] === "function"){
            console.log(key);
        }
    }
}

metohdsofObject(objeto); // login, logout