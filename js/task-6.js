function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const input = document.querySelector("input");
const btnCreate = document.querySelector(`[data-create]`);
const btnDestroy = document.querySelector(`[data-destroy]`);
const createDiv = document.querySelector("#boxes");

function createBoxes(amount) {
const size = 30;
  for (let i = 0; i < amount; i+=1 ) {
    const newDiv = document.createElement(`div`);
    const newSize = size + i * 10;
    newDiv.style.height = `${newSize}px`;
    newDiv.style.width = `${newSize}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    createDiv.append(newDiv);
  }
};

btnCreate.addEventListener("click", (event) => {
  const amount = + input.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
});

btnDestroy.addEventListener('click', (event) => {
  createDiv.innerHTML = '';
});

