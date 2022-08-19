//when user clicks button the mouseover color will change
//need to listen to what button is currently clicked
//have a variable that changes depending on button states
//the mouseOver eventListener is tied to the above var
//if no button has been clicked what is default
	//different colour options
	//an eraser option
	//opacity option
	//THE ABOVE SHOULD NOT RESET THE CURRENT GRID

	//random color generator use rgb with math.random min 0, max 255 for each value
	//opacity option use RGBA - the last vaule is the opacity! 
		//for shader it should increase A by .1 for each mouseOver event until A === 1 then stop
		//for lightener it decreases A by .1 until A === 0 then stop
		//for both of the above it should not affect the RGB values, do this by only targeting A - 
			//will need to work that out
	
//slider for grid size, 1 - 100 - this will require a lot more work than I anticipated so use a branch?!
//clean up the layout in CSS

let gridSize = document.getElementById('input').value;
let sizeBlurb = document.getElementById('size-blurb');
let gridHeightAndWidth = 500;
let squareColor = 'rgb(0, 0, 0, 1)';

function randomNumber() {
	return Math.floor(Math.random() * 255);
};
let rainbowOn = false;
let rainbowBtn = document.getElementById('rainbow');
rainbowBtn.addEventListener('click', () => {
	rainbowOn = true, 
	rainbow();
});

let eraserBtn = document.getElementById('eraser');
eraserBtn.addEventListener('click', () => {
	rainbowOn = false;
	squareColor ='white'}
	);

let shaderBtn = document.getElementById('shader');


let randomBtn = document.getElementById('random');
randomBtn.addEventListener('click', () => {
		rainbowOn = false,
		squareColor = 
	`rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()}, 1)`
	}
);

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
			square.addEventListener('mouseover', () => square.style.backgroundColor = squareColor);
			horizontalLine.appendChild(square);
			};
		grid.appendChild(horizontalLine);
	};
	gridContainer.appendChild(grid);	
	sizeBlurb.textContent = `The current grid dimensions are ${gridSize} squares x ${gridSize} squares.`
};

function rainbow() {
		if (rainbowOn) {
			function changeColor() {
				squareColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()}, 1)`;
			}
			let allSquares = document.getElementsByClassName('square');
			for (let i = 0; i <= allSquares.length; i++) {
				allSquares[i].addEventListener('mouseover', changeColor);
			}
	}
	
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

