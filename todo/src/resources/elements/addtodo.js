import {bindable, inject} from 'aurelia-framework';

export class AddTodo {
 /*constructor() {
    this.todos = [];
    this.todoDescription = '';
    
  }*/

 @bindable todos;

 addTodo() {
  if(this.todoDescription) {
    this.todos.push({
      title: this.todoDescription,
      done: false
    });
    this.todoDescription = '';
  }
}

 /* addTodo() {
    if(this.todoDescription) {
      this.todos.push({
        title: this.todoDescription,
        done: false
      });
      this.todoDescription = '';
    }
  }*/

  /*addTodo() {
    if (this.todoDescription) {
      this.todos.push({
        title: this.todoDescription,
        done: false
      });
      this.todoDescription = '';
    }
  }*/

}

