const cashRegister = {
  itemsForSale: [
    { name: "Phone", price: 300 },
    { name: "Smart TV", price: 220 },
    { name: "Gaming Console", price: 150 },
  ],
  shoppingCart: [],
  addItem: function (name) {
    let foundItem = this.itemsForSale.find(function (item) {
      return item.name === name;
    });
    if (foundItem) {
      this.shoppingCart.push(foundItem);
      console.log(`Adding ${name} to your shopping cart`);
    } else {
      console.log(`Sorry, we don't sell ${name} here!`);
    }
  },
  calculateTotalPrice: function () {
    let totalPriceAmount = 0;
    this.shoppingCart.forEach(function (purchasedItem) {
      totalPriceAmount += purchasedItem.price;
    });
    return totalPriceAmount;
  },
  pay: function (amount) {
    let totalPriceAmount = this.calculateTotalPrice();
    if (totalPriceAmount > 500) {
      totalPriceAmount -= totalPriceAmount * 0.1;
      console.log(
        `You get a 10% discount and your total price is ${totalPriceAmount}`
      );
    }
    if (amount >= totalPriceAmount) {
      if (amount - totalPriceAmount > 0) {
        console.log(`Here's your ${amount - totalPriceAmount} change`);
      }
      console.log(`Thanks for your purchase! Hope you come again`);
    } else {
      console.log(
        "Sorry, but you don't have enough money to purchase your items"
      );
    }
  },
};
cashRegister.addItem("Phone");
cashRegister.addItem("Smart TV");
console.log(cashRegister.calculateTotalPrice());
cashRegister.pay(700);