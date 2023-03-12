const openButton = document.querySelector("#openOverlay");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#closeBtn");

openButton.addEventListener("click", e => {
  e.preventDefault();
  modal.style.display = "flex";
})

closeBtn.addEventListener("click", e => {
  e.preventDefault();
  modal.style.display = "none";
})