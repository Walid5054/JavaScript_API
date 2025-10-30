const LoadUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      showUser(data);
    });
};
const showUser = (user) => {
  const userContainer = document.getElementById("user");
  for (const use of user) {
    const li = document.createElement("li");
    li.innerText = use.name;
    userContainer.appendChild(li);
  }
};
