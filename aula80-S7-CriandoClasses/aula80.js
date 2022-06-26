class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }
  falar() {
    console.log(`${this.nome} está falando`)
  }

  comer() {
    console.log(`${this.nome} está comendo`)
  }

  beber() {
    console.log(`${this.nome} está bebendo`)
  }
}

const p1 = new Pessoa('Anderson', 'de Oliveira Santos')
const p2 = new Pessoa('Daniela', 'de Oliveira Santos')
const p3 = new Pessoa('Alice', 'de Oliveira Santos')
const p4 = new Pessoa('Tomaz', 'de Oliveira Santos')
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
