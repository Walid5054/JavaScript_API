const person = {
  name: "hena",
  age: 10,
  country: "bd",
};
console.log(Object.keys(person), Object.values(person));
console.log(Object.entries(person));
// Object.seal(person);
Object.freeze(person); //no property will be change add in person
person.status = "not found";
