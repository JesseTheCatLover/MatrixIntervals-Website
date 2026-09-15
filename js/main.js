// Copyright 2026 JesseTheCatLover. All Rights Reserved.

// Background Matrix

const notes = [
    { name: "C", weight: 10 },
    { name: "C#", weight: 5 },
    { name: "Db", weight: 2 },

    { name: "D", weight: 10 },
    { name: "D#", weight: 5 },
    { name: "Eb", weight: 2 },

    { name: "E", weight: 10 },
    { name: "E#", weight: 1 },
    { name: "Fb", weight: 2 },

    { name: "F", weight: 10 },
    { name: "F#", weight: 5 },
    { name: "Gb", weight: 2 },

    { name: "G", weight: 10 },
    { name: "G#", weight: 5 },
    { name: "Ab", weight: 2 },

    { name: "A", weight: 10 },
    { name: "A#", weight: 5 },
    { name: "Bb", weight: 2 },

    { name: "B", weight: 10 },
    { name: "B#", weight: 1 },
    { name: "Cb", weight: 2 }
];

const matrix = document.getElementById("interval-matrix");

const totalWeight = notes.reduce(
    (total, note) => total + note.weight,
    0
);

function getRandomNote() {
    let random = Math.random() * totalWeight;

    for (const note of notes) {
        random -= note.weight;

        if (random <= 0)
            return note.name;
    }

    return notes[notes.length - 1].name;
}

for (let index = 0; index < 144; index++) {
    const cell = document.createElement("div");

    cell.className = "matrix-cell";
    cell.textContent = getRandomNote();

    matrix.appendChild(cell);
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

// Feature Screenshot Browsers

function createScreenshotBrowser(browser) {
    const image = browser.querySelector(".feature-browser-image");

    const previousButton = browser.querySelector(
        ".feature-browser-previous"
    );

    const nextButton = browser.querySelector(
        ".feature-browser-next"
    );

    const images = JSON.parse(
        browser.dataset.images
    );

    let currentIndex = 0;

    function renderImage() {
        image.src = images[currentIndex].src;
        image.alt = images[currentIndex].alt;
    }

    previousButton.addEventListener("click", () => {
        currentIndex =
            (currentIndex - 1 + images.length) %
            images.length;

        renderImage();
    });

    nextButton.addEventListener("click", () => {
        currentIndex =
            (currentIndex + 1) %
            images.length;

        renderImage();
    });

    renderImage();
}

document
    .querySelectorAll(".feature-browser")
    .forEach(createScreenshotBrowser);