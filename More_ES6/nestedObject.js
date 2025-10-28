const person = {
  name: "hena",
  age: 30,
  friends: ["korim ", "hero alom"],
  details: {
    job: "yes",
    isMarried: true,
    status: "not found",
    mother: {
      name: "dghsg",
    },
  },
};
console.log(person.details.father?.name); // it wont show error instead it will show undefined (optional chaining)
console.log(person["details"]["job"]);
