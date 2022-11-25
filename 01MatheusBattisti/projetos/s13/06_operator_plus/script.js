const oneOrMoreNumbres = /\d+/

console.log(oneOrMoreNumbres.test('1518'))
console.log(oneOrMoreNumbres.test((' ')))
console.log(oneOrMoreNumbres.test('dfjdgp'))
console.log(oneOrMoreNumbres.test('1'))
console.log(oneOrMoreNumbres.test('151846465454465456498'))