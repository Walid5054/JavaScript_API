const person = { name: "walid", age: 10 };
function sum(obj) {
  console.log(obj);
  obj.name = "hero alom";
}
sum(person);
console.log(person);
