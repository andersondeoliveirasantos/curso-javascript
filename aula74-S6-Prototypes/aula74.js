/*
JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para o outro.

Definição de protótipo:
Protótipo é o termo usado para se refletir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função cosntrutora que foi usada para criá-la. Quando tentamos acessar um mebro de um objeto, primeiro o motor do JS vai tentar encontrar esta membo no próprio objeto e depois a cadeia de protótipos é usada até o topo ( null ) até encontrar ( ou não ) tal membro.
*/

// Construtora -> molde ( classe )
function Pessoa(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.nomeCompleto = () => 'ORIGINAL' + this.nome + ' ' + this.sobrenome
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome
}

// instância
const pessoa1 = new Pessoa('Anderson', 'O.') // <- Pessoa = Função construtora
// const pessoa2 = new Pessoa('Daniela', 'A.') // <- Pessoa = Função construtura
const data = new Date() // <-- Date = Função construtora

console.log(pessoa1)
// console.log(pessoa2)
console.log(data)
