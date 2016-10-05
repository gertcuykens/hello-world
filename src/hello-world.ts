class HelloWorld extends Polymer.Element {
    _hello:string = 'Hello World'
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
