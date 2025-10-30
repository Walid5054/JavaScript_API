const person = {
  name: "walid",
  age: 10,
  friends: ["walid", "walid"],
};
const newPerson = JSON.stringify(person);
console.log(newPerson);
const newPerson2 = JSON.parse(newPerson);
console.log(newPerson);
