class HelloWorld extends Polymer.Element {
  _hello: string = 'Hello World'
  static get is() {
    const test: string = 'test intelli'
    test.toUpperCase()
    return 'hello-world';
  }
  static get config() {
    return {};
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
  }
}
customElements.define(HelloWorld.is, HelloWorld);

class HelloWorldES extends HTMLElement {
  _hello: string = "Hello World"
  constructor() {
    super()
    const l = document.querySelector('link[rel="import"]') as HTMLLinkElement
    if (l.import == null) return;
    const t = l.import.querySelector('template')
    if (t == null) return;
    const instance = t.content.cloneNode(true)
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(instance)
  }
  connectedCallback() { }
  disconnectedCallback() { }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) { }
  adoptedCallback() { }
}

class HelloWorldES2 extends HelloWorldES {
  constructor() {
    super()
  }
  connectedCallback() {
    super.connectedCallback()
  }
}
customElements.define('hello-world-es', HelloWorldES2)
