/* Crie uma regex que só aceite strings terminadas com ID;
Depois teste. */

const validateId = /\d+ID\b/

console.log(validateId.test('34564654ID'))
console.log(validateId.test('384284'))
console.log(validateId.test('asd'))
console.log(validateId.test('dfauHFUOID'))
console.log(validateId.test('ID'))
console.log(validateId.test('555ID'))