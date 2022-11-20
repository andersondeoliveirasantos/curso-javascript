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
dog.prototype.paws = 4

let labrador = new dog('Labrador', 'Yellow')

console.log(labrador.paws)

labrador.bark()

console.log(dog.prototype.breed)
console.log(labrador.breed)