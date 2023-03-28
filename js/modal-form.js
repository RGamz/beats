const openButtonM = document.querySelector("#sendButton");
const modalM = document.querySelector(".section__modal-form");
const closeBtnM = document.querySelector("#closeBtn__form");

openButtonM.addEventListener("click", e => {
  e.preventDefault();
  modalM.style.display = "flex";
})

closeBtnM.addEventListener("click", e => {
  e.preventDefault();
  modalM.style.display = "none";
})