const usuarios = [
    {edad: 12, nombre: 'Nicolas', plan: 'premium'},
    {edad: 18, nombre: 'ChanchitoFeliz', plan: 'premium'},
    {edad: 24, nombre: 'Pato', plan: 'gold'},
    {edad: 5, nombre: 'lala', plan: 'free'},
];

function agroupBy(arr,prop){
    return arr.reduce((acc, item) => {
        const llave = item[prop]; // premium, gold, free 
        acc[llave] = acc[llave] ? acc[llave] : [];
        // acc[llave] = acc[llave] ? [...acc[llave], item] : [item];
        acc[llave].push(item);
        return acc; 
    }, {});
}

const agrupado = agroupBy(usuarios, 'plan');

console.log({agrupado});