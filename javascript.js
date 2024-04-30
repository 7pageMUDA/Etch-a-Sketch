const container = document.querySelector(".container");

function createGrid() {
    for (let i = 0; i < 16; i++) {
        const gridRow = document.createElement("div");
        gridRow.style.display = "flex";
        container.appendChild(gridRow);
        for (let j = 0; j < 16; j++) {
            const gridElement = document.createElement("div");
            gridRow.appendChild(gridElement);
        }
    }
}
createGrid();
