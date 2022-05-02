function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    fala: function (assunto) {
      return `${nome} está ${assunto}`
    }
    altura: a,
    peso: p,
  }
}

const p1 = criaPessoa('Anderson', 'de Oliveira Santos', 1.8, 80)
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42)
console.log(p1.fala('falando sobre JavaSript'))
