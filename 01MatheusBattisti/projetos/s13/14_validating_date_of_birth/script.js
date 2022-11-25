const validatingDateOfBirth = /[0-31]{2}[/][0-12]{2}[/][1920-2030]{4}/

console.log(validatingDateOfBirth.test('24/10/1981'))
console.log(validatingDateOfBirth.test('5/2/2000'))
console.log(validatingDateOfBirth.test('24-10-1981'))
console.log(validatingDateOfBirth.test('24/10/81'))
console.log(validatingDateOfBirth.test('12/12/1999'))
console.log(validatingDateOfBirth.test('99/99/9999'))