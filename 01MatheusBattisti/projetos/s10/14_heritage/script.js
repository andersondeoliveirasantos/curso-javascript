class mammal {
  constructor(paws) {
    this.paws = paws
  }
}

let coyote = new mammal(4)

console.log(coyote.paws)

class dog extends mammal {
  constructor(paws, breed) {
    super(paws, paws)
    this.breed = breed
  }

  bark() {
    console.log('Au au au ...')
  }
}

let pug = new dog(4, 'Pug')

console.log(pug.paws)

pug.bark()