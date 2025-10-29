function sum() {
  let cnt = 0;
  return function () {
    cnt += 1;
    console.log(cnt);
  };
}
const result = sum();
result();
result();
