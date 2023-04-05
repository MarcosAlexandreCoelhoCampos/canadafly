export function activeSlideInfo() {
  const activatorItems = document.querySelectorAll("[data-active]");
  const itemsToActive = document.querySelectorAll("[data-to-active]");

  activatorItems.forEach((itemToActive) => {
    itemToActive.addEventListener("click", checkActive);
  });

  function checkActive(e) {
    e.stopPropagation();
    const province = e.target.closest(".province");
    console.log(province.getAttribute("data-active"));
    if (province) fActive(province.getAttribute("data-active"));
  }

  function fActive(itemToFind) {
    itemsToActive.forEach((itemToActive) => {
      itemToActive.classList.remove("active");
      const item = itemToActive.getAttribute("data-to-active");
      if (itemToFind === item) itemToActive.classList.toggle("active");
    });
  }
}
