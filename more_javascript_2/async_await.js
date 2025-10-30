const loadData = async () => {
  try {
    console.log("ami first");
    console.log("ami second");
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    console.log(data);
    const result = 10 + 10;
    console.log(result);
  } catch {
    console.log("error");
  }
};
loadData();
