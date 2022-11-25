/* Crie uma regex que valide nome de usuário no sistema
Aceita letras de a-z, _ e -, números de 0-9, mínimo de 3 caracteres e máximo de 16
Depois teste. */

let validateNameUser = /^(?=.{3,16}$)[a-z0-9-_]/

console.log(validateNameUser.test('Anderson_123'))
console.log(validateNameUser.test('as'))
console.log(validateNameUser.test('1111111111111111111111111111111111'))
console.log(validateNameUser.test('Anderson123'))