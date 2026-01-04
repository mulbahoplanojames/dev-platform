import { apiData } from "../data/apiData.js";
console.log("API", apiData);

// Function to create an API card element
function createApiCard(api) {
  return `
    <div class="group bg-card-dark rounded-xl p-5 flex flex-col gap-4 border border-[#293038] hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer relative overflow-hidden">
      <div class="flex justify-between items-start">
        <div class="flex gap-3 items-center">
          <div class="size-10 rounded-lg bg-[#293038] text-primary flex items-center justify-center border border-[#3e4856]">
            <span class="material-symbols-outlined">${api.icon}</span>
          </div>
          <div class="flex flex-col">
            <h3 class="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">
              ${api.name}
            </h3>
            <span class="text-xs text-green-400 font-mono bg-green-500/10 px-1.5 py-0.5 rounded w-fit mt-0.5">
              v${api.version} (${api.status})
            </span>
          </div>
        </div>
      </div>
      <p class="text-gray-400 text-sm leading-relaxed line-clamp-2">
        ${api.description}
      </p>
      <div class="flex items-center gap-3 text-xs text-gray-500 font-mono border-t border-[#293038] pt-3 mt-auto">
        <div class="flex items-center gap-1">
          <span class="size-2 rounded-full bg-green-500"></span>
          <span>${api.uptime} Uptime</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="material-symbols-outlined text-[14px]">speed</span>
          <span>${api.speed}</span>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 mt-2">
        ${api.tags
          .map(
            (tag) =>
              `<span class="px-2 py-1 rounded bg-[#293038] text-gray-400 text-xs font-medium">
            ${tag}
          </span>`
          )
          .join("")}
      </div>
      <a target="_blank" href="${api.path}" class="flex items-center gap-2">
          <p>View Details</p>
          <span class="material-symbols-outlined">arrow_forward</span>
          </a>
    </div>
  `;
}

// Function to render all API cards
function renderApiCards(apis) {
  const container = document.querySelector(".grid");
  if (container) {
    container.innerHTML = apis.map((api) => createApiCard(api)).join("");

    // Update the API count
    const countElement = document.querySelector(".text-white.text-\\[22px\\]");
    if (countElement) {
      countElement.textContent = `${apis.length} APIs Available`;
    }
  }
}

// Initialize the API cards
function initApiCards() {
  renderApiCards(apiData);

  // Event listeners for filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.category;
      const filteredApis =
        category === "all"
          ? apiData
          : apiData.filter((api) => api.category === category);
      renderApiCards(filteredApis);
    });
  });
}

// Initialize when the DOM is fully loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApiCards);
} else {
  initApiCards();
}
