const body = document.querySelector('body');
const grid = document.querySelector('#grid');

const sizeBtn = document.querySelector('#sizeBtn');
const clearBtn = document.querySelector('#clearBtn');
sizeBtn.textContent = "Change grid size";
clearBtn.textContent = "Clear";



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
    return gridWidth;
}

//User enters grid height and width
function makeGrid(gridHeight, gridWidth){
    for(let i = 0; i < gridWidth; i++){
        let row = document.createElement('div');
        row.className = "row";
        for (let j = 0; j < gridHeight; j++){
            let RGB1 = Math.floor(Math.random() * 256);
            console.log(RGB1);
            let RGB2 = Math.floor(Math.random() * 256);
            let RGB3 = Math.floor(Math.random() * 256);
            let square = document.createElement('div');
            square.className = "square";
            row.appendChild(square);
            square.addEventListener('mouseover', () =>{
                square.style.background = "rgb(" + RGB1 + "," + RGB2 + "," + RGB3 + ")";  
                //square.style.background = "rgb(" + 200 + "," + 200 + "," + 200 + ")";  
            })
        }
        grid.appendChild(row);  
    }
}

function clearGrid(){
    grid.innerHTML = '';        //Clears all the html within grid
}

let gridHeight = 32;
let gridWidth = 32;

sizeBtn.addEventListener('click', () =>{        //Grid size button
    clearGrid();
    gridHeight = getGridHeight();
    gridWidth = getGridWidth();
    makeGrid(gridHeight, gridWidth);
})

clearBtn.addEventListener('click', () => {      //Clear button
    clearGrid();
    makeGrid(gridHeight, gridWidth);
})

makeGrid(gridHeight, gridWidth);

//Conditional for if grid is cleared