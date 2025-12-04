// fetch category data
function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
};

const loadCategoryVideos = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayVideos(data?.category);
      const categoryButton = document.getElementById(`btn-${id}`);
      categoryButton.classList.add("active");
    });
};

const displayVideos = (videos) => {
  // get videos container element
  const videosContainer = document.getElementById("videosContainer");
  videosContainer.innerHTML = "";

  if (videos.length === 0) {
    videosContainer.innerHTML = `
      <div
        class="col-span-full flex flex-col justify-center items-center space-y-8">
          <img src="./assets/Icon.png" alt="novideo_icon" />
          <h3 class="text-2xl font-bold w-[300px] text-center">
          Oops!! Sorry, There is no content here
        </h3>
      </div>
    `;
    return;
  }

  videos.forEach((video) => {
    // create element
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
        <div class="card bg-base-100 shadow-sm">
            <figure class="relative">
              <img
                class="w-full h-[200px] object-cover"
                src="${video?.thumbnail}"
                alt="video_thumbnail"
              />
              <span
                class="absolute bottom-3 right-3 text-white bg-black p-4 rounded-md text-sm"
                >3 hrs 45 min</span
              >
            </figure>
            <div class="card-body">
              <div class="flex gap-6">
                <!-- avatar -->
                <div class="profile">
                  <div class="avatar">
                    <div
                      class="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2"
                    >
                      <img
                        src="${video?.authors[0]?.profile_picture}"
                      />
                    </div>
                  </div>
                </div>
                <!-- video info -->
                <div class="info space-y-2">
                  <h2 class="text-lg font-semibold">${video?.title}</h2>
                  <p class="flex gap-4 items-center text-lg text-gray-400">
                    ${video?.authors[0]?.profile_name}
                    <img
                      class="w-8 h-8"
                      src="https://img.icons8.com/?size=48&id=2sZ0sdlG9kWP&format=png"
                      alt="verifyed_badge"
                    />
                  </p>
                  <p class="text-lg text-gray-400">${video?.others?.views}</p>
                </div>
              </div>
            </div>
        </div>
    `;
    videosContainer.appendChild(videoCard);
  });
};

function displayCategories(categories) {
  const categoryContainer = document.getElementById("category-container");
  for (let i = 0; i < categories.length; i++) {
    // get single category
    const category = categories[i];
    // create element
    const containerDiv = document.createElement("div");
    containerDiv.innerHTML = `
    <button id="btn-${category?.category_id}" onclick="loadCategoryVideos(${category?.category_id})" class="btn hover:bg-[#FF1F3D] hover:text-white hover:font-bold">${category?.category}</button>
    `;
    // add button on the categoryContainer
    categoryContainer.appendChild(containerDiv);
  }
}

loadCategories();
