const englishToLatinElement = document.getElementById("english-to-latin");
const latinToEnglishElement = document.getElementById("latin-to-english");
const latinToLatinElement = document.getElementById("latin-to-latin");
const promptCardinalElement = document.getElementById("prompt-cardinal");
const promptOrdinalElement = document.getElementById("prompt-ordinal");
const promptNumberElement = document.getElementById("prompt-number");
const answerCardinalElement = document.getElementById("answer-cardinal");
const answerOrdinalElement = document.getElementById("answer-ordinal");
const answerNumberElement = document.getElementById("answer-number");

const useMacronsElement = document.getElementById("use-macrons");
const useHintsElement = document.getElementById("use-hints");
const useOptionalElement = document.getElementById("use-optional");

const promptElement = document.getElementById("prompt");
const inputElement = document.getElementById("input");

let currentAnswer = "";

function removeMacrons(text)
{
    return text.replaceAll("ā", "a").replaceAll("ē", "e").replaceAll("ī", "i").replaceAll("ō", "o").replaceAll("ū", "u").replaceAll("Ā", "A").replaceAll("Ē", "E").replaceAll("Ī", "I").replaceAll("Ō", "O").replaceAll("Ū", "U");
}

function randomChoice(arr)
{
    return arr[Math.floor(Math.random() * arr.length)];
}

function title(text)
{
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function toRomanNumerals(number)
{
    const romanNumerals = {
        "M":1000,
        "CM":900,
        "D":500,
        "CD":400,
        "C":100,
        "XC":90,
        "L":50,
        "XL":40,
        "X":10,
        "IX":9,
        "V":5,
        "IV":4,
        "I":1
    };
   
    let ret = "";
    for (let [numeral, value] of Object.entries(romanNumerals))
    {
        if (value <= number)
        {
            const count = Math.floor(number / value);
            number -= count * value;
            ret += numeral.repeat(count);
        }
    }
    return ret;
}

function generatePrompt()
{
    if (
        !(englishToLatinElement.checked || latinToEnglishElement.checked || latinToLatinElement.checked) ||
        !(promptCardinalElement.checked || promptOrdinalElement.checked || promptNumberElement.checked) ||
        !(answerCardinalElement.checked || answerOrdinalElement.checked || answerNumberElement.checked)
    )
    {
        return;
    }

    const languageChoices = [];
    if (englishToLatinElement.checked)
    {
        languageChoices.push(["english", "latin"]);
    }
    if (latinToEnglishElement.checked)
    {
        languageChoices.push(["latin", "english"]);
    }
    if (latinToLatinElement.checked)
    {
        languageChoices.push(["latin", "latin"]);
    }
    const [promptLanguage, answerLanguage] = randomChoice(languageChoices);

    const promptTypeChoices = [];
    if (promptCardinalElement.checked)
    {
        promptTypeChoices.push("cardinal");
    }
    if (promptOrdinalElement.checked)
    {
        promptTypeChoices.push("ordinal");
    }
    if (promptNumberElement.checked)
    {
        promptTypeChoices.push("number");
    }
    const promptType = randomChoice(promptTypeChoices);

    const answerTypeChoices = [];
    if (answerCardinalElement.checked && !(promptType == "cardinal" && promptLanguage == answerLanguage))
    {
        answerTypeChoices.push("cardinal");
    }
    if (answerOrdinalElement.checked && !(promptType == "ordinal" && promptLanguage == answerLanguage))
    {
        answerTypeChoices.push("ordinal");
    }
    if (answerNumberElement.checked && !(promptType == "number" && promptLanguage == answerLanguage))
    {
        answerTypeChoices.push("number");
    }
    const answerType = randomChoice(answerTypeChoices);

    const numberIndex = Math.floor(Math.random() * numbers.length);
    const numberData = numbers[numberIndex];

    if (promptType == "number")
    {
        promptElement.textContent = (promptLanguage == "english")? numberIndex + 1:toRomanNumerals(numberIndex + 1);
    }
    else
    {
        const promptData = numberData[promptType][promptLanguage];
        promptElement.textContent = (promptLanguage == "english")? promptData:promptData["required"] + promptData["optional"];
    }
    promptElement.innerHTML += ` &rightarrow; `;
    if (answerType == "number")
    {
        promptElement.textContent += ((answerLanguage == "english")? "Arabic":"Roman") + " numerals";
    }
    else
    {
        promptElement.textContent += answerType;
    }
    promptElement.textContent += " in " + title(answerLanguage);

    if (answerType == "number")
    {
        currentAnswer = (answerLanguage == "english")? numberIndex + 1:toRomanNumerals(numberIndex + 1);
    }
    else
    {
        currentAnswer = numberData[answerType][answerLanguage];
    }
}

function getCurrentStringAnswer()
{
    let ret = "";
    if (typeof currentAnswer == "object")
    {
        ret = (useOptionalElement.checked)? currentAnswer["required"] + currentAnswer["optional"]:currentAnswer["required"];
    }
    else
    {
        ret = currentAnswer;
    }
    if (!useMacronsElement.checked)
    {
        ret = removeMacrons(ret);
    }
    return ret;
}

englishToLatinElement.addEventListener("input", () => {
    generatePrompt();
});
latinToEnglishElement.addEventListener("input", () => {
    generatePrompt();
});
latinToLatinElement.addEventListener("input", () => {
    generatePrompt();
});

promptCardinalElement.addEventListener("input", () => {
    generatePrompt();
});
promptOrdinalElement.addEventListener("input", () => {
    generatePrompt();
});
promptNumberElement.addEventListener("input", () => {
    generatePrompt();
});

answerCardinalElement.addEventListener("input", () => {
    generatePrompt();
});
answerOrdinalElement.addEventListener("input", () => {
    generatePrompt();
});
answerNumberElement.addEventListener("input", () => {
    generatePrompt();
});

useMacronsElement.addEventListener("input", () => {
    if (useHintsElement.checked)
    {
        inputElement.placeholder = getCurrentStringAnswer();
    }
});
useHintsElement.addEventListener("input", () => {
    if (useHintsElement.checked)
    {
        inputElement.placeholder = getCurrentStringAnswer();
    }
    else
    {
        inputElement.placeholder = "";
    }
});
useOptionalElement.addEventListener("input", () => {
    if (useHintsElement.checked)
    {
        inputElement.placeholder = getCurrentStringAnswer();
    }
});

inputElement.addEventListener("keydown", (event) => {
    if (event.key != "Enter")
    {
        return;
    }

    let value = inputElement.value.trim().toLowerCase();
    if (value == "")
    {
        return;
    }

    if (!useMacronsElement.checked)
    {
        value = removeMacrons(value);
    }

    let currentStringAnswer = getCurrentStringAnswer();
    if (value == currentStringAnswer)
    {
        inputElement.value = "";
            
        inputElement.classList.add("good");
        inputElement.classList.remove("bad");
        setTimeout(() => {
            inputElement.classList.remove("good");
        }, 200);

        generatePrompt();
    }
    else
    {
        inputElement.classList.add("bad");
        inputElement.classList.remove("good");
        setTimeout(() => {
            inputElement.classList.remove("bad");
        }, 200);
    }
});

generatePrompt();