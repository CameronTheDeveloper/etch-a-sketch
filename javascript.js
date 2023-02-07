const body = document.querySelector('body');
const grid = document.querySelector('#grid');

const sizeBtn = document.querySelector('#sizeBtn');
const clearBtn = document.querySelector('#clearBtn');
sizeBtn.textContent = "Click here to enter grid size";
clearBtn.textContent = "Clear";

let gridHeight = 64;
let gridWidth = 64;

sizeBtn.addEventListener('click', () =>{        //Grid size button
    clearGrid();
    getGridSize(gridHeight, gridWidth);
})

clearBtn.addEventListener('click', () => {      //Clear button
    clearGrid();
    makeGrid();
})

function getGridSize(){
    let gridHeight = prompt("Enter grid height: ");
    do{ //Check for max height
        if (gridHeight > 100){
            gridHeight = prompt("Re-enter grid height (Max 100): ");
        }
    } while (gridHeight > 100)
    
    let gridWidth = prompt("Enter grid width: ");
    do{ //Check for max width
        if (gridWidth > 100){
            gridWidth = prompt("Re-enter grid Width (Max 100): ");
        }
    } while (gridWidth > 100)
    makeGrid(gridHeight, gridWidth);
}

//User enters grid height and width
function makeGrid(gridHeight, gridWidth){
    
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