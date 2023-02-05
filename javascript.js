const body = document.querySelector('body')
const grid = document.querySelector('#grid');


function getGridSize(){
    let gridHeight = prompt("Enter grid height: ");
    let gridWidth = prompt("Enter grid width: ");
    console.log(gridHeight);
    console.log(gridWidth);
    for(let i = 0; i < gridHeight; i++){
        let row = document.createElement('div');
        row.className = "row";
        for (let j = 0; j < gridWidth; j++){
            let square = document.createElement('div');
            square.className = "square";
            row.appendChild(square);
        }
        grid.appendChild(row);  
    }
}

getGridSize();
//To make grid: Use double for loop, addEventListener for click/mouse button up

//Get userChoice. Use either prompt or add divs with DOM manipulation