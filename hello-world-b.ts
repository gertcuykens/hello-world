//////////////////////
// ES6 POLYMORPHISM //
//////////////////////

import HelloWorldA from "hello-world-a"

class HelloWorldB extends HelloWorldA {
  constructor() {
    super()
  }
  connectedCallback() {
    super.connectedCallback()
  }
}

customElements.define('hello-world-b', HelloWorldB)
