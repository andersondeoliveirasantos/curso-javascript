/*
JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para o outro.

Definição de protótipo:
Protótipo é o termo usado para se refletir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função cosntrutora que foi usada para criá-la. Quando tentamos acessar um mebro de um objeto e depois a cadeia de protótipos é usada até o topo ( null ) até encontrar ( ou não ) tal membro.
*/

// Construtora -> molde ( classe )
function Pessoa(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}

// instância
const pessoa1 = new Pessoa('Anderson', 'O.') // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Daniela', 'A.') // <- Pessoa = Função construtura

console.log(pessoa1)
console.log(pessoa2)
