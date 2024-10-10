function similares(obj1, obj2) {
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

let user1 = {name: 'Pepe', id: 0.123};
let user2 = {name: 'Pepe', id: 0.123};

console.log(similares(user1, user2)); // false