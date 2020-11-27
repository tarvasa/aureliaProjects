import { StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { App } from '../../src/app';

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
/*
  it('should click', done => {
    component.manuallyHandleLifecycle().create(bootstrap)
    .then(() => {
      const formElement = document.querySelector('.addbutton');
      document.querySelector('#todo-description').value= 'seminaari';
      formElement.click();
    })
    .then(() => {
      const listElements = document.querySelectorAll('.item-text');
      expect(listElements[3].innerHTML.trim()).toBe('seminaari');
      done();
    }).catch(e => {
      console.log(e.toString());
    });*/
    /* component.create(bootstrap).then(() => {
      //component.manuallyHandleLifecycle().create(bootstrap)
      const formElement = document.querySelector('.addbutton');
      document.querySelector('#todo-description').value= 'seminaari';
      formElement.click();
      const listElements = document.querySelectorAll('.item-text');
      expect(listElements[3].innerHTML.trim()).toBe('seminaari');
      done();
    }).catch(e => {
      console.log(e.toString());
    }); 
  })*/

  /*it('should add a todo', done => {
    //let app = new App();
    //app.addTodo();
    console.log(JSON.stringify(component));
    /* component.create(bootstrap).then(() => {
      console.log(Object.keys(component));
      let todoDescription = 'Item 4';
      let addItem = component.addTodo();
      //todos.addTodo();
      //expect(functions.addTodo).toBeDefined();
      //todos.addTodo();
      addItem();
      expect(todos.length).toBe(3);
      done();
    }).catch(e => {
      console.log(e.toString());
    });  
  })*/

 /* it('should delete todo', done => {
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
