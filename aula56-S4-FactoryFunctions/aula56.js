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

const p1 = criaPessoa('Anderson', 'de Oliveira Santos')
console.log(p1.fala('falando sobre JavaSript'))
