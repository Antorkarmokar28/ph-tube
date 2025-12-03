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

const displayVideos = (videos) => {
  // get videos container element
  const videosContainer = document.getElementById("videosContainer");
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
                        src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                      />
                    </div>
                  </div>
                </div>
                <!-- video info -->
                <div class="info space-y-2">
                  <h2 class="text-xl font-bold">Python full course for free</h2>
                  <p class="flex gap-4 items-center text-lg text-gray-400">
                    Awlad hossain
                    <img
                      class="w-8 h-8"
                      src="https://img.icons8.com/?size=48&id=2sZ0sdlG9kWP&format=png"
                      alt="verifyed_badge"
                    />
                  </p>
                  <p class="text-lg text-gray-400">91k views</p>
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
    <button class="btn hover:bg-[#FF1F3D] hover:text-white hover:font-bold">${category.category}</button>
    `;
    // add button on the categoryContainer
    categoryContainer.appendChild(containerDiv);
  }
}

loadCategories();
loadVideos();
