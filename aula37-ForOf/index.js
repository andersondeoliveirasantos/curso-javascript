const pessoa = {
  nome: 'Anderson',
  sobrenome: 'de Oliveira Santos'
}

for (let key in pessoa) {
  console.log(key, pessoa[key])
}

/*
const nome = ['Anderson', 'de', 'Oliveira', 'Santos']

// FOR CLASSICO - Geralmente com interáveis ( array ou strings)
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i])
}

console.log('############') // Diferenciar as funções

// FOR IN - Retorna o índice ou chave ( string, array ou objetos )

for (let i in nome) {
  console.log(nome[i])
}

console.log('############') // Diferenciar as funções

// FOR OF - Retorna o valor em si ( interáveis, array ou strings )
for (let valor of nome) {
  console.log(valor)
}

console.log('############') // Diferenciar as funções

nome.forEach(function (valor, indice, array) {
  console.log(valor, indice, array)
})
*/
