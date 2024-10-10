// Constructor function
function Usuario(name){
    this.name = name;
    this.id = Math.random();
}

let user1 = new Usuario('Pepe');
let user2 = new Usuario('Juan');

console.log(user1, user2);