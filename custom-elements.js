class CustomToggle extends HTMLElement
{
    static formAssociated = true;

    constructor()
    {
        super();

        this._internals = this.attachInternals();
    }

    connectedCallback()
    {
        if (this._initialized)
        {
            return;
        }
        this._initialized = true;

        if (!this.hasAttribute("role"))
        {
            this.role = "switch";
        }
        if (!this.hasAttribute("tabindex"))
        {
            this.tabIndex = 0;
        }
        if (!this.hasAttribute("aria-checked"))
        {
            this.ariaChecked = (this.hasAttribute("checked"))? "true":"false";
        }

        this.addEventListener("click", () => {
            this.toggleAttribute("checked");
            this.dispatchEvent(new Event("input", {bubbles:true}));
        });
        this.addEventListener("keydown", (event) => {
            if (event.key == " " || event.key == "Enter")
            {
                event.preventDefault();
                this.toggleAttribute("checked");
                this.dispatchEvent(new Event("input", {bubbles:true}));
            }
        });
    }

    static get observedAttributes()
    {
        return ["checked"];
    }

    attributeChangedCallback(name, oldValue, newValue)
    {
        if (name == "checked")
        {
            const checked = this.hasAttribute("checked");
            this.ariaChecked = (checked)? "true":"false";
            this._internals.setFormValue((checked)? "on":null);
        }
    }

    get checked()
    {
        return this.hasAttribute("checked");
    }

    set checked(value)
    {
        if (value)
        {
            this.setAttribute("checked", "");
        }
        else
        {
            this.removeAttribute("checked");
        }
    }
}

const menuElement = document.getElementById("menu");
const menuIconElement = document.getElementById("menu-icon");
let menuOpen = false;

document.addEventListener("click", (event) => {
    const target = event.target;

    if (target == menuIconElement || menuIconElement.contains(target))
    {
        menuElement.toggleAttribute("open");
    }
    else if (!(target == menuElement || menuElement.contains(target)))
    {
        menuElement.removeAttribute("open");
    }
});

customElements.define("custom-toggle", CustomToggle);