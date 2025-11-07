const showLoader = () => {
  document.getElementById("loader").classList.remove("hidden");
  document.getElementById("video-container").classList.add("hidden");
};
const hideLoader = () => {
  document.getElementById("loader").classList.add("hidden");
  document.getElementById("video-container").classList.remove("hidden");
};

function loadCatagories() {
  //fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //convert promise to json
    .then((res) => res.json())
    //send data to display
    .then((data) => displayCatagories(data.categories));
}

function removeActive() {
  const activeButtons = document.getElementsByClassName("active");
  for (let btn of activeButtons) {
    btn.classList.remove("active");
  }
}
const showDetails = (videoId) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayVideoDetails(data.video));
};

const displayVideoDetails = (video) => {
  document.getElementById("video_details").showModal();
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
   <div class="card bg-base-100 image-full  shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>

  </div>
</div>
  
  `;
};

function loadVideos(searchText = "") {
  showLoader();
  fetch(
    `https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`
  )
    .then((response) => response.json())
    .then((data) => {
      removeActive();
      document.getElementById("btn-all").classList.add("active");
      displayVideo(data.videos);
    });
}
const loadCatagoryVideos = (id) => {
  showLoader();
  const url = ` https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickButton = document.getElementById(`btn-${id}`);
      clickButton.classList.add("active");
      displayVideo(data.category);
    });
};

function displayCatagories(catagories) {
  //get the container

  const catagoryContainer = document.getElementById("catagory-container");
  //loop on array of object
  for (let cat of catagories) {
    console.log(cat);
    // create elemetn
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `<button id="btn-${cat.category_id}" onclick="loadCatagoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>`;
    // append the element
    catagoryContainer.append(categoryDiv);
  }
}
const displayVideo = (videos) => {
  console.log(videos);
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";
  if (videos.length == 0) {
    videoContainer.innerHTML = `      <div
        class="col-span-full flex flex-col justify-center items-center py-20 text-center"
      >
        <img class="w-[120px]" src="/Project/Icon.png" alt="" />
        <h2 class="text-2xl">OOps sorry no video available</h2>
      </div>`;
    hideLoader();
    return;
  }
  videos.forEach((video) => {
    // console.log(video);
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
    
    <div class="card bg-base-100">
      <figure class="relative">
        <img class="w-full h-[200px] object-cover" src="${
          video.thumbnail
        }" alt="Shoes" />
        <span
          class="absolute bottom-2 right-2 text-white bg-black px-2 text-sm rounded"
          >3hrs 56min ago</span
        >
      </figure>
      <div class="flex gap-3 px-0 py-5">
        <div class="profile">
          <div class="avatar">
            <div
              class=" ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2"
            >
              <img class=""
                src="${video.authors[0].profile_picture}"
              />
            </div>
          </div>
        </div>
        <div class="intro">
          <h2 class="font-semibold">${video.title}</h2>
          <p class="text-sm text-gray-400 flex gap-1">
            ${video.authors[0].profile_name}
            ${
              video.authors[0].verified == true
                ? `            <img
              class="w-5 h-5"
              src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png"
              alt=""
            />`
                : ``
            }

          </p>
          <p class="text-sm text-gray-400 flex gap-1">${
            video.others.views
          } views</p>
        </div>
      </div>
      <button onclick="showDetails('${
        video.video_id
      }')" class="btn btn-block">Show Details</button>
    </div>
     `;
    videoContainer.append(videoCard);
  });
  hideLoader();
};
document.getElementById("search-input").addEventListener("keyup", (e) => {
  const input = e.target.value;
  loadVideos(input);
});
loadCatagories();
