const notab = /[^ab]/

console.log(notab.test('a'))
console.log(notab.test('Here is A'))

/* ***************************************** */

const notToaz = /[^a-z]/

console.log(notToaz.test('asa'))
console.log(notToaz.test('123'))
console.log(notToaz.test('dajdhfjahghsrh4jhuoshgoad'))

/* ***************************************** */

const az = /[a-z]/

console.log(az.test('dajdhfjahghsrhjhuoshgoad'))

