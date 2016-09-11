# hello-world

Polymer Hello World element.

## Dependencies

[PolymerCli](https://www.polymer-project.org/1.0/docs/tools/polymer-cli)

[Bower](https://bower.io)

[Babel](https://babeljs.io)

## Install

    npm install -g polymer-cli
    npm install -g babel-cli
    npm install -g babel-preset-es2015
    npm install -g eslint
    npm install -g bower
    bower install

## Lint

    eslint hello-world.js
    polymer lint --input hello-world.html

## Build

    babel src/hello-world.js -s -o bundle.js

## Run

    polymer serve

hello-world [documentation](http://localhost:8080/components/hello-world/)

hello-world [test](http://localhost:8080/components/hello-world/test/index.html)
 