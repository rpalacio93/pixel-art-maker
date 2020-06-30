// Select color input
var pixelColor = document.getElementById('colorPicker');

// Select size input
var grid = document.getElementById('pixelCanvas');
var gridSize = document.getElementById('sizePicker');
var gridHeight = document.getElementById('inputHeight');
var gridWidth = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
gridSize.addEventListener('submit', (event) => {
  event.preventDefault();
  makeGrid(gridHeight.value, gridWidth.value);
});

// Your code goes here!
function makeGrid(height, width){
  grid.innerHTML = "";
  for (let x = 0; x <= height - 1; x++){
    let row = grid.insertRow(x);
    for (let y = 0; y <= width - 1; y++){
      let cell = row.insertCell(y);
      cell.addEventListener('click', (event) => {
        cell.style.backgroundColor = pixelColor.value;
      });
    }
  }
}
