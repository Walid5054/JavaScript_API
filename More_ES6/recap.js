const products = [
  {
    id: 1,
    name: "iphone",
    color: "black",
    price: 1200,
    brand: "apple",
  },
  {
    id: 2,
    name: "samsung",
    color: "red",
    price: 1500,
    brand: "sam",
  },
  {
    id: 3,
    name: "xiaomi",
    color: "purple",
    price: 1000,
    brand: "china",
  },
  {
    id: 4,
    name: "xioami",
    color: "gold",
    price: 1999,
    brand: "china",
  },
  {
    id: 5,
    name: "iphone",
    color: "black",
    price: 1100,
    brand: "apple",
  },
];
const newProduct = products.map((p) => {
  if (p.brand == "apple") {
    p.price = p.price + 100;
  }
  return p;
});
console.log(newProduct);
const singleProduct = products.find((p) => p.id == 3);
console.log(singleProduct);
const newProduct2 = products.filter((p) => p.name == "iphone");
console.log(newProduct2);
