var fullWindow = document.querySelector("html");
var btn = document.querySelector("#btn1");
var suN = document.querySelector("#sun");
var mooN = document.querySelector("#moon");
var savedTheme = localStorage.getItem("theme");



// On page load, check the saved theme
if (savedTheme === "dark") {
  fullWindow.classList.add("dark");
  suN.classList.add("hidden");
  mooN.classList.remove("hidden");
}

// Save theme preference on toggle
btn.addEventListener("click", () => {
  fullWindow.classList.toggle("dark");
  suN.classList.toggle("hidden");
  mooN.classList.toggle("hidden");

  const isDark = fullWindow.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});