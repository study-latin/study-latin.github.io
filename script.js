const mainElement = document.getElementById("main");
const tableSelectElement = document.getElementById("table-select");
const orderSelectElement = document.getElementById("order-select");
const useMacronsElement = document.getElementById("use-macrons");
const inputTableElement = document.getElementById("input-table");
const specialCharacterButtonsContainer = document.getElementById("special-character-buttons-container");

const inputEvent = new Event("input", {bubbles:true});

let tables = {
    "active present verb":[
        ["",              "1st conj.", "2nd conj.", "3rd conj.", "3rd -io conj.", "4th conj."],
        ["1st person s.", "ō",         "eō",        "ō",         "iō",            "iō"],
        ["2nd person s.", "ās",        "ēs",        "is",        "is",            "īs"],
        ["3rd person s.", "at",        "et",        "it",        "it",            "it"],
        ["1st person p.", "āmus",      "ēmus",      "imus",      "imus",          "īmus"],
        ["2nd person p.", "ātis",      "ētis",      "itis",      "itis",          "ītis"],
        ["3rd person p.", "ant",       "ent",       "unt",       "iunt",          "iunt"]
    ],
    "passive present verb":[
        ["",              "1st conj.", "2nd conj.", "3rd conj.", "3rd -io conj.", "4th conj."],
        ["1st person s.", "or",        "eor",       "or",        "ior",           "ior"],
        ["2nd person s.", "āris",      "ēris",      "eris",      "eris",          "īris"],
        ["3rd person s.", "ātur",      "ētur",      "itur",      "itur",          "ītur"],
        ["1st person p.", "āmur",      "ēmur",      "imur",      "imur",          "īmur"],
        ["2nd person p.", "āminī",     "ēminī",     "iminī",     "iminī",         "īminī"],
        ["3rd person p.", "antur",     "entur",     "untur",     "iuntur",        "iuntur"]
    ],
    "is":[
        ["",        "M.",    "F.",     "N."],
        ["Nom. s.", "is",    "ea",     "id"],
        ["Gen. s.", "eius",  "eius",   "eius"],
        ["Dat. s.", "eī",    "eī",     "eī"],
        ["Acc. s.", "eum",   "eam",    "id"],
        ["Abl. s.", "eō",    "eā",     "eō"],
        ["Nom. p.", "ei",    "eae",    "ea"],
        ["Gen. p.", "eōrum", "eārum",  "eōrum"],
        ["Dat. p.", "eīs",   "eīs",    "eīs"],
        ["Acc. p.", "eōs",   "eās",    "ea"],
        ["Abl. p.", "eīs",   "eīs",    "eīs"]
    ],
    "īdem":[
        ["",        "M.",       "F.",       "N."],
        ["Nom. s.", "īdem",     "eadem",    "idem"],
        ["Gen. s.", "eiusdem",  "eiusdem",  "eiusdem"],
        ["Dat. s.", "eīdem",    "eīdem",    "eīdem"],
        ["Acc. s.", "eundem",   "eandem",   "idem"],
        ["Abl. s.", "eōdem",    "eādem",    "eōdem"],
        ["Nom. p.", "eīdem",    "eaedem",   "eadem"],
        ["Gen. p.", "eōrundem", "eārundem", "eōrundem"],
        ["Dat. p.", "eīsdem",   "eīsdem",   "eīsdem"],
        ["Acc. p.", "eōsdem",   "eāsdem",   "eadem"],
        ["Abl. p.", "eīsdem",   "eīsdem",   "eīsdem"]
    ],
    "quī":[
        ["",        "M.",     "F.",     "N."],
        ["Nom. s.", "quī",    "quae",   "quod"],
        ["Gen. s.", "cuius",  "cuius",  "cuius"],
        ["Dat. s.", "cui",    "cui",    "cui"],
        ["Acc. s.", "quem",   "quam",   "quod"],
        ["Abl. s.", "quō",    "quā",    "quō"],
        ["Nom. p.", "quī",    "quae",   "quae"],
        ["Gen. p.", "quōrum", "quārum", "quōrum"],
        ["Dat. p.", "quibus", "quibus", "quibus"],
        ["Acc. p.", "quōs",   "quās",   "quōs"],
        ["Abl. p.", "quibus", "quibus", "quibus"]
    ],
    "quīdam":[
        ["",        "M.",        "F.",        "N."],
        ["Nom. s.", "quīdam",    "quaedam",   "quoddam"],
        ["Gen. s.", "cuiusdam",  "cuiusdam",  "cuiusdam"],
        ["Dat. s.", "cuidam",    "cuidam",    "cuidam"],
        ["Acc. s.", "quendam",   "quandam",   "quoddam"],
        ["Abl. s.", "quōdam",    "quādam",    "quōdam"],
        ["Nom. p.", "quīdam",    "quaedam",   "quaedam"],
        ["Gen. p.", "quōrundam", "quārundam", "quōrundam"],
        ["Dat. p.", "quibusdam", "quibusdam", "quibusdam"],
        ["Acc. p.", "quōsdam",   "quāsdam",   "quaedam"],
        ["Abl. p.", "quibusdam", "quibusdam", "quibusdam"]
    ],
    "quis":[
        ["",        "M.",     "F.",     "N."],
        ["Nom. s.", "quis",   "quis",   "quid"],
        ["Gen. s.", "cuius",  "cuius",  "cuius"],
        ["Dat. s.", "cui",    "cui",    "cui"],
        ["Acc. s.", "quem",   "quem",   "quid"],
        ["Abl. s.", "quō",    "quō",    "quō"],
        ["Nom. p.", "quī",    "quae",   "quae"],
        ["Gen. p.", "quōrum", "quārum", "quōrum"],
        ["Dat. p.", "quibus", "quibus", "quibus"],
        ["Acc. p.", "quōs",   "quās",   "quōs"],
        ["Abl. p.", "quibus", "quibus", "quibus"]
    ],
    "ipse":[
        ["",        "M.",      "F.",      "N."],
        ["Nom. s.", "ipse",    "ipsa",    "ipsum"],
        ["Gen. s.", "ipsīus",  "ipsīus",  "ipsīus"],
        ["Dat. s.", "ipsī",    "ipsī",    "ipsī"],
        ["Acc. s.", "ipsum",   "ipsam",   "ipsum"],
        ["Abl. s.", "ipsō",    "ipsā"   , "ipsō"],
        ["Nom. p.", "ipsī",    "ipsae",   "ipsa"],
        ["Gen. p.", "ipsōrum", "ipsārum", "ipsōrum"],
        ["Dat. p.", "ipsīs",   "ipsīs",   "ipsīs"],
        ["Acc. p.", "ipsōs",   "ipsās",   "ipsōs"],
        ["Abl. p.", "ipsīs",   "ipsīs",   "ipsīs"]
    ],
    "sui":[
        ["",     "s. + p."],
        ["Nom.", "_"],
        ["Gen.", "suī"],
        ["Dat.", "sibi"],
        ["Acc.", "sē"],
        ["Abl.", "sē"]
    ]
}
let currentTable = "";
let useMacrons = useMacronsElement.checked;
let order = orderSelectElement.value;

const specialCharacters = ["ā", "ē", "ī", "ō", "ū"];

// let timer = 0;

tableSelectElement.addEventListener("input", () => {
    currentTable = tableSelectElement.value;
    createInputTable(tables[currentTable], mainElement);
    if (specialCharacterButtonsContainer.children.length == 0)
    {
        createSpecialCharacterButtons(specialCharacters, specialCharacterButtonsContainer);
    }
});

orderSelectElement.addEventListener("input", () => {
    order = orderSelectElement.value;
});

useMacronsElement.addEventListener("input", () => {
    useMacrons = useMacronsElement.checked;
    for (let row = 1; row < tables[currentTable].length; row++)
    {
        for (let column = 1; column < tables[currentTable][0].length; column++)
        {
            document.querySelector(`[data-row="${row}"][data-column="${column}"]`).dispatchEvent(inputEvent);
        }
    }
});

document.addEventListener("keydown", (event) => {
    const activeElement = document.activeElement;
    if (activeElement.classList.contains("table-input"))
    {
        const row = parseInt(activeElement.dataset.row);
        const column = parseInt(activeElement.dataset.column);
        const caretPosition = activeElement.selectionStart;
        let nextFocus;

        if (event.key == "ArrowUp")
        {
            if (row > 1)
            {
                nextFocus = document.querySelector(`[data-row="${row - 1}"][data-column="${column}"]`);
            }
            else
            {
                nextFocus = document.querySelector(`[data-row="${tables[currentTable].length - 1}"][data-column="${column}"]`);
            }
        }
        else if (event.key == "ArrowDown")
        {
            if (row < tables[currentTable].length - 1)
            {
                nextFocus = document.querySelector(`[data-row="${row + 1}"][data-column="${column}"]`);
            }
            else
            {
                nextFocus = document.querySelector(`[data-row="1"][data-column="${column}"]`);
            }
        }
        else if (event.key == "ArrowLeft" && caretPosition == 0)
        {
            if (column > 1)
            {
                nextFocus = document.querySelector(`[data-row="${row}"][data-column="${column - 1}"]`);
            }
            else
            {
                nextFocus = document.querySelector(`[data-row="${row}"][data-column="${tables[currentTable][0].length - 1}"]`);
            }
        }
        else if (event.key == "ArrowRight" && caretPosition == activeElement.value.length)
        {
            if (column < tables[currentTable][0].length - 1)
            {
                nextFocus = document.querySelector(`[data-row="${row}"][data-column="${column + 1}"]`);
            }
            else
            {
                nextFocus = document.querySelector(`[data-row="${row}"][data-column="1"]`);
            }
        }
        else if (event.key == "Enter")
        {
            if (order == "row")
            {
                if (column < tables[currentTable][0].length - 1)
                {
                    nextFocus = document.querySelector(`[data-row="${row}"][data-column="${column + 1}"]`);
                }
                else
                {
                    if (row < tables[currentTable].length - 1)
                    {
                        nextFocus = document.querySelector(`[data-row="${row + 1}"][data-column="1"]`);
                    }
                    else
                    {
                        nextFocus = document.querySelector(`[data-row="1"][data-column="1"]`);
                    }
                }
            }
            else if (order == "column")
            {
                if (row < tables[currentTable].length - 1)
                {
                    nextFocus = document.querySelector(`[data-row="${row + 1}"][data-column="${column}"]`);
                }
                else
                {
                    if (column < tables[currentTable][0].length - 1)
                    {
                        nextFocus = document.querySelector(`[data-row="1"][data-column="${column + 1}"]`);
                    }
                    else
                    {
                        nextFocus = document.querySelector(`[data-row="1"][data-column="1"]`);
                    }
                }
            }
        }
        else if (event.key == "Backspace" && activeElement.value == "")
        {
            if (order == "row")
            {
                if (column > 1)
                {
                    nextFocus = document.querySelector(`[data-row="${row}"][data-column="${column - 1}"]`);
                }
                else
                {
                    if (row > 1)
                    {
                        nextFocus = document.querySelector(`[data-row="${row - 1}"][data-column="${tables[currentTable][0].length - 1}"]`);
                    }
                    else
                    {
                        nextFocus = document.querySelector(`[data-row="${tables[currentTable].length - 1}"][data-column="${tables[currentTable][0].length - 1}"]`);
                    }
                }
            }
            else if (order == "column")
            {
                if (row > 1)
                {
                    nextFocus = document.querySelector(`[data-row="${row - 1}"][data-column="${column}"]`);
                }
                else
                {
                    if (column > 1)
                    {
                        nextFocus = document.querySelector(`[data-row="${tables[currentTable].length - 1}"][data-column="${column - 1}"]`);
                    }
                    else
                    {
                        nextFocus = document.querySelector(`[data-row="${tables[currentTable].length - 1}"][data-column="${tables[currentTable][0].length - 1}"]`);
                    }
                }
            }
        }

        if (nextFocus)
        {
            event.preventDefault();
            nextFocus.focus();

            if (!activeElement.classList.contains("correct") && activeElement.value != "")
            {
                activeElement.classList.add("incorrect");
            }
        }
    }
});

function addTableSelectOptions(tables)
{
    Object.keys(tables).forEach((tableName) => {
        const option = document.createElement("option");
        tableSelectElement.append(option);
        option.value = tableName;
        option.textContent = tableName;
    });
}

function createInputTable(table, container)
{
    let tableElement = document.getElementById("input-table");
    if (!tableElement)
    {
        tableElement = document.createElement("table");
        container.append(tableElement);

        tableElement.id = "input-table";
    }
    else
    {
        tableElement.innerHTML = "";
    }
    tableElement.style.justifyItems = "center";

    const tableHeadElement = document.createElement("thead");
    tableElement.append(tableHeadElement);

    const headTableRowElement = document.createElement("tr");
    tableHeadElement.append(headTableRowElement);

    for (let columnLabel of table[0])
    {
        const tableHeaderElement = document.createElement("th");
        headTableRowElement.append(tableHeaderElement);

        tableHeaderElement.scope = "col";
        tableHeaderElement.textContent = columnLabel;
    }

    const tableBody = document.createElement("tbody");
    tableElement.append(tableBody);

    for (let rowIndex = 0; rowIndex < table.length - 1; rowIndex++)
    {
        const tableRowElement = document.createElement("tr");
        tableBody.append(tableRowElement);

        const tableHeaderElement = document.createElement("th");
        tableRowElement.append(tableHeaderElement);

        tableHeaderElement.scope = "row";
        tableHeaderElement.textContent = table[rowIndex + 1][0];

        for (let columnIndex = 0; columnIndex < table[0].length - 1; columnIndex++)
        {
            const tableDataElement = document.createElement("td");
            tableRowElement.append(tableDataElement);
            const inputElement = document.createElement("input");
            tableDataElement.append(inputElement);

            inputElement.type = "text";
            inputElement.name = "input";
            inputElement.spellcheck = false;
            inputElement.className = "table-input";
            inputElement.dataset.row = rowIndex + 1;
            inputElement.dataset.column = columnIndex + 1;

            inputElement.addEventListener("input", () => {
                const inputValue = inputElement.value.trim().toLowerCase();
                if ((useMacrons && inputValue == table[rowIndex + 1][columnIndex + 1]) ||
                    (!useMacrons && inputValue == removeMacrons(table[rowIndex + 1][columnIndex + 1])))
                {
                    inputElement.classList.add("correct");
                    inputElement.classList.remove("incorrect");
                }
                else
                {
                    inputElement.classList.add("incorrect");
                    inputElement.classList.remove("correct");
                }

                if (inputElement.value == "")
                {
                    inputElement.classList.remove("incorrect");
                }
            });
        }
    }
}

function createSpecialCharacterButtons(characters, container)
{
    for (let character of characters)
    {
        const button = document.createElement("button");
        container.append(button);

        button.className = "special-character-button";
        button.textContent = character;

        button.addEventListener("mousedown", (event) => {
            event.preventDefault();
        });
        button.addEventListener("click", () => {
            const activeElement = document.activeElement;

            if (activeElement.tagName == "INPUT")
            {
                const value = activeElement.value;
                const start = activeElement.selectionStart;
                const end = activeElement.selectionEnd;
                const newCaretPosition = start + character.length;

                activeElement.value = value.slice(0, start) + character + value.slice(end);
                activeElement.selectionStart = newCaretPosition;
                activeElement.selectionEnd = newCaretPosition;
                activeElement.dispatchEvent(inputEvent);
            }
        });
    }
}

function removeMacrons(text)
{
    return text.replace("ā", "a").replace("ē", "e").replace("ī", "i").replace("ō", "o").replace("ū", "u");
}

addTableSelectOptions(tables);
// createInputTable(tables[currentTable], mainElement);
// createSpecialCharacterButtons(specialCharacters, specialCharacterButtonsContainer);