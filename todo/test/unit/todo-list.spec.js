import { StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';

describe('TodoList', () => {
  let component;
  let todos = [
    { title: 'Item 1', done: false },
    { title: 'Item 2', done: false },
    { title: 'Item 3', done: true }
  ];

  beforeEach(() => {
    component = StageComponent
    .withResources('../../src/resources/elements/todo-list')
    .inView('<todo-list todos.bind="todos"></todo-list>')
    .boundTo({ todos })
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
      const checkboxes = document.querySelectorAll('input');
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

  afterEach(() => {
    component.dispose();
  });
});
