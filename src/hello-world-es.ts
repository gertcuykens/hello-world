class HelloWorldES extends HTMLElement {                                                                                       
  constructor() {                                                                                                            
    super()
    const l = document.querySelector('link[rel="import"]')                                                                     
    if(!l) {return}
    const t = l.import.querySelector('template')                                                                            
    const instance = t.content.cloneNode(true)                                                                      
    const shadowRoot = this.attachShadow({ mode: 'open' })                                                                     
    shadowRoot.appendChild(instance)                                                                                         
  }                                                                                                                          
}                                                                                                                            
customElements.define('hello-world-es', HelloWorldES)
