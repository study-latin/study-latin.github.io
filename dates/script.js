const yearsElement = document.getElementById("years");
const toAucElement = document.getElementById("to-auc");
const fromAucElement = document.getElementById("from-auc");
const daysElement = document.getElementById("days");
const toLatinElement = document.getElementById("to-latin");
const fromLatinElement = document.getElementById("from-latin");
const promptElement = document.getElementById("prompt");
const inputElement = document.getElementById("input");

function newPrompt()
{
    let prompt = "";
    
    if (yearsElement.checked)
    {

    }
}

yearsElement.addEventListener("input", () => {
    const yearsElementChecked = yearsElement.checked;

    toAucElement.checked = yearsElementChecked;
    fromAucElement.checked = yearsElementChecked;

    if (!yearsElement.checked && !daysElement.checked)
    {
        daysElement.checked = true;
        toLatinElement.checked = true;
        fromLatinElement.checked = true;
    }
});

toAucElement.addEventListener("input", () => {
    if (toAucElement.checked)
    {
        yearsElement.checked = true;
    }
    else if (!fromAucElement.checked)
    {
        yearsElement.checked = false;

        if (!daysElement.checked)
        {
            daysElement.checked = true;
            toLatinElement.checked = true;
            fromLatinElement.checked = true;
        }
    }
});

fromAucElement.addEventListener("input", () => {
    if (fromAucElement.checked)
    {
        yearsElement.checked = true;
    }
    else if (!toAucElement.checked)
    {
        yearsElement.checked = false;

        if (!daysElement.checked)
        {
            daysElement.checked = true;
            toLatinElement.checked = true;
            fromLatinElement.checked = true;
        }
    }
});

daysElement.addEventListener("input", () => {
    const daysElementChecked = daysElement.checked;

    toLatinElement.checked = daysElementChecked;
    fromLatinElement.checked = daysElementChecked

    if (!daysElement.checked && !yearsElement.checked)
    {
        yearsElement.checked = true;
        toAucElement.checked = true;
        fromAucElement.checked = true;
    }
});

toLatinElement.addEventListener("input", () => {
    if (toLatinElement.checked)
    {
        daysElement.checked = true;
    }
    else if (!fromLatinElement.checked)
    {
        daysElement.checked = false;

        if (!yearsElement.checked)
        {
            yearsElement.checked = true;
            toAucElement.checked = true;
            fromAucElement.checked = true;
        }
    }
});

fromLatinElement.addEventListener("input", () => {
    if (fromLatinElement.checked)
    {
        daysElement.checked = true;
    }
    else if (!toLatinElement.checked)
    {
        daysElement.checked = false;

        if (!yearsElement.checked)
        {
            yearsElement.checked = true;
            toAucElement.checked = true;
            fromAucElement.checked = true;
        }
    }
});

newPrompt();