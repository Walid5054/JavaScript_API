const person = {
  name: "hena",
  age: 10,
  country: "bd",
};
for (key in person) {
  console.log(key);
  console.log(person[key]);
}
for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}
