let dog = {
  paws: 4,
  breed: 'NDR', // No defined race
  barks: function() {
    console.log('Au Au ...')
  }
}

let labrador = Object.create(dog)

labrador.barks()

labrador.breed = 'Labrador'

console.log(labrador.breed)
console.log(dog.breed)

let germanShepherd = Object.create(dog)

germanShepherd.breed = 'German Shephers'

console.log(germanShepherd)