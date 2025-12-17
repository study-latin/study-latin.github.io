const yearsElement = document.getElementById("years");
const daysElement = document.getElementById("days");
const toLatinElement = document.getElementById("to-latin");
const fromLatinElement = document.getElementById("from-latin");
const useMacronsElement = document.getElementById("use-macrons");
const useHintsElement = document.getElementById("use-hints");
const promptElement = document.getElementById("prompt");
const dateInputElement = document.getElementById("date-input");

let currentAnswer = "";

function newPrompt()
{
    let englishDate = "";
    let latinDate = "";

    let toLatin = false;
    if (toLatinElement.checked && fromLatinElement.checked)
    {
        toLatin = Math.random() < 0.5;
    }
    else
    {
        toLatin = toLatinElement.checked;
    }

    if (daysElement.checked)
    {
        const currentMonth = Math.floor(Math.random() * 12);
        const currentDay = Math.floor(Math.random() * months[currentMonth]["length"]) + 1;

        englishDate += `${currentDay} ${months[currentMonth]["English"]}`;

        let addedDay = false;
        for (let marker of Object.keys(markers))
        {
            if (currentDay == months[currentMonth][marker])
            {
                latinDate += `${markers[marker]["Abl."]} ${months[currentMonth]["Abl."]}`;
                addedDay = true;
                break;
            }
            else if (currentDay == months[currentMonth][marker] - 1)
            {
                latinDate += `prīdiē ${markers[marker]["Acc."]} ${months[currentMonth]["Acc."]}`;
                addedDay = true;
                break;
            }
            else if (currentDay < months[currentMonth][marker])
            {
                latinDate += `ante diēm ${months[currentMonth][marker] - currentDay + 1} ${markers[marker]["Acc."]} ${months[currentMonth]["Acc."]}`;
                addedDay = true;
                break;
            }
        }

        if (!addedDay)
        {
            latinDate += `ante diēm ${months[currentMonth]["length"] - currentDay + 2} ${markers["Kalends"]["Acc."]} ${months[(currentMonth + 1) % 12]["Acc."]}`;
        }
    }
    if (daysElement.checked && yearsElement.checked)
    {
        englishDate += " ";
        latinDate += " ";
    }
    if (yearsElement.checked)
    {
        const currentYear = Math.floor(Math.random() * 2777 - 752);

        englishDate += (currentYear >= 1)? `${currentYear} C.E.`:`${Math.abs(currentYear - 1)} B.C.E.`;
        latinDate += `${currentYear + 753} A.U.C.`;
    }

    if (toLatin)
    {
        promptElement.textContent = englishDate;
        currentAnswer = latinDate;
    }
    else
    {
        promptElement.textContent = latinDate;
        currentAnswer = englishDate;
    }
}

function removeMacrons(text)
{
    return text.replaceAll("ā", "a").replaceAll("ē", "e").replaceAll("ī", "i").replaceAll("ō", "o").replaceAll("ū", "u").replaceAll("Ā", "A").replaceAll("Ē", "E").replaceAll("Ī", "I").replaceAll("Ō", "O").replaceAll("Ū", "U");
}

yearsElement.addEventListener("input", () => {
    if (!yearsElement.checked)
    {
        daysElement.checked = true;
    }

    newPrompt();
});
daysElement.addEventListener("input", () => {
    if (!daysElement.checked)
    {
        yearsElement.checked = true;
    }

    newPrompt();
});

toLatinElement.addEventListener("input", () => {
    if (!toLatinElement.checked)
    {
        fromLatinElement.checked = true;
    }

    newPrompt();
});
fromLatinElement.addEventListener("input", () => {
    if (!fromLatinElement.checked)
    {
        toLatinElement.checked = true;
    }

    newPrompt();
});

useHintsElement.addEventListener("input", () => {
    if (useHintsElement.checked)
    {
        dateInputElement.placeholder = (useMacronsElement.checked)? removeMacrons(currentAnswer):currentAnswer;
    }
    else
    {
        dateInputElement.placeholder = "";
    }
});

dateInputElement.addEventListener("input", () => {
    const simplifiedInputValue = dateInputElement.value.replaceAll(" ", "").replaceAll(".", "").toLowerCase();
    const simplifiedCurrentAnswer = currentAnswer.replaceAll(" ", "").replaceAll(".", "").toLowerCase();
    
    if ((simplifiedInputValue == simplifiedCurrentAnswer) ||
        (!useMacronsElement.checked && removeMacrons(simplifiedInputValue) == removeMacrons(simplifiedCurrentAnswer)))
    {
        dateInputElement.classList.add("correct");
        dateInputElement.classList.remove("incorrect");
        setTimeout(() => {
            dateInputElement.classList.remove("correct");
        }, 200);

        newPrompt();
    }
    else
    {
        dateInputElement.classList.add("incorrect");
        dateInputElement.classList.remove("correct");
    }

    if (simplifiedInputValue == "")
    {
        dateInputElement.classList.remove("incorrect");
    }
});

newPrompt();