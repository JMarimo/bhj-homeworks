const fontSize = Array.from(document.querySelectorAll(".font-size"));
const book = document.getElementById("book");

fontSize.forEach((element) => {
    element.addEventListener("click", (ev) => {
        ev.preventDefault();
        let lastIndex = fontSize.findIndex ((e) =>
        e.classList.contains("font-size_active")
    );
    fontSize[lastIndex].classList.remove("font-size_active");
    element.classList.add("font-size_active");
    book.classList.remove("book_fs-small", "book_fs-big");
    book.classList.add(`book_fs-${element.dataset.size}`);
  });
});