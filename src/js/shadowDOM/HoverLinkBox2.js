export default class HoverLinkBox2 extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        const originalText = document.createElement("span");
        originalText.setAttribute("class", "originalText");
        originalText.setAttribute("tabindex", "0");
        originalText.textContent = this.textContent;

        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");
        
        const title = document.createElement("span");
        title.setAttribute("class", "wrapTitle");

        const text = document.createElement("p");
        text.setAttribute("class", "text");

        const href = document.createElement("a");
        href.setAttribute("class", "link");
        href.setAttribute("target", "_blank");
        href.href = this.getAttribute("href") + originalText.textContent;
        title.textContent = originalText.textContent;

        text.textContent = this.hasAttribute("text") ? this.getAttribute("text"): "";

        href.textContent = this.hasAttribute("href") ? this.getAttribute("href"): "";
        href.textContent = "詳しく見る";

        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "/src/css/shadowDOM/pseudo_classes_host.css");
        shadow.appendChild(linkElem);
        shadow.appendChild(originalText);
        originalText.appendChild(wrapper);
        wrapper.append(title);
        wrapper.append(text);
        wrapper.append(href);
    }
}
customElements.define("hover-link-box2", HoverLinkBox2);