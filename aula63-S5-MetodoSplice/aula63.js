//               -5        -4       -3        -2        -1
//               0         1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

// Descrição da função:
// nomes.splice(indice atual, delete, elem1, elem2, elem3)

// pop
// const removidos = nomes.splice(-2, 2)

//const removidos = nomes.splice(-2, Number.MAX_VALUE) // Vai até o ultimo item do Array

// Remove três e adiciona 02:
//const removidos = nomes.splice(3, 3, 'Anderson', 'Oliveira')

// shit
//const removidos = nomes.splice(0, 1)

// push
// nomes.splice(nomes.length, 0, 'Alice', 'Daniela', 'Cristina')

// unshit
nomes.splice(0, 0, 'Alice', 'Daniela', 'Cristina')
console.log(nomes)
console.log(Number.MAX_VALUE) // Maior número no JavaScript
