import { exportAllDeclaration } from '../../../../../AppData/Local/Microsoft/TypeScript/4.0/node_modules/@babel/types/lib/index';
import { italic } from '../../../../../AppData/Local/Microsoft/TypeScript/4.0/node_modules/chalk/index';
import { App } from '../../src/app';

describe('the app', () => {
  it('says hello', () => {
    expect(new App().message).toBe('Hello World!');
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
