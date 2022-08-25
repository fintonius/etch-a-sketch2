//clean up the layout in CSS

let gridSize = document.getElementById('slider').value;

let gridHeightAndWidth = 500;
let squareColor = 'black';

let number1 = document.getElementById('a');
let number2 = document.getElementById('b');
let slideInput = document.getElementById('slider');

//gives live update for current grid dimentsions
slideInput.addEventListener('input', () => {
	number1.textContent = ` ${slideInput.value} `;
	number2.textContent = ` ${slideInput.value} `;
});

slideInput.onchange = () => {
	gridSize = document.getElementById('slider').value;
			clearGrid();
			createGrid();
	};

function createGrid () {

	const gridContainer = document.getElementById('grid-container');

	const grid = document.createElement('div');
	grid.setAttribute('id', 'grid');
		
	// create vertical row of divs
	for (let j = 0; j < gridSize; j++) {
		let horizontalLine = document.createElement('div');
		horizontalLine.classList.add('line');
	
		// create horizontal row of divs inside vertical divs
	for (let i = 0; i < gridSize; i++) {
		let square = document.createElement('div');
		square.classList.add('square');
		horizontalLine.appendChild(square);
		};

		grid.appendChild(horizontalLine);
	};
	
	gridContainer.appendChild(grid);
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
	
//determines the color for each grid square
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

let colorPickerColor = '';
function createColorGrid() {
	const colorGrid = document.getElementById('color-grid');

	for (let j = 0; j < 6; j++) {
		let colorLine = document.createElement('div');
		colorLine.classList.add('color-line');

		for (let i = 0; i < 6; i++) {
			let colorSquare = document.createElement('div');
			colorSquare.classList.add('color-square');
			colorLine.appendChild(colorSquare)
			colorGrid.appendChild(colorLine)
		}	
	}

	let coloredSquare = document.querySelectorAll('.color-square');
	let a = 360;
	for (let i = 0; i < a; i++) {
		
	coloredSquare.forEach(e => {
		e.style.backgroundColor = `hsl(${[i]}, 60%, 70%)`;
		e.addEventListener('click', () => {
			colorPickerColor = e.style.backgroundColor;
			console.log(colorPickerColor);
		});
		i+=10;
		
	})
}
}

createColorGrid();