class HelloWorldES extends HTMLElement {
  _hello:string = "Hello World"                                                                                      
  constructor() {                                                                                                            
    super()
    const l: HTMLLinkElement = document.querySelector('link[rel="import"]')                                                                     
    if(l != null) {return}
    const t = l.import.querySelector('template') 
    if(t != null) {return}                                                                           
    const instance = t.content.cloneNode(true)                                                                      
    const shadowRoot = this.attachShadow({ mode: 'open' })                                                                     
    shadowRoot.appendChild(instance)                                                                                         
  }                                                                                                                          
}                                                                                                                            
customElements.define('hello-world-es', HelloWorldES)
