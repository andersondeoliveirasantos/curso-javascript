const person = {
  hands: 2
}

console.log(Object.getPrototypeOf(person))
console.log(Object.getPrototypeOf(person) === Object.prototype)

console.log(person.hasOwnProperty('hands'))