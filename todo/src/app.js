
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

  addTodo() {
    if(this.todoDescription) {
      this.todos.push({
        title: this.todoDescription,
        done: false
      });
      this.todoDescription = '';
    }
  }
  
}
