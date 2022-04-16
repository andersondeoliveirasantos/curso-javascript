// for in -> Lê os índices ou chaves do objeto
//                1       2       3

const pessoa = {
  nome: 'Anderson',
  sobrenome: 'de Oliveira Santos',
  idade: 30
}

for (let keys in pessoa) {
  console.log(keys, pessoa[keys])
}

/********************************************/
/*
const fruits = ['Pera', 'Uva', 'Maçã']

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}
*/

/********************************************/
/*
const fruits = ['Pera', 'Uva', 'Maçã']

for (let indice in fruits) {
  console.log(fruits[indice])
}
*/
