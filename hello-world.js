Polymer({
  is: 'hello-world',
  properties: {
    /**
     * `_hello` private variable.
     *
     * @type string
     */
    _hello: {
      type: String,
      value: "Hello World"
    }
  },
  ready: function(){
    console.log('Ready2')
  }
})
