class CustomToggle extends HTMLElement
{
    constructor()
    {
        super();
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
            this.setAttribute("role", "switch");
        }
        if (!this.hasAttribute("tabindex"))
        {
            this.setAttribute("tabindex", "0");
        }
        if (!this.hasAttribute("aria-checked"))
        {
            this.setAttribute("aria-checked", (this.hasAttribute("checked"))? "true":"false");
        }

        this.addEventListener("click", () => {
            this.toggleAttribute("checked")
        });
        this.addEventListener("keydown", (event) => {
            if (event.key == " " || event.key == "Enter")
            {
                event.preventDefault();
                this.toggleAttribute("checked");
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
            this.setAttribute("aria-checked", (this.hasAttribute("checked"))? "true":"false");
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

customElements.define("custom-toggle", CustomToggle);