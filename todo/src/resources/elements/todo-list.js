import {bindable} from 'aurelia-framework';

export class TodoList {
  @bindable todos;

  valueChanged(newValue, oldValue) {
    //
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

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
