const container = document.querySelector(".container");

function createGrid(numSquaresPerSide = 16) {
    // create 16 rows of flexbox each called gridRow
    for (let i = 0; i < numSquaresPerSide; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        gridRow.style.display = "flex";
        container.appendChild(gridRow);

        // create 16 divs in each row
        for (let j = 0; j < numSquaresPerSide; j++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-element");
            gridElement.style.width = `${960 / numSquaresPerSide}px`;
            gridElement.style.height = `${960 / numSquaresPerSide}px`;
            gridRow.appendChild(gridElement);
        }
    }
    hoverEffect();
}

function hoverEffect() {
    const gridElements = document.querySelectorAll(".grid-element");
    // div turns blue when mouse enters
    gridElements.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "red";
        });
        // div turns back to white when mouse leaves
        element.addEventListener("mouseout", () => {
            element.style.backgroundColor = "white";
        });
    });
}

createGrid();

// when user clicks on the button,
// keep asking for input until it is in range (0, 100]
const button = document.querySelector("button");
let numSquaresPerSide;
button.addEventListener("click", () => {
    do {
        numSquaresPerSide = +prompt("Enter number of squares per side");
        console.log("Hello");
    } while (!(numSquaresPerSide > 0 && numSquaresPerSide <= 100));
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(numSquaresPerSide);
});
