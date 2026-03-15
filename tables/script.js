const tableSelectElement = document.getElementById("table-select");
const orderSelectElement = document.getElementById("order-select");
const useMacronsElement = document.getElementById("use-macrons");
const useHintsElement = document.getElementById("use-hints");
const useKeyboardNavigationElement = document.getElementById("use-keyboard-navigation");
const mainInputsElement = document.getElementById("main-inputs-container");
const tableElement = document.getElementById("table");
const macronCharacterButtonsElement = document.getElementById("macron-character-buttons-container");

let currentTable = {};

function addTableSelectOptions()
{
    Object.keys(tables).forEach((tableName) => {
        const option = document.createElement("option");
        tableSelectElement.append(option);

        option.value = tableName;
        option.textContent = tableName;
    });
}

function createInputTable()
{
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
            const tableDataElement = document.createElement("td");
            tableRowElement.append(tableDataElement);
            
            const inputElement = document.createElement("input");
            tableDataElement.append(inputElement);

            inputElement.type = "text";
            inputElement.name = "input";
            inputElement.spellcheck = false;
            inputElement.autocomplete = "off";
            inputElement.className = "table-input";
            inputElement.dataset.row = rowIndex;
            inputElement.dataset.column = columnIndex;

            const currentInputAnswer = currentTable["data"][rowIndex][columnIndex];

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
        }
    }
}

function removeMacrons(text)
{
    return text.replaceAll("ā", "a").replaceAll("ē", "e").replaceAll("ī", "i").replaceAll("ō", "o").replaceAll("ū", "u").replaceAll("Ā", "A").replaceAll("Ē", "E").replaceAll("Ī", "I").replaceAll("Ō", "O").replaceAll("Ū", "U");
}

function initialize()
{
    mainInputsElement.style.display = "flex";

    useMacronsElement.addEventListener("input", () => {
        for (let row = 0; row < currentTable["rows"].length; row++)
        {
            for (let column = 0; column < currentTable["columns"].length; column++)
            {
                document.querySelector(`[data-row="${row}"][data-column="${column}"]`).dispatchEvent(new Event("input"));
            }
        }

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
                const currentAnswer = currentTable["data"][row][column];
                currentInputElement.placeholder = (useHintsElement.checked)? ((useMacronsElement.checked)? currentAnswer:removeMacrons(currentAnswer)):"";
            }
        }
    });

    tableSelectElement.addEventListener("input", () => {
        currentTable = tables[tableSelectElement.value];

        createInputTable();

        if (useHintsElement.checked)
        {
            useHintsElement.dispatchEvent(new Event("input"));
        }
    });

    tableSelectElement.dispatchEvent(new Event("input"));

    if (useMacronsElement.checked)
    {
        useMacronsElement.dispatchEvent(new Event("input"));
    }
}

tableSelectElement.addEventListener("input", initialize, {once:true});

document.addEventListener("keydown", (event) => {
    const activeElement = document.activeElement;

    if (!activeElement.classList.contains("table-input"))
    {
        return;
    }

    const currentRow = parseInt(activeElement.dataset.row);
    const currentColumn = parseInt(activeElement.dataset.column);
    
    let nextRow = currentRow;
    let nextColumn = currentColumn;
    let nextCaretPosition = null;

    switch (event.key)
    {
        case "ArrowLeft":
            if (!useKeyboardNavigationElement.checked)
            {
                break;
            }

            if (activeElement.selectionStart == 0)
            {
                nextColumn = (currentColumn == 0)? currentTable["columns"].length - 1:currentColumn - 1;
                nextCaretPosition = -1;
            }

            break;
        case "ArrowRight":
            if (!useKeyboardNavigationElement.checked)
            {
                break;
            }

            if (activeElement.selectionStart == activeElement.value.length)
            {
                nextColumn = (currentColumn == currentTable["columns"].length - 1)? 0:currentColumn + 1;
                nextCaretPosition = 0;
            }

            break;
        case "ArrowUp":
            if (!useKeyboardNavigationElement.checked)
            {
                break;
            }

            if (activeElement.selectionStart == 0)
            {
                nextRow = (currentRow == 0)? currentTable["rows"].length - 1:currentRow - 1;
                nextCaretPosition = -1;
            }

            break;
        case "ArrowDown":
            if (!useKeyboardNavigationElement.checked)
            {
                break;
            }

            if (activeElement.selectionStart == activeElement.value.length)
            {
                nextRow = (currentRow == currentTable["rows"].length - 1)? 0:currentRow + 1;
                nextCaretPosition = 0;
            }

            break;
        case "Enter":
            if (!useKeyboardNavigationElement.checked)
            {
                break;
            }

            if (orderSelectElement.value == "row")
            {
                nextColumn = currentColumn + 1;
                if (nextColumn == currentTable["columns"].length)
                {
                    nextRow = (currentRow == currentTable["rows"].length - 1)? 0:currentRow + 1;
                    nextColumn = 0;
                }
            }
            else
            {
                nextRow = currentRow + 1;
                if (nextRow == currentTable["rows"].length)
                {
                    nextRow = 0;
                    nextColumn = (currentColumn == currentTable["columns"].length - 1)? 0:currentColumn + 1;
                }
            }

            break;
        case "Backspace":
            if (!useKeyboardNavigationElement.checked || activeElement.selectionStart != 0)
            {
                break;
            }

            if (orderSelectElement.value == "row")
            {
                nextColumn = currentColumn - 1;
                if (nextColumn == -1)
                {
                    nextRow = (currentRow == 1)? currentTable["rows"].length - 1:currentRow - 1;
                    nextColumn = currentTable["columns"].length - 1;
                }
            }
            else
            {
                nextRow = currentRow - 1;
                if (nextRow == -1)
                {
                    nextRow = currentTable["rows"].length - 1;
                    nextColumn = (currentColumn == 1)? currentTable["columns"].length - 1:currentColumn - 1;
                }
            }
            nextCaretPosition = -1;

            break;
        case "Tab":
            if (orderSelectElement.value == "row")
            {
                break;
            }

            if (currentRow < currentTable["rows"].length - 1)
            {
                nextRow = currentRow + 1;
            }
            else if (currentColumn < currentTable["columns"].length - 1)
            {
                nextRow = 0;
                nextColumn = currentColumn + 1;
            }

            break;
    }

    if (nextRow == currentRow && nextColumn == currentColumn)
    {
        return;
    }

    event.preventDefault();

    const nextFocus = document.querySelector(`[data-row="${nextRow}"][data-column="${nextColumn}"]`);
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

Array.from(document.getElementsByClassName("macron-character-button")).forEach((button) => {
    const character = button.textContent;

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
            activeElement.dispatchEvent(new Event("input"));
        }
    });
});

addTableSelectOptions();