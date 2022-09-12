// Função construtora -> objetos

// Função fabrica -> objetos
// Construtora -> Pessoaaa ( new )
function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privado s
  const ID = 123456
  const metodoInterno = function () {}

  // Atributos ou métodos públicos
  this.nome = nome
  this.sobrenome = sobrenome

  this.metodo = function () {
    console.log(this.nome + ':sou um método')
  }
}

const p1 = new Pessoa('Anderson', 'de Oliveira Santos')
const p2 = new Pessoa('Alice', 'Silva')
p2.metodo()
