class dog {
  constructor(breed, color) {
    this.breed = breed
    this.color = color
  }

  bark() {
    console.log('Au au au ...')
  }
}

dog.prototype.paws = 4

let labrador = new dog('Labrador', 'Yellow')

console.log(labrador.paws)

labrador.brak