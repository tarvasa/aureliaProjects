
export class App {
  constructor() {
    this.heading = 'Welcome to TodoList';
    this.todoDescription = '';
    this.todos = [
      { title: 'Clean room', done: false },
      { title: 'Wash the dishes', done: true },
      { title: 'Take the garbage', done: false }
    ];
  }  
}
