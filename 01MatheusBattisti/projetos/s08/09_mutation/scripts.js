let person = {
  name: 'Anderson'
}

let person2 = person

let person3 = {
  name: 'Tomaz'
}

console.log(person == person2)
console.log(person3 == person)
console.log(person3 == person2)


person2.name = 'Daniela'

console.log(person.name)

person.name = 'Alice'

console.log(person2.name)