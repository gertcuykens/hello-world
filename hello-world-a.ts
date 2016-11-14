/// <amd-module name="hello-world-a"/>

/////////////////////////
// ES6 WITHOUT POLYMER //
/////////////////////////

export default class HelloWorldA extends HTMLElement {
  _hello: string = "Hello World"
  constructor() {
    super()
    // const l = document.querySelector('link[rel="import"]') as HTMLLinkElement
    // if (l.import == null) return;
    // const t = l.import.querySelector('template')
    // if (t == null) return;
    // const c = t.content.cloneNode(true)
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = `
      <style>
        :host, hello-world-b {
          display: block;
          box-sizing: border-box;
          border: 1px solid red;
          margin-top: 10px;
          padding: 0px 5px;
        }
      </style>
      <p>Test <slot></slot></p>
    `
  }
  connectedCallback() { }
  disconnectedCallback() { }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) { }
  adoptedCallback() { }
}
