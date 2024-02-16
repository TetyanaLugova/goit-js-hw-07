"use strict"

const listItem = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${listItem.length}`);

const titles = document.querySelectorAll(`h2`);

titles.forEach((title) => {
    console.log(`Category: ${title.textContent}`);
    const listItemChildren = title.parentElement.querySelectorAll(`ul>li`);
    console.log(`Elements: ${ listItemChildren.length }`);
})




