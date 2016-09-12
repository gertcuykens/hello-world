# hello-world

Polymer Hello World element.

## Dependencies

[PolymerCli](https://github.com/Polymer/polymer-cli)

[Bower](https://bower.io)

[Babel](https://babeljs.io)

[Typings](https://github.com/typings/typings)

## Install

    npm install -g polymer-cli
    npm install -g babel-cli
    npm install -g babel-preset-es2015
    npm install -g eslint
    npm install -g bower
    bower install

## Lint

    eslint src
    polymer lint --input hello-world.html

## Build

    babel src -s -o bundle.js

## Run

    polymer serve

hello-world [documentation](http://localhost:8080/components/hello-world/)

hello-world [test](http://localhost:8080/components/hello-world/test/index.html)

## Typings

    npm install -g typings
    typings install dt~mocha --global --save
    typings install dt~polymer --global --save
 