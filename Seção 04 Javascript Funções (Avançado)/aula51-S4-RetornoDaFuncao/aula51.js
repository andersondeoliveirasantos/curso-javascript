// return
// Retorna um valor
// Termina a função

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto
  }
  return falaResto
}

const fala = falaFrase('Hello')
const resto = fala('world !!!')
console.log(resto)

console.log('___________________________________')
console.log(' ')

// Função simples:
/*
function duplica(n) {
  return n * 2
}

function triplica(n) {
  return n * 3
}

function quadriplica(n) {
  return n * 4
}

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))
*/

console.log('___________________________________')
console.log(' ')

function criaMultiplicador(multiplicador) {
  // Multiplicador
  return function (n) {
    return n * multiplicador
  }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(3))
console.log(triplica(2))
console.log(quadriplica(10))
