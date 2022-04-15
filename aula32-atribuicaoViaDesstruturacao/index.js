/*
let a = 'A' // B
let b = 'B' // C
let c = 'C' // A

const letras = [b, c, a]
;[a, b, c] = letras
console.log(a, b, c)
*/

/*********************************************************************/
/*
// ... rest, ... spread
//               0     1     2     3     4     5     6     7     8  =  Índice
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros
console.log(primeiroNumero, segundoNumero, terceiroNumero)
console.log(resto)
*/

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
const [um, , tres, , cinco, , sete] = numeros
console.log(um, dois, tres)
