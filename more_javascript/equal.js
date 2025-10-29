const num1 = 10;
const num2 = "10";
if (num1 == num2) {
  console.log("equal");
} else {
  console.log("not equal");
}

const n1 = 10;
const n2 = "10";
if (num1 === num2) {
  console.log("equal");
} else {
  console.log("not equal");
}
// non primitive cannot be compare
const ar1 = [];
const ar2 = [];
if (num1 === num2) {
  console.log("equal");
} else {
  console.log("not equal");
}
const arr1 = [];
const arr2 = arr1;
if (num1 === num2) {
  console.log("equal");
} else {
  console.log("not equal");
}
// type conversion
if (5 * "2" == 10) {
  console.log("equal");
} else {
  console.log("not equal");
}
