//slider for grid size, 1 - 100 - this will require a lot more work than I anticipated so use a branch?!
//clean up the layout in CSS

let gridSize = document.getElementById('input').value;
let sizeBlurb = document.getElementById('size-blurb');
let gridHeightAndWidth = 500;
let squareColor = 'black';

function createGrid () {

	const gridContainer = document.getElementById('grid-container');

	const grid = document.createElement('div');
	grid.setAttribute('id', 'grid');
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
		horizontalLine.appendChild(square);
		};

		grid.appendChild(horizontalLine);
	};
	
	gridContainer.appendChild(grid);

	sizeBlurb.textContent = `The current grid dimensions are ${gridSize} squares x ${gridSize} squares.`

	gridSquareColor();
};

let randomBtn = document.getElementById('random');
	randomBtn.addEventListener('click', () => {
		rainbowBtn = false,
		randomBtn = true,
		eraserBtn = false,
		shaderBtn = false,
		squareColor = changeColor()
	});

let eraserBtn = document.getElementById('eraser');
	eraserBtn.addEventListener('click', () => {
		rainbowBtn = false,
		randomBtn = false,
		eraserBtn = true,
		shaderBtn = false,
		squareColor = 'white'
	});

let shaderBtn = document.getElementById('shader');
	shaderBtn.addEventListener('click', () => {
		rainbowBtn = false,
		randomBtn = false,
		eraserBtn = false,
		shaderBtn = true,
		squareColor = 'red'
	});

let rainbowBtn = document.getElementById('rainbow');
	rainbowBtn.addEventListener('click', () => {
		rainbowBtn = true,
		randomBtn = false,
		eraserBtn = false,
		shaderBtn = false
	});

function gridSquareColor() {
	let square = document.querySelectorAll('.square');
		square.forEach(e => {
			e.addEventListener('mouseover', () => {
				if (eraserBtn === true || randomBtn === true) {
					e.style.opacity = 1;
					e.style.backgroundColor = squareColor;
				} else if (rainbowBtn === true) {
						e.style.opacity = 1;
						e.style.backgroundColor = changeColor();
				} else if (shaderBtn === true) {					
						e.style.opacity = 1;
						e.addEventListener('mouseenter', () => { 
							if (shaderBtn === true) {
							e.style.opacity -=.1
							}
						})				
				} else {
						e.style.opacity = 1;
						e.style.backgroundColor = squareColor;
				};
			});
		});
	};

function randomNumber() {
	return Math.floor(Math.random() * 255);
};

let changeColor = () => {
	return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()}, 1)`;
}

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