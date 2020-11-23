import {bindable} from 'aurelia-framework';

export class App {
  constructor() {
    this.message = 'Hello World!';
    this.todos = [
      { title: 'Clean room', done: false },
      { title: 'Wash the dishes', done: true },
      { title: 'Take the garbage', done: false }
    ];
  }
}
