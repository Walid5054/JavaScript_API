const handlePost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      displayPost(data);
    });
};
const displayPost = (post) => {
  const postContainer = document.getElementById("post-container");
  for (const pos of post) {
    console.log(pos);
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<h1>${pos.title}</h1>
    <p>${pos.body}</p>
    <button>details</button>  `;
    postContainer.appendChild(div);
  }
};
