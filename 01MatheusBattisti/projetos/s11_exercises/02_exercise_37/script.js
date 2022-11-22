/* 
class Cart {
  constructor(items, theAmount, amount) {
    this.items = items
    this.theAmount = theAmount
    this.amount = amount
  }
*/

class Cart {
  constructor(items, theAmount, amount) {
    this.items = items;
    this.theAmount = theAmount;
    this.amount = amount;
  }

  addItem(item) {

    let counter = 0;

    for(let itemCart in this.items) {
      if(this.items[itemCart].id == item.id) {
        this.items[itemCart].theAmount += item.theAmount;
        counter = 1;
      }
    }

    if(counter == 0) {
      this.items.push(item);
    }

    this.theAmount += item.theAmount;
    this.amount += item.price * item.theAmount;

  }

  removeItem(item) {

    for(let itemCart in this.items) {
      if(this.items[itemCart].id == item.id) {
        
        let obj = this.items[itemCart];
        let index = this.items.findIndex(function(obj) { return obj.id == item.id});

        this.theAmount -= this.items[itemCart].theAmount;
        this.amount -= this.items[itemCart].price * this.items[itemCart].theAmount;

        this.items.splice(index, 1);

      }
    }
  }

}

let cart = new Cart([
  {
    id: 01,
    name: "shirt",
    theAmount: 1,
    price: 20
  },
  {
    id: 02,
    name: "Pants",
    theAmount: 2,
    price: 50
  }
], 3, 120);

console.log(cart);

cart.addItem({id:01, name:"shirt", theAmount:2, price: 20});

console.log(cart);

cart.addItem({id:03, name:"Cap", theAmount:1, price: 15});

console.log(cart);

cart.removeItem({id: 01, name: "shirt", theAmount: 1, price: 20});

console.log(cart);