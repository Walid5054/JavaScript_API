function loadCatagories() {
  //fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //convert promise to json
    .then((res) => res.json())
    //send data to display
    .then((data) => displayCatagories(data.categories));
}

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideo(data.videos));
}

function displayCatagories(catagories) {
  //get the container
  const catagoryContainer = document.getElementById("catagory-container");
  //loop on array of object
  for (let cat of catagories) {
    console.log(cat);
    // create elemetn
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `<button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>`;
    // append the element
    catagoryContainer.append(categoryDiv);
  }
}
const displayVideo = (videos) => {
  console.log(videos);
  const videoContainer = document.getElementById("video-container");
  videos.forEach((video) => {
    // console.log(video);
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
    
     <div class="card bg-base-100  shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
     `;
    videoContainer.append(videoCard);
  });
};
loadCatagories();
loadVideos();
