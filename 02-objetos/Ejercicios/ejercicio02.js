// Factory Function

function createUser(name){
    return {name: name, id: Math.random()};
}

let user1 = createUser('Pepe');
let user2 = createUser('Juan');

console.log(user1, user2);