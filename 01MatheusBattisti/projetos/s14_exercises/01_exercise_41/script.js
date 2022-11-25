/* Crie uma regex que aceite só letras maiúsculas;
Depois teste. */

const uppercaseValidate = /[A-Z]/ // Validar maiúscula

console.log(uppercaseValidate.test('testing'))
console.log(uppercaseValidate.test('123'))
console.log(uppercaseValidate.test('TESTING'))