const refs = {
  backdropEl: document.querySelector("[data-backdrop-thanks]"),
  closeBtnEl: document.querySelector(".thanks__modal__close"),
  formRef: document.querySelector("[data-footer-form]"),
};

const { backdropEl, closeBtnEl, formRef } = refs;

function validateEmail(email) {
  const regExp =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return regExp.test(email);
}

formRef.addEventListener("submit", (e) => {
  e.preventDefault();
  let errors = 0;
  formRef.emailput.classList.remove("thanks__input--error");

  if (formRef.emailput.value === "") {
    errors += 1;
    formRef.emailput.classList.add("thanks__input--error");
    setTimeout(() => {
      formRef.emailput.classList.remove("thanks__input--error");
    }, 8000);
  }
  if (!validateEmail(formRef.emailput.value)) {
    errors++;
    formRef.emailput.classList.add("thanks__input--error");
    setTimeout(() => {
      formRef.emailput.classList.remove("thanks__input--error");
    }, 8000);
  }
  if (errors === 0) {
    formRef.emailput.value = "";
    document.body.classList.toggle("stop-scroll");
    backdropEl.classList.remove("is-hidden-thanks");
  }
});
backdropEl.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    document.body.classList.toggle("stop-scroll");
    backdropEl.classList.add("is-hidden-thanks");
  }
});
closeBtnEl.addEventListener("click", () => {
  document.body.classList.toggle("stop-scroll");
  backdropEl.classList.add("is-hidden-thanks");
});
