function createDog(breed, paws, color) {
  let dog = Object.create({})
  dog.breed = breed
  dog.paws = paws
  dog.color = color
  dog.bark = function() {
    console.log('Au au ...')
  }
  return dog
}

let doberman = createDog('Doberman', 4, 'black' )

console.log(doberman)

doberman.bark()