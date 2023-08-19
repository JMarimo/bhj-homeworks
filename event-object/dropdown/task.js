const link = document.querySelector(".dropdown__list");
const dropdownTtem = document.querySelectorAll(".dropdown__item");
const value = document.querySelector(".dropdown__value");

function clickItem() {
  dropdownTtem.forEach((element) => {
    element.onclick = () => {
      value.textContent = element.textContent;
      link.classList.remove("dropdown__list_active");
      return false;
    };
  });
}

function activeList() {
  link.classList.toggle("dropdown__list_active");
  clickItem();
}

value.addEventListener("click", activeList);