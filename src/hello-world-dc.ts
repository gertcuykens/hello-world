import { customElement, property, query, queryAll, observe } from 'tmp/decorators.js';

@customElement('hello-world-dc')
class HelloWorldDC extends Polymer.Element {
  //reuse template hello-world
  static get is() {
    return 'hello-world';
  }

  @property({ notify: true })
  foo: number = 42;

  @property({ notify: true })
  bar: string = 'yes';

  @query('h1')
  header: HTMLHeadingElement;

  @queryAll('input')
  allInputs: HTMLInputElement[];

  @observe('foo')
  private _fooChanged(newValue: number) {
    console.log(`foo is now: ${newValue}`);
  }

  @observe(['foo', 'bar'])
  private _fooBarChanged(newFoo: number, newBar: string) {
    console.log(`foo is now: ${newFoo}, bar is now ${newBar}`);
  }

}