export function activeModal() {
  const activatorItems = document.querySelectorAll("[data-active-modal]");
  const modal = document.querySelector(".modal-img");
  const modalImg = document.querySelector(".modal-img img");
  const modalText = document.querySelector(".modal-img p");

  activatorItems.forEach((activatorItem) => {
    activatorItem.addEventListener("click", openModal);
  });

  modal.addEventListener("click", closeModal);

  function openModal(e) {
    e.stopPropagation();
    const divImg = e.target.closest(".img-detail");
    if (divImg) {
      const src = divImg.firstElementChild.getAttribute("src");
      const alt = divImg.firstElementChild.getAttribute("alt");
      const text = divImg.lastElementChild.innerHTML;
      modalImg.setAttribute("src", src);
      modalImg.setAttribute("alt", alt);
      modalText.innerHTML = text;
      modal.classList.add("active");
    }
  }

  function closeModal(e) {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  }
}
