import {bindable, PLATFORM} from 'aurelia-framework';

export class App {
  constructor() {
    this.heading = 'Welcome to TodoList';
    this.todoDescription = '';
    this.todos = [
      { title: 'Clean room', done: false },
      { title: 'Wash the dishes', done: true },
      { title: 'Take the garbage', done: false }
    ];
    //this.todos = [];
  }

 /* configureRouter(config, router) {
    config.title = 'Todos';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: '',  moduleId: PLATFORM.moduleName('./resources/elements/addtodo'), name:'addtodo' }
    ]);

    this.router = router;
  }*/
  /*addTodo() {
    if(this.todoDescription) {
      this.todos.push({
        title: this.todoDescription,
        done: false
      });
      this.todoDescription = '';
    }
  }*/
  
}
