export default class PartTest extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});

        const head = document.createElement("span");
        const text = document.createElement("span");

        head.setAttribute("part", "part-head");
        text.setAttribute("part", "part-text");

        head.textContent = this.getAttribute("data-head");
        text.textContent = this.textContent;

        shadowRoot.appendChild(head);
        shadowRoot.appendChild(text);
    }
}
customElements.define("part-custom-tag", PartTest);