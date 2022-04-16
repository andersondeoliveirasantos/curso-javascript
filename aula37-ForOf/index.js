const nome = ['Anderson', 'de', 'Oliveira', 'Santos']

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i])
}

console.log('############') // Diferenciar as funções

for (let i in nome) {
  console.log(nome[i])
}

console.log('############') // Diferenciar as funções

for (let valor of nome) {
  console.log(valor)
}
