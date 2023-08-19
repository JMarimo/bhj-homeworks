const reveal = document.querySelectorAll(".reveal");

function isVisible(el) {
  const { bottom, top } = el.getBoundingClientRect();
  if (bottom < 0 || top > window.innerHeight) {
    return false;
  } else {
    return true;
  }
}

function addClass(el) {
  if (isVisible(el)) {
    el.classList.add("reveal_active");
  } else {
    el.classList.remove("reveal_active");
  }
}

reveal.forEach((el) => {
  window.addEventListener("scroll", () => addClass(el));
});