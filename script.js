
// Creating the top line
const topLine = document.querySelector(".topLine");
const textLine = document.createElement("div");
textLine.textContent = "How many blocks per side?";
topLine.appendChild(textLine);
const textBox = document.createElement("input");
textBox.id = "newInput";
topLine.appendChild(textBox);
const enterButton = document.createElement("button");
enterButton.textContent = "Enter";
topLine.appendChild(enterButton);
enterButton.addEventListener("click", resetGrid);
const outerDiv = document.querySelector(".outer");

// Draw the starting grid
drawBlock(16);
    
function drawBlock(blocks) {    
     for (let row = 1; row <= blocks; row++) {
        const newRow = document.createElement("div");
        newRow.className = "row";
        outerDiv.appendChild(newRow);
            
        for (let column = 1; column <= blocks; column++) {
            const newColumn = document.createElement("div");
            newColumn.className = "column";
            newRow.appendChild(newColumn);
            newColumn.addEventListener("mouseover", trace);
         }
    }
}

function resetGrid() {
    let rowsToRemove = document.querySelectorAll(".row");
    rowsToRemove.forEach(function(rowToRemove) {
        rowToRemove.remove();
    });
    let columnsToRemove = document.querySelectorAll(".column");
    columnsToRemove.forEach(function(columnToRemove) {
        columnToRemove.remove();
    });
    const newBlockNo = parseInt(document.getElementById("newInput").value);
    if (newBlockNo > 100) {
        alert("Blocks per side must be no greater than 100. Drawing 100x100 grid.");
        drawBlock(100);
    } else {
    drawBlock(newBlockNo);
    }
}

function trace(event) {
    event.target.style.backgroundColor = "red";
}

