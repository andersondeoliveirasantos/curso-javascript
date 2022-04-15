/*
console.log('Line 00')
console.log('Line 01')
console.log('Line 02')
console.log('Line 03')
console.log('Line 04')
console.log('Line 05')
*/

// i = index

/*
for (let i = 0; i <= 500; i += 10) {
  console.log(`Line ${i}`)
}
*/

/*
// DECRESENTE
for (let i = 500; i >= 400; i -= 10) {
  console.log(`Line ${i}`)
}
*/

/*
for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? 'par' : 'impar'
  console.log(i, par)
}
*/

//                 0       1      2
const fruits = [
  'Maçã',
  'Pêra',
  'Uva',
  'Laranja',
  'Maracuja',
  'Banana',
  'Abacaxi'
]

for (let i = 0; i < fruits.length; i++) {
  console.log(`Index ${i}`, fruits[i])
}
