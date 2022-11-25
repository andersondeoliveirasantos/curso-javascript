/* Crie uma regex que valide endereços de IP
Ex: 127.0.0.1
Depois teste. */

const validateIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(validateIp.test('127.0.0.1'))
console.log(validateIp.test('8.8.8.8'))
console.log(validateIp.test('192.168.0.62'))

console.log(validateIp.test('192.168.0'))
console.log(validateIp.test('192'))
console.log(validateIp.test('afhafhalfha'))
console.log(validateIp.test('12312321'))
console.log(validateIp.test('1924.1648.04.62444'))
