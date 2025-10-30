const handleUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  // .catch((erron) => console.log("error paici", erron));
};
handleUser();
