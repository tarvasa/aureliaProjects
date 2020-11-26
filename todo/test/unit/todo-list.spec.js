import { StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';

describe('TodoList', () => {
  let component;
  let todos = [
    { title: 'Item 1', done: false },
    { title: 'Item 2', done: false },
    { title: 'Item 3', done: true }
  ];
  //const functions = require('../../src/resources/elements/todo-list.js');

  beforeEach(() => {
    component = StageComponent
    .withResources('../../src/resources/elements/todo-list')
    .inView('<todo-list todos.bind="todos"></todo-list>')
    .boundTo({ todos })
  })
/*
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
*/
  //testaa, että add-button renderöityy
  it('should render Add Todo button/form', done => {
    component.create(bootstrap).then(() => {
      const formElement = document.querySelector('.addbutton');
      expect(formElement.innerHTML).toBe('Add Todo');
      done();
    }).catch(e => {
      console.log(e.toString());
    });
  })

  it('should render the todos', done => {
    component.create(bootstrap).then(() => {
      const listElements = document.querySelectorAll('.item-text');
      expect(listElements[0].innerHTML.trim()).toBe('Item 1');
      done();
    }).catch(e => {
      console.log(e.toString());
    });
  })

  it('should check checkboxes for completed todos', done => {
    component.create(bootstrap).then(() => {
      const checkboxes = document.querySelectorAll('.checkbox');
      expect(checkboxes[2].checked).toBe(true);
      done();
    }).catch(e => {
      console.log(e.toString());
    });
  })

  it('should put a line through completed todos', done => {
    component.create(bootstrap).then(() => {
      const listElements = document.querySelectorAll('.item-text');
      expect(listElements[2].style.textDecoration).toBe('line-through');
      done();
    }).catch(e => {
      console.log(e.toString());
    });
  })

  it('should render Remove Todo button', done => {
    component.create(bootstrap).then(() => {
      const listElements = document.querySelectorAll('.removebutton');
      expect(listElements[2].innerHTML).toBe('Remove');
      done();
    }).catch(e => {
      console.log(e.toString());
    });
  })

 /* it('should add a todo', done => {
    component.create(bootstrap).then(() => {
      let todoDescription = 'Item 4';
      //todos.addTodo();
      expect(functions.addTodo).toBeDefined();
      todos.addTodo();
      expect(todos.length).toBe(3);
      //expect(todos.length).toBe(3);
      done();
    }).catch(e => {
      console.log(e.toString());
    });
  })*/

 /* it('should delettodo', done => {
    component.create(bootstrap).then(() => {
      
      todos.removeTodo();
      expect(todos.length).toBe();
      done();
    }).catch(e => {
      console.log(e.toString());
    });
  })*/

  afterEach(() => {
    component.dispose();
  });
});
