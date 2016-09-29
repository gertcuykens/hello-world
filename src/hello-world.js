class HelloWorld extends HTMLElement {                                                                                       
  constructor() {                                                                                                            
    super()                                                                                                                  
    let l = document.querySelector('link[rel="import"]')                                                                     
    var t = l.import.querySelector('template')                                                                               
    const instance = t.content.cloneNode(true)                                                                               
    let shadowRoot = this.attachShadow({ mode: 'open' })                                                                     
    shadowRoot.appendChild(instance)                                                                                         
  }                                                                                                                          
}                                                                                                                            
customElements.define('hello-world', HelloWorld)