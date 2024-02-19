function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const bodyColor = document.querySelector(".widget");
const spanColor = document.querySelector(".color");
const btn = document.querySelector(".change-color");
btn.addEventListener("click", (event) => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = bodyColor.style.backgroundColor;
});

