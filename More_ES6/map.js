const number = [1, 2, 3, 4, 5];
const newArr = number.map((s) => s + 1);
console.log(newArr);
const friends = ["sokina", "jorina", "hena"];
const str = friends.map((element, index) => {
  console.log(index);
  return element;
});
console.log(str);
