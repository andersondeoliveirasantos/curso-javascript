const verdadeira = true

/*
// let = tem escopo de bloco { ... bloco }
// Var = só tem escopo de função

let nome = 'Anderson' // criando
var nome2 = 'Anderson' // criando

if (verdadeira) {
  let nome = 'Oliveira' // criando
  var nome2 = 'Rogério' // redeclarando

  if (verdadeira) {
    var nome2 = 'Ronaldo' // redeclaarndo
    let nome = 'Outra coisa ...'
  }
}

console.log(nome, nome2)
*/

function falaOi() {
  var nome = 'Anderson'
  console.log(nome)
}
