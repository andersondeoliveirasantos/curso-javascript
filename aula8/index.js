/* 
Anderson de Oliveira Santos tem 40 anos, pesa 92 kg
Tem 1.86 de altura e seu IMC é de 26.59266967279454
Anderson nasceu em 1981
*/
const nome = 'Anderson'
const sobrenome = ' de Oliveira Santos'
const idade = 40
const peso = 92
const alturaEmM = 1.86
let imc // PESO / (ALTURA * ALTURA)
let anoNascimento

imc = peso / (alturaEmM * alturaEmM)
anoNascimento = 2022 - idade

console.log(
  nome + sobrenome,
  'tem',
  idade,
  'anos, pesa',
  peso,
  'kg, tem',
  alturaEmM,
  'de altura e seu IMC é',
  peso / (alturaEmM * alturaEmM),
  nome,
  'nasceu em',
  anoNascimento
)

console.log(
  '${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${imc} ${Anderson} nasceu em ${anoNascimento}'
)
