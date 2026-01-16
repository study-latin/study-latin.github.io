const setSelectElement = document.getElementById("set-select");
const flashcardElement = document.getElementById("flashcard");
const flashcardButtonsElement = document.getElementById("flashcard-buttons");
const knownElement = document.getElementById("known");
const unknownElement = document.getElementById("unknown");
const restartElement = document.getElementById("restart");

let currentSet = "";
let pairs = [];
let unknownCards = [];
let currentCardIndex = 0;
let currentCardSide = 0;

function addSetSelectOptions()
{
    Object.keys(sets).forEach((setName) => {
        const option = document.createElement("option");
        setSelectElement.append(option);

        option.value = setName;
        option.textContent = setName;
    });
}

function flipFlashcard(textContent)
{
    flashcardElement.style.transform = "scaleY(0)";
    setTimeout(() => {
        flashcardElement.style.transform = "scaleY(1)";
        flashcardElement.textContent = textContent;
    }, 200);
}

function switchFlashcard(textContent)
{
    flashcardElement.style.opacity = "0";
    setTimeout(() => {
        flashcardElement.style.opacity = "1";
        flashcardElement.textContent = textContent;
    }, 200);
}

function restartFlashcards()
{
    if (unknownCards.length == 0)
    {
        switchFlashcard("You know all the flashcards! Press restart to see them all again.");
    }
    else
    {
        currentCardIndex = 0;
        currentCardSide = 0;

        switchFlashcard(unknownCards[currentCardIndex][currentCardSide]);
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
    flashcardElement.textContent = unknownCards[currentCardIndex][currentCardSide];
});

flashcardElement.addEventListener("click", () => {
    if (unknownCards.length != 0)
    {
        currentCardSide = (currentCardSide + 1) % 2;

        flipFlashcard(unknownCards[currentCardIndex][currentCardSide]);
    }
});

knownElement.addEventListener("mousedown", (event) => {
    if (event.button == 0)
    {
        flashcardElement.classList.add("good");
    }
});
knownElement.addEventListener("mouseup", (event) => {
    if (event.button == 0)
    {
        flashcardElement.classList.remove("good");

        if (currentCardIndex < unknownCards.length)
        {
            unknownCards.splice(currentCardIndex, 1);
        }

        if (currentCardIndex < unknownCards.length)
        {
            currentCardSide = 0;
            
            switchFlashcard(unknownCards[currentCardIndex][currentCardSide]);
        }
        else
        {
            restartFlashcards();
        }
    }
});

unknownElement.addEventListener("mousedown", (event) => {
    if (event.button == 0)
    {
        flashcardElement.classList.add("bad");
    }
});
unknownElement.addEventListener("mouseup", (event) => {
    if (event.button == 0)
    {
        flashcardElement.classList.remove("bad");

        if (currentCardIndex < unknownCards.length - 1)
        {
            currentCardIndex++;
            currentCardSide = 0;

            switchFlashcard(unknownCards[currentCardIndex][currentCardSide]);
        }
        else
        {
            restartFlashcards();
        }
    }
});

restartElement.addEventListener("click", () => {
    unknownCards = pairs.slice();
    currentCardIndex = 0;
    currentCardSide = 0;

    switchFlashcard(unknownCards[currentCardIndex][currentCardSide]);
    flashcardButtonsElement.style.display = "flex";
});

addSetSelectOptions(setSelectElement);