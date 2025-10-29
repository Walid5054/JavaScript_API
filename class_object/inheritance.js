class Vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log("ami cholachol korte pari");
  }
}
class Bus extends Vehicle {
  constructor(name, price, seat) {
    super(name, price);
    this.seat = seat;
  }
  route() {
    console.log("Dhaka to coxs");
  }
}
class Truck extends Vehicle {
  constructor(name, price, load) {
    super(name, price);
    this.load = load;
  }
}
