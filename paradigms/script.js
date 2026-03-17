const orderSelectElement = document.getElementById("order-select");
const useMacronsElement = document.getElementById("use-macrons");
const useHintsElement = document.getElementById("use-hints");
const useKeyboardNavigationElement = document.getElementById("use-keyboard-navigation");
const removeElement = document.getElementById("remove");
const restoreElement = document.getElementById("restore");
const mainInputsElement = document.getElementById("main-inputs");
const promptElement = document.getElementById("prompt");
const tableElement = document.getElementById("table");

let removeElementFocused = document.activeElement == removeElement;
let restoreElementFocused = document.activeElement == restoreElement;

let currentTable = {};
let currentPrompt = "";

function getVerbType(verb)
{
    if (verb.length == 4)
    {
        return "regular";
    }
    else if (verb[0].at(-1) == "r")
    {
        return "deponent";
    }
    else
    {
        return "semiDeponent";
    }
}

function getVerbConjugation(verb)
{
    const ending = verb[1].slice(-3);
    if (ending == "āre" || ending == "ārī")
    {
        return 0;
    }
    else if (ending == "ēre" || ending == "ērī")
    {
        return 1;
    }
    else if (ending == "īre" || ending == "īrī")
    {
        return 4;
    }
    else if (verb[0].slice(-2) == "iō" || verb[0].slice(-3) == "ior")
    {
        return 3;
    }
    else
    {
        return 2;
    }
}

function format(text, replacements)
{
    let formatted = text;

    Object.keys(replacements).forEach((key) => {
        formatted = formatted.replaceAll(`{${key}}`, replacements[key]);
    });

    return formatted;
}

function formatWithVerb(text, verb, otherReplacements={})
{
    const type = getVerbType(verb);
    const conjugation = getVerbConjugation(verb);

    let replacements = {
        ...otherReplacements,
        "1":verb[1].slice(0, (type != "deponent" || (conjugation != 2 && conjugation != 3))? -3:-1),
        "-1":verb.at(-1).slice(0, (type == "regular")? -2:-6)
    };
    if (verb.length == 4)
    {
        replacements["2"] = verb[2].slice(0, -1);
    }

    return format(text, replacements);
}

function getVerbTable(verb, personNumber, gender=0)
{
    let table = {
        "rows":[],
        "columns":[],
        "data":[]
    };

    const type = getVerbType(verb);
    const conjugation = getVerbConjugation(verb);

    if (type == "regular")
    {
        table["columns"] = ["active", "passive"];

        Object.keys(verbEndings["regular"]).forEach((mood) => {
            Object.keys(verbEndings["regular"][mood]).forEach((tense) => {
                table["rows"].push(`${mood} ${tense}`);

                const row = verbEndings["regular"][mood][tense];
                let tableRow = [];

                if (row.hasOwnProperty("active"))
                {
                    const cell = row["active"];

                    let a = "";
                    let e = "";
                    let missing = false;

                    if (cell.hasOwnProperty("adjectiveFormat"))
                    {
                        const adjective = cell["adjectiveFormat"][conjugation].map((termination) => formatWithVerb(termination, verb));
                        a = adjective[(adjective.length == 2)? Math.max(0, gender - 1):gender];
                    }
                    if (cell.hasOwnProperty("endings"))
                    {
                        const endings = cell["endings"];
                        if (Array.isArray(endings[0]))
                        {
                            if (endings[personNumber].length)
                            {
                                e = endings[personNumber][conjugation];
                            }
                            else
                            {
                                missing = true;
                            }
                        }
                        else
                        {
                            e = endings[conjugation];
                        }
                    }

                    if (missing)
                    {
                        tableRow.push("");
                    }
                    else
                    {
                        tableRow.push((cell.hasOwnProperty("format"))? formatWithVerb(cell["format"], verb, {"a":a, "e":e}):a);
                    }
                }
                else
                {
                    tableRow.push("");
                }

                if (row.hasOwnProperty("passive"))
                {
                    const cell = row["passive"];

                    let a = "";
                    let e = "";
                    let missing = false;

                    if (cell.hasOwnProperty("adjectiveFormat"))
                    {
                        const adjective = cell["adjectiveFormat"][conjugation].map((termination) => formatWithVerb(termination, verb));
                        a = adjective[(adjective.length == 2)? Math.max(0, gender - 1):gender];
                    }
                    if (cell.hasOwnProperty("endings"))
                    {
                        const endings = cell["endings"];
                        if (Array.isArray(endings[0]))
                        {
                            if (endings[personNumber].length)
                            {
                                e = endings[personNumber][conjugation];
                            }
                            else
                            {
                                missing = true;
                            }
                        }
                        else
                        {
                            e = endings[conjugation];
                        }
                    }

                    if (missing)
                    {
                        tableRow.push("");
                    }
                    else
                    {
                        tableRow.push((cell.hasOwnProperty("format"))? formatWithVerb(cell["format"], verb, {"a":a, "e":e}):a);
                    }
                }
                else
                {
                    tableRow.push("");
                }

                table["data"].push(tableRow);
            });
        });
    }
    else if (type == "deponent")
    {
        table["columns"] = ["active"];

        Object.keys(verbEndings["deponent"]).forEach((mood) => {
            Object.keys(verbEndings["deponent"][mood]).forEach((tense) => {
                table["rows"].push(`${mood} ${tense}`);

                const regularVoice = verbEndings["deponent"][mood][tense];
                const cell = verbEndings["regular"][mood][tense][regularVoice];
                let tableRow = [];

                let a = "";
                let e = "";
                let missing = false;

                if (cell.hasOwnProperty("adjectiveFormat"))
                {
                    const adjective = cell["adjectiveFormat"][conjugation].map((termination) => formatWithVerb(termination, verb));
                    a = adjective[(adjective.length == 2)? Math.max(0, gender - 1):gender];
                }
                if (cell.hasOwnProperty("endings"))
                {
                    const endings = cell["endings"];
                    if (Array.isArray(endings[0]))
                    {
                        if (endings[personNumber].length)
                        {
                            e = endings[personNumber][conjugation];
                        }
                        else
                        {
                            missing = true;
                        }
                    }
                    else
                    {
                        e = endings[conjugation];
                    }
                }

                if (missing)
                {
                    tableRow.push("");
                }
                else
                {
                    tableRow.push((cell.hasOwnProperty("format"))? formatWithVerb(cell["format"], verb, {"a":a, "e":e}):a);
                }

                table["data"].push(tableRow);
            });
        });
    }
    else if (type == "semiDeponent")
    {
        table["columns"] = ["active"];

        Object.keys(verbEndings["semiDeponent"]["deponent"]).forEach((mood) => {
            Object.keys(verbEndings[mood]).forEach((tense) => {
                table["rows"].push(`${mood} ${tense}`);

                const regularVoice = verbEndings["semiDeponent"][mood][tense];
                const cell = verbEndings["regular"][mood][tense][regularVoice];
                let tableRow = [];

                let a = "";
                let e = "";
                let missing = false;

                if (cell.hasOwnProperty("adjectiveFormat"))
                {
                    const adjective = cell["adjectiveFormat"][conjugation].map((termination) => formatWithVerb(termination, verb));
                    a = adjective[(adjective.length == 2)? Math.max(0, gender - 1):gender];
                }
                if (cell.hasOwnProperty("endings"))
                {
                    const endings = cell["endings"];
                    if (Array.isArray(endings[0]))
                    {
                        if (endings[personNumber].length)
                        {
                            e = endings[personNumber][conjugation];
                        }
                        else
                        {
                            missing = true;
                        }
                    }
                    else
                    {
                        e = endings[conjugation];
                    }
                }

                if (missing)
                {
                    tableRow.push("");
                }
                else
                {
                    tableRow.push((cell.hasOwnProperty("format"))? formatWithVerb(cell["format"], verb, {"a":a, "e":e}):a);
                }

                table["data"].push(tableRow);
            });
        });
    }

    return table;
}

function generateTable()
{
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const person = Math.floor(Math.random() * 3);
    const number = Math.floor(Math.random() * 2);

    currentTable = getVerbTable(verb, person + number * 3);
    currentPrompt = `${verb[0]}, ${verb[1]}, ${verb[2]}${(verb.length == 4)? `, ${verb[3]}`:""} | ${person + 1}${["st", "nd", "rd"][person]} ${(number == 0)? "s.":"p."}`;

    promptElement.textContent = (useMacronsElement.checked)? currentPrompt:removeMacrons(currentPrompt);

    const tableHeadElement = document.createElement("thead");

    const headTableRowElement = document.createElement("tr");
    tableHeadElement.append(headTableRowElement);

    for (let columnLabel of ["", ...currentTable["columns"]])
    {
        const tableHeaderElement = document.createElement("th");
        headTableRowElement.append(tableHeaderElement);

        tableHeaderElement.scope = "col";
        tableHeaderElement.textContent = columnLabel;
    }

    const tableBody = document.createElement("tbody");

    tableElement.replaceChildren(tableHeadElement, tableBody);

    for (let rowIndex = 0; rowIndex < currentTable["rows"].length; rowIndex++)
    {
        const tableRowElement = document.createElement("tr");
        tableBody.append(tableRowElement);

        const tableHeaderElement = document.createElement("th");
        tableRowElement.append(tableHeaderElement);

        tableHeaderElement.scope = "row";
        tableHeaderElement.textContent = currentTable["rows"][rowIndex];

        for (let columnIndex = 0; columnIndex < currentTable["columns"].length; columnIndex++)
        {
            const currentInputAnswer = currentTable["data"][rowIndex][columnIndex];

            const tableDataElement = document.createElement("td");
            tableRowElement.append(tableDataElement);

            if (!currentInputAnswer)
            {
                continue;
            }
            
            const inputElement = document.createElement("input");
            tableDataElement.append(inputElement);

            inputElement.type = "text";
            inputElement.name = "input";
            inputElement.spellcheck = false;
            inputElement.autocomplete = "off";
            inputElement.className = "table-input";
            inputElement.dataset.row = rowIndex;
            inputElement.dataset.column = columnIndex;

            inputElement.addEventListener("input", () => {
                const inputValue = inputElement.value.trim().toLowerCase();
                if ((useMacronsElement.checked && inputValue == currentInputAnswer) ||
                    (!useMacronsElement.checked && removeMacrons(inputValue) == removeMacrons(currentInputAnswer)))
                {
                    inputElement.classList.add("good");
                    inputElement.classList.remove("bad");
                }
                else
                {
                    inputElement.classList.add("bad");
                    inputElement.classList.remove("good");
                }

                if (inputElement.value == "")
                {
                    inputElement.classList.remove("bad");
                }
            });
            inputElement.addEventListener("mousedown", (event) => {
                const activeElement = document.activeElement;
                if (activeElement == removeElement)
                {
                    inputElement.readOnly = true;
                    event.preventDefault();
                }
                else if (activeElement == restoreElement)
                {
                    inputElement.readOnly = false;
                    event.preventDefault();
                }
            });
        }
    }
}

function removeMacrons(text)
{
    return text.replaceAll("ā", "a").replaceAll("ē", "e").replaceAll("ī", "i").replaceAll("ō", "o").replaceAll("ū", "u").replaceAll("Ā", "A").replaceAll("Ē", "E").replaceAll("Ī", "I").replaceAll("Ō", "O").replaceAll("Ū", "U");
}

useMacronsElement.addEventListener("input", () => {
    for (let row = 0; row < currentTable["rows"].length; row++)
    {
        for (let column = 0; column < currentTable["columns"].length; column++)
        {
            const currentInputElement = document.querySelector(`[data-row="${row}"][data-column="${column}"]`);

            if (!currentInputElement)
            {
                continue;
            }

            currentInputElement.dispatchEvent(new Event("input"));
        }
    }

    promptElement.textContent = (useMacronsElement.checked)? currentPrompt:removeMacrons(currentPrompt);

    if (useHintsElement.checked)
    {
        useHintsElement.dispatchEvent(new Event("input"));
    }
});

useHintsElement.addEventListener("input", () => {
    for (let row = 0; row < currentTable["rows"].length; row++)
    {
        for (let column = 0; column < currentTable["columns"].length; column++)
        {
            const currentInputElement = document.querySelector(`[data-row="${row}"][data-column="${column}"]`);

            if (!currentInputElement)
            {
                continue;
            }

            const currentAnswer = currentTable["data"][row][column];
            currentInputElement.placeholder = (useHintsElement.checked)? ((useMacronsElement.checked)? currentAnswer:removeMacrons(currentAnswer)):"";
        }
    }
});

document.addEventListener("keydown", (event) => {
    const activeElement = document.activeElement;

    if (!activeElement.classList.contains("table-input") || !useKeyboardNavigationElement.checked)
    {
        return;
    }

    let currentRow = parseInt(activeElement.dataset.row);
    let currentColumn = parseInt(activeElement.dataset.column);
    
    let movement = [0, 0];
    let wrap = "stay";
    let nextCaretPosition = null;

    switch (event.key)
    {
        case "ArrowLeft":
            if (activeElement.selectionStart == 0)
            {
                movement = [-1, 0];
                nextCaretPosition = -1;
            }

            break;
        case "ArrowRight":
            if (activeElement.selectionStart == activeElement.value.length)
            {
                movement = [1, 0];
                nextCaretPosition = 0;
            }

            break;
        case "ArrowUp":
            if (activeElement.selectionStart == 0)
            {
                movement = [0, -1];
                nextCaretPosition = -1;
            }

            break;
        case "ArrowDown":
            if (activeElement.selectionStart == activeElement.value.length)
            {
                movement = [0, 1];
                nextCaretPosition = 0;
            }

            break;
        case "Enter":
            if (orderSelectElement.value == "row")
            {
                movement = [1, 0];
            }
            else
            {
                movement = [0, 1];
            }
            wrap = "move";

            break;
        case "Backspace":
            if (activeElement.selectionStart != 0)
            {
                break;
            }

            if (orderSelectElement.value == "row")
            {
                movement = [-1, 0];
            }
            else
            {
                movement = [0, -1];
            }
            wrap = "move";
            nextCaretPosition = -1;

            break;
        case "Tab":
            if (orderSelectElement.value == "column")
            {
                movement = [0, 1];
                wrap = "move";
            }

            break;
    }

    if (movement[0] == 0 && movement[1] == 0)
    {
        return;
    }

    let nextFocus;
    while (!nextFocus || nextFocus.readonly)
    {
        currentRow += movement[1];
        currentColumn += movement[0];

        if (currentRow == -1)
        {
            switch (wrap)
            {
                case "none":
                    return;
                case "stay":
                    currentRow = currentTable["rows"].length - 1;
                    break;
                case "move":
                    currentRow = currentTable["rows"].length - 1;
                    currentColumn = (currentColumn == 0)? currentTable["columns"].length - 1:currentColumn - 1;
                    break;
            }
        }
        else if (currentRow == currentTable["rows"].length)
        {
            switch (wrap)
            {
                case "none":
                    return;
                case "stay":
                    currentRow = 0;
                    break;
                case "move":
                    currentRow = 0;
                    currentColumn = (currentColumn == currentTable["columns"].length - 1)? 0:currentColumn + 1;
                    break;
            }
        }

        if (currentColumn == -1)
        {
            switch (wrap)
            {
                case "none":
                    return;
                case "stay":
                    currentColumn = currentTable["columns"].length - 1;
                    break;
                case "move":
                    currentColumn = currentTable["columns"].length - 1;
                    currentRow = (currentRow == 0)? currentTable["rows"].length - 1:currentRow - 1;
                    break;
            }
        }
        else if (currentColumn == currentTable["columns"].length)
        {
            switch (wrap)
            {
                case "none":
                    return;
                case "stay":
                    currentColumn = 0;
                    break;
                case "move":
                    currentColumn = 0;
                    currentRow = (currentRow == currentTable["rows"].length - 1)? 0:currentRow + 1;
                    break;
            }
        }

        nextFocus = document.querySelector(`[data-row="${currentRow}"][data-column="${currentColumn}"]`);
    }

    event.preventDefault();
    nextFocus.focus();

    if (nextCaretPosition)
    {
        nextFocus.selectionStart = (nextCaretPosition == 0)? 0:nextFocus.value.length;
    }
    
    if (!activeElement.classList.contains("good") && activeElement.value != "")
    {
        activeElement.classList.add("bad");
    }
});

mainInputsElement.style.display = "flex";
generateTable();
window.addEventListener("load", () => {
    const rows = Array.from(tableElement.rows);
    const maxRowHeight = Math.max(...rows.map((row) => row.getBoundingClientRect().height));
    rows.forEach((row) => Array.from(row.cells).forEach((cell) => cell.style.height = `${maxRowHeight}px`));
}, {once:true});