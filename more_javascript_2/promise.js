const fetchData = () => {
  return new Promise((resolve, reject) => {
    const status = true;
    if (status) {
      resolve({ name: "hero" });
    } else {
      reject("reject");
    }
  });
};
fetchData().then((res) => console.log(res));
const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/photos",
];
Promise.all(
  urls.map((url) => {
    return fetch(url)
      .then((res) => res.json)
      .then((data) => data);
  })
)
  .then((res) => res)
  .then((data) => console.log(data));
