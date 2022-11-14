function sum(a ,b) {
  if( a === undefined || b === undefined) {
    console.log(`This function needs to have both arguments`)
  } else {
    return a + b
  }
}

console.log(sum(1))
console.log(sum(1, 2))

/* ********************************************** */

function salutation (name, age) {
  if(age === undefined) {
    console.log(`Hello ${name}`)
  } else {
    console.log(`Hello ${name}, you have ${age} years old`)
  }
}

salutation('Anderson')
salutation('Igor', 29)