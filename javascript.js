const container = document.querySelector(".container");

function createGrid() {
    // create 16 rows of flexbox each called gridRow
    for (let i = 0; i < 16; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        gridRow.style.display = "flex";
        container.appendChild(gridRow);

        // create 16 divs in each row
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
    // div turns blue when mouse enters
    gridElements.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "black";
        });
        // div turns back to white when mouse leaves
        element.addEventListener("mouseout", () => {
            element.style.backgroundColor = "white";
        });
    });
}

hoverEffect();
