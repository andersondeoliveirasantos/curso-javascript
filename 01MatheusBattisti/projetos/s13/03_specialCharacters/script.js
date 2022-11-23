const scoreDot = /./ // Ponto regex

console.log('.')
console.log(scoreDot.test('ads'))
console.log(scoreDot.test('  '))
console.log(scoreDot.test('123'))
console.log(scoreDot.test('123sad'))

console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXX')

const dRegex = /\d/ // O mesmo que => [0-9]

console.log('d')
console.log(dRegex.test('ads'))
console.log(dRegex.test('  '))
console.log(dRegex.test('123'))
console.log(dRegex.test('123sad'))

console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXX')

const dRegex2 = /\D/ 
console.log('D')
console.log(dRegex2.test('ads'))
console.log(dRegex2.test('  '))
console.log(dRegex2.test('123'))
console.log(dRegex2.test('123sad'))

console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXX')

const sRegex = /\s/ 
console.log('s')
console.log(sRegex.test('ads'))
console.log(sRegex.test('  '))
console.log(sRegex.test('123'))
console.log(sRegex.test('123sad'))

console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXX')

const wRegex = /\w/ 
console.log('w')
console.log(wRegex.test('ads'))
console.log(wRegex.test('  '))
console.log(wRegex.test('123'))
console.log(wRegex.test('123sad'))