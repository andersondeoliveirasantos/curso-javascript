const person = {
  hands: 2
}

// console.log(Object.getPrototypeOf(person))
// console.log(Object.getPrototypeOf(person) === Object.prototype)

// console.log(person.hasOwnProperty('hands'))

const newPerson = Object.create(person)

console.log(newPerson.hands)

console.log(newPerson.hasOwnProperty('hands'))

console.log(Object.getPrototypeOf(newPerson) === person)