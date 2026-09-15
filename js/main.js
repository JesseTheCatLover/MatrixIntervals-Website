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

for (const rowNote of notes) {
    for (const columnNote of notes) {
        const cell = document.createElement("div");

        cell.className = "matrix-cell";

        cell.innerHTML = `
            <span class="matrix-note">${rowNote}</span>
            <span class="matrix-divider">→</span>
            <span class="matrix-note">${columnNote}</span>
        `;

        matrix.appendChild(cell);
    }
}