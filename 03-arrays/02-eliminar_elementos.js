const letras = ['a', 'b', 'c', 'd', 'e', 'f']

// Elimina el último elemento del array
letras.pop()
console.log(letras) // ['a', 'b', 'c', 'd', 'e']

// Elimina el primer elemento del array
letras.shift()
console.log(letras) // ['b', 'c', 'd', 'e']

// Elimina un elemento en la posición 2
letras.splice(2, 1)
console.log(letras) // ['b', 'c', 'e']