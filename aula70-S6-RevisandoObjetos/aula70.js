const pessoa1 = new Object()
pessoa1.nome = 'Anderson'
pessoa1.sobrenome = 'de Oliveira Santos'
pessoa1.idade = 40
pessoa1.falarNome = function () {
  return `${this.nome} está falando o seu nome.`
}
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date()
  return dataAtual.getFullYear() - this.idade
}

console.log(pessoa1.getDataNascimento())

/*
const pessoa = {
  nome: 'Anderson',
  sobrenome: 'de Oliveira Santos'
}

/* Um tipo de acesso
console.log(pessoa.nome)
console.log(pessoa.sobrenome)
*/

/* outro tipo de acesso
console.log(pessoa['nome'])
console.log(pessoa['sobrenome'])
*/

/*
const chave = 'sobrenome'
console.log(pessoa['sobrenome'])
console.log(pessoa[chave])
*/
