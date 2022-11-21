class Cart {
  constructor(items, theAmount, amount) {
    this.items = items
    this.theAmount = theAmount
    this.amount = amount
  }

  addItem(item) {
    for(let itemCart in this.items)
      if(this.items[itemCart].id == item.id) {
        this.items[itemCart].theAmount += item.theAmount
      }
  }

  this.theAmount += item.theAmount
  this.amount += item.price * item.theAmount


}

let cart = new Cart([
  {
    id: 01,
    name: 'shirt',
    theAmount: 1,
    price: 20
  },
  {
    id: 02,
    name: 'pants',
    theAmount: 2,
    price: 50
  }
], 3, 120)

console.log(cart)