function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    fala: function (assunto) {
      return `${nome} está ${assunto}`
    }
  }
}

const p1 = criaPessoa('Anderson', 'de Oliveira Santos')
console.log(p1.fala('falando sobre JavaSript'))
