const dog = {
  breed: 'NDR',
  howl: function () {
    console.log('Auuuuuuuuuuuu ...')
  },
  growl: function () {
    console.log('grrrrrrr ...')
  },
  setBreed: function(breed) {
    this.breed = breed
  },
  getBreed: function() {
    return 'The breed is ' + this.breed
  }
}

console.log(dog.breed)

dog.setBreed('German Shepherd')

console.log(dog.breed)

console.log(dog.getBreed())