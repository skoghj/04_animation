const toggleBtn = document.querySelector(".nav");
const menu = document.querySelector("#bugermenu");

menu.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
});
