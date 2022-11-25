const validatingEmail = /\w+@\w+\.\w+/

console.log(validatingEmail.test('andersonde1981@gmail.com'))
console.log(validatingEmail.test('Daniela@gmail'))
console.log(validatingEmail.test('gmail.com'))
console.log(validatingEmail.test('Alice1010oficial@gmail.com.br'))