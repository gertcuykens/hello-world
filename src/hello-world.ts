class HelloWorld extends Polymer.Element {
    static get is() {
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
