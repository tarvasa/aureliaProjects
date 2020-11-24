import {bindable} from 'aurelia-framework';

export class TodoList {
  @bindable todos;

  valueChanged(newValue, oldValue) {
    //
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
