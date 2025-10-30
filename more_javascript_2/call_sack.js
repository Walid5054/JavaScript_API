const a = 10;
const first = () => {
  second();
  console.log("ami first");
};
const second = () => {
  third();
  console.log("hello ami second");
};
const third = () => {
  console.log("aami third");
};
const b = 20;
first();
console.log("ami sobar ses e");
