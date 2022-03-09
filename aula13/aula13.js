let umaString = 'O rato roeu a roupa do rei de Roma !!!'

console.log(umaString)

console.log(umaString[4]) // Posições das letras
console.log(umaString[13])
console.log(umaString[-3])
console.log(umaString[7])
console.log(umaString[1])

console.log(`${umaString} em um lindo dia.`) // Concatenação

console.log(umaString.indexOf('o'))
console.log(umaString.lastIndexOf('x'))

console.log(umaString.match(/[a-z]/g)) // Expressão Regular

console.log(umaString.replace('Um', 'Outro'))
console.log(umaString.replace(/r/, '#'))
console.log(umaString.replace(/r/g, '#'))

console.log(umaString.length) // Verifica o tamanho da string

console.log(umaString.split('r'))
console.log(umaString.split(' ', 3))

console.log(umaString)
