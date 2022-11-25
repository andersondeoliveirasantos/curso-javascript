const zipCode = /\d{5}-\d{3}/

console.log(zipCode.test('88117-500'))
console.log(zipCode.test('asd'))
console.log(zipCode.test('881-50'))
console.log(zipCode.test('99999-999'))

const phoneNumber = /\(\d{2}\)\d{4,5}-\d{4}/

console.log(phoneNumber.test('(48)99999-9999'))
console.log(phoneNumber.test('(48)55555-4444'))