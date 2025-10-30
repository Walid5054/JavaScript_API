// write a function to display msg after five seconds
setTimeout(() => {
  console.log("message");
}, 5000);
// write a function pass two parameter display the value after seconds
function delayGreeting(name, delayTime) {
  setTimeout(() => {
    console.log("hello", name);
  }, delayTime);
}
delayGreeting("Alice", 2000);
// the ffunction logs a message after two sec it stops after 10s
function telljoke() {
  let cnt = 0;
  const time = setInterval(() => {
    cnt++;
    console.log("joke hahah ");
    if (cnt == 5) {
      clearInterval(time);
    }
  }, 2000);
}
telljoke();
// write async await that fetch data from api and logs a message
const loadData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    console.log("working correctly ", data);
  } catch {
    console.log("error");
  }
};
loadData();
