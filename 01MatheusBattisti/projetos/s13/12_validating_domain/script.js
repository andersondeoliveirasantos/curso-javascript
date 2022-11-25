const validatingDomain = /[?www.]\w+\.com.br|.com/

console.log(validatingDomain.test('www.google.com'))
console.log(validatingDomain.test('www.google.com.br'))
console.log(validatingDomain.test('www.time'))
console.log(validatingDomain.test('google.com.br'))