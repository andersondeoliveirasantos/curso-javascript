function dog(breed, paws, color) {
  this.breed = breed
  this.paws = paws
  this.color = color
}

dog.prototype.howl = function() {
  console.log('Auuuuuuu ...')
}

dog.prototype.bark = function() {
  console.log('Au au au ...')
}

let husky = new dog('Husky', 4, 'gray')

husky.howl()
husky.bark()