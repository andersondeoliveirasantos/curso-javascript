class dog {
  constructor(breed, color) {
    this.breed = breed
    this.color = color
  }
  bark() {
    console.log('Au au au ...')
  }
}

dog.prototype.breed = 'NDR'

let paws = Symbol()

dog.prototype[paws] = 4

let labrador = new dog('Labrador', 'Yellow')

labrador.bark()

console.log(dog.prototype.breed)
console.log(labrador.breed)

// Acessando symbol
console.log(dog.prototype[paws])

console.log(labrador[paws])