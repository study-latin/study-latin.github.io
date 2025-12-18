const mainElement = document.getElementById("main");
const tableSelectElement = document.getElementById("table-select");
const orderSelectElement = document.getElementById("order-select");
const useMacronsElement = document.getElementById("use-macrons");
const useHintsElement = document.getElementById("use-hints");
const inputTableElement = document.getElementById("input-table");

const specialCharacters = ["ā", "ē", "ī", "ō", "ū"];

const inputEvent = new Event("input", {bubbles:true});

let currentTable = "";
let order = orderSelectElement.value;

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
                if ((useMacronsElement.checked && inputValue == table[rowIndex + 1][columnIndex + 1]) ||
                    (!useMacronsElement.checked && removeMacrons(inputValue) == removeMacrons(table[rowIndex + 1][columnIndex + 1])))
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
    let specialCharacterButtonsContainer = document.getElementById("special-character-buttons-container");
    
    if (!specialCharacterButtonsContainer)
    {
        specialCharacterButtonsContainer = document.createElement("div");
        container.append(specialCharacterButtonsContainer);
        
        specialCharacterButtonsContainer.id = "special-character-buttons-container";
    }
    
    if (specialCharacterButtonsContainer.children.length == 0)
    {
        for (let character of characters)
        {
            const button = document.createElement("button");
            specialCharacterButtonsContainer.append(button);

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
}

function removeMacrons(text)
{
    return text.replaceAll("ā", "a").replaceAll("ē", "e").replaceAll("ī", "i").replaceAll("ō", "o").replaceAll("ū", "u").replaceAll("Ā", "A").replaceAll("Ē", "E").replaceAll("Ī", "I").replaceAll("Ō", "O").replaceAll("Ū", "U");
}

tableSelectElement.addEventListener("input", () => {
    currentTable = tableSelectElement.value;

    createInputTable(tables[currentTable], mainElement);
    createSpecialCharacterButtons(specialCharacters, mainElement);

    if (useHintsElement.checked)
    {
        useHintsElement.dispatchEvent(inputEvent);
    }
});

orderSelectElement.addEventListener("input", () => {
    order = orderSelectElement.value;
});

useMacronsElement.addEventListener("input", () => {
    if (currentTable)
    {
        for (let row = 1; row < tables[currentTable].length; row++)
        {
            for (let column = 1; column < tables[currentTable][0].length; column++)
            {
                document.querySelector(`[data-row="${row}"][data-column="${column}"]`).dispatchEvent(inputEvent);
            }
        }
        useHintsElement.dispatchEvent(inputEvent);
    }
});

useHintsElement.addEventListener("input", () => {
    if (currentTable)
    {
        for (let row = 1; row < tables[currentTable].length; row++)
        {
            for (let column = 1; column < tables[currentTable][0].length; column++)
            {
                const currentInputElement = document.querySelector(`[data-row="${row}"][data-column="${column}"]`);
                const placeholder = (useHintsElement.checked)? ((useMacronsElement.checked)? tables[currentTable][row][column]:removeMacrons(tables[currentTable][row][column])):"";
                currentInputElement.placeholder = placeholder;
            }
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
        else if (event.key == "Backspace" &&
                (activeElement.value == "" ||
                    (activeElement.selectionStart == activeElement.selectionEnd && activeElement.selectionStart == 0)))
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
        else if (event.key == "Tab")
        {
            if (order == "column")
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

addTableSelectOptions(tables);