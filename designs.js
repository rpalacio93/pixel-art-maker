// Select color input
let pixelColor = document.getElementById('colorPicker');

// Select size input
let grid = document.getElementById('pixelCanvas');
let gridSize = document.getElementById('sizePicker');
let gridHeight = document.getElementById('inputHeight');
let gridWidth = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
gridSize.addEventListener('submit', (event) => {
  event.preventDefault();
  makeGrid(gridHeight.value, gridWidth.value);
});

// Create grid depending on user input
function makeGrid(height, width){
  // Resets grid
  grid.innerHTML = "";
  for (let x = 0; x <= height - 1; x++){
    let row = grid.insertRow(x);
    for (let y = 0; y <= width - 1; y++){
      let cell = row.insertCell(y);
      // Allows the user to color a specific cell
      cell.addEventListener('click', (event) => {
        cell.style.backgroundColor = pixelColor.value;
      });
    }
  }
}
