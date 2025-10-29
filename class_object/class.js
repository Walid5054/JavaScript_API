class Product {
  constructor(name, price, brand, malik) {
    this.name = name;
    this.price = price;
    this.brandName = brand;
    this.malik = malik;
  }
  details() {
    console.log(`ami ${this.name} product er details`);
  }
}
const iphone = new Product("iphone", "2323", "apple", "walid");
console.log(iphone);
iphone.details();
const redmi = new Product("xiaomi", "5454", "china", "walid");
console.log(redmi);
redmi.details();
