function dog(breed, paws, color) {
  this.breed = breed
  this.paws = paws
  this.color = color
  this.howl = function() {
    console.log('Auuuuuuu ...')
  }
}

let husky = new dog('Husky', 4, 'gray')

husky.howl()