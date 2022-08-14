# etch-a-sketch2

Second attempt at etch-a-sketch due to restarting TOP

Will take a very different approach this time.
- Instead of using photoshop to create the graphics will try with CSS & JS
- Will use git commits a lot more frequently
	-- Will use branching as well to practice the process

Project outline/psuedo code

+ 1st goal is to create a grid of divs 16 x 16 in a webpage

	++ Step 1:
	- create a div to contain the grid
	- give the div container the same height and width value
	- create a div and append to div container
	- repeat process x number of times - 16 in first instance
	- when creating each new div place it beside previous div
		-- use flexbox to layout the divs to fit in at max 		 	container width

	++ Step 2:
	- create a new div 
	- take Step 1 loop and place it within the above div
	- repeat first x number of times
	- should end up with grid container containing x number of divs aligned vertically, each of which contains x number of divs aligned horizontally

	++ Step 3:
	 - add a mouseOver event to div 'square' to change backgroundColor
