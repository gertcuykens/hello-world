/// <amd-module name="hello-world-a"/>

/////////////////////////
// ES6 WITHOUT POLYMER //
/////////////////////////

export default class HelloWorldA extends HTMLElement {
  _hello: string = "Hello World"
  constructor() {
    super()
    const template = document.createElement('template')
    template.innerHTML = `
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          border: 1px solid red;
          margin-top: 10px;
          padding: 0px 5px;
        }
      </style>
      <p>Test <slot></slot></p>
    `
    if (!HTMLElement.prototype.attachShadow) ShadyCSS.prepareTemplate(template, 'hello-world-b');
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(template.content.cloneNode(true))
  }
  connectedCallback() {
    if (!HTMLElement.prototype.attachShadow) { ShadyCSS.applyStyle(this) }
  }
  disconnectedCallback() { }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) { }
  adoptedCallback() { }
}

// const l = document.querySelector('link[rel="import"]') as HTMLLinkElement
// if (l.import == null) return;
// const t = l.import.querySelector('template')
// if (t == null) return;
// const c = t.content.cloneNode(true)