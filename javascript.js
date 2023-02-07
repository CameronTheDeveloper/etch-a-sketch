const body = document.querySelector('body');
const grid = document.querySelector('#grid');

const sizeBtn = document.querySelector('#sizeBtn');
const clearBtn = document.querySelector('#clearBtn');
sizeBtn.textContent = "Click here to enter grid size";
clearBtn.textContent = "Clear";

let gridHeight = 64;
let gridWidth = 64;

sizeBtn.addEventListener('click', () =>{
    let gridHeight = prompt("Enter grid height: ");
    let gridWidth = prompt("Enter grid width: ");
    getGridSize(gridHeight, gridWidth);
})

clearBtn.addEventListener('click', () => {
    clearGrid();
    getGridSize(64, 64)
})

//User enters grid height and width
function getGridSize(gridHeight, gridWidth){
    for(let i = 0; i < gridWidth; i++){
        let row = document.createElement('div');
        row.className = "row";
        for (let j = 0; j < gridHeight; j++){
            let square = document.createElement('div');
            square.className = "square";
            row.appendChild(square);
            square.addEventListener('mouseover', () =>{
                square.style.background = 'black';
            })
        }
        grid.appendChild(row);  
    }
}

function clearGrid(){
    grid.innerHTML = '';        //Clears all the html within grid
}


getGridSize(gridHeight, gridWidth);

//getGridSize(gridHeight, gridWidth);


//To make grid: Use double for loop, addEventListener for click/mouse button up

//Get userChoice. Use either prompt or add divs with DOM manipulation