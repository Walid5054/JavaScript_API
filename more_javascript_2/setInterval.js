console.log(1);
console.log(2);
console.log(3);
const cloakId = setInterval(() => {
  console.log("hello");
  clearInterval(cloakId);
}, 3000);

console.log(4);
console.log(5);
console.log(6);
