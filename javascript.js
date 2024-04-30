const container = document.querySelector(".container");

function createGrid() {
    for (let i = 0; i < 16; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        gridRow.style.display = "flex";
        container.appendChild(gridRow);
        for (let j = 0; j < 16; j++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-element");
            gridElement.style.width = "60px";
            gridElement.style.height = "60px";
            gridRow.appendChild(gridElement);
        }
    }
}
createGrid();

function hoverEffect() {
    const gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "blue";
        });
        element.addEventListener("mouseout", () => {
            element.style.backgroundColor = "white";
        });
    })
}
hoverEffect();
