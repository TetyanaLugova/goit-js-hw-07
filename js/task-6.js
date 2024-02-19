function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const input = document.querySelector("input");
const btnCreate = document.querySelector(`[data-create]`);
const btnDestroy = document.querySelector(`[data-destroy]`);
const createDiv = document.querySelector("#boxes");

const box = document.createDocumentFragment()

function createBoxes(amount) {
createDiv.innerHTML = '';
const size = 30;
  for (let i = 0; i < amount; i+=1 ) {
    const newDiv = document.createElement(`div`);
    const newSize = size + i * 10;
    newDiv.style.height = `${newSize}px`;
    newDiv.style.width = `${newSize}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    box.append(newDiv);
  }
  createDiv.append(box);
};

btnCreate.addEventListener("click", (event) => {
  const amount = + input.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
});

btnDestroy.addEventListener('click', (event) => {
  createDiv.innerHTML = '';
});

