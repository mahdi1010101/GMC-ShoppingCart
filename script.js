class product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class shoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  calculateProductSum() {
    return this.product.price * this.quantity;
  }
}

class shoppingCart {
  constructor() {
    this.shoppingCartItems = [];
  }

  getCartCount() {
    return this.shoppingCartItems.length;
  }

  addItem(shoppingCartItem) {
    if (this.shoppingCartItems.indexOf(shoppingCartItem) != -1) {
      this.shoppingCartItems[
        this.shoppingCartItems.indexOf(shoppingCartItem)
      ].quantity += shoppingCartItem.quantity;
    } else {
      this.shoppingCartItems.push(shoppingCartItem);
    }
  }

  removeItem(shoppingCartItem) {
    this.shoppingCartItems = this.shoppingCartItems.filter(
      (item) => item != shoppingCartItem
    );
  }
  displayItems() {
    this.shoppingCartItems.map((item) =>
      console.log(
        "ID " +
          item.product.id +
          " :" +
          item.product.name +
          ", Quantité :" +
          item.quantity
      )
    );
  }
}

product1 = new product(1, "PC DELL", 1120.5);
product2 = new product(2, "IPhone 11", 1400);
product3 = new product(3, "Air Pods", 99.95);

MyShoppingCart = new shoppingCart();

shoppingCartItem1 = new shoppingCartItem(product1, 3);
shoppingCartItem2 = new shoppingCartItem(product2, 1);
shoppingCartItem3 = new shoppingCartItem(product3, 2);

MyShoppingCart.addItem(shoppingCartItem1);
MyShoppingCart.addItem(shoppingCartItem2);
MyShoppingCart.addItem(shoppingCartItem3);

MyShoppingCart.displayItems();
MyShoppingCart.removeItem(shoppingCartItem1);
MyShoppingCart.displayItems();
