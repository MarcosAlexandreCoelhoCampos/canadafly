export function slideScroll() {
  const slide = document.querySelector("[data-slide]");

  let isDown = false;
  let startX;
  let scrollLeft;

  slide.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slide.offsetLeft;
    scrollLeft = slide.scrollLeft;
    slide.style.cursor = "grabbing";
  });

  slide.addEventListener("mouseleave", () => {
    isDown = false;
  });

  slide.addEventListener("mouseup", () => {
    isDown = false;
    slide.style.cursor = "grab";
  });

  slide.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slide.offsetLeft;
    const walk = (x - startX) * 1.5;
    slide.scrollLeft = scrollLeft - walk;
  });
}
