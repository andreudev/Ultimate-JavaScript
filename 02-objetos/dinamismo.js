const user = {id:1};

user.username = 'Andrew';

user.guardar = function(){
    console.log('Guardando', user.username);
}

user.guardar();

delete user.username;
delete user.guardar;

console.log(user);


// const user1 = Object.freeze({id:2});
const user1 = Object.seal({id:2});

user1.username = 'Andrew';
user1.id = 3;

console.log(user1);