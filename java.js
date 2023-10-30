document.addEventListener("DOMContentLoaded", function () {
    var outerContainer = document.getElementById('outerContainer');
    var resizeGrid = document.getElementById('resizeGrid');
    var resetGame = document.getElementById('resetGame');
    var numRows = 16;
    var numCols = 16;

function createGrid(rows,cols) {
    outerContainer.innerHTML = '';



    outerContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    outerContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;


    for (var i = 0; i < rows; i++) {
        var row = document.createElement("div");
        row.classList.add("grid-row");
        for (var j = 0; j < cols; j++) {
            var div = document.createElement("div");
            div.classList.add("grid-item");
            row.appendChild(div);
        }
        outerContainer.appendChild(row);


    }

    const gridItems =  document.querySelectorAll('.grid-item')
    gridItems.forEach((item) => {
        item.style.backgroundColor = 'white';
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'black';
        });
        item.addEventListener('click', () => {
            item.style.backgroundColor = 'white';
        });
    });  
        
    
}

createGrid(numRows,numCols)


resizeGrid.addEventListener('click',function () {
    var newSize = prompt("Enter a new size UwU");
    if (newSize) {
        newSize = parseInt(newSize);
        if (!isNaN(newSize) && 100 >= newSize > 0) {
            createGrid(newSize,newSize);
        } else {
            alert("god damnit >:(")
        }
    
    }
})

resetGame.addEventListener('click', function(){
    createGrid(16,16);
})

})