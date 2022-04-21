// Argumentos que sustenta todos os argumentos enviados
function funcao() {
  let total = 0
  for (let argumento of arguments) {
    total += argumento
  }
  console.log(total)
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9)

console.log('____________________________________')
console.log(' ')
/*****************************************************/

function funcao2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f)
}
funcao2(1, 2, 3)

console.log('___________________________________')
console.log(' ')
/*****************************************************/

function funcao3(a, b = 2, c = 4) {
  console.log(a + b + c)
}
funcao3(2, undefined, 20)

console.log('___________________________________')
console.log(' ')
/*****************************************************/

function funcao4({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade)
}
let obj = { nome: 'Anderson', sobrenome: 'de Oliveira Santos', idade: 40 }
funcao4(obj)

console.log('___________________________________')
console.log(' ')
/*****************************************************/

function funcao5([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3)
}

funcao5(['Alice', 'Silva de Oliveira', 5])

console.log('___________________________________')
console.log(' ')
/*****************************************************/

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    acumulador += numero
  }
  console.log(acumulador)
}

conta('+', 0, 20, 30, 40, 50)
