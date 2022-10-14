const pessoa = {
  nome: 'Anderson',
  sobrenome: 'de Oliveira Santos',
  idade: 40,
  endereco: {
    rua: 'Av. Guilherme Gonçalves do Rosário',
    numero: 326,
    bairro: 'Parque Jacaranda'
  }
}

// Atribuição via desestruturação
const {
  endereco: { rua, numero },
  endereco
} = pessoa
console.log(rua, numero, endereco)
