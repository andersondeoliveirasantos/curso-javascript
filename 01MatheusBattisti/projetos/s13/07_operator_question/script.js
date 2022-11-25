const pattern = /Abacax?i/ // Padrão

console.log(pattern.test('Abacaxi'))
console.log(pattern.test('Abacai'))

const pattern2 = /\d+\w?/

console.log(pattern2.test('123'))
console.log(pattern2.test('123a'))
console.log(pattern2.test('123 '))