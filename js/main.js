// Copyright 2026 JesseTheCatLover. All Rights Reserved.

const notes = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B"
];

const matrix = document.getElementById("interval-matrix");

for (let row = 0; row < notes.length; row++) {
    for (let column = 0; column < notes.length; column++) {
        const cell = document.createElement("div");

        cell.className = "matrix-cell";

        const noteIndex = (row + column) % notes.length;

        cell.textContent = notes[noteIndex];

        matrix.appendChild(cell);
    }
}

const cells = Array.from(
    document.querySelectorAll(".matrix-cell")
);

let activeIndex = 0;

function highlightNextCell() {
    cells.forEach((cell) => {
        cell.classList.remove("active");
    });

    cells[activeIndex].classList.add("active");

    activeIndex =
        (activeIndex + 7) % cells.length;
}

highlightNextCell();

setInterval(
    highlightNextCell,
    900
);