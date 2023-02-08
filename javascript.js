const body = document.querySelector('body');
const grid = document.querySelector('#grid');

const sizeBtn = document.querySelector('#sizeBtn');
const clearBtn = document.querySelector('#clearBtn');
sizeBtn.textContent = "Click here to enter grid size";
clearBtn.textContent = "Clear";

sizeBtn.addEventListener('click', () =>{        //Grid size button
    clearGrid();
    getGridHeight();
    getGridWidth();
})

clearBtn.addEventListener('click', () => {      //Clear button
    clearGrid(gridHeight, gridWidth);
    makeGrid();
})

function getGridHeight(){
    let gridHeight = prompt("Enter grid height: ");
    do{ //Check for max height
        if (gridHeight > 100){
            gridHeight = prompt("Re-enter grid height (Max 100): ");
        }
    } while (gridHeight > 100)
    return gridHeight;
}

function getGridWidth(){
    let gridWidth = prompt("Enter grid width: ");
    do{ //Check for max width
        if (gridWidth > 100){
            gridWidth = prompt("Re-enter grid Width (Max 100): ");
        }
    } while (gridWidth > 100)
    makeGrid(gridHeight, gridWidth);
    return gridWidth;
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

function clearGrid(gridHeight, gridWidth){
    grid.innerHTML = '';        //Clears all the html within grid
    makeGrid(gridHeight, gridWidth);
}

let gridHeight = getGridHeight();
let gridWidth = getGridWidth();
makeGrid(gridHeight, gridWidth);