// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoaaa ( new )
function Pessoa(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
}

const p1 = new Pessoa('Anderson', 'de Oliveira Santos')
const p2 = new Pessoa('Alice', 'Silva')
