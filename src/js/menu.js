(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  const modalRef = document.querySelector("[data-backdrop]");

  // const refs = {
  //   closeModalBtn: document.querySelector('[data-modal-close]'),
  //   };

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");

    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");

    modalRef.classList.toggle("is-hidden");
  });
})();
