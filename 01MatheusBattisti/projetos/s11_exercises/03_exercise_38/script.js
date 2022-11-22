class Address {
  constructor(street, district, city, state) {
    this.street = street
    this.district = district
    this.city = city
    this.state = state
  }

  set newStreet(newStreet) {
    this.street = newStreet
  }  

  set newDistrict(newDistrict) {
    this.district = newDistrict
  }

  set newCity(newCity) {
    this.city = newCity
  }

  set newstate(newState) {
    this.state = newState
  }

}

let address = new Address('Gaivotas street', 'Terrarium', 'São Joaquim', 'SC')

console.log(address)

address.newStreet = 'Pardais streer'

console.log(address)

address.newCity = 'São Paulo'

console.log(address)