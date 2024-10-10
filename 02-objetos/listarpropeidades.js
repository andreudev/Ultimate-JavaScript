let punto = {
    x: 10,
    y: 20,
    dibujar(){
        console.log('Dibujar');
    }
};

// delete punto.dibujar;
if('dibujar' in punto) punto.dibujar();
else console.log('No existe');


for(let key of Object.keys(punto)){
    console.log(key, punto[key]);
}

for (let entry of Object.entries(punto)){
    console.log(entry);
}

for (let key in punto){
    console.log(key, punto[key]);
}


let clonePunto = Object.assign({},punto, {z: 30, x: 40});
let copiaPunto = Object.assign({},punto);
let copia3 = {...punto};

console.log(punto, clonePunto);
console.log(punto === copiaPunto);
console.log(copia3);
