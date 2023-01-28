// const btn = document.querySelectorAll(".open-modal-btn"); //Для одной кнопки
const btns = document.querySelectorAll(".open-modal-btn"); //Много кнопок
const form = document.querySelector(".search-modal");
const closeBtn = document.querySelector(".modal-close-button");

if (form) {
  btns.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      form.classList.add("is-active");
    });
  });

  closeBtn.addEventListener("click", () => {
    form.classList.remove("is-active");
  });
}
