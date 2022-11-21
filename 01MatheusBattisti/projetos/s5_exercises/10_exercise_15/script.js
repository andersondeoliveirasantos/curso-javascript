let number = 41
let divisions = 0

for ( let i = 1; i <= number; i++) {
  if (number % i == 0) {
    divisions++
  }
}

if ( divisions == 2) {
  console.log(`The number ${number} is prime.`)
} else {
  console.log( `The number ${number} is not prime.`)
}