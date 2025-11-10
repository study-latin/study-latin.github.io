const setSelectElement = document.getElementById("set-select");
const flashcardElement = document.getElementById("flashcard");
const flashcardTextElement = document.getElementById("flashcard-text");
const flashcardButtonsElement = document.getElementById("flashcard-buttons");
const knownElement = document.getElementById("known");
const unknownElement = document.getElementById("unknown");
const restartElement = document.getElementById("restart");

let currentSet = "";
let pairs = [];
let unknownCards = [];
let currentCardIndex = 0;
let currentCardSide = 0;

function addSetSelectOptions(setSelectElement)
{
    Object.keys(sets).forEach((setName) => {
        const option = document.createElement("option");
        setSelectElement.append(option);

        option.value = setName;
        option.textContent = setName;
    });
}

function displayFlashcard(flashcardTextElement)
{
    flashcardTextElement.textContent = unknownCards[currentCardIndex][currentCardSide];
}

function restartFlashcards(flashcardTextElement)
{
    if (unknownCards.length == 0)
    {
        flashcardTextElement.textContent = "You know all the flashcards! Press restart to see them all again.";
    }
    else
    {
        currentCardIndex = 0;

        displayFlashcard(flashcardTextElement);
    }
}

setSelectElement.addEventListener("input", () => {
    currentSet = setSelectElement.value;
    pairs = Object.entries(sets[currentSet]);
    unknownCards = pairs.slice();

    currentCardIndex = 0;
    currentCardSide = 0;

    flashcardElement.style.display = "flex";
    flashcardButtonsElement.style.display = "flex";
    displayFlashcard(flashcardTextElement);
});

flashcardElement.addEventListener("click", () => {
    if (unknownCards.length != 0)
    {
        currentCardSide = (currentCardSide + 1) % 2;

        displayFlashcard(flashcardTextElement);
    }
});

knownElement.addEventListener("mousedown", (event) => {
    if (event.button == 0)
    {
        flashcardElement.style.outlineColor = "var(--good)";
    }
});
knownElement.addEventListener("mouseup", (event) => {
    if (event.button == 0)
    {
        flashcardElement.style.outlineColor = "var(--neutral)";

        unknownCards.splice(currentCardIndex, 1);

        if (currentCardIndex < unknownCards.length)
        {
            currentCardSide = 0;

            displayFlashcard(flashcardTextElement);
        }
        else
        {
            restartFlashcards(flashcardTextElement);
        }
    }
});

unknownElement.addEventListener("mousedown", (event) => {
    if (event.button == 0)
    {
        flashcardElement.style.outlineColor = "var(--bad)";
    }
});
unknownElement.addEventListener("mouseup", (event) => {
    if (event.button == 0)
    {
        flashcardElement.style.outlineColor = "var(--neutral)";

        if (currentCardIndex < unknownCards.length - 1)
        {
            currentCardIndex++;
            currentCardSide = 0;

            displayFlashcard(flashcardTextElement);
        }
        else
        {
            restartFlashcards(flashcardTextElement);
        }
    }
});

restartElement.addEventListener("click", () => {
    unknownCards = pairs.slice();
    currentCardIndex = 0;
    currentCardSide = 0;

    displayFlashcard(flashcardTextElement);
    flashcardButtonsElement.style.display = "flex";
});

addSetSelectOptions(setSelectElement);