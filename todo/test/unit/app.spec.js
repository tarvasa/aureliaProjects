import { App } from '../../src/app';

describe('the app', () => {
  it('shoudl welcome user to the page', () => {
    expect(new App().heading).toBe('Welcome to TodoList');
  });
});

/*import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';
import {PLATFORM} from 'aurelia-pal';

describe('Stage App Component', () => {
  let component;

  beforeEach(() => {
    component = StageComponent
      .withResources(PLATFORM.moduleName('app'))
      .inView('<app></app>');
  });

  afterEach(() => component.dispose());

  it('should render message', done => {
    component.create(bootstrap).then(() => {
      const view = component.element;
      //expect(view.textContent.trim()).toBe('Hello World!');
      expect(view.message).toBe('Hello World!');
      done();
    }).catch(e => {
      fail(e);
      done();
    });
  });
});
*/
