/* Crie uma regex que só aceite seguinte expresão "Marca: nomeDaMarca";
Onde NomeDaMarca pode variar para Nike, Adidas, Puma, Asics
Depois teste. */

const validateBrand = /Marca: (Nike|Adidas|Puma|Asics)/ // Valida marca

console.log(validateBrand.test('Marca: Nike'))
console.log(validateBrand.test('Marca: asd'))
console.log(validateBrand.test('Marca: '))
console.log(validateBrand.test('Nike'))
console.log(validateBrand.test('123132'))
console.log(validateBrand.test('Marca: Puma'))