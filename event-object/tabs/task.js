const tabs = Array.from(document.querySelectorAll(".tab"));
const tabContent = Array.from(document.querySelectorAll(".tab__content"));
tabs.forEach((element, index) => {
  element.addEventListener("click", () => {
    let lastIndex = tabs.findIndex((e) => e.classList.contains("tab_active"));
    tabs[lastIndex].classList.remove("tab_active");
    tabContent[lastIndex].classList.remove("tab__content_active");
    element.classList.add("tab_active");
    tabContent[index].classList.add("tab__content_active");
  });
});