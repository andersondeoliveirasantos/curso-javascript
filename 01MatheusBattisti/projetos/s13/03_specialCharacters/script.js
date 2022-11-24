const day = /\d\d/

console.log(day.test('2019'))
console.log(day.test('2019') && '2019'.length == 2) // More specific

console.log(day.test('asd'))

console.log(day.test('05'))
console.log(day.test('05') && '05'.length == 2) // More specific

console.log(day.test('asd12'))

const threeLetterWords = /\w\w\w/

console.log(threeLetterWords.test('asd'))
console.log(threeLetterWords.test('asdd'))
console.log(threeLetterWords.test('as'))