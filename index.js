const upButton = document.getElementById("up");
const sections = document.querySelectorAll("section");

document.addEventListener("scroll", () => {
  if (document.scrollingElement.scrollTop > 80) {
    upButton.style.opacity = 1;
    document.getElementById("mouse").remove();
  } else {
    upButton.style.opacity = 0;
  }
});

upButton.addEventListener("click", () => {
  document.scrollingElement.scrollTop = 0;
});

document.querySelectorAll(".button").forEach((element) => {
  element.addEventListener("click", function scrollPag(event) {
    switch (event.target.innerText) {
      case "Home":
        document.scrollingElement.scrollTop = 0;
        break;
      case "Contact":
        document.scrollingElement.scrollTop = 5000;
        break;
      case "About":
        document.scrollingElement.scrollTop = 590;
        break;
      case "Work":
        document.scrollingElement.scrollTop = 1080;
        break;
    }
  });
});

document.getElementById("color-mode").addEventListener("click", (event) => {
  event.target.classList.toggle("dark_mode");
  sections.forEach((element) => {
    element.classList.toggle("dark_mode");
  });
});
