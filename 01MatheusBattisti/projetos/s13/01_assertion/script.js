const reg1 = new RegExp('ball')

console.log(reg1.test('Have ball?'))
console.log(reg1.test('There is not'))

const reg2 = /ball/

let text = 'There is a ball in the basket' // Tem bola na cesta

console.log(reg1.test('Have ball?'))
console.log(reg1.test('There is not'))

console.log(reg2.test(text))

console.log(/square/.test('Where is a square')) // Onde tem um quadrado.
console.log(/square/.test('427678675786786square757575375357375372'))