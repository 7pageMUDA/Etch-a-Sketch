const container = document.querySelector(".container");
createGrid();

const button = document.querySelector("button");
let numSquaresPerSide;
button.addEventListener("click", () => {
  // when user clicks on the button,
  // keep asking for input until it is in range (0, 100]
  do {
    numSquaresPerSide = prompt("Enter number of squares per side");
  } while (
    numSquaresPerSide != null &&
    !(+numSquaresPerSide > 0 && +numSquaresPerSide <= 100)
  );

  if (numSquaresPerSide == null) {
    // if prompt was cancelled, do nothing
  } else {
    removeCurrentGrid();
    createGrid(numSquaresPerSide);
  }
});

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
      const randomColor = generateRandomColor();
      console.log(randomColor);
      element.style.backgroundColor = randomColor;
    });
    // div turns back to white when mouse leaves
    element.addEventListener("mouseout", () => {
      element.style.backgroundColor = "white";
    });
  });
}

function generateRandomColor() {
  const r = Math.random() * 256;
  const g = Math.random() * 256;
  const b = Math.random() * 256;
  const randomRGB = `rgb(${r}, ${g}, ${b})`;
  return randomRGB;
}

function removeCurrentGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
