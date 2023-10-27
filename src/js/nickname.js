const refs = {
  backdropEl: document.querySelector("[data-nickname-backdrop]"),
  modalEl: document.querySelector(".nickname"),
  closeBtnEl: document.querySelector("[data-closebtn-nickname]"),
  formEl: document.querySelector("[data-form-nickname]"),
  openModalEl: document.querySelector("[data-nickname-open]"),
  nicknameTextEl: document.querySelector("[data-nickname-text]"),
};
const { backdropEl, modalEl, closeBtnEl, formEl, openModalEl, nicknameTextEl } =
  refs;

if (localStorage.getItem("playerNickname")) {
  nicknameTextEl.textContent = localStorage.getItem("playerNickname");
}
if (!localStorage.getItem("playerNickname")) {
  document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
      backdropEl.classList.remove("is-hidden-nickname");
    }, 750);
  });
}

backdropEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("nickname-backdrop")) {
    backdropEl.classList.add("is-hidden-nickname");
  }
});
closeBtnEl.addEventListener("click", (e) => {
  if (!localStorage.getItem("playerNickname")) {
    const confirmResp = confirm("Ви точно хочете грати без імені?");
    if (confirmResp) {
      backdropEl.classList.add("is-hidden-nickname");
    } else {
      return;
    }
  } else {
    backdropEl.classList.add("is-hidden-nickname");
  }
});
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  formEl.nickname.classList.remove("input--error");
  let errors = 0;
  if (
    formEl.nickname.value === "" ||
    formEl.nickname.value.length > 15 ||
    formEl.nickname.value.length <= 2
  ) {
    errors++;
    formEl.nickname.classList.add("input--error");
  }
  if (errors === 0) {
    localStorage.setItem("playerNickname", formEl.nickname.value);
    nicknameTextEl.textContent = localStorage.getItem("playerNickname");
    backdropEl.classList.add("is-hidden-nickname");
  }
});

openModalEl.addEventListener("click", (e) => {
  backdropEl.classList.remove("is-hidden-nickname");
});
