const grid = document.getElementById('grid');
let gridHeightAndWidth = 960;
grid.style.height = gridHeightAndWidth + 'px';
grid.style.width = gridHeightAndWidth + 'px';

let x = 16;

// create vertical row of divs
for (let j = 0; j <= x; j++) {
	let horizontalLine = document.createElement('div');
	horizontalLine.classList.add('line');

	// create horizontal row of divs inside vertical divs
	for (let i = 0; i <= x; i++) {
		let square = document.createElement('div');
		square.classList.add('square');
		square.addEventListener('mouseover', () => square.style.backgroundColor = "lightBlue");
		horizontalLine.appendChild(square);
		};
	grid.appendChild(horizontalLine);
}

