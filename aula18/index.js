/*
let array = [1, 2, 3]
array.push(4)
array[0] = 'Anderson'
array = 'Outra'
console.log(array)
*/

/*
const nome01 = 'Anderson'
const sobrenome01 = 'de Oliveira Santos'
const idade01 = 40

const nome02 = 'Daniela Cristina'
const sobrenome02 = 'da Silva de Oliveira'
const idade02 = 35

console.log(
  `O primeiro condidato é o ${nome01} ${sobrenome01}, que tem a idade de ${idade01} anos.`
)
console.log(
  `A segunda candidata é a ${nome02} ${sobrenome02}, que tem a idade de ${idade02} anos.`
)
*/
___________________________________________________________________________

/*
const pessoa1 = {
  nome: 'Anderson',
  sobrenome: 'de Oliveira SAntos',
  idade: 40
}

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)

const pessoa2 = {
  nome: 'Daniela Cristina',
  sobrenome: 'da Silve de Oliveira',
  idade: 35
}

console.log(pessoa2.nome)
console.log(pessoa2.sobrenome)
console.log(pessoa2.idade)
*/
___________________________________________________________________________

/*
function criaPessoa (nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Anderson', 'de Oliveira Santos', 40);
const pessoa2 = criaPessoa('Daniela Cristina', 'da Silva de Oliveira', 35);
const pessoa3 = criaPessoa('Alice', 'Silva de Oliveira', 5);
const pessoa4 = criaPessoa('Tomaz', 'Rodrigues da Silva'; 76);
const pessoa5 = criaPessoa('Narny', 'de Oliveira Santos', 66);

console.log(pessoa1.nome, pessoa2.nome)
*/

const pessoa1 = {
  nome: 'Anderson',
  sobrenome: 'de Oliveira Santos',
  idade: 40,

  fala() {
    console.log('Hello Word');
  }
};

pessoa1.fala():
