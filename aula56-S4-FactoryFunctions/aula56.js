function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    fala: function (assunto) {
      return `${this.nome} está ${assunto}`
    },
    altura: a,
    peso: p,
    imc() {
      const indice = this.peso / this.altura ** 2
      return indice.toFixed(2)
    }
  }
}

const p1 = criaPessoa('Anderson', 'de Oliveira Santos', 1.8, 80)
console.log(p1.imc())
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42)
console.log(p1.fala('falando sobre JavaSript'))
console.log(p2.imc())
