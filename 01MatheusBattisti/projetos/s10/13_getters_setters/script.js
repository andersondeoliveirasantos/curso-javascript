class dog {
  constructor(breed, color) {
    this.breed = breed
    this.color = color
  }
  bark() {
    console.log('Au au au ...')
  }

  get getColor( ) {
    return this.color
  }

  set setColor(color) {
    this.color = color
  }
}

let germanShepherd = new dog('German Shepherd', 'no color')

console.log(germanShepherd)

germanShepherd.setColor = 'Brown'

console.log(germanShepherd.getColor)