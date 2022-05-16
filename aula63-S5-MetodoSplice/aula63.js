//               -5        -4       -3        -2        -1
//               0         1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

// nomes.splice(indice, delete, elem1, elem2, elem3)
// pop
// const removidos = nomes.splice(-2, 2)
const removidos = nomes.splice(-2, Number.MAX_VALUE) // Vai até o ultimo item do Array
console.log(nomes, removidos)
console.log(Number.MAX_VALUE) // Maior número no JavaScript
