// String, number, undefined, null, boolean

var nome = 'Anderson'
var nome = 'de Oliveira Santos'

console.log(nome)

nome = 'Anderson' // NÃO FAÇA ISSO
// Dessa forma, você está criando uma variável GLOBAL, isso pode impactar o seu códico de diversas formas.

const nome = 'Anderson' // string
const nome = 'Anderson' // string
const nome = `Anderson` // string

const num1 = 10 // number
const num2 = 10.52 // number

let nomeAluno // underfined = não aponta para local nenhum na memória
let sobrenomeAluno = null // Nulo -> não aponta para local nenhum na memória

const boolean = false // FALSO ou VERDADEIRO

console.log(typeof nome, nome) // verificar o tipo e/ou do conteúdo da linha
