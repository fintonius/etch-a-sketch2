let gridSize = document.getElementById('input').value;
let sizeBlurb = document.getElementById('size-blurb');

function createGrid () {

	const gridContainer = document.getElementById('grid-container');

	const grid = document.createElement('div');
	grid.setAttribute('id', 'grid');
	let gridHeightAndWidth = 500;
	grid.style.height = gridHeightAndWidth + 'px';
	grid.style.width = gridHeightAndWidth + 'px';
	
	// create vertical row of divs
	for (let j = 0; j <= gridSize; j++) {
		let horizontalLine = document.createElement('div');
		horizontalLine.classList.add('line');
	
		// create horizontal row of divs inside vertical divs
		for (let i = 0; i <= gridSize; i++) {
			let square = document.createElement('div');
			square.classList.add('square');
			square.addEventListener('mouseover', () => square.style.backgroundColor = "lightBlue");
			horizontalLine.appendChild(square);
			};
		grid.appendChild(horizontalLine);
	};
	gridContainer.appendChild(grid);	
	sizeBlurb.textContent = `The current grid dimensions are ${gridSize} squares x ${gridSize} squares.`
};

function clearGrid () {
	let gridRemove = document.getElementById('grid');
	gridRemove.remove();
};

function submitSize () {
	gridSize = document.getElementById('input').value;
	if (gridSize > 100) {
		alert('too much')} else { 
			clearGrid();
			createGrid();
		};
	};

//different colour options
//an eraser option
//opacity option
//THE ABOVE SHOULD NOT RESET THE CURRENT GRID