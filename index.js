const DEFAULT_GRIDSIZE = 16;
const grid = document.createElement("div");

grid.classList.add("grid");

document.querySelector(".container").appendChild(grid);

function setupGrid(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    let gridCell = document.createElement("div");
    gridCell.addEventListener("mouseover", onMouseOver);
    grid.appendChild(gridCell);
  }
}

function onMouseOver() {
  this.style.backgroundColor = "pink";
}

window.onload = () => {
  setupGrid(DEFAULT_GRIDSIZE);
};
