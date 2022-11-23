const reg1 = /[12345]/

console.log(reg1.test('We have number 6'))
console.log(reg1.test('We have number 2'))
console.log(reg1.test('We have number23'))
console.log(reg1.test('We have number 25'))

const reg2 = /[0-9]/

console.log(reg1.test('We have number 65'))
console.log(reg1.test('We have number'))