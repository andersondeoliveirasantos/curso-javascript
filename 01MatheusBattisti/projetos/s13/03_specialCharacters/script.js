const scoreRegex = /./ // Ponto regex

console.log('.')
console.log(scoreRegex.test('asd'))
console.log(scoreRegex.test(' '))
console.log(scoreRegex.test('123'))
console.log(scoreRegex.test('123sad'))

/* ***************************************** */

const dRegex = /\d/ // [ 0 - 9 ]

console.log('d')
console.log(dRegex.test('asd'))
console.log(dRegex.test(' '))
console.log(dRegex.test('123'))
console.log(dRegex.test('123sad'))

/* ***************************************** */

const dRegex2 = /\D/ // [ 0 - 9 ]

console.log('D')
console.log(dRegex2.test('asd'))
console.log(dRegex2.test(' '))
console.log(dRegex2.test('123'))
console.log(dRegex2.test('123sad'))

/* ***************************************** */

const sRegex = /\s/ // [ 0 - 9 ]

console.log('s')
console.log(sRegex.test('asd'))
console.log(sRegex.test(' '))
console.log(sRegex.test('123'))
console.log(sRegex.test('123sad'))

/* ***************************************** */

const wRegex = /\w/ // [ 0 - 9 ]

console.log('w')
console.log(wRegex.test('asd'))
console.log(wRegex.test(' '))
console.log(wRegex.test('123'))
console.log(wRegex.test('123sad'))