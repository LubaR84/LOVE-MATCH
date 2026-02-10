const startBtn = document.getElementById("startBtn");
const formPage = document.getElementById("formPage");
const loadingPage = document.getElementById("loadingPage");
const apiPage = document.getElementById("apiPage");
const lovePage = document.getElementById("lovePage");
const apiText = document.getElementById("apiText");

// safety check
console.log("JS loaded ✅");

startBtn.addEventListener("click", () => {
  // hide form
  formPage.classList.add("hidden");

  // show loading
  loadingPage.classList.remove("hidden");

  // after 3 seconds → API page
  setTimeout(() => {
    loadingPage.classList.add("hidden");
    apiPage.classList.remove("hidden");
    typeAPI();
  }, 3000);
});

function typeAPI() {
  const message = "API RESPONSE: TRUE 💖";
  apiText.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    apiText.textContent += message[i];
    i++;

    if (i >= message.length) {
      clearInterval(interval);

      // after typing → final page
      setTimeout(() => {
        apiPage.classList.add("hidden");
        lovePage.classList.remove("hidden");
      }, 1200);
    }
  }, 150);
}


