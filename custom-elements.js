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
            this.ariaChecked = (this.checked)? "true":"false";
        }

        this.addEventListener("click", () => {
            this.checked = !this.checked;
            this.dispatchEvent(new Event("input", {bubbles:true}));
        });
        this.addEventListener("keydown", (event) => {
            if (event.key == " " || event.key == "Enter")
            {
                event.preventDefault();
                this.checked = !this.checked;
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
            this.ariaChecked = (this.checked)? "true":"false";
            this._internals.setFormValue((this.checked)? "on":null);
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

class CustomMenu extends HTMLElement
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

        if (!this.innerHTML)
        {
            this.innerHTML = `<custom-menu-icon></custom-menu-icon>
            <nav id="menu-content">
                <a href="/" class="menu-item">Home</a>
                <a href="/flashcards" class="menu-item">Flashcards</a>
                <a href="/tables" class="menu-item">Tables</a>
                <a href="/dates" class="menu-item">Dates</a>
                <a href="/paradigms" class="menu-item">Paradigms</a>
                <a href="/numbers" class="menu-item">Numbers</a>
            </nav>`;
        }

        if (!this.hasAttribute("role"))
        {
            this.role = "menu";
        }
    }

    static get observedAttributes()
    {
        return ["open"];
    }

    get open()
    {
        return this.hasAttribute("open");
    }

    set open(value)
    {
        if (value)
        {
            this.setAttribute("open", "");
        }
        else
        {
            this.removeAttribute("open");
        }
    }
}

class CustomMenuIcon extends HTMLElement
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
        this.initialized = true;

        this.innerHTML = `<span></span><span></span><span></span>`;

        if (!this.hasAttribute("role"))
        {
            this.role = "button";
        }
        if (!this.hasAttribute("tabindex"))
        {
            this.tabIndex = 0;
        }
        if (!this.hasAttribute("aria-haspopup"))
        {
            this.ariaHasPopup = "menu";
        }
        if (!this.hasAttribute("aria-expanded"))
        {
            this.ariaExpanded = false;
        }
        if (!this.hasAttribute("aria-controls"))
        {
            this.ariaControlsElements = [this.parentElement];
        }

        document.addEventListener("click", (event) => {
            const target = event.target;
            if (target == this || this.contains(target))
            {
                this.ariaExpanded = !this.ariaExpanded;
                this.parentElement.open = !this.parentElement.open;
            }
            else if (!(target == this.parentElement || this.parentElement.contains(target)))
            {
                this.ariaExpanded = false;
                this.parentElement.open = false;
            }
        });
    }
}

customElements.define("custom-toggle", CustomToggle);
customElements.define("custom-menu", CustomMenu);
customElements.define("custom-menu-icon", CustomMenuIcon);