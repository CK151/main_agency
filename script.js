//hambuger menu toggler


const hambuger = document.querySelector(".hamburger"),
      close = document.querySelector(".close"),
      navUl = document.querySelector(".nav-ul");

hambuger.addEventListener("click", () => {
  navUl.classList.toggle("show");
  hambuger.classList.toggle("hide");
});


close.addEventListener("click", () => {
  navUl.classList.toggle("show");
  hambuger.classList.toggle("hide");
})

//modal section

const btn = document.querySelector(".search"),
      closeModal = document.querySelector(".close-modal");
      modal = document.querySelector(".modal");


btn.addEventListener("click", openPopup);
closeModal.addEventListener("click", closePopup);

function openPopup() {
  modal.style.display = "block";
}

function closePopup() {
  modal.style.display = "none";
}

//page animation

AOS.init({
  duration: 1000,
})