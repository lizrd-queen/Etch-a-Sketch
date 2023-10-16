document.addEventListener("DOMContentLoaded", function () {
    var outerContainer = document.getElementById('outerContainer');
    
    var numRows = 16;
    var numCols = 16;

    for (var i = 0; i < numRows; i++) {
        var row = document.createElement("div");
       
        row.classList.add("grid-row");
        for (var j = 0; j < numCols; j++) {
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
    });    
});



