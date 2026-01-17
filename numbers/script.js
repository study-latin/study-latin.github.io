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

let currentNumberIndex = 0;
let currentNumberData = {};
let currentPromptLanguage = "";
let currentAnswerLanguage = "";
let currentPromptType = "";
let currentAnswerType = "";
let currentPrompt = "";
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

function getCurrentStringAnswer()
{
    let ret = "";
    if (currentAnswerType == "number")
    {
        ret += (currentAnswerLanguage == "english")? currentNumberIndex + 1:toRomanNumerals(currentNumberIndex + 1);
    }
    else if (currentAnswerLanguage == "latin")
    {
        ret += currentAnswer["required"];
        if (useOptionalElement.checked)
        {
            ret += currentAnswer["optional"];
        }
    }
    else
    {
        ret += currentAnswer;
    }
    if (!useMacronsElement.checked)
    {
        ret = removeMacrons(ret);
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
    [currentPromptLanguage, currentAnswerLanguage] = randomChoice(languageChoices);

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
    currentPromptType = randomChoice(promptTypeChoices);

    const answerTypeChoices = [];
    if (answerCardinalElement.checked && !(currentPromptType == "cardinal" && currentPromptLanguage == currentAnswerLanguage))
    {
        answerTypeChoices.push("cardinal");
    }
    if (answerOrdinalElement.checked && !(currentPromptType == "ordinal" && currentPromptLanguage == currentAnswerLanguage))
    {
        answerTypeChoices.push("ordinal");
    }
    if (answerNumberElement.checked && !(currentPromptType == "number" && currentPromptLanguage == currentAnswerLanguage))
    {
        answerTypeChoices.push("number");
    }
    currentAnswerType = randomChoice(answerTypeChoices);

    currentNumberIndex = Math.floor(Math.random() * numbers.length);
    currentNumberData = numbers[currentNumberIndex];

    if (currentPromptType == "number")
    {
        currentPrompt = (currentPromptLanguage == "english")? currentNumberIndex + 1:toRomanNumerals(currentNumberIndex + 1);
    }
    else
    {
        currentPrompt = currentNumberData[currentPromptType][currentPromptLanguage];
    }

    if (currentAnswerType == "number")
    {
        currentAnswer = (currentAnswerLanguage == "english")? currentNumberIndex + 1:toRomanNumerals(currentNumberIndex + 1);
    }
    else
    {
        currentAnswer = currentNumberData[currentAnswerType][currentAnswerLanguage];
    }

    setPromptText();
    setHintText();
}

function setPromptText()
{
    let prompt = "";
    if (currentPromptType == "number")
    {
        prompt += (currentPromptLanguage == "english")? currentNumberIndex + 1:toRomanNumerals(currentNumberIndex + 1);
    }
    else
    {
        if (currentPromptLanguage == "latin")
        {
            prompt += currentPrompt["required"];
            if (useOptionalElement.checked)
            {
                prompt += currentPrompt["optional"];
            }
        }
        else
        {
            prompt += currentPrompt;
        }
    }
    prompt += " &rightarrow; ";
    if (currentAnswerType == "number")
    {
        prompt += ((currentAnswerLanguage == "english")? "Arabic":"Roman") + " numerals";
    }
    else
    {
        prompt += currentAnswerType;
        prompt += " in " + title(currentAnswerLanguage);
    }
    if (!useMacronsElement.checked)
    {
        prompt = removeMacrons(prompt);
    }
    promptElement.innerHTML = prompt;
}

function setHintText()
{
    inputElement.placeholder = (useHintsElement.checked)? getCurrentStringAnswer():"";
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
    setPromptText();
    setHintText();
});
useHintsElement.addEventListener("input", () => {
    setHintText();
});
useOptionalElement.addEventListener("input", () => {
    setPromptText();
    setHintText();
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
    
    if (value == getCurrentStringAnswer())
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