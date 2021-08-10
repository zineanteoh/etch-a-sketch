const DEFAULT_GRIDSIZE = 16;
const DEFAULT_MAXSIZE = 640;
const grid = document.createElement("div");
const resetButton = document.querySelector("#reset-grid");
const gridSlider = document.querySelector("#grid-slider");

grid.classList.add("grid");

document.querySelector(".container").appendChild(grid);
resetButton.addEventListener("click", resetGrid);
gridSlider.addEventListener("input", updateSlider);

function setupGrid(gridSize) {
  grid.style.width = "640px";
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    let gridCell = document.createElement("div");
    gridCell.addEventListener("mouseover", onMouseOver);
    gridCell.style.width = `${640 / gridSize}px`;
    gridCell.style.height = `${640 / gridSize}px`;
    grid.appendChild(gridCell);
  }
}

function onMouseOver() {
  this.style.backgroundColor = "pink";
}

function resetGrid() {
  let gridSize = gridSlider.value;
  grid.innerHTML = "";
  setupGrid(gridSize);
}

function updateSlider() {
  console.log(gridSlider.value);
  document.querySelector("#current-grid-size").textContent = gridSlider.value;
}

window.onload = () => {
  setupGrid(DEFAULT_GRIDSIZE);
};
